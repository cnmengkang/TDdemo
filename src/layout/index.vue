<template>
    <t-layout>
        <t-header height="60px">
            <Header />
        </t-header>
        <t-content> <router-view /></t-content>
        <t-footer style="padding:0px;">
            <Footer />
        </t-footer>
    </t-layout>
</template>
<script setup>
import Header from "../components/header/nav.vue"
import Footer from "../components/footer/index.vue"
</script>