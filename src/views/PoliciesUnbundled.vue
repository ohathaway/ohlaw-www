<template>
  <div>
    <main id="unbundled" class="container-fluid">
      <h1>Unbundled Services and Limited Representation</h1>
      <p>
        Hiring a lawyer can be expensive. Not hiring a lawyer can be even more expensive. Even so, the need for the services of a lawyer doesn't magically create enough room in the budget to afford it. We get it. That's why we work with folks to find ways to make our services more affordable while still earning fair compensation for our work. This is our livelihood. The ways we work with folks can generally be categorized as Fixed Fee Billing, Unbundled Services, and Payment Plans.
      </p>
      <h2>Fixed Fee Billing</h2>
      <p>
        Ultimately, most of the occassions in which you hire a lawyer involve paying for the lawyer's time in one way shape or form. Many of the services we provide involve relatively standard time commitments from us in order to do a great job for you. For that reason, we will always try to provide a fixed cost before we start working for you. Sometimes the work isn't so predictable though, so we bill some of our services on an hourly basis. Even then though, we always commit to working within a budget set by you. You should never have sticker shock when you receive a bill from us.
      </p>
      <h2>Unbundled Services and Limited Representation</h2>
      <p>
        We can offer fixed fees because we limit our representation strictly to the services outlined in our agreement with you. If you need us to do something additional, we're happy to discuss it with you and we will agree together on any additional services or fees before we do the work. Importantly for our insurance company, but also for you to know, our representation of you stops once we deliver the services we agreed to.
      </p>
      <h2>Payment Plans</h2>
      <p>
        Even with fixed fees and unbundled services, some projects just cost more than folks can afford to pay all at once. For these situations we offer very flexible payment plans. In short, pay what you can when you can. We can also setup automatic payments if that helps. The only real catch is that some things, such as Chapter 7 bankruptcies, we cannot actually finish the work until the fees are paid in full. We will make sure you understand those scenarios if they apply to the problem we're working on for you.
      </p>
    </main>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
  name: 'PoliciesUnbundled',
  components: {
    ContactForm
  }
}
</script>

<style lang="scss">
#unbundled {
  background: #d8d8d8;
  padding: 3rem 20rem 150px 20rem;
}

h2 {
  font-style: italic;
}

#contact-form {
  padding-top: 5.5rem;
}
</style>
