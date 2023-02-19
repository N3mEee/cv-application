import React, { Component } from "react";

export default class Preview extends Component {
    render() {
        const { firstName, lastName, title } = this.props.state;
        return (
            <div>
                <h1>Preview</h1>
                <p>
                    {firstName} {lastName}
                </p>
                <p>{title}</p>
            </div>
        );
    }
}
