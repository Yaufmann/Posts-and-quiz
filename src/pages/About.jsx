import React, {useEffect, useState} from 'react';
import quiz from '../data/quiez.json'
import MyImput from "../components/UI/input/MyImput";
import '../styles/App.css'
import Card from "../components/Card";
import Loader from "../components/UI/Loader/Loader";


const About = () => {
    const [search,setSearch] = useState("")
    const [quizes, setQuizes] = useState(quiz)

    useEffect(() => {
        setQuizes(quiz.filter(q => q.name.toLowerCase().includes(search.trim())))
    }, [search]);

    return (
        <div className="App">
          <header className='header'>
             <h1>Quizes</h1>
             <MyImput
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
             />
          </header>
          <hr style={{marginTop: '20px'}}/>
          <div className='optionContainer'>
          {quizes.map( quiz =>
              <Card quiz={quiz} key={quiz.id} setQuizes={setQuizes} />
          )}
          </div>
        </div>
    );
};

export default About;