class node {
	constructor(val) {
		this.key =  val
		this.left = null
		this.right = null
	}
}

module.exports = class BinaryTree {
	constructor() {
		this.root = null
	}

	insert(val) {
		let newNode = new node(val)
		if(this.root === null) {
			this.root = newNode
		} else {
			this.insertNode(this.root,newNode)
		}
	}

	insertNode(root,curNode) {
		if(root.key > curNode.key) {
			if(root.left === null) {
				root.left = curNode
			} else {
				this.insertNode(root.left,curNode)
			}
		} else {
			if(root.right === null) {
				root.right = curNode
			} else {
				this.insertNode(root.right,curNode)
			}
		}
	}
}
