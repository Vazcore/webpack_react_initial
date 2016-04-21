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
                <div class="nav">
                    <Link to="/"><button class="btn btn-success">Home</button></Link>
                    <Link to="stocks" activeClassName="active"><button class="btn btn-success">Stocks</button></Link>
                    <Link to="archive" activeClassName="active"><button class="btn btn-success">Archive</button></Link>
                </div>

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

