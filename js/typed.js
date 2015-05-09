$(function(){
    $(".element").typed({
      strings: ["First sentence.", "Second sentence."],
      typeSpeed: 0
      showCursor: true,
      cursorChar: "|",
      attr: null,
      contentType: 'html',
      callback: function() {},
      preStringTyped: function () {},
      onStringTyped: function () {},
      resetCallBack: function () {}
    });
});
