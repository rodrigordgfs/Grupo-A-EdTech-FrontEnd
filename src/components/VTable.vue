<template>
  <v-data-table
    v-model="selected"
    :headers="columns"
    :items="students"
    class="elevation-1"
    single-select
    item-key="id"
    show-select
  >
    <template v-slot:no-data>
      <v-row class="text-center">
          <p>There are no registered students</p>
      </v-row>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'VTable',

  props: {
    students: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      selected: [],
      columns: [
        {
          text: 'RA',
          align: 'center',
          value: 'ra'
        },
        {
          text: 'Name',
          value: 'name',
          align: 'center'
        },
        {
          text: 'CPF',
          value: 'cpf',
          align: 'center'
        },
        {
          text: 'E-mail',
          value: 'email',
          align: 'center',
          sortable: 'false'
        }
      ]
    }
  },

  watch: {
    selected: function (value) {
      console.log(value[0] ? value[0].id : null)
    }
  },

  methods: {

  }
}
</script>

<style>

</style>
