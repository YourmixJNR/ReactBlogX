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

  const value = {
    signUp: async (credentials) => {
      try {
        const { data, error } = await supabase.auth.signUp(credentials);
        return { data, error };
      } catch (error) {
        console.log(error);
      }
    },
    signIn: async (credentials) => {
      const { data, error } = await supabase.auth.signInWithPassword(credentials);
      return { data, error };
    },
    signOut: async () => {
      const { error } = await supabase.auth.signOut();
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
