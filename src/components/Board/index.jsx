import React, { useMemo } from "react";
import "./board.css";
import TaskCard from "../Card";
import { ReactComponent as AddIcon } from "../../assets/icons_FEtask/add.svg";
import { ReactComponent as MenuDots } from "../../assets/icons_FEtask/3 dot menu.svg";
import { getPriorityIcon, getStatusIcon } from "../../utils/icons";
import UserAvatar from "../UserIcon";

function TaskBoard({ data, groupBy, userMap }) {
    const columnKeys = useMemo(() => Object.keys(data), [data]);

    const getColumnTitle = (key) => {
        if (groupBy === "status") return key;
        if (groupBy === "priority") return key;
        if (groupBy === "user") return userMap[key]?.name || "Unknown User";
    };

    const getColumnIcon = (key) => {
        if (groupBy === "status") return getStatusIcon(key);
        if (groupBy === "priority") return getPriorityIcon(key);
        if (groupBy === "user") {
            const user = userMap[key];
            return user ? <UserAvatar name={user.name} available={user.available} /> : null;
        }
    };

    return (
        <div className="task-board">
            {columnKeys.map((key) => {
                const tasks = data[key];
                const title = getColumnTitle(key);
                const icon = getColumnIcon(key);

                return (
                    <div key={key} className="task-column">
                        <div className="task-column-header">
                            <div className="header-left">
                                {icon}
                                <div className="header-title">
                                    {title}
                                    <span className="task-count">{tasks.length}</span>
                                </div>
                            </div>
                            {tasks.length > 0 && (
                                <div className="header-right">
                                    <AddIcon />
                                    <MenuDots />
                                </div>
                            )}
                        </div>
                        <div className="task-list">
                            {tasks.map((task) => (
                                <TaskCard
                                    key={task.id}
                                    ticket={task}
                                    userData={userMap[task.userId]}
                                    hideStatusIcon={groupBy === "status"}
                                    hideProfileIcon={groupBy === "user"}
                                    hidePriorityIcon={groupBy === "priority"}
                                />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TaskBoard;
