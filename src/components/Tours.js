import React from 'react'
import Tour from './Tour'

const Tours = ({ tours = [] ,handleDeleteTour}) => {
	return (
		<div className='tours'>
			{tours.map((tour) => (
				<Tour key={tour.id} tour={tour} handleDeleteTour={handleDeleteTour}/>
			))}
		</div>
	)
}

export default Tours
