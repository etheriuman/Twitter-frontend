<template>
  <ul class="nav nav-pills ml-4">
    <li class="nav-item">
      <router-link :to="{ name:'user-tweets', params:{id:user.id}}" class="nav-link" > 推文 </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name:'user-replies', params:{id:user.id}}" class="nav-link">
        推文與回覆
      </router-link>
    </li>
    <li class="nav-item">
      <router-link :to="{ name:'user-likes', params:{id:user.id}}" class="nav-link">
        喜歡的內容
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "UserProfileNavTabs",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  color: #657786
}
</style>