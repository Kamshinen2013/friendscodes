import React from 'react'

const Card = ({name, email, id}) => { // then you put the word props in place of {name, email, id}
// const {name, email, id} = props
    return (
        <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5'>
        <img alt = 'robots' src= {`https://robohash.org/${id}?200x200`} /> 

        <div className='tc'>
            <h2> {name}</h2>
            <p> {email}</p>
        </div>   
        </div>
    )
}

export default Card
