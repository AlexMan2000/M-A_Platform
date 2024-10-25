import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { setOSInfo } from './store/slice/globalSlice/globalSlice'
import { useDispatch } from 'react-redux'
import AdminPage from './pages/AdminPage'
import Dashboard from './pages/Dashboard/Dashboard'
import ProjectList from './pages/ProjectList/ProjectList'
import BuyerPipeline from './pages/BuyerPipeline/BuyerPipeline'
import MileStone from './pages/MileStones/MileStone'
import Inquiry from './pages/Inquires/Inquiry'
import DataRoom from './pages/DataRoom/DataRoom'
import Settings from './pages/Settings/Settings'
import Management from './pages/Management/Management'
import SellerDetail from './pages/Inquires/SellerSession/SellerDetail'
import InquiryIndex from './pages/Inquires/InquiryIndex'
import BuyerDetail from './pages/Inquires/BuyerSession/BuyerDetail'

const messages = {
  en: {
  },
  zh: {
  },
}



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setOSInfo());
  }, [setOSInfo])

  const locale = "zh"
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPage />}>
            {/*index代表，当匹配到父级路径的时候，默认渲染的是子组件*/}
            <Route index element={<Navigate to="/dashboard" />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/list" element={<ProjectList />}></Route>
            <Route path="/management" element={<Management />}></Route>
            <Route path="/pipeline" element={<BuyerPipeline />}></Route>
            <Route path="/milestone" element={<MileStone />}></Route>
            <Route path="/inquiries" element={<InquiryIndex />}>
              <Route index element={<Inquiry />}></Route>
              <Route path="seller/:id" element={<SellerDetail />}></Route>
              <Route path="buyer/:id" element={<BuyerDetail />}></Route>
            </Route>
            <Route path="/dataroom" element={<DataRoom />}></Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  )
}

export default App
