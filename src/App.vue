<script setup>
import Navbar from '@/components/NavigationBar.vue'

import {RouterView} from 'vue-router'
</script>

<template>
  <header>
    <Navbar/>
  </header>
  <RouterView/>
</template>
