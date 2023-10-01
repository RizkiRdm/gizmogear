import SocialIcons from '@/components/Elements/Footer/SocialIcons'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const SocialMediaLinks = () => {
    return (
        <div className="flex items-center">
            <SocialIcons icon={FaFacebook} url="#" />
            <SocialIcons icon={FaTwitter} url="#" />
            <SocialIcons icon={FaInstagram} url="#" />
        </div>
    )
}

export default SocialMediaLinks