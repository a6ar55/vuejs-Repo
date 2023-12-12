<template>
  <form @submit.prevent="submitPage" class="user-form">
  <input type='text' placeholder="Enter Username" v-model="inputedName">
  <input type="number" placeholder="Your Age" v-model="inputedAge">
  <button>Update user data</button>
  </form>  
</template>
<script>
export default ({
    emits:['dynamic-data'],
    data(){
        return{
            inputedName:'',
            inputedAge:''
        }
    },
    methods:{
        submitPage(){
            this.$emit('dynamic-data',this.inputedName,this.inputedAge);
            console.log(this.inputedName,this.inputedAge)
        }
    }
})
</script>
<style scoped>
.user-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

button {
  background-color: #007BFF;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>