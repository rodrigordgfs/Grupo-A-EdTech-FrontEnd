<template>
  <div class="v-container">
    <v-loading
      v-model="loading"
    />
    <v-filter
      class="pa-3"
      v-model="filter.name"
      @search="$_search"
      @clear="$_search"
    />
    <v-table
      class="mx-3"
      :students="students"
    />
  </div>
</template>

<script>

import VFilter from '@/components/VFilter'
import VLoading from '@/components/VLoading'
import VTable from '@/components/VTable'
import StudentService from '@/services/students'

export default {
  name: 'Students',

  components: {
    VFilter,
    VLoading,
    VTable
  },

  data () {
    return {
      filter: {
        name: ''
      },
      loading: false,
      students: []
    }
  },

  mounted () {
    this.$_search()
  },

  methods: {
    $_search () {
      this.loading = true
      StudentService
        .getAllStudents(this.filter.name || null)
        .then(({ data }) => {
          this.loading = false
          this.students = data.rows
        })
        .catch((error) => {
          this.loading = false
          console.log(error)
        })
    }
  }
}
</script>

<style lang="scss">
  .v-container {
    max-width: 960px;
    margin: 0 auto;
  }
  .v-btn-fab {
    bottom: 0;
    position: absolute;
    margin: 0 0 16px 16px;
  }
</style>
