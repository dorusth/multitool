import React, {useState, useEffect} from 'react';
import Radar from 'react-d3-radar';

function Profiles(props){
    const [current, setCurrent] = useState(0)
    const [currentName, setCurrentName] = useState()
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

        useEffect(()=>{
            if(props.indexedProfiles){
                setCurrentProfiles(props.indexedProfiles[props.profiles[0].profile]);
                setCurrentName(props.profiles[0].profile)
            }
        },[props.indexedProfiles, props.profiles])

    if(props.fetched===true){
        return(
            <section className="container_full with_subnav">
                <nav className="container_nav_horizontal">
                    <ul>
                        {props.profiles.map((profile,key) => <li key={key} className={(key===current ?"active" :"")} onClick={() =>{setCurrent(key); setCurrentName(profile.profile); setCurrentProfiles(props.indexedProfiles[profile.profile])}} >{profile.profile}</li>)}
                    </ul>
                </nav>
                <div className="container-content">
                    <div className="container-content_left">
                        <div onMouseEnter={()=>{setCurrentProfiles([props.indexedProfiles[currentName][4]])}} onMouseLeave={()=>{setCurrentProfiles(props.indexedProfiles[currentName])}} className="profile-level-description basis" >
                            <h3>Basis</h3>
                            <p>Je bent nieuwsgierig, geïnspireerd en intrinsiek gemotiveerd om dingen gedaan te krijgen. Je wil verbeteren. Werkt samen en zoekt de interactie op team niveau. Vraagt hulp indien nodig. Je bent respectvol, luistert goed, en bent open en transparant. Je handelt volgens de agile waarden en devops principes.</p>
                        </div>
                        <div onMouseEnter={()=>{setCurrentProfiles([props.indexedProfiles[currentName][3]])}} onMouseLeave={()=>{setCurrentProfiles(props.indexedProfiles[currentName])}} className="profile-level-description junior" >
                            <h3>Junior</h3>
                            <p>Je doet verbetervoorstellen. Je spreekt anderen aan op onduidelijkheid en het nakomen van afspraken. Je presenteert tijdens een demo. Zoekt interactie met andere teams. Geeft complimenten aan teamleden. Je voelt je verantwoordelijk voor het teamresultaat.</p>
                        </div>
                        <div onMouseEnter={()=>{setCurrentProfiles([props.indexedProfiles[currentName][2]])}} onMouseLeave={()=>{setCurrentProfiles(props.indexedProfiles[currentName])}} className="profile-level-description medior" >
                            <h3>Medior</h3>
                            <p>Je werkt autonoom en stelt prioriteiten. Draagt zorg dat continu verbeteren onderdeel is van dagelijks werk. Geeft persoonlijke feedback en helpt anderen te groeien. Faciliteert scrum ceremonies indien nodig. Zoekt interactie met het team in andere Tribes en neemt actief deel in guild(s).</p>
                        </div>
                        <div onMouseEnter={()=>{setCurrentProfiles([props.indexedProfiles[currentName][1]])}} onMouseLeave={()=>{setCurrentProfiles(props.indexedProfiles[currentName])}} className="profile-level-description senior" >
                            <h3>Senior</h3>
                            <p>Je bent nieuwsgierig, geïnspireerd en intrinsiek gemotiveerd om dingen gedaan te krijgen. Je wil verbeteren. Werkt samen en zoekt de interactie op team niveau. Vraagt hulp indien nodig. Je bent respectvol, luistert goed, en bent open en transparant. Je handelt volgens de agile waarden en devops principes.</p>
                        </div>
                        <div onMouseEnter={()=>{setCurrentProfiles([props.indexedProfiles[currentName][0]])}} onMouseLeave={()=>{setCurrentProfiles(props.indexedProfiles[currentName])}} className="profile-level-description mentor" >
                            <h3>Mentor</h3>
                            <p>Je creëert en maakt zich hard voor teamoverstijgende verbeteringen, empowered anderen en motiveert het team. Experimenteert met nieuwe technieken en werkwijzen, laat leiderschap zien op tribe niveau en stimuleert interactie en afstemming met teams in andere tribes en buiten KPN.</p>
                        </div>
                    </div>
                    <div className="container-content_right">
                    <Radar
                        width={400}
                        height={400}
                        padding={100}
                        domainMax={5}
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