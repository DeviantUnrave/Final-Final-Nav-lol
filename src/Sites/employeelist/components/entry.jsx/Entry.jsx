import React from "react";

function HelloEntry(props) {
    const { firstName } = props
    return (
        <div>
            {firstName}

        </div>
    )
}

export default HelloEntry;