<template>
    <header id="headm">

    <div>
        <p id="param"> <slot name="testTitle"></slot> </p>
    </div>

</header>
</template>

<style scoped>

#headm{
  border-radius: 12px;
   
  padding: 0.5rem;
  margin: 10px auto;
  width: 95%;
  background-color: #0081C9;
  color: #fff;
}

#param{
    font-size: 20px;
    font-weight: 400;
}

</style>

<script>
export default {
    props:['title']
}
</script>