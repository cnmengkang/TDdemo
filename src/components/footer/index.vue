<template>
    <div class="footer">
        <t-divider />
        <div class="footer-wrapper flex">
            <div class="f-left">
                <ul class="flex">
                    <li class="item" v-for="item in 4" :key="item">
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
                    </li>
                </ul>
            </div>
            <div class="f-right">
                <ul>
                    <h3>关注或联系我们</h3>
                    <li class="mb-10">
                        <p>添加腾讯云公众号、小程序， 关注云资讯，还可移动管理云服务</p>
                    </li>
                    <li class="flex mb-10">
                        <img width="74"
                            src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/code-1.5ceb23cd.svg"
                            alt="">
                        <img width="74"
                            src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/code-2.ad70392a.svg"
                            alt="">
                    </li>
                    <li class="mb-10">
                        <p>咨询热线：<span>95716</span>或<span>4009 100 100</span></p>
                    </li>
                    <li><t-button style="width: 200px;">联系我们</t-button></li>
                </ul>
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

                    ul {


                        li {
                            padding: 3px 0px;

                            a {
                                font-size: 12px;
                            }
                        }
                    }
                }
            }
        }

        .f-right {
            width: 340px;

            ul {
                p {
                    font-size: 12px;

                    span {
                        font-size: 20px;
                        padding: 0px 10px;
                    }
                }

                .flex {

                    img {
                        padding: 2px;
                        background-color: #eee;
                        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
                        border: 2px solid #fff;
                        margin-right: 15px;
                        border-radius: 5px;
                        background-image: linear-gradient(0deg, #fff 0%, #f3f5f8 100%);
                    }
                }
            }
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
