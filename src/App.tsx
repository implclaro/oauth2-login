import { Navigate, Route, Routes } from "react-router-dom"
import AuthPage from "./app/auth/pages/AuthPage.page"
import NotFoundPage from "./app/errors/pages/NotFoundPage.page"
import NavBarOutlet from "./commons/base-components/NavBarOutlet"
import SearchParamsNotFoundPage from "./app/errors/pages/SearchParamsNotFoundPage.page"
import Oauth2SearchParamsValidator from "./app/auth/components/Oauth2SearchParamsValidator.component"
import { DEFAULT_RESTART_ROUTE } from "./app/errors/constants/error.const"
import { DEFAULT_LOGIN_ROUTE } from "./app/auth/constants/auth.const"

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to={DEFAULT_LOGIN_ROUTE} />}/>
      <Route element={<Oauth2SearchParamsValidator/>}>
        <Route element={<NavBarOutlet/>}>
          <Route path={DEFAULT_LOGIN_ROUTE} element={<AuthPage/>}/>
        </Route>
      </Route>
      <Route path={DEFAULT_RESTART_ROUTE} element={<SearchParamsNotFoundPage />}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default App
