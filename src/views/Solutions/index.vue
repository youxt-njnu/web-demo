<script setup>
import Navbar from '@/components/Navbar.vue';
import { useIntersectionObserver } from '@vueuse/core';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

let router = useRouter()

let refContent = ref(null)
let isVisible = ref(false)

let refLine = ref(null)
let ifLineVisible = ref(false)

// const isInViewport = (elem) => {
//   const bounding = elem.getBoundingClientRect();
//   return (
//     bounding.top >= 0 &&
//     bounding.left >= 0 &&
//     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };

// let scrollListener = () => {
//   if (isInViewport(refContent.value)) {
//     isVisible.value = true;
//   } else {
//     isVisible.value = false;
//   }
// };

onMounted(() => {
  // window.addEventListener('scroll', scrollListener);

  useIntersectionObserver(refContent, ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting;
  });

  useIntersectionObserver(refLine, ([{ isIntersecting }]) => {
    ifLineVisible.value = isIntersecting;
  });
})

const goToRegister = () => {
  router.push({ name: 'Login' })
}

</script>

<template>

  <v-app>
    <Navbar />
    <div class="mt-0">
      <v-row class="hero-section">
        <v-col cols="12">
          <div class="centered-content">
            <!-- <div :class="[{active: false},centered-content]"> -->
            <!-- <div :class="[isVisible?centered-content:'',animated-text]"> -->
            <h1>SUCCESSFULLY ADVERTISE<br>
              MORE THAN EVER</h1>
            <br>
            <h2> BY O2O SOLUTIONS, TO CONNECT WITH CUSTOMERS AT EVERY TOUCHPOINT<br>
              TO OPTIMIZE BRAND CAMPAIGNS FOR MAXIMUM RESULTS.</h2>
            <v-card-actions><v-btn append-icon="arrow_right"
                     size="x-large"
                     @click="goToRegister">开始试用</v-btn></v-card-actions>
          </div>

        </v-col>
      </v-row>

    </div>
    <v-row>
      <v-col cols="12">
        <div class="centered-content-second">
          <h1>WHAT IS O2O SOLUTIONS?</h1>
          <h4> O2O Solutions is advertising through of Offline Media and Online Media to matcha<br>

            with target audience lifestyle analysed by their behavioral insight dat</h4>
        </div>

        <div ref="refContent" class="centered-content-second">
          <div class="container-circle">
            <div :class="['circle','circle-sm', {'animated':isVisible},{'fadeInLeftShort':isVisible},{'go':isVisible}]">
              <div class="box-inr"></div>
              <div class="vertical-center">
                <div class="content-vertical-center">
                  <div class="area-content">
                    <h3>
                      <div class="icon">
                        <img decoding="async"
                             src="@/assets/img/item-billboard.png" />
                      </div>OFFLINE
                    </h3>
                    <div class="box-logo">
                      <div class="logo-bx">
                        <img decoding="async"
                             src="@/assets/img/logo-vgi.png"
                             width="48"
                             alt="" />
                      </div>
                      <div class="logo-bx">
                        <img decoding="async"
                             src="@/assets/img/logo-demopower.png"
                             width="92"
                             alt="" />
                      </div>
                      <div class="logo-bx">
                        <img decoding="async"
                             src="@/assets/img/logo-turtle.png"
                             style="width:43.5px;"
                             alt="" />
                      </div>
                      <div class="logo-bx">
                        <img decoding="async"
                             src="@/assets/img/logo-roctec.png"
                             width="90"
                             alt="" />
                      </div>
                      <div class="logo-bx">
                        <img decoding="async"
                             src="@/assets/img/logo-planb.png"
                             width="58"
                             alt="" />
                      </div>
                      <div class="logo-bx">
                        <img decoding="async"
                             src="@/assets/img/logo-chaophraya.png"
                             width="45"
                             alt="" />
                      </div>
                    </div>
                    <a href="#"
                       class="linkmore">All Offline Media</a>
                  </div>
                </div>
              </div>
            </div>
            <div :class="['circle','circle-lg', {'animated':isVisible},{'fadeIn':isVisible},{'go':isVisible}]">
              <div class="box-inr">
                <div class="vertical-center">
                  <div class="content-vertical-center">
                    <div class="area-content">
                      <h3>
                        <i class="icon">
                          <img decoding="async"
                               src="@/assets/img/item-bigdata.png" /> </i>Big Data
                      </h3>
                      <div class="box-logo">
                        <div class="logo-bx">
                          <img decoding="async"
                               src="@/assets/img/logo-turtle.png"
                               alt=""
                               width="60" />
                        </div>
                        <div class="logo-bx">
                          <img decoding="async"
                               src="@/assets/img/logo-rabbit-rewards-2021.png"
                               width="110"
                               alt="" />
                        </div>
                        <div class="logo-bx">
                          <img decoding="async"
                               src="@/assets/img/logo-rabbit-card.png"
                               width="110"
                               alt="" />
                        </div>
                        <div class="logo-bx">
                          <img decoding="async"
                               src="@/assets/img/logo-rabbit-care.png"
                               width="106"
                               alt="" />
                        </div>
                        <div class="logo-bx">
                          <img decoding="async"
                               src="@/assets/img/logo-aeon.png"
                               width="50"
                               alt="" />
                        </div>
                      </div>
                      <a href="#"
                         class="linkmore">Big Data Sources</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div :class="['circle','circle-sm', 'circle-right', {'animated':isVisible},{'fadeInRightShort':isVisible},{'go':isVisible}]">
              <div class="box-inr"></div>
              <div class="vertical-center">
                <div class="content-vertical-center">
                  <div class="area-content">
                    <h3>
                      <i class="icon">
                        <img decoding="async"
                             src="@/assets/img/item-online.png" /> </i>Online
                    </h3>
                    <div class="box-logo">
                      <div class="logo-bx">
                        <img decoding="async"
                             src="@/assets/img/logo-rabbit-rewards-2021.png"
                             width="110"
                             alt="" />
                      </div>
                      <div class="logo-bx">
                        <img decoding="async"
                             src="@/assets/img/logo-iclick.png"
                             width="100"
                             alt="" />
                      </div>
                      <div class="logo-bx">
                        <img decoding="async"
                             src="@/assets/img/logo-anymind.png"
                             width="110"
                             alt="" />
                      </div>
                      <div class="logo-bx">
                        <img decoding="async"
                             src="@/assets/img/logo-vgi-dl.png"
                             width="110"
                             alt="" />
                      </div>
                    </div>
                    <a href="#"
                       class="linkmore">All Online Media</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="circle-arw animated bounceInDown delay-750 go"></div> -->
            <div :class="['circle-arw',{'animated': isVisible},{'bounceInDown':isVisible},{'delay-750':isVisible},{'go':isVisible}]"></div>
          </div>
          <div class="sub-heading">
            <h2>Our O2O Solutions</h2>
            <p>Advertise more effectively.</p>
          </div>
          <v-row style="width: 60%">
            <v-col cols="3">
              <div class="items-solutions">
                <div class="icon-items">
                  <img decoding="async"
                       src="@/assets/img/item-solutions-01.png"
                       alt="" />
                </div>
                <h3>Targeting</h3>
              </div>
            </v-col>
            <v-col cols="3">
              <div class="items-solutions">
                <div class="icon-items">
                  <img decoding="async"
                       src="@/assets/img/item-solutions-02.png"
                       alt="" />
                </div>
                <h3>Purchase<br />Intention</h3>
              </div>
            </v-col>
            <v-col cols="3">
              <div class="items-solutions">
                <div class="icon-items">
                  <img decoding="async"
                       src="@/assets/img/item-solutions-03.png"
                       alt="" />
                </div>
                <h3>
                  Right time,<br />
                  Right place
                </h3>
              </div>
            </v-col>
            <v-col cols="3">
              <div class="items-solutions">
                <div class="icon-items">
                  <img decoding="async"
                       src="@/assets/img/item-solutions-04.png"
                       alt="" />
                </div>
                <h3>Measurable</h3>
              </div>
            </v-col>
          </v-row>

        </div>

      </v-col>
    </v-row>
    <v-row>
      <div class="bg-info">
        <p>WE ARE THE ONE AND ONLY<br>
          020 SOLUTIONS LEADER IN THAILAND.</p>
      </div>
    </v-row>
    <div class="centered-content-second">
      <h1>O2O SOLUTIONS<br>
        IN CONSUMER DAILY LIFE.</h1>
    </div>

    <div  ref = "refLine" > <v-container><v-timeline
                  align="start"
                  line-color="#1C2851"
                  line-thickness="4"
                  truncate-line="both"
                  class="h-50">
        <v-timeline-item size="small">
          <template v-slot:opposite>
            <img src="@/assets/img/timeline-img-01.png"
                 :class="['w-75','img-left',{'slide-from-right':ifLineVisible}]"
                 alt="Walking past McDonald's Advertisement">
          </template>
          <div
               :class="{'slide-from-left':ifLineVisible}">
            <div class="text-h6">WALKING PAST MCDONALD’S ADVERTISEMENT</div>
            <p>
              Out-of-Home and Online Media synchronization.
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item  size="small">
          <template v-slot:opposite>
            <img class="w-75" :class="{'slide-from-left':ifLineVisible}"
                 src="@/assets/img/timeline-img-02.png"
                 alt="McDonald's Promotion on Facebook">
          </template>
          <div :class="['text-right',{'slide-from-right':ifLineVisible}]">
            <!-- 要加引号，对于text-right, silide-from-right  -->
            <div class="text-h6">WALKING PAST MCDONALD’S ADVERTISEMENT</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </v-timeline-item>

        <v-timeline-item size="small">
          <template v-slot:opposite>
            <img src="@/assets/img/timeline-img-03.png"
                 :class="['w-75','img-left',{'slide-from-right':ifLineVisible}]"
                 alt="McDonald's Promotion on Facebook">
          </template>
          <div :class="{'slide-from-left':ifLineVisible}">
            <div class="text-h6">Content title</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </v-timeline-item>
        <v-timeline-item>
          <template v-slot:opposite>
            <img src="@/assets/img/timeline-img-04.png"
                 :class="['w-75',{'slide-from-left':ifLineVisible}]"
                 alt="McDonald's Promotion on Facebook">
          </template>
          <div :class="['text-right',{'slide-from-right':ifLineVisible}]">
            <div class="text-h6">Content title</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </v-timeline-item>
        <v-timeline-item>
          <template v-slot:opposite>
            <img src="@/assets/img/timeline-img-05.png"
                 :class="['w-50','img-left',{'slide-from-right':ifLineVisible}]"
                 alt="McDonald's Promotion on Facebook">
          </template>
          <div class="slide-from-left">
            <div class="text-h6">Content title</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </v-timeline-item>
        <v-timeline-item>
          <template v-slot:opposite>
            <img src="@/assets/img/timeline-img-06.png"
                 :class="['w-50',{'slide-from-left':ifLineVisible}]"
                 alt="McDonald's Promotion on Facebook">
          </template>
          <div :class="['text-right',{'slide-from-left':ifLineVisible}]">
            <div class="text-h6">Content title</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </v-timeline-item>
        <v-timeline-item>
          <br>
        </v-timeline-item>
      </v-timeline></v-container></div>
    
    <div class="brand-content">
      <v-row>
        <v-col cols="12">
          <div class="text-h4 text-center font-weight-bold mt-16">
            BRAND SUCESS STORIES
          </div>
        </v-col>
      </v-row>
      <v-row justify="center"
             class="text-center w-75 mx-auto my-6">
        <v-col cols="4">
          <img src="@/assets/img/mcdonalds.jpg"
               class="w-100">
        </v-col>
        <v-col cols="4">
          <img src="@/assets/img/aeon.jpg"
               class="w-100">
        </v-col>
        <v-col cols="4">
          <img src="@/assets/img/comico.jpg"
               class="w-100">
        </v-col>
      </v-row>
    </div>

    <v-row>
      <div class="bg-info">
        <p class=" text-h4 mt-6">DATA – DRIVEN PERFORMANCE</p>
        <video src="@/assets/video/exp.mp4"
               autoplay
               loop
               muted
               controls
               class="w-50 my-6">
          Sorry, your browser does not support embedded videos.
        </video>
      </div>
    </v-row>
    <v-container class="text-center my-12">
      <p class="text-h4">FROM O2O SOLUTIONS TO POV+<br>
        THROUGH CONSTANT DEVELOPMENT </p>
      <p class="mx-12 my-6">In recognition of the significant opportunity to connect marketers with the most affluent consumers in the country, particularly, the office workers, VGI has launched a
        novel solution, “VGI
        POV+,” specifically tailored for office building media. This innovative solution serves as a vital tool for advertisers to design and execute campaigns that can most efficiently capture their
        target audience through both offline and online channels.</p>
      <img decoding="async"
           src="@/assets/img/31-02-550x550.jpg"
           class="my-6"
           alt="" />
    </v-container>
    <v-footer class="footer">Footer</v-footer>
  </v-app>
