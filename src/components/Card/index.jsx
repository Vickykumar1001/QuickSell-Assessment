import React from 'react';
import './card.css';
import UserIcon from '../UserIcon';
import { ReactComponent as Dots } from '../../assets/icons_FEtask/3 dot menu.svg';
import { ReactComponent as Done } from '../../assets/icons_FEtask/Done.svg';

function TaskCard() {
    return (
        <div className="task-card">
            <div className="card-header">
                <span className="card-id">CAM-1</span>
                <UserIcon name="Vicky Kumar" />
            </div>
            <div className="card-content">
                <Done />
                <h4 className="task-title">Conduct Security Vulnerability Assessment</h4>
            </div>
            <footer className="card-footer">
                <div className="options-icon">
                    <Dots />
                </div>
                <div className="tag-wrapper">
                    <span className="tag-indicator"></span>
                    <span className="tag-name">Feature Request</span>
                </div>
            </footer>
        </div>
    );
}

export default TaskCard;
