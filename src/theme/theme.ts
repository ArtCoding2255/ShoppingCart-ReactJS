import { createTheme } from '@mantine/core'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
})

const themeConfig = createTheme({
  /** Put your mantine theme override here */
  defaultRadius: 12,
  fontFamily: `${inter.style.fontFamily}, sans-serif`,
})

export default themeConfig
