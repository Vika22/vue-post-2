<template>
   <div class="d-flex flex-wrap justify-center">
      <div class="card d-flex flex-column" v-for="post in posts" :key="post.id">
         <div class="card-title d-flex flex-column">
            <b>Title:</b>
            <span> {{ post.title }}</span>
         </div>
         <router-link :to="{ path: 'post/', query: { id: post.id } }" class="btn card-button">
            View post
         </router-link>
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
   async created() {
      await PostsModule.getData();
   }

   get posts() {
      return PostsModule.posts;
   }
}
</script>
<style lang="scss">
.card {
   align-items: center;
   justify-content: flex-end;
   width: 250px;
   background: antiquewhite;
   border: 1px solid rgba(0, 0, 0, 0.125);
   color: #212529;
   border-radius: 5px;
   margin: 5px;
   overflow: hidden;
   &-title {
      font-size: 18px;
   }
   &-button {
      transform: translateY(40px);
      transition: 0.5s;
   }
   &:hover {
      .card-button {
         transform: translateY(0px);
      }
   }
}
.btn {
   display: inline-block;
   text-decoration: none;
   font-weight: 400;
   color: #212529;
   text-align: center;
   background-color: #4db6ac;
   border-radius: 5px;
   padding: 5px;
   margin-bottom: 5px;
}
.d-flex {
   display: flex;
}
.flex-wrap {
   flex-wrap: wrap;
}
.flex-column {
   flex-direction: column;
}
.justify-center {
   justify-content: center;
}
span:first-letter {
   text-transform: uppercase;
}
</style>
