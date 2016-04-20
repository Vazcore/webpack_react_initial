import React from 'react';

export default class Workspace extends React.Component {

    changeTitle(e) {
        console.log(this);
    }

    render() {
        return (
            <div>
                <input  onChange={this.props.changeTitle} />
            </div>
        );
    }
}