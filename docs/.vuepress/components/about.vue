<template>
  <div class="text-center mx-auto" style="max-width: 600px">
    <link
      rel="stylesheet"
      href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
    />

    <img class="align-middle" src="/assets/img/profile.png" width="100" />

    <h5 class="mt-1">qnaiv</h5>
    <a href="https://github.com/qnaiv" target="_blank">
      <github-icon size="1.5x" class="custom-class"></github-icon>
    </a>
    <a href="https://twitter.com/equa1s" target="_blank">
      <twitter-icon size="1.5x" class="custom-class"></twitter-icon>
    </a>
    <p>
      <small class="text-muted">Front-end / Back-end engineer</small>
    </p>
    <div class="calendar">
      <!-- Loading stuff -->
      Loading the data just for you.
    </div>

    <div class="card mt-5">
      <a
        class="twitter-timeline"
        data-height="400"
        data-dnt="true"
        data-theme="light"
        href="https://twitter.com/equa1s?ref_src=twsrc%5Etfw"
        >Tweets by equa1s</a
      >
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
  </div>
</template>

<script>
import { GithubIcon, TwitterIcon } from 'vue-feather-icons'
import githubCalendar from 'github-calendar'

export default {
  components: {
    GithubIcon,
    TwitterIcon,
  },
  mounted: function() {
    githubCalendar('.calendar', 'qnaiv', { responsive: true })
  },
}
</script>

<style>
.calendar {
  margin-top: 20px !important;
  min-height: auto !important;
  border: none !important;
}
.contrib-column {
  /* border: none !important; */
  display: none !important;
}
</style>