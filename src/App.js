import { useState, useEffect } from 'react';
import Robofriend from './Robofriend';
// import { robots } from './robot';
import './App.css';

function App() {

 
  const [robots, setRobots] = useState([]);

  const [search, setSearch] = useState('');
  const searchAble = (e) => {
    setSearch(e.target.value)
  }

  
  useEffect(()=> {
    const getRobots = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const datas = await response.json();
      setRobots(datas)
    }
    getRobots()
  }, [])

  const filterRobots = !search ? robots : robots.filter((robot) => 
  robot.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

  
  
  return (
    
    <div className='main'> 
      <div className='head'>
        <h1>ROBOFRIENDS</h1>
        <input type='search' placeholder='Search Robots' onChange={searchAble}/>
      </div>
      <div>
        <Robofriend filterRobots={filterRobots}/>
      </div>
      
    </div>
  );
}

export default App;
