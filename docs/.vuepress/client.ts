import { defineClientConfig } from "vuepress/client";
import ProjectPortfolio from "./components/ProjectPortfolio.vue";
import ReadingEnhancements from "./components/ReadingEnhancements.vue";
import LayoutSlotDemo from "./layouts/LayoutSlotDemo.vue";
import BlogWithUptime from "./layouts/BlogWithUptime.vue";

export default defineClientConfig({
  enhance({ app }) {
    app.component("ProjectPortfolio", ProjectPortfolio);
  },
  layouts: {
    BlogWithUptime,
    LayoutSlotDemo,
  },
  rootComponents: [ReadingEnhancements],
});
