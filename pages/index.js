"use client"
import React,{useEffect,useRef} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Widget from '@/components/Widget.js'
import Footer from '@/components/Footer.js'
import ImageSliderBtn from '@/components/ImageSliderBtn.js'
import SliderDrag from '@/components/SliderDrag.js'
import SliderPrice from '@/components/SliderPrice'
import Gallery from '@/components/Gallery'
export default function Home() {
  const neoRef = useRef(null)
  useEffect(() => {

    /* const rect = neoRef.current.getBoundingClientRect();

console.log(rect); */
  }, [neoRef]);
  return (
    <>

      <Head>
        <title>Trang chủ - Nhà phân phối Bánh Trung Thu Givral</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className='banner-section'>
          <Image src={'/more/dm_ngang_01_2.jpg'} alt='' width={1900} height={812} />
        </section>
        <h1>Bánh Trung Thu 2023</h1>
        <section className="combo-section " >
          <div className="combo-heading">
            <h2>MẪU HỘP GIVRAL 2023</h2>
          </div>
          <div className='combo-type-item bg01'>
            <div className='combo-detail'>
              <h3>HỘP BÁNH ĐẶC BIỆT </h3>
              <p>Khách hàng lựa chọn các loại bánh từ 150gr, 200gr, 250gr hoặc 300gr sẽ được sử dụng kèm loại hộp 1 bánh</p>
              <span>( Miễn phí hộp đi kèm )</span>
              <div className='btn-gr-oncombo'>
                <button>Liên Hệ</button>
                <button>Hình Thực Tế</button>
              </div>
            </div>
            <div className='combo-img'>
              <Image src={'/hop/hdb.png'} alt='' width={1841} height={1506} />
            </div>
          </div>
          <div className='combo-type-item bg02'>
            <div className='combo-img'>
              <Image src={'/hop/6bm2.png'} alt='' width={1841} height={1506} />
            </div>
            <div className='combo-detail'>
              <h3> HỘP 6 BÁNH M2</h3>
              <p>Khách hàng lựa chọn các loại bánh từ 150gr, 200gr, 250gr hoặc 300gr  sử dụng loại hộp 4 bánh đặc biệt gỗ cao cấp kèm theo túi trà 50gr</p>
              <span>(phụ thu thêm 360,000đ đồng cho mỗi hộp)</span>
              <div className='btn-gr-oncombo'>
                <button>Liên Hệ</button>
                <button>Hình Thực Tế</button>
              </div>
            </div>

          </div>
          <div className='combo-type-item bg03'>
            <div className='combo-detail'>
              <h3>HỘP 6 BÁNH M1</h3>
              <p>Khách hàng lựa chọn các loại bánh từ 150gr, 250gr hoặc 250gr sẽ được sử dụng loại hộp 6 bánh kèm theo túi trà 10gr</p>
              <span>( Phụ thu 60,000đ cho mỗi hộp, hộp 6 bánh không đựng được loại bánh có trọng lượng 300gr )</span>
              <div className='btn-gr-oncombo'>
                <button>Liên Hệ</button>
                <button>Hình Thực Tế</button>
              </div>
            </div>
            <div className='combo-img'>
              <Image src={'/hop/6bm1.png'} alt='' width={1841} height={1506} />
            </div>
          </div>
          <div className='combo-type-item bg04'>
            <div className='combo-img'>
              <Image src={'/hop/4bn.png'} alt='' width={1467} height={1055} />
            </div>
            <div className='combo-detail'>
              <h3>HỘP 4 BÁNH NHỎ</h3>
              <p>Khách hàng lựa chọn các loại bánh từ 150gr hoặc 200gr sẽ được sử dụng loại hộp 4 bánh nhỏ kèm theo túi trà 10gr </p>
              <span>( Hộp và trà đều miễn phí )</span>
              <div className='btn-gr-oncombo'>
                <button>Liên Hệ</button>
                <button>Hình Thực Tế</button>
              </div>
            </div>

          </div>
          <div className='combo-type-item bg05'>
            <div className='combo-detail'>
              <h3>HỘP 4 BÁNH</h3>
              <p>Khách hàng lựa chọn các loại bánh từ 200gr, 250gr hoặc 300gr sẽ được sử dụng loại hộp 4 bánh truyền thống kèm theo túi trà 10gr </p>
              <span>( Hộp và trà đều miễn phí )</span>
              <div className='btn-gr-oncombo'>
                <button>Liên Hệ</button>
                <button>Hình Thực Tế</button>
              </div>
            </div>
            <div className='combo-img'>
              <Image src={'/hop/4b.png'} alt='' width={1841} height={1506} />
            </div>
          </div>
          <div className='combo-type-item-3 bg-all'>


            <div className='combo-detail2'>
              <h3>HỘP 2 BÁNH</h3>
              <p>Khách hàng lựa chọn các loại bánh từ 150gr, 200gr, 250gr hoặc 300gr sẽ được sử dụng kèm loại hộp 1 bánh</p>
              <span>(  Miễn phí hộp đi kèm  )</span>
              <div className='btn-gr-oncombo'>
                <button>Liên Hệ</button>
                <button>Hình Thực Tế</button>
              </div>
            </div>
            <div className='combo-imgchung'>
              <Image src={'/banner-3.jpg'} alt='' width={1841} height={1506} />
            </div>


            <div className='combo-detail1'>
              <h3>HỘP 1 BÁNH</h3>
              <p>Khách hàng lựa chọn các loại bánh từ 150gr, 200gr, 250gr hoặc 300gr sẽ được sử dụng kèm loại hộp 1 bánh</p>
              <span>(  Miễn phí hộp đi kèm  )</span>
              <div className='btn-gr-oncombo'>
                <button>Liên Hệ</button>
                <button>Hình Thực Tế</button>
              </div>
            </div>


          </div>

        </section>
        <section className='price-section maxW'>
        
          <div className="combo-heading">
            <h2>BẢNG GIÁ BÁNH TRUNG THU GIVRAL 2023</h2>
            <p>Dưới đây là bảng giá bánh trung thu givral 2023, mời quý khách hàng tham khảo.</p>
            <div className='btn-gr-oncombo ' >
              <button>Dowload File Bang Gia</button>
            </div>
          </div>
          <div className='price-detail maxW'>
            <SliderPrice/>
          </div>
        </section>
        <ImageSliderBtn />
        <h1 id="neo-1" ref={neoRef}>Slider Example</h1>
        <Gallery/>
      </main>

      <SliderDrag />
 
      <Footer />
      <Widget />


    </>
  )
}
