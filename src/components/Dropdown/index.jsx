import React, { useState, useRef, useEffect, useCallback } from 'react';
import './dropdown.css';
import { ReactComponent as DisplayIcon } from "../../assets/icons_FEtask/Display.svg";
import { ReactComponent as DownIcon } from "../../assets/icons_FEtask/down.svg";

const Dropdown = ({ grouping, setGrouping, ordering, setOrdering }) => {
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
    const onGroupingChange = useCallback((e) => setGrouping(e.target.value), []);
    const onOrderingChange = useCallback((e) => setOrdering(e.target.value), []);
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
                    <select name="grouping" className="dropdown-select" id="grouping" value={grouping} onChange={onGroupingChange}>
                        <option value="status">Status</option>
                        <option value="user">User</option>
                        <option value="priority">Priority</option>
                    </select>
                </div>
                <div className="dropdown-item">
                    <div className="item-label">Ordering</div>
                    <select name="ordering" className="dropdown-select" id="ordering" value={ordering} onChange={onOrderingChange}>
                        <option value="priority">Priority</option>
                        <option value="title">Title</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
