import './app.css'
import Trivia from './components/Trivia';
import { useState, useEffect, useMemo } from 'react';
import Timer from './components/Timer';
import Start from './components/Start';
function App() {

  const [user, setUser] = useState(null )
  const[questionNumber, setQuestionNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")

  const data = [
    {
      id: 1,
      question: "When Messi won his first ballon Dor?",
      answers: [
        {
          text: "2007",
          correct: false,
        },
        {
          text: "2009",
          correct: true,
        },
        {
          text: "2013",
          correct: false,
        },
        {
          text: "2010",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which Soviet goalkeeper was known as The Black Spider?",
      answers: [
        {
          text: "Lev Yashin",
          correct: true,
        },
        {
          text: "Zelimkhan",
          correct: false,
        },
        {
          text: "Agalárov",
          correct: false,
        },
        {
          text: "Baýramow",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "wich was the last team Juan Roman Riquelme Played?",
      answers: [
        {
          text: "Barcelona",
          correct: false,
        },
        {
          text: "Boca Juniors",
          correct: false,
        },
        {
          text: "River Plate",
          correct: false,
        },
        {
          text: "Argentinos Juniors",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "In wich team did Paolo Maldini Played?",
      answers: [
        {
          text: "Roma",
          correct: false,
        },
        {
          text: "Milan",
          correct: true,
        },
        {
          text: "Juventus",
          correct: false,
        },
        {
          text: "Napoli",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "According to the official FIFA rulebook, how long can a goalkeeper hold the ball?",
      answers: [
        {
          text: "6 seconds",
          correct: true,
        },
        {
          text: "2 seconds",
          correct: false,
        },
        {
          text: "3 seconds",
          correct: false,
        },
        {
          text: "5 seconds",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "How many goals did Brazilian soccer legend Pelé score in his league debut?",
      answers: [
        {
          text: "4 goals",
          correct: true,
        },
        {
          text: "0 goals",
          correct: false,
        },
        {
          text: "1 goal",
          correct: false,
        },
        {
          text: "2 goals",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which Spanish club's nickname is Los Colchoneros?",
      answers: [
        {
          text: "Sevilla",
          correct: false,
        },
        {
          text: "Real Madrid",
          correct: false,
        },
        {
          text: "Barcelona",
          correct: false,
        },
        {
          text: "Atletico Madrid",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "When was first official international football match was played?",
      answers: [
        {
          text: "1878",
          correct: true,
        },
        {
          text: "1872",
          correct: true,
        },
        {
          text: "1900",
          correct: false,
        },
        {
          text: "1830",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which country became the first nation to win the Football World Cup?",
      answers: [
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Argentina",
          correct: false,
        },
        {
          text: "France",
          correct: false,
        },
        {
          text: "Uruguay",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "In which World Cup did Diego Maradona score his infamous 'Hand of God' goal?",
      answers: [
        {
          text: "Mexico 1986",
          correct: true,
        },
        {
          text: "Italy 1990",
          correct: false,
        },
        {
          text: "Argentina 1978",
          correct: false,
        },
        {
          text: "Japan 2002",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which country has won the most World Cups?",
      answers: [
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "Italy",
          correct: false,
        },
        {
          text: "Brazil",
          correct: true,
        },
        {
          text: "France",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "What number Messi wore at the start of his career at Barca?",
      answers: [
        {
          text: "30",
          correct: false,
        },
        {
          text: "19",
          correct: true,
        },
        {
          text: "10",
          correct: false,
        },
        {
          text: "9",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who is the Champions League's top goalscorer of all time?",
      answers: [
        {
          text: "Cristiano Ronaldo",
          correct: true,
        },
        {
          text: "Messi",
          correct: false,
        },
        {
          text: "Benzema",
          correct: false,
        },
        {
          text: "Zidane",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Messi has spent his entire professional career at Barcelona, but what was his schoolboy team?",
      answers: [
        {
          text: "River Plate",
          correct: false,
        },
        {
          text: "Chacarita",
          correct: false,
        },
        {
          text: "Rosario Central",
          correct: false,
        },
        {
          text: "Newell's Old Boys",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Who won the 2022 FIFA World Cup Young Player Award",
      answers: [
        {
          text: "Mbappe",
          correct: false,
        },
        {
          text: "Enzo Fernandez",
          correct: true,
        },
        {
          text: "Joško Gvardiol",
          correct: false,
        },
        {
          text: "Jude Bellingham",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(()=> 
 
    [
      {id: 1, amount: '$100'},
      {id: 2, amount: '$200'},
      {id: 3, amount: '$400'},
      {id: 4, amount: '$800'},
      {id: 5, amount: '$1.500'},
      {id: 6, amount: '$3.000'},
      {id: 7, amount: '$6.500'},
      {id: 8, amount: '$12.000'},
      {id: 9, amount: '$25.000'},
      {id: 10, amount: '$50.000'},
      {id: 11, amount: '$100.000'},
      {id: 12, amount: '$200.000'},
      {id: 13, amount: '$300.000'},
      {id: 14, amount: '$500.000'},
      {id: 15, amount: '$1.000.000'}
    ]
  ,[])

  useEffect(() => {

    questionNumber > 1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber - 1).amount)

  },[moneyPyramid, questionNumber])

  return (
    <div className="app">
      {!user ? (
        <Start setUser={setUser} />
      ) : (
    <>
    
    
      <div className="main">
        {stop ? (
        <h1 className='endText'>{user} earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
            <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
            </div>
            <div className="bottom"><Trivia data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setTimeOut={setTimeOut} /></div>        
          </>
        )}
      </div>
      <div className="pyramid">
        <ul className='moneyList'>
          <p className='player'>Player: {user}</p>
        {moneyPyramid.map((m) => (
            <li className={questionNumber === m.id ? 'moneyListItem active' : 'moneyListItem'}>
            <span className='moneyListItemNumber'>{m.id}</span>
            <span className='moneyListItemAmount'>{m.amount}</span>
            </li>
        )).reverse()}
        </ul>
      </div>
    </>
    )}
    </div>
  );
}

export default App;
