import cls from './AppLink.module.scss'
import {LinkProps, NavLink} from "react-router-dom";
import {FC} from "react";


interface AppLinkProps extends LinkProps{
    className?: string
    setMenuActive?: (menuActive:boolean)=>void
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to,  className, children, setMenuActive, ...otherProps} = props
    return (
        <NavLink to={to}
                 className={({isActive}) => {
                     return `${cls.AppLink} ${isActive && cls.active}`
                 }}
                 onClick={()=> setMenuActive(false)}
              {...otherProps}
        >
            {children}
        </NavLink>
    );
};

