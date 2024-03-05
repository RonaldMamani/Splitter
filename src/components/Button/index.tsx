type Props = {
    Value?: number
    content: string 
    onClick: (value : number) => void
}

export default function Button({Value, content, onClick} : Props) {
    return (
        <button className=" 
            bg-[#00474B] border-2 border-[#9FE8DF] text-slate-50 text-2xl font-bold px-4 py-3 rounded-xl
            hover:bg-[#9FE8DF] hover:text-[#004748] transition-colors
            " value={Value} onClick={() => onClick(Value ?? 0)} >{content}</button>
    )
}