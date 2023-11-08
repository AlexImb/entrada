import { Authenticated, Refine } from '@refinedev/core'
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar'
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from '@refinedev/react-router-v6'
import { dataProvider, liveProvider } from '@refinedev/supabase'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import './App.css'
import authProvider from './authProvider'
import { supabaseClient } from './utility'
import Account from './pages/account'
import Login from './pages/login'
import { ProfileList, ProfileShow} from './pages/profiles'

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <Refine
          dataProvider={dataProvider(supabaseClient)}
          liveProvider={liveProvider(supabaseClient)}
          authProvider={authProvider}
          routerProvider={routerBindings}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
          resources={[{
            name: "profiles",
            list: "/profiles",
            show: "/profiles/:id"
          }]}
        >
          <Routes>
            <Route
              element={
                <Authenticated fallback={<CatchAllNavigate to="/login" />}>
                  <Outlet />
                </Authenticated>
              }
            >
              <Route index
                element={<NavigateToResource resource="profiles" />}
              />
              <Route path="/profiles">
                <Route index element={<ProfileList />} />
                <Route path=":id" element={<ProfileShow />} />
              </Route>
              <Route path="/me" element={<Account />} />
            </Route>
            <Route element={<Authenticated fallback={<Outlet />} />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
          <RefineKbar />
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  )
}

export default App