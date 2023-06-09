# alias-manager

am -- alias manager

manage your zsh alias.

[![NPM version][npm-image]][npm-url]

`am` can help you easy and fast set and use your alias,
now support: `zsh`.

## Install

```
$ npm install -g am
```

## Example

`am add <alias-name> <alias-value> <alias-desc>`

```bash
$ am add halo 'code /Users' open

Successfully inserted line '
alias halo="code /Users" # open
' into file .zshrc.

# can find in .zhsrc
# alias halo="code /Users" # open

```

`am ls`

```
$ am ls  // select alias to run

❯ open ----- "code /Users"  alias: halo

```

`am remove <alias-desc>`

```
$ am remove open

Successfully remove line 'open' in file .zshrc.

```
## Usage

```
Usage: am <command> [options]

Options:
  -V, --version                                 output the version number
  -h, --help                                    display help for command

Commands:
  ls                                            select alias
  add <alias-name> <alias-value> <alias-desc>>  add alias
  remove <alias-name>>                          remove alias
```

## Notice

`am add ` does not check if it already exists.

## LICENSE
MIT


[npm-image]: https://img.shields.io/npm/v/alias-manager.svg?style=flat-square
[npm-url]: https://npmjs.org/package/alias-manager