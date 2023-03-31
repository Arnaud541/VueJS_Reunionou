<script setup>
import Navbar from '@/components/NavigationBar.vue'

import {RouterView} from 'vue-router'
import FooterBar from "@/components/FooterBar.vue";
</script>

<template>
    <header>
        <Navbar/>
    </header>
    <body class="wrapper">
    <RouterView/>
    </body>
    <footer class="has-background-grey-lighter">
        <FooterBar/>
    </footer>
</template>
