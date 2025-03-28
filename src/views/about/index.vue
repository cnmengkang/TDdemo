<template>
    <h-title title="腾讯云产品地理区域部署" desc="腾讯云的基础设施覆盖全球五大洲 20 个地区，运营 56 个可用区" linkText="查看基础设施详情" />
    <div class="index-container" id="mapChart"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import HTitle from "@/components/title/index.vue";
import * as echarts from "echarts";
import worldGeoJSON from "@/map/world.json";
import data from "./data.json"
onMounted(() => {
    echarts.registerMap('world', worldGeoJSON);
    let myChart = echarts.init(document.getElementById('mapChart'));

    let option = {
        tooltip: {
            trigger: 'item',
            formatter: (params) => {
                if (params.data && params.data.info) {
                    return `<strong>${params.name}</strong><br/>${params.data.info}`;
                }
                return params.name;
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 250,
            inRange: {
                color: ['#4F1C51', '#4575b4', '#74add1', '#abd9e9', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
        },
        geo: {
            map: 'world',
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                // normal: {
                //     areaColor: '#ccc',
                //     borderColor: '#111'
                // },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: [
            {
                name: '全球分布',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: data,
                symbol: 'circle',
                symbolSize: 10,
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        formatter: (params) => {
                            return params.data.name;
                        },
                        textStyle: {
                            color: '#210F37',
                            fontSize: 16
                        }
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            color: '#F7374F'
                        }
                    }
                },
                itemStyle: {
                    color: '#F7374F'
                }
            }
        ]
    };

    myChart.setOption(option);

    myChart.on('click', (params) => {
        console.log(params)
    });
});
</script>

<style lang="less" scoped>
.index-container {
    width: 100%;
    height: 600px;
}

#mapChart {
    width: 100%;
    height: 600px;
}
</style>