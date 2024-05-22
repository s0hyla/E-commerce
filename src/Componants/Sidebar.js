import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <>
      <ul className='list-unstyled'>
        <li>
            <Link to={'/Products'}>get all products</Link>
        </li>
        <li>
            <Link to={'/'}>get all Categories</Link>
        </li>
      </ul>
    </>
  )
}

export default Sidebar