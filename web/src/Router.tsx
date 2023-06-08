import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/home'
import { SignIn } from './pages/signIn'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/sessions' element={<SignIn />} />
      </Route>
    </Routes>
  )
}