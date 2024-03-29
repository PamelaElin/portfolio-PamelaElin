const useStyles = () => {
  return {
      container:" w-full h-[60px] flex justify-between items-center px-4 bg-purple-400/90 text-white text-xl fixed top-0",
      peImg:'w-[60px]',
    menu:" hidden md:flex ",
      menu_text:' text-white hover:bg-purple-500/90 p-3',
      hamburger:"md:hidden",
      mobile_menu:'absolute top-0 left-0 w-full h-screen bgNav ',
      mobile_menu_list:'flex flex-col  items-center',
      x:"flex justify-end w-full mr-8 py-6",
      mobile_menu_text:"py-1 text-4xl bg-fuchsia-500/40  rounded-md m-6",
   
    } 
}

export default useStyles