<template>
  <div>
    <v-loading
      v-model="loading"
    />
    <v-filter
      class="pa-3"
      v-model="filter.name"
      @search="$_search"
    />
  </div>
</template>

<script>

import VFilter from '@/components/VFilter'
import VLoading from '@/components/VLoading'
import StudentService from '@/services/students'

export default {
  name: 'Students',

  components: {
    VFilter,
    VLoading
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
