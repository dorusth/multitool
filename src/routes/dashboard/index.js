import React, {useState, useEffect} from 'react';
import Radar from 'react-d3-radar';

function Dashboard(props){
    const [currentProfile, setCurrentProfile] = useState("frontend")
    const [currentLevel, setCurrentLevel] = useState("1")
    const [currentVal, setCurrentVal] = useState({
        key: "basis",
        label: "Basis",
        color: '#009900',
        values: {}
    })

    useEffect(()=>{
        if(props.indexedProfiles){
            let data = props.indexedProfiles[currentProfile].filter(item => item.key === currentLevel)
            setCurrentVal(data[0])
        }
    },[currentProfile, currentLevel, props.fetched, props.indexedProfiles])

    if(props.indexedProfiles){
        return(
            <section className="dashboard container_full container-content">
                <article className="container-content_left">
                    <h1>Jouw skills</h1>
                </article>
                <article className="container-content_right">
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
                            sets: [
                                currentVal
                            ]
                        }}
                    />
                    <form>
                        <select onChange={(e)=>{setCurrentProfile(e.target.value)}} value={currentProfile} name="profiles" id="profiles">
                            <option value="frontend">Frontend</option>
                            <option value="system">System</option>
                            <option value="backend">backend</option>
                            <option value="video">Video</option>
                        </select>
                        <select onChange={(e)=>{setCurrentLevel(e.target.value)}} value={currentLevel} name="Level" id="level">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </form>
                </article>
            </section>
        )
    }else{
        return <p>Loading....</p>
    }
}

export default Dashboard