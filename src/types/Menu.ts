export type MenuBarState = {
    isHovered : boolean,
    selectedItem : MenuBarItemType
}

export type MenuBarStateComponent = {
    currentState : MenuBarState
    setState: Function
}

export enum MenuBarItemType {
    MODS,
    CODES,
    SETTINGS,
    PLAY
}

export type MenuBarItemComponent = {
    currentState : MenuBarState
    setState: Function
    type : MenuBarItemType
    isAction? : boolean
    children: React.ReactNode
}

export type MenuBarGameSelectorComponent = {
    isHidden : boolean
}