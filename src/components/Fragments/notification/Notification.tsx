import React from 'react';
import { motion } from 'framer-motion';
import NotificationMessage from '@/components/Elements/notification/NotificationMessage';

interface NotificationProps {
    message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-green-500 text-white p-4 rounded shadow-md fixed bottom-4 right-4"
        >
            <NotificationMessage message={message} />
        </motion.div>
    );
};

export default Notification;
