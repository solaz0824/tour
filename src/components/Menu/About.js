import React from 'react';
//import BorderWrapper from 'react-border-wrapper';


export default function About() {
    let data = `Contrary to popular belief, \n
   Lorem Ipsum is not simply random text.\n
    It has roots in a piece of classical Latin literature from 45 BC, \n
    making it over 2000 years old. Richard McClintock, a Latin professor \n
    at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, \n
    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,\n
    discovered the undoubtable source. Lorem Ipsum comes from sections \n
    1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" \n
    (The Extremes of Good and Evil) by Cicero, written in 45 BC. \n
    This book is a treatise on the theory of ethics, very popular during the Renaissance. \n `
   

    
    return (
       <div style={{ margin: '3%', marginLeft: '20%' }}>
                    <h1 style={{ fontFamily: 'Caveat, cursive', marginBottom: '1.5rem', textAlign: 'right' }}>About us
                     <i className="fab fa-keycdn" /></h1>
                    <h2 style={{ marginBottom: '1.5rem', fontFamily: 'Cormorant Garamond, serif' }}> Where does it come from?</h2>
                {
                    data.split('\n').map((line, i) => {
                        return (<span style={{ fontFamily: 'Cormorant Garamond, serif' }} key={i}>{line}<br /></span>)
                    })
                }

      </div>

    )
}
