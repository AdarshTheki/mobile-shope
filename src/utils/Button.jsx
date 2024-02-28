import React from 'react';

const Button = ({ onClick, children, loading, leftIcon, rightIcon, className = '', props }) => {
    return (
        <button
            {...props}
            onClick={onClick}
            className={`inline-flex gap-2 capitalize items-center hover:opacity-90 duration-300 px-6 py-2 text-sm rounded ${className}`}>
            {!!leftIcon && leftIcon}
            {!loading ? children : 'loading...'}
            {!!rightIcon && rightIcon}
        </button>
    );
};
export default Button;
