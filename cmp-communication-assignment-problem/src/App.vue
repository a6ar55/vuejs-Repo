<template>
  <div class="content">
    <active-user :UserName="user.name" :Age="user.Age"> </active-user>
    <user-data @dynamic-data="ChangeDetails"> </user-data>
  </div>
</template>
<script>
import ActiveUser from "./components/ActiveUser.vue";
import UserData from "./components/UserData.vue";

export default {
  components: { ActiveUser, UserData },
  setup() {},
  data() {
    return {
      user: {
        name: "Adars",
        Age: 19,
      },
    };
  },
  methods:{
    ChangeDetails(name,age){
        this.user={
            name:name,
            Age:age
        }
    }
  }
};
</script>
