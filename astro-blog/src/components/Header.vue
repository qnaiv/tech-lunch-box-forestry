<template>
  <section id="header-wrapper">
    <header id="header">
      <div class="header-wrapper">
        <nav class="navbar navbar-expand-md navbar-light bg-white fixed-top">
          <div class="container">
            <a href="/" class="navbar-brand">
              <img src="/assets/img/lunchbox-logo.png" />
              <span class="site-title">Tech Lunch Box</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarsExampleDefault" class="collapse navbar-collapse">
              <ul v-if="nav" class="navbar-nav ml-auto">
                <li v-for="item in nav" :key="item.text" class="nav-item">
                  <a :href="item.link" class="nav-link">{{ item.text }}</a>
                </li>
                <Search />
                <Feed />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </section>
</template>

<script>
import Feed from './Feed.vue'
import Search from './Search.vue'

export default {
  components: { Search, Feed },
  data() {
    return {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'Tags', link: '/tag/' },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/config';

// border-bottom 5px solid lighten(#3eaf7c, 50%)
.header-wrapper {
  .site-title {
    margin-left: 10px;
  }

  .title {
    /* flex 0 0 200px */
    font-size: 30px;
    margin: 0;
    letter-spacing: 2px;
    display: block;
    text-transform: uppercase;

    a {
      color: $darkTextColor;
      font-weight: bold;
      text-decoration: none;
    }
  }

  .header-right-wrap {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .nav {
      flex: 0 0 auto;
      display: flex;
      margin: 0;

      .nav-item {
        margin-left: 20px;

        a {
          text-decoration: none;
          transition: color 0.3s;
        }
      }
    }

    .search-box {
      margin-left: 20px;

      input {
        border-radius: 5px;
        transition: all 0.5s;
        border: 1px solid #cecece;

        &:hover {
          border: 1px solid $accentColor;
          box-shadow: 0 0 5px $accentColor;
        }
      }

      .suggestions {
        border: 1px solid $darkBorderColor;
        top: 40px;
        right: 0;

        a {
          color: $darkTextColor;
          text-decoration: none;

          &.focused {
            color: $accentColor;
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  #header {
    display: none;
  }

  .header-wrapper {
    flex-direction: column;

    .header-right-wrap {
      display: none;
    }
  }
}
</style>
