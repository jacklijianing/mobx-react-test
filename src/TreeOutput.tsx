import * as React from "react";
import { BinTreeNode } from "./TreeNode";

import "./TreeOutput.scss"

export interface TreeOutputProps {
    treeNode: BinTreeNode | null,
    highlightTreeNode: BinTreeNode | null,
}

export const TreeOutput: React.FunctionComponent<TreeOutputProps> = (props) => {
    if (!props.treeNode || !props.treeNode.id) {
        return <div className="treeNode"></div>;
    }
    return (
        <div className={`treeNode ${(props.highlightTreeNode && props.treeNode.id === props.highlightTreeNode.id) ? 'highlightTreeNode' : ''}`}>
            <div className="nodeId">{props.treeNode.id}</div>
            {props.treeNode.left || props.treeNode.right ?
                <div className="nodeChildren">
                    <TreeOutput treeNode={props.treeNode.left} highlightTreeNode = {props.highlightTreeNode}/>
                    <TreeOutput treeNode={props.treeNode.right} highlightTreeNode = {props.highlightTreeNode}/>
                </div> :
                null}
        </div>
    );
}