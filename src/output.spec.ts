let sinon = require('sinon')
let walkSync = require('walk-sync')
let fs = require('fs')
import { test } from 'ava'
import ADR from 'adr'

let Utils = ADR.Utils

let adrTemplate = `# 1. 编写完整的单元测试

日期: 2017/11/22

## 状态

2017-11-22 提议
2017-11-26 已完成

`

let adrOptions = JSON.stringify({
  path: './',
  language: 'en'
})

test('ADR: export csv', t => {
  let ADRGetSavePathSpy = sinon.stub(Utils, 'getSavePath').returns('./')
  let consoleSpy = sinon.stub(console, 'log')
  let fsWriteSpy = sinon.stub(fs, 'writeFileSync')
  let fsReadSpy = sinon.stub(fs, 'readFileSync')
    .onCall(0).returns(JSON.stringify(adrOptions))
    .onCall(1).returns(JSON.stringify(adrOptions))
    .onCall(2).returns(JSON.stringify(adrOptions))
    .onCall(3).returns(adrTemplate)
  let entriesSpy = sinon.stub(walkSync, 'entries').returns([
    {
      relativePath: '001-编写完整的单元测试.md',
      basePath: '/Users/fdhuang/learing/adr/doc/ard/',
      mode: 33188,
      size: 246,
      mtime: 1511435254653
    }
  ])

  let results = ADR.output('csv')
  t.deepEqual(results,
`Index, Decision, Last Modified Date, Last Status
1, 编写完整的单元测试, 2017-11-23, undefined
`)
  // t.deepEqual(fsWriteSpy.calledWith('./export.csv'), true)
  ADRGetSavePathSpy.restore()
  fsReadSpy.restore()
  fsWriteSpy.restore()
  entriesSpy.restore()
  consoleSpy.restore()
})