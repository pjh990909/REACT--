import React, { useState } from "react";

const Input = () => {
    const [txtValue, setTextValue] = useState("");//num은 변수 setNumber는 세터함수

   const onChange = (e) => {
    setTextValue(e.target.value)
   }

    return (
        <div>
            <input type="text" value={txtValue} onChange={onChange}/>
            <br />
            <p>{txtValue}</p>
        </div>
    )
};

export default Input;