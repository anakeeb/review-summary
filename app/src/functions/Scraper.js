import React from 'react'
import { useForm } from 'react-hook-form'


const Scraper = props => {
    const onSubmit = (data) => {
        props.setLoading(1)
        const rp = require('request-promise')
        const $ = require('cheerio')
        const proxyurl = 'https://cors-anywhere.herokuapp.com/'
        const url = data.url
        const urlWords = 'https://www.readabilityformulas.com/articles/dale-chall-readability-word-list.php'


        const easyWordCounter = function(easyArr, wordArr) {
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
            return (0.1579 * ((diffWords / words) * 100)) + (0.0496 * (words / sentences))
        }


        rp(proxyurl + url)
            .then(function(html){
                //success!
                let cheerioObjectReview = $('div > div > div > div > div > div > div', html)
                let cheerioObjectTitle = $('h3 > a', html)
                let reviews = []
                let ratings = []
                let cheerioObjectRating = $('span > span', html)
                for (let i = 0; i < cheerioObjectReview.length; i++) {
                    if (cheerioObjectReview[i].attribs.class === 'text show-more__control') {
                        reviews.push(cheerioObjectReview[i].children[0].data)
                    } 
                }
                for (let i = 0; i < cheerioObjectRating.length; i += 2) {
                	ratings.push(cheerioObjectRating[i].children[0].data)
                }
                

                return [reviews, ratings, cheerioObjectTitle[0].children[0].data]
                




                
            }).then(function(result){
                let words
                rp(proxyurl + urlWords)
                  .then(function(html){
                      //success!
                      let cheerioObject = $('tr > td', html)
                      let words = []
                      for (let i = 0;  i < cheerioObject.length; i++) {
                          if ((cheerioObject[i].children.length === 1) && (cheerioObject[i].children[0].type === 'text')) {
                              words.push(cheerioObject[i].children[0].data.split(' '))
                          }
                      }
                      let reviewWords = []
                      let reviewSentences = []
                      for (let i = 0; i < result[0].length; i++) {
                          reviewWords[i] = result[0][i].split(' ')
                          reviewSentences[i] = result[0][i].split('.' || '!' || '?')

                      }
                      

                      let wordCounts = []
                      let wordCount
                      for (let i = 0; i < reviewWords.length; i++) {
                          wordCounts.push(reviewWords[i].length)
                      }




                      let easyWords = easyWordCounter(words, reviewWords)

                      let daleSum = 0
                      let daleArray = []
                      for (let i = 0; i < reviewWords.length; i++) {
                          let daleInstance = daleChallScore((reviewWords[i].length - easyWords[i]), reviewWords[i].length, reviewSentences[i].length)
                          daleArray[i] = daleInstance
                          daleSum += daleInstance
                      }
                      props.setData(result[0], daleArray, result[1], result[2])
                      props.setLoading(2)

                  })
                  .catch(function(err){
                      //handle error
                  })
                })
            .catch(function(err){
                //handle error
            });
    }

    const { register, handleSubmit, errors } = useForm()



    return (
        
            <div>

                <form onSubmit={ handleSubmit(onSubmit) }>
                    <label>URL</label>
                    <input className='form' name='url' ref={ 
                        register({ 
                            required: true,
                            pattern: {
                                value: /^(https?:\/\/www.|www.|)imdb.com\/title\/tt\d*\/reviews\?ref_=tt_ql_3*$/gm,
                                
                            }
                        }) 
                    }/>
                    <input className='submit' type='submit'/>
                	{ errors.url && <p>please paste a valid url to imdb reviews page</p>}
                </form>

            </div>
    )
  
}

export default Scraper