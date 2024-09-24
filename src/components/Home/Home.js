import {useState, useMemo} from 'react';
import UseFetch from '../UseFetch/UseFetch';


export default function Home(){
  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);
  const [messageYear, setMessageYear] = useState('');
  const [udatedYear, setUpdatedYear] = useState(messageYear);
  const [emptyButton, setEmptyButton] = useState('empty');
  const [toSend, setToSend] = useState(emptyButton);

  const handleChange = (event) => {
    setMessage(event.target.value);
    if(event.target.value === ""){
      setEmptyButton(event.target.value);
    }
  }
  const handleClick = () => {
    setUpdated(message);
  };

  const handleChangeYear = (event) => {
    setMessageYear(event.target.value);
  }
  const handleClickYear = () => {
    setUpdatedYear(messageYear);
    let length = udatedYear.length;
    if (emptyButton === "" && length!==0){
      setToSend(emptyButton);
    }
  }
  const newUpdated = useMemo(()=>({updated}), [updated]);
  const newUpdatedYear = useMemo(()=>({udatedYear}), [udatedYear]);
  const newEmptyButton = useMemo(()=> ({toSend}), [toSend])

  
  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>Movie Galaxy</h1>
      </div>
    <div className="row" id="rowButtons">
          <button type='submit' style={{borderRadius: "10px", backgroundColor: "transparent", boxShadow: "3px 3px 3px 3px #ffffff", color: "white"}} onClick={handleClick}>Cerca</button>
          <input type="text" id="input" style={{borderRadius: "10px", backgroundColor: "transparent", boxShadow: "3px 3px 3px 3px #ffffff", marginRight: "40px", color: "white" }} name="message" placeholder="cerca il titolo di un film" onChange={handleChange}></input>
          <button type='submit' style={{borderRadius: "10px", backgroundColor: "transparent", boxShadow: "3px 3px 3px 3px #ffffff", color: "white"}} onClick={handleClickYear}>Cerca per anno</button>
          <input type="text" id="inputNew" style={{borderRadius: "10px", backgroundColor: "transparent", boxShadow: "3px 3px 3px 3px #ffffff", marginRight: "40px", color: "white" }} name="message" placeholder="cerca l'anno di uscita" onChange={handleChangeYear}></input>
        </div>
        <div className='containerHome'>
          <UseFetch updated={JSON.stringify(newUpdated)} updatedYear={JSON.stringify(newUpdatedYear)} emptyFirstButton={JSON.stringify(newEmptyButton)}/>
        </div>
    </div>
  )
}