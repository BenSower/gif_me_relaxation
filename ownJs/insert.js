;(function($)
{
    $(document).ready(function()
    {
        imagesPerPage = 10;
        gridWidth = ($(window).width()/3)-5;

        order = shuffleImages();

        for(i=0;i<imagesPerPage;i++) {
            $("<img />").attr('src', 'images/' + order[i] + '.gif')
                        .attr('width',gridWidth)
                        .load(function() {
                            if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
                                alert('broken image!');
                            } else {
                                $("#container").append(this);
                                $('#container').freetile({
                                    animate : true,
                                    elementDelay : 30
                                });
                            }
                        });
        }

    });

    function shuffleImages(){

        for (var a=[],i=0;i<imageCount;++i) a[i]=i;

        function shuffle(array) {
            var tmp, current, top = array.length;
            if(top) while(--top) {
              current = Math.floor(Math.random() * (top + 1));
              tmp = array[current];
              array[current] = array[top];
              array[top] = tmp;
            }
            return array;
        }

        return shuffle(a);
    }


})(jQuery)
