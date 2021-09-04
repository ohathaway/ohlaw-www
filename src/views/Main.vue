<template>
  <main>
    <Hero></Hero>
    <Welcome></Welcome>
    <LinesOfBusiness></LinesOfBusiness>
  </main>
</template>

<script>
import Hero from '../components/Hero'
import Welcome from '../components/Welcome'
import LinesOfBusiness from '../components/LinesOfBusiness'

export default {
  name: 'Main',
  components: {
    Hero,
    Welcome,
    LinesOfBusiness
  }
}
</script>
