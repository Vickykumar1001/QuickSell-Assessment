import React, { useMemo } from 'react';
import './userIcon.css';

function UserIcon({ name }) {
    const initials = useMemo(() => {
        return name
            .split(" ")
            .map((word) => word[0].toUpperCase())
            .join("");
    }, [name]);

    return (
        <div className="user-icon">
            <span className="user-initials">{initials}</span>
            <span className="status-indicator"></span>
        </div>
    );
}

export default UserIcon;
