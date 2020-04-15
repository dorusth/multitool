import React, {useState} from 'react';

function Profiles(props){
    console.log("ckeck");
    const [current, setCurrent] = useState(0)
    if(props.fetched===true){
        return(
            <section className="container_full with_subnav">
                <nav className="container_nav_horizontal">
                    <ul>
                        {props.profiles.map((profile,key) => <li key={key} className={(key===current ?"active" :"")} onClick={() =>{setCurrent(key)}} >{profile.profile}</li>)}
                    </ul>
                </nav>
            </section>
        )
    }else{
        return(
            <p>loading...</p>
        )
    }
}

export default Profiles