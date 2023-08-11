import axios from "axios";
import { useEffect } from "react";
const AuthPage = (props) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    const data = await axios
      .post("/api/server", {
        username: value,
      })
      .then((response) => {
        localStorage.setItem("username", JSON.stringify(value));
        props.onAuth({ ...response.data, secret: value });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <input
            className="auth-input"
            placeholder="Username"
            name="username"
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
      <div
        style={{
          color: "white",
          position: "absolute",
          bottom: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p>Designed and developed by Justice Agbonma</p>
      </div>
    </div>
  );
};

export default AuthPage;
