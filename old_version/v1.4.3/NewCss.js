function NewCss(start) {
	if (start == null) {
		var start = ("[newCss=\"1\"]");
	}
	var elems = $(start);
	for (var j = 0; j < elems.length; j++) {
		var elem = elems[j];
		var u = $(elem).attr("do");
		switch (u) {
			case "onblock":
				onblock(elem);
				break;
			case "underblock":
				underblock(elem);
				break;
			case "incenter":
				incenter(elem);
				break;
			case "custom":
				custom(elem);
				break;
			case "clear":
				clear(elem);
				break;
			case "aboveblock":
				aboveblock(elem);
				break;
			case "leftblock":
				leftblock(elem);
				break;
			case "rightblock":
				rightblock(elem);
				break;
			case "ClickSwitch":
				ClickSwitch(elem);
				break;
			case "drag_drop":
				drag_drop(elem);
				break;
			case "watermark":
				watermark(elem);
				break;

			case "":
				break;
			case undefined:
				break;
			default:
				alert(u + " �� ��������� ");
		}
	}
}
var GodObj = {};
function onblock(elem) {
	var linkelem = $(elem).attr("linkelem");
	var object = $(linkelem).offset();
	var width3 = $(linkelem).width() + "px";
	var height3 = $(linkelem).height() + "px";
	$(elem).offset({
		"top": object.top,
		"left": object.left
	});
	var Zindex = $(elem).attr("Zindex");
	if (Zindex == false) {
		var Zindex = 10
	}
	$(elem).css({
		"width": width3,
		"height": height3,
		"z-index": Zindex
	});
	if ($(elem).attr("CreateRulle") == "1") {
		var apo = $(elem).attr("class");
		$('head').append("<style> ." + apo + "{ top:" + object.top + "px ;left:" + object.left + "px;width:" + width3 + "px;height:" + height3 + "px;z-index:" + Zindex + ";} </style>");
		$(elem).removeAttr("CreateRulle");
	}
}

function underblock(elem) {
	var linkelem = $(elem).attr("linkelem");
	var object = $(linkelem).offset();
	var width3 = $(linkelem).width() + "px";
	var height1 = $(linkelem).height();
	var top = object.top;
	var top = top + height1;
	$(elem).offset({
		"top": top,
		"left": object.left
	});
	$(elem).css({
		"width": width3
	});
	if ($(elem).attr("CreateRulle") == "1") {
		var apo = $(elem).attr("class");
		var apo = apo[0];
		$('head').append("<style> ." + apo + "{ top:" + top + "px ;left:" + object.left + "px ;width:" + width3 + "px ;} </style>");
		$(elem).removeAttr("CreateRulle");
	}
}

function aboveblock(elem) {
	var linkelem = $(elem).attr("linkelem");
	var object = $(linkelem).offset();
	var width3 = $(linkelem).width() + "px";
	var height1 = $(linkelem).height();
	var height2 = $(elem).height();
	var top = object.top;
	var top = top - height2;
	$(elem).offset({
		"top": top,
		"left": object.left
	});
	$(elem).css({
		"width": width3
	});
	if ($(elem).attr("CreateRulle") == "1") {
		var apo = $(elem).attr("class");
		$('head').append("<style> ." + apo + "{ top:" + top + "px ;left:" + object.left + "px;width:" + width3 + "px;} </style>");
		$(elem).removeAttr("CreateRulle");;
	}
}

function leftblock(elem) {
	var linkelem = $(elem).attr("linkelem");
	var object = $(linkelem).offset();
	var height3 = $(linkelem).height() + "px";
	var width1 = $(linkelem).width();
	var width2 = $(elem).width();
	var left = object.left;
	var left = left - width2;
	$(elem).css({
		"height": height3
	});
	$(elem).offset({
		"top": object.top,
		"left": left
	});
	if ($(elem).attr("CreateRulle") == "1") {
		var apo = $(elem).attr("class");
		$('head').append("<style> ." + apo + "{ top:" + object.top + "px ;left:" + left + "px;height:" + height3 + "px;} </style>");
		$(elem).removeAttr("CreateRulle");;
	}
}

