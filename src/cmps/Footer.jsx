import React from 'react'

export  function Footer() {
    return (
        <footer className="footer-home flex  space-between align-center">
            <div className="flex justify-center align-center column">
                <img src="images/logo.svg" alt=""/>
                <div className="footer-links flex justify-center align-center">
                   <a href="">home</a> 
                   <a href="">about</a> 
                </div>
            </div>

            <div>
                <p>
                987  Hillcrest Lane <br/>
                Irvine, CA <br/>
                alifornia 92714 <br/>
                Call Us : 949-833-7432 <br/>
                </p>
            </div>

            <div>
            <div className="social-icons flex  align-center">
                <img src="images/icon-facebook.svg" alt=""/>
                <img src="images/icon-pinterest.svg" alt=""/>
                <img src="images/icon-twitter.svg" alt=""/>
            </div>
                <p>Copyright 2020. All Rights Reserved</p>
            </div>
        </footer>
    )
}
