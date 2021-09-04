<template>
  <div>
    <div class="row no-gutters" id="service-bankruptcy">
      <div class="col-lg service-text service-text-left">
        <div class="p-3 pt-lg-5 px-lg-4">
          <h4>Bankruptcy</h4>
          <p>Sometimes life throws obstacles at us that we didn’t expect. Those obstacles can derail our financial life and block our view of the things that are important to us. We strongly believe that all people should have an opportunity to
            pursue their dreams regardless of the curveballs they’ve been thrown or the financial mistakes they’ve made in the past. For this reason, we created our bankruptcy program, Clean Slate Colorado.</p>
          <!--p><a class="btn btn-outline-primary learn-more bankruptcy" data-toggle="collapse" data-target=".service-description.bankruptcy">Learn more</a></p-->
          <b-button v-b-toggle.service-description-bankruptcy variant="outline-primary">Learn more</b-button>
        </div>
      </div>
      <div class="col-lg service-img">
        <img src="/img/helpinghand_1024_smallest.jpg">
      </div>
    </div>
    <b-collapse class="row service-description bankruptcy bg-white collapse" id="service-description-bankruptcy">
      <div class="col-9 p-5">
        <h2>Bankruptcy Services</h2>
      </div>
      <div class="col-3 bg-primary cta-sidebar p-5" id="cta-sidebar-bankruptcy">
        <h3 class="text-white text-center pb-4">Contact us now<br> for a<br> Free Consultation</h3>
        <form action="#">
          <input type="hidden" name="service-form-name" value="bankrupcty">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span>
            </div>
            <input type="text" name="contact-name" class="form-control" placeholder="Your Name" aria-label="Full Name" aria-describedby="basic-addon1" required>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fas fa-at"></i></span>
            </div>
            <input type="email" name="contact-email" class="form-control" placeholder="Your email address" aria-label="Email Address" aria-describedby="contact-email" required>
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1"><i class="fas fa-phone"></i></span>
            </div>
            <input type="tel" name="contact-tel" class="form-control" placeholder="Your phone number" aria-label="Phone Number" aria-describedby="contact-phone" required>
          </div>
          <div class="form-group">
            <textarea class="form-control" name="contact-issue" rows="6" required>What can we help you with?</textarea>
          </div>
          <button class="btn btn-secondary submit">Submit</button>
        </form>
      </div>
    </b-collapse>
  </div>
</template>

<script>
import {
  BButton,
  BCollapse,
  VBToggle
} from 'bootstrap-vue'

export default {
  name: 'Bankruptcy',
  components: {
    'b-button': BButton,
    'b-collapse': BCollapse
  },
  directives: {
    'b-toggle': VBToggle
  }
}
</script>