function rightblock(elem) {
	var linkelem = $(elem).attr("linkelem");
	var object = $(linkelem).offset();
	var height3 = $(linkelem).height() + "px";
	var width1 = $(linkelem).width();
	var width2 = $(elem).width();
	var left = object.left;
	var left = left + width1;
	$(elem).css({
		"height": height3
	});
	$(elem).offset({
		"top": object.top,
		"left": left
	});
	if ($(elem).attr("CreateRulle") == "1") {
		var apo = $(elem).attr("class");
		$('head').append("<style> ." + apo + "{ top:" + object.top + "px ;left:" + left + "px;height:" + height3 + "px;} </style>");
		$(elem).removeAttr("CreateRulle");;
	}

}

function incenter(elem) {
	var linkelem = $(elem).attr("linkelem");
	var object = $(linkelem).offset();
	var width1 = $(linkelem).width();
	var height1 = $(linkelem).height();
	var width2 = $(elem).width();
	var height2 = $(elem).height();
	var top = object.top + (height1 / 2) - (height2 / 2);
	var left = object.left + (width1 / 2) - (width2 / 2);

	if ($(elem).attr("CreateRulle") == "1") {
		var apo = $(elem).attr("class");
		$('head').append("<style> ." + apo + "{ top:" + top + "px;left:" + left + "px;} </style>");
		$(elem).removeAttr("CreateRulle");;
	} else if ($(elem).attr("CreateRulle") == "2") {
		$(elem).css({
			"top": top + "px",
			"left": left + "px"
		})
	} else {
		$(elem).offset({
			"top": top,
			"left": left
		});
	}
}

function custom(elem) {
	var linkelem = $(elem).attr("linkelem");
	var object = $(linkelem).offset();
	var width1 = $(linkelem).width();
	var height1 = $(linkelem).height();
	var width4 = $(window).width();
	var height4 = $(window).height();
	var width2 = $(elem).width();
	var height2 = $(elem).height();
	var top2 = $(elem).attr("top");
	var left2 = $(elem).attr("left");
	if (top2 == undefined || top2 == false) {
		var top2 = 0
	}
	if (left2 == undefined || left2 == false) {
		var left2 = 0
	}
	if (String(top2).match(/%/)) {
		var top2 = top2.substring(0, top2.length - 1);
		var top2 = width4 / 100 * +top2
	}
	if (String(left2).match(/%/)) {
		var left2 = left2.substring(0, left2.length - 1);
		var left2 = height4 / 100 * +left2
	}
	var top = object.top + height1 / 2 - height2 / 2 + +top2;
	var left = object.left + width1 / 2 - width2 / 2 + +left2;
	$(elem).offset({
		"top": top,
		"left": left
	});
	if ($(elem).attr("CreateRulle") == "1") {
		var apo = $(elem).attr("class");
		$('head').append("<style> ." + apo + "{ top:" + top + "px ;left:" + left + "px ;} </style>");
		$(elem).removeAttr("CreateRulle");;
	}
}

