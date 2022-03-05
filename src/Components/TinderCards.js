import React, { useState, useEffect, useContext } from 'react'
import '../css/TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from '../axios';
import { SwipedContext } from '../Context/SwipedContext'

const TinderCards = () => {
    const [people, setPeople] = useState([]);
    const { setSelectedProfile, setSwipedRight } = useContext(SwipedContext);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/tinder/cards")
            setPeople(req.data);

        }
        fetchData();
    }, [])


    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        if (direction === 'right') {
            setSelectedProfile(nameToDelete);
            setSwipedRight(true);
        }
    }

    /* const setLastDirection = (direction) => {
    
     }*/

    const outOfFrame = (name) => {
        console.log(name + "left the screen");

    }

    return (

        <div className="tinderCards">
            <div className="tinderCards__cardContainer" style={{ marginTop: '0vh' }} >

                {
                    people.map((person) =>

                    (<TinderCard className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.imageUrl})`, backgroundPosition: 'center center', height: '70vh' }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                    ))
                }
            </div>
        </div >
    )
}

export default TinderCards
