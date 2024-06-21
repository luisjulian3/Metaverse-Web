import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const FeaturesData = [
    {
        name: "Captivating Videos",
        icon : (
            <FaCameraRetro className='text-5xl text-primary group-hover:text-black duration-300' />
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet consectetur acx, adispicing elit.",
        aosDelay: "300"
    },
     {
        name: "Safe Transactions",
        icon : (
            <GiNotebook className='text-5xl text-primary group-hover:text-black duration-300' />
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet consectetur acx, adispicing elit.",
        aosDelay: "500"
    },
     {
        name: "Experience Reality",
        icon : (
            <SlNote className='text-5xl text-primary group-hover:text-black duration-300' />
        ),
        link: "#",
        description: "Lorem ipsum dolor sit amet consectetur acx, adispicing elit.",
        aosDelay: "1000"
    },
]

const Features = () => {
  return (
    <>
    <div className="container py-14 sm:min-h-[600px]">
        <div className="">
            <h1 data-aos="fade-up" className='text-3xl font-semibold text-center sm:text-4xl mb-12'>Why Choose Us</h1>
            { /* card selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {FeaturesData.map((data, index) => (
                    <div key={index} data-aos="fade-up"  data-aos-delay={data.aosDelay} className='text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-slate-700 hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300'>
                        <div className="grid place-items-center">{data.icon}</div>
                        <h1 className='text-2xl'>{data.name}</h1>
                        <p className='pb-6'>{data.description}</p>
                        <a href="{data.link}" className='inlink-block text-lg font-semibold text-primary group-hover:text-black duration-300'>Learn More</a>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Features