<template>
  <div id="search">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="app_logo" width="180">
      </router-link>
    </div>
    <a-row type="flex" justify="space-around" align="middle">
      <a-col>
        <div class="header">
          <h1>+4,000,000 Lyrics Now Available.</h1>
          <a-input-search
            class="search-input"
            size="large"
            placeholder="Which track you want?"
            @search="onSearch"
            v-model="search"
          />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import axios from "axios";
import { eventBus } from "../main.js";
export default {
  data() {
    return {
      search: "",
      apiKey: "bff837ad705a5f43d18e5e69c8a98269"
    };
  },
  methods: {
    onSearch(value) {
      if (this.$route.name == "lyrics") {
        this.$router.push("/");
      }
      eventBus.$emit("searchResults", value);

      this.search = "";
    }
  }
};
</script>

<style>
#search {
  height: 50vh;
  background-image: linear-gradient(
      360deg,
      rgba(253, 110, 70, 0.3) 10%,
      rgba(251, 150, 50, 0.2) 360%
    ),
    url("../assets/search.background.jpeg");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
}
.logo {
  padding: 20px;
}

/*Media Query*/
/* Desktop and Laptops */
@media (min-width: 1281px) {
  .header {
    margin-top: 50px;
  }
  .header h1 {
    font-size: 50px;
    font-weight: 500;
    color: white;
  }
  .search-input {
    width: 700px !important;
    height: 60px !important;
    margin: 0 50px !important;
  }
  .ant-input-lg {
    font-size: 22px !important;
  }
  .ant-input-search-icon.anticon.anticon-search {
    font-size: 25px !important;
  }
}

/* Tablets */
@media (min-width: 768px) and (max-width: 1024px) {
  #search {
    height: 50vh;
  }
  .header {
    margin-top: 90px;
  }
  .header h1 {
    font-size: 45px;
    font-weight: 500;
    color: white;
    margin-left: 30px;
  }
  .search-input {
    width: 700px !important;
    height: 60px !important;
    margin: 0 35px !important;
  }
  .ant-input-lg {
    font-size: 22px !important;
  }
  .ant-input-search-icon.anticon.anticon-search {
    font-size: 25px !important;
  }
}
/* Mobile */
@media (min-width: 320px) and (max-width: 480px) {
    #search {
    height: 60vh;
  }
  .header {
    margin-top: 90px;
  }
  .header h1 {
    font-size: 30px;
    font-weight: 500;
    color: white;
    margin-left: 30px;
  }
  .search-input {
    width: 350px !important;
    height: 40px !important;
    margin: 0 20px !important;
  }
  .ant-input-lg {
    font-size: 19px !important;
  }
  .ant-input-search-icon.anticon.anticon-search {
    font-size: 19px !important;
  }
}
</style>
