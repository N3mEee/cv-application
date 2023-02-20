import React, { Component } from "react";
import "../style/Preview.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default class Preview extends Component {
    constructor(props) {
        super(props);
        this.handleSaveToPDF = this.handleSaveToPDF.bind(this);
    }
    async handleSaveToPDF() {
        const data = await html2canvas(document.querySelector(".preview-container"));

        const imgData = data.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("cv.pdf");
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
