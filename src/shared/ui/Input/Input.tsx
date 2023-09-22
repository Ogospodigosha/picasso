import cls from './Input.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import React, {forwardRef, InputHTMLAttributes, memo} from "react";


type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string
    placeholder?: string
    defaultValue: string
}

export const Input = memo(forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {className,  type = 'text', placeholder, defaultValue, ...otherProps} = props
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <input type={type}
                   ref={ref}
                   defaultValue={defaultValue}
                   placeholder={placeholder}
                   className={cls.input}
                   {...otherProps}
            />
        </div>
    );
}));

