var widthOfBinaryTree = function (head) {
  if (!head) {
    return 0
  }
  const q = []
  q.push(head)
  const map = new Map()
  map.set(head, 1)
  let curLevel = 1 // 手动统计当前1层以后记录当前层数
  let curLevelWidth = 0
  // 手动初始化当前为0宽
  let width = BigInt(0)

  if (root) {
    width = BigInt(1)
    queue.push(root)
    root.val = BigInt(1) // 从 1 开始编号
  }

  while (q.length !== 0) {
    //可以说是bfs宽度搜索的travelsal 标准 格式yong queue
    let cur = q.shift()
    //! 第一层是手动输入过的head 和0  第8行
    let curNodeLevel = map.get(cur)
    //! 记录当前左边的节点的map
    if (cur.left !== null) {
      map.set(cur.left, curNodeLevel + 1)
      q.push(cur.left)
    }
    if (cur.right !== null) {
      map.set(cur.right, curNodeLevel + 1)
      q.push(cur.right)
    }
    if (curLevel == curNodeLevel) {
      curLevelWidth++
    } else {
      //?最后一层的时候呢 else 没有执行因为跳过了没有下一层了 最后手动补一次比大小

      curLevel++

      curLevelWidth = 1
    }
    max = Math.max(max, curLevelWidth)
  }
  max = Math.max(max, curLevelWidth)
  return max
}

var widthOfBinaryTree = function (root) {
  if (!root) return 0
  let max = 1
  // 记录非空结点对应的下标值
  const queue = [[root, 1]]
  while (queue.length !== 0) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      let [node, index] = queue.shift()
      if (node.left) {
        queue.push([node.left, (index * 2) % Number.MAX_SAFE_INTEGER])
      }
      if (node.right) {
        queue.push([node.right, (index * 2 + 1) % Number.MAX_SAFE_INTEGER])
      }
    }
    if (queue.length !== 0) {
      const start = queue[0][1]
      const end = queue[queue.length - 1][1]
      const width = end - start + 1
      max = Math.max(max, width)
    }
  }
  return max
}
