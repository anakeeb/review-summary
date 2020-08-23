import React from 'react'
import Roll from '../img/filmRoll.png'
import RollOpaque from '../img/filmRollOpaque.png'

class reviewCard extends React.Component {
	constructor() {
		super()
	}

	render() {
		console.log(this.props)
		let rating
		switch(parseInt(this.props.rating)) {
            case 1:
            	console.log('case 1')
                rating = (
                    <div>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                    </div>
                )
                break;
            case 2:
                rating = (
                    <div>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                    </div>
                )
                break;
            case 3:
                rating = (
                    <div>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                    </div>
                )
                break;
            case 4:
                rating = (
                    <div>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                    </div>
                )
                break;
            case 5:
                rating = (
                    <div>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                    </div>
                )
                break;
            case 6:
                rating = (
                    <div>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                    </div>
                )
                break;
            case 7:
                rating = (
                    <div>
                        <img className='rating' src={Roll}/>
                        <img className='rating' className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                    </div>
                )
                break;
            case 8:
                rating = (
                    <div>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={RollOpaque}/>
                        <img className='rating' src={RollOpaque}/>
                    </div>
                )
                break;
            case 9:
                rating = (
                    <div>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={RollOpaque}/>
                    </div>
                )
                break;
            default:
            	console.log('def')
                rating = (
                    <div>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                        <img className='rating' src={Roll}/>
                    </div>
                )
                break;
        }


        let readingLevel = ''
        if (this.props.daleChallScore > 9) {
            readingLevel = 'college undergraduate'
        }
        else if (this.props.daleChallScore > 8) {
            readingLevel = 'high school junior'
        }
        else if (this.props.daleChallScore > 7) {
            readingLevel = 'high school freshman'
        }
        else if (this.props.daleChallScore > 6) {
            readingLevel = 'middle schooler'
        }
        else if (this.props.daleChallScore > 5) {
            readingLevel = '5th grader'
        }
        else {
            readingLevel = '4th grade or below'
        }
		return (
			<div className='card'>
				<h1 className='cardH1'>Rating: { rating }</h1>
				<h1 className='cardH1'>Reading Level: { readingLevel }</h1>
				<p>{ this.props.review }</p>
				<br/>
				<br/>
				<br/>
				<br/>
			</div>
			
		)
	}
}

export default reviewCard