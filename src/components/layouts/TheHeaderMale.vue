<template>
    <header>
        <h2>pharmApp</h2>
    </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 2%;
  background-color: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
}

header h2 {
  color: #0081C9;
  padding-left: 5%;
}
</style>

<script>
export default {
    props:['title']
}
</script>