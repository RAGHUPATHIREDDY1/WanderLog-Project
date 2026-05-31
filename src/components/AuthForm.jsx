import "./AuthForm.css";

function AuthForm({
  title,
  email,
  password,
  setEmail,
  setPassword,
  handleSubmit,
  buttonText,
  error,
}) {
  return (
    <div className="auth-card">
      <h1 className="logo">🌍 WanderLog</h1>

      <h2>{title}</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{buttonText}</button>
      </form>
    </div>
  );
}

export default AuthForm;