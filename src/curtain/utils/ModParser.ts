import { filesystem as fs } from '@neutralinojs/lib';
import { stringify , parse } from 'ini'
import { Mod } from 'src/types/Mod';

export async function parseModList(modsDbPath : string) : Promise<Array<Mod>> {
    const modsDBIni = await fs.readFile(modsDbPath)
    const modsDB = parse(modsDBIni)

    const mods : Array<Mod> = []
    for (let key in {...modsDB.Mods}) {
        mods.push({
            id: key,
            title: "title",
            version: "1.0",
            author: "test"
        })
    }

    return mods
}