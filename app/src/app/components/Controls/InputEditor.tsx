import { Dispatch, SetStateAction } from "react";
import { useTypingStore } from "src/app/store/useTypingStore";

export const InputEditor = () => {
  const { inputText, setInputText, setSubmittedText } = useTypingStore();

  const handleTyping = () => {
    setSubmittedText(inputText);
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        position: "sticky",
        bottom: "32px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <textarea
          value={inputText}
          placeholder="Type your message here... (Press Enter to start typing animation)"
          onChange={e => setInputText(e.target.value)}
          rows={4}
          style={{
            width: "100%",
            resize: "none",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
            padding: "20px 60px 20px 20px",
            fontSize: "16px",
            lineHeight: "1.5",
            boxSizing: "border-box",
            background: "rgba(255, 255, 255, 0.1)",
            color: "#fff",
            backdropFilter: "blur(10px)",
            outline: "none",
            transition: "all 0.3s ease",
          }}
          onFocus={e => {
            e.target.style.borderColor = "rgba(102, 126, 234, 0.5)";
            e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
          }}
          onBlur={e => {
            e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
            e.target.style.boxShadow = "none";
          }}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleTyping();
            }
          }}
        />

        {/* 전송 버튼 */}
        <button
          onClick={handleTyping}
          style={{
            position: "absolute",
            bottom: "18px",
            right: "16px",
            width: "44px",
            height: "44px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
            transition: "all 0.3s ease",
            transform: "scale(1)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "scale(1.05)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px rgba(102, 126, 234, 0.4)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 15px rgba(102, 126, 234, 0.3)";
          }}
          onMouseDown={e => {
            e.currentTarget.style.transform = "scale(0.95)";
          }}
          onMouseUp={e => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          aria-label="Start typing animation"
        >
          ⏎
        </button>
      </div>
    </div>
  );
};
