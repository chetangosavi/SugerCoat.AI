import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return(
        <div className="p-4 shadow-md">
            <div className=" w-4/5 mx-auto flex justify-between items-center ">
                <h1 className="font-bold text-2xl">SugarCoat.AI</h1>
                <div>
                    <ul className="flex gap-10">
                        <Link to="/"><li>Home</li></Link>
                        <li>Languages</li>
                        <Link to="/solve"><li>Quize</li></Link>
                        <li>Notes</li>
                    </ul>
                </div>
                <div>
                    <button className="bg-blue-500 p-2 px-6 rounded-lg text-white">Sign-In</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;
