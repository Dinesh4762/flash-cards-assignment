const Backdrop = ({children}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className=" bg-zinc-800 backdrop-filter backdrop-blur-sm bg-opacity-80 px-3 py-5 w-[400px] max-[450px]:w-[85%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md rounded-md flex flex-col gap-3"
    >
      {children}
    </div>
  );
}

export default Backdrop
