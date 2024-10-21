import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="bg-indigo-800 text-white w-64 min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <Link
              to="/dashboard"
              className="hover:text-indigo-200"
            >
              Dashboard
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/admin-profile"
              className="hover:text-indigo-200"
            >
              Admin Profile
            </Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
