import { LoginParams } from '@/interfaces/auth'
import { delay } from 'lodash'

export const login = async (_params: LoginParams): Promise<void> => {
  return await new Promise((resolve) => {
    delay(() => {
      resolve()
    }, 1000)
  })
}
