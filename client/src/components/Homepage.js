import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = ({currentUser}) => {
	if(!currentUser.isAuthenticated) {
		return(
			<div className="home-hero">
				<h1>Welcome!</h1>
				<Link to="/signup" className="btn btn-primary">
				Sign up here
				</Link>
			</div>
		)
	}
	return (<div><h2>You are logged in!</h2></div>) 
}

export default Homepage