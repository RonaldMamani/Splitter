type Tip = {
    Value : number
}

export default function ButtonTip({Value} : Tip) {
    return (
        <button className=" 
            bg-emerald-950 text-slate-50 px-4 py-2 rounded-xl
            hover:bg-emerald-200 hover:text-emerald-950 transition-colors
            " value={Value} >{Value}%</button>
    )
}