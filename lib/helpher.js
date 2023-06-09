import chalk from 'chalk'

export function padding(message = '', before = 1, after = 1) {
  return new Array(before).fill(' ').join('') + message + new Array(after).fill(' ').join('')
}

export function geneDashLine(message, length) {
  const finalMessage = new Array(Math.max(2, length - getStrLength(message) + 2)).join('-')
  return padding(chalk.dim(finalMessage))
}

export function geneChoices(sources) {
  const length = Math.max(...sources.map(src => getStrLength(src.desc))) + 3;
  return sources.map(src => {
    return {
      name: src.desc + geneDashLine(src.desc, length) + src.value + ' alias: ' + src.name,
      value: src.value
    }
  })
}

function getStrLength(str) {
  const res = str.match(/[^\x00-\xff]/ig);
  return str.length + (res === null ? 0 : res.length);
};