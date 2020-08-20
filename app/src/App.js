import React from 'react'
import { useForm } from 'react-hook-form'

function App() {
    const onSubmit = (data) => {
        console.log(data)
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

        const sentenceCounter = function(wordArr) {
            for (let i = 0; i < wordArr.length; i++) {

            }
        }

        rp(proxyurl + url)
            .then(function(html){
                //success!
                let cheerioObject = $('div > div > div > div > div > div > div', html)
                let reviews = []
                for (let i = 0; i < cheerioObject.length; i++) {
                    if (cheerioObject[i].attribs.class === 'text show-more__control') {
                        console.log(cheerioObject[i].children.length)
                        reviews.push(cheerioObject[i].children[0].data)
                    } 
                }
                console.log(cheerioObject)
                console.log(reviews)
                console.log('reviews')
                

                return reviews
                




                
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
                      console.log(result)
                      let reviewWords = []
                      let reviewSentences = []
                      for (let i = 0; i < result.length; i++) {
                          console.log(result[i])
                          reviewWords[i] = result[i].split(' ')
                          reviewSentences[i] = result[i].split('.' || '!' || '?')

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
                      for (let i = 0; i < reviewWords.length; i++) {
                          let daleInstance = daleChallScore((reviewWords[i].length - easyWords[i]), reviewWords[i].length, reviewSentences[i].length)
                          console.log('comment', i, 'has dale-Chall score of', daleInstance)
                          daleSum += daleInstance
                      }
                      console.log('average dale chall score is', (daleSum / reviewWords.length))
                      

                  })
                  .catch(function(err){
                      //handle error
                      console.log('err')
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
                    <input name='url' ref={ 
                        register({ 
                            required: true,
                            pattern: {
                                value: /^(https?:\/\/www.|www.|)imdb.com\/title\/tt\d*\/reviews\?ref_=tt_ql_3*$/gm,
                                
                            }
                        }) 
                    }/>
                    { errors.url && <p>please paste a valid url to imdb reviews page</p>}
                    <input type='submit'/>
                </form>
            </div>
    )
  
}

export default App