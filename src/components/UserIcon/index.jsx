import React, { useMemo } from 'react';
import './userIcon.css';

function UserIcon({ name, available }) {
    const initials = useMemo(() => name.split(" ").map((w) => w[0].toUpperCase()).join(""), [name]);
    const backgroundColor = useMemo(() => {
        const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
        return ["#FF5733", "#33C1FF", "#FFC133", "#8D33FF", "#33FF57"][hash % 5];
    }, [name]);

    return (
        <div className="user-icon" style={{ backgroundColor }}>
            <span className="user-initials">{initials}</span>
            <span className={`status-indicator ${available && "available"}`}></span>
        </div>
    );
}

export default UserIcon;
