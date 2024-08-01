import React, { useState } from 'react'

const Tour = ({ tour = {}, handleDeleteTour }) => {
	const [showMore, setShowMore] = useState(false)
	return (
		<div className='tour-card'>
			<img
				className='tour-img'
				src={'http://unsplash.it/300/200?random&gravity=center' || tour.image}
				alt={tour.name}
			/>

			<div className='tour-body'>
				<h2 className='tour-title'>{tour.name}</h2>
				<p className='tour-text' id={`tour-item-para-${tour.id}`}>
					{showMore ? tour.info : tour.info.substring(0, 200)}
				</p>
				<button id={`see-more-${tour.id}`} className='btn' onClick={() => setShowMore((prev) => !prev)}>
					{showMore ? 'See less' : 'See more'}
				</button>
				<p>
					<strong>$ {tour.price}</strong>
				</p>
				<button onClick={() => handleDeleteTour(tour.id)} className='delete-btn' id={`delete-btn-${tour.id}`}>
					Delete
				</button>
			</div>
		</div>
	)
}

export default Tour
