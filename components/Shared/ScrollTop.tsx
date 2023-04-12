import Link from "next/link"


const ScrollTop = () => {
  return (
    <>
        <Link id="scrollUp" className="w-12 h-12 rounded-full bg-[#435c7f] text-white fixed right-5 bottom-16 flex flex-wrap items-center justify-center transition-all duration-300 z-10" href="#" aria-label="scroll up"><i className="icon-arrow-up"></i></Link>
    </>
  )
}

export default ScrollTop