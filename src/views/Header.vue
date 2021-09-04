<template>
  <header id="main-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <router-link class="navbar-brand" :to="{ name: 'Main'}"><img src="@/assets/img/ohlaw-logo-trans-450.svg" alt="The Law Offices of Owen Hathaway"></router-link>
      <button class="navbar-toggler mx-5" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse navbar-nav mr-auto mt-2" id="navbarToggler">
        <!--<ul class="navbar-nav mr-auto mt-2 mt-lg-0">-->
        <a class="nav-item nav-link" href="/#service-small-business">Small Business</a>
        <a class="nav-item nav-link" href="/#service-nonprofit">NonProfits</a>
        <a class="nav-item nav-link" href="/#service-estate-planning">Estate Planning</a>
        <a class="nav-item nav-link" href="/#service-bankruptcy">Bankruptcy</a>
        <a class="nav-item nav-link" href="/#generic-contact-form">Contact Us</a>
        <a class="nav-item nav-link" href="tel:+19708183052">970-818-3052</a>
        <!-- Display isn't right. Disabled since the content isn't up to date anyway
    <li class="nav-item">
      <a class="nav-link" href="https://www.facebook.com/ohlawCO/"><i class="fab fa-facebook-f"></i></a>
      <a class="nav-link" href="https://www.linkedin.com/company/22321647/"><i class="fab fa-linkedin-in"></i></a>
      <a class="nav-link" href="https://twitter.com/ohlawCO/"><i class="fab fa-twitter"></i></a>
      <a class="nav-link" href="https://ohlawcolorado.com/feeds/"><i class="fas fa-rss"></i></a>
    </li>
    -->
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
