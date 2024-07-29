<template>
  <div class="character-page">
    <v-row>
      <v-col v-for="(type, i) in types"
             :key="i"
             cols="12"
             md="6">
        <v-card :color=color
                :variant="type.style"
                class="mx-auto">
          <v-card-item>
            <div>
              <div class="text-overline mb-6">
              </div>
              <div class="text-h2 mb-12">
                {{ type.name }}
              </div>
              <div class="text-h3 mb-12">{{type.info}}</div>
            </div>
          </v-card-item>

          <v-card-actions class="justify-end">
            <v-btn class="text-h6"
                   size="x-large"
                   append-icon="arrow_forward"
                   @click="goToLoginInfo(type.id)">
              {{ $t("$vuetify.login.getStarted") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { tm } = useI18n()

const router = useRouter()

let types = tm('$vuetify.login.types')

const color = ref('indigo-darken-4')

const goToLoginInfo = function (id) {
  // 跳转到登录信息页面
  router.push({ name: 'Register', query: { id: id } })
}
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

.character-page .v-row {
  width: 100%;
  max-width: 1200px; /* 控制最大宽度以保持内容不会过于扩散 */
  margin: 0 auto; /* 水平居中 */
  align-items: center;
}

.character-page .v-card {
  padding: 20px; /* 增加内边距，让卡片内容不至于太拥挤 */
  min-height: 400px; /* 可选，如果需要可以指定最小高度 */
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1); /* 可选，添加一些阴影以提升层次感 */
}
</style>