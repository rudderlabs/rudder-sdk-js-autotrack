import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './WriteStory.css';
import NavBar from './NavBar';
import { Link } from 'react-router-dom'

class WriteStory extends Component {
    render() {
        return (
            <div >
                <div>
                    <NavBar />
                </div >

                <div className="textDiv">
                    <textarea className="textArea" />
                </div>
                <div style={{ textAlign: "center" }}>
                    <Link to="/CreateStory">
                        <Button variant="contained" style={{ backgroundColor: "rgba(210, 160, 63, 3)" }}> Submit Your Story</Button>
                    </Link>
                </div>

            </div>
        )
    }
}
export default WriteStory;