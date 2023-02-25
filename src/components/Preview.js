import React from "react";
import "../style/Preview.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Preview(props) {
    async function handleSaveToPDF() {
        const pdf = new jsPDF("portrait", "pt", "a4");
        const data = await html2canvas(document.querySelector(".container"));
        const img = data.toDataURL("image/png");
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("cv.pdf");
    }
    return (
        <div className="Preview">
            <h1>Preview</h1>
            {props.personal.name !== "" ? (
                <div className="container">
                    <div className="preview-container">
                        <div className="personal-container">
                            {Object.values(props.personal).map((value, i) => {
                                return (
                                    <p key={i} className={Object.keys(props.personal)[i]}>
                                        {value}
                                    </p>
                                );
                            })}
                        </div>
                        <div className="work-experience-container">
                            <h1>Experience</h1>

                            {props.workExperience.length > 0
                                ? props.workExperience.map((item, index) => {
                                      return (
                                          <div key={index} className="work-experience">
                                              {Object.values(item).map((value, i) => {
                                                  return (
                                                      <p key={i} className={Object.keys(props.workExperience[0])[i]}>
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
                            {props.education.length > 0
                                ? props.education.map((item, index) => {
                                      return (
                                          <div key={index} className="education">
                                              {Object.values(item).map((value, i) => {
                                                  return (
                                                      <p key={i} className={Object.keys(props.education[0])[i]}>
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
            <button onClick={handleSaveToPDF}>Save to PDF</button>
        </div>
    );
}
