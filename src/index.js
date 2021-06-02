var type = 0;
var index = 0;
$(function() {
	$('.nav').click(function() {
		type = $(this).index();
		$(this).addClass('selected');
		$(this).siblings().removeClass('selected');
	});
	$('.btn').click(function() {
		index = $(this).index();
		var name = $(this).attr('id');
		if (name.indexOf('Compare') != -1) {
			name = 'compareSort';
		}
		if (name.indexOf('Search') != -1) {
			name = 'search';
		}
		var current = $(this).parent('.buttonList').children().eq(index);
		$(current).css('background', 'rgb(68, 68, 229)');
		$(current).siblings().css('background', '');
		var indexP = $(this).parents('.arithmeticList').index();
		$(this).parents('.arithmeticList').siblings('.arithmeticList').children('.buttonList').children().css('background', '');
		var items = document.getElementsByTagName('a');
		items[indexP].href = name + ".html";
	});
	$('.length').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.init').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.serialNumber').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.insertNumber').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.insertGo').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.deleteNumber').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.deleteGo').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subS1').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subS2').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subS3').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subT1').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subT2').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subU1').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subU2').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subU3').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subX1').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subX2').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subX3').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subX4').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subC1').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subC2').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subV1').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subV2').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subW1').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subW2').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subW3').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subY1').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subY2').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subY3').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subA1').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subD1').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subH1').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.subB1').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.primStarts p').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.kruStarts p').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.codes p').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(62, 62, 228)');
	});
	var stateFlag = 1;
	$('.stateHide').click(function() {
		if (stateFlag == 0) {
			$(this).children().css('transform', 'rotate(360deg)');
			setTimeout('$(".state").show()', 100);
			$('.state').animate({
				'width': '350px',
			}, 300);
			stateFlag = 1;
		} else {
			$(this).children().css('transform', 'rotate(180deg)');
			setTimeout('$(".state").hide()', 100);
			$('.state').animate({
				'width': '0px',
			}, 100);
			stateFlag = 0;
		}
	});
	var codeFlag = 0;
	$('.codeHide').click(function() {
		if (codeFlag == 0) {
			$(this).children().css('transform', 'rotate(360deg)');
			setTimeout('$(".codes").show()', 100);
			$('.codes').animate({
				'width': '350px',
			}, 200);
			codeFlag = 1;
		} else {
			$(this).children().css('transform', 'rotate(180deg)');
			setTimeout('$(".codes").hide()', 100);
			$('.codes').animate({
				'width': '0px',
			}, 200);
			codeFlag = 0;
		}
	});
	var startFlag = 0;
	$('.startHide').click(function() {
		if (startFlag == 0) {
			$(this).children().css('transform', 'rotate(180deg)');
			setTimeout('$(".starts").show()', 100);
			$('.starts').animate({
				'width': '140px',
			}, 200);
			startFlag = 1;
		} else {
			$(this).children().css('transform', 'rotate(360deg)');
			setTimeout('$(".starts").hide()', 100);
			$('.subR1').hide();
			$('.subR2').hide();
			$('.subR3').hide();
			$('.starts').animate({
				'width': '0px',
			}, 200);
			startFlag = 0;
		}
	});
	$('.starts p').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(89, 229, 89)');
	});
	$('.starts p').click(function() {
		var str = $(this).attr('class');
		var s = str[str.length - 1];
		for (var i = 1; i < 4; i++) {
			if (i != s) {
				$('.subR' + i).hide();
			} else {
				$('.subR' + s).show();
				$('.length span,input').show()
				$('.init p').show();
				$('.init').animate({
					'width': '80px'
				}, 10);
				$('.length').animate({
					'width': '200px'
				}, 10);
			}
		};
	});
	$('.codes p').mouseenter(function() {
		$(this).css('background', 'black');
	}).mouseleave(function() {
		$(this).css('background', 'rgb(62, 62, 228)');
	});
	$('.init p').click(function() {
		stateFlag = 0;
		$('.stateHide img').click();
		var dataLength = $('.inputLength').val();
		if (dataLength != '') {
			currentOrderList.initCallBack(dataLength);
		}
		$('.inputLength').attr('value', '');
		$(this).hide();
		$('.init').animate({
			'width': '0'
		}, 10);
		$('.length span,input').hide();
		$('.length').animate({
			'width': '0'
		}, 10);
	});
	$('.insertGo p').click(function() {
		var serialNumber = $('.inputNumber').val();
		var arrayData = $('.inputInsertNumber').val();
		if (serialNumber != '' && arrayData != '') {
			currentOrderList.insertCallBack(serialNumber, arrayData);
		}
	});
	$('.deleteGo p').click(function() {
		var deleteNumber = $('.inputDeleteNumber').val();
		if (deleteNumber != '') {
			currentOrderList.deleteCallBack(deleteNumber);
		}
	});
	var stackStartFlag = 0;
	$('.startHide').click(function() {
		if (stackStartFlag == 0) {
			$(this).children().css('transform', 'rotate(180deg)');
			setTimeout('$(".stackStarts").show()', 100);
			$('.stackStarts').animate({
				'width': '140px',
			}, 200);
			stackStartFlag = 1;
		} else {
			$(this).children().css('transform', 'rotate(360deg)');
			setTimeout('$(".stackStarts").hide()', 100);
			$('.subS1').hide();
			$('.subS2').hide();
			$('.subS3').hide();
			$('.stackStarts').animate({
				'width': '0px',
			}, 200);
			stackStartFlag = 0;
		}
	});
	$('.stackStarts p').click(function() {
		var str = $(this).attr('class');
		var s = str[str.length - 1];
		for (var i = 1; i < 4; i++) {
			if (i != s) {
				$('.subS' + i).hide();
			} else {
				$('.subS' + s).show();
				$('.stackLength span,input').show()
				$('.stackInit p').show();
				$('.stackInit').animate({
					'width': '80px'
				}, 10);
				$('.stackLength').animate({
					'width': '200px'
				}, 10);
			}
		};
	});
	var primStartFlag = 0;
	$('.primStartHide').click(function() {
		if (primStartFlag == 0) {
			$(this).children().css('transform', 'rotate(180deg)');
			setTimeout('$(".primStarts").show()', 100);
			$('.primStarts').animate({
				'width': '140px',
			}, 200);
			primStartFlag = 1;
		} else {
			$(this).children().css('transform', 'rotate(360deg)');
			setTimeout('$(".primStarts").hide()', 100);
			$('.subX1').hide();
			$('.subX2').hide();
			$('.subX3').hide();
			$('.primStarts').animate({
				'width': '0px',
			}, 200);
			primStartFlag = 0;
		}
	});
	$('.primStarts p').click(function() {
		var str = $(this).attr('class');
		var s = str[str.length - 1];
		for (var i = 1; i < 5; i++) {
			if (i != s) {
				$('.subX' + i).hide();
			} else {
				$('.subX' + s).show();
			}
		};
	});
	$('.createPrimGraph').click(function() {
		var peakNumber = parseInt($('.peakPrimNumber').val());
		if (!isNaN(peakNumber)) {
			vertexNumSelectChangeCallBack(peakNumber);
			randomGraphCallBack();
		} else {
			randomGraphCallBack();
		}
		$('.peakPrimNumber').val('');
	});
	$('.addPrimEdge').click(function() {
		var startNumber = parseInt($('.startPrimNumber').val());
		var endNumber = parseInt($('.endPrimNumber').val());
		var weight = parseInt($('.weightPrimNumber').val());
		if (!isNaN(startNumber) && !isNaN(endNumber)) {
			addEdgeCallBack(startNumber, endNumber, weight);
		}
		$('.startPrimNumber').val('');
		$('.endPrimNumber').val('');
	});
	$('.deletePrimEdge').click(function() {
		var startNumber = parseInt($('.startPrimNumber').val());
		var endNumber = parseInt($('.endPrimNumber').val());
		if (!isNaN(startNumber) && !isNaN(endNumber)) {
			delEdgeCallBack(startNumber, endNumber);
		}
		$('.startPrimNumber').val('');
		$('.endprimNumber').val('');
	});
	$('.Prim').click(function() {
		var runNumber = parseInt($('.runPrimNumber').val());
		runPrimCallBack(runNumber);
	});
	var kruStartFlag = 0;
	$('.kruStartHide').click(function() {
		if (kruStartFlag == 0) {
			$(this).children().css('transform', 'rotate(180deg)');
			setTimeout('$(".kruStarts").show()', 100);
			$('.kruStarts').animate({
				'width': '140px',
			}, 200);
			kruStartFlag = 1;
		} else {
			$(this).children().css('transform', 'rotate(360deg)');
			setTimeout('$(".kruStarts").hide()', 100);
			$('.subX1').hide();
			$('.subX2').hide();
			$('.subX3').hide();
			$('.kruStarts').animate({
				'width': '0px',
			}, 200);
			kruStartFlag = 0;
		}
	});
	$('.kruStarts p').click(function() {
		var str = $(this).attr('class');
		var s = str[str.length - 1];
		for (var i = 1; i < 5; i++) {
			if (i != s) {
				$('.subX' + i).hide();
			} else {
				$('.subX' + s).show();
			}
		};
	});
	$('.createKruGraph').click(function() {
		var peakNumber = parseInt($('.peakKruNumber').val());
		if (!isNaN(peakNumber)) {
			vertexNumSelectChangeCallBack(peakNumber);
			randomGraphCallBack();
		} else {
			randomGraphCallBack();
		}
		$('.peakKruNumber').val('');
	});
	$('.addKruEdge').click(function() {
		var startNumber = parseInt($('.startKruNumber').val());
		var endNumber = parseInt($('.endKruNumber').val());
		var weight = parseInt($('.weightKruNumber').val());
		if (!isNaN(startNumber) && !isNaN(endNumber)) {
			addEdgeCallBack(startNumber, endNumber, weight);
		}
		$('.startKruNumber').val('');
		$('.endKruNumber').val('');
	});
	$('.deleteKruEdge').click(function() {
		var startNumber = parseInt($('.startKruNumber').val());
		var endNumber = parseInt($('.endKruNumber').val());
		if (!isNaN(startNumber) && !isNaN(endNumber)) {
			delEdgeCallBack(startNumber, endNumber);
		}
		$('.startKruNumber').val('');
		$('.endKruNumber').val('');
	});
	$('.Kruskal').click(function() {
		runKruskalCallBack();
	});
});

function ini() {
	var url = document.location.search;
	index = url[1];
	type = index;
	$('.navList').children().eq(type).addClass('selected');
	$('.navList').children().eq(type).siblings().removeClass('selected');
}

function back() {
	window.location.href = "index.html";
}

function enterFun(obj) {
	$(obj).css('background', 'black');
}

function leaveFun(obj) {
	$(obj).css('background', 'rgb(89, 229, 89)');
}