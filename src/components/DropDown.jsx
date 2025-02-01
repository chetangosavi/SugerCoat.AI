import { useState } from "react"

// eslint-disable-next-line react/prop-types
const DropDown = ({title,data})=>{
    const [input,setInput] = useState("")
    console.log(input)

    function handleOnChange (e){
        setInput(e.target.value)
    }
    return(
        <div >
         <select value={input} onChange={handleOnChange} className="px-4 py-2  border rounded ">
            <option value="" disabled>Select {title}</option>
            {
                // eslint-disable-next-line react/prop-types
                data.map((item,index)=>(
                    <option key={index}>{item}</option>
                ))
            }
         </select>
        </div>
    )
}
export default DropDown;