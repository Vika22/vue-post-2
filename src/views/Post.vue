<template>
   <div class="">
      <router-link :to="{ path: '/' }" class="btn">
         Home
      </router-link>
      <br />
      <div class="d-flex flex-wrap justify-center">
         <div class="card" v-for="post in postItem" :key="post.id">
            <div class="card-title d-flex flex-column">
               <b>Title:</b>
               <span> {{ post.title }}</span>
            </div>
            <hr />
            <div class="card-body d-flex flex-column">
               <b>Body:</b>
               <span> {{ post.body }}</span>
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { PostsModule } from '@/store/modules/Posts';

@Component({
   components: {},
})
export default class Home extends Vue {
   postItem: object = {};

   created() {
      this.postItem = PostsModule.posts.filter((f: object) => f.id == this.$route.query.id);
      if (PostsModule.posts.length === 0) {
         this.$router.push({ path: '/' });
      }
   }
}
</script>
<style lang="scss" scoped>
.card {
   width: 500px;
}
</style>
