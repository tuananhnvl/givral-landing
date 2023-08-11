"use client"
import React,{useEffect,useRef } from 'react'
import Image from 'next/image'


export default function Gallery() {
const galleryRef = useRef(null)


useEffect(() => {
 
    /* console.log(e.animate.to)
    const box = document.querySelector('#neo-1');
    
    const gallery = document.querySelector('#gallery');
    
    const arr = Array.prototype.slice.call( gallery )
    gallery.childNodes[1].style.transform = `translateX(${e.animate.to/100}px)`
    const rect = box.getBoundingClientRect();
    if(rect.y < 200) {
        localStorage.setItem('scrollY',e.velocity)
    }else{
        localStorage.setItem('scrollY',0)
    } */
},[])
  return (
    <div id="gallery" className='gallery' ref={galleryRef}>
        <div className='row'>
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
        </div>
        <div className='row'>
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
        </div>
        <div className='row'>
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
            <Image src={`/more/album_${Math.floor(Math.random()* 10)}.jpg`} alt="" width={300} height={190} />
        </div>
    </div>
  )
}
