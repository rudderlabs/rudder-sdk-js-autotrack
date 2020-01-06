import React, { Component } from 'react';
import NavBar from './NavBar';
import './CreateStory.css';
import { Button } from '../../node_modules/@material-ui/core';
import { Link } from 'react-router-dom';
import WriteStory from './WriteStory';

const prompt = [{characters:["Characters:"," Batman"," ,Chacha Chowdary"],
                 Location:"Hyderabad", Plot:"Chacha Invites"},
                {characteres:["Micky","Chota Bheem"],
                Location:"Jungle", Plot:"Something"},
                {characters:["Characters:"," Bat"," ,Chacha "],
                Location:"Hyderabad", Plot:"Chacha Invites"},
                {characters:["Characters:"," man"," ,Chowdary"],
                 Location:"Hyderabad", Plot:"Chacha Invites"},
                 {characters:["Characters:"," atman"," ,cha Chowdary"],
                 Location:"Hyderabad", Plot:"Chacha Invites"},
                 {characters:["Characters:"," Ba"," ,Chacha "],
                 Location:"Hyderabad", Plot:"Chacha Invites"},
                 {characters:["Characters:"," Batman"," ,Chacha"],
                 Location:"Hyderabad", Plot:"Chacha Invites"}
            
            
            
            ];
class CreateStory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            promptNotClicked: true,
            getPrompt: false,
            /*newpromptClicked: false,
            createStoryClicked: false*/
            storyLine:""
        }
    }
    updatePrompt = () => {
        console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%')
        const newPrompt = prompt[Math.floor(Math.random()*prompt.length)];
        console.log('-=-=-==-=-========-=-=-=-==-===-=-=-=')
        this.setState({
            //storyLine: {...this.state.storyLine, storyLine:newPrompt} 
            storyLine:newPrompt,
        })

    }
    promptClick = () => {
        //let value = false;
        const firstPrompt=prompt[Math.floor(Math.random()*prompt.length)]
        console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
        this.setState({
            promptNotClicked: !this.state.promptNotClicked,
            getPrompt: !this.state.getPrompt,
            storyLine:firstPrompt

        })
    }
    render() {
        let promptvalue = this.state.promptNotClicked;

        return (
            <div>
                <NavBar />
                <div className="createStory">
                    Let's Create An Amazing Story
                </div>
                <div className="introText" >
                    <p>
                        Stories are a way to express our emotions, showcase our creativity while we can send our message to the world.
                        <br />
                        Storify gives you such an oppertunity in a very interresting manner. We give you a prompt, based on the prompt you have to create a story.
                    </p>
                    {promptvalue &&
                        <div className="prompt">
                            <p style={{ fontSize: "15px" }}> Click below to get a prompt </p>
                            <Button style={{backgroundColor:"#bb481bb8",color:"white"}} variant="contained" onClick={this.promptClick}> Prompt </Button>
                        </div>
                    }
   

                    {this.state.getPrompt &&
                        <div className="promptCard">
                        <p>{this.state.storyLine.characters}</p>
                        <p>{this.state.storyLine.Location}</p>
                            <div className="promptButtons">
                                <Button style={{color:"#f30d0dd9",float:"left"}} variant="flat" onClick={this.updatePrompt}> New Prompt</Button>
                                <Link to="/WriteStory">
                                    <Button style={{ backgroundColor: "rgba(210, 160, 63, 3)", color: "white",float:"right" }} variant="raised"  onClick={this.createStoryClick}>Create Story</Button>
                                </Link>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}


export default CreateStory;