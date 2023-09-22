import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import Logo from 'shared/assets/icons/logo.svg'
import Person from 'shared/assets/icons/person.svg'



interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.logoBlock}>
                <div className={cls.title}>Picasso test</div>
            </div>
            <div className={cls.personBlock}>
               <div className={cls.person}>
                   <Person/>
               </div>
            </div>
        </div>
    );
};

