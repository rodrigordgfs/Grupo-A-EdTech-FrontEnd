import Services from './services'

class StudentsServices extends Services {
  constructor () {
    super({
      config: {
        baseURL: 'https://ed-tech-api.herokuapp.com/v1/api-ed-tech',
        headers: {
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhZG1pbiIsImlhdCI6MTYyNzQxNzM5MCwiZXhwIjoxNjU4OTUzMzkwfQ.5ynHPw459Z8zzrRzwsLI8DE2xOI5OrlpbsVGozjzTQE'
        },
        timeout: 60 * 1000
      }
    })
  }

  getAllStudents (name = null) {
    return this.axios.get(`${this.url}/students`, {
      params: {
        name
      }
    })
  }
}

export default new StudentsServices()
