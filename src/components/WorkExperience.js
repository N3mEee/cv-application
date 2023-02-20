import React from "react";

export default class WorkExperience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
        this.props.setValue(e.target.value, this.props.index);
    }

    render() {
        return (
            <div className="Work-Experience">
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="companyName"
                    placeholder="Company Name"
                    value={this.state.value}
                />
            </div>
        );
    }
}
