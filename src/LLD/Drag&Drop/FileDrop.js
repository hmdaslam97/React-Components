import { useState } from "react";
import uploadFileInChunks from "./FileDropUtils.js";

export default function FileDrop() {
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(0);
    return (
    <div style={{ padding: "20px", width: "100%"}}>
     <h1 style={{ textAlign: "center" }}>Welcome to File Drag and Drop<img src="upload.png" style={{ width: "20px", height: "25px", marginLeft: "10px", paddingTop: "10px" }} alt="drop files here"/></h1>
     <div style={{ maxWidth: "600px", maxHeight: "600px", margin: "20px auto", fontFamily: "sans-serif"}}>
      <div
       style={{
          border: `2px dashed ${isDragging ? "#007bff" : "#cccccc"}`,
          borderRadius: "8px",
          padding: "40px 20px",
          textAlign: "center",
          backgroundColor: isDragging ? "#e6f2ff" : (file ? "#ffffff" : "#f9f9f9"),
          cursor: "pointer",
          transition: "all 0.2s ease",
          height: "400px",
          zIndex: 1
        }}
       onDragEnter={() => setIsDragging(true)}
       onDragLeave={() => setIsDragging(false)}
       onDragOver={(e) => {
        e.preventDefault()
        setIsDragging(true)
       }}
       onDrop={(e) => {
         e.preventDefault();
         setIsDragging(false);
         const file = e.dataTransfer.files[0];
         setFile(file);
         uploadFileInChunks(file, setUploading);
       }}
      >
      <div style={{ marginTop:"150px", marginHorizontal: "auto" }}>
        {file ? (
          <>
           {uploading === 100 && <b style={{ fontSize: "20px", color: "#000000", textAlign: "center" }}>{file.name}</b>}
           {(uploading !==0 && uploading !== 100) && <p>Uploading {uploading}%</p>}
          </>
        ) : (
          <i style={{ fontSize: "20px", color: "#cccccc", textAlign: "center" }}>Drop your files here!</i>
        )}
      </div>


      <div style={{position:"relative", marginTop:"120px",}}>
        <input
          type="file"
          style={{ border: "2px solid #cccccc", borderRadius: "4px", padding: "10px", width: "100%"}}
          onChange={(e) => {
            const file = e.target.files[0];
            setFile(file);
            uploadFileInChunks(file, setUploading);
            e.target.value = null;
          }}
        />
      </div>

    </div>
    </div>
    </div>
  );
}
