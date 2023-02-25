import React, { useState } from "react";
import "../style/App.css";
import Preview from "./Preview";
import WorkExperience from "./WorkExperience";
import Personal from "./Personal";
import Education from "./Education";

export default function App() {
    const [personal, setPersonal] = useState({ name: "", location: "", phoneNumber: "", email: "" });
    const [workExperience, setWorkExperience] = useState([]);
    const [education, setEducation] = useState([]);

    const handleOnChange = (e) => {
        const copyPersonal = personal;
        copyPersonal[e.target.id] = e.target.value;
        setPersonal({ ...copyPersonal });
    };

    const handleWorkExperienceChange = (e, i) => {
        const workExperienceCopy = workExperience;
        workExperienceCopy[i][e.target.id] = e.target.value;
        setWorkExperience([...workExperienceCopy]);
    };

    const handleEducationChange = (e, i) => {
        const educationCopy = education;
        educationCopy[i][e.target.id] = e.target.value;
        setEducation([...educationCopy]);
    };

    const handleAddComponent = (e) => {
        e.preventDefault();
        if (e.target.id === "addExperience") {
            setWorkExperience([...workExperience, { jobTitle: "", companyName: "", time: "", description: "" }]);
        } else if (e.target.id === "addEducation") {
            setEducation([...education, { subject: "", university: "", time: "" }]);
        }
    };
    const handleDeleteComponent = (e, index) => {
        e.preventDefault();
        if (e.target.className === "deleteEducation") {
            const educationCopy = education;
            educationCopy.splice(index, 1);
            setEducation([...educationCopy]);
        } else if (e.target.className === "deleteExperience") {
            const experienceCopy = workExperience;
            experienceCopy.splice(index, 1);
            setWorkExperience([...experienceCopy]);
        }
    };

    return (
        <div className="App">
            <header className="app-header">
                <form className="form-container">
                    <p>Personal Information</p>
                    <Personal personal={personal} setValue={handleOnChange} />
                    <p>Work Experience</p>
                    {workExperience.map((item, index) => {
                        return (
                            <div className="experience-container" key={index}>
                                <button onClick={(e) => handleDeleteComponent(e, index)} className="deleteExperience">
                                    Delete
                                </button>
                                <WorkExperience
                                    index={index}
                                    value={workExperience}
                                    setValue={handleWorkExperienceChange}
                                />
                            </div>
                        );
                    })}
                    <button onClick={handleAddComponent} id="addExperience">
                        New Experience
                    </button>
                    <p>Education</p>
                    {education.map((item, index) => {
                        return (
                            <div className="education-container" key={index}>
                                <button onClick={(e) => handleDeleteComponent(e, index)} className="deleteEducation">
                                    Delete
                                </button>
                                <Education index={index} value={education} setValue={handleEducationChange} />
                            </div>
                        );
                    })}
                    <button onClick={handleAddComponent} id="addEducation">
                        New Education
                    </button>
                </form>
                <Preview personal={personal} workExperience={workExperience} education={education} />
            </header>
        </div>
    );
}
