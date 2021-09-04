<template>
  <div>
    <main id="terms" class="container-fluid">
      <h1>Fees and Charges:</h1>
      <ol>
        <li>We offer legal services under two different fee structures, full representation and unbundled services. Some types of matters we handle only under full representation. Other types of matters we handle either way.</li>
        <li>After our first meeting, we may ask you to sign a fee letter in which the fee structure for our work together will be clearly spelled out.</li>
      </ol>
      <h2>Full Representation</h2>
      <ol start="3">
        <li>Under our full representation fee structures, you will be billed on an hourly basis for all time we spend working on your behalf. This includes any office or telephone discussions that we have with you, as well as initial consultations. In addition, we reserve the right to charge an additional fee based on various factors, such as the results, complexity, urgency or uniqueness of the matter.</li>
        <li>Our hourly fees presently are $225.00 an hour for attorneys and $100.00 an hour for paralegals. We attempt to assign your work in the most cost-effective manner; however, an attorney will supervise your case. We are not permitted to underwrite your expenses incurred in the representation. Hence, you are responsible for reimbursing us our out-of-pocket expenses that we advance in your representation (such as travel, tolls, filing fees, recording, government certificates, etc.) and our internal charges (such as long-distance telephone, facsimile transmissions, overnight or other courier service, photocopying, etc.). These various costs and expenses will be billed separately and reflected on your monthly billing statement.</li>
        <li>For full representation clients, we will request a fee deposit from you. We place this payment in a trust account to be held as deposit for your benefit. We will return any unused portion of this deposit at the conclusion of our representation.</li>
        <li>Our statements for services rendered and costs incurred are due and payable upon receipt. If a statement remains unpaid for more than thirty (30) days, we reserve the right upon notice to you to withhold further services until the statement is paid, and, in addition, we may decline further services following payment unless a satisfactory deposit is made towards the payment of future services. If legal action is undertaken to collect an account due, you will be liable for court costs and attorneys’ fees incurred plus a late payment charge of 5% of the delinquent balance.</li>
      </ol>
      <p>We are often asked how a client may keep legal fees to a minimum. This is our advice:</p>
      <ul>
        <li>Provide us with complete, accurate and organized information and documentation.</li>
        <li>Try not to change your mind in the middle of a transaction.</li>
        <li>Do not wait until the last minute. Last minute rushes require extraordinary measures and costs.</li>
        <li>Respond promptly to requests for information and for approval and execution of documents. Delays necessitate follow up measures which take time.</li>
      </ul>
      <h2>Fixed Fee Representation</h2>
      <ol start="7">
        <li>We offer certain types of representation at fixed fees. We can do so because we know the processes and can fairly predict the requirements of the representation. Typically, these engagements include a certain set of services with additional charges for things that happen outside the ordinary course of those matters. Our representation of you may or may not continue beyond delivery of the services depending on how we agree to proceed.</li>
      </ol>
      <h2>Unbundled Service Representation</h2>
      <ol start="8">
        <li>We offer certain types of services following an unbundled representation model. We can do so because we limit our representation strictly to the services purchased. These engagements include a certain set of services with additional charges for things that happen outside the ordinary course of those matters. Our representation of you stops once we deliver the service.</li>
      </ol>
      <h1>Our commitments:</h1>
      <ol type="a">
        <li>Consistent communication between the lawyers and clients.</li>
        <li>Respect for the legal system. This includes effective communications with the opposing parties, counsel for opposing parties, third-parties, and the Court. Respect for the legal system is best shown by honesty, timeliness and courtesy to all.</li>
        <li>Professional and community service.</li>
        <li>Investment in technology.</li>
      </ol>
      <h1>Terms of Engagement:</h1>
      <p>Our representation of you begins once you sign an engagement letter with us or we acknowledge acceptance of your representation in writing. Contacting us via our web site does not mean that we become your attorney. Purchasing a bundled service via our website does not mean that we become your attorney. You may terminate our services prospectively at any time upon written notice to us at which time we will return any unearned fees you have paid us. Likewise, the firm reserves the right to resign as counsel upon reasonable notice to you. If we are counsel of record for you in a litigation matter, we will tender an order for you to endorse authorizing our withdrawal as counsel. If you or we terminate our engagement, we will take reasonable steps to protect our and your interest in the matter for which we were engaged. Unless sooner terminated, our engagement as counsel will be concluded upon our sending you our final statement for services rendered, and thereafter, confidential information gained by us in our representation of you will continue to be held in confidence pursuant to the applicable rules of professional conduct.</p>
      <h1>Retention of Closed Files:</h1>
      <p>Upon completion of our representation, the files will be closed and indexed for our storage facility. The firm cannot keep old files forever and generally destroys files ten (10) years after the case has reached a final order or decree or when the case has been inactive for ten (10) years. The client has the responsibility to retrieve all personal papers or items from the file after completion of the case or prior to ten (10) years of inactivity, and authorizes the firm to destroy and/or discard the files in a secure manner after ten (10) years of inactivity. The client may be charged a “file retrieval” fee to retrieve files after the file is sent to storage. Some cases have different requirements based on various things. If the law requires us to retain your records longer than ten (10) years, we will comply with that record retention requirement.</p>
      <p>Our firm attempts to keep all files in digital format. Digital format files may be kept indefinitely, but not shorter than ten (10) years. Fees will apply for paper production of any files that exist only in digital format.</p>
      <p><em>At the conclusion of the representation, you should inform us if you wish to have your papers and/or property returned to you before the files are processed to the storage facility.</em></p>
      <p>Please remember that we provide an intangible product, legal services, and you may see only a small part of our efforts. This combination may result in questions, in your part, regarding our statement for services rendered and costs advanced. We urge you to call us as soon as questions arise. We find that frank and candid discussions answer most of these questions.</p>
      <p>We hope you find this information useful, and we look forward to working toward a successful resolution of the issues at hand.</p>
    </main>
    <ContactForm></ContactForm>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
  name: 'PoliciesFees',
  components: {
    ContactForm
  }
}
</script>

<style lang="scss">
#terms {
  background: #d8d8d8;
  padding: 3rem 20rem 150px 20rem;
}

#contact-form {
  padding-top: 5.5rem;
}
</style>
