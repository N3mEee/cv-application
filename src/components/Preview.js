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
        const data = await html2canvas(document.querySelector(".container"));
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
                    <div className="container">
                        <div className="preview-container">
                            <div className="personal-container">
                                {Object.values(this.props.personal).map((value, i) => {
                                    return (
                                        <p key={i} className={Object.keys(this.props.personal)[i]}>
                                            {value}
                                        </p>
                                    );
                                })}
                            </div>
                            <div className="work-experience-container">
                                <h1>Experience</h1>

                                {this.props.workExperience.length > 0
                                    ? this.props.workExperience.map((item, index) => {
                                          return (
                                              <div key={index} className="work-experience">
                                                  {Object.values(item).map((value, i) => {
                                                      return (
                                                          <p
                                                              key={i}
                                                              className={Object.keys(this.props.workExperience[0])[i]}
                                                          >
                                                              {value}
                                                          </p>
                                                      );
                                                  })}
                                              </div>
                                          );
                                      })
                                    : ""}
                            </div>
                            <div className="education-container">
                                <h1>Education</h1>
                                {this.props.education.length > 0
                                    ? this.props.education.map((item, index) => {
                                          return (
                                              <div key={index} className="education">
                                                  {Object.values(item).map((value, i) => {
                                                      return (
                                                          <p
                                                              key={i}
                                                              className={Object.keys(this.props.education[0])[i]}
                                                          >
                                                              {value}
                                                          </p>
                                                      );
                                                  })}
                                              </div>
                                          );
                                      })
                                    : ""}
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
                <button onClick={this.handleSaveToPDF}>Save to PDF</button>
            </div>
        );
    }
}
