import { BinTreeNode } from "./TreeNode";

export function FindSubTreeWithAllDeepestNode(input: BinTreeNode | null): BinTreeNode | null{
    return (input === null) ? null : GetDepth(input).result;
}


function GetDepth(root: BinTreeNode): tempResult{
    if (root.left && root.left !== null && root.right && root.right !== null) 
    {
        // have both left and right child, result is the deeper one's depth + 1 and its result
        // if the depth are same, result is this node
        const left = GetDepth(root.left);
        const right = GetDepth(root.right);
        if (left.depth === right.depth)
        {
            return new tempResult(left.depth + 1, root);
        }
        else if (left.depth > right.depth)
        {
            return new tempResult(left.depth + 1, left.result);
        }
        else
        {
            return new tempResult(right.depth + 1, right.result);
        }
    }
    else if ((!root.left ||root.left === null) && (root.right && root.right !== null))
    {
        // only has right child, result is right.depth + 1 and right child's result
        return new tempResult(GetDepth(root.right).depth + 1, GetDepth(root.right).result);
    }
    else if ((root.left && root.left !== null) && (!root.right || root.right === null))
    {
        // only has left child, result is left.depth + 1 and left child's result
        return new tempResult(GetDepth(root.left).depth + 1, GetDepth(root.left).result);
    }
    else
    {
        // no child, return this node and 1 as depth
        return new tempResult(1, root);
    }
}

class tempResult
{
    depth: number;
    result: BinTreeNode;
    constructor(depth: number, result: BinTreeNode){
        this.depth = depth;
        this.result = result;
    }
}