
    function Node(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

    function Bst(data) {
        this.root = null;
    }

    ///Function that addes new item into binary tree
    Bst.prototype.add = function(data){
        let newNode = new Node(data);

        /// If there is no element inti tree add a input one
        if(this.root===null) {
            this.root = newNode;
        }else {
            this.insert(this.root, newNode);
        }
    }

    ///Helper function
    Bst.prototype.insert = function(current, newNode){
        //If new element smaller than current 
        if(newNode.data < current.data) {
            if(!current.left) {//check if left is empty
                current.left = newNode; ///Add new element
            }else {
                this.insert(current.left, newNode); 
            }
        }else {
            if(!current.right) {//check if right is empty
                current.right = newNode;///Add new element
            }else {
                this.insert(current.right, newNode);
            }
        }
    }

    const tree = new Bst();

    let array = [8, 10, 12, 5, 3, 6];
    let result = array.forEach(function(el){/// Add separate element into add function
        tree.add(el);
    })
