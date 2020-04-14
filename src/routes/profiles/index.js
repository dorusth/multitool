import React, {useState} from 'react';

function Profiles(props){
    console.log(props);
    //const [current, setCurrent] = useState(0)
    
    if(props.fetched===true){
        return(
            <section className="main_container">
                <nav>
                    <ul>
                        {props.profiles.map((profile,key) => <li key={key} >{profile.profile}</li>)}
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