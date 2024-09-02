import DefaultTheme from "vitepress/theme"
import { onMounted, watch, nextTick } from "vue"
import { useRoute } from "vitepress"
import mediumZoom from "medium-zoom"

import "./index.css"

export default {
  ...DefaultTheme,

  setup() {
    const route = useRoute()
    const initZoom = () => {
      new mediumZoom("#app img", { background: "var(--vp-c-bg)" })
      new mediumZoom("[data-zoomable]", { background: "var(--vp-c-bg)" }) // Should there be a new?
    }
    onMounted(() => {
      initZoom()
    })
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
}
