<template>
    <h-title title="安全合规、高速稳定的基础设施建设" desc="遍布全球的基础设施节点为用户提供快速稳定、智能可靠的服务" linkText="查看更多客户案例" />
    <div class="map-container">
        <div id="charts" class="index-container"></div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import HTitle from "@/components/title/index.vue"
import earthFlyLine from "earth-flyline";
import worldGeoJSON from "@/map/world.json"
onMounted(() => {
    earthFlyLine.registerMap("world", worldGeoJSON);
    const dom = document.getElementById("charts");
    if (dom) {
        const chart = earthFlyLine.init({
            dom,
            map: "world",
            mode: "3d",
            rotateSpeed: 0.01,
            light: "RectAreaLight",
            config: {
                enableZoom: false, // 禁用缩放功能
                textMark: {
                    style: {
                        color: "#000000",
                        fontSize: 20,
                    },
                    data: [
                        {
                            text: "中国",
                            position: {
                                lon: 104.195397,
                                lat: 35.86166,
                            },
                        },
                        {
                            text: "美国",
                            position: {
                                lon: -98.5795,
                                lat: 39.8283,
                            },
                        },
                    ],
                },
                stopRotateByHover: false,
                R: 200,
                earth: {
                    color: "#13162c",
                    material: "MeshLambertMaterial", //材质类型
                    dragConfig: {
                        rotationSpeed: 0.5,//和鼠标的交互速度
                        inertiaFactor: 0.95,//惯性系数 0-1之间 0 为无惯性
                        disableX: true,//是否禁用x轴旋转
                        disableY: false,//是否禁用y轴旋转
                    }
                },
                bgStyle: {
                    color: "#040D21",
                    opacity: 1,
                },
                mapStyle: {
                    lineColor: "#797eff",
                    areaColor: "#2e3564",
                },
                flyLineStyle: {
                    color: "#cd79ff",
                    duration: 2000, // 动画时长
                    delay: 0,      // 延迟执行时间
                    repeat: Infinity, // 无限循环
                },
                scatterStyle: {
                    color: "#cd79ff",
                },
                wallStyle: {
                    color: "#cd79ff", //颜色
                    opacity: 0.5,//透明度
                    height: 2, //墙体高度
                    width: 2,//墙体宽度  一般不做调整

                },
            },
        });

        // 添加飞线数据
        const flyLines = [
            {
                from: {
                    id: "1",
                    lon: -23.0075,
                    lat: 50.4296,
                },
                to: { id: 2, lon: 26.1223, lat: -7.8756 },
            },
            {
                from: {
                    lon: 142.8123,
                    lat: -58.9813,
                    style: {
                        color: "red",
                    },
                },
                to: {
                    lon: 157.0064,
                    lat: 10.7816,
                    style: {
                        color: "red",
                    },
                },
                style: {
                    pathStyle: {
                        color: "yellow",
                    },
                    flyLineStyle: {
                        color: "yellow",
                    },
                },
            },
            {
                from: { lon: -175.6286, lat: 72.8359 },
                to: { lon: -39.071, lat: -35.438 },
            },
            {
                from: { lon: 178.7439, lat: 25.8303 },
                to: { lon: 137.19, lat: 17.118 },
            },
            {
                from: { lon: -162.6725, lat: 37.277 },
                to: { lon: -37.1681, lat: 38.5162 },
            },
            {
                from: { lon: -7.5945, lat: 37.2754 },
                to: { lon: 41.4114, lat: 41.5946 },
            },
        ];
        // 设置飞线数据
        chart.setData("flyLine", flyLines);
        console.log("EarthFlyLine 初始化成功！");
    } else {
        console.error("DOM 节点未找到，请检查 ID 是否正确！");
    }
});
</script>
<style scoped>
.chart-wrapper {
    width: 100%;
    position: relative;
}


#charts {
    width: 100%;
    height: 600px;
}
</style>