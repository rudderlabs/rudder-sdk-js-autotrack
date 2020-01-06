import React, { Component } from 'react';
import './Home.css';
import Stories from '../_data/StoriesDB.json';
import Practice from './Practice';
//import Card from './Card'
import StoryCard from './StoryCard';
//import MediaCard from './MediaCard';
import NavBar from './NavBar';
class Home extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         products: toysjson,
    //     }
    // }
    render() {
        return (
            <div>

                <NavBar />
                <h3 align="center" className="collab"> STORY COLLABORATIONS</h3>
                <div className='hor-slide-container'  >
                    {Stories.map((game, i) => <StoryCard key={i} products={game} />)}
                </div>
            </div>
        );
    }
}



export default Home;
