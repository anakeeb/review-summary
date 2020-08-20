import React from 'react'

class reviewCard extends React.Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<h1>rating of { this.props.rating } has reading level { this.props.daleChallScore }</h1>
				<p>{ this.props.review }</p>
				<br/>
			</div>
			
		)
	}
}

export default reviewCard