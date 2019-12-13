<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <UserProfileCard :profile="profile" :isCurrentUser="isCurrentUser" />
      <div class="row">
        <div class="col-md-4">
          <UserFollowingsCard :followings="followings" />
          <br />
          <UserFollowersCard :followers="followers" />
        </div>
        <div class="col-md-8">
          <UserCommentsCard :comments="comments" />
          <br />
          <UserFavoritedRestaurantsCard :favoritedRestaurants="favoritedRestaurants" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "./../components/UserProfileCard";
import UserFollowingsCard from "./../components/UserFollowingsCard";
import UserFollowersCard from "./../components/UserFollowersCard";
import UserCommentsCard from "./../components/UserCommentsCard";
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data() {
    return {
      profile: {},
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isCurrentUser: false
    };
  },
  computed: {
    ...mapState(["currentUser"])
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUserProfile(userId);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id: userId } = to.params;
    this.fetchUserProfile(userId);
    next();
  },
  methods: {
    async fetchUserProfile(userId) {
      try {
        const { data, statusText } = await usersAPI.get({
          userId
        });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.profile = data.profile;
        this.profile.FollowerNum = data.profile.Followers.length;
        this.comments = data.profile.Comments;
        this.favoritedRestaurants = data.profile.FavoritedRestaurants;
        this.followers = data.profile.Followers;
        this.followings = data.profile.Followings;
        // eslint-disable-next-line
        console.log(+userId, +data.profile.id);
        this.isCurrentUser = +userId === +data.profile.id;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    }
  }
};
</script>