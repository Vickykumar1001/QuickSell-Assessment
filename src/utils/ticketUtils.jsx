import React from "react";

export const getPriorityLabel = (priority) => {
    const labels = {
        0: "No priority",
        1: "Low",
        2: "Medium",
        3: "High",
        4: "Urgent",
    };
    return labels[priority] || "NA";
};

const orderByPriority = (tickets) => {
    return tickets.sort((a, b) => b.priority - a.priority);
};

const orderByTitle = (tickets) => {
    return tickets.sort((a, b) => a.title.localeCompare(b.title));
};

const groupTickets = (tickets, field, customGroups = {}) => {
    const grouped = { ...customGroups };
    tickets.forEach((ticket) => {
        const groupKey = field === "priority" ? getPriorityLabel(ticket.priority) : ticket[field];
        if (!grouped[groupKey]) grouped[groupKey] = [];
        grouped[groupKey].push(ticket);
    });
    return grouped;
};

export const groupTicketsByStatus = (tickets) => {
    const initialGroups = {
        Backlog: [],
        Todo: [],
        "In progress": [],
        Done: [],
        Canceled: [],
    };
    return groupTickets(tickets, "status", initialGroups);
};

export const groupTicketsByPriority = (tickets) => {
    const priorityGroups = {
        "No priority": [],
        Urgent: [],
        High: [],
        Medium: [],
        Low: [],
    };
    return groupTickets(tickets, "priority", priorityGroups);
};

export const groupTicketsByUserId = (tickets) => {
    return groupTickets(tickets, "userId");
};

export const mapUsersByUserId = (users) => {
    const userMap = {};
    users.forEach((user) => {
        userMap[user.id] = user;
    });
    return userMap;
};

export const loadGrid = (tickets, groupBy, sortBy) => {
    const sortedTickets = sortBy === "priority" ? orderByPriority([...tickets]) : orderByTitle([...tickets]);

    if (groupBy === "status") {
        return groupTicketsByStatus(sortedTickets);
    } else if (groupBy === "priority") {
        return groupTicketsByPriority(sortedTickets);
    } else {
        return groupTicketsByUserId(sortedTickets);
    }
};

const TicketGrid = ({ tickets, grouping, ordering }) => {
    const groupedTickets = loadGrid(tickets, grouping, ordering);

    return (
        <div>
            {Object.entries(groupedTickets).map(([groupName, ticketList]) => (
                <div key={groupName}>
                    <h3>{groupName}</h3>
                    <ul>
                        {ticketList.map((ticket) => (
                            <li key={ticket.id}>
                                {ticket.title} - {getPriorityLabel(ticket.priority)} - {ticket.status}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TicketGrid;
