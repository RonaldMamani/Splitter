type Results = {
    NameResult : string
    SubName : string
    Result : number
}

export default function ShowResult({NameResult, SubName, Result} : Results) {
    return(
        <div>
            <div>
                <span className='text-slate-100'>{NameResult}</span>
                <span className='text-gray-500'>/ {SubName}</span>
            </div>
            <span className=' text-emerald-700'>${Result}</span>
        </div>
    )
}