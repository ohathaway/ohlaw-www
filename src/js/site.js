var posts_endpoint = 'https://ohlawcolorado.com/wp-json/wp/v2/posts?_embed&per_page=100';


function get_posts() {
  $.getJSON(posts_endpoint, function(data) {
    var posts = [];
    console.log("WP Posts: ", data);
  });
};

function bind_default_events() {

  function show_service_description(service_name_class, index, array ) {
    var toggle = $('.learn-more.'+service_name_class);

    toggle.click(function(event){
      toggle.fadeOut(1300, function(){
        toggle.text(function(index, origText){
          return (origText == 'Learn more') ? 'Show less' : 'Learn more';
        });
        toggle.removeClass('ui-active');
        toggle.fadeIn(1300);
      });
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
  get_posts();
});
