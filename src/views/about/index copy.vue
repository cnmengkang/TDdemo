<template>
    <h-title title="腾讯云产品地理区域部署" desc="腾讯云的基础设施覆盖全球五大洲 20 个地区，运营 56 个可用区" linkText="查看基础设施详情" />
    <div id="aboutCharts" class="about-container"></div>
</template>

<script setup lang="ts">
import HTitle from "@/components/title/index.vue";
import {onMounted } from "vue";
import worldGeoJSON from "@/map/world.json"
import * as echarts from "echarts";
import "echarts-gl";
onMounted(() => {
    echarts.registerMap("world", worldGeoJSON)

    let canvas = document.createElement("canvas");
    let mapChart = echarts.init(canvas, null, {
        width: 2048,
        height: 1024,
    });
    mapChart.setOption({
        backgroundColor: "rgb(209 219 232)",
        geo: {
            type: "map",
            map: "world",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            boundingCoords: [
                [-180, 90],
                [180, -90],
            ],
            itemStyle: {
                borderWidth: 1,
                normal: {
                    borderColor: "#604652",
                    areaColor: "rgba(0, 90, 171, 1)",
                    label: {
                        show: false,
                    },
                },
            },
            emphasis: {
                itemStyle: {
                    areaColor: "#602bdd",
                    borderColor: "#f29100",
                },
            },
        },
        series: [
            {
                type: "scatter",
                coordinateSystem: "geo",
                label: { show: true },
                data: [
                    {
                        value: [103.012761, 33.113421],
                        label: {
                            color: "#C68EFD",
                            fontSize: 12,
                            fontWeight: "bold",
                            formatter: "GDP: 126.06 trillion yuan",
                        },
                    },
                ],
            },
        ],
    });

    mapChart.setOption({
        globe: {
            baseTexture: mapChart,
            shading: "realistic",
            realisticMaterial: {
                roughness: 0.2,
                metalness: 0,
            },
            light: {
                ambient: {
                    intensity: 0.6,
                },
                main: {
                    intensity: 1,
                    shadow: true,
                },
            },
            postEffect: {
                enable: true,
                bloom: 10,
            },
            viewControl: {
                center: [0, 0, 0],
                alpha: 20,
                beta: 50,
                autoRotate: true,
                autoRotateAfterStill: 3,
                distance: 200,
                autoRotateSpeed: 15,
            },
        },
    });
    let dom = document.getElementById("aboutCharts")
    if (dom) {
        let globeChart = echarts.init(dom);
        globeChart.setOption({
            globe: {
                baseTexture: mapChart
            }
        })
    }


})

</script>

<style lang="less" scoped>
.about-container {
    background-color: yellow;
    width: 600px;
    height: 500px;
}
</style>
