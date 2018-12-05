import React from 'react';
import { prependOnceListener } from 'cluster';
const layout=()=>(
    <div>Toolbar, Sidebar, Backdrop</div>
    <main>
    {props.children}    
    </main>
);