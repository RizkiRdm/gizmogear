import React from 'react';

interface NotificationMessageProps {
    message: string;
}

const NotificationMessage: React.FC<NotificationMessageProps> = ({ message }) => {
    return <p className="text-white">{message}</p>;
};

export default NotificationMessage;
