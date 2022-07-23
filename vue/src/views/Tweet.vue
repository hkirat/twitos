<template>
  <div style="border: 2px solid black; border-radius: 20px; padding: 20px;margin: 10px;">
    <h3>
      {{user?.name}} ({{user?.address}})
    </h3>
    <h3>
      {{tweet.description}}
    </h3>
    <h3>
      Likes: {{tweet.likes}}, Comments: {{tweet.comments}}
    </h3>
    <SpButton style="margin: 5px" @click="likeTweet(tweet.id, true)">Like</SpButton>
    <SpButton style="margin: 5px"  @click="likeTweet(tweet.id, false)">Unlike</SpButton>
    <SpButton @click="redirectToTweet(tweet.id)">View replies</SpButton>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {useAddress} from "@starport/vue/src/composables";
import {useRouter} from "vue-router";

export default {
  name: 'Tweet',
  props: ["tweet", "user"],
  setup() {
    let $s = useStore()
    const router = useRouter();
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

    const redirectToTweet = (tweetId) => {
      router.push(`/tweet/?tweetId=${tweetId}`)
    }

    return {
      likeTweet,
      redirectToTweet
    }
  },
}
</script>
