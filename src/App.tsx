import { useState } from 'react'
import logo from "../public/logo.svg"

import Input from './components/Input'
import Button from './components/Button'
import InputCustom from './components/Input/InputCustom'
import InputPerson from './components/Input/InputPerson'
import Calculate from './components/Calculate'

export default function App() {

  const [Bill, setBill] = useState(0)
  const [Person, setPerson] = useState(0)
  const [Amount, setAmount] = useState(0)
  const [Total, setTotal] = useState(0)
  const [PercentCustom, setPersentCustom] = useState(0)
  const [active, setActive] = useState(false)

  function CalculateSplitter(value : number) {
    if(Bill <= 0 || Person <= 0 ){
      setAmount(0)
      setTotal(0)
    }else {
      const Amount = ((Bill * value)/100)/ Person
      const formattedAmount = Amount.toFixed(2)
      setAmount(+formattedAmount)
  
      const Total = (((Bill * value)/100)+ Bill) / Person
      const formattedTotal = Total.toFixed(2)
      setTotal(+formattedTotal)
    }
  }

  const Reset = () => {
    setBill(0)
    setPerson(0)
    setAmount(0)
    setTotal(0)
  }

  return (
    <section className='
      flex flex-col justify-center gap-14 items-center bg-[#C5E4E7]
      lg:px-40 lg:h-screen '>
      <img className='pt-10' src={logo} alt="Logotipo de Splitter" />
      <div className='p-8 bg-white rounded-3xl flex flex-col gap-16 lg:grid lg:grid-cols-2 lg:grid-rows-1'>
        <div className='flex flex-col justify-between gap-5'>
          <Input nameInput='Bill' value={Bill} setValue={setBill} />
          <div className='flex flex-col gap-4'>
            <span className='text-emerald-900 font-bold'>Select Tip%</span>
            <div className='
              grid grid-cols-2 gap-5
              lg:grid-cols-3
              '>
              <Button content='5%' Value={5} onClick={(value) => CalculateSplitter(value)}  />
              <Button content='10%' Value={10} onClick={(value) => CalculateSplitter(value)}  />
              <Button content='15%' Value={15} onClick={(value) => CalculateSplitter(value)}  />
              <Button content='25%' Value={25} onClick={(value) => CalculateSplitter(value)}  />
              <Button content='50%' Value={50} onClick={(value) => CalculateSplitter(value)}  />
              <InputCustom active={!active} value={PercentCustom} setValue={setPersentCustom} onClick={() => {setActive(!active)}} />
            </div>
          </div>
          <InputPerson nameInput='Number of People' value={Person} setValue={setPerson} />
        </div>
        <div className='
          bg-[#00474B] p-4 rounded-xl flex flex-col
          lg:p-5 lg:grid lg:grid-rows-2
          '>
          <div className='py-5 flex flex-col gap-8'>
            <Calculate NameResult='Tip Amount' SubName='person' Result={Amount}/>
            <Calculate  NameResult='Total' SubName=' person' Result={Total} />
          </div>
          <div className='flex flex-col justify-end gap-5'>
            {active ? (
              <Button content={`Calculate ${PercentCustom}%`} Value={PercentCustom} onClick={(setPersentCustom) => CalculateSplitter(+setPersentCustom)} />
            ) : (
              <></>
            )}
            <Button content='Reset' onClick={Reset}/>
          </div>
        </div>
      </div>
    </section>
  )
}


