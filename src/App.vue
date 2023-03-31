<script setup>
import Navbar from '@/components/NavigationBar.vue'

import {RouterView} from 'vue-router'
import FooterBar from "@/components/FooterBar.vue";
</script>

<template>
    <header>
        <Navbar/>
    </header>
    <body>
    <RouterView/>
    </body>
    <footer>
        <FooterBar/>
    </footer>
</template>
