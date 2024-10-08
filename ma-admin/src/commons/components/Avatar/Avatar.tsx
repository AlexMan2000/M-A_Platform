import React, { useEffect, useRef, useState } from "react";
import styles from "./Avatar.module.less";
import AvatarIcon from "./components/AvatarIcon/AvatarIcon";
import AvatarMenu from "./components/AvatarMenu/AvatarMenu";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/slice/userSlice/userSlice";

interface AvatarProps {
  hideMenu?: boolean;
  size?: string;
  fontSize?: string;
}
export default function Avatar(props: AvatarProps) {
  const { hideMenu, size, fontSize } = props;
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const userInfo = useSelector(selectUser)
  const { last_name, avatar } = userInfo;
  const dropDownOpenRef = useRef(dropDownOpen);
  const avatarIconRef = useRef<any>();

  const handleClick = (event: React.MouseEvent) => {
    // event.stopPropagation();
    // setDropDownOpen(!dropDownOpen);
  };

  useEffect(() => {
    dropDownOpenRef.current = dropDownOpen;
  }, [dropDownOpen]);

  useEffect(() => {
    const handleClickOutside = () => {
      if (dropDownOpenRef.current) {
        setDropDownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div ref={avatarIconRef} onClick={handleClick}>
        <AvatarIcon
          avatar={avatar}
          name={last_name}
          style={{
            height: hideMenu ? size : "40px",
            width: hideMenu ? size : "40px",
            fontSize: hideMenu ? fontSize : "16px",
          }}
        ></AvatarIcon>
        <div className={styles.dropdownMenu}>
          {dropDownOpen && !hideMenu && <AvatarMenu></AvatarMenu>}
        </div>
      </div>
    </div>
  );
}
