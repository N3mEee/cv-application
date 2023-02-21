import React from "react";

export default class Personal extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.setValue(e);
    }

    render() {
        return (
            <div className="Personal-Information">
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    value={this.props.personal.name}
                />
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="location"
                    placeholder="Location"
                    value={this.props.personal.location}
                />
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="phoneNumber"
                    placeholder="xxxxxxxxxx"
                    value={this.props.personal.phoneNumber}
                />
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="email"
                    placeholder="cv-application@email.com"
                    value={this.props.personal.email}
                />
            </div>
        );
    }
}
