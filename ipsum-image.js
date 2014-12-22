   (function(){
    var images = document.getElementsByTagName('img');

    var revert = function(x) {
      var ff = 0xff;
      return (ff - parseInt(x.slice(0,2), 16)).toString(16)
           + (ff - parseInt(x.slice(2,4), 16)).toString(16)
           + (ff - parseInt(x.slice(4,6), 16)).toString(16)
           ;
    }

    var getRandomColor = function(type){
      switch (type) {
        case 0:
          return '#'+(function(h){
            return new Array(7-h.length).join("0")+h
          })((Math.random()*0x1000000<<0).toString(16));
          break;
        case 1:
          return (function(r){
            var a = new Array(7-r.length).join("0")+r;
            return ['#'+a, '#'+revert(a)];
          })((Math.random()*0x1000000<<0).toString(16));
      }
    }

    for (var i=0,len=images.length; i<len; i++) {
      var img     = images[0]
        , attr    = img.attributes
        , width   = attr.w.value
        , height  = attr.h.value
        , canvas  = document.createElement('canvas')
        , ctx     = canvas.getContext('2d')
        , type    = parseInt(attr.type && attr.type.value) || 0
        , txt = width + '×' + height;
        ;

      canvas.width = width;
      canvas.height = height;
      ctx.font ="20px Georgia";

      switch (type) {
        case 0:
          ctx.fillStyle = getRandomColor(type);
          ctx.fillRect(0, 0, width, height);

          ctx.fillStyle = getRandomColor(type);
          ctx.fillText(txt, (width - ctx.measureText(txt).width)/2, height/2);

          break;
        case 1:
          var color = getRandomColor(type);

          console.log(color)
          ctx.fillStyle = color[0];
          ctx.fillRect(0, 0, width, height);

          ctx.fillStyle = color[1];
          ctx.fillText(txt, (width - ctx.measureText(txt).width)/2, height/2);
          break;
      }

      img.parentNode.replaceChild(canvas, img);
    }
  })()