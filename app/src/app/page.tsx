"use client";

import { TypingText } from "react-animation-typing-text";
import { Header, SettingPannel, Result, InputEditor } from "./components";

import { useTypingStore } from "./store/useTypingStore";

export default function Home() {
  const {
    inputText,
    submittedText,
    numOfWriteChar,
    intervalSec,
    revealMotionType,
    fadeDuration,
    shouldRepeat,
    shouldRepeatDelayTime,
    showCursor,
    cursorChar,

    setInputText,
    setSubmittedText,
    setNumOfWriteChar,
    setIntervalSec,
    setRevealMotionType,
    setFadeDuration,
    setShouldRepeat,
    setShouldRepeatDelayTime,
    setShowCursor,
    setCursorChar,
  } = useTypingStore();

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
        fontFamily:
          "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <Header />

      <Result>
        {submittedText ? (
          <TypingText
            text={submittedText}
            numOfWriteChar={numOfWriteChar}
            intervalSec={intervalSec}
            revealMotionType={revealMotionType}
            fadeDuration={fadeDuration}
            shouldRepeat={shouldRepeat}
            shouldRepeatDelayTime={shouldRepeatDelayTime}
            showCursor={showCursor}
            cursorChar={cursorChar}
          />
        ) : (
          <div
            style={{
              cursor: "pointer",
              color: "#aaa",
              lineHeight: "1.6",
              transition: "all 0.3s ease",
            }}
            onClick={e => {
              const text = (e.target as HTMLElement).textContent ?? "";
              navigator.clipboard
                .writeText(text)
                .then(() =>
                  alert("복사하였습니다. 아래 채팅창에 넣고 실행해보세요.")
                )
                .catch(() => alert("복사에 실패했습니다."));
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "#aaa";
            }}
          >
            Welcome to TypeChat! ✨<br />
            <br />
            Enter your text below and watch the magic happen. Customize the
            typing speed, effects, and more with the settings below.
          </div>
        )}
      </Result>

      {/* 설정 섹션들을 그리드로 배치 */}
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          marginBottom: "32px",
        }}
      >
        {/* 기본 설정 */}
        <SettingPannel pannelTitle="⚡ Basic Settings">
          <label
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ color: "#ccc", fontSize: "14px" }}>
              Characters per step
            </span>
            <input
              type="number"
              value={numOfWriteChar}
              onChange={e => setNumOfWriteChar(Number(e.target.value))}
              min={1}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                width: "80px",
                background: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
                fontSize: "14px",
              }}
            />
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ color: "#ccc", fontSize: "14px" }}>
              Interval (ms)
            </span>
            <input
              type="number"
              value={intervalSec}
              onChange={e => setIntervalSec(Number(e.target.value))}
              min={10}
              step={10}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                width: "80px",
                background: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
                fontSize: "14px",
              }}
            />
          </label>
        </SettingPannel>

        <SettingPannel pannelTitle="✨ Animation">
          <label
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ color: "#ccc", fontSize: "14px" }}>
              Reveal Effect
            </span>
            <select
              value={revealMotionType}
              onChange={e => {
                setRevealMotionType(e.target.value as "none" | "fade");
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
                fontSize: "14px",
              }}
            >
              <option value={"none"}>None</option>
              <option value={"fade"}>Fade</option>
            </select>
          </label>

          {revealMotionType === "fade" && (
            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#ccc", fontSize: "14px" }}>Duration</span>
              <input
                type="number"
                value={fadeDuration as number}
                onChange={e => setFadeDuration(Number(e.target.value))}
                min={0.1}
                step={0.1}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  width: "80px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  fontSize: "14px",
                }}
              />
            </label>
          )}
        </SettingPannel>

        <SettingPannel pannelTitle="🔄 Repeat">
          <label
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ color: "#ccc", fontSize: "14px" }}>
              Should Repeat
            </span>
            <select
              value={String(shouldRepeat)}
              onChange={e => setShouldRepeat(e.target.value === "true")}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                width: "100px",
                background: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
                fontSize: "14px",
              }}
            >
              <option value={"false"}>False</option>
              <option value={"true"}>True</option>
            </select>
          </label>

          {shouldRepeat && (
            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#ccc", fontSize: "14px" }}>
                Delay (ms)
              </span>
              <input
                type="number"
                value={shouldRepeatDelayTime}
                onChange={e => setShouldRepeatDelayTime(Number(e.target.value))}
                min={500}
                step={100}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  width: "80px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  fontSize: "14px",
                }}
              />
            </label>
          )}
        </SettingPannel>

        <SettingPannel pannelTitle="| Cursor">
          <label
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span style={{ color: "#ccc", fontSize: "14px" }}>Show Cursor</span>
            <select
              value={String(showCursor)}
              onChange={e => setShowCursor(e.target.value === "true")}
              style={{
                padding: "8px 12px",
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                width: "100px",
                background: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
                fontSize: "14px",
              }}
            >
              <option value={"false"}>False</option>
              <option value={"true"}>True</option>
            </select>
          </label>

          {showCursor && (
            <label
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span style={{ color: "#ccc", fontSize: "14px" }}>
                Cursor Style
              </span>
              <select
                value={cursorChar}
                onChange={e => setCursorChar(e.target.value as "_" | "|")}
                style={{
                  padding: "8px 12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  width: "100px",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                <option value={"|"}>|</option>
                <option value={"_"}>_</option>
              </select>
            </label>
          )}
        </SettingPannel>
      </div>

      <InputEditor />
    </div>
  );
}
