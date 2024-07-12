# lllw-advertisingPlatform

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# 记录

1. 写了点router
2. 写login的选择页面index.vue
3. 写login in的页面loginInfo.vue
   1. npm install @vuelidate/core @vuelidate/validators
4. 继续写router的逻辑

需要在App.vue里加上 `<RouterView />`之后才能呈现出跳转的效果


# 知识点

## `@vuelidate/core`

在 Vue.js 中使用 `@vuelidate/core` 是一种流行的方式来进行表单验证。这个库提供了一组丰富的 API 来处理各种验证逻辑，让你能够更容易地验证用户输入。

### 了解 `v$.$validate`

1. **`useVuelidate(rules, state)`**:

   - `rules`: 是一个对象，包含了各个表单字段的验证规则。
   - `state`: 是与表单绑定的响应式数据对象。
2. **`v$.$validate` 方法**:

   - 这是 `vuelidate` 的方法之一，用于触发整个表单的验证。
   - 当你调用 `v$.$validate()` 时，`vuelidate` 将会遍历所有的表单项，并根据提供的规则进行验证。
   - 这个方法返回一个 Promise，该 Promise 解析为 `true` 表示验证通过，`false` 表示验证失败。

### 使用 `@click="v$.$validate"`

- 当你在一个按钮上使用 `@click="v$.$validate"` 时，意味着当这个按钮被点击时，会触发表单的验证过程。
- 这通常用在提交表单之前，确保所有字段都符合规定的验证规则。

### 使用 `if (v$.value.$invalid) { return }`

- `v$.value.$invalid` 是 `vuelidate` 提供的一个属性，它是一个布尔值，用于指示当前表单是否通过验证（`false` 表示通过验证，`true` 表示存在验证错误）。
- 使用这种方式可以在表单提交之前检查表单是否有效。如果表单无效（即 `$invalid` 为 `true`），则通过 `return` 语句阻止表单提交或进一步处理。

```javascript
const submitForm = () => {
  // 执行验证
  v$.$validate().then((isValid) => {
    if (!isValid) {
      console.log('表单验证失败');
      return; // 验证失败，终止函数执行
    }
    // 如果验证通过，执行下一步，例如提交表单
    console.log('表单验证通过，继续处理...');
  });
}
```

### 总结

- 使用 `v$.$validate()` 是一种主动触发验证的方法，而检查 `v$.value.$invalid` 是一种在已经进行验证后的响应式方式来判断表单的有效性。
- 确保你在使用这些功能时，已经正确设置了 `rules` 和 `state`，并且你的组件逻辑能够处理异步验证的结果。

这样的结构使得你可以在实际提交数据到服务器之前，确保所有用户输入都是有效的，从而提高应用的数据完整性和用户体验。


## useRoute和useRouter

在 Vue 3 中，`useRoute` 和 `useRouter` 是 Vue Router 的 Composition API 钩子，它们为开发者提供了在使用 Composition API 时访问路由器和当前路由的能力。这两个钩子有着明显的不同用途和功能：

### useRoute

`useRoute` 是一个钩子，它返回当前活动的路由对象。你可以使用它来访问当前路由的路径、查询参数、散列值、命名路由参数等。这是一个非常实用的工具，用于在组件内访问当前路由的细节，比如读取 URL 中的参数或查询字符串。

**示例**:

```javascript
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute();
    const userId = route.params.userId; // 假设URL是/user/:userId
    return { userId };
  }
}
```

### useRouter

`useRouter` 钩子返回路由器实例本身，这让你可以进行编程式的导航，如跳转到一个新的地址或者回退历史记录等。这对于那些需要在事件处理器或其他函数中改变路由的场景特别有用。

**示例**:

```javascript
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter();

    function goToHomepage() {
      router.push('/home'); // 编程式导航到首页
    }

    return { goToHomepage };
  }
}
```

### 区别总结

- **用途**: `useRoute` 主要用于获取关于当前路由的信息，如参数和查询字符串，而 `useRouter` 主要用于执行路由操作，如跳转和替换。
- **返回值**: `useRoute` 返回的是当前活动路由的反应式对象，`useRouter` 返回的是路由器实例。
- **场景应用**: 当你需要读取路由参数或检查路由状态时，使用 `useRoute`；当你需要改变路由或执行导航操作时，使用 `useRouter`。

理解这两个钩子的区别和用途对于使用 Vue Router 的 Composition API 来说非常重要，它可以帮助你更有效地管理路由逻辑和状态。
