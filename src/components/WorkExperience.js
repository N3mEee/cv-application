import React from "react";

export default function WorkExperience(props) {
    const handleChange = (e) => {
        props.setValue(e, props.index);
    };

    return (
        <div className="Work-Experience">
            <input
                onChange={handleChange}
                type="text"
                id="jobTitle"
                placeholder="Job Title"
                value={props.value[props.index].jobTitle}
            />
            <input
                onChange={handleChange}
                type="text"
                id="companyName"
                placeholder="Company Name"
                value={props.value[props.index].companyName}
            />
            <input
                onChange={handleChange}
                type="text"
                id="time"
                placeholder="MM/YYYY - MM/YYYY"
                value={props.value[props.index].time}
            />
            <textarea
                onChange={handleChange}
                id="description"
                placeholder="Job Description"
                value={props.value[props.index].description}
            />
        </div>
    );
}
