import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="flex-1 overflow-x-hidden overflow-y-auto">
      <main className="">{children}</main>
    </div>
  )
}
export default Layout
