import React from 'react'

function MiseEnForme(props) {
  return (
    <div className='miseEnForme'>
        <iframe width="100%" height="350" src={props.film.link} title={props.film.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen></iframe> 
        <h4>{props.film.title}</h4>
    </div>
  )
}

export default MiseEnForme;