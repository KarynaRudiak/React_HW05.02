import React, { useEffect, useRef } from "react";

export default function ValueDisplay({ value }) {
    const prevValue = useRef("");

    useEffect(() => {
        prevValue.current = value;
    }, [value]);

    return (
        <div>
            <h2>Current Value: {value}</h2>
            <h3>Previous Value: {prevValue.current}</h3>
        </div>
    );
}
