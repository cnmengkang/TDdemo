<template>
    <div class="nav-container flex">
        <t-head-menu>
            <template #logo><img
                    src="https://cloudcache.tencent-cloud.com/qcloud/portal/kit/images/slice/logo.23996906.svg"
                    width="78" />
            </template>
            <t-menu-item v-for="item in navBar" :value="item.id" :key="item.id"><span>{{ item.name
            }}</span></t-menu-item>
        </t-head-menu>
        <t-head-menu class="right" default-value="2-1" expand-type="popup" @change="handleSelect">
            <t-input style="padding:0px 20px" auto-width size="large" :placeholder="t('searchPlaceholder')" clearable>
                <template #suffixIcon>
                    <search-icon :style="{ cursor: 'pointer' }" />
                </template>
            </t-input>
            <t-submenu :value="currentLanguage">
                <template #title>
                    <span>{{ currentLanguage }}</span>
                </template>
                <t-menu-item :value="item.value" v-for="item in languagesOptions" :key="item.id">{{ item.label
                    }}</t-menu-item>
            </t-submenu>
            <t-menu-item value="10"><span>{{ t("navBar.menu11") }}</span></t-menu-item>
            <t-menu-item value="11"><span>{{ t("navBar.menu12") }}</span></t-menu-item>
            <t-menu-item value="13"><span>{{ t("navBar.menu14") }}</span></t-menu-item>
            <t-menu-item value="14"><span>{{ t("navBar.menu15") }}</span></t-menu-item>
        </t-head-menu>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from "vue-router";
const router: any = useRouter();
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
const { t } = useI18n();
import { SearchIcon } from 'tdesign-icons-vue-next';

let navBar = computed(() => [
    {
        name: t("navBar.menu1"), // 最新活动
        id: 0,
    },
    {
        name: t("navBar.menu2"), // 产品
        id: 1,
    },

    {
        name: t("navBar.menu4"), // 定价
        id: 3,
    },

    {
        name: t("navBar.menu6"), // 云市场
        id: 5,
    },
    {
        name: t("navBar.menu7"), // 开发者
        id: 6,
    },
    {
        name: t("navBar.menu8"), // 客户支持
        id: 7,
    },
    {
        name: t("navBar.menu9"), // 合作与生态
        id: 8,
    },
    {
        name: t("navBar.menu10"), // 了解腾讯云
        id: 9,
    },
])
const handleClick = () => {
    router.push("/about");
}

let languagesOptions = computed(() => [
    {
        label: t("language.Chinese"),
        value: "zh",
    },
    {
        label: t("language.English"),
        value: "en",
    },
])

const currentLanguage = computed(() => {
    let language =  locale.value || localStorage.getItem("lang") || "zh";
    return language=="zh"?"中文":"English"
});


const handleSelect = (value: string) => {
    if (value == "zh" || value == "en") {
        locale.value = value;
        localStorage.setItem("lang", value);
    }
};

</script>
<style scoped>
:deep(.right .t-menu) {
    justify-content: flex-end;
}

:deep(.t-head-menu__inner li + li) {
    margin-left: 0px;
}

:deep(.t-head-menu .t-menu__item) {
    padding: 0px 10px;
}

:deep(.t-menu__item:hover:not(.t-is-active):not(.t-is-opened):not(.t-is-disabled)) {
    color: blue;
}
</style>