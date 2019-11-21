<template>
  <div class="row">
    <div class="col-md-12"></div>
    <div class="col-md-4">
      <img
        class="img-responsive center-block"
        src="{{profile.image}}"
        style="width: 250px;margin-bottom: 25px;"
      />
    </div>
    <div class="col-md-8">
      <div class="well">
        <ul class="list-unstyled">
          <li>
            <h5>{{profile.name}}</h5>
          </li>
          <li>
            <p>{{profile.email}}</p>
          </li>
          <li>
            <strong>{{restaurants.length}}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{favoritedRestaurants.length}}</strong> 收藏的餐廳
          </li>
          <li>
            <strong>{{followings.length}}</strong> Followings (追蹤者)
          </li>
          <li>
            <strong>{{followers.length}}</strong> Followers (追隨者)
          </li>
          <li>
            <a class="btn btn-primary mt-3" href="/users/{{profile.id}}/edit">edit</a>
          </li>
        </ul>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUser
    };
  },
  methods: {
    addFollow() {
      this.users = {
        ...this.users,
        isFollowed: true
      };
    },
    deleteFollow() {
      this.users = {
        ...this.users,
        isFollowed: false
      };
    }
  }
};
</script>