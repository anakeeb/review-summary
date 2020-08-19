import React from 'react'
import { useForm } from 'react-hook-form'

function Forms() {
    const onSubmit = (data) => {
        console.log(data)
        
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

export default Forms
