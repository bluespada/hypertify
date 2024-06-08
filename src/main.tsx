import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';

import '@/assets/main.scss';

const root = createRoot(document.getElementById("zeus") as HTMLElement);
root.render(<App/>);
