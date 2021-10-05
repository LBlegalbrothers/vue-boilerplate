<template>
  <div id="app">
    <div class="container">
      <div>new Page</div>
      <new-component></new-component>
    </div>
  </div>
</template>

<script>
import New from './components/New'

export default {
  components: Vue.getComponents({
    'new-component': New,
  }),
}
</script>

<style lang="scss" scoped>
@use '~styles/_definitions.scss' as *;
@use './styles/variables' as *;

#app {
  width: 100%;
  height: calc(100% - #{$nav-height});
  @include custom-flex(center, center);

  @include mobile {
    height: calc(100% - #{$nav-mobile-height});
  }

  .container {
    @include custom-flex(center, center);
  }
}
</style>


