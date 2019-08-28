import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div class="tc shadow-hover dib br3 pa3 ma2 bg-light-green grow bw2 shadow-3">
            <img src={`https://robohash.org/robot${id}?size=200x200`} alt={`robots${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;