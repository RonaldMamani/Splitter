import { ChangeEvent } from "react"

type ContentCustom = {
    onClick? : () => void
    active : boolean
    value : string | number
    setValue : (value : number) => void
}

export default function InputCustom({onClick, value, setValue, active} : ContentCustom) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {setValue(+e.target.value)}

    return (
        <input 
            type={active ? "text" : "number"} 
            className={`${active ? "bg-[#00474B] text-slate-100 uppercase" : "text-[#00474B]"}  rounded-xl border-2 border-[#26C2AE] text-xl font-bold text-center`} 
            value={active ? "Custom" : `${value}`}
            onClick={onClick} 
            onChange={handleChange} />
    )
}