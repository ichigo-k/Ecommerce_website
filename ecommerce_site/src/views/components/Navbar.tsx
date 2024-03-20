
export default function Navbar() {

    let auth = true
  return (
    <nav className='flex w-full items-center justify-between mt-3 px-1'>
        <a href="/"> <h1 className="text-xl lg:text-2xl "><span>E</span>commerce</h1> </a>     

            <div>
                {
                    auth 
                    ? 
                    <div>
                        <button>Logout</button>
                        <button>Profile</button>
                    </div>

                    :
                        <button className="ring-1 rounded-full lg:px-5 px-4 p-1 ring-black">Login</button>
                    
                }
            </div>
    </nav>
  )
}
