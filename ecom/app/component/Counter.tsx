"use client"
import React, { useEffect, useState } from 'react'

function Counter() {

    const [counter ,setCounter] = useState(0)
    
        useEffect(
            () =>{
                const interval = setInterval(
                    () => {
                        setCounter(
                            (current_counter) =>{
                                return current_counter+1;
                            }
                        );
                    },1000
                )
                return () => clearInterval(interval);    //unmount
            },[]
        )
  return (
    <h2>{counter}</h2>
  )
}

export default Counter