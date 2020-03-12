/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [image, setImage] = useState("");
  const [files, setFiles] = useState([]);

  const handleDragOver = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log("Dragged");
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    // console.log(e.dataTransfer.files);
    // console.log("Entered");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    console.log(e.dataTransfer.files);
    console.log(e.dataTransfer.files[0].path);
    setFiles(Array.from(e.dataTransfer.files));
    setImage(e.dataTransfer.files[0].path);
    console.log("Dropped");
  };

  const handleClick = () => {
    console.log("Clicked");
  };

  const isImage = (extension) => {
    const imageExtensions = [
      "jpg", "jpeg", "png", "gif", "bmp",
    ];
    return extension && imageExtensions.indexOf(extension) > -1;
  };
  const isVideo = (extension) => {
    const videoExtensions = [
      "webm", "mp4", "mkv",
    ];
    return extension && videoExtensions.indexOf(extension) > -1;
  };

  const dataType = (fileName) => {
    if (fileName.lastIndexOf(".") === -1) { return "folder"; }
    return fileName.slice(fileName.lastIndexOf(".") + 1);
  };

  // eslint-disable-next-line arrow-body-style
  const Something = () => {
    return files.map((file, i) => {
      console.log(dataType(file.name));
      // console.log(file.type);
      if (isImage(dataType(file.name))) {
        return <img className="dropimg" key={i} src={file.path} />;
      }
      if (isVideo(dataType(file.name))) {
        return (
          <video autoPlay loop muted controls width="500">
            <source src={file.path} type={file.type} />
          </video>
        );
      }
      console.error(`File not supported? ${dataType(file.name)}`);
      return null;
    });
  };

  return (
    <div>
      <div
        className="dragdrop"
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={handleClick}
      />
      {/* {files.map((file, i) => <div key={i}>{file.name}</div>)} */}
      <Something />
    </div>
  );
};

export default App;
