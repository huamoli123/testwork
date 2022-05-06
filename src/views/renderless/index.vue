<template>
  <div>
    <s-validate #default="{ validate }" :rules="rules" :value="value">
      <el-input v-model="value" @blur="validate" />
    </s-validate>

    <s-validate #default="{ validate }" :rules="textRules" :value="value2">
      <el-input v-model="value2" type="textarea" @blur="validate" />
    </s-validate>
  </div>
</template>

<script>
import SValidate from './svalidate.vue'
export default {
  components: {
    SValidate
  },
  data() {
    return {
      value: '',
      value2: '',
      rules: [
        {
          test: function(value) {
            return /\d+/.test(value)
          },
          message: '请输入一个数字'
        }
      ],
      textRules: [
        {
          test: function(value) {
            return value
          },
          message: '请输入一个非空的值'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
