<template>
 <div class="h-screen flex overflow-hidden bg-cool-gray-100">
  <!-- Off-canvas menu for mobile -->
  <div class="lg:hidden">
    <div class="fixed inset-0 flex z-40">
      <!--
        Off-canvas menu overlay, show/hide based on off-canvas menu state.

        Entering: "transition-opacity ease-linear duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "transition-opacity ease-linear duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="fixed inset-0">
        <div class="absolute inset-0 bg-cool-gray-600 opacity-75"></div>
      </div>
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-teal-600">
        <div class="absolute top-0 right-0 -mr-14 p-1">
          <button class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-cool-gray-600" aria-label="Close sidebar">
            <svg class="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-shrink-0 flex items-center px-4">
          <img class="h-8 w-auto" src="" alt="Easywire logo">
        </div>
        <div class="mt-5 overflow-y-auto">
          <nav class="px-2 space-y-1">
            <nuxt-link to="/" class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-white bg-teal-700 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
              <!-- Heroicon name: home -->
              <svg class="mr-4 h-6 w-6 text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </nuxt-link>

            <nuxt-link to="/users" class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
              <!-- Heroicon name: user-group -->
              <svg class="mr-4 h-6 w-6 text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Users
            </nuxt-link>

          </nav>
        </div>
        <hr class="h-px mt-6 bg-teal-700 border-none">
        <div class="mt-6 flex-1 h-0 overflow-y-auto">
          <nav class="px-2 space-y-1">
            <a href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
              <!-- Heroicon name: cog -->
              <svg class="mr-4 h-6 w-6 text-teal-200 group-hover:text-teal-200 group-focus:text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </a>

            <a href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
              <!-- Heroicon name: question-mark-circle -->
              <svg class="mr-4 h-6 w-6 text-teal-300 group-hover:text-teal-200 group-focus:text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Help
            </a>

            <a href="#" class="group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
              <!-- Heroicon name: shield-check -->
              <svg class="mr-4 h-6 w-6 text-teal-300 group-hover:text-teal-200 group-focus:text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Privacy
            </a>
          </nav>
        </div>
      </div>
      <div class="flex-shrink-0 w-14">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden lg:flex lg:flex-shrink-0">
    <div class="flex flex-col w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow bg-teal-600 pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/easywire-logo-on-brand.svg" alt="Easywire logo">
        </div>
        <div class="mt-12 flex-1 flex flex-col overflow-y-auto">
          <div class="overflow-y-auto">
            <nav class="px-2 space-y-1">
              <nuxt-link to="/" class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
                <!-- Heroicon name: home -->
                <svg class="mr-4 h-6 w-6 text-teal-200 group-hover:text-teal-200 group-focus:text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </nuxt-link>


              <nuxt-link to="/users" class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
                <!-- Heroicon name: user-group -->
                <svg class="mr-4 h-6 w-6 text-teal-300 group-hover:text-teal-200 group-focus:text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Users
              </nuxt-link>

            </nav>
          </div>
          <hr class="h-px mt-6 bg-teal-700 border-none">
          <div class="mt-6 flex-1 h-0 overflow-y-auto">
            <nav class="px-2 space-y-1">
              <a href="#" class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
                <!-- Heroicon name: cog -->
                <svg class="mr-4 h-6 w-6 text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </a>

              <a href="#" class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
                <!-- Heroicon name: question-mark-circle -->
                <svg class="mr-4 h-6 w-6 text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Help
              </a>

              <a href="#" class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:bg-teal-500 transition ease-in-out duration-150">
                <!-- Heroicon name: shield-check -->
                <svg class="mr-4 h-6 w-6 text-teal-200 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Privacy
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex-1 overflow-auto focus:outline-none" tabindex="0">
    <div class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
      <button class="px-4 border-r border-cool-gray-200 text-cool-gray-400 focus:outline-none focus:bg-cool-gray-100 focus:text-cool-gray-600 lg:hidden" aria-label="Open sidebar">
        <!-- Heroicon name: menu-alt-1 -->
        <svg class="h-6 w-6 transition ease-in-out duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </button>
      <!-- Search bar -->
      <div class="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
        <div class="flex-1 flex">
          <form class="w-full flex md:ml-0" action="#" method="GET">
            <label for="search_field" class="sr-only">Search</label>
            <div class="relative w-full text-cool-gray-400 focus-within:text-cool-gray-600">
              <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
              </div>
              <input id="search_field" class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-cool-gray-900 placeholder-cool-gray-500 focus:outline-none focus:placeholder-cool-gray-400 sm:text-sm" placeholder="Search" type="search">
            </div>
          </form>
        </div>
        <div class="ml-4 flex items-center md:ml-6">
          <button class="p-1 text-cool-gray-400 rounded-full hover:bg-cool-gray-100 hover:text-cool-gray-500 focus:outline-none focus:shadow-outline focus:text-cool-gray-500" aria-label="Notifications">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div @click="show.profileMenu = !show.profileMenu" >
              <button class="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:bg-cool-gray-100 lg:p-2 lg:rounded-md lg:hover:bg-cool-gray-100" id="user-menu" aria-label="User menu" aria-haspopup="true">
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <p class="hidden ml-3 text-cool-gray-700 text-sm leading-5 font-medium lg:block">Emilia Birch</p>
                <!-- Heroicon name: chevron-down -->
                <svg class="hidden flex-shrink-0 ml-1 h-5 w-5 text-cool-gray-400 lg:block" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <!--
              Profile dropdown panel, show/hide based on dropdown state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->

            <div v-if="show.profileMenu" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg">
              <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a href="#" class="block px-4 py-2 text-sm text-cool-gray-700 hover:bg-cool-gray-100 transition ease-in-out duration-150" role="menuitem">Your Profile</a>
                <a href="#" class="block px-4 py-2 text-sm text-cool-gray-700 hover:bg-cool-gray-100 transition ease-in-out duration-150" role="menuitem">Settings</a>
                <a @click="logout" class="block px-4 py-2 text-sm text-cool-gray-700 hover:bg-cool-gray-100 transition ease-in-out duration-150" role="menuitem">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main class="flex-1 relative pb-8 z-0 overflow-y-auto">
      <Nuxt />
    </main>
  </div>
</div>

</template>

<script>
export default {
  name: 'default',
  data () {
    return {
      show: {
        profileMenu: false
      }
    }
  },
  methods: {
    logout() {
      console.log('logout')
      return this.$store.dispatch('auth/logout').then(() => {
        location.replace('/')
      })
    },
  },
  computed: {

  }
}
</script>

<style>

</style>
