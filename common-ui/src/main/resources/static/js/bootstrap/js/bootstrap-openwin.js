jQuery
		.extend({
			// 模态弹出框
			openModel : function(options) {
				var defaults = {// 设置默认参数
					title : '',// 模态框的标题
					width : '100%',// 模态框的默认宽度
					height : $(window).height() - 130 + "px",// 模态框的默认高度，默认取浏览器的可视高度
					showOkButton : true,// 是否显示确定按钮
					id : "model_js",// 模态框id
					frameId : "modal_iframe",// iframeId
					okButtonContent : "确定",// 确定按钮显示的内容
					cancelButtonContent : "关闭"// 取消按钮显示的内容
				}
				var opts = $.extend(defaults, options);
				var str = "";
				str += "<div class='modal fade' id='" + opts.id
						+ "' tabindex='-1' role='basic' aria-hidden='true'>";
				str += "    <div class='modal-dialog'>";
				str += "        <div class='modal-content'>";
				if (opts.title != "") {
					str += "        <div class='modal-header' style='height:30px;'>";
					str += "            <button type='button' class='close' data-dismiss='modal' aria-hidden='true' style='margin-top:-10px;'>x</button>";
					str += "            <h3 class='modal-title' style='margin-top:-10px;'><b>"
							+ opts.title + "</b></h3>";
					str += "        </div>";
				}
				str += "            <div class='modal-body' style='padding:0px;'>";
				str += "            </div>";
				str += "            <div class='modal-footer' style='height:35px;padding:0px;'>";
				if (opts.showOkButton) {
					str += "                <button type='button' class='btn btn-primary  btn-sm' onclick='"
							+ opts.ok
							+ "();'>"
							+ opts.okButtonContent
							+ "</button>";
				}
				str += "                <button type='button' class='btn btn-default  btn-sm' data-dismiss='modal'>"
						+ opts.cancelButtonContent + "</button>";
				str += "            </div>";
				str += "        </div>";
				str += "    </div>";
				str += "</div>";

				// 如果当前页面不选在当前id的模态框才追加模态框html

				if ($("body").find("#" + opts.id + "").length == 0) {
					$("body").append(str);
				} else {
					$("body").find("#" + opts.id + "").remove();
					$("body").append(str);
				}

				// 如果参数传递的宽度或者高度不是px格式的则加上px

				var height = (opts.height + "").indexOf("px") >= 0 ? opts.height
						: opts.height + "px";
				var width = (opts.width + "").indexOf("px") >= 0
						|| (opts.width + "").indexOf("%") >= 0 ? opts.width
						: opts.width + "px";

				// 设置页面iframe的地址

				$("#" + opts.id + "").find(".modal-body").html(
						"<iframe name='" + opts.frameId
								+ "' style='width:99%;height:" + height
								+ ";border:0px;' scrolling='yes' src='"
								+ opts.url + "'></iframe>");
				$("#" + opts.id + "").find(".modal-dialog").css({
					"width" : width,
					"height" : height
				});

				// 显示模态框

				$("#" + opts.id + "").modal("show");
			}
		});
