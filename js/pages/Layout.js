import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import Workspace from './../components/Workspace';
import { Link } from 'react-router';


export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {title: "Default Title"};
    }

    changeTitle(e) {
        const title = e.target.value;
        this.setState({title});
    }

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="archive">Archive</Link>
                <hr/>
                {this.props.children}
                <hr/>
                <Header title={this.state.title}/>
                <Workspace title={this.state.title} changeTitle={this.changeTitle.bind(this)} />
                <Footer/>
            </div>
        );
    }
}

