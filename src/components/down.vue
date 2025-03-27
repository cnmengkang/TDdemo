<template>
    <div class="countdown-container">
        <div class="countdown-display">
            <div class="time-block">
                <span class="time-value">{{ padZero(time.days) }}</span>
            </div>
            <div class="time-block">
                <span class="time-value">{{ padZero(time.hours) }}</span>
            </div>
            <div class="time-block">
                <span class="time-value">{{ padZero(time.minutes) }}</span>
            </div>
            <div class="time-block">
                <span class="time-value">{{ padZero(time.seconds) }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { Countdown } from '../utils/countdown.ts' // 根据你的实际路径调整

// 倒计时时间数据
const time = reactive({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
})
// 倒计时是否结束
const countdownEnded = ref(false)

// 倒计时实例引用
let countdownInstance: Countdown | null = null

// 补零函数，用于显示 01 而不是 1
const padZero = (num: number): string => {
    return num < 10 ? `0${num}` : num.toString()
}
// 启动倒计时
const startCountdown = () => {
    const endTime = new Date()
    endTime.setDate(endTime.getDate() + 5)
    countdownInstance = new Countdown({
        endTime: endTime,
        onUpdate: (newTime: any) => {
            time.days = newTime.days
            time.hours = newTime.hours
            time.minutes = newTime.minutes
            time.seconds = newTime.seconds
        },
        onEnd: () => {
            countdownEnded.value = true
        },
        interval: 1000 // 更新间隔1秒
    })
    countdownInstance.start()
}
onMounted(() => {
    startCountdown()
})
onBeforeUnmount(() => {
    if (countdownInstance) {
        countdownInstance.stop()
    }
})
</script>
<style scoped>
.countdown-container {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
}
.countdown-display {
    display: flex;
    justify-content: center;
    gap: 15px;
}
.time-block {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.time-value {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    background: #f5f5f5;
    padding: 5px 10px;
    border-radius: 5px;
    min-width: 50px;
    display: inline-block;
    text-align: center;
}
.countdown-ended {
    font-size: 1.2rem;
    color: #ff4757;
    font-weight: bold;
}
</style>