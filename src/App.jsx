import React,{useEffect, useState} from 'react'
import Counter from './Counter';
import './assets/csscounter.css'
const App=()=>
{
  

  const[firstName,setFirstName]=useState('');
  const[age,setAge]=useState(0);
  const[birthDate,setBirthDate]=useState('');

  


  // const handleName=(e)=>
  // {
  //     setFirstName(e.target.value);
  // }

  // const handleAge=(e)=>
  // {
  //   setAge(e.target.value);
  // }
  // const handleBirthDate=(e)=>
  // {
  //   setBirthDate(e.target.value);
  // }

 const greet='Hello India'
   return(
     <>
    {/* // <input type="text" value={firstName} placeholder='Enter a FirstName'  name='firstName' autoComplete='off' onChange={handleName}/>
    // <input type="number" value={age} placeholder='Enter a Age'  name='age' autoComplete='off' onChange={handleAge}/>
    // <input type="text" value={birthDate} placeholder='Enter a BirthDate'  name='birthDate' autoComplete='off' onChange={handleBirthDate}/>
    // <div id="output-box">
    //   <h3>First Name is: {firstName}</h3>
    //   <h3>Age: {age}</h3>
    //   <h3>Birth Date:  {birthDate}</h3>
    // </div> */}

    <Counter/>

    </>
   )
}
export default App;