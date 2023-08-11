"use client"
import { useEffect, createContext, useRef, useState } from 'react'
import Lenis from '@studio-freight/lenis'

export const LenisContext = createContext({});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}




export function LenisProvider({ children }) {
    const ls = typeof window !== "undefined" ? window.localStorage : null;
    const [contextLenis, setContextLenis] = useState({})

    useEffect(() => {

        const lenisVal = new Lenis({
            lerp: 0.1
        })

        lenisVal.on('scroll', (e) => {
            
        })

        function raf(time) {
            lenisVal.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        setContextLenis(lenisVal)
        console.log('creatlenis')
        return () => {
            console.log('destroylenis')
            lenisVal.destroy();
        }
    }, [ls]);
  
    return (
        <LenisContext.Provider value={contextLenis}>
        
            {children}
        </LenisContext.Provider>
    );
}
