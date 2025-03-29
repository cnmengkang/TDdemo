<template>
    <t-layout>
        <t-header>
            <Header />
        </t-header>
        <t-content> <router-view /></t-content>
        <t-footer style="padding:0px;">
            <Footer />
            <t-sticky-tool shape="round"  style="z-index: 999;"  :offset="[-50, 100]" type="normal">
                <t-sticky-item label="chat">
                    <template #icon><ChatBubbleIcon /></template>
                </t-sticky-item>
                <t-sticky-item label="add">
                    <template #icon><AddIcon /></template>
                </t-sticky-item>
                <t-sticky-item label="qrcode">
                    <template #icon><QrcodeIcon /></template>
                </t-sticky-item>
            </t-sticky-tool>
        </t-footer>
    </t-layout>
</template>
<script setup>
import Header from "../components/header/nav.vue"
import Footer from "../components/footer/index.vue"
import { AddIcon, ChatBubbleIcon,QrcodeIcon} from 'tdesign-icons-vue-next';
</script>