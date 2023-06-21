import * as React from "react";
import { BinTreeNode } from "./TreeNode";
import { convertArrayToNode } from "./ConvertArrayToNode";

export interface TreeInputProps {
    onChange: (newTreeNode: BinTreeNode | null, errorMessage: string) => void
}
interface TreeInputState {
    file: File | null,
    treeJSON: string
}

export class TreeInput extends React.Component<TreeInputProps, TreeInputState>{
    constructor(props: TreeInputProps) {
        super(props);
        this.state = {
            file: null,
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

    upload = () => {
        // read file content
        const reader = new FileReader();
        if (this.state.file)
            reader.readAsText(this.state.file);

        reader.onload = () => {
            // call convert to process
            if (reader.result)
                this.convert(reader.result as string);
        }

        reader.onerror = () => {
            //errorMessage
            this.props.onChange(null, "Reading file error, please verify the file path!");
        }
    }

    convert = (treeText: string) => {
        // After you implement parseArrayToTree above, uncomment the below code
        try
        {
            let treeArrayFormat: any[] = JSON.parse(treeText);
            let root: BinTreeNode = this.parseArrayToTree(treeArrayFormat);
            this.setState({
                treeJSON: JSON.stringify(this.parseArrayToTree(treeArrayFormat), null, 2)
            });
            this.props.onChange(root, "");
        } catch (e)
        {
            this.props.onChange(null, "Parsing array to tree failed, maybe the array is not valid, please check!");
        }


        // After you implement parseArrayToTree above, comment the below code
        // let treeNodeFormat: BinTreeNode = JSON.parse(this.state.treeText);
        // this.props.onChange(treeNodeFormat);
    }

    triggerFormat = (value: string) => {
        try
        {
            let treeNodeFormat: BinTreeNode = JSON.parse(value);
            this.props.onChange(treeNodeFormat, "");
        }
        catch (e)
        {
            // if the json is not correct we don't update the result, but we show the error message to let the user check
            this.props.onChange(null, "JSON is not valid, please check!");
        }

    }

    render() {
        return (
            <div>
                Tree Source
                <br />
                <input size = {120} type="file" onChange={(ev) => {
                    if (ev.target.files)
                    {
                        this.setState({
                            file: ev.target.files[0]
                        })
                    }
                }}></input>
                <br />
                <button onClick={this.upload}>Fetch</button><br />
                Tree Text
                <textarea rows={20} cols={120} 
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