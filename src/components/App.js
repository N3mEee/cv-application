import React from "react";
import "../style/App.css";
import Preview from "./Preview";
import WorkExperience from "./WorkExperience";

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            cv: {
                firstName: "",
                lastName: "",
                title: "",
            },
            newWorkExperience: [],
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleNewWorkExperience = this.handleNewWorkExperience.bind(this);
        this.handleNewWorkExperienceChange = this.handleNewWorkExperienceChange.bind(this);
    }

    handleOnChange(e) {
        const cvCopy = this.state.cv;
        cvCopy[e.target.id] = e.target.value;
        this.setState({ cv: cvCopy });
    }

    handleNewWorkExperienceChange(value, i) {
        const newWorkExperienceCopy = this.state.newWorkExperience;
        newWorkExperienceCopy[i].value = value;
        console.log(newWorkExperienceCopy);
        this.setState({ newWorkExperience: [...newWorkExperienceCopy] });
    }

    handleNewWorkExperience(e) {
        e.preventDefault();
        this.setState({
            newWorkExperience: [...this.state.newWorkExperience, { value: "" }],
        });
    }

    render() {
        return (
            <div className="App">
                <header className="app-header">
                    <form className="form-container">
                        <div>
                            <input
                                onChange={this.handleOnChange}
                                type="text"
                                id="firstName"
                                placeholder="First Name"
                                value={this.state.cv.firstName}
                            />
                            <input
                                onChange={this.handleOnChange}
                                type="text"
                                id="lastName"
                                placeholder="Last Name"
                                value={this.state.cv.lastName}
                            />
                        </div>
                        <input
                            onChange={this.handleOnChange}
                            type="text"
                            id="title"
                            placeholder="Title"
                            value={this.state.cv.title}
                        />
                        {this.state.newWorkExperience.map((item, index) => {
                            return (
                                <WorkExperience
                                    key={index}
                                    index={index}
                                    setValue={this.handleNewWorkExperienceChange}
                                />
                            );
                        })}
                        <button onClick={this.handleNewWorkExperience}>New Work Experience</button>
                    </form>
                    <Preview state={this.state.cv} newWorkExperience={this.state.newWorkExperience} />
                </header>
            </div>
        );
    }
}
