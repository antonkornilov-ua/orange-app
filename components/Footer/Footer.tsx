import React from 'react'
import TryMeButton from '../tryMeButton/tryMeButton'



const Footer = () => {
  const date = new Date()
  
  return (
    <footer className='my-5'>
      
      <TryMeButton />
      <p className="text-center text-xs my-3">@ { date.getFullYear()} Всі права захищені</p>
    </footer>
  )
}

export default Footer