</template>

<style scoped>
@import url('./animations.css');

:deep(.v-timeline .v-timeline-divider__dot) {
  background: #1c2851 !important;
}

:deep(.v-timeline .v-timeline-divider__dot .v-timeline-divider__inner-dot) {
  background: #ffffff !important;
}

.hero-section {
  background-image: url('@/assets/img/hero-banner-23-03.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh; /* 设置高度为视口高度 */
  width: 100vw;
}

.centered-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white; /* 设置文本颜色为白色 */
  text-align: center;
  overflow: hidden;
}
.centered-content h1 {
  font-size: 3em; /* 较大的字体大小 */
  font-weight: bold; /* 粗体 */
  margin-bottom: 0.1em;
  animation: slideUpText 1s ease-out forwards;
}

.centered-content h2 {
  font-size: 1.5em; /* 较小的字体大小 */
  font-weight: normal;
  animation: slideUpText-second 1s ease-out forwards;
}
@keyframes slideUpText {
  0% {
    transform: translateY(100%); /* 从底部开始 */
    opacity: 0; /* 开始时透明 */
  }
  100% {
    transform: translateY(0); /* 结束于正常位置 */
    opacity: 1; /* 完全不透明 */
  }
}

@keyframes slideUpText-second {
  0% {
    transform: translateY(100%); /* 从底部开始 */
    opacity: 0; /* 开始时透明 */
  }
  100% {
    transform: translateY(0); /* 结束于正常位置 */
    opacity: 0.8;
  }
}

