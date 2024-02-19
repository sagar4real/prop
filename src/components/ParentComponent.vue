<template>
  <div class="hello">
    <h1>PROP DRILLING</h1>
    <p>
      Prop drilling in Vue.js is a pattern that occurs when data needs to be
      passed from a parent component to a deeply nested child component via
      intermediate components in the hierarchy.
    </p>
    <p>Here we have three components</p>
    <li>parentcomponent</li>
    <li>Child</li>
    <li>NestedChild</li>

    <p>
      Prop drilling happens when a component parentcomponent has to send data to
      a component nestedchild, but there's a component child between them.
      Instead of delivering data directly from parentcomponent to NestedChild,
      you pass it first to child and then to NestedChild.
    </p>




    <!-- now we are sending our prop data that is msg to our nested component -->
     <NestedChild :msgfromparent="msg" />

  </div>
</template>

<script>
import NestedChild from '@/views/NestedChild.vue'
export default {
  name: "HelloWorld",
  components: {
    NestedChild
  },
  props: {
    msg: String,
  },
};
</script>

<style>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