function drag_drop(elem) {
	var linkelem = $(elem).attr("linkelem");
	if (linkelem) {
		var hold = $(elem).attr("hold");
		if (hold == "1") {
			$(elem).attr("onmousedown", "h_s(this,'" + linkelem + "')");
		} else {
			$(elem).attr("onclick", "d_d(this,'" + linkelem + "')");
		}
	} else {
		var hold = $(elem).attr("hold");
		if (hold == "1") {
			$(elem).attr("onmousedown", "h_s(this)");
		} else {
			$(elem).attr("onclick", "d_d(this)");
		}
	}
}
function d_d(elem, linkelem = false) {
	if (!linkelem) { linkelem2 = elem } else { linkelem2 = linkelem }
	$(linkelem2).css({
		"opacity": "1",
		"cursor": "pointer",
		"z-index": "9999"
	})
	var cc = $(linkelem2).attr("clickclack")
	if (cc != "1") {
		$(linkelem2).attr("clickclack", "1")
		$(linkelem2).css({
			"opacity": "0.5",
			"cursor": "move"
		})
		$(document).mousemove(function r(e) {
			var Px = e.pageX;
			var Py = e.pageY;
			var width2 = $(elem).width();
			var height2 = $(elem).height();
			var top = Py - height2 / 2;
			var left = Px - width2 / 2;
			$("[clickclack=\"1\"]").offset({
				"top": top,
				"left": left
			});
			if ($(linkelem2).attr("CreateRulle") == "1") {
			}
		});
	} else {
		$(linkelem2).attr("clickclack", "0");
		$(linkelem2).css({
			"opacity": "1",
			"cursor": "pointer"
		});
	}
}
function h_s(elem, linkelem = false) {
	if (!linkelem) { linkelem2 = elem } else { linkelem2 = linkelem }
	$(linkelem2).css({
		"opacity": "1",
		"cursor": "pointer",
		"z-index": "9999",
		"-moz-user-select": "-moz-none",
		"-o-user-select": "none",
		"-khtml-user-select": "none",
		"-webkit-user-select": "none",
		"user-select": "none"
	})
	var h = $(linkelem2).attr("h")
	if (h != "1") {
		$(linkelem2).attr("h", "1")
		$(linkelem2).css({
			"opacity": "0.5",
			"cursor": "move",
			"-moz-user-select": "-moz-none",
			"-o-user-select": "none",
			"-khtml-user-select": "none",
			"-webkit-user-select": "none",
			"user-select": "none"
		})

		$(document).mousemove(function r(e) {
			var Px = e.pageX;
			var Py = e.pageY;
			var width2 = $(elem).width();
			var height2 = $(elem).height();
			var top = Py - height2 / 2;
			var left = Px - width2 / 2;
			$("[h=\"1\"]").offset({
				"top": top,
				"left": left
			});
			if ($(elem).attr("CreateRulle") == "1") {
			}
		});
	}
	$(document).mouseup(function y(e) {
		$(linkelem2).attr("h", "0");
		$(linkelem2).css({
			"opacity": "1",
			"z-index": "auto",
			"cursor": "pointer",
			"-moz-user-select": "-moz-none",
			"-o-user-select": "none",
			"-khtml-user-select": "none",
			"-webkit-user-select": "none",
			"user-select": "none"
		});
	});
}

function ClickSwitch(elem) {
	$(elem).attr("onclick", "checkclik(this)");
	var linkelem = $(elem).attr("linkelem");
	if (linkelem == false || linkelem == undefined) {
		var linkelem = elem
	}
	var classX = $(linkelem).attr("class");
	GodObj.classX = classX;
}

function checkclik(elem) {
	var linkelem = $(elem).attr("linkelem");
	if (linkelem == false || linkelem == undefined) {
		var linkelem = elem
	}
	var h = $(elem).attr("cc");
	if (h == false || h == undefined) {
		$(elem).attr("cc", "1");
	} else {
		if (h == "1") {
			$(elem).attr("cc", "0");
		}
	}
	var h = $(elem).attr("cc");
	var classX = GodObj.classX;
	var class0 = $.trim($(elem).attr("class0"));
	var class1 = $.trim($(elem).attr("class1"));
	if (classX == class0 || classX == class1) {
		switch (h) {
			case "1":
				$(linkelem).attr("class", class0);

				break;
			case "0":
				$(linkelem).attr("class", class1);
				break;
		}
	} else {
		switch (h) {
			case "1":
				$(linkelem).attr("class", classX + " " + class0);

				break;
			case "0":
				$(linkelem).attr("class", classX + " " + class1);
				break;
		}
	}
}

function clear(elem) {
	$(elem).removeAttr("style");
}

function watermark(elem) {
	var ok = $(elem).attr('ok');
	if (ok != true) {
		var watermark = $(elem).attr('watermark');
		var img = $(elem).attr('src');
		$(elem).css({
			"background-image": "url(" + img + ")"
		});
		$(elem).attr('src', watermark);
		$(elem).attr('ok', "1");
	}
}

