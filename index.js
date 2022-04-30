const fs = require('fs');
const yaml = require('js-yaml');

const files = fs.readdirSync('files');


files.forEach(file => {
    try {
        const content = fs.readFileSync(`files/${file}`, 'utf8');
        const matched = content.match(/= yaml =\s([\s\S]+?)= yaml =/m);

        if (matched) {
            const source = matched[1].replace(/\t/g, '  ');
            const doc = yaml.load(source);

            console.log(doc);
        }
    } catch (e) {
        console.log(e);
    }
});
