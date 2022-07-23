<template>
  <div>
    <h2>
      Create a new tweet
    </h2>
    <input
        class="input"
        cols="40"
        rows="5"
        type="text"
        :value="tweet"
        @input="event => tweet = event.target.value"
    >
    <br/><br/><br/>
    <SpButton @click="sendTweet(tweet)">Tweet</SpButton>
  </div>
</template>

<script lang="ts">
import {useStore} from "vuex";
import {useAddress} from "@starport/vue/src/composables";
import SpButton from '@starport/vue';

export default {
  name: 'CreateTweet',
  components: [SpButton],
  data() {
    return {
      tweet: ""
    }
  },
  setup() {
    let $s = useStore()
    const sendTweet = async(tweet) => {

      let { address } = useAddress({ $s })
      await $s.dispatch('hkirat.twitos.twitos/sendMsgCreateTweet', {
        value: {
          description: tweet,
          creator: address.value
        }
      });
    };
    return {
      sendTweet
    }
  }
}
</script>
