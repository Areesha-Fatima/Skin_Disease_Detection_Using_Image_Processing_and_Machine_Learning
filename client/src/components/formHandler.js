import React, { useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setMessage(`Selected file: ${selectedFile.name}`);
      setMessageColor("blue");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (file) {
      setMessage("Your file has been uploaded successfully!");
      setMessageColor("green");
    } else {
      setMessage("Please select a file to upload.");
      setMessageColor("red");
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setMessage("");
    setMessageColor("");
    document.getElementById("file-upload").value = "";
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="file" id="file-upload" onChange={handleFileChange} />
        <button type="submit" disabled={!file}>
          Upload
        </button>
        {file && (
          <button
            type="button"
            onClick={handleRemoveFile}
            style={{ marginLeft: "10px" }}
          >
            Remove File
          </button>
        )}
      </form>
      {message && <div style={{ color: messageColor }}>{message}</div>}
    </div>
  );
}

export default FileUpload;
