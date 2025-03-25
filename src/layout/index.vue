<template>
    <t-layout>
        <t-header height="60px"><Header/></t-header>
        <t-content> <router-view /></t-content>
        <t-footer>Footer</t-footer>
    </t-layout>
</template>
<script setup>
import Header from "../components/header/nav.vue"
</script>