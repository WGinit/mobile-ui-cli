const fs  = require('fs');
const path = require('path');
const util = require('./util.js')
const navUtil = require('./createNav.js')


const args = process.argv.slice(2);
if (args.length !== 1) {
    console.error('请提供一个组件名称，例如：yarn new button');
    process.exit(1);
}

const componentName = util.toPascalCase(args[0]);
const floderName = args[0]

const componentPath = path.join(__dirname, `../src/${floderName}`);
const demoPath = path.join(componentPath, `demo`);
const testPath = path.join(componentPath, `test`);

// 创建文件夹
if (!fs.existsSync(componentPath)) {
    fs.mkdirSync(componentPath, { recursive: true });
} else {
    console.warn(`${componentName}组件已存在：${componentPath}`);
    return
}

if (!fs.existsSync(demoPath)) {
    fs.mkdirSync(demoPath, { recursive: true });
} else {
    console.log(`文件夹已存在：${demoPath}`);
}

if (!fs.existsSync(testPath)) {
    fs.mkdirSync(testPath, { recursive: true });
} else {
    console.log(`文件夹已存在：${testPath}`);
}

// 创建 index.vue 文件内容
const vueTemplate = `
<template>
  <div class="${componentName}">
    <!-- 组件内容 -->
  </div>
</template>

<script>
export default {
  name: '${componentName}',
  props: {}
};
</script>

<style scoped lang="scss">
.${componentName} {

}
</style>
`;

const vueFilePath = path.join(componentPath, 'index.vue');
fs.writeFileSync(vueFilePath, vueTemplate);
console.log(`已创建组件：${vueFilePath}`);


const demoTemplate = `
<template>
  <demo-section>
    <demo-block title="基础用法">
        <!-- 组件示例 -->
    </demo-block>

    <demo-block title="自定义颜色">
      <!-- 组件示例 -->
    </demo-block>
  </demo-section>
</template>
`
const demoFilePath = path.join(demoPath, 'index.vue');
fs.writeFileSync(demoFilePath, demoTemplate);
console.log(`已创建Demo：${demoFilePath}`);


const testTemplate = `
import { mount } from '@vue/test-utils';
import ${componentName} from '../../${componentName}';

test('render ${componentName}', () => {
  const wrapper = mount(${componentName});
  expect(wrapper).toMatchSnapshot();
});
`
const testFilePath = path.join(testPath, 'index.spec.js');
fs.writeFileSync(testFilePath, testTemplate);
console.log(`已创建单元测试Test：${testFilePath}`);


const readmeTemplate = `
# ${componentName}

### 介绍
${componentName} 组件

### 引入
\`\`\`js
import Vue from 'vue';
import { ${componentName} } from 'mobile-ui';

Vue.use(${componentName});
\`\`\`

## 代码演示

### 基础用法

\`\`\` html
<${componentName} />
\`\`\`

## API

### Props

| 参数          | 说明     | 类型     | 默认值    |
| ------------- | -------- | -------- | --------- |
| type          | 按钮类型 | _string_ | \`primary\` |
| color \`1.0.0\` | 按钮颜色 | _string_ | -         |

### Events

| 事件名 | 说明       | 回调参数            |
| ------ | ---------- | ------------------- |
| click  | 点击时触发 | _event: MouseEvent_ |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |

`
const readmeFilePath = path.join(componentPath, 'README.md');
fs.writeFileSync(readmeFilePath, readmeTemplate);
console.log(`已创建README：${readmeFilePath}`);


// 更新导航
navUtil.updateNav()