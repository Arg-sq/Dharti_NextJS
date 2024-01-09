import Image from 'next/image';
import React from 'react';

const Partners = () => {
  return (
    <div className='w-full bg-blue_background px-4 lg:px-8  lg:py-8 '>
      <div className='container flex flex-col items-center py-3 md:space-y-[69px] md:pt-5'>
        <h2 className='text-lg font-bold md:text-3xl'>
          Introducing Our Supporting Partner
        </h2>
        <div className='ites-center flex w-full flex-col md:flex-row md:space-x-20'>
          {new Array(8).fill(null).map((icon, index) => {
            return (
              <div key={index} className='relative h-[60px] w-auto text-center'>
                {/* <Image
                  alt='company logo'
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6obmInotdZN7b6w9BNWiTOxxzRu_XEIAAkP3eRyQUWsSxP01GcvFL5Cov_uHFKT9KKc&usqp=CAU'
                  }
                  fill
                /> */}
                LogoLgogo
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Partners;
