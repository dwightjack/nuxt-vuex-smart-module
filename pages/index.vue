<template>
  <div>
    <p>User: {{ fullUserName }}</p>
    <p>User VSM: {{ fullUserNameVSM }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async middleware({ store }) {
    await store.dispatch('user/setUser', { name: 'John', surname: 'Doe' })
    await store.dispatch('uservsm/setUser', { name: 'Jack', surname: 'Deo' })
  },
  computed: {
    fullUserName() {
      return `${this.$store.state.user.name} ${this.$store.state.user.surname}`
    },
    fullUserNameVSM() {
      return `${this.$store.state.uservsm.name} ${this.$store.state.uservsm.surname}`
    },
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
