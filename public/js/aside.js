function sidebar_toggle() {
        
    var duration = 300;
    var $side = $('#sidebar');

    // side의 클래스를 open으로 토글함
    $side.toggleClass('open');

    if ($side.hasClass('open')) {
      $side.stop(true).animate({
        right: '0px'
      }, duration);
    } else {
      $side.stop(true).animate({
        right: '-900px'
      }, duration);
    };
};

/*
    //사이드바_old
    $(function () {
      var duration = 300;

      var $side = $('#sidebar');
      // #sidebar 버튼 클릭시
      var $sidebt = $side.find('button').on('click', function () {
        $side.toggleClass('open');

        if ($side.hasClass('open')) {
          $side.stop(true).animate({
            right: '0px'
          }, duration);
          $sidebt.find('span').text('X');
        } else {
          $side.stop(true).animate({
            right: '-900px'
          }, duration);
          $sidebt.find('span').text('그래프');
        };
      });
    });
    */
    