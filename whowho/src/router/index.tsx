import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create/Create'
import ReturnList from '../pages/Return/ReturnList'
import Splash from '../pages/Splash/Splash'
import Login from '../pages/Login/Login'
import Join from "../pages/Join/Join"
import DetailFeed from '../pages/DetailFeed'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 첫 진입 시 스플래시 */}
        <Route path="/" element={<Splash />} />

        <Route path="/login" element={<Login />} />

        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/list" element={<ReturnList />} />
        <Route path="/detail" element={<ReturnList />} />
        <Route path="/feed/:id" element={<DetailFeed />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  )
}