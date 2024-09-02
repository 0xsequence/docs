/// <reference types="mdast-util-to-hast" />
/// <reference types="mdast-util-directive" />

import type { Root } from 'mdast'
import { visit } from 'unist-util-visit'
import { retrieveProjectAccessKey } from './retrieveProjectAccessKey'

export function remarkProjectAccessKey() {
  return (tree: Root) => {
    visit(tree, (node, _, parent) => {
      if (node.type !== 'code') return
      if (!node.lang) node.lang = 'txt'
      if (parent?.type === 'containerDirective' && parent.name !== 'steps') return

      if (typeof node.value === 'string') {
        node.value = node.value.replace(/PROJECT_ACCESS_KEY/g, retrieveProjectAccessKey)
      }
    })
  }
}
