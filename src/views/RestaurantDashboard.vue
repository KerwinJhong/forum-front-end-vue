<template>
  <div class="container py-5">
    <RestaurantsDashboard :key="restaurant.id" :initial-restaurant="restaurant" />
    <br />
    <a href="javascript:history.back()">回上一頁</a>
  </div>
</template>

<script>
import RestaurantsDashboard from "../components/RestaurantsDashboard.vue";

const dummyData = {
  restaurant: {
    id: 1,
    name: "August Gerlach",
    tel: "1-059-697-4876 x086",
    address: "01345 Wunsch Knoll",
    opening_hours: "08:00",
    description: "ad",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=22.148585495422335",
    viewCounts: 1,
    createdAt: "2019-11-20T06:25:42.921Z",
    updatedAt: "2019-11-20T07:06:27.751Z",
    CategoryId: 5,
    Category: {
      id: 5,
      name: "素食料理",
      createdAt: "2019-11-20T06:25:42.917Z",
      updatedAt: "2019-11-20T06:25:42.917Z"
    },
    Comments: [
      {
        id: 1,
        text: "Voluptas omnis laudantium et non ut quia unde.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-11-20T06:25:42.942Z",
        updatedAt: "2019-11-20T06:25:42.942Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-20T10:13:49.607Z"
        }
      },
      {
        id: 51,
        text: "Distinctio laborum explicabo quasi.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-11-20T06:25:42.944Z",
        updatedAt: "2019-11-20T06:25:42.944Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-20T10:13:49.607Z"
        }
      },
      {
        id: 101,
        text: "Nihil iure quas.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2019-11-20T06:25:42.946Z",
        updatedAt: "2019-11-20T06:25:42.946Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$ESv6iQjQ8oEe3/XGjw00PuSh1kjmG6Dkhd4YXa50boTlncJDxljAy",
          isAdmin: false,
          image: null,
          createdAt: "2019-11-20T06:25:42.685Z",
          updatedAt: "2019-11-20T10:13:49.607Z"
        }
      }
    ]
  }
};

export default {
  components: {
    RestaurantsDashboard
  },
  data() {
    return {
      restaurant: {}
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    fetchRestaurants() {
      this.restaurant = dummyData.restaurant;
    }
  }
};
</script>