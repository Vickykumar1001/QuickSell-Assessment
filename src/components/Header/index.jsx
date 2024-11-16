import React from 'react';
import './header.css';
import Dropdown from '../Dropdown';

const Header = ({ grouping, setGrouping, ordering, setOrdering }) => (
    <header className="header-container">
        <Dropdown grouping={grouping} setGrouping={setGrouping} ordering={ordering} setOrdering={setOrdering} />
    </header>
);

export default Header;
