import React,{Component} from 'react';
import StoryCard from './StoryCard.js';

class ProductInfo extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p>{this.props.value}</p>
            </div>
        )
    }
}
export default ProductInfo;