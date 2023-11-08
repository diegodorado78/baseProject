/*Dependencies*/
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
/*Context*/
import { useAuthContext } from "../../../context/AuthContext";
/*UI*/
import { Avatar, Image, Spacer } from "@nextui-org/react";
/*Images*/
import logo from "../../../assets/images/base-logo.png";
/*Icons*/
import { DownArrowIcon } from "../../../assets/icons/Icon";
/*Styles*/
import "./index.css";

function LeftBar({ menuItems }) {
  const { user, isMenuOpen } = useAuthContext();
  const navigator = useNavigate();
  const [menuList, setMenuList] = useState(menuItems);
  const handleSelect = (i) => {
    let aux = [...menuList];
    aux[i].active = !aux[i].active;
    setMenuList([...aux]);
  };
  const MenuItem = ({ item, i }) => (
    <div key={i}>
      <div
        className="component-left-bar-menu-item"
        onClick={() => {
          if (item.submenu.length > 0) handleSelect(i);
          else navigator(item.link);
        }}
      >
        <div style={{ display: "flex" }}>
          <span style={{ flex: "1" }}>{item.menu}</span>
          {item.submenu.length > 0 && (
            <DownArrowIcon
              fill={"#ffffff"}
              className="component-left-bar-menu-item-arrow"
            />
          )}
        </div>
      </div>
      {item.submenu.length > 0 && item.active && (
        <ul>
          {item.submenu.map((item2, j) => (
            <li
              key={j}
              className="component-left-bar-menu-submenu "
              onClick={() => navigator(item2.link)}
            >
              <span className="component-left-bar-menu-submenu-dot"></span>
              <span style={{ flex: "1" }}>{item2.menu}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
  MenuItem.propTypes = {
    item: PropTypes.object, //every item from menuItems array
    i: PropTypes.number, //each index
  };
  return (
    <div
      className={`component-left-bar-main ${isMenuOpen ? "activeMenu" : ""}`}
    >
      <Image src={logo} className="component-left-bar-logo" />
      <hr className="mx-5 border-t border-[#ffffff30]" />
      <Spacer y={5} />
      <div className="flex flex-col items-center">
        <Avatar
          size="lg"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
          className="component-left-bar-avatar"
        />
        <Spacer y={3} />
        <span className="component-left-bar-user-name">{user.name}</span>
      </div>
      <Spacer y={5} />
      <hr className="mx-5 border-t border-[#ffffff30]" />
      <Spacer y={5} />
      <span className="component-left-bar-title">GENERALIDAD</span>
      {menuList.map((item, i) => (
        <MenuItem key={i} item={item} i={i} />
      ))}
    </div>
  );
}

LeftBar.propTypes = {
  menuItems: PropTypes.array
};
export default LeftBar;
