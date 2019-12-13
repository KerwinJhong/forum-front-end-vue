<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ restaurant.name }}</h1>
      <p class="mt-1 mb-3">[{{ restaurant.Category.name }}]</p>
    </div>
    <hr />
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="restaurant.image"
        style="width: 250px;margin-bottom: 25px;"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <p>有{{ restaurant.Comments.length }}筆評論</p>
          </li>
          <li>
            <p>有{{ restaurant.FavoritedUsers.length }}人收藏這家餐廳</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
    };
  }
};
</script>