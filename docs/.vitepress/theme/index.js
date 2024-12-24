import mediumZoom from "medium-zoom"
import { useRoute } from "vitepress"
import DefaultTheme from "vitepress/theme"
import { nextTick, onMounted, watch } from "vue"

import "../theme/index.css"


export default {
  ...DefaultTheme,

  setup() {
    const route = useRoute()

    const initZoom = () => {
      new mediumZoom("#app img", { background: "var(--vp-c-bg)" })
      new mediumZoom("[data-zoomable]", { background: "var(--vp-c-bg)" }) // Should there be a new?
    }

    onMounted(() => {
      initZoom();
    })

    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    )
  },
}