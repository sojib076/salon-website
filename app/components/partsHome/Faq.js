export default function Faq() {
    return (
        <div className="lg:grid grid-cols-2 bg-white lg:py-20 justify-center ">
            <div className=" mt-8 p-4  ">
                <h2 className="font-bold  text-[#051145]  text-center text-[20px] lg:mb-4 lg:text-[72px] lg:leading-[72px]">Contact Form</h2>

                <form className="">
              <div className="grid lg:grid-cols-2 gap-5"> 
              <div className="lg:mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="number" className="block text-sm font-semibold text-gray-600 mb-1">Number</label>
                        <input
                            type="tel"
                            id="number"
                            name="number"
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        />
                    </div>
              </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#1C7261] text-white w-full px-4 py-2 rounded hover:bg-[#148A87] focus:outline-none focus:ring focus:border-blue-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <div className="lg:p-10">
                <ul className="max-w-2xl mx-auto lg:mt-20 divide-y  shadow  bg-[#F7F9FB]">
                    <li>
                        <details className="group">
                            <summary className="flex items-center gap-3 px-5 py-4 font-medium marker:content-none hover:cursor-pointer">
                                <svg className="w-5 h-5 text-[#051145] transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
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
                                    <path fillRule="evenodd"
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
                                    <path fillRule="evenodd"
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
                                    <path fillRule="evenodd"
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
                                    <path fillRule="evenodd"
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
                                    <path fillRule="evenodd"
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