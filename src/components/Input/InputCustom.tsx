import { ChangeEvent } from "react"

type Props = {
    onClick? : () => void
    active : boolean
    value : string | number
    setValue : (value : number) => void
}

export default function InputCustom({onClick, value, setValue, active} : Props) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {setValue(+e.target.value)}

    return (
        <input 
            type={active ? "text" : "number"} 
            className={`${active ? "bg-[#00474B] text-slate-100 uppercase hover:bg-[#9FE8DF] hover:text-[#004748] transition-colors" : "text-[#00474B]"} rounded-xl border-2 border-[#26C2AE] text-xl font-bold text-center cursor-pointer`} 
            value={active ? "Custom" : `${value}`}
            onClick={onClick} 
            onChange={handleChange} />
    )
}