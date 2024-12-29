import React,{useState} from "react";

export default function About() {

    const[myStyle ,setmyStyle] =useState({
         color:'black',
        backgroundColor:'white'
    })
    const [btnText ,setBtnText]=useState("Enable Dark Mode")
    const togleStyle = ()=>{
        if(myStyle.color === 'black'){
            setmyStyle({
                color:'white',
                backgroundColor:'black'
            })
           setBtnText("Enable Light Mode")
        }    
        
        else{
            setmyStyle({
                color:'black',
                bakgroundColor:'white'
            })
            setBtnText("Enable dark Mode")
        }
    }
  return (
    <div className="container" style={myStyle}>
        <h1>About Us Text Analyzer</h1>
        <p>The <strong>About Us Text Analyzer</strong> is a comprehensive tool designed for content creators, editors, and website managers. It provides essential features to analyze, manipulate, and preview text efficiently.</p>

        <h2 style={myStyle}>Features:</h2>
        <ul>
            <li><strong>Convert to Uppercase:</strong> Transforms all the text into uppercase letters for uniform styling or emphasis.</li>
            <li><strong>Convert to Lowercase:</strong> Converts all the text into lowercase letters, ensuring simplicity and consistency.</li>
            <li><strong>Clear All Text:</strong> Erases the entire content, giving you a blank slate to start fresh.</li>
            <li><strong>Count Words and Characters:</strong> Provides an accurate count of:
                <ul>
                    <li>Total words</li>
                    <li>Total characters (including or excluding spaces)</li>
                </ul>
            </li>
            <li><strong>Analyze Sentences and Paragraphs:</strong> Counts the number of sentences and paragraphs, offering a detailed breakdown of the content structure.</li>
            <li><strong>Calculate Reading Time:</strong> Estimates the time required to read the text based on an average reading speed of 200 words per minute.</li>
            <li><strong>Text Preview:</strong> Displays the formatted or analyzed text, allowing you to review changes before finalizing.</li>
        </ul>

        <h2>Preview:</h2>
        <p>Your Text Will Look Like This:</p>
        <div className="preview" style={myStyle}>
            [Formatted or Analyzed Output]
        </div>

        <h2>Use Case Example:</h2>
        <p>If you're designing this in a web application, you can use HTML, CSS, and JavaScript to build the interface and functionality. Here's how the interface might look:</p>
        <ul>
            <li>A textarea for users to input or paste text.</li>
            <li>Buttons for each feature:
                <ul>
                    <li>"Convert to Uppercase"</li>
                    <li>"Convert to Lowercase"</li>
                    <li>"Clear All"</li>
                    <li>"Analyze Text"</li>
                </ul>
            </li>
            <li>Display sections to show:
                <ul>
                    <li>Word count</li>
                    <li>Character count</li>
                    <li>Sentences</li>
                    <li>Paragraphs</li>
                    <li>Reading time</li>
                </ul>
            </li>
            <li>A live preview area for the processed text.</li>
        </ul>
        <button className="btn btn-primary" type="button" onClick={togleStyle}>{btnText}</button>
    </div>
  );
}
