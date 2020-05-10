import React from 'react';
import Radar from 'react-d3-radar';
import {Link} from "react-router-dom";

function First(props){

    return(
        <section className="dashboard container_full container-content">
            <article className="container-content_left">
                    <h1>Welkom, Dorus</h1>
                    <p>
                    De organisatie, de technologie, de klant en de markt vragen allemaal om een snelle wendbare medewerker. Iemand die op meerdere fronten inzetbaar is en zijn/haar werk kan doen. Dat betekent dat er meerdere taken van je worden verwacht. 
                    </p>
                    <p>
                    “Voor teamleden willen we toe naar medewerkers met een sterk DevOps profiel die meerdere (technische) vaardigheden beheersen.  Het principe dat medewerkers over meerdere vaardigheden beschikken is belangrijk om met een kleiner team toch heel effectief te blijven.  De situatie dat we per activiteit (test, ontwikkeling, beheer, design, architectuur) een functionaris hebben is kostbaar, minder effectief en niet in lijn met de Agile en DevOps werkvormen”
                    </p>
                    <p>
                    Laat je inspireren en trek hieruit je eigen persoonlijke ontwikkelplan, we zijn niet op zoek naar de ‘superman’, maar naar een medewerker die op meerdere skills ingezet kan worden of mee kan denken. 
                    </p>
                    <div className="button-wrapper">
                        <Link to="./profiles"><button className="secondary">Bekijk profielen</button></Link>
                        <button onClick={()=>{props.upTabNum()}} className="primary"> Start</button>
                    </div>
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
                            sets: [{
                                key: "basis",
                                label: "Basis",
                                color: '#009900',
                                values: {}
                            }]
                        }}
                    />
                </article>
        </section>
    )
}

export default First