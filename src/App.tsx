import React from 'react';
import { RouterProvider } from 'react-router-dom';
import route from '@/route';

export default function App(){
    return (<>
        <RouterProvider router={route}>
        </RouterProvider>
    </>);
}
