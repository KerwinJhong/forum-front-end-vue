<template>
  <div class="container py-5">
    <RestaurantsDashboard v-if="!isLoading" :key="restaurant.id" :initial-restaurant="restaurant" />
    <br />
    <a href="javascript:history.back()">回上一頁</a>
  </div>
</template>

<script>
import RestaurantsDashboard from "../components/RestaurantsDashboard.vue";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  components: {
    RestaurantsDashboard
  },
  data() {
    return {
      restaurant: {},
      isLoading: false
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  // 直接更改網址時重新 fetchRestaurant
  beforeRouteUpdate(to, from, next) {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
    next();
  },
  watch: {
    initialRestaurant(restaurant) {
      this.restaurant = {
        ...this.restaurant,
        ...restaurant
      };
    }
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        this.isLoading = true;
        const { data, statusText } = await restaurantsAPI.getRestaurant({
          restaurantId
        });

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.restaurant = data.restaurant;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Toast.fire({
          type: "error",
          title: "無法取得餐廳資料，請稍後再試"
        });
      }
    }
  }
};
</script>