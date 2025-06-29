<template>
  <div class="search-box">
    <input
      aria-label="Search"
      placeholder="Search..."
      v-model="query"
      @input="onQueryChange"
    />
    <ul v-if="showSuggestions" class="suggestions">
      <li v-for="suggestion in suggestions" :key="suggestion.url">
        <a :href="suggestion.url">{{ suggestion.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      allPosts: [],
      suggestions: [],
    };
  },
  computed: {
    showSuggestions() {
      return this.query.length > 0 && this.suggestions.length > 0;
    },
  },
  async created() {
    // Astroのコンテンツコレクションから記事データを取得する
    // これはAstroのビルド時に行われるため、ここではダミーデータかAPI呼び出しを想定
    // 実際にはAstroコンポーネントからpropsとして渡すか、APIエンドポイントを作成する
    const response = await fetch('/api/posts.json'); // 仮のAPIエンドポイント
    this.allPosts = await response.json();
  },
  methods: {
    onQueryChange() {
      if (this.query.length === 0) {
        this.suggestions = [];
        return;
      }

      const lowerCaseQuery = this.query.toLowerCase();
      this.suggestions = this.allPosts.filter(post => {
        return post.title.toLowerCase().includes(lowerCaseQuery) ||
               (post.summary && post.summary.toLowerCase().includes(lowerCaseQuery));
      }).slice(0, 5); // 上位5件のみ表示
    },
  },
};
</script>

<style lang="scss" scoped>
.search-box {
  display: inline-block;
  position: relative;
  margin-right: 1rem;
  input {
    cursor: text;
    width: 10rem;
    height: 2rem;
    color: lighten($textColor, 25%);
    display: inline-block;
    border: 1px solid var(--c-border);
    border-radius: 2rem;
    font-size: 0.9rem;
    line-height: 2rem;
    padding: 0 0.5rem 0 2rem;
    outline: none;
    transition: all 0.2s ease;
    background: #fff url('/assets/img/search.svg') 0.6rem 0.5rem no-repeat;
    background-size: 1rem;
    &:focus {
      border-color: $accentColor;
    }
  }
  .suggestions {
    background: #fff;
    width: 20rem;
    position: absolute;
    top: 1.5rem;
    border: 1px solid var(--c-border);
    border-radius: 6px;
    padding: 0.4rem;
    list-style-type: none;
    &.align-right {
      right: 0;
    }
  }
  .suggestion {
    line-height: 1.4rem;
    padding: 0.4rem 0.6rem;
    border-radius: 4px;
    cursor: pointer;
    a {
      white-space: normal;
      color: lighten($textColor, 15%);
      .highlight {
        color: $accentColor;
      }
    }
    &.focused {
      background-color: #f3f4f5;
    }
  }
}

@media (max-width: 959px) {
  .search-box {
    input {
      cursor: text;
      width: 0;
      border-color: transparent;
      position: relative;
      &:focus {
        width: 8rem;
      }
    }
  }
}

@media (max-width: 719px) {
  .search-box {
    margin-right: 0;
    input {
      margin-left: 0;
      padding-left: 0;
      background-position: 10px 0.5rem;
      &:focus {
        width: 100%;
      }
    }
    .suggestions {
      right: 0;
    }
  }
}
</style>
