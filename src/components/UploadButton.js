export default function UploadButton() {
  const divStyle = {
    fontSize: "13px",
    color: "#fff",
    background: "var(--color-button-border)",
    padding: "4px 15px",
    borderRadius: "5px",
    textAlign: "center",
  }
  
  return (
    <div 
      className="center"
      style={divStyle}
    >
      Upload Files
    </div>
    )
}