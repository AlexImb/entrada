import { BaseKey, useGetIdentity, useLogout } from '@refinedev/core'
import { useForm } from '@refinedev/react-hook-form'
import { ButtonPrimary } from '../components/button'

interface IUserIdentity {
  id?: BaseKey
  username: string
  name: string
}

export interface IProfile {
  id?: string
  username?: string
  website?: string
  avatar_url?: string
}

export default function Account() {
  const { data: userIdentity } = useGetIdentity<IUserIdentity>()

  const { mutate: logOut } = useLogout()

  const {
    refineCore: { formLoading, queryResult, onFinish },
    register,
    control,
    handleSubmit,
  } = useForm<IProfile>({
    refineCoreProps: {
      resource: 'profiles',
      action: 'edit',
      id: userIdentity?.id,
      redirect: false,
      onMutationError: (data) => alert(data?.message),
    },
  })

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      <form onSubmit={handleSubmit(onFinish)} className="form-widget">
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="text" value={userIdentity?.name} disabled />
        </div>
        <div>
          <label htmlFor="username">Name</label>
          <input id="username" type="text" {...register('username')} />
        </div>
        <div>
          <label htmlFor="website">Website</label>
          <input id="website" type="url" {...register('website')} />
        </div>

        <div>
          <ButtonPrimary className="button block primary" type="submit" disabled={formLoading}>
            {formLoading ? 'Loading ...' : 'Update'}
          </ButtonPrimary>
        </div>

        <div>
          <ButtonPrimary className="button block" type="button" onClick={() => logOut()}>
            Sign Out
          </ButtonPrimary>
        </div>
      </form>
    </div>
  )
}