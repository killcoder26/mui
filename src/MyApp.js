import React from 'react'
import Footer from './Footer'
import MyCard from './MyCard'
import Navbar from './Navbar'

function MyApp() {
    return (
        <>
            <div><Navbar /> </div>
            <div> <MyCard /> </div>
            <div className="footer"><center><Footer /></center> </div>
        </>
    )
}

export default MyApp