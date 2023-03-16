import Link from "./Link";
import { useState } from "react";
const NavBarItems = ({...props}) => {
  return (<li>
    <Link {...props}/>
    </li>)
};
export default NavBarItems;


