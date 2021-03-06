// Simple recursive Javascript JS solution, faster than 100.00% of JavaScript online submissions 

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) 
{
    if(root==null)
        return root;
    if(root)
    {
        var temp=invertTree(root.left);
        root.left=invertTree(root.right);
        root.right=(temp);
    }
    return root;
};

//