 $('#drag1').draggable();
    $( "#div1" ).droppable({
        drop: function( event, ui ) {
          $( this )
            .addClass( "isDropped" )
            .html( "Dropped!" );
        }
      });