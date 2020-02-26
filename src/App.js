import React,{useState,useEffect} from "react";
import Header from "./components/Header.js";
import Axios from "axios";
import {Link,Route} from 'react-router-dom';
import CharacterCard from "./components/CharacterCard.js";
import SearchForm from './components/SearchForm';

export default function App() {
  const [characters,setCharacters] = useState([])
  const [charactersToDisplay , setCharactersToDisplay ]= useState([])
  useEffect(()=>{
    Axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(res=>{
      console.log('this is res from app:',res.data.results)
      setCharacters(res.data.results) 
    })
    .catch(err=>{
      console.log('this is a  error:', err)
    })
  },[]);
  return (
    <main>
      <Header />
      <SearchForm characters={characters} setCharactersToDisplay={setCharactersToDisplay}/>
      <div>{charactersToDisplay.map((character)=>{
        return(
          <div key={character.id}>
          <Link to={`/Characters/${character.id}`}> {character.name}</Link>
          </div>
        )
        
      })}
    <Route path="/Characters/:id" render={(props)=>{
      return <CharacterCard characters={characters}{...props}/>
    }}/>
  
      </div>
    </main>
  );
}