<template>
  <div>
    <CreateTweet />
    <h2>Tweets</h2>
    <div v-for="tweet in tweets">
      <Tweet :user="this.users.find(user => user.index === tweet.owner)" :tweet="tweet" />
    </div>
  </div>
</template>

<script>
import { queryClient, txClient } from "../store/generated/hkirat/twitos/hkirat.twitos.twitos/module/index";
import {useStore} from "vuex";
import {useAddress} from "@starport/vue/src/composables";
import CreateTweet from "./CreateTweet.vue";
import Tweet from "./Tweet.vue";

export default {
  name: 'Data',
  data() {
    return {
      tweets: [],
      users: [],
    }
  },
  setup() {
    let $s = useStore()
    const likeTweet = async(tweetId, like) => {
      let { address } = useAddress({ $s })
      await $s.dispatch('hkirat.twitos.twitos/sendMsgLikeTweet', {
        value: {
          like,
          tweetId,
          creator: address.value,
        }
      });
    };
    return {
      likeTweet
    }
  },
  components: {Tweet, CreateTweet},
  methods: {
    async getAllTweets() {
      let $s = useStore()
      const client = await queryClient()
      const tweets = await client.queryTweetAll({
        "pagination.reverse": true
      })
      this.tweets = tweets.data.Tweet
      this.users = tweets.data.user
    }
  },
  created() {
    this.getAllTweets()
  }
}
</script>
