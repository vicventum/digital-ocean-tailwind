<script setup lang="ts">
defineProps({
  vertical: Boolean
})
</script>

<template>
  <hr
    v-if="vertical"
    class="transition-inherit m-0 -mx-1 inline-flex h-[inherit] max-h-full min-h-full w-0 max-w-0 self-stretch overflow-visible border-0 border-l border-solid align-text-bottom"
  />
  <hr
    v-else
    class="transition-inherit block h-0 max-h-0 max-w-full flex-1 overflow-visible border border-solid"
  />
</template>

<style scoped>
/* hr {
  height: 0;
  overflow: visible;
}

.v-divider {
  border: solid;
  border-width: thin 0 0;
  display: block;
  flex: 1 1 0px;
  height: 0;
  max-height: 0;
  max-width: 100%;
  transition: inherit;
}

.v-divider--vertical {
  align-self: stretch;
  border: solid;
  border-width: 0 thin 0 0;
  display: inline-flex;
  height: inherit;
  margin: 0 -1px;
  max-height: 100%;
  max-width: 0;
  min-height: 100%;
  vertical-align: text-bottom;
  width: 0;
}
 */
</style>
