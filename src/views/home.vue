<template>
    <com-banner />
    <com-list />
    <com-charts />
    <com-time-down />
</template>
<script setup lang="ts">
import ComBanner from '@/components/banner/index.vue'
import ComCharts from "@/components/echarts/index.vue"
import ComList from "@/components/list/index.vue"
import ComTimeDown from "@/components/down.vue"
</script>