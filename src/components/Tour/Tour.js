import React, { useState } from 'react';
import './Tour.scss'

export default function Tour(props) {
    const { id, city, img, name, information } = props.tour
    const { removeTour } = props;
    const [info, setInfo] = useState(false)
    const handleInfo = () => {
        setInfo(!info)
    }
    return (
        <article className="tour">
            <div className="img-box">
                <img
                    src={img} alt="" />
                <span className="close-button" onClick={()=>(removeTour(id))}>
                    <i className="fas fa-window-close" />
                </span>
            </div>
            <div className="tour-information">
                <h3>{city}</h3>
                <h4>{name}</h4>
                <h5>
                    info{" "}
                    <span onClick={handleInfo}>
                        <i className="fas fa-arrow-alt-circle-down"></i>
                    </span>
                </h5>
                {info &&
                    <p>{information}</p>}
            </div>
        </article>
    )
}
