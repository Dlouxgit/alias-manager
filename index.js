import { readFileSync } from 'fs';
import inquirer from 'inquirer'
import child_process from 'child_process'

import getSelect from './lib/select.js'
import { ZSHRC } from './lib/const.js'
import { geneChoices } from './lib/helpher.js'

function resolvePrompts (select) {
    return {
        name: 'alias',
        when: () => select.length,
        type: 'list',
        message: 'What do you want?',
        choices: geneChoices(select)
    }
}
export default async () => {
    const selectPropts = resolvePrompts(getSelect(readFileSync(ZSHRC, 'utf8')));
    const answers = await inquirer.prompt(selectPropts)
    child_process.exec(answers.alias.replace(/"/g, ''))
}