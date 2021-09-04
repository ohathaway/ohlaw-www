<template>
  <div>
    <div class="row no-gutters" id="service-estate-planning">
      <div class="col-lg service-img">
        <img src="/img/estatenotebook_1024_smallest.jpg">
      </div>
      <div class="col-lg service-text service-text-right">
        <div class="p-3 pt-lg-5 px-lg-4">
          <h4>Estate Planning</h4>
          <p>You work hard toward your life’s accomplishments. Whether that includes some measure of wealth, a business legacy, or raising a family you are proud of, the way you pass it all on to the people and causes you care about is an
            important part of your life’s plan. We can help you express your wishes for what happens to you and your estate when you no longer can express them.</p>
          <!--p><a class="btn btn-outline-primary learn-more estate-planning" data-toggle="collapse" data-target=".service-description.estate-planning">Learn more</a></p-->
          <b-button v-b-toggle.service-description-estate-planning variant="outline-primary">Learn more</b-button>
        </div>
      </div>
    </div>
    <b-collapse class="row service-description estate-planning bg-white collapse" id="service-description-estate-planning">
      <div class="col-3 bg-primary cta-sidebar p-5" id="cta-sidebar-estate-planning">
        <h3 class="text-white text-center pb-4">Contact us now<br> for a<br> Free Consultation</h3>
        <form action="#">
          <input type="hidden" name="service-form-name" value="estate-planning">
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
        <h2>Estate Planning Services</h2>
          <p>You work hard toward your life’s accomplishments. Whether that includes some measure of wealth, a business legacy, or raising a family you are proud of, the way you pass it all on to the people and causes you care about is an
            important part of your life’s plan. We can help you express your wishes for what happens to you and your estate when you no longer can express them.</p>
          <p>We believe that everyone should have at least a minimal estate plan in a place to make sure that things go the way they want them. A basic estate plan contains four documents: 1) a will; 2) a living will; 3) a durable medical power
            of attorney; and 4) a statement of burial instructions. Most people will also find that additional tools will help make life easier for the folks they leave behind. We use trusts in a variety of ways to help with tax planning,
            probate avoidance, handling specialized assets such as firearms, and more. We can help you understand all of these tools and how to create a plan that protects your life investment.</p>
          <p>If you own a business, we find it extremely helpful to build your estate plan with an attorney who also has the knowledge and experience in business law to make sure your business interests align with your estate plan. Your business
            is a big part of your legacy, and failure to plan well can leave that legacy to the wolves when you are gone. Good estate planning for a business owner will necessarily include good succession planning for the business. Check out our
            easy options to get the process started.</p>
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
  name: 'EstatePlanning',
  components: {
    'b-button': BButton,
    'b-collapse': BCollapse
  },
  directives: {
    'b-toggle': VBToggle
  }
}
</script>
