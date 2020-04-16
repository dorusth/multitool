import React, { useEffect, useState } from 'react'
import Pages from './pages'

function Onboarding(){

    //const [wizardPageNum, setWizardPageNum] = useState(0)
    const [CurrentPage, setCurrentPage] = useState(Pages.intro)

    useEffect(()=>{ 
        console.log("nope");
        
    },[])

    return(
        <section className="dashboard container_full container-content">
        </section>
    )
}

export default Onboarding