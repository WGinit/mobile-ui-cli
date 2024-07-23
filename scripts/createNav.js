// 更新所有的nav

const fs = require('fs');
const path = require('path');
const util = require('./util')

const componentsPath = path.join(__dirname, '../src');
const navPath = path.join(__dirname, `../config`);

function getNavsList(componentsPath) {
    const navsList = [];
    const files = fs.readdirSync(componentsPath);
    files.forEach(item => {
        const itemPath = path.join(componentsPath, item);
        const stats = fs.statSync(itemPath);
        if (stats.isDirectory()) {
            const componentName = util.toPascalCase(item);
            navsList.push({path: `${item}`, title: `${componentName}`});
        }
    });
    return navsList;
}


function createNav(navsList) {
    const result = {
        navs: navsList
    }
    // 更新内容
    const updatedContent = `// 此文件为动态生成，直接修改无效 \n module.exports = ${JSON.stringify(result, null, 2)};`; 

    fs.writeFile(`${navPath}/nav.js`, updatedContent, 'utf8', (err) => {
        if (err) {
            console.error('写入文件失败:', err);
            return;
        }
        console.log('组件导航更新成功！！');
    });
}


function updateNav() {
    const navsList = getNavsList(componentsPath);
    createNav(navsList)
}

module.exports = {
    updateNav
}