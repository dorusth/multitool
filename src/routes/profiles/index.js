import React, {useState, useEffect} from 'react';
import Radar from 'react-d3-radar';

function Profiles(props){
    const [current, setCurrent] = useState(0)
    const [profiles, setProfiles] = useState()
    const [currentProfiles, setCurrentProfiles] = useState([
        {
            key: "basis",
            label: "Basis",
            color: '#009900',
            values: {
                architectuur: 0,
                testen: 0,
                backend: 0,
                cdci: 0,
                cloud: 0,
                dataengineering: 0,
                databases: 0,
                frontend: 0,
                netwerk: 0,
                securityprivacy: 0,
                systemen: 0,
                video: 0,}
        }
        ])

    function indexProfiles(){
        let sets = {}
        props.profiles.map(item => {
            let profileSets = item.levels.map(level =>{
                let colorList = ["#57A634", "#FFC300", "#FF9900", "#FF3333", "#93117E"]
                let levelColor = colorList[level.level-1]
                return {
                    key: level.level,
                    label: level.level,
                    color: levelColor,
                    values: level
                }
            }) 
            sets[item.profile] = profileSets
        });
        console.log(sets);
    }

    if(props.fetched===true){
        indexProfiles()
        return(
            <section className="container_full with_subnav">
                <nav className="container_nav_horizontal">
                    <ul>
                        {props.profiles.map((profile,key) => <li key={key} className={(key===current ?"active" :"")} onClick={() =>{setCurrent(key)}} >{profile.profile}</li>)}
                    </ul>
                </nav>
                <div className="container-content">
                    <div className="container-content_left"></div>
                    <div className="container-content_right">
                    <Radar
                        width={400}
                        height={400}
                        padding={100}
                        domainMax={4}
                        highlighted={null}
                        data={{
                            variables: [
                                { key: "architectuur", label: "Architectuur" },
                                { key: "testen", label: "Automatisch Testen" },
                                { key: "backend", label: "Backend Software" },
                                { key: "cdci", label: "CD/CI" },
                                { key: "cloud", label: "Cloud"},
                                { key: "dataengineering", label: "Data Engineering" },
                                { key: "databases", label: "Databases" },
                                { key: "frontend", label: "Frontend Software" },
                                { key: "netwerk", label: "Netwerk" },
                                { key: "securityprivacy", label: "Security/Privacy" },
                                { key: "systemen", label: "Systemen en OS" },
                                { key: "video", label: "Video" },
                            ],
                            sets: currentProfiles
                        }}
                    /> 
                    </div>
                </div>
            </section>
        )
    }else{
        return(
            <p>loading...</p>
        )
    }
}

export default Profiles