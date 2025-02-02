import { useState } from "react"

// eslint-disable-next-line react/prop-types
const DropDown = ({title,data,onChange})=>{
    const [input,setInput] = useState("")

    return(
        <div >
         <select value={input} onChange={(e)=>{onChange(e.target.value); setInput(e.target.value)}} className="px-4 py-2  border rounded ">
            <option value="" disabled>Select {title}</option>
            {
                // eslint-disable-next-line react/prop-types
                data.map((item)=>(
                    <option key={item}>{item}</option>
                ))
            }
         </select>
        </div>
    )
}
export default DropDown;