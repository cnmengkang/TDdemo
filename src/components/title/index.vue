<template>
    <section class="h-title">
        <h3 class="h-h3">{{ props.title }}</h3>
        <div class="h-desc flex" v-if="props.desc">
            <p class="h-p-desc">{{ props.desc }}</p>
            <a class="h-a-link" :href="props.url">{{ props.linkText }} ></a>
        </div>
    </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue"
interface Props {
    title: string;
    desc: string;
    linkText: string;
    url?: string;  // 可选属性
}
const props = defineProps<Props>();
</script>

<style lang="less" scoped>
.h-title {
    background-color: #fff;
    padding: 40px 0px;
    text-align: center;

    .h-h3 {
        font-weight: 400;
        font-size: 28px;
        color: #16181a;
        line-height: 48px;
    }

    .h-desc {
        justify-content: center;
        align-items: center;

        .h-p-desc {
            line-height: 26px;
            font-size: 16px;
        }

        .h-a-link {
            margin-left: 10px;
            color: #0052d9;
            line-height: 26px;
        }
    }
}
</style>
