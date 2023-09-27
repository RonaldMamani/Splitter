import { ChangeEvent } from "react"

type InputProps = {
    value : number
    nameInput: string
    setValue: (value: number) => void
}

export default function Input({value, nameInput, setValue} : InputProps ) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {setValue(+e.target.value)}

    return (
        <form action="" className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#00474B] font-bold">{nameInput}</label>
            <input 
                className="p-3 rounded-lg border-2 border-[#26C2AE] text-[#00474B] font-extrabold focus:border-[#26C2AE]" 
                required 
                placeholder="insira um Numero" 
                type="number" 
                value={value ? value : ""} 
                onChange={handleChange} />
        </form>
    )
}
