<template>
  <div v-if="authors">
    <span v-for="author in authors" :key="author.name">
      <div class="d-flex align-items-center">
        <a class="profile-avatar">
          <img
            v-if="author.name === currentAuthor"
            :src="author.avatar"
            class="avatar-image"
            :alt="author.name"
          />
        </a>
        <div v-if="author.name === currentAuthor">
          <span>{{ author.name }}</span> &nbsp;
          <NavLink
            v-if="author.name === currentAuthor"
            :link="author.link"
            class="btn btn-sm btn-outline-dark"
            >{{ author.linktext }}</NavLink
          >
        </div>
      </div>
    </span>
  </div>
</template>

<script>
import NavLink from './NavLink'

export default {
  components: {
    NavLink,
  },
  props: {
    authors: {
      type: Array,
      required: true,
    },
    currentAuthor: {
      type: String,
      required: true,
    },
  },
}
</script>
