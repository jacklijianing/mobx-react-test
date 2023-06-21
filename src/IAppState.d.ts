import { IObservable, IObservableValue } from "mobx";


interface IAppState {
    title: string;
    bodyMessage: string;
    errorMessage: string;
    treeNode: BinTreeNode;
    
    setState(newState: IAppState)
}