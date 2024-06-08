import {createBrowserRouter, RouteObject } from 'react-router-dom';

import HomePage from '@/page/index';

const routes : RouteObject[] = [
    {
        path: "/",
        Component: HomePage,
    }
];

export default createBrowserRouter(
    routes,
    {

    }
);
