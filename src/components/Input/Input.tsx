import { ChangeEvent } from "react"

type InputProps = {
    value : number
    setValue: (value: number) => void
}

export default function Input({value, setValue} : InputProps ) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {setValue(+e.target.value)}

    return (
        <label htmlFor="" className="">
            <input className="" type="number" value={value} onChange={handleChange} />
        </label>
    )
}
