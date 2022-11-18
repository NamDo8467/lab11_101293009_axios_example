import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import Person from "./Person"
function PersonList() {
	const [persons, setPersons] = useState([])
	const url = `https://randomuser.me/api/?results=10`
	useEffect(() => {
		axios
			.get(url)
			.then(result => {
				console.log(result.data.results)
				setPersons(result.data.results)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])
	if (persons.length < 1) {
		return <div>Loading...</div>
	} else {
		return (
			<>
				<h1>Person List</h1>
				<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
					{persons.map(person => {
						return (
							<Person
								key={person.phone}
								name={person.name}
								picture={person.picture}
								location={person.location}
								dob={person.dob}
								phone={person.phone}
							/>
						)
					})}
				</div>
			</>
		)
	}
}

export default PersonList
