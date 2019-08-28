import React from 'react';
import Card from './Card';


const CardList = ({ robotsId }) => {
    return(
        <div>
            {
                robotsId.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robotsId[i].id}
                            name={robotsId[i].name}
                            username={robotsId[i].username}
                            email={robotsId[i].email} />
                    );
                })
            }
        </div>
    );
}

export default CardList;