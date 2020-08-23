import React from 'react'
import Scraper from './functions/Scraper'
import ReviewCard from './components/reviewCard'
import styled from 'styled-components'
import UnSnapped from './img/UnSnapCamera.png'
import Snapped from './img/SnapCamera.png'

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
                console.log(ratingAvg, ratingInstances)
            }
            
        }
        daleChallAvg /= this.state.daleChallScores.length
        ratingAvg /= ratingInstances
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
            message = <h1>top {this.state.ratings.length + 1} comments have average rating of { ratingAvg } with a reading comprehension level of { readingLevel }</h1>
        }
        const cardArray = infoArr.map(info => <ReviewCard review={ info[0] } daleChallScore={ info[1] } rating={ info[2] } /> )
        const Styles = styled.div`
          .background {
              background: url() no-repeat center fixed;
              background-position: center;
              background-size: cover;
              background-attachment: scroll;
              height: 3100px;
              padding: 140px 100px;
              color: #ffffff
          }
          .submit {
              background: url(${ UnSnapped });
              background-position: center;
              padding: 60px 100px;

              &:hover{
                  background: url(${ Snapped });
                  background-position: center;
              }
          }
        `
        return (
            <Styles>
                <Scraper setData={this.setData} setLoading={this.setLoading}/>
                {message}
                {cardArray}
            </Styles>
            
        )
    }
  
}

export default App