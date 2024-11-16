import React from "react";
import "./card.css";
import UserIcon from "../UserIcon";
import { getStatusIcon, getPriorityIcon } from "../../utils/icons";
import { getPriorityLabel } from "../../utils/ticketUtils";

function TaskCard({ ticket, userData, hideStatusIcon, hideProfileIcon, hidePriorityIcon }) {
    return (
        <div className="task-card">
            <div className="card-header">
                <div className="ticket-id">{ticket.id}</div>
                {!hideProfileIcon && userData && (
                    <UserIcon name={userData.name} available={userData.available} />
                )}
            </div>
            <div className="card-body">
                {!hideStatusIcon && getStatusIcon(ticket.status)}
                <div className="ticket-title">{ticket.title}</div>
            </div>
            <div className="card-footer">
                {!hidePriorityIcon && (
                    <div className="priority-icon-container">
                        {getPriorityIcon(getPriorityLabel(ticket.priority))}
                    </div>
                )}
                {ticket.tag.map((tag, index) => (
                    <div key={index} className="tag-wrapper">
                        <div className="tag-icon"></div>
                        <div className="tag-text">{tag}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskCard;
