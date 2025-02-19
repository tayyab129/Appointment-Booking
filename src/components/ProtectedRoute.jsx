import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../../supabase";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      // Get the current session, which contains the user
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    fetchSession();

    // Listen for auth state changes (login/logout)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );
  });

  if (loading) {
    return (
      <div className="font-bold text-2xl text-gray-600">
        Loading, please wait...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signup" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
