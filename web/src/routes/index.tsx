import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/home'
import { SignIn } from '../pages/signIn'
import { Profile } from '../pages/profile'
import { RegisterPet } from '../pages/registerPet'
import { DefaultLayout } from '../layouts/DefaultLayout'
import { useAuth } from '../hooks/useAuth'

export function Router() {
  const { tokenIsValid } = useAuth()
   
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/sessions' element={<SignIn />} />
        {tokenIsValid && (
          <>
            <Route path='/profile' element={<Profile />} />
            <Route path='/create' element={<RegisterPet />} />
          </>
        )}
      </Route>
    </Routes>
  )
}