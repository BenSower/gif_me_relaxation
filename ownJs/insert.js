;(function($)
{
    $(document).ready(function()
    {
        order = shuffleImages();
        imagesPerPage = 10;
        gridWidth = ($(window).width()/3)-5;

        for(i=0;i<imagesPerPage;i++) {
            $('<img src="images/' + order[i] + '.gif">').width(gridWidth).appendTo('#container');
        }
        $('#container').freetile({
            animate : true,
            elementDelay : 30
        });
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
