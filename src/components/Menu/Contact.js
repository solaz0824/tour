import React from 'react'

export default function Contact() {
    return (
        <div style={mainStyle}>
            <h1 style={{fontWeight:'bold', margin:'3% 5% 10%', fontFamily:'Caveat, cursive', fontSize: '3rem'}}>Contact us </h1>
            <h3 style={h3Style}> <i className="far fa-envelope" style={{fontSize:'large'}}></i>  keytour@keytour.com</h3>
            <h3 style={h3Style}>  <i className="fas fa-headset" style={{fontSize:'large'}}></i>  12-123-1234</h3>

        </div>
    )
}


const mainStyle = {
    padding: '2rem',
    margin: '10% 20%',
    fontFamily: 'Cormorant Garamond, serif',
    textAlign: 'center',
    background: '#e8f5e9'
}

const h3Style = {
    margin: '3%',
    fontSize: '1.5rem',
    textAlign:'left'
}

