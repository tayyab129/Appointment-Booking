import React, { useEffect, useState } from "react";
import { Route, Navigate } from "react-router-dom";
import { auth } from "../../firebase"; // Firebase auth
import { onAuthStateChanged } from "firebase/auth"; // Firebase onAuthStateChanged

// A wrapper for private routes that checks if the user is authenticated
const PrivateRoute = ({ element, ...rest }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state based on authentication status
    });

    return () => unsubscribe(); // Cleanup when the component is unmounted
  }, []);

  // While checking auth state, show loading state
  if (user === null) {
    return <div>Loading...</div>;
  }

  // If the user is authenticated, render the requested element (the route component)
  if (user) {
    return <Route {...rest} element={element} />;
  } else {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/login" replace />;
  }
};

export default PrivateRoute;
