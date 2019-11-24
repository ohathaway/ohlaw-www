var posts_endpoint = 'https://ohlawcolorado.com/wp-json/wp/v2/posts?_embed';

$(document).ready(function() {
  $.getJSON(posts_endpoint, function(data) {
    var posts = [];
    console.log("WP Posts: ", data);
  });
});
