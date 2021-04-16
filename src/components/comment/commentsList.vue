<template>
  <div class="container comments-list">
    <ul>
      <li v-for="(comment, index) in comments" :key="index">
        <CommentsContainer
          :comment="comment"
          :commentIndex="index"
          :comments="comments"
          v-on:delete="deleteComment(index)"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Comment } from "@/models/comment.model";
import { Component, Prop, Vue } from "vue-property-decorator";
import CommentsContainer from "./commentContainer.vue";

@Component({
  components: {
    CommentsContainer,
  },
})
export default class CommentsList extends Vue {
  @Prop() comments!: Comment[];
  public deleteComment(index: number) {
    this.comments = this.comments.splice(index, 1);
  }
  public addComment() {
    let commentToAdd = new Comment(new Date().toISOString(), "", "");
    this.comments.push(commentToAdd);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
}
.comments-list {
  background-color: #e6e6e6;
  height: 83%;
  overflow: auto;
}
</style>

