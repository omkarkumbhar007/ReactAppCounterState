import React,{useState} from "react";
import './assets/csscounter.css'
const Counter=()=>
{
    const[count,setCount]=useState(0);

const [countInc,setCountInc]=useState();
const[countDec,setCountDec]=useState();

const inc=()=>
{
    setCount(count+1)
}
const dec=()=>
{
    setCount(count-1);
}

return(
    <>
    <div className="Main-con" style={{   width:"30%",
    height:"220px",
    border:"1px solid #000",
    padding:"10px",
    color:"white",
    textShadow:"2px 5px 3px black",
    margin:"60px 0 0 380px",
    textAlign:"center",
    borderRadius:"10px",
    boxShadow:"2px 2px 1px black;",
    backgroundColor:"#CECECE"
    }}> 
    <h1>Counter Demo</h1>
   <div id="display" style={{width:"100%",height:"80px",padding:"20px",marginTop:"10px",fontWeight:"bold",fontSize:"2rem",color:""}}>{count}</div>
     <button className="b-1" style={{padding:"10px",borderRadius:"10px",backgroundColor:"#4FBA24",color:"white",cursor:"pointer",fontSize:"1.2rem"}}onClick={inc} >Increment</button>
     <button className="b-2" onClick={dec} style={{padding:"10px",marginLeft:"10px",borderRadius:"10px",backgroundColor:"#D13E3F",cursor:"pointer",fontSize:"1.2rem",color:"white"}}>Decrement</button>

     </div>    </>
);
}
export default Counter;