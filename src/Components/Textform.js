import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    //   console.log("Uppercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
  };


  const handleLoClick =() =>{
    let lowerText =text.toLocaleLowerCase();
    setText(lowerText)
  }

  const handclerClick =() =>{
    let lowerText =("");
    setText(lowerText)
  }

  function calculateSentences(text) {
    if (typeof text !== 'string') {
        throw new Error("Input must be a string.");
    }

    // Match all sentence-ending punctuation followed by optional whitespace
    const sentenceRegex = /[.!?](\s|$)/g;
    const matches = text.match(sentenceRegex);

    return matches ? matches.length : 0;
}

function calculateParagraphsInText(text) {
  if (!text) return 0;
  const paragraphs = text.split(/\n\s*\n/).filter(para => para.trim().length > 0);
  return paragraphs.length;
}

  const handleOnChange = (event) => {
    //console.log("on Change ")
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <div className="container">

          <h1>{props.heading}</h1>

          <div className="mb-3">
            <textarea
              className="form-control"
              id="mybox"
              value={text}
              onChange={handleOnChange}
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Connevet to upperCase{" "}
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>
            Connevet to LowerCase{" "}
          </button>
          <button className="btn btn-primary mx-1" onClick={handclerClick}>
          Clear all text{" "}
          </button>
        </div>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} charactrs</p>
        <p> Reading time {0.008*text.split(" ").length} </p>
        <p> Sentences {calculateSentences(text)} </p>
        <p> Paragraphs {calculateParagraphsInText(text)} </p>
        <h2>Preview</h2>
        <p>{text}</p>

      </div>
    </>
  );
}
