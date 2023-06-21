import { BinTreeNode } from "./TreeNode";

export function convertArrayToNode(input: any[]): BinTreeNode{
    if (!input)
    {
        // if the input is not an array, throw error
        throw new Error('The array is not formatted correctly');
    }
    return convertOneNode(input);
}

function convertOneNode(node: any[]): BinTreeNode
{
    // check node is a valid array before passing into this function, so we can use .length directly
    if (node.length === 1)
    {
        // [1], only one root without any child
        return new BinTreeNode(node[0], null, null);
    }
    else if (node.length === 2)
    {
        // [1,[2]] is root 1 with left child as 2
        return new BinTreeNode(node[0], convertOneNode(node[1]), null);
    }
    else if (node.length !== 3)
    {
        // tree node must have 3 values: root, left and right, if it is not, the tree is wrong
        // good example: [1, [2], [3]] [1, [2], null] (left has child and right hasn't)
        // another good example: [1, null, null], this is same to [1]
        // good example: [1, [2], null] we allow this, it is same to [1,[2]]
        // bad example: [1,2,3] even if the children are leaf, we should also write it as arrays

        throw new Error('The array is not formatted correctly');
    }
    if (typeof node[0] == "string" || typeof node[0] == "number")
    {
        // check node[1] and node[2] are arrays or not, and determine convert or not
        return new BinTreeNode(node[0], (node[1] == null)? null : convertOneNode(node[1]), (node[2] == null) ? null : convertOneNode(node[2]));
    }
    else
    {
        // invalid root, throw error
        throw new Error('The array is not formatted correctly');
    }
}