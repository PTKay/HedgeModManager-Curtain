export enum MenuBarItem {
    MODS,
    CODES,
    SETTINGS,
    PLAY
}

export type MenuBarState = {
    isHovered : boolean,
    selectedItem : MenuBarItem
}

export type MenuBarStateComponent = {
    currentState : MenuBarState
    setState: Function
}