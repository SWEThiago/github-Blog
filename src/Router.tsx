import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

import { SelectPost } from './pages/Post/SelectPost'

export function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route path="/" element={<Home />} />

        <Route path="/:issueNumber" element={<SelectPost />} />
      </Route>
    </Routes>
  )
}
