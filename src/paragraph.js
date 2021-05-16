import React,{useState} from 'react';


function paragraph(){
    const[initial,setInitial]=useState(0);

    const getParagraph = ()=>{

        setInitial(<p> "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy" </p>)
    }

    return (
            <div>

                    <button id='getParagraph' onClick={getParagraph}> </button>


            </div>





    )

}

export default paragraph;