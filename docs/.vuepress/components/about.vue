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

    <div class="card p-0 mt-3 text-left">
      <span class="mt-3 ml-3 h6 text-muted">Github calendar</span>
      <div class="calendar">
        <!-- Loading stuff -->
        Loading the data just for you.
      </div>
    </div>

    <div class="card p-3 mt-3 text-left">
      <span class="h6 text-muted">Twitter</span>
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
.graph-before-activity-overview {
  border: none !important;
}
.contrib-footer {
  height: auto !important;
  width: auto !important;
}
.contrib-column {
  /* border: none !important; */
  display: none !important;
}
</style>