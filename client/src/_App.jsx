import { useState } from 'react';
import './App.css'
function App(){
    const [boxes,setBox]=useState(Array(9).fill(null));

    let handleClick=(e)=>{
        if(boxes[e]!=null)
        {
            console.log('Already filled');
            return;
        }
        const newBoxes=[...boxes];
        newBoxes[e]='XX'
        setBox(newBoxes);
        console.log('Updated boxes')
    }

    return(
        <div className="playBox">
            {boxes.map((val,ind)=>(
                <button key={ind} className='box' onClick={()=>handleClick(ind)}>{val}</button>
            ))}
        </div>
    )
}
export default App;
