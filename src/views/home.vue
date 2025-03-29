<template>
    <com-banner /> 
    <!-- banner -->
    <com-list />
    <!-- list产品 -->
    <com-collapse/>
    <!-- 手风琴效果 -->
    <com-charts />
    <!-- echarts -->
    <com-time-down />
    <!-- 倒计时 -->
</template>
<script setup lang="ts">
import ComBanner from '@/components/banner/index.vue'
import ComCharts from "@/components/echarts/index.vue"
import ComList from "@/components/list/index.vue"
import ComTimeDown from "@/components/down.vue"
import ComCollapse from "@/components/collapse/index.vue"
</script>