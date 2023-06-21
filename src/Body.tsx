import * as React from 'react';
import { IAppState } from "./IAppState";
import { observer } from "mobx-react";
import { TreeInput } from './TreeInput';
import { TreeOutput } from './TreeOutput';
import "./Body.scss"
import { useAppStateContext } from './AppState';
import { FindSubTreeWithAllDeepestNode } from "./FindSubTreeWithAllDeepestNode";
interface BodyProps {
    appState: IAppState
}

const BodyRenderer: React.FunctionComponent<BodyProps> = observer((props) => {
    return (
        <main className="App-body">
            {props.appState!.bodyMessage}

            <div className="ErrorMessage"> {props.appState!.errorMessage}</div>
            <TreeInput onChange={(newVal, newErrorMessage) => {
                props.appState.setState({
                    ...props.appState,
                    errorMessage: newErrorMessage
                                   
                });
                if (newVal !== null)
                {
                    props.appState.setState({
                        ...props.appState,
                        treeNode: newVal
                    })
                }
            }} />
            Output
            <div className="OutputContainer">
                <label>
                    <input type="checkbox" 
                    checked = {props.appState!.highlightSubtree}
                    onChange={() => {
                        props.appState.setState({
                            ...props.appState,
                            highlightSubtree: !props.appState.highlightSubtree
                                        
                        });
                }}/>
                    Highlight the smallest subtree containing all deepest nodes
                </label>
                <TreeOutput treeNode={props.appState.treeNode} highlightTreeNode = {
                    props.appState.highlightSubtree? 
                    FindSubTreeWithAllDeepestNode(props.appState.treeNode) 
                    : null
                    }/>
            </div>
        </main>
    );
})

export const Body: React.FunctionComponent<{}> = (props) => {
    const appState = useAppStateContext();
    return <BodyRenderer appState={appState} />
}

export default Body;