/* 从右向左动画 */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* 从左向右动画 */
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-from-right {
  animation: slideInFromRight 1s ease-in-out forwards;
}

.slide-from-left {
  animation: slideInFromLeft 1s ease-in-out forwards;
}

.centered-content-second {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: black;
  text-align: center;
  margin-top: 3em;
}

.container-circle {
  position: relative;
  margin-bottom: 100px;
  width: 1190px;
}
.circle {
  padding: 14px;
  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
}

.circle-sm {
  position: absolute;
  top: 50%;
  left: 120px;
  width: 365px;
  height: 365px;
  margin-top: -129px;
  border-radius: 50%;
  z-index: 70;
  border: 14px solid #e4491e;
}
.circle-sm .box-inr {
  clip: rect(0 203px 185px 0);
  transform: rotate(122deg);
  position: absolute;
  top: -14px;
  left: -13px;
  width: 365px;
  height: 365px;
  border-radius: 50%;
  z-index: 10;
  border: 14px solid rgba(246, 57, 0, 0.3);
  background-color: #fff;
}
.circle-sm.circle-right {
  right: 120px;
  left: inherit;
}
.circle-sm.circle-right .box-inr {
  top: -14px;
  left: -15px;
  clip: rect(0 201px 185px 0);
  transform: rotate(-37deg);
}
.circle-sm:hover,
.circle-sm:hover .box-inr {
  border-color: #1c2851;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
}
.circle-lg {
  position: relative;
  z-index: 50;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
}
.circle-lg .box-inr {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 14px solid #e4491e;
}
.circle-lg .area-content {
  padding: 60px 100px;
}
.circle-lg:hover .box-inr {
  border: 14px solid #1c2851;
}

