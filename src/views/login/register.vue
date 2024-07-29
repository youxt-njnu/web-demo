<template>
  <div class="character-page">
    <div class="content">

      <form class="px-16 pt-16"
            color="indigo-darken-4">
        <!-- <v-img class="my-4"
             height="12"
             src="@/assets/logo.svg"
             cover></v-img> -->
        <a href="#"
           class="my-4 logo"></a>
        <h1>{{ $t('$vuetify.Register.title') }}</h1>
        <p>{{ $t('$vuetify.Register.subTitle') }}</p>
        <br>
        <v-text-field v-if="selected === '0'"
                      v-model="state.name"
                      :counter="10"
                      :error-messages="v$.name.$errors.map(e => e.$message)"
                      label="用户名称"
                      required
                      @blur="v$.name.$touch"
                      @input="v$.name.$touch"></v-text-field>
        <v-text-field v-else
                      v-model="state.name"
                      :counter="10"
                      :error-messages="v$.name.$errors.map(e => e.$message)"
                      label="企业名称"
                      required
                      @blur="v$.name.$touch"
                      @input="v$.name.$touch">
        </v-text-field>
        <v-text-field v-if="selected === '1'"
                      v-model="state.idInfo"
                      hit="请输入企业信用编码"
                      label="企业信用编码"
                      required
                      type="input">
        </v-text-field>
        <v-text-field v-model="state.email"
                      :error-messages="v$.email.$errors.map(e => e.$message)"
                      label="邮箱地址"
                      required
                      @blur="v$.email.$touch"
                      @input="v$.email.$touch"></v-text-field>
        <v-text-field v-model="state.password"
                      :error-messages="v$.password.$errors.map(e => e.$password)"
                      label="密码"
                      required
                      @blur="v$.password.$touch"
                      @input="v$.password.$touch"></v-text-field>
        <!-- <v-select v-model="state.select"
                :error-messages="v$.select.$errors.map(e => e.$message)"
                :items="items"
                label="Item"
                required
                @blur="v$.select.$touch"
                @change="v$.select.$touch"></v-select> -->

        <v-checkbox v-model="state.checkbox"
                    :error-messages="v$.checkbox.$errors.map(e => e.$message)"
                    label="是否同意协议？"
                    required
                    @blur="v$.checkbox.$touch"
                    @change="v$.checkbox.$touch"></v-checkbox>

        <v-btn class="w-25 indigo darken-4"
               color="indigo-darken-4"
               variant="tonal"
               @click="submit">
          确认
        </v-btn>
        <v-btn class="ma-4 w-25"
               variant="outlined"
               @click="clear">
          清空
        </v-btn>
      </form>
      <v-container class="px-16">
        <v-row align="center"
               justify="center">
          <v-col cols="5">
            <v-divider></v-divider>
          </v-col>
          <v-col cols="2"
                 class="text-center">
            或
          </v-col>
          <v-col cols="5">
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12"
                 md="4"
                 sm="6">
            <v-btn prepend-icon="$vuetify"
                   color="indigo-darken-4"
                   variant="tonal"
                   block></v-btn>
          </v-col>

          <v-col cols="12"
                 md="4"
                 sm="6">
            <v-btn prepend-icon="$vuetify"
                   color="indigo-darken-4"
                   variant="tonal"
                   block></v-btn>
          </v-col>

          <v-col cols="12"
                 md="4"
                 sm="6">
            <v-btn prepend-icon="$vuetify"
                   color="indigo-darken-4"
                   variant="tonal"
                   block></v-btn>
          </v-col>
        </v-row>
        <br>
        <v-card-actions><v-btn prepend-icon="arrow_right"
                 size="x-large"
                 @click="goToLogin">{{ $t("$vuetify.Register.introRegister") }}</v-btn></v-card-actions>
        <br>
      </v-container>
    </div>

  </div>

</template>

<script setup>
import { useVuelidate } from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'
import { onMounted, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

let selected = ref('')

const initialState = {
  name: '',
  email: '',
  password: '',
  idInfo: '',
  select: null,
  checkbox: null
}

const state = reactive({
  ...initialState
})

// const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

const rules = {
  name: { required },
  email: { required, email },
  password: { required },
  // select: { required },
  checkbox: { required }
}

const v$ = useVuelidate(rules, state)

function submit() {
  // v$.$validate 对整个表单进行验证
  if (v$.value.$invalid) {
    console.log('invalid message')
    return
  }

  router.push({ name: 'Dashboard' })
}
function clear() {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}

const goToLogin = function () {
  router.push({ name: 'LoginInfo' })
}

onMounted(() => {
  selected.value = route.query.id
})
</script>

<style>
.character-page {
  background-image: url('@/assets/img/background.jpg');
  background-size: 100% 100%;
  background-position: center; /* 图像居中显示 */
  background-repeat: no-repeat; /* 不重复图像 */
  width: 100%; /* 或者你可以使用 100% 来让它更大 */
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content {
  width: 100%;
  max-width: 800px; /* 控制最大宽度以保持内容不会过于扩散 */
  margin: 0 auto; /* 水平居中 */
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.logo {
  display: block;
  background-image: url(@/assets/img/logo-main-blue.png);
  opacity: 1;
  width: 112.5px;
  height: 55.5px;
  background-size: 112.5px 55.5px;
}
</style>