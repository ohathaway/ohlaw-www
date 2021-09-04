<template>
  <main>
    <Hero></Hero>
    <Welcome></Welcome>
    <LinesOfBusiness></LinesOfBusiness>
    <Different></Different>
    <ContactForm></ContactForm>
  </main>
</template>

<script>
import ContactForm from '../components/ContactForm'
import Different from '../components/Different'
import Hero from '../components/Hero'
import LinesOfBusiness from '../components/LinesOfBusiness'
import Welcome from '../components/Welcome'

export default {
  name: 'Main',
  components: {
    ContactForm,
    Different,
    Hero,
    LinesOfBusiness,
    Welcome
  }
}
</script>
