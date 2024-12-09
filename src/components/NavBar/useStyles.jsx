const useStyles = () => {
  return {
      container:"z-30 w-full h-[60px] flex justify-between items-center px-4 border-white border-b-2 text-white  text-xl fixed top-0",
      peImg:'w-[60px] py-2',
    menu:" hidden md:flex py-2",
      menu_text:' text-white hover:scale-125 p-3  ',
      hamburger:"md:hidden",
      mobile_menu:'absolute top-0 left-0 w-full h-screen bgNav  ',
      mobile_menu_list:'flex flex-col  items-center backdrop-blur-md h-full',
      x:"flex justify-end w-full mr-8 py-6",
      mobile_menu_text:"py-1 text-4xl  rounded-md m-6",
   
    } 
}

export default useStyles