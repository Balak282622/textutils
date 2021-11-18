import React ,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to upper case','success')
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lower case','success')
    }

    const handleClear = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert('text cleared','success')
    }
    
    const handleCapitalize = ()=>{
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase() ;
        setText(newText)
        props.showAlert('text capitalized','success')
    }

    const handleCapitalizeEachWord = ()=>{
        let newText = text.split(' ')
        for (let i = 0; i < newText.length; i++) {
            newText[i] =  newText[i].charAt(0).toUpperCase() + newText[i].slice(1);
        }
        setText(newText.join(" "))
        props.showAlert('each word capitalized','success')
    }
    
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert('text copied','success')
    }

    const handleToWord = ()=>{
        const element = document.createElement("a");
        const file = new Blob([text],    
            {type: 'text/plain;charset=utf-8'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.docx";
        document.body.appendChild(element);
        element.click()
        props.showAlert('Converted to word file','success')
    }

    const handleRemoveExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed','success')

    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState('');
   
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#0f1d3e'}}>
            <h1 className = 'm-2'>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'rgb(15 44 63 / 0.88)' : 'white', color: props.mode === 'dark' ? '#c9f90b' : 'black'}} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleUpClick}>
                CONVERT TO UPPERCASE
            </button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleLoClick}>
                convert to lowercase
            </button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleCapitalize}>
                Capitalize
            </button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleCapitalizeEachWord}>
                Capitalize Each Word
            </button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleClear}>
                Clear Text
            </button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleCopy}>
                Copy Text
            </button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleToWord}>
                Save to Word file
            </button>
            <button disabled={text.length===0} className="btn btn-primary m-1" onClick={handleRemoveExtraSpace}>
                Remove extra spaces
            </button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} Words and {text.length} Characters</p>
            <p>{parseFloat(0.008 * text.split("").filter((element) => {return element.length !== 0}).length).toFixed(3)} Minutes to read</p>
            <h2>Preview</h2>
            <p style={text.length === 0?{color: props.mode === 'dark' ? 'white' : 'black'}:{color: props.mode === 'dark' ? '#c9f90b' : 'black'}}>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
        </>
    )
}
