import React, { useState } from 'react'
import First from './pages/first'
import Second from './pages/second'
import {Redirect} from 'react-router-dom';

function Onboarding(){
    const [tabNum, setTabNum] = useState(0)

    console.log(tabNum);
    
    if(tabNum === 0){
        return(
            <First upTabNum={()=>{setTabNum(tabNum+1)}} />
        )
    }else if(tabNum === 1){
        return(
            <Second upTabNum={()=>{setTabNum(tabNum+1)}} downTabNum={()=>{setTabNum(tabNum-1)}} />
        )
    }else{
        return(
            <Redirect to="/" />
        )
    }
}

export default Onboarding