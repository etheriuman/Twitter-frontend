<template>
  <div class="navbar">
    <div class="upper-content">
      <div class="logo">
        <router-link to="/tweets">
          <img src="./../imgs/Icon.svg" alt="">
        </router-link>
      </div>
      <div class="tabs">
        <router-link class="tab" to="/tweets">
          <font-awesome-icon icon="home" /><span>首頁</span>
        </router-link>
        <router-link class="tab" :to="{name: 'user-tweets', params:{id:currentUser.id}}">
          <font-awesome-icon icon="user" /><span>個人資料</span>
        </router-link>
        <router-link class="tab" to="/setting">
          <font-awesome-icon icon="cog" /><span>設定</span>
        </router-link>
      </div>
      <button 
      class=" btn btn-primary tweeting-button"
      data-toggle="modal"
      data-target="#tweeting"
      >
        <font-awesome-icon class="tweet-icon" icon="feather-alt" />
        <span class="tweet">推文</span>
      </button>
    </div>
    <div class="lower-content">
      <button class="logout btn" @click.prevent.stop="logout">
        <font-awesome-icon icon="door-open" /><span>登出</span>
      </button>
    </div>
    <Tweeting />
  </div>
</template>

<script>
import Tweeting from './../components/Tweeting'
import { mapState } from 'vuex'

export default {
  components: {
    Tweeting
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    logout() {
      console.log('logout')
      this.$store.commit('revokeAuthentication')
      this.$router.push('/signin')
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.navbar {
  width: 80%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.tweeting-button {
  width: 120px;
}

.tweet {
  color: #ffffff;
}

.tweet-icon {
  display: none;
}

.logo {
  width: 100%;
  height: 30px;
  margin-bottom: 50px;
}

.logo img {
  width: 30px;
  height: 30px;
}

.tabs {
  width: 100%;
  height: 120px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin-bottom: 30px;
}

.tab {
  width: 100%;
  height: 30px;
}

.tab span {
  padding-left: 20px;
}

.lower-content {
  width: 100%;
}

.logout span {
  padding-left: 10px;
}

/* pad 尺寸以下 */
@media screen and (max-width: 992px) {
  
.navbar {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.upper-content {
  display: flex;
  width: 55%;
  height: 100%
}

.tweeting-button {
  height: 100%;
  width: 120px;
  line-height: 100%;
}

.tweeting-button span {
  display: none;
}

.tweet-icon {
  display: inline-block;
}

.logo {
  width: 30px;
  margin-bottom: 0;
  margin-right: 30px;
}

.logo img {
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
}

.tabs {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  margin: 0;
}

.tab {
  width: 20px;
  line-height: 30px;
  text-align: center;
  margin-right: 30px;
}

.tab span {
  display: none;
}

.lower-content {
  width: 100px;
  text-align: end;
}
}

</style>