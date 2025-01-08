import { FC, ReactNode } from "react";
import { NavLink } from "react-router";

const Layout: FC<{ children: ReactNode}> = ({children}) => {
    return (
        <div>
            <div>
                <ul className="menus">
                    <li>
                        <NavLink to="/" className={({isActive}) => isActive ? "active-link" : "" }>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : "" }>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive}) => isActive ? "active-link" : "" }>Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                {children}
            </div>
            <div>
                Footer
            </div>
        </div>
    )
}
export default Layout;