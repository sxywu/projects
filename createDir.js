const fs = require('fs')
const _ = require('lodash')

const projects = [
  'legends',
  'community',
  'hpff',
  'ddr',
  'hamilton',
  'obamas',
  'travel',
  'olympics',
  'filmflowers',
]

_.each(projects, name => {
  // first see if the folder already exists
  const path = `${name}/`
  if (!fs.existsSync(path)) {
    // if not, create
    fs.mkdirSync(path)
    // create file
    fs.writeFileSync(`${path}index.html`, `
<html>
<body>
  <script>
    window.location.replace('${`http://shirleywu.studio/${name}`}')
  </script >
</body >
</html >
    `)
  }
})