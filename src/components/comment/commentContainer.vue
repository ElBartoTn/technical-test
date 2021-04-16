<template>
  <div class="container comment-container mt-3">
    <div class="row justify-content-end">
      <!-- Edit & Save -->
      <div class="col-md-1 edit-icon" v-if="isConsultContext()">
        <a v-on:click="setContext(CommentContext.Edit)">
          <b-icon icon="pencil-fill"></b-icon>
        </a>
      </div>
      <div class="col-md-1 edit-icon" v-if="isEditContext()">
        <a v-on:click="saveComment()">
          <b-icon icon="check" font-scale="2"></b-icon>
        </a>
      </div>
      <!-- Delete comment -->
      <div class="col-md-1 trash-icon">
        <a v-on:click="deleteComment()">
          <b-icon icon="trash"></b-icon>
        </a>
      </div>
    </div>
    <div class="row">
      <!-- Profile picture -->
      <div class="col-md-1">
        <b-iconstack font-scale="3">
          <b-icon stacked icon="circle-fill"></b-icon>
          <b-icon stacked icon="person" scale="0.5" variant="white"></b-icon>
        </b-iconstack>
      </div>
      <!-- Author -->
      <div class="col-md-11">
        <div class="row ml-3">
          <div class="col-md-12">
            <span class="comment-author">{{ comment.author }}</span>
          </div>
        </div>
        <!-- Content -->
        <div class="row ml-3">
          <div class="col-md-12" v-if="isConsultContext()">
            {{ comment.content }}
          </div>
          <div class="col-md-12" v-if="isEditContext()">
            <textarea
              class="form-control"
              id="description"
              rows="4"
              v-model="commentCopy.content"
            ></textarea>
          </div>
        </div>
        <!-- Date -->
        <div class="row float-right">
          <div class="col-md-12">
            <span class="comment-date">{{
              comment.creationDate | formatDate
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getDatewithMonthName } from "@/data_test";
import { CommentContext } from "@/models/commentContext.enum";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Comment } from "../../models/comment.model";

@Component({
  components: {},
  filters: {
    formatDate: function (value: string) {
      if (!value) return "";
      return getDatewithMonthName(value);
    },
  },
})
export default class CommentsContainer extends Vue {
  @Prop() readonly comment!: Comment;
  @Prop() readonly commentIndex!: number;
  @Prop() comments!: Comment[];
 @Prop() isAdd!: boolean;
  CommentContext: any = CommentContext;
  private context: CommentContext = CommentContext.Consult;
  private commentCopy = Object.assign({}, this.comment);
  public setContext(context: CommentContext) {
    this.context = context;
  }
  public isEditContext(): boolean {
    return this.context === CommentContext.Edit;
  }
  public isAddContext(): boolean {
    return this.context === CommentContext.Add;
  }
  public isConsultContext(): boolean {
    return this.context === CommentContext.Consult;
  }
  public saveComment() {
    this.comment.content = this.commentCopy.content;
    this.context = CommentContext.Consult;
  }
  public deleteComment() {
    this.$emit("delete");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comment-container {
  border: 1px solid;
  box-shadow: 2px 2px;
  background-color: white;
}
.edit-icon {
  color: #82bc00;
}
.trash-icon {
  color: red;
}
.comment-date {
  font-size: 12px;
}
.comment-author {
  font-size: 12px;
  color: #bbbbbb;
  font-weight: bold;
}
</style>

