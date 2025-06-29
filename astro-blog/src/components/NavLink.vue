<template>
  <a
    :href="link"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    <slot />
  </a>
</template>

<script>
import { isExternal, isMailto, isTel } from '../components/util'

export default {
  props: {
    link: {
      required: true,
    },
  },
  methods: {
    isExternal,
    isMailto,
    isTel,
  },
}
</script>

<style lang="scss">
@import '../../styles/palette';

.nav-link {
  color: $darkTextColor;
}

.nav-link {
  &:hover, &.router-link-active {
    color: $accentColor;
  }
}
</style>
