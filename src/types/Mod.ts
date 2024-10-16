export type Mod = {
    id: string
    title: string
    version: string
    author: string
}

export type ModsComponent = {
    mods: Mod[]
}
export type ModComponent = {
    mod: Mod
}