<template>
  <div>
    <v-filter class="pa-3" v-model="filter.name" @search="$_search"></v-filter>
  </div>
</template>

<script>

import VFilter from '@/components/VFilter'

export default {
  name: 'Students',

  components: {
    VFilter
  },

  data () {
    return {
      filter: {
        name: ''
      }
    }
  },

  methods: {
    $_search () {
      console.log('search')
    }
  }
}
</script>
