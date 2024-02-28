/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import ErrorMessage from './ErrorMessage';

const TextArea = React.forwardRef(
    ({ className, name, placeholder, children, errors, onChange, ...restProps }, ref) => {
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.value);
        };
        return (
            <>
                <textarea
                    ref={ref}
                    className={`${className}`}
                    name={name}
                    onChange={handleChange}
                    placeholder={placeholder}
                    {...restProps}>
                    {!!errors && <ErrorMessage errors={errors} />}
                    {children}
                </textarea>
            </>
        );
    }
);

export default TextArea;
