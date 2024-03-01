import useLoginPage from '@/containers/login/useLoginPage'
import { LoginParams } from '@/interfaces/auth'
import { Box, Button, Input, Stack, Title } from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'

const defaultFormValue: LoginParams = {
  username: '',
  password: '',
}

const LoginContainer: React.FC = () => {
  const { login, loading } = useLoginPage()

  const form = useForm<LoginParams>({
    initialValues: defaultFormValue,
    validate: {
      username: isNotEmpty(),
      password: isNotEmpty(),
    },
  })

  return (
    <Stack h="100%" justify="center" align="center">
      <Box w="100%" maw={600}>
        <Stack align="center" mb={'lg'}>
          <Title size={48}>Login</Title>
        </Stack>
        <form onSubmit={form.onSubmit(login)}>
          <Stack align="stretch">
            <Input variant="filled" placeholder="Username" {...form.getInputProps('username')} />
            <Input variant="filled" placeholder="Password" {...form.getInputProps('password')} />
            <Button loading={loading} type="submit">
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  )
}

export default LoginContainer
