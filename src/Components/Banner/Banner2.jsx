import BannerPng from "../../assets/banner2.png"
import { BiPlayCircle } from "react-icons/bi"; 


// eslint-disable-next-line react/prop-types
const Banner2 = ({togglePlay}) => {
  return (
    <div className='py-12 sm:py-0 relative'>
        <div className="container min-h-[620px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
                {/* text content section */}
                <div className='order-2 sm:order-1  lg:pr-20 relative'>
                    <div className='space-y-5'>
                    <h1 data-aos="fade-up" data-aos-delay="300" className='text-4xl font-semibold'>GET READY TO ENJOY VR{' '} <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> MOVIE WITH OUR PLATFORM</span></h1>
                    <p data-aos="fade-up" data-aos-delay="500">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nesciunt excepturi iusto pariatur, velit soluta voluptatum dolor laboriosam animi sapiente voluptatibus dolore, maiores provident, cumque possimus ut sequi in aspernatur.
                    </p>
                    <div className='flex gap-6'>
                        <button data-aos="fade-up" data-aos-delay="700" className='primary-btn'>Get Started</button>
                        <button data-aos="fade-up" data-aos-delay="900" onClick={togglePlay} className='flex items-center gap-2'>
                            {" "}
                            <BiPlayCircle className='text-3xl'/>
                            See Demo
                        </button>
                    </div>
                    {/* background color blob */}
                   <div className='h-[200px] w-[200px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[10px] left-[300px] blur-3xl opacity-25'>
                    </div>
                </div>
                </div>
                   {/* image section */}
                <div data-aos="fade-up" className='order-1 sm:order-2 '>
                    <img src={BannerPng} alt="" className='relative w-full max-w-[400px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner2