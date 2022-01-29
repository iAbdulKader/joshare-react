export default function UploadButton() {
  const divStyle = {
    fontSize: "13px",
    color: "#fff",
    background: "var(--color-button-border)",
    padding: "4px 15px",
    borderRadius: "5px",
    textAlign: "center",
    curosr: "pointer",
    userSelect: "none"
  }
  
  return (
    <div 
      className="center nonAuthButton"
      style={divStyle}
    >
      Upload Files
    </div>
    )
}