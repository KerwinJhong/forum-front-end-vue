<template>
  <div class="container py-5">
    <UserEditForm :initial-profile="profile" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import UserEditForm from "./../components/UserEditForm.vue";

const dummyData = {
  profile: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: "https://i.imgur.com/JtQJRMZ.png"
  }
};

export default {
  components: {
    UserEditForm
  },
  data() {
    return {
      profile: {
        id: -1,
        name: "",
        image: ""
      }
    };
  },
  methods: {
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        // eslint-disable-next-line
        console.log(name + ": " + value);
      }
    },
    fetchProfile(userId) {
      // eslint-disable-next-line
      console.log("fetchProfile id:", userId);
      const { profile } = dummyData;
      this.profile = {
        ...this.profile,
        id: profile.id,
        name: profile.name,
        image: profile.image
      };
    }
  },
  created() {
    const { id } = this.$route.params;
    this.fetchProfile(id);
  }
};
</script>