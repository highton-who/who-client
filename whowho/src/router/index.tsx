import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Create from  '../pages/Create/Create'
import ReturnList from '../pages/ReturnList'


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/list" element={<ReturnList />} />
      </Routes>
    </BrowserRouter>
  )
}