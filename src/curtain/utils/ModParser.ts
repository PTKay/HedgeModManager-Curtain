import { filesystem as fs } from '@neutralinojs/lib';
import { parse } from 'ini'
import { Mod } from 'src/types/Mod';
import { v4 as uuid } from 'uuid';

export async function parseModList(modsDbPath : string, isBrowserContext : boolean) : Promise<Array<Mod>> {
    let modsArray
    if (isBrowserContext) {
        // Running in browser, no access to filesystem
        modsArray = getDummyModsList()
    } else {
        const modsDBIni = await fs.readFile(modsDbPath)
        const modsDB = parse(modsDBIni)
    
        const mods : Map<string, Mod> = new Map
        for (let key in {...modsDB.Mods}) {
            mods.set(key, await parseMod(modsDB.Mods[key], key))
        }
    
        const activeModCount = modsDB.Main.ActiveModCount
        for (let i = 0; i < activeModCount; ++i) {
            const activeModId = modsDB.Main[`ActiveMod${i}`]
            mods.get(activeModId).isActive = true
        }

        modsArray = Array.from(mods.values())
    }


    return modsArray.sort(compareMods)
}

async function parseMod(modPath : string, id : string) : Promise<Mod> {
    modPath = modPath.replaceAll('"', '')
    const modIni = await fs.readFile(modPath)
    const mod = parse(modIni)

    return {
        id: id,
        title: mod.Desc.Title,
        version: mod.Desc.Version,
        author: mod.Desc.Author,
        isActive: false
    }
}

function compareMods(a: Mod, b: Mod ) {
    if (!a.isActive && b.isActive) {
        return 1
    }
    if (a.isActive && !b.isActive) {
        return -1
    }

    if ( a.title < b.title ) {
        return -1
    }
    if ( a.title > b.title ) {
        return 1
    }

    return 0;
}



function getDummyModsList() : Array<Mod> {
    const dummyMods = [
        {
            id: "1",
            title: "A cool mod",
            version: "1.2",
            author: "Modder 1",
            isActive: false
        },
        {
            id: "2",
            title: "Another cool mod but with a very long name",
            version: "0.9",
            author: "Modder 2",
            isActive: false
        }
    ]

    const dummyModsFinal = dummyMods
        .concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods))
        .concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods))
        .concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods))
        .concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods))
        .concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods))
        .concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods)).concat(structuredClone(dummyMods))

    // Unique Data for Each
    dummyModsFinal.forEach(mod => {
        mod.id = uuid()
        mod.isActive = Math.random() > 0.85
        mod.version = (1 + Math.random()).toFixed(1)
    })
    return dummyModsFinal
}