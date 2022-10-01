<template>
  <div>
    <post-card />
  </div>
</template>

<script>
// @ is an alias to /src
import PostCard from '@/components/PostCard.vue'

export default {
  name: 'HomeView',
  components: {
    PostCard
  },
  setup() {
    return {} 
  }
}
</script>
