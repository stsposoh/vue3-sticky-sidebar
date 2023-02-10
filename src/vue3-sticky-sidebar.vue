<template>
  <div ref="stickySidebarRef">
    <div class="inner-wrapper-sticky">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import StickySidebar from "sticky-sidebar-v2";

const props = defineProps({
  rootClass: {
    type: String,
    default: "",
  },
  topSpacing: {
    type: [Number, Function],
    default: 0,
  },
  bottomSpacing: {
    type: [Number, Function],
    default: 0,
  },
  containerSelector: {
    type: [String, Boolean],
    default: false,
  },
  stickyClass: {
    type: [String, Boolean],
    default: false,
  },
  minWidth: {
    type: Number,
    default: 0,
  },
});

const stickySidebarRef = ref(null);

onMounted(() => {
  const stickySidebar = new StickySidebar(stickySidebarRef.value, {
    topSpacing: props.topSpacing,
    bottomSpacing: props.bottomSpacing,
    containerSelector: props.containerSelector,
    innerWrapperSelector: props.innerWrapperSelector || ".inner-wrapper-sticky",
    stickyClass: props.stickyClass,
    minWidth: props.minWidth,
  });
});
</script>
