import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = () => {
    const [activeTab, setActiveTab] = useState('Home');
    return (
        <div className="flex">
            <Sidebar setActiveTab={setActiveTab} />

            <div className="flex-1 flex flex-col ml-20">
                <Header activeTab={activeTab} />

                <main className="min-h-screen bg-gray-100 p-4">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default Layout;