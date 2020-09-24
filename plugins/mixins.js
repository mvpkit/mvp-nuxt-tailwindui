import Vue from 'vue'
import dayjs from 'dayjs'

export default () => {
  const mixins = {
    computed: {
      current_user() {
        return this.$store.state.auth.user
      }
    },
    methods: {
      formatDate(date, format) {
        if (!date) {
          return ''
        }
        if (format) {
          return dayjs(date).utc().format(format)
        } else {
          return dayjs(date).utc().format('MM/DD/YYYY')
        }
      },
      sendTo(path) {
        return this.$router.push(path)
      },
      openTo(path) {
        return window.open(path, '_blank')
      }
    }
  }

  Vue.mixin(mixins)
}