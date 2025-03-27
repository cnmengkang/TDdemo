<template>
    <div class="bgc">
        <video class="video" :src="video" alt="" muted autoplay loop></video>
        <div class="bgcTabs">
            <t-space style="background:transparent;" direction="vertical">
                <t-tabs class="tabs" size="large" :value="value" placement="left" @change="handlerChange">
                    <t-tab-panel v-for="item in tabs" :value="item.value" :label="item.name" :key="item.id">
                        <div class="tabsContent">
                            <h3 class="tabsTitle">{{ item.name }}</h3>
                            <p class="tabsDesc">{{ item.desc }}</p>
                            <t-button size="large" theme="primary" style="margin-top:32px">立即购买</t-button>
                        </div>
                    </t-tab-panel>
                </t-tabs>
            </t-space>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { TabsProps } from 'tdesign-vue-next';
const value = ref<TabsProps['value']>('first');
const video = ref("https://qcloudimg.tencent-cloud.cn/raw/4b83f25790283e2cf32c74f15f353a24.mp4")
let tabs = ref([
    {
        id: 0,
        value: "first",
        name: "2025春季采购节 拼着买更划算",
        desc: "腾讯云春季大促，助力开工，拼成最低赠送1个月时长",
        images: "https://qcloudimg.tencent-cloud.cn/raw/4b83f25790283e2cf32c74f15f353a24.mp4"
    },
    {
        id: 1,
        value: "first1",
        name: "CVM高性价比蜂驰型 算力成本最大降幅超45%",
        desc: "经济高效 兼顾性能性价比，1年期低至2.7折",
        images: "https://cloudcache.tencent-cloud.com/qcloud/ui/tea-portal-material-portal/build/Main/images/hero2-bg-pc3_475.jpg"
    },
    {
        id: 2,
        value: "first2",
        name: "轻量云 · 游戏服特惠专场",
        desc: "轻量云游戏服专区重磅升级，多款热门游戏如幻兽帕鲁、饥荒、七日杀等一键秒开服，畅玩多人联机游戏",
        images: "https://qcloudimg.tencent-cloud.cn/raw/4b83f25790283e2cf32c74f15f353a24.mp4"
    },
    {
        id: 3,
        value: "first3",
        name: "DeepSeek 上架！ 轻松搞定「开发者」和「企业级」应用",
        desc: "腾讯云震撼上架 DeepSeek 系列模型，限免体验，一键部署即可开启智能之旅。",
        images: "https://qcloudimg.tencent-cloud.cn/raw/4b83f25790283e2cf32c74f15f353a24.mp4"
    },
    {
        id: 4,
        value: "first4",
        name: "新春特惠·AI人工智能会场",
        desc: "多款热门AI产品限时特惠，新用户12.9元起，新老同享1.5折起！",
        images: "https://qcloudimg.tencent-cloud.cn/raw/4b83f25790283e2cf32c74f15f353a24.mp4"
    },
])
const handlerChange: TabsProps['onChange'] = (newValue) => {
    console.log(newValue)
    value.value = newValue;
};
</script>
<style scoped>
.bgc {
    position: relative;
}



.bgcTabs {
    padding: 50px 40px 80px 40px;
}




.card-list .left .card-title {
    margin-bottom: 4px;
    font-size: 18px;
    font-weight: 500;
    color: #181818;
    line-height: 26px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}


:deep(.t-tabs) {
    background: transparent;
}

:deep(.t-tabs__nav-item-text-wrapper) {
    width: 210px;
    display: block;
    font-size: 16px;
    font-weight: 400;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    transition: font-size .4s ease-in-out;
    text-align: right;
}

.tabsContent {
    padding-left: 45px;
}

.tabsContent .tabsTitle {
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 44px;
    color: #181818;
    font-weight: 500;
    max-height: 88px;
    width: 608px;
}

.tabsContent .tabsDesc {
    font-size: 16px;
    color: #4b5b76;
    line-height: 24px;
    max-height: 48px;
}

.video {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    right: 0px;
    object-fit: cover;
}
</style>