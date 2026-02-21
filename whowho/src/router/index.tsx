import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Create from  '../pages/Create'
import Profile from '../pages/Profile'
import ReturnList from '../pages/ReturnList'


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/list" element={<ReturnList />} />
      </Routes>
    </BrowserRouter>
  )
}