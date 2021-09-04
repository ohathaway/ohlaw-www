<template>
  <main id="policies" class="container-fluid">
    <h1>Terms and Conditions</h1>
    <p>To paraphrase the butler in <a href="https://www.youtube.com/watch?v=WiZ8D9akdV4">Indiana Jones and the Last Crusade</a>, this is a law firm, and we have many rules. Fortunately they make a lot of sense, and you probably already intuitively know how a law firm, attorneys, and attorneys' staff members should act. Basically, it's "Do the right thing."</p>
    <p>To learn specifics of what that means in different situations, you can read our policies here.</p>
    <b-list-group horizontal>
      <b-list-group-item class="flex-fill"><router-link :to="{ name: 'PoliciesFees' }">Fees and Other Policies</router-link></b-list-group-item>
      <b-list-group-item class="flex-fill"><a href="/policies/unbundled-services/">Unbundled Services</a></b-list-group-item>
      <b-list-group-item class="flex-fill"><router-link :to="{ name: 'PoliciesPrivacy' }">Privacy Policy</router-link></b-list-group-item>
    </b-list-group>
    <p>Oh, the one real important thing that may not be real intuitive: reading something on this web site does not mean that you have an attorney representing you and giving you legal advice. We will always send an engagement letter to a new client. This letter is the only way we agree to be your attorney. Ever.</p>
  </main>
</template>

<script>
import { BListGroup, BListGroupItem } from 'bootstrap-vue'

export default {
  name: 'Policies',
  components: {
    'b-list-group': BListGroup,
    'b-list-group-item': BListGroupItem
  }
}
</script>

<style lang="scss">
#policies {
  background: #d8d8d8;
  text-align: center;
  padding: 3rem 20rem 150px 20rem;
}
</style>
