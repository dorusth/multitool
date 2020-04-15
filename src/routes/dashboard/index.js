import React from 'react';
import Radar from 'react-d3-radar';

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentProfile: "frontend",
            currentLevel: 1,
            currentVal:{
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
    }

    changeCurrentProfile(e){
        this.setState({currentProfile: e.target.value}, this.reRenderMap)
    }

    changeCurrentLevel(e){
        this.setState({currentLevel: e.target.value}, this.reRenderMap)
    }

    reRenderMap(){
        let profile = this.props.profiles.find(element => element.profile === this.state.currentProfile)        
        let data = profile.levels.find(element => element.level === this.state.currentLevel.toString())
        this.setState({currentVal:data});
    }
    
    render(){        
        return(
            <section className="dashboard container_full">
                <article className="dashboard-left">
                    <h1>Jouw skills</h1>
                </article>
                <article className="dashboard-right">
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
                            sets: [
                            {
                                key: "basis",
                                label: "Basis",
                                color: '#009900',
                                values: this.state.currentVal
                            }
                            ]
                        }}
                    />
                    <form>
                        <select onChange={this.changeCurrentProfile.bind(this)} name="profiles" id="profiles">
                            <option value="system">System</option>
                            <option value="frontend">Frontend</option>
                            <option value="backend">backend</option>
                            <option value="video">Video</option>
                        </select>
                        <select onChange={this.changeCurrentLevel.bind(this)} name="Level" id="level">
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
    }
}

export default Dashboard