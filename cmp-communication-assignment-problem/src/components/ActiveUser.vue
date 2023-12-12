<template>
    <div class="actuser">
        <h2> {{ UserName }} </h2>
        <h3> {{ Age }} </h3>
    </div>
</template>
<script>
export default({
    props:[
        'UserName',
        'Age'

    ]
})
</script>
<style scoped>
.actuser {
  text-align: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #333;
  margin-bottom: 10px;
}

h3 {
  color: #555;
}
</style>
