/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import ErrorMessage from './ErrorMessage';

const Input = React.forwardRef(
    (
        {
            className = '',
            wrapClassName = '',
            name = '',
            type = 'text',
            placeholder = '',
            children,
            errors = [],
            label = '',
            onChange,
            ...restProps
        },
        ref
    ) => {
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.value);
        };
        console.log(errors)
        return (
            <>
                <div className={`${wrapClassName}`}>
                    {!!label && label}
                    <input
                        type={type}
                        name={name}
                        ref={ref}
                        onChange={handleChange}
                        placeholder={placeholder}
                        className={`${className} w-full py-1.5 text-sm rounded border border-gray-600 px-5`}
                        {...restProps}
                    />
                </div>
                {!!errors && <ErrorMessage errors={errors} />}
            </>
        );
    }
);
export default Input;
