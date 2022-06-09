const fs = require('fs')
const path = require('path')

const indexPath = path.resolve(__dirname, '..', 'build', 'index.html')

;(() => {
  fs.writeFileSync(
    indexPath,
    fs
      .readFileSync(indexPath, 'utf8')
      .replace('/static/', 'static/'),
    'utf8'
  )
})()
