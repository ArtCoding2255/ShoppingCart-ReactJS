import { AppShell, Box } from '@mantine/core'
import { PropsWithChildren } from 'react'

const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <AppShell>
      <AppShell.Main>
        <Box maw={1000} h={0} mih="100vh" mx="auto" p="lg">
          {children}
        </Box>
      </AppShell.Main>
    </AppShell>
  )
}

export default AppLayout
