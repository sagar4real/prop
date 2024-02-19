<template>
  <div class="about">
    <h1>This is the Nested child component</h1>



    <!-- here we have the prop all the way from parent component that have been pass by busing prop drilling -->

    <p style="color:red"> {{ msgfromparent }}</p>
  </div>
</template>


<script>
export default {
  props: {
    msgfromparent: String
  }
};
</script>
