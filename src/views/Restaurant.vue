<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :initial-restaurant="restaurant" />
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment :restaurant-id="restaurant.id" @after-create-comment="afterCreateComment" />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";
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
    FavoritedUsers: [],
    LikedUsers: [],
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
          updatedAt: "2019-11-20T06:25:42.685Z"
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
          updatedAt: "2019-11-20T06:25:42.685Z"
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
          updatedAt: "2019-11-20T06:25:42.685Z"
        }
      }
    ]
  },
  isFavorited: false,
  isLiked: false
};
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true
  },
  isAuthenticated: true
};
export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false
      },
      currentUser: dummyUser.currentUser,
      restaurantComments: []
    };
  },
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchRestaurant(restaurantId);
  },
  methods: {
    fetchRestaurant(restaurantId) {
      // eslint-disable-next-line
      console.log("fetchRestaurant id: ", restaurantId);

      this.restaurant = {
        id: dummyData.restaurant.id,
        name: dummyData.restaurant.name,
        categoryName: dummyData.restaurant.Category.name,
        image: dummyData.restaurant.image,
        openingHours: dummyData.restaurant.opening_hours,
        tel: dummyData.restaurant.tel,
        address: dummyData.restaurant.address,
        description: dummyData.restaurant.description,
        isFavorited: dummyData.isFavorited,
        isLiked: dummyData.isLiked
      };

      this.restaurantComments = dummyData.restaurant.Comments;
    },
    afterDeleteComment(commentId) {
      // 以 filter 保留未被選擇的 comment.id
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload;
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        text, // ===text: text
        createdAt: new Date()
      });
    }
  }
};
</script>