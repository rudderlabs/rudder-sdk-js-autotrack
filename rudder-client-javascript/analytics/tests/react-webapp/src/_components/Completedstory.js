import React, { Component } from 'react';
import './CompletedStory.css';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

/* hardcoding img link, taking it from local*/
import friends from '../friends.jpg'
import NavBar from './NavBar';
class CompletedStory extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className='storycard'>
                    <p className="storycardText">  Welcome to Storify.com</p>
            <div className="avatarDiv">
            <Tooltip title="Author_Name" placement="top-end" >
                        <Avatar src={friends} alt="nothing" />
             </Tooltip>       
                    </div>

                </div>
            </div>
        )
    }
}

export default CompletedStory;
