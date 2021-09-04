<template>
  <section class="container-fluid" id="lines-of-business">
    <SmallBusiness></SmallBusiness>
    <Nonprofits></Nonprofits>
    <EstatePlanning></EstatePlanning>
    <Bankruptcy></Bankruptcy>
  </section>
</template>

<script>
import SmallBusiness from './SmallBusiness'
import Nonprofits from './Nonprofits'
import EstatePlanning from './EstatePlanning'
import Bankruptcy from './Bankruptcy'

export default {
  name: 'LinesOfBusiness',
  components: {
    SmallBusiness,
    Nonprofits,
    EstatePlanning,
    Bankruptcy
  }
}
</script>
