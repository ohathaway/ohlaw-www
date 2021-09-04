function get_posts () {
  var posts_endpoint = 'https://ohlawcolorado.com/wp-json/wp/v2/posts?_embed&per_page=100'
  function linkify (text) {
    var url_regex = /(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig
    return text.replace(url_regex, function (url) {
      return '<a href="' + url + '">' + url + '</a>'
    })
  };

  $.getJSON(posts_endpoint, function (data) {
    var posts = []

    // console.log("WP Posts: ", data);
    $('#blog-posts .posts').addClass('p-5')
    $.each(data, function (key, val) {
      const post_date = new Date(val.date)
      const post_html = '<h2>' + val.title.rendered + '</h2>' +
                      "<p class='subtitle'>posted: " + post_date.toDateString() + '</p>' +
                      "<p class='excerpt'>" + linkify(val.excerpt.rendered) + '</p>' +
                      "<a class='read-post' href='#'>read more</a>" +
                      '<hr>'

      $('#blog-posts .posts').append(post_html)
    })
  })
};

function bind_default_events () {
  // Most of these on this list are iterated in here somewheres
  const service_name_classes = ['small-business',
    'nonprofit',
    'estate-planning',
    'bankruptcy'
  ]

  function show_service_description (service_name_class, index, array) {
    var toggle = $('.learn-more.' + service_name_class)

    toggle.click(function (event) {
      toggle.fadeOut(600, function () {
        toggle.text(function (index, origText) {
          return (origText == 'Learn more') ? 'Show less' : 'Learn more'
        })
        const target = toggle.attr('href')
        // let target = document.getElementsByClassName(toggle.attr('data-target').replace(/\./, ""));
        console.log(target)
        // target[0].scrollIntoView({behavior: 'smooth'});
        toggle.fadeIn(600)
      })
    })
  }

  function contact_form_submitter (service) {
    const selector = '.row.service-description.' + service
    $(selector + ' .cta-sidebar form button.submit').click(function (event) {
      alert('clicked a submit')
      submit_contact_form(selector)
    })
  }

  function submit_contact_form (selector) {
    const form_data = {
      source_form: $(selector + ' input[name="service-form-name"]').val(),
      contact_name: $(selector + ' input[name="contact-name]"').val(),
      contact_email: $(selector + ' input[name="contact-email"]').val(),
      contact_phone: $(selector + ' input[name="contact-tel"]').val(),
      contact_issue: $(selector + ' textarea[name="contact-issue"]').text()
    }

    console.log(JSON.stringify(form_data))

    $.post('https://az9hgmyibk.execute-api.us-west-2.amazonaws.com/dev/contacts', form_data, function (result) {
      console.log('Post result: ', result)
    })
    // console.log("Form validity: ", $('#contact-name').checkValidity());
  }

  function smooth_scroll (target) {

  }
  service_name_classes.forEach(function (service) {
    show_service_description(service)
    contact_form_submitter(service)
  })
};

$(document).ready(function () {
  bind_default_events()
  // get_posts();

  window.onscroll = function scroll_header () {
    if (document.body.scrollTop > 53 || document.documentElement.scrollTop > 53) {
      $('#main-header').attr('style', 'font-size: 12px; line-height: 18px;')
      /* $('.navbar-brand > img').attr('style', 'width: 300px;'); */
    } else {
      $('#main-header').attr('style', 'font-size: 16px; line-height: 36px;')
      /* $('.navbar-brand > img').attr('style', 'width: 400px;'); */
    }
  }

  var news_toggle = $('.btn.breaking-news')

  news_toggle.click(function (event) {
    news_toggle.fadeOut(600, function () {
      news_toggle.text(function (index, origText) {
        return (origText == 'Hide') ? 'Show COVID-19 Info' : 'Hide'
      })
      const news_target = news_toggle.attr('href')
      news_toggle.fadeIn(600)
    })
  })
})
