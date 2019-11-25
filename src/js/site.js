var posts_endpoint = 'https://ohlawcolorado.com/wp-json/wp/v2/posts?_embed';


function get_posts() {
  $.getJSON(posts_endpoint, function(data) {
    var posts = [];
    console.log("WP Posts: ", data);
  });
};

function bind_default_events() {

  function show_service_description(service_name_class, index, array ) {
    $('.learn-more.'+service_name_class).click(function(event){
      event.preventDefault();
      $('.service-description.'+service_name_class).removeClass('d-none');
      $('.show-less.'+service_name_class).removeClass('d-none');
      $('.learn-more.'+service_name_class).addClass('d-none');
    });

    $('.show-less.'+service_name_class).click(function(event){
      event.preventDefault();
      $('.service-description.'+service_name_class).addClass('d-none');
      $('.show-less.'+service_name_class).addClass('d-none');
      $('.learn-more.'+service_name_class).removeClass('d-none');
    });
  }

  let service_name_classes = ['small-business',
                              'nonprofit',
                              'estate-planning',
                              'bankruptcy'
      ];

  service_name_classes.forEach(show_service_description);
};

$(document).ready(function() {
  bind_default_events();
});
