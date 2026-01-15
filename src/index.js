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
        <Box text="Html & Css" bgColor="#ffee036c" />
        <Box text="React" bgColor="#0c4dff67" />
        <Box text="UI Design" bgColor="#54acff5e" />
        <Box text="JavaScript" bgColor="#fb860073" />
        <Box text="GitHub" bgColor="#c506ac6c" />
        <Box text="Git" bgColor="#90f4e360" />
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
