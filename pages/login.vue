<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
          alt="Workflow"
        />
        <h2
          class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900"
        >
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm leading-5 text-gray-600">
          test account
          <a
            href="#"
            class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
          >
            test@test.com / asdfasdf
          </a>
        </p>
      </div>
      <form @submit.prevent="login()" class="mt-8" action="#" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm">
          <div>
            <input
              v-model="user.email"
              aria-label="Email address"
              name="email"
              type="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Email address"
            />
          </div>
          <div class="-mt-px">
            <input
              v-model="user.password"
              aria-label="Password"
              name="password"
              type="password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Password"
            />
          </div>
        </div>

        <div class="mt-6 flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember_me"
              type="checkbox"
              class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
            <label
              for="remember_me"
              class="ml-2 block text-sm leading-5 text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div class="text-sm leading-5">
            <a
              href="#"
              class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </button>

          <div v-if="errors.length > 0" class="mt-8 rounded-md bg-red-50 p-4">
            <div class="flex">
              <div class="flex-shrink-0">
                <!-- Heroicon name: x-circle -->
                <svg
                  class="h-5 w-5 text-red-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm leading-5 font-medium text-red-800">
                  There were errors with your submission
                </h3>
                <div class="mt-2 text-sm leading-5 text-red-700">
                  <ul class="list-disc pl-5">
                    <li :key="i" v-for="(err, i) in errors">{{ err }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blank',
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      isLoggingIn: false,
      errors: [],
    }
  },
  methods: {
    login() {
      this.isLoggingIn = true
      this.errors = []
      return this.$store
        .dispatch('auth/login', this.user)
        .then((res) => {
          console.log('return on /login: ', res.user)
          if (res.user.id) {
            this.$router.push('/')
          }
        })
        .catch((err) => {
          if(err.response.data.statusCode == 400){
            this.errors = err.response.data.message
          }else{
            this.errors = ["Invalid login, please try again"];
          }

          this.isLoggingIn = false
        })
    },
  },
}
</script>

<style></style>
