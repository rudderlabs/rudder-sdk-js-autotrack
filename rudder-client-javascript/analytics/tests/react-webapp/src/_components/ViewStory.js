import React, { Component } from 'react';
import './ViewStory.css';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

class ViewStory extends Component {

    cardStyle={
        margin: '10px 400px 100px 400px',
         height:'900px',
         padding:'30px',
         boxShadow: ' 3px 5px 20px rgb(202, 202, 202)',
    }
    render() {
        return (
            <Grid >
                <div >
                    <Link to="/Home" className="bigStorify">
                        <h3 > Storify<p className="com">.com</p></h3>
                    </Link>
                </div>
                <div style={{height:'100px', backgroundColor:'#b5b5b5'}}></div>

                <Card  style={this.cardStyle}> this is a story page</Card>
            <div>
                {this.props.productIndex}
            </div>

            </Grid>
        );
    }
};
export default ViewStory;