import { useState } from 'react'
import ButtonTip from './components/Button/ButtonTip'
import Input from './components/Input/Input'
import ShowResult from './components/Result/ShowResult'


export default function App() {
  const [Bill, setBill] = useState(0)
  const [Person, setPerson] = useState(0)
  const [Amount, setAmount] = useState(0)
  const [Total, setTotal] = useState(0)

  function Calculate(value : number) {
    const Amount = ((Bill * value)/100)/ Person
    const formattedAmount = Amount.toFixed(2)
    setAmount(+formattedAmount)

    const Total = (((Bill * value)/100)+ Bill) / Person
    const formattedTotal = Total.toFixed(2)
    setTotal(+formattedTotal)
  }

  const Reset = () => {
    setBill(0)
    setPerson(0)
    setAmount(0)
    setTotal(0)
  }


  return (
    <section className='px-40'>
      <div>
        <Input value={Bill} setValue={setBill} />
        <div>
          <ButtonTip content='5%' Value={5} onClick={(value) => Calculate(value)}  />
          <ButtonTip content='10%' Value={10} onClick={(value) => Calculate(value)}  />
          <ButtonTip content='15%' Value={15} onClick={(value) => Calculate(value)}  />
          <ButtonTip content='25%' Value={25} onClick={(value) => Calculate(value)}  />
          <ButtonTip content='50%' Value={50} onClick={(value) => Calculate(value)}  />
        </div>
        <Input value={Person} setValue={setPerson} />
      </div>
      <div>
        <div>
          <ShowResult NameResult='Tip Amount' SubName=' person' Result={Amount} />
          <ShowResult NameResult='Total' SubName=' person' Result={Total} />
        </div>
        <ButtonTip content='Reset' onClick={Reset}/>
      </div>
    </section>
  )
}


