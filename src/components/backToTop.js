import React, { useEffect, useState } from 'react'
import { BiUpArrow } from 'react-icons/bi'
import { ButtonToTop } from './backToTopStyle'

function BackToTop() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>  {
            if(window.scrollY > 10) {
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
                <ButtonToTop 
                    data-aos="fade-up" 
                    onClick={scrollUp}
                >
                    <BiUpArrow style={{ fontSize: "4rem" }} />
                </ButtonToTop>
            )}
        </>
    )
}

export default BackToTop;