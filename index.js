const { blue, cyan, green, red, yellow, gray } = require('chalk').bold
const table = require('./table')

const color = x => {
  switch (x) {
    case '=':
      return green(x)

    case '≅':
      return yellow(x)

    case '≠':
      return red(x)

    case '_':
    case '|':
      return blue(x)

    case '"':
      return x

    default:
      return cyan(x)
  }
}

console.log(
  table.split('').map(color).join('')
)

console.log(`
  ${green('=')} -- equals
  ${red('≠')} -- not equals
  ${yellow('≅')} -- approximate
`)
