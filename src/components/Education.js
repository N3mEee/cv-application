import React from "react";

export default function Education(props) {
    const handleChange = (e) => {
        props.setValue(e, props.index);
    };

    return (
        <div className="Education">
            <input
                onChange={handleChange}
                type="text"
                id="subject"
                placeholder="Subject"
                value={props.value[props.index].subject}
            />
            <input
                onChange={handleChange}
                type="text"
                id="university"
                placeholder="University"
                value={props.value[props.index].university}
            />
            <input
                onChange={handleChange}
                type="text"
                id="time"
                placeholder="MM/YYYY - MM/YYYY"
                value={props.value[props.index].time}
            />
        </div>
    );
}
