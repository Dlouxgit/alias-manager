import { appendFileSync } from 'fs';
import { ZSHRC } from './const.js'


export default (name, value, desc) => {
    const lineToInsert = `
alias ${name}="${value}" # ${desc}
`
    try {
        appendFileSync(ZSHRC, lineToInsert);
    
        console.log(`Successfully inserted line '${lineToInsert}' into file .zshrc.`);
    } catch {
        console.log(`Insert error.`);
    }
}