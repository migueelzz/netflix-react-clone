import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logOut } = UserAuth()
  const navigate = useNavigate()

  // console.log(user)

  const handleLogout = async () => {
    try {
      await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to="/">
        <h1 className='text-red-600 text-xl md:text-4xl font-bold cursor-pointer'>NETFLIX</h1>
      </Link>
      {
        user?.email ? (
          <div>
          <Link to="/account">
            <button className='text-white pr-4 text-sm md:text-lg'>Account</button>
          </Link>
          <button onClick={handleLogout} className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sair</button>
        </div>
        ) :
        (
          <div>
          <Link to="/login">
            <button className='text-white pr-4'>Entrar</button>
          </Link>
          <Link to="/signup">
            <button className='bg-red-600 text-sm px-4 md:px-6 py-2 rounded cursor-pointer text-white'>Cadastrar</button>
          </Link>
        </div>
        )
      }
    </div>
  )
}

export default Navbar