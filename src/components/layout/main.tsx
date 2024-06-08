import React from 'react';
import SidebarComponent from '@/components/layout/SidebarComponent';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function MainTemplate({ children }: { children: React.ReactNode }){
    const [ openSidebar, setOpenSidebar ] = React.useState(false);
    return (<>
        <main className="w-full h-full min-h-screen">
            <div className="flex flex-row">
                <SidebarComponent/>
                <div>
                </div>
            </div>
        </main>
    </>);
}
