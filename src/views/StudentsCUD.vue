<template>
  <div>
      <v-loading
        v-model="loading"
    />
    <v-card
        class="v-container mt-3"
        max-width="960"
        outlined
    >
        <v-container fluid>
            <v-column>
                <v-text-field
                    v-model="student.name"
                    label="Name"
                    filled
                />
                <v-text-field
                    :disabled="isEdit"
                    v-model="student.ra"
                    label="RA"
                    filled
                />
                <v-text-field
                    :disabled="isEdit"
                    v-model="student.cpf"
                    label="CPF"
                    return-masked-value
                    mask="###.###.###-##"
                    filled
                />
                <v-text-field
                    v-model="student.email"
                    label="E-mail"
                    filled
                />
            </v-column>
        </v-container>
        <v-card-actions>
        <v-btn
            color="success"
            @click="$_save"
        >
            {{ isEdit ? 'Update' : 'Create' }}
        </v-btn>
        <v-btn
            color="error"
            v-if="isEdit"
            @click="$_delete"
        >
            Delete
        </v-btn>
        <v-btn
            @click="$_back"
            color="primary"
        >
            Back
        </v-btn>
        </v-card-actions>
    </v-card>
  </div>
</template>

<script>

import StudentService from '@/services/students'
import VLoading from '@/components/VLoading'

export default {
  name: 'StudentsCUD',

  components: {
    VLoading
  },

  data () {
    return {
      loading: false,
      student: {
        id: null,
        name: '',
        ra: '',
        cpf: '',
        email: ''
      }
    }
  },

  mounted () {
    this.student.id = this.$route.params.id || null
    if (this.student.id) {
      this.$_getSudent()
    }
  },

  computed: {
    isEdit () {
      return this.student.id
    }
  },

  methods: {
    $_save () {
      if (!this.student.id) {
        this.loading = true
        StudentService
          .post(this.student)
          .then(({ data }) => {
            this.loading = false
            this.$_back()
          })
          .catch(error => {
            this.loading = false
            console.log(error)
          })
      } else {
        this.loading = true
        StudentService
          .patch(this.student.id, {
            name: this.student.name,
            email: this.student.email
          })
          .then(({ data }) => {
            this.loading = false
            this.$_back()
          })
          .catch(error => {
            this.loading = false
            console.log(error)
          })
      }
    },

    $_getSudent () {
      this.loading = true
      StudentService
        .getByID(this.student.id)
        .then(({ data }) => {
          this.loading = false
          this.student = {
            id: data.id,
            name: data.name,
            ra: data.ra,
            cpf: data.cpf,
            email: data.email
          }
        })
        .catch(error => {
          this.loading = false
          console.log(error)
        })
    },

    $_delete () {
      this.loading = true
      StudentService
        .delete(this.student.id)
        .then(({ data }) => {
          this.loading = false
          this.$_back()
        })
        .catch(error => {
          this.loading = false
          console.log(error)
        })
    },

    $_back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
    .v-container {
        margin: 0 auto;
    }
</style>
