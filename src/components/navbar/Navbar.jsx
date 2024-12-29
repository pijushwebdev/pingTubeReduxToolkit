import { Link } from "react-router";
import Search from "./Search";


const Navbar = () => {
    return (
        <nav className="bg-slate-100 shadow-md">
            <div
                className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3"
            >
                <Link className="flex items-center gap-2" to={'/'}>
                    <img
                        className="h-10"
                        src="/logo.png"
                        alt="pingTube"
                    />
                    <span className="font-dancingScript text-xl">ping<span className="font-bold text-purple-800">Tube</span></span>
                </Link>
                <div
                    className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
                >
                    {/* <!-- search --> */}
                    <Search/>

                    
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;