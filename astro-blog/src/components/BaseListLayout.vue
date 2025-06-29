<template>
  <div id>
    <div
      class="card-panel-content row"
      itemscope
      itemtype="http://schema.org/Blog"
    >
      <article
        v-for="page in pages"
        :key="page.key"
        itemprop="blogPost"
        class="ui-post entry col-lg-3 col-md-6 card-container"
        itemscope
        itemtype="https://schema.org/BlogPosting"
      >
        <meta itemprop="mainEntityOfPage" :content="page.path" />
        <div class="entry card h-100">
          <div class="card-header-image">
            <NavLink :link="page.path">
              <img :src="page.frontmatter.featuredimg" />
            </NavLink>
          </div>

          <div class="card-inside">
            <div class="card-subheading">
              <div
                v-if="page.frontmatter.tags"
                class="ui-post-meta ui-post-tag"
                itemprop="keywords"
              >
                <a
                  v-for="tag in resolvePostTags(page.frontmatter.tags)"
                  :key="tag"
                  :href="'/tag/' + tag"
                >
                  {{ tag }}
                </a>
              </div>
            </div>
            <h2 class="heading" itemprop="name headline">
              <NavLink :link="page.path" class="heading">{{
                page.title
              }}</NavLink>
            </h2>
            <p itemprop="description">
              {{ page.frontmatter.summary || page.summary }}
            </p>
          </div>
          <div class="meta-bottom mt-auto">
            <div v-if="page.frontmatter.date" class="date">
              <time
                pubdate
                itemprop="datePublished"
                :datetime="page.frontmatter.date"
                >{{ resolvePostDate(page.frontmatter.date) }}</time
              >
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import NavLink from './NavLink' // NavLinkのインポートを追加

export default {
  components: {
    NavLink,
  },
  props: {
    pages: {
      type: Array,
      required: true,
    },
  },
  methods: {
    resolvePostDate(date) {
      return dayjs(date).format('YYYY年MM月DD日') // フォーマットを固定
    },
    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  },
}
</script>

<style lang="scss">
@import '../../styles/palette';

.pagination > li > a, .pagination > li > span {
  border: 0;
  border-bottom: 1px solid #ddd;
  font-size: 15px;
  font-weight: 700;
}

.pagination > li:last-child > a, .pagination > li:last-child > span, .pagination > li:first-child > a, .pagination > li:first-child > span {
  border-radius: 0;
}

.pagination > li > a, .pagination > li > span {
  color: inherit;
  background: none;
}

.pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus {
  background: none;
  border-bottom: 1px solid;
  color: $accentColor;
}

.date {
  // margin-left: 50px;
  margin-top: -20px;
}

.username {
  margin-top: -10px;
}
</style>
