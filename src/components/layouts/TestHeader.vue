<template>
    <header id="headf">

    <div>
        <p id="para"> <slot name="testTitle"></slot> </p>
    </div>

</header>
</template>

<style scoped>

#headf{
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  margin: 10px auto;
  width: 95%;
  background-color: #9F73AB;
  color: #fff;
}

#para{
    font-size: 20px;
    font-weight: 400;
}

</style>

<script>
export default {
    props:['title']
}
</script>