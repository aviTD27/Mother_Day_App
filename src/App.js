import React from "react";

const App = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffe3ec, #ffd1dc)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "16px",
          maxWidth: "650px",
          width: "100%",
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
        }}
      >
        <h1
          style={{
            fontSize: "46px",
            color: "#d6336c",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Happy Mother's Day ❤️
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.8",
            color: "#444",
            marginBottom: "35px",
          }}
        >
          {/* Dear Mom, */}
          <br />
          <br />
          Today is a day dedicated to celebrating you — your love, your
          strength, your kindness, and the countless sacrifices you’ve made.
          <br />
          <br />
          Thank you for being my guide, my support, and my biggest inspiration.
          Everything I am today is because of you.
          <br />
          <br />
          You deserve all the love in the world, not just today, but every day.
        </p>

        <h3
          style={{
            fontSize: "22px",
            color: "#555",
            marginTop: "10px",
            fontWeight: "normal",
          }}
        >
          — With love, Avi 💐
        </h3>
      </div>
    </div>
  );
};

export default App;
