import React from 'react'

let test = ()=>{
    return <p>Test</p>
}

let second = (props)=>{
return <p>{props.text}</p>
}

let Pages = {
    intro: test,
    second
}

export default Pages