export const Result = ({ children }: { children: React.ReactNode }) => {
  return (
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
        boxShadow:
          "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        marginBottom: "40px",
        fontSize: "18px",
        whiteSpace: "pre-wrap",
        overflowY: "auto",
        backdropFilter: "blur(10px)",
        position: "relative",
      }}
    >
      {/* Subtle glow effect */}
      <div
        style={{
          position: "absolute",
          top: "-1px",
          left: "-1px",
          right: "-1px",
          bottom: "-1px",
          background: "linear-gradient(135deg, #667eea22, #764ba222)",
          borderRadius: "20px",
          zIndex: -1,
        }}
      />

      {children}
    </div>
  );
};
