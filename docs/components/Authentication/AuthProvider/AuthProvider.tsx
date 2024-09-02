import { useToast } from '@0xsequence/design-system'
import { t } from '@lingui/macro'
import { type PropsWithChildren, createContext, useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { BASE_ROUTE } from '~/utils/routes'

import { useAppName } from '~/hooks/useAppName'

import { connect } from '~/stores'

export type AuthContextValue = {
  isLoggingIn: boolean
  onLogin: () => Promise<void>
  afterLogin: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const { appName } = useAppName()

  const toast = useToast()

  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = async () => {
    setIsLoggingIn(true)

    try {
      const isConnected = await connect({ app: 'Sequence Docs', authorize: true })

      if (isConnected) {
        handleAfterLogin()
      }
    } catch (err) {
      toast({
        variant: 'error',
        title: t`Failed to connect wallet`,
        description: 'Failed to connect',
      })
    } finally {
      setIsLoggingIn(false)
    }
  }

  const handleAfterLogin = () => {
    const referrer = location.state?.from?.pathname

    if (referrer) {
      navigate(referrer)
    }

    if (!referrer && location.pathname === '/') {
      navigate(BASE_ROUTE)
      return
    }
  }

  const value: AuthContextValue = {
    isLoggingIn,
    onLogin: handleLogin,
    afterLogin: handleAfterLogin,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
