import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId = "YOUR_GOOGLE_CLIENT_ID";

export default function Login({ setUser }) {
  const onSuccess = (res) => {
    setUser({
      name: res.profileObj.name,
      email: res.profileObj.email,
      avatar: res.profileObj.imageUrl
    });
  };

  const onFailure = (err) => console.error(err);

  return (
    <div className="login-screen">
      <h1 className="fade-in">Привет, Yerdaulet AI<br/>Hello, Yerdaulet AI</h1>
      <GoogleLogin
        clientId={clientId}
        buttonText="Войти через Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
