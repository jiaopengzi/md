<template>
  <el-dialog
    title="关于"
    class="about__dialog"
    :visible="visible"
    @close="$emit('close')"
    width="30%"
    center
  >
    <div style="text-align: center">
      <h3>适配 DAX 的微信 Markdown 编辑器</h3>
      <p>扫码关注公众号 焦棚子，交流更多 DAX 话题！</p>
      <img
        src="https://jiaopengzi.com/wp-content/uploads/2021/11/weixingongzhonghao.png"
        style="width: 40%"
      />
    </div>
    <template slot="footer">
      <el-button
        type="primary"
        @click="onRedirect('https://github.com/jiaopengzi/md')"
        plain
      >
        GitHub 仓库
      </el-button>
      <el-button
        type="primary"
        @click="onRedirect('https://gitee.com/jiaopengzi/md')"
        plain
      >
        Gitee 仓库
      </el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onRedirect(url) {
      window.open(url)
    },
  },
}
</script>

<style lang="less" scoped>
/deep/ .el-dialog {
  min-width: 420px;
}
</style>
