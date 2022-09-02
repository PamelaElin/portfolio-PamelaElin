const useStyles = () => {
  return {
      container:" w-full h-[60px] flex justify-between items-center px-4 bg-black/70 text-white absolute top-0",
      peImg:'w-[60px]',
    menu:" hidden md:flex ",
      menu_text:'hover:text-amber-500 text-white',
      hamburger:"md:hidden",
      mobile_menu:'absolute top-0 left-0 w-full h-screen bgNav flex flex-col  items-center',
      x:"flex justify-end w-full mr-8 py-6",
      mobile_menu_text:"py-6 text-4xl",
   
    } 
}

export default useStyles