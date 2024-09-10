import React from 'react'
import Navbar from '../components/Navbar'

function Upload() {
  const handleFileSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Sending formData to the server
    fetch("upload_file", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server.
        console.log(data);
      })
      .catch((error) => {
        console.error("Error uploading the file:", error);
      });
  };
        
    
  return (
      <div>
      <Navbar />
      <div className="container pt-5">
        <form encType="multipart/form-data" onSubmit={handleFileSubmit}>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Upload your file
            </label>
            <input
              name="file"
              className="form-control"
              type="file"
              id="formFile"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Upload