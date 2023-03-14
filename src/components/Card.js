import React from 'react';

const Card = (props) => {
	// So the function takes the props parameter and returns
	// the following
	const { name, email, id } = props;
	// So we have the props be the name email and id
	// This is due to ES6, so props has those 3 objects
	// Then in index
		return (
		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
		{/*Pre-defined tachyon class above*/}
		{/*Shadow-5 does make it look more 3d doe*/}
			<img alt='robot'src={`https://robohash.org/${id}?size=200x200`} />

			<div>
			<h4>{name}</h4>
			<p>{email}</p>
			</div>
		</div>

		);
}

export default Card;