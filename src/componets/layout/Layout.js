import React from 'react'
import TopNavbar from '../nav_side_foot/Navbar'
import Sidebar from '../nav_side_foot/Sidebar'

const Layout = ({children}) => {
    return (
        <>
            {/* Main Navigation */}
            <header>
                <Sidebar />
                <TopNavbar />
            </header>
            {/* <!--Main Navigation--> */}

            {/* <!--Main layout--> */}
            <main style={{ marginTop: 60, marginLeft:1 }}>
                {children}
            </main>
            {/* <!--Main layout--> */}
        </>
    )
}

export default Layout