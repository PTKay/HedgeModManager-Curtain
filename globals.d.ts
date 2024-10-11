declare module '*.css';
declare module '*.png';

type Mod = {
    id: number
    title: string
    version: string
    author: string
}

type ModsComponent = {
    mods: Mod[]
}
type ModComponent = {
    mod: Mod
}

type SideStateComponent = {
    setSideHovered: Function
}

type ContentStateComponent = {
    isSideHovered: boolean
}