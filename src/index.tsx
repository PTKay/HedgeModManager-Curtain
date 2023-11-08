import { createRoot } from 'react-dom/client';
import App from './curtain/App'
import { StrictMode } from 'react';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
// Default dark theme
document.body.classList.add('theme-dark')
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)