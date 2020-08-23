import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import UnSnapped from '../img/UnSnapCamera.png'
import Snapped from '../img/SnapCamera.png'


const Scraper = props => {
    const onSubmit = (data) => {
        console.log(data)
        props.setLoading(1)
        const rp = require('request-promise')
        const $ = require('cheerio')
        const proxyurl = 'https://cors-anywhere.herokuapp.com/'
        const url = data.url
        const urlWords = 'https://www.readabilityformulas.com/articles/dale-chall-readability-word-list.php'

        const easyWordCounter = function(easyArr, wordArr) {
            console.log(easyArr)
            console.log(wordArr)
            let easyWords = []
            let easy = 0
            for (let i = 0; i < wordArr.length; i++) {
                for (let j = 0; j < wordArr[i].length; j++) {
                    for (let k = 0; k < easyArr.length; k++) {
                        for (let l = 0; l < easyArr[k].length; l++) {
                            if (easyArr[k][l].toLowerCase() === wordArr[i][j].toLowerCase()) {
                                easy++
                            }
                        }
                    }
                }
                easyWords[i] = easy
                easy = 0
            }
            return easyWords
        }

        const daleChallScore = function(diffWords, words, sentences) {
            console.log(diffWords)
            console.log(words)
            console.log(sentences)
            return (0.1579 * ((diffWords / words) * 100)) + (0.0496 * (words / sentences))
        }


        rp(proxyurl + url)
            .then(function(html){
                //success!
                let cheerioObjectReview = $('div > div > div > div > div > div > div', html)
                let reviews = []
                let ratings = []
                let cheerioObjectRating = $('span > span', html)
                console.log('rating', cheerioObjectRating)
                for (let i = 0; i < cheerioObjectReview.length; i++) {
                    if (cheerioObjectReview[i].attribs.class === 'text show-more__control') {
                        console.log(cheerioObjectReview[i].children.length)
                        reviews.push(cheerioObjectReview[i].children[0].data)
                    } 
                }
                for (let i = 0; i < cheerioObjectRating.length; i += 2) {
                	console.log(cheerioObjectRating[i].children[0].data)
                	ratings.push(cheerioObjectRating[i].children[0].data)
                }
                console.log(cheerioObjectReview)
                console.log(reviews)
                console.log('reviews')
                

                return [reviews, ratings]
                




                
            }).then(function(result){
                let words
                rp(proxyurl + urlWords)
                  .then(function(html){
                      //success!
                      console.log('fff')
                      let cheerioObject = $('tr > td', html)
                      let words = []
                      for (let i = 0;  i < cheerioObject.length; i++) {
                          if ((cheerioObject[i].children.length === 1) && (cheerioObject[i].children[0].type === 'text')) {
                              words.push(cheerioObject[i].children[0].data.split(' '))
                          }
                      }
                      console.log(words)
                      console.log(result[0])
                      console.log(result[1])
                      let reviewWords = []
                      let reviewSentences = []
                      for (let i = 0; i < result[0].length; i++) {
                          console.log(result[0][i])
                          reviewWords[i] = result[0][i].split(' ')
                          reviewSentences[i] = result[0][i].split('.' || '!' || '?')

                      }
                      

                      console.log(reviewWords)
                      console.log(reviewSentences)
                      let wordCounts = []
                      let wordCount
                      console.log('jj')
                      for (let i = 0; i < reviewWords.length; i++) {
                          wordCounts.push(reviewWords[i].length)
                      }



                      console.log(wordCounts)

                      let easyWords = easyWordCounter(words, reviewWords)
                      console.log(easyWords)

                      let daleSum = 0
                      let daleArray = []
                      for (let i = 0; i < reviewWords.length; i++) {
                          let daleInstance = daleChallScore((reviewWords[i].length - easyWords[i]), reviewWords[i].length, reviewSentences[i].length)
                          console.log('comment', i, 'has dale-Chall score of', daleInstance)
                          daleArray[i] = daleInstance
                          daleSum += daleInstance
                      }
                      console.log('average dale chall score is', (daleSum / reviewWords.length))
                      props.setData(result[0], daleArray, result[1])
                      props.setLoading(2)

                  })
                  .catch(function(err){
                      //handle error
                      console.log(err)
                  })
                })
            .catch(function(err){
                //handle error
                console.log(err)
            });
    }

    const { register, handleSubmit, errors } = useForm()

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
            height: 300px;
            width: 200 px;
            padding: 160px 270px;

            &:hover{
                background: url(${ Snapped });
                background-position: center;
            }
        }
    `

    return (
        
            <div>
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <label>URL</label>
                    <input name='url' ref={ 
                        register({ 
                            required: true,
                            pattern: {
                                value: /^(https?:\/\/www.|www.|)imdb.com\/title\/tt\d*\/reviews\?ref_=tt_ql_3*$/gm,
                                
                            }
                        }) 
                    }/>
                    { errors.url && <p>please paste a valid url to imdb reviews page</p>}
                    <input className='submit' type='submit'/>
                </form>
            </div>
    )
  
}

export default Scraper