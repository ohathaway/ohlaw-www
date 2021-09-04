<template>
  <div>
    <div class="row no-gutters" id="service-small-business">
      <div class="col-lg m-0 service-img">
        <img src="/img/business1_1024_smallest.jpg">
      </div>
      <div class="col-lg m-0 service-text service-text-right">
        <div class="p-3 py-lg-5 px-lg-4">
          <h4>Small Business</h4>
          <p>We are a small business. We’ve started and run several small business. We understand the reward as well as the challenges small business owners face. Choosing an entity, dividing ownership, managing liability, vendor contracts,
            staying out of tax trouble, employees? We can help you keep your focus on building your business while managing predictable legal costs.</p>
          <!--p><a class="btn btn-outline-primary learn-more small-business" data-toggle="collapse" data-target=".service-description.small-business" href="#service-description-small-business">Learn more</a></p-->
          <b-button v-b-toggle.service-description-small-business variant="outline-primary">Learn more</b-button>
        </div>
      </div>
    </div>
    <b-collapse class="row service-description small-business bg-white collapse" id="service-description-small-business">
      <div class="col-3 bg-primary cta-sidebar p-5" id="cta-sidebar-small-business">
        <h3 class="text-white text-center pb-4">Contact us now<br> for a<br> Free Consultation</h3>
        <form action="#">
          <input type="hidden" name="service-form-name" value="small-business">
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
      <div class="col-9 p-5">
        <h2>Looking to start a business?</h2>
        <p>We can help you navigate the dizzying array of choices out there.</p>
        <p>Not really sure about differences between partnerships, LLC’s, corporations, DBA’s, etc.? We make sure our clients understand why they want an LLC (almost always the right answer).</p>
        <p>Think it’s simple, and an online service will get you everything you need? Perhaps, and go for it if that’s your thing. We’ll be here if you change your mind.</p>
        <p>Someone tell you that you should re-form your company as a Sub-Chapter S corporation? We can help you decide whether that’s really necessary, or whether you might prefer an easier, less expensive option.</p>
        <p>Uh oh, there’s more than one owner of the business? Oh the ways this can go wrong! We’ve been there, done that, got the judicially administered dissolution. Let us help you avoid the biggest, costliest mistakes folks make.</p>
        <h2>Already In Business But Need Some Help?</h2>
        <p>Ok, you’ve filed your articles with the secretary of state, got your EIN from the IRS, and opened your bank account and secured your startup funding. Now what? First, you might want to double-check our checklist to see if you missed
          something. If you’re all set, let’s start doing some business!</p>
        <p>Hmmm, too much business to handle? Maybe it’s time to hire some employees. This opens a whole new can of worms we can help you wrangle. Employment agreements vs. compensation plans, non-competes, NDA’s, we can create, review or
          negotiate any of these and more.</p>
        <p>Oh yeah, you need a place for your business to live. We can help you make sure you protect your interests with the lease terms.</p>
        <p>Vendor contracts. Ugh. Lots of words in the way of getting your stuff. Don’t ignore them. They’ll come back to haunt you and cost you money. Our services are a lot less expensive.</p>
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
  name: 'SmallBusiness',
  components: {
    'b-button': BButton,
    'b-collapse': BCollapse
  },
  directives: {
    'b-toggle': VBToggle
  }
}
</script>
