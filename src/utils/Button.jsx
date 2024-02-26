import React from 'react';

const Button = ({ onClick, children, leftIcon, rightIcon, className = '' }, props) => {
    return (
        <button
            {...props}
            onClick={onClick}
            className={`px-2.5 py-2 sm:text-sm text-xs capitalize rounded-lg shadow-lg border border-gray-400 ${className}`}>
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};
export default Button;
