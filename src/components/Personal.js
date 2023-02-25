import React from "react";

export default function Personal(props) {
    const handleChange = (e) => {
        props.setValue(e);
    };

    return (
        <div className="Personal-Information">
            <input onChange={handleChange} type="text" id="name" placeholder="Full Name" value={props.personal.name} />
            <input
                onChange={handleChange}
                type="text"
                id="location"
                placeholder="Location"
                value={props.personal.location}
            />
            <input
                onChange={handleChange}
                type="text"
                id="phoneNumber"
                placeholder="xxxxxxxxxx"
                value={props.personal.phoneNumber}
            />
            <input
                onChange={handleChange}
                type="text"
                id="email"
                placeholder="cv-application@email.com"
                value={props.personal.email}
            />
        </div>
    );
}
