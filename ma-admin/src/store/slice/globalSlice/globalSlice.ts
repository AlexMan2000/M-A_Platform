import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import MobileDetect from "mobile-detect"


interface GlobalState {
    sessionId: string
    locale: string
    pageStatus: string
    isMobile: boolean
    isWindows: boolean
    isMac: boolean
}


const getInitialLocale = () => {
    const savedLocale = localStorage.getItem('locale')
   // 默认英文
    return savedLocale ? savedLocale : "en";
}


const initialState: GlobalState = {
    sessionId: '',
    locale: getInitialLocale(),
    pageStatus: "/management",
    isMobile: false,
    isWindows: false,
    isMac: false
  }


export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setSessionId: (state, action) => {
            state.sessionId = action.payload.sessionId;
        },
        setLocale: (state, action) => {
            state.locale = action.payload.locale;
            localStorage.setItem("locale", state.locale);
        },
        setPageStatus: (state, action) => {
            state.pageStatus = action.payload.pageStatus;
        },
        setOSInfo: (state) => {
            const md = new MobileDetect(window.navigator.userAgent);
            const userAgent = navigator.userAgent.toLowerCase();
            const isMac = userAgent.includes("mac");
            const isWindows = userAgent.includes("win");
            const isMobile = !!md.mobile();
            state.isMobile = isMobile;
            state.isWindows = isWindows;
            state.isMac = isMac;
        }
    }
})

  
export const selectGlobalState = (state: RootState) => state.global

export const { setSessionId, setLocale, setOSInfo, setPageStatus } = globalSlice.actions

export default globalSlice.reducer
