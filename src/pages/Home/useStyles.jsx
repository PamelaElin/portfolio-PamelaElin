

const useStyles = () => {
  return {
      container:'w-full h-screen  max-w-[1000px] mx-auto px-8 flex flex-col justify-center mt-12 lg:mt-8',
      subContainer:'h-full mt-[50px] mb-8 ',
      textContainer:"bg-black/40 p-3 mt-[40px]",
      hi:'text-orange-500  font-semibold text-xl',
      textTitle:'text-2xl sm:text-6xl font-bold ',
      textsubTitle:'text-xl sm:text-4xl font-bold mt-2 ',
      socialIcons:" flex flex-wrap  m-8 ",
      iconBox:" w-[40px] h-[40px] flex justify-between items-center rounded-md  mr-2 text-white hover:scale-110 ",
      icon:"flex justify-center  w-full ",
      btn:'text-white  border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:scale-105 rounded-full ',
      arrow:'ml-3 '
  }
}

export default useStyles