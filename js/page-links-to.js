// Generated by CoffeeScript 1.6.1
(function(){jQuery(function(e){return e("input[type=radio]","#page-links-to").change(function(){var t;t=e("#txfx-links-to-alternate-section");return e(this).val()==="wp"?t.css({height:t.height()+"px"}).fadeTo("normal",0,function(){return e(this).slideUp()}):t.slideDown("normal",function(){return e(this).fadeTo("normal",1,function(){var t;t=e("#txfx-links-to");return t.focus().val(t.val())})})})})}).call(this);