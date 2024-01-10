import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer>
      <Link to="/"> {new Date().getFullYear()} React Learning</Link>
    </footer>
  )
}
