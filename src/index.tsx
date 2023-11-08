import { createRoot } from 'react-dom/client';
import App from './curtain/App'
import { StrictMode } from 'react';
import { init, app, events } from "@neutralinojs/lib"

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
// Default dark theme
document.body.classList.add('theme-dark')
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)

init()
events.on("windowClose", () => app.exit())
document.addEventListener('contextmenu', event => event.preventDefault())