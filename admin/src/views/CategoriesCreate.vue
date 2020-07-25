<template>
  <div class="category">
    <h1>新建分类</h1>
    <el-form label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="model.name" @submit.native.prevent="sub"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" @click="sub">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    };
  },
  methods: {
    async sub() {
      const data = await this.$http.post('/categories', this.model)
      console.log(data)
    }
  }
};
</script>

<style>
</style>