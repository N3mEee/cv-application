import React from "react";
import "../style/App.css";
import Preview from "./Preview";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            title: "",
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <form>
                        <input
                            onChange={this.handleOnChange}
                            type="text"
                            id="firstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                        />
                        <input
                            onChange={this.handleOnChange}
                            type="text"
                            id="lastName"
                            placeholder="Last Name"
                            value={this.state.lastName}
                        />
                        <input
                            onChange={this.handleOnChange}
                            type="text"
                            id="title"
                            placeholder="Title"
                            value={this.state.title}
                        />
                    </form>
                    <Preview state={this.state} />
                </header>
            </div>
        );
    }
}
