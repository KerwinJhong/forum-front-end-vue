<template>
  <div class="col-3 mb-4">
    <img class :src="profile.image" width="140px" height="140px" />
    <h2>{{profile.name}}</h2>
    <span class="badge badge-secondary">追蹤人數：{{(profile.FollowerNum)}}</span>
    <br />
    <div v-if="!isCurrentUser">
      <button
        v-if="profile.isFollowed"
        type="button"
        class="btn btn-danger like mt-2"
        @click.stop.prevent="deleteFollowing(profile.id)"
      >取消追蹤</button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mt-2"
        @click.stop.prevent="addFollowing(profile.id)"
      >追蹤</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true
    },
    isCurrentUser: {
      type: Boolean
    }
  },
  methods: {
    async addFollowing(userId) {
      this.$emit("after-add-following", userId);
    },
    async deleteFollowing(userId) {
      this.$emit("after-delete-following", userId);
    }
  }
};
</script>