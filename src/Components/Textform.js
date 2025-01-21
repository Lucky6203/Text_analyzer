import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    //   console.log("Uppercase was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let lowerText = text.toLocaleLowerCase();
    setText(lowerText);
  };

  const handclerClick = () => {
    let lowerText = "";
    setText(lowerText);
  };

  function calculateSentences(text) {
    if (typeof text !== "string") {
      throw new Error("Input must be a string.");
    }
    const sentenceRegex = /[.!?](\s|$)/g;
    const matches = text.match(sentenceRegex);

    return matches ? matches.length : 0;
  }

  function calculateParagraphsInText(text) {
    if (!text) return 0;
    const paragraphs = text
      .split(/\n\s*\n/)
      .filter((para) => para.trim().length > 0);
    return paragraphs.length;
  }

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select(); // Use the correct variable name
    navigator.clipboard.writeText(text.value);
  };

  const handeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    //console.log("on Change ")
    setText(event.target.value);
  };
  return (
    <>
      <div className="container " style={{backgroundColor: props.mode==='light'?'#fff':'grey' }} >
        <h1 style={{color: props.mode==='light'?'black':'#fff' }} >{props.heading}</h1>

        <div className="mb-3" style={{backgroundColor: props.mode==='light'?'#fff':'grey'}}>
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode==='light'?'#fff':'grey' ,color:props.mode==='light'?'black':'#fff' }}
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
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy all text{" "}
        </button>

        <button className="btn btn-primary mx-1" onClick={handeExtraSpaces}>
          Copy all text{" "}
        </button>
      </div>

      <div className="container my-1" style={{backgroundColor: props.mode==='light'?'#fff':'grey',color:props.mode==='light'?'black':'#fff' }}>
        <h1  style={{color: props.mode==='light'?'black':'#fff' }}>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charactrs
        </p>
        <p> Reading time {0.008 * text.split(" ").length} </p>
        <p> Sentences {calculateSentences(text)} </p>
        <p> Paragraphs {calculateParagraphsInText(text)} </p>
        <h2  style={{color: props.mode==='light'?'black':'#fff' }}>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
