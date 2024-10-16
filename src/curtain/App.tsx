import { Fragment, useState } from 'react';
import { app } from '@neutralinojs/lib';

import './stylesheets/general/main.css';
import './stylesheets/general/themes.css';
import './stylesheets/general/fonts.css';
import styles from "./App.module.css"

import Top from './components/window/top/Top';
import Menu from './components/window/menuBar/MenuBar';
import Bottom from './components/window/bottom/Bottom';
import ModsList from './components/mods/modsList/ModList';

import { MenuBarItem, MenuBarState } from 'src/types/Menu';
import { Mod } from "src/types/Mod";
import CodesList from './components/codes/codesList/CodesList';

function getCurrentPage(selectedItem: MenuBarItem, mods : Array<Mod>): import("react").ReactNode {
    switch(selectedItem) {
        case MenuBarItem.MODS:
            return (
                <ModsList mods={mods} />
            )
        case MenuBarItem.CODES:
            return (
                <CodesList codes={[]} />
            )
        default:
            return <></>
    }
}

export default function App() {
    const [menuState, setMenuState] = useState<MenuBarState>({
        isHovered: false,
        selectedItem: MenuBarItem.MODS
    })

    if (menuState.selectedItem == MenuBarItem.PLAY) {
        app.exit()
    }

    const mods: Array<Mod> = [
        {
            id: 1,
            title: "Free Camera",
            version: "1.2",
            author: "Skyth"
        },
        {
            id: 2,
            title: "Generations Raytracing",
            version: "0.9",
            author: "Skyth"
        }
    ]

    return (
        <Fragment>
            <Top />
            <div className="page">
                <Menu setState={setMenuState} currentState={menuState}/>
                <div className={styles.content}>
                    <div className={`${styles.darkened} ${menuState.isHovered ? styles.darkenedActive : ''}`}></div>
                    {
                        getCurrentPage(menuState.selectedItem, mods)
                    }
                </div>
            </div>
            <Bottom />
        </Fragment>
    )
}