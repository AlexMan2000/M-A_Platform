import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { setOSInfo } from './store/slice/globalSlice/globalSlice'
import { useDispatch } from 'react-redux'
import AdminPage from './pages/AdminPage'
import Management from './pages/Management/Management'
import ProjectList from './pages/ProjectList/ProjectList'
import BuyerPipeline from './pages/BuyerPipeline/BuyerPipeline'
import MileStone from './pages/MileStones/MileStone'
import DataRoom from './pages/DataRoom/DataRoom'
import Settings from './pages/Settings/Settings'


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
          <Route path="/" element={<AdminPage/>}>
            <Route index element={<Navigate to="/management" />}></Route>
            <Route path="/list" element={<ProjectList/>}></Route>
            <Route path="/management" element={<Management/>}></Route>
            <Route path="/pipeline" element={<BuyerPipeline/>}></Route>
            <Route path="/milestone" element={<MileStone/>}></Route>
            <Route path="/dataroom" element={<DataRoom/>}></Route>
            <Route path="/settings" element={<Settings/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </IntlProvider>
  )
}

export default App
