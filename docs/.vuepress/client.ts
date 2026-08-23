import { defineClientConfig } from "vuepress/client";
import LayoutSlotDemo from './layouts/LayoutSlotDemo.vue';
import BlogWithUptime from "./layouts/BlogWithUptime.vue";

export default defineClientConfig({
    layouts: {
        BlogWithUptime,
        LayoutSlotDemo,
    },
});
