import * as React from "react";
import "./configureMobx";
import { observable, action, makeObservable } from "mobx";
import { IAppState } from "./IAppState";
import { BinTreeNode } from "./TreeNode";
import { createContext } from "react";

export class AppState implements IAppState {
    @observable title = "Tree Traversal";

    @observable bodyMessage = "Process the input file to a Tree";

    @observable errorMessage = "";

    @observable treeNode = new BinTreeNode("root", null, null);

    @observable highlightSubtree = true;

    constructor() {
        makeObservable(this)
    }

    @action setState(newState: IAppState) {
        this.title = newState.title;
        this.bodyMessage = newState.bodyMessage;
        this.errorMessage = newState.errorMessage;
        this.treeNode = newState.treeNode;
        this.highlightSubtree = newState.highlightSubtree;
    }
}

export const AppStateContext = createContext<IAppState>(new AppState());

export const AppStateContextProvider = AppStateContext.Provider;

export const AppStateContextConsumer= AppStateContext.Consumer;

export const useAppStateContext = () => {
    return React.useContext(AppStateContext);
}

