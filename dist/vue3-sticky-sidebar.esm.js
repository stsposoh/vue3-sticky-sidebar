import { ref, onMounted, openBlock, createElementBlock, createElementVNode, renderSlot } from 'vue';
import StickySidebar from 'sticky-sidebar-v2';

const _hoisted_1 = {
  class: "inner-wrapper-sticky"
};
var script = {
  __name: 'vue3-sticky-sidebar',
  props: {
    scrollContainer: {
      type: [String, Boolean],
      default: false,
    },
    rootClass: {
      type: String,
      default: ""
    },
    topSpacing: {
      type: [Number, Function],
      default: 0
    },
    bottomSpacing: {
      type: [Number, Function],
      default: 0
    },
    containerSelector: {
      type: [String, Boolean],
      default: false
    },
    stickyClass: {
      type: [String, Boolean],
      default: false
    },
    minWidth: {
      type: Number,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const stickySidebarRef = ref(null);
    onMounted(() => {
      new StickySidebar(stickySidebarRef.value, {
        scrollContainer: props.scrollContainer,
        topSpacing: props.topSpacing,
        bottomSpacing: props.bottomSpacing,
        containerSelector: props.containerSelector,
        innerWrapperSelector: props.innerWrapperSelector || ".inner-wrapper-sticky",
        stickyClass: props.stickyClass,
        minWidth: props.minWidth
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "stickySidebarRef",
        ref: stickySidebarRef
      }, [createElementVNode("div", _hoisted_1, [renderSlot(_ctx.$slots, "default")])], 512);
    };
  }
};

// Import vue component

// install function executed by Vue.use()
const install = function installVue3StickySidebar(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('Vue3StickySidebar', script);
};

// Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()
script.install = install;

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export { script as default };
