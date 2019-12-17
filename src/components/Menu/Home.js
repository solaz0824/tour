import React from 'react';
import Typical from 'react-typical';
import "./Home.scss"


export default function Home(props) {   
    return (
        <div>
            <div className="homeStyle">
                <Typical
                    steps={["With us", 1000, "It is going to be a lovely trip!", 700]}
                    loop={Infinity}
                    wrapper="p"
                />
            </div>
            
            <div style={{ marginTop: "3rem", textAlign:"-webkit-center"}}>
           
                <p className="linkStyle" onClick={()=>props.history.push({pathname:"/tours"})}>Click here to explore our tours</p>
               
         
            </div>
        </div>
    )
}

