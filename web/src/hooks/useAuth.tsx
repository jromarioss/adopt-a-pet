import { useContext } from 'react'

import { UserContext } from '../contexts/userContext'

export function useAuth() {
  const context = useContext(UserContext);

  return context;
}