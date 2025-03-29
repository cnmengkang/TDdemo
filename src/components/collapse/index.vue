<template>
    <h-title title="面向丰富业务场景的全栈解决方案" />
    <div class="collapse-container flex">
        <ul class="flex">
            <li @mouseenter="handleMouseEnter(index)"
                :class="['collapse-li', 'item', { active: activeIndex === index }]" v-for="(_, index) in 5"
                :eky="index">
                <div class="collapse-box">
                    <div class="header-h3" v-if="activeIndex != index">
                        <h3 class="h3 h-title">音视频通信</h3>
                        <p class="desc">提供坚实的云端一体音视频 PaaS 能力</p>
                    </div>

                    <div style="padding: 20px 15px;" v-else>
                        <h3 class="h3 h-title">音视频通信</h3>
                        <ul class="mb-10">
                            <li class="collapse-item" v-for="(_, index) in 3" :key="index">
                                <CheckIcon style="color: blue;margin-right: 10px;" size="large" />腾讯 20
                                余年音视频领域深厚技术积淀开放
                            </li>
                        </ul>
                        <h3 class="h3">客户案例</h3>
                        <div class="flex mb-10 collapse-list-card">
                            <t-card>
                                <img width="94"
                                    src="https://qcloudimg.tencent-cloud.cn/raw/128938875bb3f369cc3d040f2a27a7a1.png"
                                    alt="">
                            </t-card>
                            <t-card>
                                <img width="94"
                                    src="https://qcloudimg.tencent-cloud.cn/raw/0f22247c2ba315f2e61b25d370adce73.png"
                                    alt="">
                            </t-card>
                        </div>
                        <h3 class="h3">相关产品</h3>
                        <ul class="flex mb-10">
                            <li class="collapse-item" v-for="(_, index) in 3" :key="index">
                                <VideoCamera3Icon style="color: blue;margin-right: 10px;" size="25px" />实时音视频 TRTC
                            </li>
                        </ul>
                        <div class="col-btn flex">
                            <t-button block theme="primary" size="large" variant="base">立即咨询</t-button>
                            <t-button block variant="outline" size="large">查看更多</t-button>
                        </div>
                    </div>

                </div>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import HTitle from "@/components/title/index.vue"
import { CheckIcon, VideoCamera3Icon } from 'tdesign-icons-vue-next';
import { ref } from 'vue';
const activeIndex = ref(0);

const handleMouseEnter = (index) => {
    console.log("index", index)
    activeIndex.value = index;
};
</script>

<style lang="less" scoped>
.collapse-container {
    background-color: #fff;
    justify-content: center;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 20px 60px;

    .flex {
        .collapse-li {
            width: 15%;
            overflow: hidden;
            border: 2px solid #fff;
            border-radius: 5px;
            background: #fff;
            margin-right: 15px;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            height: 426px;
            transition: width .5s ease;

            .collapse-box {
                height: 100%;
                position: relative;
                z-index: 1;

                .flex {
                    gap: 15px;
                    align-items: center;
                }

                .collapse-item {
                    font-size: 14px;
                    color: #495770;
                    padding: 3px 0px;
                }
            }
        }

        .active {
            width: calc(100% - 60%);
        }

    }
}

.collapse-box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://qcloudimg.tencent-cloud.cn/raw/fe6668aace108dc8d83e01b3571c2ac9.jpeg');
    background-size: cover;
    background-position: 100% 0;
    background-size: auto 100%;
    background-repeat: no-repeat;
    z-index: -1;
}

.active .collapse-box::before {
    opacity: .5;
}

:deep(.t-card__body) {
    padding: 12px;
}

.header-h3 {
    padding: 20px 15px;
}
</style>
