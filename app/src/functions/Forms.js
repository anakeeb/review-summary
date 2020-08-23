import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Unsnapped from '../img/unSnappedCamera.png'
import Snapped from 'snappedCamera.png'

function Forms() {
    const onSubmit = (data) => {
        console.log(data)
        
    }
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
            background: #f00;
            background-repeat: no-repeat;
            background-position: <left|right>;
            padding-<left|right>: <width of image>px;

            &:hover{
                background: url(${ Snapped })
            }
        }
    `

    const { register, handleSubmit, errors } = useForm()

    return (
        
            <Styles>
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
            </Styles>
    )
  
}

export default Forms
