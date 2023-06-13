import React, { useState, useEffect } from "react";
import "./UploadButton.css";

function UploadButton() {
  const [input, setInput] = useState(null);
  const [result, setResult] = useState("");

  const handleUpload = async () => {
    console.log("Handle upload clicked");

    await sendFileToBackend();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setInput(file);
  };

  const sendFileToBackend = async () => {
    if (input) {
      const formData = new FormData();
      formData.append("resume", input);

      try {
        const response = await fetch("http://localhost:8000/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          setResult(data.result);
        } else {
          throw new Error("failed");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (input) {
      sendFileToBackend();
    }
  }, [input]);

  return (
    <div className="m-3 upload-button-container">
      <label className="mx-3">Choose file: </label>
      <input
        id="input-file"
        className="d-none"
        type="file"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} className="btn">
        Upload
      </button>
  
      {result && (
        <div className="result-container">
          <h4>Result:</h4>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
  
}

export default UploadButton;
