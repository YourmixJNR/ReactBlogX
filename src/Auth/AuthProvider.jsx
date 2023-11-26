import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import AuthContext from "../Context/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          throw error;
        }
        setUser(data?.user ?? null);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching session:", error);
        setLoading(false);
      }
    };

    fetchSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    if (listener && typeof listener === "object" && listener.unsubscribe) {
      return () => listener.unsubscribe();
    }
  }, []);

  const checkAndRefreshToken = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      const { error } = await supabase.auth.api.refreshToken(refreshToken);

      if (error) {
        const { data, error } = await supabase.auth.api.refreshToken(refreshToken);

        if (data) {
          const newAccessToken = data.access_token;
          localStorage.setItem("accessToken", newAccessToken);
          supabase.auth.setSession(newAccessToken);
        } else {
          console.error("Error refreshing token:", error);
        }
      }
    }
  };

  const value = {
    signUp: async (credentials) => {
      try {
        const { data, error } = await supabase.auth.signUp(credentials);
        if (data && data.refresh_token) {
          // Store refresh token on sign-up
          localStorage.setItem("refreshToken", data.refresh_token);
        }
        return { data, error };
      } catch (error) {
        console.error(error);
      }
    },
    signIn: async (credentials) => {
      const { data, error } = await supabase.auth.signInWithPassword(credentials);
      if (data && data.refresh_token) {
        // Store refresh token on sign-in
        localStorage.setItem("refreshToken", data.refresh_token);
      }
      if (data) {
        // Refresh token after successful login
        checkAndRefreshToken();
      }
      return { data, error };
    },
    signOut: async () => {
      const { error } = await supabase.auth.signOut();
      // Clear refresh token on sign-out
      localStorage.removeItem("refreshToken");
      return { error };
    },
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;