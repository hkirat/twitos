<template>
  <div style="border: 2px solid black; border-radius: 20px; padding: 20px;margin: 10px;">
    <h3>
      {{user?.name}} ({{user?.address}})
    </h3>
    <h3>
      {{comment?.description}}
    </h3>
    <h3>
      Likes: {{comment?.likes}}
    </h3>
    <SpButton style="margin: 5px" @click="likeComment(comment.id, true)">Like</SpButton>
    <SpButton style="margin: 5px"  @click="likeComment(comment.id, false)">Unlike</SpButton>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {useAddress} from "@starport/vue/src/composables";

export default {
  name: 'Comment',
  props: ["comment", "user"],
  setup() {
    let $s = useStore()
    const likeComment = async(commentId, like) => {
      let { address } = useAddress({ $s })
      await $s.dispatch('hkirat.twitos.twitos/sendMsgLikeComment', {
        value: {
          like,
          commentId,
          creator: address.value,
        }
      });
    };

    return {
      likeComment,
    }
  },
}
</script>
