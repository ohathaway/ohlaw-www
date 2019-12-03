var posts_endpoint = 'https://ohlawcolorado.com/wp-json/wp/v2/posts?_embed&per_page=100';


function get_posts() {
  function linkify(text) {
    var url_regex = /(\bhttps?:\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(url_regex, function(url){
      return '<a href="'+url+'">'+url+'</a>';
    })

  };

  $.getJSON(posts_endpoint, function(data) {
    var posts = [];

    console.log("WP Posts: ", data);
    $('#blog-posts .posts').addClass('p-5');
    $.each(data, function(key, val) {
      let post_date = new Date(val.date);
      let post_html = "<h2>"+val.title.rendered+"</h2>"+
                      "<p class='subtitle'>posted: "+post_date.toDateString()+"</p>"+
                      "<p class='excerpt'>"+linkify(val.excerpt.rendered)+"</p>"+
                      "<a class='read-post' href='#'>read more</a>"+
                      "<hr>"
                      ;

      $('#blog-posts .posts').append(post_html);
    });
  });
};

function bind_default_events() {

  // Most of these are iterated on this list
  let service_name_classes = ['small-business',
                              'nonprofit',
                              'estate-planning',
                              'bankruptcy'
      ];

  function show_service_description(service_name_class, index, array ) {
    var toggle = $('.learn-more.'+service_name_class);

    toggle.click(function(event){
      toggle.fadeOut(1300, function(){
        toggle.text(function(index, origText){
          return (origText == 'Learn more') ? 'Show less' : 'Learn more';
        });
        toggle.fadeIn(1300);
      });
    });
  }


  function contact_form_submitter(service) {
    let selector = '.row.service-description.'+service;
    $(selector+' .cta-sidebar form button.submit').click(function(event){


      let form_data = {
        "source_form": $(selector+' input[name="service-form-name"]').val(),
        "contact_name": $(selector+' input[name="contact-name]"').val(),
        "contact_email": $(selector+' input[name="contact-email"]').val(),
        "contact_phone": $(selector+' input[name="contact-tel"]').val(),
        "contact_issue": $(selector+' textarea[name="contact-issue"]').text()
      }

      console.log(JSON.stringify(form_data));

      $.post('https://az9hgmyibk.execute-api.us-west-2.amazonaws.com/dev/contacts', form_data, function(result){
        console.log("Post result: ", result);
      });
      //console.log("Form validity: ", $('#contact-name').checkValidity());
    });
  }

  service_name_classes.forEach(function(service){
    show_service_description(service);
    contact_form_submitter(service);
  });
};

$(document).ready(function() {
  bind_default_events();
  //get_posts();
});
