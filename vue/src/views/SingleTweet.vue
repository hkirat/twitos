<template>
  <div>
    <Tweet :tweet="tweet" :user="user" />
    <br/>
    <h3>
      Replies
    </h3>
    <br/>
    <div v-for="comment in comments">
      <Comment :user="this.users.find(u => u.index === comment.owner)" :comment="comment" />
    </div>
    <input
        class="input"
        cols="40"
        rows="5"
        type="text"
        :value="comment"
        @input="event => comment = event.target.value"
    >
    <br/><br/><br/>
    <SpButton @click="sendComment(comment, tweet.id)">Comment</SpButton>
  </div>
</template>

<script>
import {queryClient} from "../store/generated/hkirat/twitos/hkirat.twitos.twitos/module";
import {useRoute} from "vue-router";
import Comment from "./Comment.vue";
import Tweet from "./Tweet.vue";
import {useAddress} from "@starport/vue/src/composables";
import {useStore} from "vuex";

export default {
  name: 'SingleTweet',
  data() {
    return {
      tweet: {},
      user: {},
      comments: [],
      users: [],
      comment: "",
    }
  },
  components: {Comment, Tweet},
  setup() {
    let $s = useStore()
    const sendComment = async(comment, tweetId) => {
      let { address } = useAddress({ $s })
      await $s.dispatch('hkirat.twitos.twitos/sendMsgCreateComment', {
        value: {
          description: comment,
          creator: address.value,
          tweetId
        }
      });
    };
    return {
      sendComment
    }
  },
  methods: {
    async getTweet() {
      let $route = useRoute()
      const client = await queryClient()
      const tweet = await client.queryTweet($route.query.tweetId)
      this.tweet = tweet.data.Tweet
      this.user = tweet.data.user

      const replies = await client.queryComments($route.query.tweetId)
      this.comments = replies.data.comment;
      this.users = replies.data.user;
      console.log(replies.data.user)
    }
  },
  created() {
    this.getTweet();
  }
}
</script>
