import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import AuthContext from "../Context/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    const { data: initialSession, error } = supabase.auth.session();
    setUser(initialSession?.user ?? null);
    setLoading(false);
  
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );
  
    return () => {
      listener?.unsubscribe();
    };
  }, []);
  

  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
