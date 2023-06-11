import React, { useState, useEffect } from "react";
import "./UploadButton.css";


function UploadButton() {
  const [inputFile, setInputFile] = useState(null);


  useEffect(() => {
    setInputFile(document.getElementById("input-file"));
  }, []);


  const handleUpload = () => {
    inputFile?.click();
   
  };


  return (
    <div className="m-3 upload-button-container">
      <label className="mx-3">Choose file: </label>
      <input id="input-file" className="d-none" type="file" />
      <button onClick={handleUpload} className="btn btn-outline-primary">
        Upload
      </button>
    </div>
  );
}


export default UploadButton;




// if (selectedFile) {
//     console.log("Selected file:", selectedFile);
//     // You can perform further operations with the selected file, such as uploading it to a server.
//   }

