import React, { useState, useEffect} from 'react'
export default function SearchForm(props) {
 const [localSearchTerm,setLocalSearchTerm]=useState('')
 const handleChange=(event)=>{
     setLocalSearchTerm(event.target.value)
    
 }
 console.log('props.characters',props.characters )
    useEffect(() => {
      
      if(props.characters) {const results = props.characters.filter(character =>{
        return character.name.toLowerCase().includes(localSearchTerm)
      })
      console.log('results', results)
      return props.setCharactersToDisplay(results)}else{
        props.setCharactersToDisplay(props.characters)
      }
    },[localSearchTerm]);
      useEffect(() => {},[])
      return (
    <section className="search-form">
     <form>
       <input id='search' type='text' name='textField' placeHolder="search" onChange={handleChange} />
     </form>
    </section>
  );
}