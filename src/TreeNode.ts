export class BinTreeNode {
    id: string | number;
    left: BinTreeNode | null;
    right: BinTreeNode | null
    constructor(id: string | number, left: BinTreeNode | null, right: BinTreeNode | null) {
        this.id = id;
        this.left = left;
        this.right = right
    }
    public toJSON = () : any => {
        if (this.left == null && this.right == null)
        {
            return {
                id: this.id
            };
        }
        else
        {
            return {
                id: this.id,
                left: (this.left == null)? null : this.left?.toJSON(),
                right: (this.right == null)? null : this.right?.toJSON(),
            };
        }
    }
}