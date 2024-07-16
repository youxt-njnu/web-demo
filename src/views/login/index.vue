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
                   @click="goToLoginInfo(type.id)">
              注册/登录 →
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const types = [
  {
    id: 0,
    name: '品牌方',
    info: '投放广告',
    style: 'tonal'
  },
  {
    id: 1,
    name: '合作方',
    info: '资源合作',
    style: 'outlined'
  }
]

const color = ref('indigo-darken-4')

const goToLoginInfo = (id) => {
  // 跳转到登录信息页面
  router.push({ name: 'LoginInfo', query: { id: id } })
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