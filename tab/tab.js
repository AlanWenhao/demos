$( function() {
    //插件封装
    $.fn.extend( {
        tab: function(){
            var $target = $( '.js-tab' );

            if ( $target.length > 0 ) {
                $target.each( function( index, item ) {
                    var $currentTabs = $( item );
                    var $buttons = $currentTabs.find( '.c-tabs__button' );
                    var $currentTabList = $currentTabs.find( '.c-tabs__list' );
                    var $currentMore = $currentTabList.find( '.c-tabs__more' );

                    $currentTabList.find( '.c-tabs__tab' ).first().addClass( 'is-active' );
                    $currentTabs.find( '.c-tabs__panel' ).eq( 0 ).show();

                    $currentTabList.on( 'click', '.c-tabs__button', function( event ) {

                        if ( event.preventDefault ) {
                            event.preventDefault();
                        } else {
                            event.returnValue = false;
                        }

                        var $buttons = $currentTabs.find( '.c-tabs__button' );
                        var $currentButton = $( event.currentTarget );
                        var count = $currentButton.closest( '.c-tabs__tab' ).index();
                        var $currentPanel = $currentTabs.find( '.c-tabs__panel' ).eq( count );

                        $buttons.removeClass( '' )
                        $currentButton.addClass( 'is-active' );
                        $currentPanel.show().siblings().hide();

                    } );
                } );
            }

        }
    } );

    // 执行扩展方法
    $( '.js-tab' ).tab();

} );