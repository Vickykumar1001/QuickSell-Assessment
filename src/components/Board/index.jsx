import React from 'react';
import './board.css';
import { ReactComponent as Done } from '../../assets/icons_FEtask/Done.svg';
import { ReactComponent as Add } from '../../assets/icons_FEtask/add.svg';
import { ReactComponent as Dots } from '../../assets/icons_FEtask/3 dot menu.svg';

const Board = () => {
    const columnData = [
        { title: 'Todo', count: 3 },
        { title: 'In Progress', count: 5 },
        { title: 'Review', count: 2 },
        { title: 'Completed', count: 8 },
        { title: 'Backlog', count: 4 },
    ];

    return (
        <div className="board">
            {columnData.map((item, idx) => (
                <section key={idx} className="board-section">
                    <header className="board-header">
                        <div className="header-left">
                            <Done />
                            <div className="header-title">
                                {item.title}
                                <span className="task-count">{item.count}</span>
                            </div>
                        </div>
                        <div className="header-right">
                            <Add />
                            <Dots />
                        </div>
                    </header>
                    <div className="task-card">Task 1</div>
                    <div className="task-card">Task 2</div>
                </section>
            ))}
        </div>
    );
};

export default Board;
