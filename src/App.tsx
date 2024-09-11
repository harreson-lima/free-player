import { Outlet, Link } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <>
      <h1 className="text-red-600 text-3xl font-bold underline">Hello!</h1>
      <Outlet />
      <Link to='platforms' className='text-blue-600 text-4xl block font-bold no-underline hover:underline'>Platforms</Link>
    </>
  )
}

export default App
