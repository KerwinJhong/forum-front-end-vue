<template>
  <div class="container py-5">
    <AdminNav />
    <AdminUsersTable />
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav";
import AdminUsersTable from "./../components/AdminUsersTable";

export default {
  components: {
    AdminNav,
    AdminUsersTable
  }
};
</script>