import { locationToIndex } from "./LocationMap"
import { setPageIndex, setPageStatus } from "@/store/slice/globalSlice/globalSlice";

const handleChangeMenu = (navigate, dispatch, location) => {
    navigate(location);
    dispatch(setPageStatus({pageStatus: location}));
    dispatch(setPageIndex({pageIndex: locationToIndex[location]}));
}

export default handleChangeMenu;