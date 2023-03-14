import React from 'react';

const Searchbox = ({ searchfield, searchChange }) => {
	// We use destructuring above. Allows us to grab the props
	// object and grab its properties. Searchfield is not actually being used here
	return (
		<div className = 'pa2'>
			<input 
			className='pa3 ba b--green bg-light-blue'
			type='search' 
			placeholder='search robots' 
			onChange={searchChange}
			/>
		</div>
		);
}

export default Searchbox;