import path from 'path'

const ZSHRC = path.join(process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'], '.zshrc');

export {
    ZSHRC
}
