// import useStore from "@/store/store";
import styles from "./AvatarMenu.module.less";
// import {
//   Divider,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import DataLynnIcon from "@/assets/images/img-icon-blue.png";
import {  useEffect, useState } from "react";
// import Avatar from "../AvatarIcon/AvatarIcon";
// import { useNavigate } from "react-router-dom";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import LogoutIcon from "@mui/icons-material/Logout";
// import { getUserLogout } from "@/services/api/userApi";
// import { FormatDate } from "@/utils/formatDate";

const AvatarMenu = () => {
  // const navigate = useNavigate();
  const [visible, setIsVisible] = useState<boolean>(false);

  useEffect(()=>{setIsVisible(true)}, []);
  // const {
  //   userInfo,
  //   resetUserInfo,
  //   setCommonSnackbar,
  //   changePageStatus,
  //   changeExitCallbackKey,
  //   isDialogToggleable,
  //   changeIsExitDialogOpen
  // } = useStore();

  // const {
  //   subscription_type,
  //   subscription_end_date,
  //   points,
  //   last_name,
  //   first_name,
  //   email,
  //   avatar,
  // } = userInfo;

  // useEffect(() => {
  //   setIsVisible(true);
  //   return () => {
  //     setIsVisible(false);
  //   };
  // }, []);

  return (
    <div
      className={Array.from([styles.container, visible && styles["visible"]])
        .filter(Boolean)
        .join(" ")}
    >
      {/* <div className={styles.header}>
        <div className={styles.avatarContainer}>
          <Avatar avatar={avatar} name={last_name}></Avatar>
        </div>
        <div className={styles.info}>
          <div className={styles.fullName}>{`${first_name} ${last_name}`}</div>
          <div className={styles.email}>{email}</div>
        </div>
      </div>

      <div
        className={styles.account}
        onClick={() => {
          navigate("/user");
          changePageStatus("subscription");
        }}
      >
        <div className={styles.listItem}>
          <div className={styles.label}>SUBSCRIPTIONS</div>
          <div className={styles.subsTextContainer}>
            <div className={styles.subsText}>{subscription_type}</div>
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.label}>EXPIRE DATE</div>
          <div className={styles.label}>
            {subscription_end_date === null
              ? "-"
              : FormatDate(subscription_end_date)}
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.label}>POINTS</div>
          <div className={styles.pointGroup}>
            <img src={DataLynnIcon} className={styles.pointImg}></img>
            <div className={styles.label}>{points}</div>
          </div>
        </div>
      </div>
      <Divider orientation="horizontal" sx={{ width: "288px" }}></Divider>

      <div className={styles.tabmenu}>
        <List component="div">
          <ListItem
            disablePadding
            sx={{ width: "100%" }}
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <ListItemButton className={styles.tabItem}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const element = document.getElementById("pricing");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
          >
            <ListItemButton className={styles.tabItem}>
              <ListItemText primary="Pricing" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              if (isDialogToggleable) {
                changeExitCallbackKey("default")
                changeIsExitDialogOpen(true)
              } else {
                navigate("/");
                setTimeout(() => {
                  const element = document.getElementById("testimonial");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }, 100);
              }
            }}
          >
            <ListItemButton className={styles.tabItem}>
              <ListItemText primary="Use Cases" />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            onClick={() => {
              if (isDialogToggleable) {
                changeExitCallbackKey("aboutus")
                changeIsExitDialogOpen(true)
                return
              }
              navigate("/aboutus");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <ListItemButton className={styles.tabItem}>
              <ListItemText primary="About Us" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>

      <Divider orientation="horizontal" sx={{ width: "288px" }}></Divider>
      <div className={styles.optionMenu}>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ pl: 12 }}
            onClick={() => {
              if(isDialogToggleable){
                changeExitCallbackKey("userProfile")
                changeIsExitDialogOpen(true)
                return
              }
              navigate("/user");
              changePageStatus("profile");
            }}
            className={styles.optionItem}
            key={"MyProfile"}
          >
            <ListItemIcon className={styles.itemIcon}>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText
              className="MuiListItemText-primary"
              primary="My Profile"
            />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 12 }}
            onClick={() => {
              if(isDialogToggleable){
                changeExitCallbackKey("subscription")
                changeIsExitDialogOpen(true)
                return
              }
              navigate("/user");
              changePageStatus("subscription");
            }}
            className={styles.optionItem}
            key={"Subscription"}
          >
            <ListItemIcon className={styles.itemIcon}>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText
              className="MuiListItemText-primary"
              primary="Subscription"
            />
          </ListItemButton>
          <ListItemButton
            sx={{ pl: 12 }}
            onClick={async () => {
              if(isDialogToggleable){
                changeExitCallbackKey("logout")
                changeIsExitDialogOpen(true)
                return
              }
              const res = await getUserLogout();
              if (res.message === "OK") {
                navigate("/");
                resetUserInfo();
                setCommonSnackbar({
                  severity: "success",
                  message: "Log out successfully.",
                  duration: 3000,
                  open: true,
                });
              }
            }}
            className={styles.optionItem}
            key={"Log out"}
          >
            <ListItemIcon className={styles.itemIcon}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              className="MuiListItemText-primary"
              primary="Log out"
            />
          </ListItemButton>
        </List>
      </div> */}
    </div>
  );
};

export default AvatarMenu;
