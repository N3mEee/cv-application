import React from "react";
import "../style/App.css";
import Preview from "./Preview";
import WorkExperience from "./WorkExperience";
import Personal from "./Personal";
import Education from "./Education";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            personal: {
                name: "",
                location: "",
                phoneNumber: "",
                email: "",
            },
            workExperience: [],
            education: [],
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleAddComponent = this.handleAddComponent.bind(this);
        this.handleWorkExperienceChange = this.handleWorkExperienceChange.bind(this);
        this.handleEducationChange = this.handleEducationChange.bind(this);
        this.handleDeleteComponent = this.handleDeleteComponent.bind(this);
    }

    handleOnChange(e) {
        const personalCopy = this.state.personal;
        personalCopy[e.target.id] = e.target.value;
        this.setState({ personal: personalCopy });
    }

    handleWorkExperienceChange(e, i) {
        const workExperienceCopy = this.state.workExperience;
        workExperienceCopy[i][e.target.id] = e.target.value;
        this.setState({ workExperience: [...workExperienceCopy] });
    }

    handleEducationChange(e, i) {
        const educationCopy = this.state.education;
        educationCopy[i][e.target.id] = e.target.value;
        this.setState({ education: [...educationCopy] });
    }

    handleAddComponent(e) {
        e.preventDefault();
        if (e.target.id === "addExperience") {
            this.setState({
                workExperience: [
                    ...this.state.workExperience,
                    { jobTitle: "", companyName: "", time: "", description: "" },
                ],
            });
        } else if (e.target.id === "addEducation") {
            this.setState({
                education: [...this.state.education, { subject: "", university: "", time: "" }],
            });
        }
    }

    handleDeleteComponent(e, index) {
        e.preventDefault();
        if (e.target.className === "deleteEducation") {
            const educationCopy = this.state.education;
            educationCopy.splice(index, 1);
            this.setState({
                education: [...educationCopy],
            });
        } else if (e.target.className === "deleteExperience") {
            const experienceCopy = this.state.workExperience;
            experienceCopy.splice(index, 1);
            this.setState({
                workExperience: [...experienceCopy],
            });
        }
    }

    render() {
        return (
            <div className="App">
                <header className="app-header">
                    <form className="form-container">
                        <p>Personal Information</p>
                        <Personal personal={this.state.personal} setValue={this.handleOnChange} />
                        <p>Work Experience</p>
                        {this.state.workExperience.map((item, index) => {
                            return (
                                <div className="experience-container" key={index}>
                                    <button
                                        onClick={(e) => this.handleDeleteComponent(e, index)}
                                        className="deleteExperience"
                                    >
                                        Delete
                                    </button>
                                    <WorkExperience
                                        index={index}
                                        value={this.state.workExperience}
                                        setValue={this.handleWorkExperienceChange}
                                    />
                                </div>
                            );
                        })}
                        <button onClick={this.handleAddComponent} id="addExperience">
                            New Experience
                        </button>
                        <p>Education</p>
                        {this.state.education.map((item, index) => {
                            return (
                                <div className="education-container" key={index}>
                                    <button
                                        onClick={(e) => this.handleDeleteComponent(e, index)}
                                        className="deleteEducation"
                                    >
                                        Delete
                                    </button>
                                    <Education
                                        index={index}
                                        value={this.state.education}
                                        setValue={this.handleEducationChange}
                                    />
                                </div>
                            );
                        })}
                        <button onClick={this.handleAddComponent} id="addEducation">
                            New Education
                        </button>
                    </form>
                    <Preview
                        personal={this.state.personal}
                        workExperience={this.state.workExperience}
                        education={this.state.education}
                    />
                </header>
            </div>
        );
    }
}
