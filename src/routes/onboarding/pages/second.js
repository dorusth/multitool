import React from 'react';

function Second(props){

    return(
        <section className="dashboard container_full container-content">
            <article className="container-content_left">
                    <h1>Jouw Profiel</h1>
                    <p>
                    De multi-skilled DevOps profielen betsaan uit een twaalftal hardskills, elk van deze hardskills bestaan uit maximaal vijf levels. Je kan groeien op een expertise gebied, waarbij de hardskill dominant is, maar ook andere hardskills groeien mee bij het groeien van een dominante hardskill.
                    </p>

                    <h3>Cluster</h3>
                    <form>
                        <select onChange={()=>{}} value="" name="profiles" id="profiles">
                            <option value="" disabled >Kies jouw cluster</option>
                            <option value="frontend">Frontend</option>
                            <option value="system">System</option>
                            <option value="backend">backend</option>
                            <option value="video">Video</option>
                        </select>
                    </form>
                    <div className="button-wrapper">
                        <button onClick={()=>{props.downTabNum()}} className="secondary">Vorige</button>
                        <button onClick={()=>{props.upTabNum()}} className="primary"> Volgende</button>
                    </div>
                </article>
                <article className="container-content_right">
                </article>
        </section>
    )
}

export default Second