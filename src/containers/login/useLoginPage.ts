import { login as apiLogin } from '@/api/auth'
import { LoginParams } from '@/interfaces/auth'
import { useCallback, useState } from 'react'

type UseLoginPageHook = () => {
  login: (params: LoginParams) => Promise<void>
  loading: boolean
}

const useLoginPage: UseLoginPageHook = () => {
  const [loading, setLoading] = useState(false)

  const login = useCallback(async (params: LoginParams) => {
    setLoading(true)
    await apiLogin(params)
    setLoading(false)
  }, [])

  return {
    login,
    loading,
  }
}

export default useLoginPage
