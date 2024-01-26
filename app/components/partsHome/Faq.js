export default function Faq() {
    return (
        <div className="lg:grid grid-cols-2 bg-white lg:py-20 justify-center ">
            <div>
                <div className="mx-14 lg:mt-10  rounded-lg">
                    <div className="mt-10 text-center text-black  font-bold">Contact Us</div>
                    <div className="mt-3 text-center text-4xl font-bold text-black">Make an Appointment</div>
                    <div className="p-1">
                        <div className=" grid grid-cols-1 lg:grid-cols-2 p-4">
                            <input type="Name" name="name" className="lg:m-2  w-[95%] block lg:wrounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Full Name *" />
                            <input type="email" name="email" className="lg:m-2 my-2 block w-[95%] lg:wrounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Email *" />
                        </div>

                        <div className="">
                            <textarea name=" textarea" id="text" cols="200" rows="10" className=" w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300">Message</textarea>
                        </div>
                        <div className="text-center w-[100%]">
                            <button className="bg-[#1C7261] text-white hover:bg-[#148A87]    
                px-[30px] py-[15px]  leading-[16px] text-[16px] w-full
                border-[1px] border-[#1C7261] rounded-[5px]"> Book Now </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:p-10">
                <ul className="max-w-2xl mx-auto lg:mt-20 divide-y  shadow  bg-[#F7F9FB]">
                    <li>
                        <details className="group">
                            <summary className="flex items-center gap-3 px-5 py-4 font-medium marker:content-none hover:cursor-pointer">
                                <svg className="w-5 h-5 text-[#051145] transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                    </path>
                                </svg>
                                <span className="text-[#051145]">What am I getting as a Premium Member?</span>
                            </summary>

                            <article className="px-4 pb-4">
                                <p className="text-[#051145]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                                    porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. </p>
                            </article>
                        </details>
                    </li>
                    <li>
                        <details className="group">
                            <summary className="flex items-center gap-3 px-5 py-4 font-medium marker:content-none hover:cursor-pointer">
                                <svg className="w-5 h-5 text-[#051145] transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                    </path>
                                </svg>
                                <span className="text-[#051145]">What am I getting as a Premium Member?</span>
                            </summary>

                            <article className="px-4 pb-4">
                                <p className="text-[#051145]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                                    porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. </p>
                            </article>
                        </details>
                    </li>
                    <li>
                        <details className="group">
                            <summary className="flex items-center gap-3 px-5 py-4 font-medium marker:content-none hover:cursor-pointer">
                                <svg className="w-5 h-5 text-[#051145] transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                    </path>
                                </svg>
                                <span className="text-[#051145]">What am I getting as a Premium Member?</span>
                            </summary>

                            <article className="px-4 pb-4">
                                <p className="text-[#051145]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                                    porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. </p>
                            </article>
                        </details>
                    </li>
                    <li>
                        <details className="group">
                            <summary className="flex items-center gap-3 px-5 py-4 font-medium marker:content-none hover:cursor-pointer">
                                <svg className="w-5 h-5 text-[#051145] transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                    </path>
                                </svg>
                                <span className="text-[#051145]">What am I getting as a Premium Member?</span>
                            </summary>

                            <article className="px-4 pb-4">
                                <p className="text-[#051145]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                                    porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. </p>
                            </article>
                        </details>
                    </li>
                    <li>
                        <details className="group">
                            <summary className="flex items-center gap-3 px-5 py-4 font-medium marker:content-none hover:cursor-pointer">
                                <svg className="w-5 h-5 text-[#051145] transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                    </path>
                                </svg>
                                <span className="text-[#051145]">What am I getting as a Premium Member?</span>
                            </summary>

                            <article className="px-4 pb-4">
                                <p className="text-[#051145]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                                    porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. </p>
                            </article>
                        </details>
                    </li>
                    <li>
                        <details className="group">
                            <summary className="flex items-center gap-3 px-5 py-4 font-medium marker:content-none hover:cursor-pointer">
                                <svg className="w-5 h-5 text-[#051145] transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z">
                                    </path>
                                </svg>
                                <span className="text-[#051145]">What am I getting as a Premium Member?</span>
                            </summary>

                            <article className="px-4 pb-4">
                                <p className="text-[#051145]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ipsum sapien. Vestibulum molestie
                                    porttitor augue vitae vulputate. Aliquam nec ex maximus, suscipit diam vel, tristique tellus. </p>
                            </article>
                        </details>
                    </li>

                </ul>
            </div>
        </div>
    )
}