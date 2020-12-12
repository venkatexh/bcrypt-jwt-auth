import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store/actions/auth'

class Navbar extends Component {
	logout = e => {
		e.preventDefault()
		this.props.logout()
	}
	render() {
		return(
		<nav className="navbar navbar-expand">
			<div className="container-fluid">
				<div>
					<Link to="/" className="navbar-brand">Home</Link>
				</div>
				{ this.props.currentUser.isAuthenticated ? (
					<ul className="nav navbar-nav navbar-right">
							<li><a onClick={this.logout} >Log Out</a> </li>
					</ul>) : (
					<div>
						<ul className="nav navbar-nav navbar-right">
							<li><Link to="/signup">Sign Up</Link></li>
							<li><Link to="/signin">Login</Link></li>
						</ul>
					</div>
					)
				}
				
				
			</div>
		</nav>)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps, {logout})(Navbar)