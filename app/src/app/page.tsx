"use client";

import { useState } from "react";
import { TypingText } from "typechat";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [submittedText, setSubmittedText] = useState("");

  const [numOfWriteChar, setNumOfWriteChar] = useState(2);
  const [intervalSec, setIntervalSec] = useState(100);

  const [revealMotionType, setRevealMotionType] = useState<"none"|"fade">("none");  
  const [fadeDuration, setFadeDuration] = useState<number | null>(0.1);

  const [shouldRepeat, setShouldRepeat] = useState<boolean>(false);
  const [shouldRepeatDelayTime, setShouldRepeatDelayTime] = useState<number>(1000);

  const [showCursor, setShowCursor] = useState<boolean>(false);
  const [cursorChar, setCursorChar] = useState<"|" | "_">("|");

  const handleTyping = () => {
    setSubmittedText(inputText);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#ffffff",
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "32px", textAlign: "center" }}>
        <h1 style={{
          fontSize: "42px",
          fontWeight: "700",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          margin: "0 0 8px 0",
          letterSpacing: "-0.5px"
        }}>
          <TypingText text={"Typechat"} intervalSec={100} revealMotionType="none" />
        </h1>
        <div style={{
          color: "#888",
          fontSize: "16px",
          margin: 0,
          fontWeight: "400"
        }}>
          <TypingText text={"Beautiful typing animation effects"} intervalSec={100} revealMotionType="fade" fadeDuration={0.3} showCursor={true} cursorChar="|" shouldRepeat={true} shouldRepeatDelayTime={500}/>
        </div>
      </div>

      {/* 출력 영역 */}
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          minHeight: "120px",
          maxHeight: "250px",
          padding: "32px",
          borderRadius: "20px",
          background: "linear-gradient(145deg, #1e1e1e, #2a2a2a)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          marginBottom: "40px",
          fontSize: "18px",
          whiteSpace: "pre-wrap",
          overflowY: "auto",
          backdropFilter: "blur(10px)",
          position: "relative"
        }}
      >
        {/* Subtle glow effect */}
        <div style={{
          position: "absolute",
          top: "-1px",
          left: "-1px",
          right: "-1px",
          bottom: "-1px",
          background: "linear-gradient(135deg, #667eea22, #764ba222)",
          borderRadius: "20px",
          zIndex: -1
        }} />
        
        {submittedText ? <TypingText
          text={submittedText}
          numOfWriteChar={numOfWriteChar}
          intervalSec={intervalSec}
          revealMotionType={revealMotionType}
          fadeDuration={fadeDuration}
          shouldRepeat={shouldRepeat}
          shouldRepeatDelayTime={shouldRepeatDelayTime}
          showCursor={showCursor}
          cursorChar={cursorChar}
        /> : (
          <div style={{
            cursor: 'pointer',
            color: "#aaa",
            lineHeight: "1.6",
            transition: "all 0.3s ease"
          }} 
          onClick={(e) => {
            const text = (e.target as HTMLElement).textContent ?? '';
            navigator.clipboard.writeText(text)
              .then(() => alert("복사하였습니다. 아래 채팅창에 넣고 실행해보세요."))
              .catch(() => alert("복사에 실패했습니다."))
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#aaa";
          }}>
            Welcome to TypeChat! ✨<br /><br />
            Enter your text below and watch the magic happen. Customize the typing speed, effects, and more with the settings below.
          </div>
        )}
      </div>

      {/* 설정 섹션들을 그리드로 배치 */}
      <div style={{
        width: "100%",
        maxWidth: "900px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        marginBottom: "32px"
      }}>
        
        {/* 기본 설정 */}
        <div style={{
          padding: "24px",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}>
          <h3 style={{ 
            margin: "0 0 16px 0", 
            fontSize: "16px", 
            fontWeight: "600",
            color: "#fff"
          }}>
            ⚡ Basic Settings
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: "#ccc", fontSize: "14px" }}>Characters per step</span>
              <input
                type="number"
                value={numOfWriteChar}
                onChange={(e) => setNumOfWriteChar(Number(e.target.value))}
                min={1}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  width: "80px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  fontSize: "14px"
                }}
              />
            </label>
            <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: "#ccc", fontSize: "14px" }}>Interval (ms)</span>
              <input
                type="number"
                value={intervalSec}
                onChange={(e) => setIntervalSec(Number(e.target.value))}
                min={10}
                step={10}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  width: "80px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  fontSize: "14px"
                }}
              />
            </label>
          </div>
        </div>

        {/* 애니메이션 설정 */}
        <div style={{
          padding: "24px",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}>
          <h3 style={{ 
            margin: "0 0 16px 0", 
            fontSize: "16px", 
            fontWeight: "600",
            color: "#fff"
          }}>
            ✨ Animation
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: "#ccc", fontSize: "14px" }}>Reveal Effect</span>
              <select
                value={revealMotionType}
                onChange={(e) => {
                  setRevealMotionType(e.target.value as "none" | "fade")
                  if (e.target.value === "none") {
                    setFadeDuration(null);
                  } else if (e.target.value === "fade") {
                    setFadeDuration(0.3);
                  }
                }}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  width: "100px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  fontSize: "14px"
                }}
              >
                <option value={"none"}>None</option>
                <option value={"fade"}>Fade</option>
              </select>
            </label>

            {revealMotionType === 'fade' && (
              <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "#ccc", fontSize: "14px" }}>Duration</span>
                <input
                  type="number"
                  value={fadeDuration as number}
                  onChange={(e) => setFadeDuration(Number(e.target.value))}
                  min={0.1}
                  step={0.1}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    width: "80px",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    fontSize: "14px"
                  }}
                />
              </label>
            )}
          </div>
        </div>

        {/* 반복 설정 */}
        <div style={{
          padding: "24px",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}>
          <h3 style={{ 
            margin: "0 0 16px 0", 
            fontSize: "16px", 
            fontWeight: "600",
            color: "#fff"
          }}>
            🔄 Repeat
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: "#ccc", fontSize: "14px" }}>Should Repeat</span>
              <select
                value={String(shouldRepeat)}
                onChange={(e) => setShouldRepeat(e.target.value === "true")}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  width: "100px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  fontSize: "14px"
                }}
              >
                <option value={"false"}>False</option>
                <option value={"true"}>True</option>
              </select>
            </label>

            {shouldRepeat && (
              <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "#ccc", fontSize: "14px" }}>Delay (ms)</span>
                <input
                  type="number"
                  value={shouldRepeatDelayTime}
                  onChange={(e) => setShouldRepeatDelayTime(Number(e.target.value))}
                  min={500}
                  step={100}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    width: "80px",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    fontSize: "14px"
                  }}
                />
              </label>
            )}
          </div>
        </div>

        {/* 커서 설정 */}
        <div style={{
          padding: "24px",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}>
          <h3 style={{ 
            margin: "0 0 16px 0", 
            fontSize: "16px", 
            fontWeight: "600",
            color: "#fff"
          }}>
            | Cursor
          </h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ color: "#ccc", fontSize: "14px" }}>Show Cursor</span>
              <select
                value={String(showCursor)}
                onChange={(e) => setShowCursor(e.target.value === "true")}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  width: "100px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  fontSize: "14px"
                }}
              >
                <option value={"false"}>False</option>
                <option value={"true"}>True</option>
              </select>
            </label>

            {showCursor && (
              <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ color: "#ccc", fontSize: "14px" }}>Cursor Style</span>
                <select
                  value={cursorChar}
                  onChange={(e) => setCursorChar(e.target.value as "_" | "|")}
                  style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    width: "100px",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    fontSize: "14px"
                  }}
                >
                  <option value={"|"}>|</option>
                  <option value={"_"}>_</option>
                </select>
              </label>
            )}
          </div>
        </div>
      </div>

      {/* 입력창 + 버튼 */}
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
            onChange={(e) => setInputText(e.target.value)}
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
              transition: "all 0.3s ease"
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(102, 126, 234, 0.5)";
              e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
              e.target.style.boxShadow = "none";
            }}
            onKeyDown={(e) => {
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
              transform: "scale(1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)";
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = "scale(0.95)";
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            aria-label="Start typing animation"
          >
            ⏎
          </button>
        </div>        
      </div>
    </div>
  );
}