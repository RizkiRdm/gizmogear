import React, { useState } from 'react';
import Notification from '@/components/Fragments/notification/Notification';

interface notificationProps {
    handleButtonClick: () => void
    title: string
    price: number
}

const NotificationContainer: React.FC<notificationProps> = ({ title, price }) => {
    const [showNotification, setShowNotification] = useState(false);

    const handleButtonClick = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 4000); // Sembunyikan notifikasi setelah 3 detik
    };

    return (
        <div className="relative">
            <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleButtonClick}>
                Beli Barang
            </button>
            {showNotification && (
                <Notification
                    message={`${title} telah dibeli dengan harga ${price}, terima kasih sudah berbelanja`}
                />
            )}
        </div>
    );
};

export default NotificationContainer;
