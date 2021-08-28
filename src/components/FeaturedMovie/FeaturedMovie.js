import React from 'react';
import './FeaturedMovie.css';

export default ({item}) =>{
    return(
        <section>
            <div>{item.original_name}</div>
        </section>
    );
}