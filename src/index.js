import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import '../public/index.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
