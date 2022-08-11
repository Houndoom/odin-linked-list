

const Node = (value, next) => {
  return { value, next };
};

const LinkedList = () => {
  let rootNode = null;

  const size = () => {
    let node = rootNode;
    let count = 0;
    while (node) {
      count += 1;
      node = node.next;
    }
    return count;
  }

  const _nodeAt = (ind) => {
    let node = rootNode;
    for (let i = 0; i < ind; i++) {
      if (node === null) {
        return null;
      } else {
        node = node.next;
      }
    }
    return node;
  }

  const _lastNode = () => {
    return _nodeAt(size() - 1);
  }

  const at = (ind) => {
    return _nodeAt(ind).value;
  }

  const prepend = (value) => {
    rootNode = Node(value, rootNode);
  }

  const append = (value) => {
    _lastNode().next = Node(value, null);
  }

  const head = () => {
    if (!rootNode) return null;
    return rootNode.value;
  }

  const tail = () => {
    if (!rootNode) return null;
    return _lastNode().value;
  }

  const pop = () => {
    if (rootNode) {
      if (size() === 1) {
        rootNode = null;
      } else {
        _nodeAt(size() - 2).next = null;
      }
    }
  }

  const contains = (value) => {
    let node = rootNode;
    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }

  const find = (value) => {
    let node = rootNode;
    let index = 0;
    while (node) {
      if (node.value === value) return index;
      node = node.next;
      index += 1;
    }
    return null;
  }


  const toString = () => {
    let output = '';
    let node = rootNode;
    while (node) {
      output = `${output}( ${node.value} ) -> `;
      node = node.next;
    }
    return `${output}null`;
  }

  const insertAt = (value, index) => {
    if (index === size()) {
      append(value);
    } else if (index >= 0 && index < size()) {
      let node = _nodeAt(index);
      let newNode = Node(value, node);
      if (index > 0) {
        let prevNode = _nodeAt(index - 1);
        prevNode.next = newNode;
      } else {
        rootNode = newNode;
      }
    }  
  }

  const removeAt = (index) => {
    if (index === size() - 1) pop();
    else if (index === 0) rootNode = rootNode.next;
    else if (index > 0 && index < size() - 1) {
      let prevNode = _nodeAt(index - 1);
      let nextNode = _nodeAt(index + 1);
      prevNode.next = nextNode;
    }
  }
  return { size, prepend, append, at, head, tail, pop, contains, find, toString, insertAt, removeAt };
}

export default LinkedList;