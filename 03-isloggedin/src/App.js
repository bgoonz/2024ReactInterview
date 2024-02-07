import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage for login state
    const storedLoginState = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(storedLoginState);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // or set to 'false'
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Welcome back! You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default App;
