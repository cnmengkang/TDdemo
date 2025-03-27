<template>
    <div class="footer">
        <t-divider />
        <div class="footer-wrapper flex">
            <div class="f-left">
                <ul class="flex">
                    <li class="item" v-for="item in 4" :key="item">
                        <div>
                            <ul>
                                <h3>热门推荐</h3>
                                <li><t-link hover="color">云服务器</t-link></li>
                                <li><t-link hover="color">轻量应用服务器</t-link></li>
                                <li><t-link hover="color">对象存储</t-link></li>
                                <li><t-link hover="color">域名注册</t-link></li>
                                <li><t-link hover="color">人脸识别</t-link></li>
                                <li><t-link hover="color">实时音视频</t-link></li>
                                <li><t-link hover="color">即时通信 IM</t-link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="f-right">
                <h3>关注或联系我们</h3>
            </div>
        </div>
        <t-divider />
        <div class="footer-copyright">
            <p>Copyright © 2013 - 2025 Tencent Cloud. All Rights Reserved. 腾讯云 版权所有</p>
            <p>深圳市腾讯计算机系统有限公司ICP备案/许可证号：粤B2-20090059
                <img width="14" src="https://qcloudimg.tencent-cloud.cn/raw/eed02831a0e201b8d794c8282c40cf2e.png"
                    alt=""> 粤公网安备44030502008569号
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">


</script>

<style lang="less" scoped>
.footer {
    padding: 40px 0px;
    background: #fff;

    .footer-wrapper {
        padding: 40px;

        .f-left {
            width: calc(100% - 340px);

            .flex {
                .item {
                    flex: 1;

                    div {
                        ul {


                            li {
                                padding: 3px 0px;
                            }
                        }
                    }
                }
            }
        }

        .f-right {
            width: 340px;
        }
    }
}

h3 {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 22px;
    font-weight: normal;
    color: #000;
}

.footer-copyright {
    width: 100%;

    p {
        text-align: center;
        font-size: 13px;
        color: #000;
    }
}
</style>
