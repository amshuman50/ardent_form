import React, { useState } from "react";
import {
    LayoutDashboard,
    Users,
    UserCog,
    Bell,
    Plus,
    Package,
    Clock,
    CreditCard,
    Settings,
    LogOut,
    Menu
} from "lucide-react";

// Define menu items for Demo's Restaurant
const demosRestaurantMenuItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Sales", icon: <Users className="w-5 h-5" /> },
    { name: "Customer / Customer Care", icon: <UserCog className="w-5 h-5" /> },
    { name: "HR/ Staff Management", icon: <Users className="w-5 h-5" /> },
    { name: "Broadcast", icon: <Bell className="w-5 h-5" /> },
    { name: "Permission Assignment", icon: <Plus className="w-5 h-5" /> },
    { name: "Product Management", icon: <Package className="w-5 h-5" /> },
    { name: "Extras", icon: <Clock className="w-5 h-5" /> },
    { name: "Billing", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Settings", icon: <Settings className="w-5 h-5" /> },
    // { name: "Log out", icon: <LogOut className="w-5 h-5" /> },
];

// Define menu items for The Nest
const theNestMenuItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Orders", icon: <Package className="w-5 h-5" /> },
    { name: "Menu Management", icon: <Package className="w-5 h-5" /> },
    { name: "Staff Management", icon: <Users className="w-5 h-5" /> },
    { name: "Customer Feedback", icon: <Bell className="w-5 h-5" /> },
    { name: "Inventory", icon: <Package className="w-5 h-5" /> },
    { name: "Reports", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Settings", icon: <Settings className="w-5 h-5" /> },
    // { name: "Log out", icon: <LogOut className="w-5 h-5" /> },
];

export default function Sidebar({
    restaurantName = "Demo's Restaurant",
    logoUrl = "/cinema.jpg",
    onMenuItemClick,
    initialSelected = "Dashboard",
    onOpenChange,
    onRestaurantChange
}) {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(initialSelected);

    // Select menu items based on restaurant name
    const menuItems = restaurantName === "The Nest" ? theNestMenuItems : demosRestaurantMenuItems;

    const handleMenuItemClick = (itemName) => {
        setSelected(itemName);
        if (onMenuItemClick) {
            onMenuItemClick(itemName);
        }
    };

    const handleRestaurantChange = (e) => {
        if (onRestaurantChange) {
            onRestaurantChange(e.target.value);
        }
    };

    const toggleSidebar = () => {
        const newOpenState = !open;
        setOpen(newOpenState);
        if (onOpenChange) {
            onOpenChange(newOpenState);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-4 left-4 z-[101] p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
                <Menu
                    className={`w-6 h-6 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                />
            </button>

            {/* Sidebar */}
            <nav
                className={`fixed top-0 left-0 h-screen bg-white text-black shadow-lg z-[100] flex flex-col transition-all duration-300 ${open ? "w-[260px]" : "w-0 opacity-0"
                    }`}
            >
                <div className={`flex flex-col items-center pt-6 pb-2 ${!open && 'hidden'}`}>
                    <img src={logoUrl} alt="Logo" className="w-16 h-16 rounded-full mb-2" />
                    
                    <select
                        value={restaurantName}
                        onChange={handleRestaurantChange}
                        className="w-[90%] rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 shadow-sm transition duration-200 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none mb-4 hover:border-gray-400"
                    >
                        <option
                            value="Demo's Restaurant"
                            className="text-gray-700 text-sm py-2"
                        >
                            🍽️ Demo's Restaurant
                        </option>
                        <option
                            value="The Nest"
                            className="text-gray-700 text-sm py-2"
                        >
                            🪺 The Nest
                        </option>
                    </select>

                </div>
                <div className={`flex-1 flex flex-col gap-1 px-2 overflow-y-auto ${!open && 'hidden'}`}>
                    {menuItems.map((item) => (
                        <div
                            className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer transition-colors duration-200 text-[15px] font-medium hover:bg-gray-100 ${selected === item.name ? "bg-blue-100 text-blue-700" : "text-gray-700"
                                }`}
                            key={item.name}
                            onClick={() => handleMenuItemClick(item.name)}
                        >
                            {item.icon}
                            <span className={`sidebar-text ${open ? "block" : "hidden"}`}>{item.name}</span>
                        </div>
                    ))}
                </div>
            </nav>
        </>
    );
}