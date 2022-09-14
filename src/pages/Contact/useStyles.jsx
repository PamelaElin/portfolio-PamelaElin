const useStyles = () => {
  return {
    container:'w-full h-full mt-12  flex justify-center items-center p-8 md:p-4 flex-col',
   textContainer:"bg-gray-500/50 p-3",
    form:'flex flex-col max-w-[600px] w-full ',
    textContact:'md:text-4xl text-3xl font-bold inline border-b-4 border-yellow-500 text-white ',
    textEmail:'text-white py-4 text-lg',
    inputName:' bg-white p-2 rounded-md focus:outline-none',
    inputEmail:'mt-4 p-2 bg-white rounded-md peer  focus:outline-none focus:border-sky-500 focus:ring-2  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500  focus:valid:ring-green-500',
    invalidEmail:'mt-0 mb-4 invisible peer-invalid:visible text-white bg-yellow-500/40 text-sm mt-1',
    textarea:'resize-none bg-white p-2 rounded-md after:content-["*"] after:ml-0.5 after:text-red-500 focus:outline-none',
    btn:'text-white border-2 hover:bg-amber-600 hover:scale-110  px-4 py-3 my-8 mx-auto flex items-center rounded-full'
  }
}

export default useStyles