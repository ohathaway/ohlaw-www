<template>
  <footer class="row p-5">
      <div class="col footer-address">
        <ul class="list-unstyled">
          <li><a class="text-white" href="tel:+19708183052"><i class="fas fa-phone"></i>&nbsp;&nbsp;&nbsp;&nbsp;970-818-3052</a></li>
          <li><i class="fas fa-fax"></i>&nbsp;&nbsp;&nbsp;&nbsp;970-360-7028</li>
        </ul>
      </div>
      <div class="col-sm footer-address">
        <ul class="list-unstyled">
          <li><a href="https://goo.gl/maps/QaDjyDhbHFkbF4iE6"><i class="fas fa-map text-white"></i></a>&nbsp;&nbsp;&nbsp;<u>Ft. Collins Office:</u></li>
          <li>2580 E Harmony Rd</li>
          <li>Suite 201</li>
          <li>Fort Collins, CO 80528</li>
        </ul>
      </div>
      <div class="col-sm footer-address">
        <ul class="list-unstyled">
          <li><a href="https://goo.gl/maps/6EdMuLeM7A4ReLib9"><i class="fas fa-map text-white"></i></a>&nbsp;&nbsp;&nbsp;<u>Thornton Office:</u></li>
          <li>12301 Grant St.</li>
          <li>Suite 203</li>
          <li>Thornton, CO 80241</li>
        </ul>
      </div>
      <div class="col-md footer-address">
        <ul class="list-unstyled">
          <li><i class="fas fa-mail-bulk"></i>&nbsp;&nbsp;&nbsp;<u>Mailing Address:</u></li>
          <li>2601 S. Lemay Ave.
          <li>Suite 7-232</li>
          <li>Fort Collins, CO 80525</li>
        </ul>
      </div>
  </footer>
</template>

<script>
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

dom.watch()
library.add(fas, far)

export default {
  name: 'Footer',
  components: {
  }
}
</script>
