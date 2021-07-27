<template>
  <v-overlay
      :value="loading"
      class="d-flex justify-center"
    >
      <v-progress-circular
        indeterminate
        color="primary"
      />
    </v-overlay>
</template>

<script>
export default {
  name: 'VLoading',

  props: {
    value: {
      type: Boolean,
      required: true
    }
  },

  data () {
    return {
      loading: false
    }
  },

  watch: {
    loading: function (value) {
      this.$emit('input', value)
    },

    value: function (value) {
      this.loading = value
    }
  }
}
</script>

<style>

</style>
