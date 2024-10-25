import { Outlet, useNavigate } from "react-router-dom";
import styles from "./InquiryIndex.module.less"


const InquiryIndex = () => {

    const navigate = useNavigate();


    return (
        <div className={styles.container}>
            <Outlet />
        </div>
    );
};

export default InquiryIndex;