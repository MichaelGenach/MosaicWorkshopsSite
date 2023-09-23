import { React, } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
import FadeIn from 'react-fade-in';

export default function Menu() {

  const scrollTo2 = () => {
    window.scrollTo({
      top: 2650,
      behavior: 'smooth'
    })
  }

  return (
    <div id='page2'>

       <div className='linksDiv'>
        <Link className='links' style={{ textDecoration: 'none', }} onClick={scrollTo2}>יצירת קשר</Link>
        <Link className='links' style={{ textDecoration: 'none' }} to={'/private'} onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}>סדנאות בוטיק</Link>

        <Link className='links' style={{ textDecoration: 'none' }} to={'/company'} onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}>סדנאות לחברות</Link>

        <Link className='links' style={{ textDecoration: 'none' }} to={'/tours'} onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}>סיורים מיוחדים</Link> 
        
        <Link className='links' style={{ textDecoration: 'none' }} to={'/'} onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        }}>בית</Link>

      </div>

    </div>
  )
}
