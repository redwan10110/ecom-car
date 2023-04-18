const ContactUs = () => {
  return (
    <>
      {/* Breadcrumb section start */}
      <div
        className="py-0 "
        style={{
          backgroundImage: "url('/images/GreyBar.png')",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12">
              <nav>
                <h2 className="ml-0 lg:ml-[160px] lg:text-[30px] text-[25px] mb-[-10px]">
                  Contact
                </h2>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb section end */}


      {/* <!-- contact us section start --> */}


<div className="bg-white py-24">
    <div className="container">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
          <div className="contact-info-area">
             <h2 className="font-semibold text-dark text-4xl mb-14 capitalize">Contact Us</h2>
             <div className="flex flex-wrap items-center mb-8">
                <span className="text-dark text-4xl mr-5"><i className="icon-location-pin"></i></span>
                <p className="flex-1">Address goes here, street, Crossroad 123.</p>
             </div>
             <div className="flex flex-wrap items-center mb-8">
                <span className="text-dark text-4xl mr-5"><i className="icon-envelope"></i></span>
               <a href="mailto:info@example.com" className="flex-1">info@example.com / info@example.com</a>
             </div>
             <div className="flex flex-wrap items-center">
                <span className="text-dark text-4xl mr-5"><i className="icon-screen-smartphone"></i></span>
               <a href="tel:01234567890" className="flex-1">+1 35 776 859 011 / +1 35 776 859 011</a>
             </div>
          </div>

          <div className="p-10 lg:p-14 shadow mt-14 lg:mt-0">
            <form id="contact-form" >
               <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" type="text" name="name" placeholder="Name" />
               <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" type="email" placeholder="Email" name="email"/>
               <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" type="text" placeholder="subject" name="subject"/>
               <textarea className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 text-dark h-32 focus:outline-none text-base resize-none" name="massage"></textarea>
               <button className="w-full leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-[#435c7f]" type="submit" aria-label="button">Send Message</button>
            </form>
            <p className="form-messege"></p>
         </div>
       </div>
    </div>
    
    </div>
{/* <!-- contact us section end --> */}
    </>
  );
};

export default ContactUs;
