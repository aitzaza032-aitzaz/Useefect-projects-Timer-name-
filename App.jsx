
import {  useState,useEffect } from 'react'
import './App.css'

function App() {
   const [seconds,setseconds]=useState(0)

   //2nd project
     const [count,setcount]=useState(0)

   //1st project
     useEffect(()=>
  {
    const interval= setInterval(() => { //setinterval update seconds every 1 secnd
      setseconds((a)=> a+1)
    },1000);

    return ()=>clearInterval(interval); //return ()=>clearInterval(interval) stops timer
                                        //when component is removed
    
  },[]); // starts timner when comp[onents mounths



  
 //2nd project
   useEffect(()=>
  {
    alert("counter updates",count)
  },[count]) // This show whenever counter change it will alert and console 

  

  return (
    <>
      <div>
       <div className='timer'> <h2> Timer {seconds}   
        
         <h2>  increasing and decreasing   {count}    </h2>
     <button className='button'   onClick={()=>setcount(count+1)}>Inc  ++</button> 
      <button className='button'  onClick={()=>setcount(count-1)}>dec --</button> 
        
        
         </h2></div>


    </div>
 
    </>
  )
}

export default App
