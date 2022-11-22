import React, { useEffect, useState } from 'react'
import { BiUpArrow } from 'react-icons/bi'

function BackToTop() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>  {
            if(window.scrollY > 80) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {backToTop && (
                <button 
                    data-aos="fade-up" 
                    data-aos-duration="500" 
                    style={{ 
                        background: "transparent",
                        border: "none",
                        color: "rgba(45,253,163,1)",
                        position: "fixed", 
                        bottom: "50px", 
                        right: "50px", 
                        fontSize: "4rem",
                    }}
                    onClick={scrollUp}
                >
                    <BiUpArrow />
                </button>
            )}
        </>
    )
}

export default BackToTop;