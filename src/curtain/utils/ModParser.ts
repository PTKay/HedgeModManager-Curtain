import { filesystem as fs } from '@neutralinojs/lib';
import { parse } from 'ini'
import { Mod } from 'src/types/Mod';

export async function parseModList(modsDbPath : string) : Promise<Array<Mod>> {
    const modsDBIni = await fs.readFile(modsDbPath)
    const modsDB = parse(modsDBIni)

    const mods : Array<Mod> = []
    for (let key in {...modsDB.Mods}) {
        mods.push(await parseMod(modsDB.Mods[key], key))
    }

    return mods
}

async function parseMod(modPath : string, id : string) : Promise<Mod> {
    modPath = modPath.replaceAll('"', '')
    const modIni = await fs.readFile(modPath)
    const mod = parse(modIni)

    return {
        id: id,
        title: mod.Desc.Title,
        version: mod.Desc.Version,
        author: mod.Desc.Author
    }
}