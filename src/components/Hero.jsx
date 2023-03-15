import React from 'react'
import styles from '../style';
import { discount, robot } from '../assets';
import Getstarted from './GetStarted';
const Hero = () => {
  return (
    <section id='home' className={ `flex md:flex-row flex-col ${styles.paddingY}`}>

      {/* dsiplay the text with: 20% Disount For 1 Month */} 
      <div className={ `flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={ `flex-1 ${styles.flexStart} flex-col xl:px-0  sm:px-16 px-6 }`} >
          <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2' >
            <img src={discount} alt="discount" className='w-[32px] h-[32px] ' />
            <p className={`${styles.paragraph} ml-2`} >
            <span className="text-white">20%</span> Discount For { " " }
            <span className="text-white"> 1 Month </span> Account
            </p>
          </div>
        </div>

        {/*------------------- display the bold text-------------------- */}
        <div  className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semiblod ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px] ' >
            The Next <br className='sm:block hidden' /> { " " }
            <span className="text-gradient">Generation</span> { " " }
            {/* Payment Method. */}
          </h1>

          {/* ----------------the circle component ---------------------*/}
          <div className='ss:flex hidden md:mr-4  mr-0'>
            <Getstarted />
          </div>
        </div>

        {/* the text under the payment method  */}
        <h1 className='font-poppins font-semiblod ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full '>Payment Method.
        </h1>
        <p className={ `${styles.paragraph} maw-width-[470px] mt-5`} >
          our team of expets uses a methodolgy to identify the credit cards most likely to fit your needs. we examine anuual percentage rates, annual.
    
        </p>
      </div>

      <div className="flex-1 flex flex justify-center items-center md:my-0 my-10 relative">
        <img src={robot} alt="billings"
        className='w-[100%] h-[100%] relative z-[5]  '
        />
        // ajouter l'effet graidient de l'image
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient '/>
        <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rouded-full '/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient '/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <Getstarted/>
      </div>
    </section>
  )
}

export default Hero