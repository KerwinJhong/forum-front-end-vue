<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <TopRestaurants 
      v-for="restaurant in restaurants" 
      :key="restaurant.id"
      :initial-restaurant="restaurant"/>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import TopRestaurants from "./../components/TopRestaurants";

const dummyData = {
    "restaurants": [
        {
            "id": 2,
            "name": "Kaci Koelpin",
            "tel": "083-343-7765",
            "address": "22769 Johnson Squares",
            "opening_hours": "08:00",
            "description": "Sequi facere sit iusto molestiae dolores quibusdam",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.957592747300982",
            "viewCounts": 110,
            "createdAt": "2019-11-20T06:25:42.922Z",
            "updatedAt": "2019-11-20T09:00:04.918Z",
            "CategoryId": 4,
            "FavoritedUsers": [
                {
                    "id": 1,
                    "name": "root1",
                    "email": "root@example.com",
                    "password": "$2a$10$alLLwv1Kn0tC9euHs6Llwen8uif7jQfU9DPaybXRuGn83ZfKzW56G",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2019-11-20T06:25:42.456Z",
                    "updatedAt": "2019-11-20T15:18:16.157Z",
                    "Favorite": {
                        "UserId": 1,
                        "RestaurantId": 2,
                        "createdAt": "2019-11-20T06:26:05.462Z",
                        "updatedAt": "2019-11-20T06:26:05.462Z"
                    }
                }
            ],
            "isFavorited": true,
            "FavoriteCount": 1
        },
        {
            "id": 19,
            "name": "Octavia Kessler",
            "tel": "976-895-6255",
            "address": "92370 Johanna Ports",
            "opening_hours": "08:00",
            "description": "Et omnis possimus est nemo enim consequuntur nulla",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.440655127534356",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.926Z",
            "updatedAt": "2019-11-20T06:25:42.926Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 37,
            "name": "Damaris Johnston",
            "tel": "1-576-914-4171 x8326",
            "address": "71940 Effertz Throughway",
            "opening_hours": "08:00",
            "description": "Fuga recusandae ut aut dolor sequi reiciendis. Lab",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=14.803006892375548",
            "viewCounts": 12,
            "createdAt": "2019-11-20T06:25:42.930Z",
            "updatedAt": "2019-11-20T06:58:40.142Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 32,
            "name": "Trever Cole",
            "tel": "570-434-5010",
            "address": "9157 Bernier Parks",
            "opening_hours": "08:00",
            "description": "Molestiae provident quia rerum omnis rerum. Quia a",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=92.63836618053767",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.929Z",
            "updatedAt": "2019-11-20T06:25:42.929Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 24,
            "name": "Tracy Kling",
            "tel": "602.671.9831",
            "address": "4776 Hazle Freeway",
            "opening_hours": "08:00",
            "description": "Libero fugit omnis inventore quasi maxime magnam a",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.34397872340968",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.927Z",
            "updatedAt": "2019-11-20T06:25:42.927Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 5,
            "name": "Abagail Dietrich",
            "tel": "638.352.6637 x5805",
            "address": "011 Glenna Camp",
            "opening_hours": "08:00",
            "description": "Cumque quasi nihil. Dicta accusantium officiis ass",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.98596097768254",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.923Z",
            "updatedAt": "2019-11-20T06:25:42.923Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 8,
            "name": "Bradley Kiehn",
            "tel": "453.101.0729",
            "address": "0173 Wilfredo Shores",
            "opening_hours": "08:00",
            "description": "qui",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=83.09110863923424",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.923Z",
            "updatedAt": "2019-11-20T06:25:42.923Z",
            "CategoryId": 4,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 48,
            "name": "Rosie Mayer Jr.",
            "tel": "1-686-584-6537 x40191",
            "address": "46878 Buckridge Passage",
            "opening_hours": "08:00",
            "description": "Ad dignissimos praesentium. Aut vel neque nobis au",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=84.39306160663618",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.934Z",
            "updatedAt": "2019-11-20T06:25:42.934Z",
            "CategoryId": 5,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 28,
            "name": "Earl Kohler",
            "tel": "234.268.7177 x25276",
            "address": "021 Moore Motorway",
            "opening_hours": "08:00",
            "description": "qui qui consequatur",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.94426264459874",
            "viewCounts": null,
            "createdAt": "2019-11-20T06:25:42.928Z",
            "updatedAt": "2019-11-20T06:25:42.928Z",
            "CategoryId": 2,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        },
        {
            "id": 30,
            "name": "Vince Kassulke",
            "tel": "(302) 097-9821 x641",
            "address": "82815 Vivianne Inlet",
            "opening_hours": "08:00",
            "description": "nihil",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=60.72153192006735",
            "viewCounts": 111,
            "createdAt": "2019-11-20T06:25:42.928Z",
            "updatedAt": "2019-11-20T07:21:32.094Z",
            "CategoryId": 1,
            "FavoritedUsers": [],
            "isFavorited": false,
            "FavoriteCount": 0
        }
    ]
}

export default {
  components: {
    NavTabs,
    TopRestaurants
  },
  data () {
    return {
      restaurants: []
    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants
    }
  }
};
</script>