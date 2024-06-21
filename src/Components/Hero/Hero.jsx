import HeroPng from "../../assets/hero.png"
import { BiPlayCircle } from "react-icons/bi"; 

// eslint-disable-next-line react/prop-types
const Hero = ({togglePlay}) => {
  return (
    <>
    <div className='py-12 sm:py-0 dark:bg-black dark:text-white'>
        <div className='container min-h-[700px] flex relative'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap6 place-items-center relative z-10'>
                {/* hero text section */}
                <div className='order-2 sm:order1 space-y-5 lg:pr-20 relative z-30'>
                    <h1 data-aos="fade-up" className='text-4xl font-semibold'>GET READY TO ENJOY VR{' '} <span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'> GAMES WITH OUR PLATFORM</span></h1>
                    <p data-aos="fade-up" data-aos-delay="300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nesciunt excepturi iusto pariatur, velit soluta voluptatum dolor laboriosam animi sapiente voluptatibus dolore, maiores provident, cumque possimus ut sequi in aspernatur.
                    </p>
                    <div className='flex gap-6'>
                        <button data-aos="fade-up" data-aos-delay="500" className='primary-btn'>Get Started</button>
                        <button data-aos="fade-up" data-aos-delay="700" onClick={togglePlay} className='flex items-center gap-2'>
                            {" "}
                            <BiPlayCircle className='text-3xl'/>
                            See Demo
                        </button>
                    </div>
                </div>
                {/* image section */}
                <div data-aos="fade-up" data-aos-offset="0" className='order-1 sm:order-2'>
                    <img src={HeroPng} alt="" className='h-[520px] max-h-[600px]'/>
                </div>
            </div>
            {/* Animated */}
            <div className='h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper'>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero