import React, { useState } from "react";
import Tecla from '../Components/sounds/tecla.mp3';
import Confirma from '../Components/sounds/confirma.mp3';

import "../Components/keyNum.css"


export default function KeyNum(){
  const botoes = (x) =>{
    return `${x}`
  }


  const [num1Cand, setNum1Cand] = useState('');
  const [num2Cand, setNum2Cand] = useState('');

  const entradaNumero = (numero) =>{
    if(num1Cand === ""){
      setNum1Cand(numero)
    }else if(num2Cand === ""){
      setNum2Cand(numero)
    }
    let audio = new Audio(Tecla);
    audio.play();
  
  }

  const [corrige, setCorrige] = useState(false)
  const corrigeNumero = () =>{
    if(corrige === true){
      return null
    }
    setNum1Cand('')
    setNum2Cand('')
  }
  const voto = num1Cand + num2Cand;

  const [confirma, setConfirma] = useState(false)
  const [som, setSom] = useState(true);
  const confirmaNumero = (voto) =>{
    if(voto !== ''){
      if(som === true){
        let audio = new Audio(Confirma);
        audio.play();
      }
      let mensagem;

    mensagem = document.querySelector('.screenUrna');
    mensagem.innerHTML = '<h2>Voto confirmado! ✅</h2>'
    setSom(false)
    setConfirma(true)
    }else{
      return null
    }
    
  }

  const candidatos = [
    {
      id: 1,
      nome: 'Saitama',
      numero: '99',
      partido: 'One Punch',
      img: 'https://i.pinimg.com/736x/13/6e/93/136e938516fb0a4d610d5eb2a554afd7.jpg'
    },

    {
      id: 2,
      nome: 'Hackerman',
      numero: '01',
      partido: 'Hack',
      img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--9t2RsG8D--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/8gd5pnqf89imwht5uiid.jpg'
    },

    {
      id: 3,
      nome: 'Nazaré',
      numero: '34',
      partido: 'Baskara',
      img: 'https://pbs.twimg.com/media/DOiSOtBW4AADBJO?format=jpg&name=small'
    },

    {
      id: 4,
      nome: 'Jackie',
      numero: '77',
      partido: 'OQ?',
      img: 'https://i.pinimg.com/564x/87/22/ed/8722eddb66a3b4f175647ded2cd47b6a.jpg'
    },
  ]
  return(
    <div className="corpoMain">
      {candidatos.map((i)=>{
        return(
          voto === i.numero ? (
            <div className="cna" key={i.id}>
              <h2>{i.nome}</h2>
              <p>Partido: <strong>{i.partido}</strong></p>
              <div>
                <img className="foto" src={i.img} alt={i.nome} />
              </div>
            </div>
          ): null
        )
      })}
      <div className="corpoSecond">
        <input className="entNum um" type="text" maxLength="1" value={num1Cand} readOnly />
        <input className="entNum dois" type="text" maxLength="1" value={num2Cand} readOnly/>
        <div>
          <div className="primeiraFila fila">
            <button onClick={()=>entradaNumero(botoes(1))}>1</button>
            <button onClick={()=>entradaNumero(botoes(2))}>2</button>
            <button onClick={()=>entradaNumero(botoes(3))}>3</button>
          </div>
          <div className="segundaFila fila">
            <button onClick={()=>entradaNumero(botoes(4))}>4</button>
            <button onClick={()=>entradaNumero(botoes(5))}>5</button>
            <button onClick={()=>entradaNumero(botoes(6))}>6</button>
          </div>
          <div className="terceiraFila fila">
            <button onClick={()=>entradaNumero(botoes(7))}>7</button>
            <button onClick={()=>entradaNumero(botoes(8))}>8</button>
            <button onClick={()=>entradaNumero(botoes(9))}>9</button>
          </div>
          <div className="quartaFila fila">
            <button onClick={()=>entradaNumero(botoes(0))}>0</button>
          </div>
          <div className="quintaFila">
            <button>Branco</button>
            <button onClick={()=>corrigeNumero()}>Corrige</button>
            <button onClick={()=>confirmaNumero()}>Confirma</button>
          </div>
        </div>
      </div>
    </div>
  )
}