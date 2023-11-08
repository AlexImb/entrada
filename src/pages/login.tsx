import { useLogin } from '@refinedev/core'


export default function Login() {
  const { isLoading, mutate: login } = useLogin()

  async function signInWithAzure() {
    login({ provider: 'azure' })
  }

  return (
    <div className="">
        <button className="btn" type="button" onClick={() => signInWithAzure()}>LOGIN WITH AZURE</button>
    </div>
  )
}