import React from "react";

const Login = () => {

  const handleClick = () => {
    console.log(2)
  }

  return(
<section className="h-screen"
 style={{background: "linear-gradient(90deg, rgba(2,17,33,1) 19%, rgba(1,10,20,1) 55%)"}}
 >
  <div  className=" h-full p-0">
    <div
       className="flex h-full items-center" >
      {/* <!-- Left column container with background--> */}

        <img style={{width: "60vw"}} src="https://media.mktg.workday.com/is/image/workday/building-better-security-practices-inside-and-outside-the-organization?wid=2016"/>

      {/* <!-- Right column container with form --> */}
      <div  className=" ml-20 w-2/6">
        <div>
          {/* <!-- Email input --> */}
          <div  className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
               className="w-full rounded border-sky-100 border-2 bg-transparent p-[0.62rem]"
              placeholder="Email address" />
          </div>

          {/* <!-- Password input --> */}
          <div  className="relative mb-6" data-te-input-wrapper-init>
            <input
              type="password"
              className="w-full rounded border-sky-100 border-2 bg-transparent p-[0.62rem]"
             placeholder="Password" />
          </div>

          {/* <!-- Submit button --> */}
          <button
            type="submit"
             className="w-full rounded p-3 bg-cyan-800 text-white shadow-[0_5px_9px_-4px_#3b71ca]">
            Sign in like a dummy
          </button>

          {/* <!-- Divider --> */}
          <div
             className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p
               className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
              OR
            </p>
          </div>

          {/* <!-- Social login buttons --> */}
          <button
            onClick={handleClick}
            className="flex items-center justify-center rounded h-11 text-sm font-medium uppercase text-white shadow-[0_4px_9px_-4px_#54b4d3] w-full"
            style={{backgroundColor:  "#55acee"}}>
            {/* <!-- Twitter --> */}
            <svg
              className="mr-2 h-5 w-5"
              fill="currentColor">
                <path style={{color: "#547dbe"}} d="M18,9a8.84,8.84,0,0,0-.18-1.79H9v3.6h5.46l0,.22a4.11,4.11,0,0,1-2,2.76l2.68,2.12A8.87,8.87,0,0,0,18,9Z"></path>
                <path style={{color: "#34a751"}} d="M12.43,13.78A6.64,6.64,0,0,1,9,14.61a5.52,5.52,0,0,1-5.23-3.54L1,13.25A8.87,8.87,0,0,0,9,18a9.11,9.11,0,0,0,6.1-2.1Z"></path>
                <path style={{color: "#f8bb15"}} d="M3.39,9a5.63,5.63,0,0,1,.39-2.06L1.05,4.77A9,9,0,0,0,0,9a9.24,9.24,0,0,0,1,4.26l2.76-2.18A5.62,5.62,0,0,1,3.39,9Z"></path>
                <path style={{color: "#e94435"}} d="M9.12,3.37A5.41,5.41,0,0,1,13,4.8l2.39-2.39A8.79,8.79,0,0,0,9.12,0,9.08,9.08,0,0,0,1.05,4.77L3.78,6.93A5.62,5.62,0,0,1,9.12,3.37Z"></path>
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login