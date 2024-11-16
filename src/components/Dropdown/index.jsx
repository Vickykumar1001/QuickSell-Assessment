import React, { useState, useRef, useEffect, useCallback } from 'react';
import './dropdown.css';
import { ReactComponent as DisplayIcon } from "../../assets/icons_FEtask/Display.svg";
import { ReactComponent as DownIcon } from "../../assets/icons_FEtask/down.svg";

const Dropdown = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);

    const showDropdown = useCallback(() => {
        setIsDropdownVisible(true);
    }, []);

    const handleOutsideClick = useCallback((event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownVisible(false);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [handleOutsideClick]);

    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <div className="dropdown-trigger" onClick={showDropdown}>
                <DisplayIcon />
                <div className="dropdown-label">Display</div>
                <DownIcon />
            </div>
            <div className={`dropdown-menu ${isDropdownVisible ? "visible" : ""}`}>
                <div className="dropdown-item">
                    <div className="item-label">Grouping</div>
                    <select name="grouping" className="dropdown-select" id="grouping">
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className="dropdown-item">
                    <div className="item-label">Ordering</div>
                    <select name="ordering" className="dropdown-select" id="ordering">
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
