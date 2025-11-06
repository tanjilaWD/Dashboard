import { FiZap } from "react-icons/fi";
import { TbLayoutDashboard } from "react-icons/tb";
import { BsBarChartLineFill } from "react-icons/bs";
import { LuUsersRound } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { GoPackage } from "react-icons/go";
import { MessageSquareText } from 'lucide-react';
import { SlCalender } from "react-icons/sl";
import { FiFileText } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";


const menuItems =[
{ 
   id: 'dashboard',
    icon:<TbLayoutDashboard />,
    label: 'Dashboard',
    active: true,
    badge: 'New'
},
{
    id: 'analytics',
    icon: <BsBarChartLineFill />,
    label: 'Analytics',
    submenu:[
        {id: 'overview', label: 'Overview'},
        {id: 'reports', label:'Reports'},
        {id: 'insights', label: 'Insihgts'}
    ]
},
{
    id: 'users',
    icon: <LuUsersRound />,
    label: 'Users',
    count: '2.4k',
    submenu:[
     {id: 'all-users', label:'All Users'},
     {id: 'roles', label: 'Role & Permissions'},
     {id: 'activity', label: 'User Activity'}
    ]
},
{
    id: 'ecommerce',
    icon: <MdOutlineShoppingBag />,
    label: 'E-commerce',
    submenu: [
     { id: 'products', label: 'Products'},
     { id: 'orders', label: 'Orders'},
     { id: 'customers', label: 'Customers'},
    ]
},
{
    id: 'inventory',
    icon: <GoPackage />,
    label: 'Inventory',
    count: '847'
},
{
    id: 'transactions',
    icon:   <MessageSquareText />,
    label: 'Messages',
    badge: '12'
},
{
    id: 'calender',
    icon: <SlCalender /> ,
    label: 'Calendar'
},
{
    id: 'reports',
    icon: <FiFileText /> ,
    label: 'Reports'
},
{
   id: 'settings',
   icon: <CiSettings /> ,

}
]

const Sidebar = () => {
    return (
<div className="transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10">
{/* logo */}
<div className="p-6 border-b border-slate-200/50 dark:border-slate-700/">
<div className="flex items-center space-x-3">
<div className="size-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
<FiZap className="size-6 text-white"/>
</div>

{/* conditional Rendering */}
<div>
<h1 className="text-xl font-bold text-slate-800 dark:text-white">Nexus</h1>
<p className="text-xs text-slate-500 dark:text-slate-400">Admin Panel</p>
</div>
</div>
</div>
{/* Navigation I will display Dynamic Menus */}
<nav className="flex-1 p-4 space-y-2 overflow-y-auto"></nav>
{/* user Profile */}
<div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
<div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
<img
src="https://scontent.fdac155-1.fna.fbcdn.net/v/t39.30808-6/562370229_1197787835496438_7853508759030175869_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=MEv0xuNPFRcQ7kNvwEuqys5&_nc_oc=Adm3jJybuHekwYUjj-VmzYZgUkHMsdK51jUW4kCNVfc88_c522qJlIwTyU2ntIJCLi0&_nc_zt=23&_nc_ht=scontent.fdac155-1.fna&_nc_gid=gecaoIrG63oBe9sFadK8Lg&oh=00_Afj4dWJGe1lgB5Imn-PNB073anfFIXpcxT1zCGiG5OiHkg&oe=690E2E4A"
alt="user" 
className="size-10 rounded-full ring-2 ring-blue-500"
/>
<div className="flex-1 min-w-8">
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-slate-800 dark:text-white">Tanjila</p>
<p className="text-xs text-slate-500 dark:text-slate-400 truncate">Administrator</p>    
</div>    

</div>

</div>

</div>
</div>
);
};

export default Sidebar;