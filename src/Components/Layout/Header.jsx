import { TiThMenu } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineFilterAlt } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
const Header = () => {
return (
<div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4">
<div className="flex items-center justify-between">
{/*left section  */}
<div className="flex items-center space-x-4">
<button className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<TiThMenu className="size-5"/>
</button>
<div className="hidden md:block">
<h1 className="text-2xl font-black text-slate-800 dark:text-white ">Dashboard</h1>    
<p className="dark:text-slate-400">Welcome back, Tanjila! here's what's happening today</p>
</div>
</div>
{/* center */}
<div className="flex-1 max-w-md mx-8">
<div className="relative">
<IoSearchSharp className="size-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"/>
<input type="text" placeholder="Search Anything" className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"/>
 <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
    <MdOutlineFilterAlt />
 </button>
</div>    
</div>    
{/* Right */}
<div className="flex items-center space-x-3">
{/*Quic Action*/}
<button className="hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all">
<FiPlus className="size-4"/>
<span className="text-sm font-medium">New</span>
</button>
{/* Toggle */}
<button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<IoSunnyOutline className="size-5"/>    
</button>
{/* Notification */}
<button className="relative p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
<GoBell className="size-5"/>
<span className="absolute -top-1 size-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>    
</button>
{/* setting */}
<button className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
  <IoSettingsOutline className="size-5"/>  
</button>
{/* user profile */}
<div className="flex items-center space-x-3 pl-3 border-l border-slate-200 dark:border-slate-700">
<img 
src="https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/562370229_1197787835496438_7853508759030175869_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MEv0xuNPFRcQ7kNvwEuqys5&_nc_oc=Adm3jJybuHekwYUjj-VmzYZgUkHMsdK51jUW4kCNVfc88_c522qJlIwTyU2ntIJCLi0&_nc_zt=23&_nc_ht=scontent.fdac155-1.fna&_nc_gid=gecaoIrG63oBe9sFadK8Lg&oh=00_Afj4dWJGe1lgB5Imn-PNB073anfFIXpcxT1zCGiG5OiHkg&oe=690E2E4A" 
alt="User"
className="size-8 rounded-full ring-2 ring-blue-500"
/>
<div className="hidden md:block">
<p className="text-sm font-medium text-slate-500 dark:text-slate-400">Tanjila</p>
<p className="text-xs text-slate-500 dark:text-slate-400">Administrator</p>
</div>
<FaAngleDown className="size-4 text-slate-400"/>
</div>
</div>
</div>
</div> 
    );
};

export default Header;