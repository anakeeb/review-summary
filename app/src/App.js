import React from 'react'
import Scraper from './functions/Scraper'
import ReviewCard from './components/reviewCard'
import styled from 'styled-components'
import UnSnapped from './img/UnSnapCameraBig.png'
import Snapped from './img/SnapCameraBig.png'
import Logo from './img/movieLogo.png'
import Roll from './img/filmRoll.png'
import RollOpaque from './img/filmRollOpaque.png'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: 0,
            reviews: [],
            daleChallScores: [],
            ratings: []
        }
        this.setData = this.setData.bind(this)
        this.setLoading = this.setLoading.bind(this)
    }

    setData(reviews, daleChallScores, ratings) {
        this.setState(prevState => {
            return {
                loading: prevState.loading,
                reviews: reviews,
                daleChallScores: daleChallScores,
                ratings: ratings
            }
        })
    }

    setLoading(stage) {
        this.setState(prevState => {
            return {
                loading: stage,
                reviews: prevState.reviews,
                daleChallScores: prevState.daleChallScores,
                ratings: prevState.ratings
            }
        })
    }



    render() {
        console.log(this.state)
        let ratingAvg = 0
        let ratingInstances = 0
        let daleChallAvg = 0
        let infoArr = []
        for (let i = 0; i < this.state.reviews.length; i++) {
            let arr = [this.state.reviews[i], this.state.daleChallScores[i], this.state.ratings[i]]
            infoArr.push(arr)
            daleChallAvg += this.state.daleChallScores[i]
            if ((parseInt(this.state.ratings[i]) % 1) === 0) {
                ratingAvg += parseInt(this.state.ratings[i])
                ratingInstances += 1
            }
            
        }
        daleChallAvg /= this.state.daleChallScores.length
        ratingAvg /= ratingInstances
        ratingAvg = Math.ceil(ratingAvg)
        let rating

        switch(ratingAvg) {
            case 1:
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
        if (daleChallAvg > 9) {
            readingLevel = 'college undergraduate'
        }
        else if (daleChallAvg > 8) {
            readingLevel = 'high school junior'
        }
        else if (daleChallAvg > 7) {
            readingLevel = 'high school freshman'
        }
        else if (daleChallAvg > 6) {
            readingLevel = 'middle schooler'
        }
        else if (daleChallAvg > 5) {
            readingLevel = '5th grader'
        }
        else {
            readingLevel = '4th grade or below'
        }
        let message
        if (this.state.loading === 1) {
            message = <h1>loading</h1>
        }
        else if (this.state.loading === 2) {
            message = <div>
                <h1>Number of Top Comments: {this.state.ratings.length + 1}</h1>
                <div>
                    <h1>Average Rating: { rating }</h1> 
                </div>
                <h1>Average Comment Reading Level: { readingLevel }</h1>
            </div> 
        }
        let cardArray = infoArr.map(info => <ReviewCard review={ info[0] } daleChallScore={ info[1] } rating={ info[2] } /> )
        const Styles = styled.div`
          .background {
              background-image: linear-gradient(to bottom right, #222, #000);
              background-position: center;
              background-size: cover;
              background-attachment: scroll;
              height: 10000px;
              padding: 140px 100px;
              color: #ffffff
          }

          .logo {
              height: 170px;
              width: 300px;
              float: left;
          }

          .submit {
              background: url(${ UnSnapped });
              background-position: center;
              padding: 100px 170px;
              color: #ff0000;

              &:hover{
                  background: url(${ Snapped });
                  background-position: center;
                  padding: 100px 170px;
                  color: #ff0000;
              }
          }

          .rating {
              height: 60px;
              width: 52.5px;
          }

          .message {
              float: right;
          }

          .centered {
              text-align: center;
          }

          .top {
              background-image: linear-gradient(to bottom left, #000, #222);
              color: #fff;
              height: 100px;
          }

          .card {
              background-image: #888;
          }

          .cardH1 {
              color: #f00;
          }
        `
        if (this.state.loading !== 2) {
            cardArray = (
                <div></div>
            )
        }
        return (
            <Styles>
            <div className='top'>
                <img className='logo' src={Logo}/>
                <h1 className='centered'>URL must match following format: </h1>
                <h1 className='centered'>www.imdb.com/title/tt1234567/reviews?ref_=tt_ql_3</h1>
            </div>
            <div className='background'>
              <div className='message'>
                  {message}
              </div>
              <Scraper setData={this.setData} setLoading={this.setLoading}/>
              <br/>
              <br/>
              <br/>
              {cardArray}
              <h1>But How Does All of This Work?</h1>
              <p>Using webscraping and the Dale-Challs formula for reading comprehension (which says that the greater the ratio of difficult words to easy words, and the more words per sentence, the more challenging a paragraph is to read) you can analyze the reading level required to understand the top reviews on popular movie</p>
            </div> 
            </Styles>
            
        )
    }
  
}

export default App