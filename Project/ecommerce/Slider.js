// import React, { useState } from 'react';
// import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// import { RxDotFilled } from 'react-icons/rx';

// const Slider = () => {
//   const slides = [
//     {
//       url: 'https://cdn.mos.cms.futurecdn.net/AzcygWMQuzHjqD9o3JoWzk.jpg',
//     },
//     {
//       url: 'https://www.bigbasket.com/media/uploads/banner_images/B2C061811354-21875-DT-460-all-cm-220624.jpg?tr=w-2048,q=80 ',
//     },
//     {
//       url: 'https://www.spencers.in/media/wysiwyg/monthlyWebBanner.jpg',
//     },
//     {
//       url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/2b94a9cf-895f-460d-849a-1eee860c974c/hp_dow-topoffersStorefront_m_480_250723_01.jpg?tr=w-640,q=80 ',
//     },
//     {
//       url: 'https://thumbs.dreamstime.com/z/grocery-shopping-promotional-sale-banner-fast-shopping-cart-full-fresh-colorful-food-grocery-shopping-promotional-sale-banner-168812786.jpg',
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <div className='max-w-[1200px] h-[600px] w-full m-auto py-16 px-4 relative group'>
//       <div
//         style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
//         className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
//       ></div>
//       {/* Left Arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactLeft onClick={prevSlide} size={30} />
//       </div>
//       {/* Right Arrow */}
//       <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
//         <BsChevronCompactRight onClick={nextSlide} size={15} />
//       </div>
//       <div className='flex top-4 justify-center py-2'>
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className='text-2xl cursor-pointer'
//           >
//             <RxDotFilled />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Slider;
