import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Workspace from './Workspace';


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
                <Header title={this.state.title}/>
                <Workspace title={this.state.title} changeTitle={this.changeTitle.bind(this)} />
                <Footer/>
            </div>
        );
    }
}

