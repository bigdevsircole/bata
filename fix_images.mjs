import fs from 'fs';

let replacements = {
    '1534260933201-acabec3fb617': '1549298916-b41d501d3772',
    '1560506840-058df36371dd': '1607522370275-f14206abe5d3',
    '1582588676831-2915856b3777': '1595950653106-6c9ebd614d3a',
    '1515347619362-e9c564b1ea9f': '1542291026-7eec264c27ff',
    '1542280756-74b2f55e73e1': '1520639888713-7851133b1ed0',
    '1620809310862-2ee7b2c589bd': '1603487742131-4160ec999306'
};

function fixFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    for (const [bad, good] of Object.entries(replacements)) {
        content = content.replace(new RegExp(bad, 'g'), good);
    }
    fs.writeFileSync(file, content);
}

fixFile('./src/data/shoes.js');
fixFile('./src/App.jsx');
console.log('Fixed URLs in shoes.js and App.jsx');
