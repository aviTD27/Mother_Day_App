import React from "react";

const App = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff5f7",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "40px", color: "#d6336c" }}>
        Happy Mother's Day ❤️
      </h1>

      <img
        src="https://i.imgur.com/9YjvZ4F.png"
        alt="Mother's Day"
        style={{ width: "220px", margin: "20px 0" }}
      />

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <p style={{ fontSize: "20px", lineHeight: "1.6" }}>
          Dear Mom,
          <br />
          <br />
          Today is your special day, and I want to take a moment to tell you how
          much you mean to me. Your love, strength, and kindness have shaped me
          into who I am today.
          <br />
          <br />
          Thank you for every sacrifice, every lesson, and every moment of love.
          You are truly the best mom in the world.
        </p>

        <h3 style={{ marginTop: "30px", color: "#555" }}>— With love, Avi 💐</h3>
      </div>
    </div>
  );
};

export default App;
