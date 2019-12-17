import React, { useState } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData'

export default function TourList() {
    const [tours, setTours]  = useState(tourData);
    const removeTour = id => {
        setTours(tours);
        const sortedTours = tours.filter(tour => tour.id !== id);
        setTours(sortedTours);
    }
    return (
        <section className="tour-list">
       { tours.map(tour => {
           return   <Tour key={tour.id} tour={tour} removeTour={removeTour}/>
       })
       }
        </section>
        )
}
