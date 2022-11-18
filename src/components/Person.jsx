import React from "react"
import "./Person.css"

function Person({ name, picture, location, phone, dob }) {
	return (
		<div className='person-card'>
			<img src={picture.large} alt='person' />
			<span>
				<p>
					<span className='bolded'>Name</span>: {`${name.title}. ${name.first} ${name.last}`}
				</p>
			</span>
			<span>
				<p>
					<span className='bolded'>Location</span>:{" "}
					{`${location.street.number} ${location.street.name} ${location.postcode} ${location.city}`}
				</p>
			</span>
			<span>
				<p>
					<span className='bolded'>Phone</span>:{phone}
				</p>
			</span>
			<span>
				<p>
					<span className='bolded'>Date of birth</span>: {dob.date.slice(0, dob.date.indexOf("T"))}
				</p>
			</span>
			{/* <span>
				<p></p>
			</span> */}
		</div>
	)
}

export default Person
