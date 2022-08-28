const useStyles = () => {
  return {
    container:"w-full h-full  text-gray-300 flex flex-col justify-center items-center ",
    ring:"ring-2 rounded-md bg-black/70 px-5 m-5 mt-[100px] pb-2 ",
    about:"max-w-[1000px] w-full grid grid-cols-2  gap-8  items-center text-right  ",
    aboutText: "text-4xl font-bold inline border-b-4 border-pink-600 leading-tight",
    hi:"  text-4xl font-bold  md:text-right",
    imgContainer:"grid justify-center ",
    img:"rounded-full w-[14rem] my-2", 
    colum: "max-w-[1000px] w-full grid sm:grid-cols-3 gap-6 ",
    columText: " sm:text-center text-2xl font-bold mt-2 ",
    smile:"flex justify-center pt-2"
  };
}; 

export default useStyles;
