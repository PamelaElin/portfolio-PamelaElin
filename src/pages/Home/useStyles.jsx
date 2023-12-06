

const useStyles = () => {
  return {
      container:'w-full h-full  max-w-[1000px] mx-auto px-8 flex flex-col justify-center mt-12 lg:mt-8',
      subContainer:'h-full mt-[50px] mb-8 ',
      textContainer:"bg-gray-500/40 p-3 mt-[40px] md:flex",
      hi:'text-yellow-400  font-semibold text-3xl  md:flex md:items-end',
      img:"rounded-full w-[20rem] my-2 ", 
      textTitle:'text-2xl sm:text-6xl font-bold text-white',
      textsubTitle:'text-xl sm:text-4xl font-bold mt-2 text-white',
      networksBox:"my-8  sm:w-fit  p-2 bg-gray-500/40 flex  justify-between",
      networks:"text-white text-lg underline decoration-double underline-offset-4 ",
      socialIcons:" flex flex-wrap mt-2 ",
      socialIconsResume:" flex justify-center mt-2 ",
      iconBox:" w-[42px] h-[42px] flex justify-between items-center rounded-full  mr-2 text-white hover:scale-125 ",
      icon:"flex justify-center p-2  w-full ",
      btn:'text-white  border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:scale-105 rounded-full ',
      arrow:'ml-3 ',
      
  }
}

export default useStyles