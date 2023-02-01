import React from "react";

import "../Components/keyNumCopy.css"


const keyNumCopy = () => {

  const [botao1, setBotao1] = useState('1');
  const [botao2, setBotao2] = useState('2');
  const [botao3, setBotao3] = useState('3');
  const [botao4, setBotao4] = useState('4');
  const [botao5, setBotao5] = useState('5');
  const [botao6, setBotao6] = useState('6');
  const [botao7, setBotao7] = useState('7');
  const [botao8, setBotao8] = useState('8');
  const [botao9, setBotao9] = useState('9');
  const [botao0, setBotao0] = useState('0');

  const [botaoBranco, setBotaoBranco] = useState('Branco');
  const [botaoCorrige, setBotaoCorrige] = useState('Corrige');
  const [botaoConfirma, setBotaoConfirma] = useState('Confirma');

  const [num1Cand, setNum1Cand] = useState('');
  const [num2Cand, setNum2Cand] = useState('');

  const [votosNazare, setNazare] = useState(0);
  const [votosSaitama, setSaitama] = useState(0);
  const [votosJackie, setJackie] = useState(0);
  const [votosHackerman, setHackerman] = useState(0);
  
  const [isSong, setIsSong] = useState(true);
  const [isCorrige, setIsCorrige] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isBranco, setIsBranco] = useState(false);

  const voto = num1Cand + num2Cand;

  const candidatos = [
    {
      id: 1,
      nome: 'Saitama',
      numero: '99',
      partido: 'One Punch',
      img: '../src/imgsaitama.jpg'
    },

    {
      id: 2,
      nome: 'Hackerman',
      numero: '01',
      partido: 'Hack',
      img: '../src/img/Hackerman.jpg'
    },

    {
      id: 3,
      nome: 'Nazaré',
      numero: '34',
      partido: 'Baskara',
      img: '../src/img/nazare.jpg'
    },

    {
      id: 4,
      nome: 'Jackie',
      numero: '77',
      partido: 'OQ?',
      img: '../src/img/jackie.jpeg'
    },
  ]

  const insereNum = (num) => {

    if (num1Cand == '') {
      setNum1Cand(num);
    } else if (num2Cand == '') {
      setNum2Cand(num);
    }

    let audio = new Audio(Tecla);
    audio.play();
  }

  const corrigeNum = () => {
    if (isConfirm === true) {
      return null;
    }
    setNum1Cand('');
    setNum2Cand('');
  }

  const confirmaNum = (voto) => {

    if (voto != '') {
      if (isSong == true) {
        let audio = new Audio(Confirma);
        audio.play();
      }
}
  }

  return (
    <div>
      <div>
        <h1 class="selo">Justiça Eleitoral</h1>
        <div class="keys">
          <button class="num um">1</button>
          <button class="num dois">2</button>
          <button class="num tres">3</button>
          <button class="num quatro">4</button>
          <button class="num cinco">5</button>
          <button class="num seis">6</button>
          <button class="num sete">7</button>
          <button class="num oito">8</button>
          <button class="num nove">9</button>
          <button class="num zero">0</button>
          <button class="num branco">BRANCO</button>
          <button class="num corrige">CORRIGE</button>
          <button class="num confirma">CONFIRMA</button>
        </div>
      </div>
    </div>
  )
}

export default keyNumCopy;