import { ReactComponent as BacklogIcon } from '../assets/icons_FEtask/Backlog.svg';
import { ReactComponent as TodoIcon } from '../assets/icons_FEtask/To-do.svg';
import { ReactComponent as InProgressIcon } from '../assets/icons_FEtask/in-progress.svg';
import { ReactComponent as DoneIcon } from '../assets/icons_FEtask/Done.svg';
import { ReactComponent as CanceledIcon } from '../assets/icons_FEtask/Cancelled.svg';
import { ReactComponent as NoPriorityIcon } from '../assets/icons_FEtask/No-priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../assets/icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as HighPriorityIcon } from '../assets/icons_FEtask/Img - High Priority.svg';
import { ReactComponent as LowPriorityIcon } from '../assets/icons_FEtask/Img - Low Priority.svg';
import { ReactComponent as UrgentPriorityIcon } from '../assets/icons_FEtask/SVG - Urgent Priority colour.svg';

const priorityIcons = {
    "No priority": <NoPriorityIcon />,
    "Urgent": <UrgentPriorityIcon />,
    "High": <HighPriorityIcon />,
    "Medium": <MediumPriorityIcon />,
    "Low": <LowPriorityIcon />,
};

const statusIcons = {
    "Backlog": <BacklogIcon />,
    "Todo": <TodoIcon />,
    "In progress": <InProgressIcon />,
    "Done": <DoneIcon />,
    "Canceled": <CanceledIcon />,
};

export const getPriorityIcon = (priority) => {
    return priorityIcons[priority] || <CanceledIcon />;
};

export const getStatusIcon = (status) => {
    return statusIcons[status] || <CanceledIcon />;
};
