<template>
  <div class="text-center mx-auto" style="max-width: 500px">
    <img class="align-middle" src="/assets/img/profile.png" width="100" />

    <h5 class="card-title">qnaiv</h5>
    <p class="card-text">
      <small class="text-muted">Front-end / Back-end engineer</small>
    </p>
    <a href="https://github.com/qnaiv" target="_blank">
      <github-icon size="1.5x" class="custom-class"></github-icon>
    </a>
    <a href="https://twitter.com/equa1s" target="_blank">
      <twitter-icon size="1.5x" class="custom-class"></twitter-icon>
    </a>
    <p class="card-text">
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </p>
  </div>
</template>

<script>
import { GithubIcon, TwitterIcon } from 'vue-feather-icons'

export default {
  components: {
    GithubIcon,
    TwitterIcon,
  },
}
</script>

<style>
</style>