import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("123456");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(email, password);

      login(data.token);

      navigate("/explore");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <AuthForm
        title="Welcome Back"
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        buttonText="Login"
        error={error}
      />

      <p className="switch-link">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default Login;