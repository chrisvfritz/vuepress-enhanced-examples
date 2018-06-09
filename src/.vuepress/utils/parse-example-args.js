module.exports = function parseExampleArgs(args) {
  const fileBaseName = args.match(/^([^,]+)(\s*,)?/)[1].trim()
  const attrsMatch = args.match(/^[^,]+\s*,\s*(.+?)$/)
  const attrs = attrsMatch ? attrsMatch[1].trim() : ''

  return { fileBaseName, attrs }
}
