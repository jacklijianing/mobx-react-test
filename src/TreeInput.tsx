import * as React from "react";
import { BinTreeNode } from "./TreeNode";
import { convertArrayToNode } from "./ConvertArrayToNode";

export interface TreeInputProps {
    onChange: (newTreeNode: BinTreeNode) => void
}
interface TreeInputState {
    treeText: string,
    treeJSON: string
}

export class TreeInput extends React.Component<TreeInputProps, TreeInputState>{
    constructor(props: TreeInputProps) {
        super(props);
        this.state = {
            treeText: "",
            treeJSON: ""
        }
    }

    /**
     * Converts array format binary tree notation to BinTreeNode data structure
     * @param arrayFormat [id, leftChild, rightChild] for example [1, [2], [3, null, [5]]]
     * @returns TreeNode format
     * */
    parseArrayToTree(arrayFormat: any[]): BinTreeNode {
        return convertArrayToNode(arrayFormat);
    }

    convert = () => {
        // After you implement parseArrayToTree above, uncomment the below code
        try
        {
            let treeArrayFormat: any[] = JSON.parse(this.state.treeText);
            let root: BinTreeNode = this.parseArrayToTree(treeArrayFormat);
            this.setState({
                treeJSON: JSON.stringify(this.parseArrayToTree(treeArrayFormat), null, 2)
            });
            this.props.onChange(root);
        } catch (e)
        {
            //TODO: throw error message
            alert("ERROR");
        }


        // After you implement parseArrayToTree above, comment the below code
        // let treeNodeFormat: BinTreeNode = JSON.parse(this.state.treeText);
        // this.props.onChange(treeNodeFormat);
    }

    triggerFormat = (value: string) => {
        try
        {
            let treeNodeFormat: BinTreeNode = JSON.parse(value);
            this.props.onChange(treeNodeFormat);
        }
        catch (e)
        {
            // do nothing, if the json is not correct we just don't change the content of the page
        }

    }

    render() {
        return (
            <div>
                <input onChange={(ev) => {
                    this.setState({
                        treeText: ev.target.value
                    })
                }}></input>
                <button onClick={this.convert}>Process</button><br />
                <textarea rows={5} cols={600} 
                value={this.state.treeJSON}
                 onChange={(ev) => {
                    this.setState({
                        treeJSON: ev.target.value
                    })
                    this.triggerFormat(ev.target.value);
                }}
                ></textarea>
            </div>
        )
    }
}