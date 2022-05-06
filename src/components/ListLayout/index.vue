<template>
  <div class="list-layout-wrapper">
    <div class="conditions">
      <slot name="header" />
    </div>
    <div class="form">
      <slot name="main" />
    </div>
    <div class="list">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.list-layout-wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .conditions {
    width: 100%;
    margin-bottom: 20px;
  }
  .form{
    width: 100%;
  }
  .list {
    width: 100%;
  }
}
</style>
