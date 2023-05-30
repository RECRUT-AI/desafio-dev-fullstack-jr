import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Home } from './pages/Home'
import { EditPetPage } from './pages/EditPetPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="edit/:id" element={<EditPetPage />} />
      </Route>
    </Routes>
  )
}