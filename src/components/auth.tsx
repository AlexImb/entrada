import { useLogin } from '@refinedev/core'


export default function Auth() {
  const { isLoading, mutate: login } = useLogin()

  async function signInWithAzure() {
    login({ provider: 'azure' })
  }

  return (
    <div className="">
        <button className="" type="button" onClick={() => signInWithAzure()}>LOGIN WITH AZURE</button>
        <div>{isLoading}</div>
    </div>
  )
}