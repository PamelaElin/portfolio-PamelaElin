const useStyles = () => {
  return {
    container:"w-full h-full  text-white flex flex-col justify-center items-center ",
    ring:"ring-2 ring-yellow-500 rounded-md  px-5 m-5 mt-[100px] pb-2 ",
    about:"max-w-[1000px] w-full grid grid-cols-2  gap-8  items-center text-right  ",
    aboutText: "text-4xl font-bold inline border-b-4 border-yellow-500 leading-tight",
    hi:"  text-4xl font-bold  md:text-right",
    imgContainer:"grid justify-center ",
    img:"rounded-full w-[14rem] my-2", 
    colum: "max-w-[1000px] grid sm:grid-cols-3 gap-6 text-white text-xl ",
    columText: " sm:text-right text-2xl font-bold  ",
    smile:"flex justify-center pt-2"
  };
}; 

export default useStyles;
