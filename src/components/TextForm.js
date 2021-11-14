import React ,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClear = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText)
    }

    const handleToWord = ()=>{
        // console.log("Uppercase was clicked" + text);
        // const newText = document.createElement('b');

        // setText(newText)
        const element = document.createElement("a");
        const file = new Blob([text],    
            {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.docx";
        document.body.appendChild(element);
        element.click()
    }

    const handleOnChange = (event)=>{
        // console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
   
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#0f1d3e'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'rgb(15 44 63 / 0.88)' : 'white', color: props.mode === 'dark' ? '#c9f90b' : 'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary m-1" onClick={handleUpClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-primary m-1" onClick={handleLoClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-primary m-1" onClick={handleClear}>
                Clear Text
            </button>
            <button className="btn btn-primary m-1" onClick={handleToWord}>
                Save to Word file
            </button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{parseFloat(0.008 * text.split("").length).toFixed(2)} Minutes to read</p>
            <h2>Preview</h2>
            <p style={text.length === 0?{color: props.mode === 'dark' ? 'white' : 'black'}:{color: props.mode === 'dark' ? '#c9f90b' : 'black'}}>{text.length > 0 ? text : "Enter something in the text box above to preview it"}</p>
        </div>
        </>
    )
}
