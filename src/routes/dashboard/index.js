import React from 'react';
import Radar from 'react-d3-radar';

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            currentProfile: "frontend",
            currentLevel: 1,
            currentVal:{
                architectuur: 1,
                testen: 1,
                backend: 1,
                cdci: 1,
                cloud: 1,
                dataengineering: 1,
                databases: 1,
                frontend: 1,
                netwerk: 1,
                securityprivacy: 1,
                systemen: 1,
                video: 1}
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