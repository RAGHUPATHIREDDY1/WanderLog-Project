import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";
import AuthForm from "../components/AuthForm";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await registerUser(email, password);

      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-page">
      <AuthForm
        title="Create Account"
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        buttonText="Signup"
        error={error}
      />

      <p className="switch-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;