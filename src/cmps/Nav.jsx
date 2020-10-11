import React from 'react'

export function Nav() {
    return (
        <section className="nav flex space-between align-center p-x-160">
        <div className="col flex justify-center align-center">
        <img src="images/logo.svg" alt=""/>
            <a>home</a>
            <a>about</a>
        </div>
        <div className="col flex justify-center align-center">
            <button className="btn-cta">contact us</button>
        </div>
        <div className="hamburger">
            | | |
        </div>
        </section>
    )
}
