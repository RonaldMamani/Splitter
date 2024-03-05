type Props = {
    NameResult : string
    SubName : string
    Result : number
}

export default function Calculate({NameResult, SubName, Result} : Props) {
    return(
        <div className="flex justify-between items-center">
            <div className="flex flex-col">
                <span className='text-slate-100'>{NameResult}</span>
                <span className='text-[#7F9D9F]'>/ {SubName}</span>
            </div>
            <span className=' text-[#26C2AE] text-2xl'>${Result ? Result : " ----"}</span>
        </div>
    )
}