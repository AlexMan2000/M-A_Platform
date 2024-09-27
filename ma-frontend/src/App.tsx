import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import LandingPage from './pages/LandingPage/LandingPage'
import HomePage from './pages/HomePage/HomePage'
import TransferPage from './pages/FormPages/TransferPage/TransferPage'
import AcquisitionPage from './pages/FormPages/AcquisitionPage/AcquisitionPage'
import ConsultationPage from './pages/FormPages/ConsultationPage/ConsultationPage'
import { setOSInfo } from './store/slice/globalSlice/globalSlice'
import { useDispatch } from 'react-redux'


const messages = {
  en: {
  },
  zh: {
  },
}



function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("haha")
    dispatch(setOSInfo());
  }, [setOSInfo])

  const locale = "zh"
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<HomePage/>}>
            <Route index element={<LandingPage/>}></Route>
            <Route path="/transfer" element={<TransferPage/>}></Route>
            <Route path="/acquisition" element={<AcquisitionPage/>}></Route>
            <Route path="/consultation" element={<ConsultationPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  )
}

export default App
