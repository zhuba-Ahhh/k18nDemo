# K18n demo

## Start

```bash
npm i

npm run start

# 需要更新多语音时
npm run k18n:pull
```

## 配置 k18n

```bash
npm i @k18n/k18n-utils @k18n/kibt-fe-shop-c-lang
# 第二个是转存多语音的仓库
```

@k18n 提供的能力,一般会像这个demo一样进行一些处理方便使用

```typescript
import K18nUtils from '@k18n/k18n-utils';

import langs from '<project>'; // 多语言项目名

const $k18n = new K18nUtils({
  messages: langs,
  locale: '' // 如果不传，会自动通过 navigator.language 获取
  fallbackLocale: '' // 默认回退到英文
});


$k18n.getText({ id: 'hello' }); // 通过 id 获取
$k18n.getText({ text: '你好', desc: '打招呼'}) // 通过中文 + 描述获取

// 假设文案为 -> 一共 {count} 个
$k18n.getText({ id: 'some-text', params: { count: 1 }}) // -> 一共 1 个

// 其他
$k18n.changeLocale('en') // 手动切换当前的 locale
$k18n.changeFallbackLocale('en') // 手动切换当前的 fallbackLocale
```

配置涉及demo中文件

``` bash
./utils/i18n.ts
./components/i18n.tsx
@k18n/kibt-fe-shop-c-lang
```

## I18next

```bash
npm install react-i18next i18next --save
```

配置涉及demo中文件

``` bash
./utils/i18next.ts
./components/next.tsx
./locales
```
