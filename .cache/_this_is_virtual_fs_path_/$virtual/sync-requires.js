
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/project/site2/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/project/site2/src/pages/index.js"))
}

