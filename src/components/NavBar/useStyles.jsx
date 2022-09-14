const useStyles = () => {
  return {
      container:" w-full h-[60px] flex justify-between items-center px-4 bg-purple-400/90 text-white text-lg fixed top-0",
      peImg:'w-[60px]',
    menu:" hidden md:flex ",
      menu_text:'hover:text-black text-white hover:text-xl hover:font-bold',
      hamburger:"md:hidden",
      mobile_menu:'absolute top-0 left-0 w-full h-screen bgNav flex flex-col  items-center',
      x:"flex justify-end w-full mr-8 py-6",
      mobile_menu_text:"py-1 text-4xl bg-fuchsia-500/40  rounded-md m-6",
   
    } 
}

export default useStyles