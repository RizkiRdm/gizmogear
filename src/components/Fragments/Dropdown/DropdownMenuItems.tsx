import React from 'react'
import { FaSignInAlt, FaUserPlus, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import DropdownLinks from '@/components/Elements/Dropdown/DropdownLinks';

const DropdownMenuItems: React.FC = () => {
    return (
        <>
            <div className="w-36">
                <DropdownLinks url='/login' label='Login' icon={FaSignInAlt} />
                <DropdownLinks url='/register' label='Register' icon={FaUserPlus} />
                <DropdownLinks url='/products' label='Products' icon={FaShoppingCart} />
                <DropdownLinks url='/cart' label='Cart' icon={FaShoppingCart} />
                <DropdownLinks url='/logout' label='Logout' icon={FaSignOutAlt} />
            </div>
        </>
    )
}

export default DropdownMenuItems