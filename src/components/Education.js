import React from "react";

export default class Education extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.setValue(e, this.props.index);
    }

    render() {
        return (
            <div className="Education">
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    value={this.props.value[this.props.index].subject}
                />
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="university"
                    placeholder="University"
                    value={this.props.value[this.props.index].university}
                />
                <input
                    onChange={this.handleChange}
                    type="text"
                    id="time"
                    placeholder="MM/YYYY - MM/YYYY"
                    value={this.props.value[this.props.index].time}
                />
            </div>
        );
    }
}
