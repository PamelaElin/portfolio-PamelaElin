const useStyles = () => {
  return {
    container:"w-full h-full  text-white flex flex-col justify-center items-center backdrop-blur-md",
    ring:"  px-5 m-5 mt-[100px] pb-2 ",
    about:"max-w-[1000px] w-full grid md:flex grid-cols-2  gap-8 md:gap-0  items-center md:justify-between text-right  ",
    aboutText: "md:text-4xl text-xl font-bold inline border-b-4 border-white leading-tight text-center",
    aboutTextSubtitle: "md:text-xl    leading-tight text-center",
    hi:"md:text-2xl font-bold  md:text-right ",
    imgContainer:"grid justify-end ",
    img:"rounded-md w-[14rem] my-2", 
    colum: "max-w-[1000px] grid sm:grid-cols-3 gap-6 text-white text-xl ",
    columText: " sm:text-right text-2xl font-bold  grid items-between",
    smile:"flex justify-center pt-2"
  };
}; 

export default useStyles;
