import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/rootReducers'

interface UserState {
  auto_renewal: boolean | null
  avatar: string
  customer_id: string
  email: string
  email_verified: boolean | null
  first_name: string
  has_free_tried: boolean | null
  has_subscribed: boolean | null
  last_name: string
  subscription_end_date: string | null
  subscription_start_date: string | null
  subscription_type: string
  points: number
  page_status: string
  isLoggedIn: boolean
}

const getUserLoginStatus = () => {
  const isLogin = localStorage.getItem('isLoggedIn')
  if (isLogin === 'true') {
    return true
  }
  return false
}

const initialState: UserState = {
  auto_renewal: null,
  avatar: '',
  customer_id: '',
  email: '',
  email_verified: null,
  first_name: '',
  has_free_tried: null,
  has_subscribed: null,
  last_name: '',
  subscription_end_date: null,
  subscription_start_date: null,
  subscription_type: '',
  points: 0,
  page_status: 'profile',
  isLoggedIn: getUserLoginStatus(),
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserState>) => {
      state.auto_renewal = action.payload.auto_renewal
      state.avatar = action.payload.avatar
      state.customer_id = action.payload.customer_id
      state.email = action.payload.email
      state.email_verified = action.payload.email_verified
      state.first_name = action.payload.first_name
      state.has_free_tried = action.payload.has_free_tried
      state.has_subscribed = action.payload.has_subscribed
      state.last_name = action.payload.last_name
      state.subscription_end_date = action.payload.subscription_end_date
      state.subscription_start_date = action.payload.subscription_start_date
      state.subscription_type = action.payload.subscription_type
      state.points = action.payload.points
    },
    initUserInfo: (state) => {
      state.auto_renewal = null
      state.avatar = ''
      state.customer_id = ''
      state.email = ''
      state.email_verified = null
      state.first_name = ''
      state.has_free_tried = null
      state.has_subscribed = null
      state.last_name = ''
      state.subscription_end_date = null
      state.subscription_start_date = null
      state.subscription_type = ''
      state.points = 0
    },

    updatePageStatus: (state, action: PayloadAction<string>) => {
      state.page_status = action.payload
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      localStorage.setItem('isLoggedIn', action.payload.toString())
      state.isLoggedIn = action.payload
    },
  },
})
export const selectUser = (state: RootState) => state.user

export const { setUserInfo, initUserInfo, updatePageStatus, setIsLoggedIn } =
  userSlice.actions

export default userSlice.reducer