import React from 'react'
import LocationDetails from './LocationDetails';

function LocationsList(props) {
    console.log('props from LocationsList', props)
  return(
    <>
      { props.locations ? props.locations.map( (location, i) => {
        return <LocationDetails id={location.id} key={i} lat={location.lat} long={location.long} createdAt={location.createdAt} />
      }) : null }
    </>
  )
}

export default LocationsList;
