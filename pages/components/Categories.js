import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBed } from '@fortawesome/free-solid-svg-icons';
// import { faCouch } from '@fortawesome/free-solid-svg-icons';
// import { faToilet } from '@fortawesome/free-solid-svg-icons';
// import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

export default function Categories() {
	return (
		<main>
			<div className="cgr-container">
				<a href={`../category`}>
					{/* <FontAwesomeIcon className="icon" icon={faBed}/> */}
					<p>Bedroom</p>
				</a>
				<a href={`../category`}>
					{/* <FontAwesomeIcon className="icon" icon={faCouch}/> */}
					<p>LivingRoom</p>
				</a>
				<a href={`../category`}>
					{/* <FontAwesomeIcon className="icon" icon={faToilet}/> */}
					<p>Restroom</p>
				</a>
				<a href={`../category`}>
					{/* <FontAwesomeIcon className="icon" icon={faEllipsis}/> */}
					<p>Other</p>
				</a>
			</div>
		</main>
	)
}