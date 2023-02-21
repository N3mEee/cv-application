import React from "react";
import "../style/App.css";
import Preview from "./Preview";
import WorkExperience from "./WorkExperience";
import Personal from "./Personal";

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
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleWorkExperience = this.handleWorkExperience.bind(this);
        this.handleWorkExperienceChange = this.handleWorkExperienceChange.bind(this);
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

    handleWorkExperience(e) {
        e.preventDefault();
        this.setState({
            workExperience: [
                ...this.state.workExperience,
                { jobTitle: "", companyName: "", time: "", description: "" },
            ],
        });
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
                                <WorkExperience
                                    key={index}
                                    index={index}
                                    value={this.state.workExperience}
                                    setValue={this.handleWorkExperienceChange}
                                />
                            );
                        })}
                        <button onClick={this.handleWorkExperience}>New Work Experience</button>
                    </form>
                    <Preview personal={this.state.personal} workExperience={this.state.workExperience} />
                </header>
            </div>
        );
    }
}
