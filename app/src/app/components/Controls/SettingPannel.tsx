export const SettingPannel = ({
  pannelTitle,
  children,
}: {
  pannelTitle: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "16px",
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
      }}
    >
      <h3
        style={{
          margin: "0 0 16px 0",
          fontSize: "16px",
          fontWeight: "600",
          color: "#fff",
        }}
      >
        {pannelTitle}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {children}
      </div>
    </div>
  );
};
