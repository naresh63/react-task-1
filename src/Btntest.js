import React, { useState } from 'react';
//

const Btntest=()=>{
    let [coins,setCoins]=useState(0);
    // increment functinality
    function increment(t){
        if(coins==10){
            setCoins(coins)
            console.log("you reached 10 coins")
        }else{
            setCoins(coins+t)
        }
        
    }
    // decrement functionality
    function decrement(t){
        if(coins== 1){
            setCoins(coins)
            console.log("you reached 1 coin")
        }else{
            setCoins(coins-t)
        }
    }
    // reset functionality
    function reset(){
        setCoins(0)
    }

    return(
        <>
         <p>present coins are {coins}</p>
         <button onClick={ ()=>{increment(1)}}>increment</button>
         <button onClick={()=>{decrement(1)}}>decrement</button>
         <button onClick={reset}>reset </button>

        </>
    )
}

export default Btntest;