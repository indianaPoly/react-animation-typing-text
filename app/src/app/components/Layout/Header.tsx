import { TypingText } from "react-animation-typing-text";

export const Header = () => {
  return (
    <div style={{ marginBottom: "32px", textAlign: "center" }}>
      <h1
        style={{
          fontSize: "42px",
          fontWeight: "700",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: "0 0 8px 0",
          letterSpacing: "-0.5px",
        }}
      >
        <TypingText
          text={"Typechat"}
          intervalSec={100}
          revealMotionType="none"
        />
      </h1>
      <div
        style={{
          color: "#888",
          fontSize: "16px",
          margin: 0,
          fontWeight: "400",
        }}
      >
        <TypingText
          text={"Beautiful typing animation effects"}
          intervalSec={100}
          revealMotionType="fade"
          fadeDuration={0.3}
          showCursor={true}
          cursorChar="|"
          shouldRepeat={true}
          shouldRepeatDelayTime={500}
        />
      </div>
    </div>
  );
};