.centered-content-second h1 {
  font-size: 2em; /* 较大的字体大小 */
  font-weight: bold; /* 粗体 */
  margin-bottom: 0.1em; /* 添加一些底部外边距 */
}

.items-solutions {
  text-align: center;
  padding: 10px;
}

.icon-items img {
  width: 80px;
}

.bg-info {
  background-image: url('@/assets/img/bg-gradient.jpg');
  background-size: 100% 100%;
  background-position: center; /* 图像居中显示 */
  background-repeat: no-repeat; /* 不重复图像 */
  width: 100%;
  color: white; /* 文本颜色 */
  text-align: center; /* 文本居中 */
  font-size: 24px; /* 字体大小 */
  padding: 20px 0; /* 上下填充 */
  font-weight: bold; /* 字体加粗 */
  line-height: 1.5; /* 行间距 */
}

.img-left {
  display: block;
  margin-left: auto;
}

.brand-content {
  background-color: #f2f2f2;
  margin-top: -5em;
}

.footer {
  background-color: #1c2851;
  color: white;
  justify-content: center;
  text-align: center;
  padding: 20px 0;
}

.circle-arw {
  width: 72px;
  height: 130px;
  content: '';
  display: block;
  position: absolute;
  z-index: 1;
  left: 50%;
  margin-left: -35px;
  margin-top: -20px;
  background-image: url(/assets/solutions/img/arrow-down.png);
  background-repeat: no-repeat;
}

