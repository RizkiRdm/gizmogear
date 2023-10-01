import React from 'react'
import SocialMediaLinks from '@/components/Fragments/Footer/SocialMediaLinks'
const Footer: React.FC = () => {
    // initialize variable date  
    const date = new Date()

    // get yea
    const yearDate = date.getFullYear()

    return (
        <>
            <div className="bg-slate-700 py-6">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="text-slate-200">
                        <p>&copy; {yearDate} Soping</p>
                    </div>
                    <SocialMediaLinks />
                </div>
            </div>
        </>
    )
}

export default Footer