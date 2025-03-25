<template>
    <div id="countdown">
        <p>距离活动结束还有：</p>
        <span>{{ timeRemaining.days }}</span> 天
        <span>{{ timeRemaining.hours }}</span> 小时
        <span>{{ timeRemaining.minutes }}</span> 分钟
        <span>{{ timeRemaining.seconds }}</span> 秒
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, onUnmounted } from "vue";
import { Countdown } from "../utils/countdown";

// 定义响应式数据
const timeRemaining = reactive({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
});

let countdownInstance: Countdown;

// 初始化倒计时
const initCountdown = () => {
    const endDate = new Date(); // 当前时间
    endDate.setDate(endDate.getDate() + 5); // 设置为5天后

    countdownInstance = new Countdown({
        endDate,
        onUpdate: (remaining) => {
            Object.assign(timeRemaining, remaining); // 更新倒计时数据
        },
        onEnd: () => {
            console.log("活动已结束！");
        },
    });
};

// 生命周期钩子：组件挂载时初始化倒计时
onMounted(() => {
    initCountdown();
});

// 生命周期钩子：组件卸载时清除定时器
onUnmounted(() => {
    countdownInstance.clearInterval();
});
</script>

<style scoped>
#countdown {
    font-size: 18px;
    text-align: center;
}

#countdown span {
    font-weight: bold;
    margin: 0 5px;
}
</style>