.circle h3 {
  font-family: 'Avenir LT Std 65', 'db_heaventmed';
  font-size: 24px;
  color: #000;
  text-transform: uppercase;
  -webkit-transform: translateY(25px);
  transform: translateY(25px);
  -webkit-transition: -webkit-transform 0.35s, color 0.35s;
  transition: transform 0.35s, color 0.35s;
}
.circle:hover h3 {
  -webkit-transform: translateY(-50px);
  transform: translateY(-50px);
}
.circle .area-content {
  position: relative;
  z-index: 25;
  padding: 20px 20px;
}
.circle .icon {
  display: block;
  margin: 0 auto 20px;
}
.circle .icon img {
  width: 25%;
}
.circle .logo-bx {
  display: inline-block;
}
.circle .box-logo {
  opacity: 0;
  -webkit-transform: translate3d(0, 10px, 0);
  transform: translate3d(0, 10px, 0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translateY(-30px);
  transform: translateY(-30px);
}
.circle .box-logo .ic {
  color: #9d9d9d;
  font-size: 25px;
}
.circle:hover h3 {
  font-size: 26px;
}
.circle:hover h3 .icon {
  opacity: 0;
}
.circle:hover .box-logo {
  opacity: 1;
  height: 100%;
}
.circle:hover .logo-bx {
  padding: 8px 8px;
}
.circle a.linkmore {
  display: inline-block;
  line-height: 1;
  color: #000;
  margin-top: -10px;
  -webkit-transform: translateY(-50px);
  transform: translateY(-50px);
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.circle:hover a.linkmore {
  -webkit-transform: translateY(-25px);
  transform: translateY(-25px);
}

.circle-arw {
  width: 72px;
  height: 130px;
  content: '';
  display: block;
  position: absolute;
  z-index: 1;
  left: 50%;
  margin-left: -35px;
  margin-top: -20px;
  background-image: url(@/assets/img/arrow-down.png);
  background-repeat: no-repeat;
}
</style>