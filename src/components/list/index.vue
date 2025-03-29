<template>
    <section class="list-wrapper">
        <h-title title="性能强大、安全、稳定的云产品" desc="腾讯多年技术沉淀，300+ 款产品共筑腾讯云产品矩阵" linkText="查看全部产品" />
        <div class="index-list flex gap">
            <section class="left">
                <div class="item" v-for="(_,index) in 2" :key="index">
                    <h3 class="product-title">腾讯混元大模型</h3>
                    <p>自研大语言模型，强大逻辑推理能力</p>
                    <t-space class="tag-demo">
                        <t-tag variant="light-outline">AI内容创作</t-tag>
                        <t-tag variant="light-outline">AI内容创作</t-tag>
                    </t-space>
                    <div class="flex gap list-button">
                        <t-button theme="primary" size="large" variant="base">立即选购</t-button>
                        <t-button size="large" variant="outline">产品介绍</t-button>
                    </div>
                </div>
            </section>
            <section class="right">
                <div class="list-item item" v-for="(_,index) in 12" :key="index">
                    <h4 class="right-title">腾讯混元大模型</h4>
                    <p>自研大语言模型，强大逻辑推理能力</p>
                    <t-space class="tag-demo">
                        <t-tag variant="light-outline">AI内容创作</t-tag>
                        <t-tag variant="light-outline">AI内容创作</t-tag>
                    </t-space>
                </div>
            </section>
        </div>
    </section>
</template>

<script setup lang="ts">
import HTitle from "../title/index.vue"
</script>

<style scoped>
.index-list {
    justify-content: center;
    margin: 30px auto;
}

.left .item:nth-child(1) {
    margin-bottom: 20px;
}

.index-list p {
    margin-bottom: 10px;
    margin-bottom: 8px;
    font-size: 14px;
    color: rgb(75, 91, 118);
    line-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}



.product-title {
    font-weight: 500;
    font-size: 20px;
    color: inherit;
    line-height: 28px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 8px;
}

.item {
    padding: 20px;
    background: #fff;
}

.right-title {
    font-weight: 500;
    font-size: 16px;
    color: inherit;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 8px;
}

.list-button {
    margin-top: 15px;
}

.gap {
    gap: 20px
}

.right {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.list-item {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    cursor: pointer;
    transition: box-shadow .3s ease-in-out
}

.list-item.item:hover {
    box-shadow: 3px 3px 12px rgba(55,99,170,.2);
}

.list-item:nth-child(4n) {
    border-right: none;
}
</style>
