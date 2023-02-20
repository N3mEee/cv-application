import React, { Component } from "react";
import "../style/Preview.css";

export default class Preview extends Component {
    constructor(props) {
        super(props);
        this.handleSaveToPDF = this.handleSaveToPDF.bind(this);
    }
    handleSaveToPDF() {
        const printwin = window.open("");
        printwin.document.write(document.querySelector(".preview-container").innerHTML);
        printwin.print();
    }
    render() {
        const { firstName, lastName, title } = this.props.state;
        return (
            <div className="Preview">
                <h1>Preview</h1>
                <div className="preview-container">
                    <p>
                        {firstName} {lastName}
                    </p>
                    <p>{title}</p>
                    <div className="work-experience">
                        {this.props.newWorkExperience.map((item, index) => {
                            return <p key={index}>{item.value}</p>;
                        })}
                    </div>
                </div>
                <button onClick={this.handleSaveToPDF}>Save to PDF</button>
            </div>
        );
    }
}
