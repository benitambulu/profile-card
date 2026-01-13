import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <img className="profile-img" src="/profile-img/img-1.png" alt="Profile" />
  );
}

function Body() {
  return (
    <main>
      <h1>Benita Mbulu</h1>
      <p>
        I’m a passionate frontend developer focused on building clean and
        user-friendly web experiences using HTML, CSS, JavaScript, and React.
      </p>

      <div className="box-container">
        <Box text="Frontend Dev" bgColor="#ffee0385" />
        <Box text="React Learner" bgColor="#0c4dff81" />
        <Box text="UI Design" bgColor="#54acff8c" />
        <Box text="JavaScript" bgColor="#fb8600a4" />
        <Box text="GitHub" bgColor="#c506ac79" />
        <Box text="Growth Mode" bgColor="#90f4e3a1" />
      </div>
    </main>
  );
}

function Box({ text, bgColor }) {
  return (
    <div className="box" style={{ backgroundColor: bgColor }}>
      <p>{text}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
