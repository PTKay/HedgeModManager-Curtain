import { Fragment, ReactNode, useEffect, useState } from 'react';
import { app } from '@neutralinojs/lib';

import './stylesheets/general/main.css';
import './stylesheets/general/themes.css';
import './stylesheets/general/fonts.css';
import styles from "./App.module.css"

import Top from './components/window/top/Top';
import Menu from './components/window/menuBar/MenuBar';
import Bottom from './components/window/bottom/Bottom';
import ModsList from './components/mods/modsList/ModList';

import { MenuBarItemType, MenuBarState } from 'src/types/Menu';
import { Mod } from "src/types/Mod";
import CodesList from './components/codes/codesList/CodesList';
import { parseModList } from './utils/ModParser';

function getCurrentPage(selectedItem: MenuBarItemType, mods : Array<Mod>): ReactNode {
    switch(selectedItem) {
        case MenuBarItemType.MODS:
            return (
                <ModsList mods={mods} />
            )
        case MenuBarItemType.CODES:
            return (
                <CodesList codes={[]} />
            )
        default:
            return <></>
    }
}

export default function App(props : AppProperties) {
    const [menuState, setMenuState] = useState<MenuBarState>({
        isHovered: false,
        selectedItem: MenuBarItemType.MODS
    })
    const [mods, setMods] = useState(null)

    if (menuState.selectedItem == MenuBarItemType.PLAY) {
        app.exit()
    }

    useEffect(() => {
        const getMods = async () => { 
            let loadedMods
            try {
                loadedMods = await parseModList("ModsDB.ini", props.isBrowserContext)
            } catch (e) {
                console.log(e)
            }

            if (loadedMods == null) {
                setMods([])
            } else {
                setMods(loadedMods)
            }
        }

        getMods()
    }, [])

    if (mods == null) {
        return <></>
    }

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