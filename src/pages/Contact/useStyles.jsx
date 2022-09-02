const useStyles = () => {
  return {
    container:'w-full h-full mt-12  flex justify-center items-center p-8 md:p-4 flex-col',
   textContainer:"bg-black/40 p-3",
    form:'flex flex-col max-w-[600px] w-full ',
    textContact:'md:text-4xl text-3xl font-bold inline border-b-4 border-amber-600 text-gray-300 ',
    textEmail:'text-gray-300 py-4',
    inputName:' bg-[#ccd6f6] p-2 rounded-md focus:outline-none',
    inputEmail:'mt-4 p-2 bg-[#ccd6f6] rounded-md peer  focus:outline-none focus:border-sky-500 focus:ring-2  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500  focus:valid:ring-green-500',
    invalidEmail:'mt-0 mb-4 invisible peer-invalid:visible text-gray-400 text-sm',
    textarea:'resize-none bg-[#ccd6f6] p-2 rounded-md after:content-["*"] after:ml-0.5 after:text-red-500 focus:outline-none',
    btn:'text-white border-2 hover:bg-amber-600 hover:scale-110  px-4 py-3 my-8 mx-auto flex items-center rounded-full'
  }
}

export default useStyles