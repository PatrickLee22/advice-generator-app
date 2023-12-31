import './AdviceCard.css'
import dividerDesktop from '../../assets/images/pattern-divider-desktop.svg'
import dividerMobile from '../../assets/images/pattern-divider-mobile.svg'
import diceImage from '../../assets/images/icon-dice.svg'
import { useState } from 'react'



interface Props{
  isDesktop: boolean,
}

interface SlipData {
  slip: {
    id: number;
    advice: string;
  };
}

type Advice = {
  id: number,
  message: string,
}

const AdviceCard = ({isDesktop}: Props) =>{

  const [advice, setAdvice] = useState<Advice>({
    id: 117,
    message: "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  })

  const handleClick = async () =>{
    await fetch('https://api.adviceslip.com/advice', {cache: "no-cache"})
      .then((res) => res.json())
      .then((data: SlipData) =>{
        console.log(data)
        setAdvice({
          id: data.slip.id,
          message: data.slip.advice,
        })
      })
  }

  const handleClickWrapper = () =>{
    handleClick ()
    .catch(err =>{
      console.log(err)
    })
  }

  return (
      <div className="advice-card">
        <span className="advice-title">{"ADVICE #".concat(advice.id.toString())}</span>
        <span className="advice-message">{advice.message}</span>
        {isDesktop && <img className="advice-divider" src={dividerDesktop} alt='divider'/>}
        {!isDesktop && <img className="advice-divider" src={dividerMobile} alt='divider'/>}
        <button className='advice-button' onClick={handleClickWrapper}>
            <img src={diceImage} alt="button-image"/>
        </button>
      </div>
  )

}

export default AdviceCard;