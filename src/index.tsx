import { createRoot } from 'react-dom/client';
import App from './curtain/App'
import { StrictMode } from 'react';
import * as Neutralino from "@neutralinojs/lib"

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
// Default dark theme
document.body.classList.add('theme-dark')

let isBrowser = false
try {
    Neutralino.init()
    Neutralino.events.on("windowClose", () => Neutralino.app.exit())
    Neutralino.window.center()
} catch (e) {
    console.error(`Failed to init NeutralinoJS!`, e)
    isBrowser = true
}
document.addEventListener('contextmenu', event => event.preventDefault())


root.render(
    <StrictMode>
        <App isBrowserContext={isBrowser}/>
    </StrictMode>
)