;(function($)
{
    imagesPerPage = 10;
    globalCounter = 0;

    $(document).ready(function()
    {
        gridWidth = ($(window).width()/3)-5;
        order = shuffleImages();
        //create initial imageset
        for(i=0;i<imagesPerPage;i++) {
           getNextPicture();
        }
    });

    function getNextPicture(){
        this.globalCounter++;
         $("<img />").attr('src', 'images/' + order[this.globalCounter] + '.gif')
                    .attr('width',gridWidth)
                    .load(function() {
                        if (!this.complete || typeof this.naturalWidth == "undefined" || this.naturalWidth == 0) {
                            alert('broken image!');
                        } else {
                            $("#container").append(this);
                            $('#container').freetile({
                                animate : true,
                                elementDelay : 300
                            });
                            var self = this;
                            setTimeout(
                                function()
                                {
                                    self.remove();
                                    getNextPicture();
                                }, randomIntFromInterval(5000,60000));
                        }
                    });
    }


    function randomIntFromInterval(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

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
