import { ChangeEvent } from "react"

type InputProps = {
    value : number
    setValue: (value: number) => void
}

export default function Input({value, setValue} : InputProps ) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {setValue(+e.target.value)}

    return (
        <label htmlFor="" className="">
            <input className="" placeholder="insira um Numero" type="number" value={value ? value : ""} onChange={handleChange} />
        </label>
    )
}
