import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import transitions from '../../node_modules/@material-ui/core/styles/transitions';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';

import './StoryCard.css';
import Users from '../_data/Users.json'
class StoryCard extends Component {
    constructor() {
        super();
        this.state = {
            productIndex: '',
            productImageName: '',
            clickedProductDescription: '',
            userimage: Users,
            backgroundColor:'rgba(228, 228, 228, 0.78)'
        }
    }
    cardClick = (id, imgname, e) => {
        this.setState({ productIndex: id });
        this.setState({ productImageName: imgname })
        alert(id + " " + imgname + " card clicked");
    }

    cardStyle = {
        padding: '0px 10px 10px 10px',
        margin: '20px',
        borderRadius: '5px',
        backgroundColor: 'white',
        cursor:'pointer',
    }

    render() {

        if (this.state.productIndex !== '') {


            return <Redirect to='/ViewStory'  />
        }
        return (
            <div style={this.cardStyle}
                onClick={(e) =>
                    this.cardClick(this.props.products.id, this.props.products.ImageAddress, e)} >
                <div className="info"  >
                    <h2>{this.props.products.StoryName}</h2>
                    <div  align="left">{this.props.products.Description}</div><br />

                </div>

                <div  >
                    {/* {console.log(this.props.products.Users)} */}
                    {this.props.products.Users ? this.props.products.Users.map((image0, i) =>
                        <Tooltip title={image0.ImageAddress.slice(0, -5)} >
                            <Avatar style={{ display: "inline-block", float: "right", bottom:'1px'}}
                                src={require('../photos/' + image0.ImageAddress)}
                                alt="nothing" />
                        </Tooltip>) : ''}
                </div>
                <Button size="small" color="primary"> Read</Button>
            </div>
        );
    }
}
export default StoryCard;
