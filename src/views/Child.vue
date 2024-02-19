<template>
  <div class="home">


    <parentcomponent msg="This message is from parent component and passing data using prop drilling"/>

  </div>
</template>

<script>
// @ is an alias to /src
import parentcomponent from '@/components/ParentComponent.vue'

export default {
  name: 'HomeView',
  components: {
    parentcomponent
  }
}
</script>
