import React from 'react';

interface TryMeButtonProps {
    className?: string;
}

const TryMeButton: React.FC<TryMeButtonProps> = ({ className }) => {
    return (
        <div
            className={`bg-trymebtn text-center py-2 w-[300px] rounded-full hover:scale-105 transition-all ${className}`}>
            <span className='text-white'>Спробувати зараз!</span>
        </div>
    );
};

export default TryMeButton;
