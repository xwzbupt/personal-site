<script setup lang="ts">
import { Layout } from "vuepress-theme-hope/client";
import { onMounted } from "vue";

// 移动端点击展开二维码
onMounted(() => {
  const btns = document.querySelectorAll(".reward-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // 如果按钮本身设置了跳转，就不要展开二维码
      if ((e.target as HTMLElement).closest("button")?.dataset.link) {
        return;
      }
      btns.forEach((b) => b.classList.remove("active"));
      btn.classList.toggle("active");
    });
  });
});

// 点击跳转函数
function goToArticle(path: string) {
  // 当前页面跳转
  window.open(path, "_blank");

  // 如果要新标签页打开，请改成：
  // window.open(path, "_blank");
}
</script>

<template>
  <Layout>
    <!-- 在右侧目录的上方添加广告 -->
    <!-- <template #tocBefore>
      <div>广告</div>
    </template> -->

    <!-- 在右侧目录的下方添加赞赏码 -->
    <template #tocAfter>
      <div style="margin-top: 1em">
        <div style="display: flex; gap: 10px">
          <!-- 按钮：支持我（点击跳转 + 悬停二维码） -->
          <div class="reward-btn">
            <button
              class="support-btn"
              data-link="true"
              @click="goToArticle('https://www.baidu.com')"
            >
              ❤️支持我
            </button>
            <div class="reward-popup">
              <img src="/reward-code.png" alt="赞赏码" />
            </div>
          </div>

          <!-- 按钮：交流圈（仅二维码，不跳转） -->
          <div class="reward-btn">
            <button class="support-btn">💬交流圈</button>
            <div class="reward-popup">
              <img src="/wechat-code.png" alt="交流圈二维码" />
            </div>
          </div>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.support-btn {
  padding: 6px 12px;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  background: white;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}
.support-btn:hover {
  border-color: #ff4d4f;
  color: #ff4d4f;
}

.reward-btn {
  position: relative;
  display: inline-block;
}

.reward-popup {
  position: absolute;
  bottom: 110%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  background: white;
  padding: 6px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
}
.reward-popup img {
  max-width: 320px;
  border-radius: 6px;
}

/* PC: 鼠标悬停出现二维码 */
.reward-btn:hover .reward-popup {
  display: block;
}

/* Mobile: 点击按钮出现二维码 */
@media (hover: none) {
  .reward-btn .reward-popup {
    display: none;
  }
  .reward-btn.active .reward-popup {
    display: block;
  }
}
</style>
