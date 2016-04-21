import React from 'react';
import { Link } from 'react-router';

export default class Stock extends React.Component {

    constructLink(){
        return "stocks/" + this.props.title;
    }

    render() {
        return (
            <div class="col-xs-12 col-md-4">
                <Link to={this.constructLink()}><h3>{this.props.title}</h3></Link>
                <p>{this.props.text}</p>
            </div>
        );
    }
}

