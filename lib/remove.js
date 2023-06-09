import { readFileSync, writeFileSync } from 'fs';
import { ZSHRC } from './const.js'

export default (name) => {
    const zshrc = readFileSync(ZSHRC, 'utf-8');
    
    const content = zshrc.replace(new RegExp(`alias\\s+(\\w+)=(.*)#(\\s*${name}.*)(\r?\n?)*`, 'g'), '')
    try {
        writeFileSync(ZSHRC, content);
    
        console.log(`Successfully remove line '${name}' in file .zshrc.`);
    } catch {
        console.log(`Remove error.`);
    }
}