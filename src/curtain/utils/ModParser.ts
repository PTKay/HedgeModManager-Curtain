import { filesystem as fs } from '@neutralinojs/lib';
import { parse } from 'ini'
import { Mod } from 'src/types/Mod';

export async function parseModList(modsDbPath : string) : Promise<Array<Mod>> {
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

    return Array.from(mods.values()).sort(compareMods)
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