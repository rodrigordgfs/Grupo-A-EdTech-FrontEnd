<template>
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header> Filtros </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-form ref="form" @submit.prevent="">
                    <v-container fluid>
                        <v-row>
                            <v-text-field
                                v-model="name"
                                label="Name"
                                filled
                            />
                        </v-row>
                        <v-row>
                            <v-btn depressed color="primary" class="mr-2" :disabled="disableButtons" @click="$_search">Search</v-btn>
                            <v-btn depressed color="secondary" :disabled="disableButtons" @click="$_clear">Clear</v-btn>
                        </v-row>
                    </v-container>
                </v-form>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
  name: 'VFilter',

  props: {
    value: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      name: ''
    }
  },

  computed: {
    disableButtons () {
      return this.name.length === 0
    }
  },

  watch: {
    name: function (value) {
      this.$emit('input', value)
    },

    value: function (value) {
      this.name = value
    }
  },

  methods: {
    $_clear () {
      this.name = ''
      this.$emit('clear')
    },

    $_search () {
      this.$emit('search')
    }
  }
}
</script>

<style>
</style>
