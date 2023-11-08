import PropTypes from "prop-types";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownTrigger,
  Avatar,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import "./index.css";
import { BarIcon } from "../../../assets/icons/Icon";
import { useAuthContext } from "../../../context/AuthContext";
import { authLogout } from "../../../api/auth";
const Header = (props) => {
const { user, logout, isMenuOpen, setIsMenuOpen } = useAuthContext();

const handleLogout=()=> {
  authLogout().then(() => logout());
}
return (
  <Navbar className="component-header-nav">
    <NavbarContent>
      {/* <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                    onClick={()=>setIsMenuOpen(!isMenuOpen)}
                /> */}
      <NavbarBrand>
        <p className="component-header-title">{props.title}</p>
      </NavbarBrand>
    </NavbarContent>
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="primary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2 text-black">
            <p className="font-semibold">Logueado como:</p>
            <p className="font-semibold">{user.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">Perfil</DropdownItem>
          <DropdownItem
            onClick={() => handleLogout()}
            key="logout"
            color="danger"
          >
            Cerrar Sesión
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavbarItem>
        <BarIcon
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="component-header-bar-icon"
        />
      </NavbarItem>
    </NavbarContent>
  </Navbar>
);};

export default Header;
Header.propTypes = {
  title: PropTypes.string
};