export default (zshrc) => {    
    const aliases = [];
    const lines = zshrc.split(/\r?\n/);
    lines.forEach(line => {
      if (line.startsWith('alias')) {
        const match = line.trim().match(/^alias\s+(\w+)=(.*)#(.*)$/);
        if (!match || !match.length)
            return
        const [, aliasName, aliasValue, desc] = match
        aliases.push({ name: aliasName, value: aliasValue, desc: desc.trim() });
      }
    });
    return aliases
}