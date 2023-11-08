import { useLogin } from '@refinedev/core'
import { ButtonPrimary } from '../components/button/button'


export default function Login() {
  const { mutate: login } = useLogin()

  async function signInWithAzure() {
    login({ provider: 'azure' })
  }

  return (
    <div className="">
        <ButtonPrimary onClick={() => signInWithAzure()}>LOGIN WITH AZURE</ButtonPrimary>
    </div>
  )
}