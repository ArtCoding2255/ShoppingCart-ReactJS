import useLoginPage from '@/containers/login/useLoginPage'
import { Button, Input, Stack, Title } from '@mantine/core'

const LoginContainer: React.FC = () => {
  const { login } = useLoginPage()

  return (
    <Stack h="100%" justify="center" align="center">
      <Stack align="stretch" w="100%" maw={600}>
        <Stack align="center">
          <Title size={48}>Login</Title>
        </Stack>
        <Input variant="filled" placeholder="Username" />
        <Input variant="filled" placeholder="Password" />
        <Button>Login</Button>
      </Stack>
    </Stack>
  )
}

export default LoginContainer
