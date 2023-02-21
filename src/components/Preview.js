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
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await html2canvas(document.querySelector(".preview-container"));
        const img = data.toDataURL("image/png");
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("cv.pdf");
    }
    render() {
        return (
            <div className="Preview">
                <h1>Preview</h1>
                {this.props.personal.name !== "" ? (
                    <div>
                        <div className="preview-container">
                            <div className="personal-container">
                                {Object.values(this.props.personal).map((value, i) => {
                                    return <p key={i}>{value}</p>;
                                })}
                            </div>
                            <div className="work-experience-container">
                                {this.props.workExperience.map((item, index) => {
                                    return (
                                        <div key={index} className="work-experience">
                                            {Object.values(item).map((value, index) => {
                                                return <p>{value}</p>;
                                            })}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <button onClick={this.handleSaveToPDF}>Save to PDF</button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        );
    }
}
