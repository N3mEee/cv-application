import React from "react";

export default class WorkExperience extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.setValue(e, this.props.index);
    }

    render() {
        return (
            <div className="Work-Experience">
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="jobTitle"
                    placeholder="Job Title"
                    value={this.props.value[this.props.index].jobTitle}
                />
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="companyName"
                    placeholder="Company Name"
                    value={this.props.value[this.props.index].companyName}
                />
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="time"
                    placeholder="MM/YYYY - MM/YYYY"
                    value={this.props.value[this.props.index].time}
                />
                <textarea
                    onChange={this.handleChange}
                    id="description"
                    placeholder="Job Description"
                    value={this.props.value[this.props.index].description}
                />
            </div>
        );
    }
}
