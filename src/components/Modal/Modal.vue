<template>
  <transition name="fade">
    <div
      v-show="visible"
      class="modal"
      :class="['fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-30']"
      :aria-hidden="!visible"
      @mousedown="closeModal"
      @keydown.esc="closeModal"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="header"
        aria-describedby="modalDescription"
        :style="{'width': width}"
        class="m-dialog"
        :class="[
          'relative bg-white flex flex-col overflow-y-auto shadow rounded-lg max-h-5/6', noPadding ? 'p-0' : 'p-5'
        ]"
        @mousedown.stop
      >
        <div v-if="header || subHeader" class="pageheading border-b border-gray-100 pb-4l">
          <header
            v-if="header"
            id="header"
            class="text-4xl mb-2"
          >
            {{ header }}
          </header>
          <p v-if="subHeader" class="mb-2">{{ subHeader }}</p>
        </div>
        <section
          id="modalDescription"
          :class="[noPadding ? 'py-0' : 'py-5']"
        >
          <slot />
        </section>
        <footer
          v-if="hasFooter"
          class="flex border-t border-gray-100 flex-col pt-4"
        >
          <slot name="footer" />
        </footer>
        <button
          :class="['absolute top-6 right-4 rounded-full w-7 h-7 p-1 cursor-pointer hover:bg-white-200',
                   'focus:outline-none focus:ring-2 focus:ring-primary-100']"
          class="m-button"
          :aria-label="closeButtonAriaLabel"
          @click="closeModal"
          @keyup.enter="closeModal"
        >
          <XmarkLarge />
        </button>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import XmarkLarge from '@/components/Icons/XmarkLarge.vue';
export default {
  name: 'Modal',
  components: { XmarkLarge },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: null
    },
    subHeader: {
      type: String,
      default: null
    },
    closeButtonAriaLabel: {
      type: String,
      required: true
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  computed: {
    hasFooter () {
      return Boolean(this.$slots.footer);
    }
  },
  methods: {
    closeModal () {
      this.$emit('close');
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal {
  @media (max-width: 768px){
    max-width: 70%;
  }
  .m-dialog {
    @media (max-width: 768px){
        width: 100%;
        height: 100%;
    }
  }
}
</style>
