<template>
  <section class="container-fluid" id="contact-form">
    <div class="row">
      <div class="col-0 mx-auto contact-form text-light">
        <h2 class="text-center">Get in touch, we'd love to hear from you</h2>
        <p class="mt-5"></p>
        <form action="#"><input type="hidden" name="service-form-name" value="Generic Contact">
          <div class="input-group mb-3">
            <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><i class="fas fa-user"></i></span></div><input name="contact-name" class="form-control" placeholder="Your Name" aria-label="Full Name"
              aria-describedby="basic-addon1" required="">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><i class="fas fa-at"></i></span></div><input type="email" name="contact-email" class="form-control" placeholder="Your email address"
              aria-label="Email Address" aria-describedby="contact-email" required="">
          </div>
          <div class="input-group mb-3">
            <div class="input-group-prepend"><span class="input-group-text" id="basic-addon1"><i class="fas fa-phone"></i></span></div><input type="tel" name="contact-tel" class="form-control" placeholder="Your phone number" aria-label="Phone Number"
              aria-describedby="contact-phone" required="">
          </div>
          <div class="form-group"><textarea class="form-control" name="contact-issue" rows="6" required="">What can we help you with?</textarea></div><button class="btn btn-secondary submit">Submit</button>
        </form>
        <p></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>
