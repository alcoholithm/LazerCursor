/*
 *  
 *  1. 클래스 설계 - options 사항
 *  2. 마우스가 무브할때 클래스가 호출되는게 아니라 다른방식으로 해야할것 같다.
 *
 *	FIXME
 * 1. 옵션 추가해야함 
 * 2. Git 테스트 
 */

$(function() {

	LazerCursor = function() {
		var defaults = {
			backgroundColor : '#FFFFF',
			etc : 'and so on'
		}

		// Init Func
		this.init = function(options) {
			var settings = $.extend({}, defaults, options);
			console.log(settings);
		}
		//Move Cursor
		this.moveCursor = function(e) {
			$('#lazer').css({
				left : e.pageX,
				top : e.pageY
			});
		}
	}
});

