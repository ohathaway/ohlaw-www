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
      let post_html = "<h2>"+val.title.rendered+"</h2>"+
                      "<p class='subtitle'>"+val.date+"</p>"+
                      "<p class='excerpt'>"+linkify(val.excerpt.rendered)+"</p>"+
                      "<a class='read-post' href='#'>read more</a>"+
                      "<hr>"
                      ;

      $('#blog-posts .posts').append(post_html);
    });
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
