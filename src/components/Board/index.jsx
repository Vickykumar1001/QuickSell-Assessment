import React from 'react';
import './board.css';
import { ReactComponent as Done } from '../../assets/icons_FEtask/Done.svg';
import { ReactComponent as Add } from '../../assets/icons_FEtask/add.svg';
import { ReactComponent as Dots } from '../../assets/icons_FEtask/3 dot menu.svg';
import Card from '../Card';
const Board = () => {
    const columnData = [
        { title: 'Backlog', count: 4 },
        { title: 'Todo', count: 3 },
        { title: 'In Progress', count: 5 },
        { title: 'Done', count: 8 },
        { title: 'Canceled', count: 2 },
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
                    <Card />
                </section>
            ))}
        </div>
    );
};

export default Board;
