// Garden Gnome Software - Skin
// Pano2VR 7.1.10/21009
// Filename: netov3.ggsk
// Generated 2025-07-26T22:02:15

function pano2vrSkin(player,base) {
	player.addVariable('vis_sounds_splashscreen', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_skin', 2, false, { ignoreInState: 1  });
	player.addVariable('vis_controls', 2, true, { ignoreInState: 0  });
	player.addVariable('controls_left_open', 2, false, { ignoreInState: 0  });
	player.addVariable('toggle_audio', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_info', 2, true, { ignoreInState: 0  });
	player.addVariable('vis_thumbs', 2, false, { ignoreInState: 0  });
	player.addVariable('has_categories', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbs_categories', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_thumbs_nodes', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_floorplan', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_map', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_info_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_image_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_pdf_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_youtube_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_vimeo_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_file_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_video_url_hs_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_popup', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_info', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_image', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_pdf', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_youtube', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_vimeo', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_file', 2, false, { ignoreInState: 0  });
	player.addVariable('vis_phone_video_url', 2, false, { ignoreInState: 0  });
	player.addVariable('opt_controller', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_info', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_gyro', 2, true, { ignoreInState: 1  });
	player.addVariable('opt_maps', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_floorplans', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_url_popup', 2, false, { ignoreInState: 1  });
	player.addVariable('height_controls_right', 1, 0, { ignoreInState: 0  });
	player.addVariable('height_controls_left', 1, 0, { ignoreInState: 0  });
	player.addVariable('has_fullscreen', 2, true, { ignoreInState: 1  });
	player.addVariable('sounds_splashscreen_accepted', 2, false, { ignoreInState: 0  });
	player.addVariable('resp_desktop', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_tablet', 2, false, { ignoreInState: 1  });
	player.addVariable('resp_phone', 2, false, { ignoreInState: 1  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		me._variable_vis_sounds_splashscreen = {};
		me._variable_vis_sounds_splashscreen.ggCurrentLogicState = -1;
		me._variable_vis_sounds_splashscreen.logicBlock = function() {
			var newLogicState_vis_sounds_splashscreen;
			if (
				((player.getHasSounds() == true)) && 
				((player.getSoundsPermitted() != 1)) && 
				((player.getVariableValue('sounds_splashscreen_accepted') == false))
			)
			{
				newLogicState_vis_sounds_splashscreen = 0;
			}
			else {
				newLogicState_vis_sounds_splashscreen = -1;
			}
			if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState != newLogicState_vis_sounds_splashscreen) {
				me._variable_vis_sounds_splashscreen.ggCurrentLogicState = newLogicState_vis_sounds_splashscreen;
				if (me._variable_vis_sounds_splashscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_sounds_splashscreen', true);
				}
				else {
					player.setVariableValue('vis_sounds_splashscreen', false);
				}
			}
		}
		me._variable_vis_skin = {};
		me._variable_vis_skin.ggCurrentLogicState = -1;
		me._variable_vis_skin.logicBlock = function() {
			var newLogicState_vis_skin;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == false))
			)
			{
				newLogicState_vis_skin = 0;
			}
			else {
				newLogicState_vis_skin = -1;
			}
			if (me._variable_vis_skin.ggCurrentLogicState != newLogicState_vis_skin) {
				me._variable_vis_skin.ggCurrentLogicState = newLogicState_vis_skin;
				if (me._variable_vis_skin.ggCurrentLogicState == 0) {
					player.setVariableValue('vis_skin', true);
				}
				else {
					player.setVariableValue('vis_skin', false);
				}
			}
		}
		me._variable_opt_maps = {};
		me._variable_opt_maps.ggCurrentLogicState = -1;
		me._variable_opt_maps.logicBlock = function() {
			var newLogicState_opt_maps;
			if (
				((player.hasMap() == true))
			)
			{
				newLogicState_opt_maps = 0;
			}
			else {
				newLogicState_opt_maps = -1;
			}
			if (me._variable_opt_maps.ggCurrentLogicState != newLogicState_opt_maps) {
				me._variable_opt_maps.ggCurrentLogicState = newLogicState_opt_maps;
				if (me._variable_opt_maps.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_maps', true);
				}
				else {
					player.setVariableValue('opt_maps', false);
				}
			}
		}
		me._variable_opt_floorplans = {};
		me._variable_opt_floorplans.ggCurrentLogicState = -1;
		me._variable_opt_floorplans.logicBlock = function() {
			var newLogicState_opt_floorplans;
			if (
				((player.hasFloorplan() == true))
			)
			{
				newLogicState_opt_floorplans = 0;
			}
			else {
				newLogicState_opt_floorplans = -1;
			}
			if (me._variable_opt_floorplans.ggCurrentLogicState != newLogicState_opt_floorplans) {
				me._variable_opt_floorplans.ggCurrentLogicState = newLogicState_opt_floorplans;
				if (me._variable_opt_floorplans.ggCurrentLogicState == 0) {
					player.setVariableValue('opt_floorplans', true);
				}
				else {
					player.setVariableValue('opt_floorplans', false);
				}
			}
		}
		me._variable_has_fullscreen = {};
		me._variable_has_fullscreen.ggCurrentLogicState = -1;
		me._variable_has_fullscreen.logicBlock = function() {
			var newLogicState_has_fullscreen;
			if (
				((player.getOS() == 4)) && 
				((player.getOS() != 6))
			)
			{
				newLogicState_has_fullscreen = 0;
			}
			else {
				newLogicState_has_fullscreen = -1;
			}
			if (me._variable_has_fullscreen.ggCurrentLogicState != newLogicState_has_fullscreen) {
				me._variable_has_fullscreen.ggCurrentLogicState = newLogicState_has_fullscreen;
				if (me._variable_has_fullscreen.ggCurrentLogicState == 0) {
					player.setVariableValue('has_fullscreen', false);
				}
				else {
					player.setVariableValue('has_fullscreen', true);
				}
			}
		}
		me._variable_resp_desktop = {};
		me._variable_resp_desktop.ggCurrentLogicState = -1;
		me._variable_resp_desktop.logicBlock = function() {
			var newLogicState_resp_desktop;
			if (
				((player.getViewerSize(true).width > 1024))
			)
			{
				newLogicState_resp_desktop = 0;
			}
			else {
				newLogicState_resp_desktop = -1;
			}
			if (me._variable_resp_desktop.ggCurrentLogicState != newLogicState_resp_desktop) {
				me._variable_resp_desktop.ggCurrentLogicState = newLogicState_resp_desktop;
				if (me._variable_resp_desktop.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_desktop', true);
				}
				else {
					player.setVariableValue('resp_desktop', false);
				}
			}
		}
		me._variable_resp_tablet = {};
		me._variable_resp_tablet.ggCurrentLogicState = -1;
		me._variable_resp_tablet.logicBlock = function() {
			var newLogicState_resp_tablet;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_tablet = 0;
			}
			else {
				newLogicState_resp_tablet = -1;
			}
			if (me._variable_resp_tablet.ggCurrentLogicState != newLogicState_resp_tablet) {
				me._variable_resp_tablet.ggCurrentLogicState = newLogicState_resp_tablet;
				if (me._variable_resp_tablet.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_tablet', true);
				}
				else {
					player.setVariableValue('resp_tablet', false);
				}
			}
		}
		me._variable_resp_phone = {};
		me._variable_resp_phone.ggCurrentLogicState = -1;
		me._variable_resp_phone.logicBlock = function() {
			var newLogicState_resp_phone;
			if (
				((player.getViewerSize(true).width <= 1024))
			)
			{
				newLogicState_resp_phone = 0;
			}
			else {
				newLogicState_resp_phone = -1;
			}
			if (me._variable_resp_phone.ggCurrentLogicState != newLogicState_resp_phone) {
				me._variable_resp_phone.ggCurrentLogicState = newLogicState_resp_phone;
				if (me._variable_resp_phone.ggCurrentLogicState == 0) {
					player.setVariableValue('resp_phone', true);
				}
				else {
					player.setVariableValue('resp_phone', false);
				}
			}
		}
		el=me._controls_container=document.createElement('div');
		el.ggId="controls_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_container.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controls_container.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true)) && 
				((player.getVariableValue('vis_phone_popup') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controls_container.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controls_container.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controls_container.style.transition='';
				if (me._controls_container.ggCurrentLogicStateVisible == 0) {
					me._controls_container.style.visibility=(Number(me._controls_container.style.opacity)>0||!me._controls_container.style.opacity)?'inherit':'hidden';
					me._controls_container.ggVisible=true;
				}
				else {
					me._controls_container.style.visibility="hidden";
					me._controls_container.ggVisible=false;
				}
			}
		}
		me._controls_container.logicBlock_visible();
		me._controls_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_back=document.createElement('div');
		el.ggId="btn_back";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 16px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_back.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._btn_back.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_back_icon=document.createElement('div');
		els=me._btn_back_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSI0Nyw0NS45IDMzLDMyIDMzLDMyIDQ3LDE4LjEgJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIzMSw0NS45IDE3'+
			'LDMyIDE3LDMyIDMxLDE4LjEgJiN4OTsiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_back_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_back_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSI0Nyw0NS45IDMzLDMyIDMzLDMyIDQ3LDE4LjEgJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIzMSw0NS45IDE3'+
			'LDMyIDE3LDMyIDMxLDE4LjEgJiN4OTsiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_back_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_back_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_back_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_back_icon.onmouseenter=function (e) {
			me._btn_back_icon__img.style.visibility='hidden';
			me._btn_back_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_back_icon']=true;
		}
		me._btn_back_icon.onmouseleave=function (e) {
			me._btn_back_icon__img.style.visibility='inherit';
			me._btn_back_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_back_icon']=false;
		}
		me._btn_back_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_back.appendChild(me._btn_back_icon);
		me._controls_container.appendChild(me._btn_back);
		el=me._btn_forward=document.createElement('div');
		el.ggId="btn_forward";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 0px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_forward.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_forward.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._btn_forward.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_forward_icon=document.createElement('div');
		els=me._btn_forward_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIxNywxOC4xIDMxLDMyIDMxLDMyIDE3LDQ1LjkgJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIzMywxOC4xIDQ3'+
			'LDMyIDQ3LDMyIDMzLDQ1LjkgJiN4OTsiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_forward_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_forward_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIxNywxOC4xIDMxLDMyIDMxLDMyIDE3LDQ1LjkgJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIzMywxOC4xIDQ3'+
			'LDMyIDQ3LDMyIDMzLDQ1LjkgJiN4OTsiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_forward_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_forward_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_forward_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_forward_icon.onmouseenter=function (e) {
			me._btn_forward_icon__img.style.visibility='hidden';
			me._btn_forward_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_forward_icon']=true;
		}
		me._btn_forward_icon.onmouseleave=function (e) {
			me._btn_forward_icon__img.style.visibility='inherit';
			me._btn_forward_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_forward_icon']=false;
		}
		me._btn_forward_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_forward.appendChild(me._btn_forward_icon);
		me._controls_container.appendChild(me._btn_forward);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 16px 0px 0px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 36px;';
		hs+='left : calc(50% - ((192px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 192px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_controls') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controller.style.transition='left 800ms ease 0ms, bottom 800ms ease 0ms';
				if (me._controller.ggCurrentLogicStatePosition == 0) {
					me._controller.style.left = 'calc(50% - (192px / 2))';
					me._controller.style.bottom='-36px';
				}
				else {
					me._controller.style.left='calc(50% - ((192px + 0px) / 2) + 0px)';
					me._controller.style.bottom='0px';
				}
			}
		}
		me._controller.logicBlock_position();
		me._controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_controller') == true)) && 
				((player.getVariableValue('resp_phone') == false)) && 
				((player.getOS() != 6)) && 
				((player.getOS() != 5))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller.style.transition='left 800ms ease 0ms, bottom 800ms ease 0ms';
				if (me._controller.ggCurrentLogicStateVisible == 0) {
					me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
					me._controller.ggVisible=true;
				}
				else {
					me._controller.style.visibility="hidden";
					me._controller.ggVisible=false;
				}
			}
		}
		me._controller.logicBlock_visible();
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_zoomout=document.createElement('div');
		els=me._btn_zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB5Mj0iMzIiIHgyPSI0OCIgeDE9IjE2IiBjbGFzcz0ic3QxIiB5MT0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_zoomout__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMzIiIHgyPSI0OCIgeDE9IjE2IiB5MT0iMzIiLz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._btn_zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -1px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_zoomout.onmouseenter=function (e) {
			me._btn_zoomout__img.style.visibility='hidden';
			me._btn_zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_zoomout']=true;
		}
		me._btn_zoomout.onmousedown=function (e) {
			me.elementMouseDown['btn_zoomout']=true;
		}
		me._btn_zoomout.onmouseup=function (e) {
			me.elementMouseDown['btn_zoomout']=false;
		}
		me._btn_zoomout.onmouseleave=function (e) {
			me._btn_zoomout__img.style.visibility='inherit';
			me._btn_zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['btn_zoomout']=false;
			me.elementMouseOver['btn_zoomout']=false;
		}
		me._btn_zoomout.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['btn_zoomout']) {
				player.changeFovLog(1,true);
			}
		}
		me._btn_zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._btn_zoomout);
		el=me._btn_zoomin=document.createElement('div');
		els=me._btn_zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB5Mj0iMzIiIHgyPSI0OCIgeDE9IjE2IiBjbGFzcz0ic3QxIiB5MT0iMzIiLz4KICA8bGluZSB5Mj0iNDgiIHgyPSIzMiIgeDE9IjMyIiBjbGFzcz0ic3QxIiB5'+
			'MT0iMTYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_zoomin__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iMzIiIHgyPSI0OCIgeDE9IjE2IiB5MT0iMzIiLz4KICA8bGluZSBzdH'+
			'lsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0OCIgeDI9IjMyIiB4MT0iMzIiIHkxPSIxNiIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 128px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_zoomin.onmouseenter=function (e) {
			me._btn_zoomin__img.style.visibility='hidden';
			me._btn_zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_zoomin']=true;
		}
		me._btn_zoomin.onmousedown=function (e) {
			me.elementMouseDown['btn_zoomin']=true;
		}
		me._btn_zoomin.onmouseup=function (e) {
			me.elementMouseDown['btn_zoomin']=false;
		}
		me._btn_zoomin.onmouseleave=function (e) {
			me._btn_zoomin__img.style.visibility='inherit';
			me._btn_zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['btn_zoomin']=false;
			me.elementMouseOver['btn_zoomin']=false;
		}
		me._btn_zoomin.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['btn_zoomin']) {
				player.changeFovLog(-1,true);
			}
		}
		me._btn_zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._btn_zoomin);
		el=me._btn_right=document.createElement('div');
		els=me._btn_right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIzNC4xLDE4LjEgNDgsMzIgNDgsMzIgMzQuMSw0NS45ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeTI9IjMyIiB4Mj0iNDYuNCIg'+
			'eDE9IjE2IiBjbGFzcz0ic3QxIiB5MT0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcG9pbnRzPSIzNC4wOCAxOC4wNiA0OCAzMi4wMSA0OCAzMi4wMSAzNC'+
			'4wOCA0NS45NCIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjMyIiB4Mj0iNDYuMzYiIHgxPSIxNiIgeTE9IjMyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_right.onmouseenter=function (e) {
			me._btn_right__img.style.visibility='hidden';
			me._btn_right__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_right']=true;
		}
		me._btn_right.onmousedown=function (e) {
			me.elementMouseDown['btn_right']=true;
		}
		me._btn_right.onmouseup=function (e) {
			me.elementMouseDown['btn_right']=false;
		}
		me._btn_right.onmouseleave=function (e) {
			me._btn_right__img.style.visibility='inherit';
			me._btn_right__imgo.style.visibility='hidden';
			me.elementMouseDown['btn_right']=false;
			me.elementMouseOver['btn_right']=false;
		}
		me._btn_right.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['btn_right']) {
				player.changePanLog(-1,true);
			}
		}
		me._btn_right.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._btn_right);
		el=me._btn_down=document.createElement('div');
		els=me._btn_down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSI0NS45LDM0LjEgMzIsNDggMzIsNDggMTguMSwzNC4xICYj'+
			'eDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeTI9IjQ2LjQiIHgyPSIzMiIgeDE9IjMyIiBjbGFzcz0ic3QxIiB5MT0iMTYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW'+
			'9wYWNpdHk6MSIgcG9pbnRzPSI0NS45NCAzNC4wOCAzMS45OSA0OCAzMS45OSA0OCAxOC4wNiAzNC4wOCIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQ2LjM2IiB4Mj0iMzIiIHgxPSIzMiIgeTE9IjE2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_down.onmouseenter=function (e) {
			me._btn_down__img.style.visibility='hidden';
			me._btn_down__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_down']=true;
		}
		me._btn_down.onmousedown=function (e) {
			me.elementMouseDown['btn_down']=true;
		}
		me._btn_down.onmouseup=function (e) {
			me.elementMouseDown['btn_down']=false;
		}
		me._btn_down.onmouseleave=function (e) {
			me._btn_down__img.style.visibility='inherit';
			me._btn_down__imgo.style.visibility='hidden';
			me.elementMouseDown['btn_down']=false;
			me.elementMouseOver['btn_down']=false;
		}
		me._btn_down.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['btn_down']) {
				player.changeTiltLog(-1,true);
			}
		}
		me._btn_down.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._btn_down);
		el=me._btn_up=document.createElement('div');
		els=me._btn_up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIxOC4xLDI5LjkgMzIsMTYgMzIsMTYgNDUuOSwyOS45ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeTI9IjE3LjYiIHgyPSIzMiIg'+
			'eDE9IjMyIiBjbGFzcz0ic3QxIiB5MT0iNDgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_up__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcG9pbnRzPSIxOC4wNiAyOS45MyAzMi4wMSAxNiAzMi4wMSAxNiA0NS'+
			'45NCAyOS45MyIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjE3LjY0IiB4Mj0iMzIiIHgxPSIzMiIgeTE9IjQ4Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_up.onmouseenter=function (e) {
			me._btn_up__img.style.visibility='hidden';
			me._btn_up__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_up']=true;
		}
		me._btn_up.onmousedown=function (e) {
			me.elementMouseDown['btn_up']=true;
		}
		me._btn_up.onmouseup=function (e) {
			me.elementMouseDown['btn_up']=false;
		}
		me._btn_up.onmouseleave=function (e) {
			me._btn_up__img.style.visibility='inherit';
			me._btn_up__imgo.style.visibility='hidden';
			me.elementMouseDown['btn_up']=false;
			me.elementMouseOver['btn_up']=false;
		}
		me._btn_up.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['btn_up']) {
				player.changeTiltLog(1,true);
			}
		}
		me._btn_up.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._btn_up);
		el=me._btn_left=document.createElement('div');
		els=me._btn_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIyOS45LDQ1LjkgMTYsMzIgMTYsMzIgMjkuOSwxOC4xICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeTI9IjMyIiB4Mj0iMTcuNiIg'+
			'eDE9IjQ4IiBjbGFzcz0ic3QxIiB5MT0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcG9pbnRzPSIyOS45MyA0NS45NCAxNiAzMS45OSAxNiAzMS45OSAyOS'+
			'45MyAxOC4wNiIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjMyIiB4Mj0iMTcuNjQiIHgxPSI0OCIgeTE9IjMyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_left.onmouseenter=function (e) {
			me._btn_left__img.style.visibility='hidden';
			me._btn_left__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_left']=true;
		}
		me._btn_left.onmousedown=function (e) {
			me.elementMouseDown['btn_left']=true;
		}
		me._btn_left.onmouseup=function (e) {
			me.elementMouseDown['btn_left']=false;
		}
		me._btn_left.onmouseleave=function (e) {
			me._btn_left__img.style.visibility='inherit';
			me._btn_left__imgo.style.visibility='hidden';
			me.elementMouseDown['btn_left']=false;
			me.elementMouseOver['btn_left']=false;
		}
		me._btn_left.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['btn_left']) {
				player.changePanLog(1,true);
			}
		}
		me._btn_left.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._btn_left);
		me._controls_container.appendChild(me._controller);
		el=me._controls_right=document.createElement('div');
		el.ggId="controls_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 0px 0px 16px;';
		hs+='bottom : 42px;';
		hs+='cursor : default;';
		hs+='height : 180px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_right.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_controls') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('controls_left_open') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controls_right.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controls_right.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controls_right.style.transition='right 800ms ease 0ms, bottom 800ms ease 0ms';
				if (me._controls_right.ggCurrentLogicStatePosition == 0) {
					me._controls_right.style.right='-36px';
					me._controls_right.style.bottom='42px';
				}
				else if (me._controls_right.ggCurrentLogicStatePosition == 1) {
					me._controls_right.style.right='-36px';
					me._controls_right.style.bottom='42px';
				}
				else {
					me._controls_right.style.right='0px';
					me._controls_right.style.bottom='42px';
				}
			}
		}
		me._controls_right.logicBlock_position();
		me._controls_right.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_toggle_audio=document.createElement('div');
		el.ggId="btn_toggle_audio";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_toggle_audio.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_toggle_audio.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getHasSounds() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_toggle_audio.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_toggle_audio.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_toggle_audio.style.transition='';
				if (me._btn_toggle_audio.ggCurrentLogicStateVisible == 0) {
					me._btn_toggle_audio.style.visibility=(Number(me._btn_toggle_audio.style.opacity)>0||!me._btn_toggle_audio.style.opacity)?'inherit':'hidden';
					me._btn_toggle_audio.ggVisible=true;
				}
				else {
					me._btn_toggle_audio.style.visibility="hidden";
					me._btn_toggle_audio.ggVisible=false;
				}
			}
		}
		me._btn_toggle_audio.logicBlock_visible();
		me._btn_toggle_audio.onclick=function (e) {
			player.setVariableValue('toggle_audio', !player.getVariableValue('toggle_audio'));
			player.toggleMuted("_all");
		}
		me._btn_toggle_audio.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_audio_off=document.createElement('div');
		els=me._btn_audio_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB5Mj0iMTUuOCIgeDI9IjQ3LjgiIHgxPSIxNS44IiBjbGFzcz0ic3QwIiB5MT0iNDcuOCIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_audio_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_audio_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB5Mj0iMTUuOCIgeDI9IjQ3LjgiIHgxPSIxNS44IiBjbGFzcz0ic3QwIiB5MT0iNDcuOCIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_audio_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_audio_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_audio_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio_off.style.transition='';
				if (me._btn_audio_off.ggCurrentLogicStateVisible == 0) {
					me._btn_audio_off.style.visibility="hidden";
					me._btn_audio_off.ggVisible=false;
				}
				else {
					me._btn_audio_off.style.visibility=(Number(me._btn_audio_off.style.opacity)>0||!me._btn_audio_off.style.opacity)?'inherit':'hidden';
					me._btn_audio_off.ggVisible=true;
				}
			}
		}
		me._btn_audio_off.logicBlock_visible();
		me._btn_audio_off.onmouseenter=function (e) {
			me._btn_audio_off__img.style.visibility='hidden';
			me._btn_audio_off__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_audio_off']=true;
		}
		me._btn_audio_off.onmouseleave=function (e) {
			me._btn_audio_off__img.style.visibility='inherit';
			me._btn_audio_off__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_audio_off']=false;
		}
		me._btn_audio_off.ggUpdatePosition=function (useTransition) {
		}
		me._btn_toggle_audio.appendChild(me._btn_audio_off);
		el=me._btn_audio_on=document.createElement('div');
		els=me._btn_audio_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_audio_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_audio_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlnb24gc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiBwb2ludHM9IjM0LjY2IDE5Ljc3IDIzLjcgMjcuNTUgMTYgMjcuNTUgMT'+
			'YgMzYuNDUgMjMuNyAzNi40NSAzNC42NiA0NC4yMyAzNC42NiAxOS43NyIvPgogIDxwYXRoIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgZD0iTTM5LjExLDIzLjQ3YTEyLDEyLDAsMCwxLDAsMTciLz4KICA8cGF0aCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIGQ9Ik00My4zMSwyMC42OWExNiwxNiwwLDAsMSwwLDIyLjYyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_audio_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_audio_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_audio_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_audio_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('toggle_audio') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_audio_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_audio_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_audio_on.style.transition='';
				if (me._btn_audio_on.ggCurrentLogicStateVisible == 0) {
					me._btn_audio_on.style.visibility=(Number(me._btn_audio_on.style.opacity)>0||!me._btn_audio_on.style.opacity)?'inherit':'hidden';
					me._btn_audio_on.ggVisible=true;
				}
				else {
					me._btn_audio_on.style.visibility="hidden";
					me._btn_audio_on.ggVisible=false;
				}
			}
		}
		me._btn_audio_on.logicBlock_visible();
		me._btn_audio_on.onmouseenter=function (e) {
			me._btn_audio_on__img.style.visibility='hidden';
			me._btn_audio_on__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_audio_on']=true;
		}
		me._btn_audio_on.onmouseleave=function (e) {
			me._btn_audio_on__img.style.visibility='inherit';
			me._btn_audio_on__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_audio_on']=false;
		}
		me._btn_audio_on.ggUpdatePosition=function (useTransition) {
		}
		me._btn_toggle_audio.appendChild(me._btn_audio_on);
		me._controls_right.appendChild(me._btn_toggle_audio);
		el=me._btn_toggle_gyro=document.createElement('div');
		el.ggId="btn_toggle_gyro";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_toggle_gyro.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_toggle_gyro.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getGyroAvailable() == true)) && 
				((player.getVariableValue('opt_gyro') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_toggle_gyro.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_toggle_gyro.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_toggle_gyro.style.transition='';
				if (me._btn_toggle_gyro.ggCurrentLogicStateVisible == 0) {
					me._btn_toggle_gyro.style.visibility=(Number(me._btn_toggle_gyro.style.opacity)>0||!me._btn_toggle_gyro.style.opacity)?'inherit':'hidden';
					me._btn_toggle_gyro.ggVisible=true;
				}
				else {
					me._btn_toggle_gyro.style.visibility="hidden";
					me._btn_toggle_gyro.ggVisible=false;
				}
			}
		}
		me._btn_toggle_gyro.logicBlock_visible();
		me._btn_toggle_gyro.onclick=function (e) {
			player.setUseGyro(!(player.getUseGyro()));
		}
		me._btn_toggle_gyro.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_gyro_off=document.createElement('div');
		els=me._btn_gyro_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwoJLnN0MntkaXNwbGF5Om5vbmU7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8ZWxsaXBzZSBy'+
			'eT0iMTYiIGN4PSIzMyIgcng9IjguNiIgY2xhc3M9InN0MSIgY3k9IjMyIi8+CiAgPGVsbGlwc2Ugcnk9IjguNiIgY3g9IjMzIiByeD0iMTYiIGNsYXNzPSJzdDEiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB5Mj0iMTcuMiIgeDI9IjQ5LjIiIHgxPSIxNy4yIiBjbGFzcz0ic3QyIiB5MT0iNDkuMiIvPgogIDxsaW5lIHkyPSIxNS44IiB4Mj0iNDcuOCIgeDE9IjE1LjgiIGNsYXNzPSJzdDEiIHkxPSI0Ny44Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_gyro_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8ZWxsaXBzZSByeT0iMTYiIGN4PSIzMyIgcng9IjguNiIgY2xhc3M9InN0MSIgY3k9IjMyIi8+CiAgPGVsbGlwc2Ugcnk9IjguNiIgY3g9IjMzIiByeD0iMTYiIGNsYXNz'+
			'PSJzdDEiIGN5PSIzMiIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB5Mj0iMTUuOCIgeDI9IjQ3LjgiIHgxPSIxNS44IiBjbGFzcz0ic3QxIiB5MT0iNDcuOCIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_gyro_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_gyro_off";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_gyro_off.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro_off.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro_off.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro_off.style.transition='';
				if (me._btn_gyro_off.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro_off.style.visibility="hidden";
					me._btn_gyro_off.ggVisible=false;
				}
				else {
					me._btn_gyro_off.style.visibility=(Number(me._btn_gyro_off.style.opacity)>0||!me._btn_gyro_off.style.opacity)?'inherit':'hidden';
					me._btn_gyro_off.ggVisible=true;
				}
			}
		}
		me._btn_gyro_off.logicBlock_visible();
		me._btn_gyro_off.onmouseenter=function (e) {
			me._btn_gyro_off__img.style.visibility='hidden';
			me._btn_gyro_off__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_gyro_off']=true;
		}
		me._btn_gyro_off.onmouseleave=function (e) {
			me._btn_gyro_off__img.style.visibility='inherit';
			me._btn_gyro_off__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_gyro_off']=false;
		}
		me._btn_gyro_off.ggUpdatePosition=function (useTransition) {
		}
		me._btn_toggle_gyro.appendChild(me._btn_gyro_off);
		el=me._btn_gyro_on=document.createElement('div');
		els=me._btn_gyro_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8ZWxsaXBzZSByeT0iMTYiIGN4PSIzMyIgcng9IjguNiIgY2xhc3M9InN0MSIgY3k9IjMyIi8+CiAgPGVsbGlwc2Ugcnk9IjguNiIgY3g9IjMzIiByeD0iMTYiIGNsYXNz'+
			'PSJzdDEiIGN5PSIzMiIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_gyro_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGVsbGlwc2Ugc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiByeT0iMTYiIGN4PSIzMyIgcng9IjguNjIiIGN5PSIzMiIvPgogIDxlbG'+
			'xpcHNlIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcnk9IjguNjIiIGN4PSIzMyIgcng9IjE2IiBjeT0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_gyro_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_gyro_on";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_gyro_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_gyro_on.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getUseGyro() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_gyro_on.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_gyro_on.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_gyro_on.style.transition='';
				if (me._btn_gyro_on.ggCurrentLogicStateVisible == 0) {
					me._btn_gyro_on.style.visibility=(Number(me._btn_gyro_on.style.opacity)>0||!me._btn_gyro_on.style.opacity)?'inherit':'hidden';
					me._btn_gyro_on.ggVisible=true;
				}
				else {
					me._btn_gyro_on.style.visibility="hidden";
					me._btn_gyro_on.ggVisible=false;
				}
			}
		}
		me._btn_gyro_on.logicBlock_visible();
		me._btn_gyro_on.onmouseenter=function (e) {
			me._btn_gyro_on__img.style.visibility='hidden';
			me._btn_gyro_on__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_gyro_on']=true;
		}
		me._btn_gyro_on.onmouseleave=function (e) {
			me._btn_gyro_on__img.style.visibility='inherit';
			me._btn_gyro_on__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_gyro_on']=false;
		}
		me._btn_gyro_on.ggUpdatePosition=function (useTransition) {
		}
		me._btn_toggle_gyro.appendChild(me._btn_gyro_on);
		me._controls_right.appendChild(me._btn_toggle_gyro);
		el=me._btn_vr=document.createElement('div');
		els=me._btn_vr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNNDQsMjIuNEgyMGMtMi4yLDAtNCwxLjctNCwzLjljMCwwLDAsMC4xLDAsMC4xdjExLjFjMCwyLjIsMS43LDQsMy45LDRjMCwwLDAuMSwwLDAuMSwwaDUu'+
			'OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMSwwLDIuMS0wLjYsMi43LTEuNWwxLjgtNC43YzAuNC0xLDEuNS0xLjQsMi40LTEuMWMwLjUsMC4yLDAuOSwwLjYsMS4xLDEuMWwxLjgsNC43YzAuNiwwLjksMS42LDEuNSwyLjcsMS41SDQ0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi4yLDAsNC0xLjgsNC00YzAsMCwwLDAsMC0wLjFWMjYuNUM0OCwyNC4yLDQ2LjMsMjIuNCw0NCwyMi40QzQ0LDIyLjQsNDQsMjIuNCw0NCwyMi40eiBNMjQuNywzM2MtMC43LDAtMS4zLTAuNi0xLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjcsMC42LTEuMywxLjMtMS40YzAuNywwLDEuMywwLjYsMS40LDEuM0MyNi'+
			'wzMi40LDI1LjQsMzMsMjQuNywzM0MyNC43LDMzLDI0LjcsMzMsMjQuNywzM3ogTTM5LjYsMzNjLTAuNywwLTEuMy0wLjYtMS4zLTEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC43LDAuNi0xLjMsMS4zLTEuM3MxLjMsMC42LDEuMywxLjNjMCwwLDAsMCwwLDBDNDAuOSwzMi40LDQwLjQsMzMsMzkuNiwzM0MzOS42LDMzLDM5LjYsMzMsMzkuNiwzM3oiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_vr__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiBkPSJNNDQsMjIuNEgyMC4wNUE0LDQsMCwwLDAsMTYsMjYuNDV2MTEuMWE0LD'+
			'QsMCwwLDAsNC4wNSw0LjA1aDUuOGEzLjEzLDMuMTMsMCwwLDAsMi42Ny0xLjQ5bDEuNzctNC43YTEuODcsMS44NywwLDAsMSwzLjQ5LDBsMS43OCw0LjdhMy4xMSwzLjExLDAsMCwwLDIuNjYsMS40OUg0NGE0LDQsMCwwLDAsNC00LjA1VjI2LjQ1QTQsNCwwLDAsMCw0NCwyMi40Wk0yNC42OCwzM0ExLjM0LDEuMzQsMCwxLDEsMjYsMzEuNjQsMS4zMywxLjMzLDAsMCwxLDI0LjY4LDMzWm0xNC45MywwYTEuMzQsMS4zNCwwLDEsMSwxLjMzLTEuMzRBMS4zMywxLjMzLDAsMCwxLDM5LjYxLDMzWiIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_vr__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_vr.style.transition='';
				if (me._btn_vr.ggCurrentLogicStateVisible == 0) {
					me._btn_vr.style.visibility=(Number(me._btn_vr.style.opacity)>0||!me._btn_vr.style.opacity)?'inherit':'hidden';
					me._btn_vr.ggVisible=true;
				}
				else {
					me._btn_vr.style.visibility="hidden";
					me._btn_vr.ggVisible=false;
				}
			}
		}
		me._btn_vr.logicBlock_visible();
		me._btn_vr.onclick=function (e) {
			player.enterVR();
		}
		me._btn_vr.onmouseenter=function (e) {
			me._btn_vr__img.style.visibility='hidden';
			me._btn_vr__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_vr']=true;
		}
		me._btn_vr.onmouseleave=function (e) {
			me._btn_vr__img.style.visibility='inherit';
			me._btn_vr__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_vr']=false;
		}
		me._btn_vr.ggUpdatePosition=function (useTransition) {
		}
		me._controls_right.appendChild(me._btn_vr);
		el=me._btn_fullscreen=document.createElement('div');
		el.ggId="btn_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('has_fullscreen') == true)) && 
				((player.getVariableValue('opt_fullscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen.style.transition='';
				if (me._btn_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen.style.visibility=(Number(me._btn_fullscreen.style.opacity)>0||!me._btn_fullscreen.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen.ggVisible=true;
				}
				else {
					me._btn_fullscreen.style.visibility="hidden";
					me._btn_fullscreen.ggVisible=false;
				}
			}
		}
		me._btn_fullscreen.logicBlock_visible();
		me._btn_fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._btn_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_fullscreen_exit=document.createElement('div');
		els=me._btn_fullscreen_exit__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSI0OCwyOC41IDM1LjUsMjguNSAzNS41LDI4LjUgMzUuNSwxNiAmI3g5OyIgY2xhc3M9InN0MSIvPgogIDxsaW5lIHkyPSIyOC41IiB4Mj0i'+
			'MzUuNSIgeDE9IjQ3LjciIGNsYXNzPSJzdDEiIHkxPSIxNi41Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTYsMzUuNSAyOC41LDM1LjUgMjguNSwzNS41IDI4LjUsNDggJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8bGluZSB5Mj0iMzUuNSIgeDI9IjI4LjUiIHgxPSIxNi40IiBjbGFzcz0ic3QxIiB5MT0iNDcuNSIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_fullscreen_exit__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_fullscreen_exit__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcG9pbnRzPSI0OCAyOC40NiAzNS41NCAyOC40NiAzNS41NCAyOC40Ni'+
			'AzNS41NCAxNiIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjI4LjQ2IiB4Mj0iMzUuNTQiIHgxPSI0Ny42NSIgeTE9IjE2LjQ1Ii8+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcG9pbnRzPSIxNiAzNS41NCAyOC40NiAzNS41NCAyOC40NiAzNS41NCAyOC40NiA0OCIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ry'+
			'b2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjM1LjU0IiB4Mj0iMjguNDYiIHgxPSIxNi4zNSIgeTE9IjQ3LjU1Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_fullscreen_exit__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_fullscreen_exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen_exit.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_fullscreen_exit.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen_exit.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen_exit.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen_exit.style.transition='';
				if (me._btn_fullscreen_exit.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen_exit.style.visibility=(Number(me._btn_fullscreen_exit.style.opacity)>0||!me._btn_fullscreen_exit.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen_exit.ggVisible=true;
				}
				else {
					me._btn_fullscreen_exit.style.visibility="hidden";
					me._btn_fullscreen_exit.ggVisible=false;
				}
			}
		}
		me._btn_fullscreen_exit.logicBlock_visible();
		me._btn_fullscreen_exit.onmouseenter=function (e) {
			me._btn_fullscreen_exit__img.style.visibility='hidden';
			me._btn_fullscreen_exit__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_fullscreen_exit']=true;
		}
		me._btn_fullscreen_exit.onmouseleave=function (e) {
			me._btn_fullscreen_exit__img.style.visibility='inherit';
			me._btn_fullscreen_exit__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_fullscreen_exit']=false;
		}
		me._btn_fullscreen_exit.ggUpdatePosition=function (useTransition) {
		}
		me._btn_fullscreen.appendChild(me._btn_fullscreen_exit);
		el=me._btn_fullscreen_enter=document.createElement('div');
		els=me._btn_fullscreen_enter__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIzNS41LDE2IDQ4LDE2IDQ4LDE2IDQ4LDI4LjUgJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8bGluZSB5Mj0iMTYiIHgyPSI0OCIgeDE9IjM1'+
			'LjkiIGNsYXNzPSJzdDEiIHkxPSIyOCIvPgogIDxwb2x5bGluZSBwb2ludHM9IjI4LjUsNDggMTYsNDggMTYsNDggMTYsMzUuNSAmI3g5OyIgY2xhc3M9InN0MSIvPgogIDxsaW5lIHkyPSI0OCIgeDI9IjE2IiB4MT0iMjguMSIgY2xhc3M9InN0MSIgeTE9IjM2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_fullscreen_enter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_fullscreen_enter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcG9pbnRzPSIzNS41NCAxNiA0OCAxNiA0OCAxNiA0OCAyOC40NiIvPg'+
			'ogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjE2IiB4Mj0iNDgiIHgxPSIzNS44OSIgeTE9IjI4Ii8+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcG9pbnRzPSIyOC40NiA0OCAxNiA0OCAxNiA0OCAxNiAzNS41NCIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7'+
			'c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjQ4IiB4Mj0iMTYiIHgxPSIyOC4xMSIgeTE9IjM2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_fullscreen_enter__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_fullscreen_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_fullscreen_enter.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_fullscreen_enter.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_fullscreen_enter.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_fullscreen_enter.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_fullscreen_enter.style.transition='';
				if (me._btn_fullscreen_enter.ggCurrentLogicStateVisible == 0) {
					me._btn_fullscreen_enter.style.visibility="hidden";
					me._btn_fullscreen_enter.ggVisible=false;
				}
				else {
					me._btn_fullscreen_enter.style.visibility=(Number(me._btn_fullscreen_enter.style.opacity)>0||!me._btn_fullscreen_enter.style.opacity)?'inherit':'hidden';
					me._btn_fullscreen_enter.ggVisible=true;
				}
			}
		}
		me._btn_fullscreen_enter.logicBlock_visible();
		me._btn_fullscreen_enter.onmouseenter=function (e) {
			me._btn_fullscreen_enter__img.style.visibility='hidden';
			me._btn_fullscreen_enter__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_fullscreen_enter']=true;
		}
		me._btn_fullscreen_enter.onmouseleave=function (e) {
			me._btn_fullscreen_enter__img.style.visibility='inherit';
			me._btn_fullscreen_enter__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_fullscreen_enter']=false;
		}
		me._btn_fullscreen_enter.ggUpdatePosition=function (useTransition) {
		}
		me._btn_fullscreen.appendChild(me._btn_fullscreen_enter);
		me._controls_right.appendChild(me._btn_fullscreen);
		me._controls_container.appendChild(me._controls_right);
		el=me._btn_toggle_controls=document.createElement('div');
		el.ggId="btn_toggle_controls";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px 0px 0px 16px;';
		hs+='bottom : 42px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_toggle_controls.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_toggle_controls.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('controls_left_open') == true)) && 
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._btn_toggle_controls.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._btn_toggle_controls.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._btn_toggle_controls.style.transition='right 800ms ease 0ms, bottom 800ms ease 0ms';
				if (me._btn_toggle_controls.ggCurrentLogicStatePosition == 0) {
					me._btn_toggle_controls.style.right='-36px';
					me._btn_toggle_controls.style.bottom='42px';
				}
				else {
					me._btn_toggle_controls.style.right='0px';
					me._btn_toggle_controls.style.bottom='42px';
				}
			}
		}
		me._btn_toggle_controls.logicBlock_position();
		me._btn_toggle_controls.onclick=function (e) {
			player.setVariableValue('vis_controls', !player.getVariableValue('vis_controls'));
			if (
				(
					((player.getVariableValue('vis_controls') == false)) && 
					((player.getVariableValue('controls_left_open') == false))
				)
			) {
				me._toggle_controls_left.style.transition='none';
				me._toggle_controls_left.style.visibility=(Number(me._toggle_controls_left.style.opacity)>0||!me._toggle_controls_left.style.opacity)?'inherit':'hidden';
				me._toggle_controls_left.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('vis_controls') == false)) && 
					((player.getVariableValue('controls_left_open') == false))
				)
			) {
				me._toggle_controls_left.style.transition='none';
				me._toggle_controls_left.style.opacity='0';
				me._toggle_controls_left.style.visibility='hidden';
			}
			if (
				(
					((player.getVariableValue('vis_controls') == false)) && 
					((player.getVariableValue('controls_left_open') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._toggle_controls_left.style.transition='none';
				} else {
					me._toggle_controls_left.style.transition='all 200ms ease-out 1100ms';
				}
				me._toggle_controls_left.style.opacity='1';
				me._toggle_controls_left.style.visibility=me._toggle_controls_left.ggVisible?'inherit':'hidden';
			}
		}
		me._btn_toggle_controls.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_toggle_controls_icon=document.createElement('div');
		els=me._btn_toggle_controls_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSI0NS45LDMxLjcgMzIsNDUuNiAzMiw0NS42IDE4LjEsMzEuNyAmI3g5OyIgY2xhc3M9InN0MSIvPgogIDxsaW5lIHkyPSIxOC40IiB4Mj0i'+
			'NDgiIHgxPSIxNiIgY2xhc3M9InN0MSIgeTE9IjE4LjQiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_toggle_controls_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_toggle_controls_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcG9pbnRzPSI0NS45NCAzMS43IDMxLjk5IDQ1LjYzIDMxLjk5IDQ1Lj'+
			'YzIDE4LjA2IDMxLjciLz4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSIxOC4zNyIgeDI9IjQ4IiB4MT0iMTYiIHkxPSIxOC4zNyIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_toggle_controls_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_toggle_controls_icon";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:-90,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		el.style.transform=parameterToTransform(el.ggParameter);
		me._btn_toggle_controls_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_toggle_controls_icon.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('vis_controls') == false))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._btn_toggle_controls_icon.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._btn_toggle_controls_icon.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._btn_toggle_controls_icon.style.transition='transform 800ms ease 0ms';
				if (me._btn_toggle_controls_icon.ggCurrentLogicStateAngle == 0) {
					me._btn_toggle_controls_icon.ggParameter.a = 90;
					me._btn_toggle_controls_icon.style.transform=parameterToTransform(me._btn_toggle_controls_icon.ggParameter);
				}
				else {
					me._btn_toggle_controls_icon.ggParameter.a = -90;
					me._btn_toggle_controls_icon.style.transform=parameterToTransform(me._btn_toggle_controls_icon.ggParameter);
				}
			}
		}
		me._btn_toggle_controls_icon.logicBlock_angle();
		me._btn_toggle_controls_icon.onmouseenter=function (e) {
			me._btn_toggle_controls_icon__img.style.visibility='hidden';
			me._btn_toggle_controls_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_toggle_controls_icon']=true;
		}
		me._btn_toggle_controls_icon.onmouseleave=function (e) {
			me._btn_toggle_controls_icon__img.style.visibility='inherit';
			me._btn_toggle_controls_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_toggle_controls_icon']=false;
		}
		me._btn_toggle_controls_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_toggle_controls.appendChild(me._btn_toggle_controls_icon);
		me._controls_container.appendChild(me._btn_toggle_controls);
		el=me._controls_left_container=document.createElement('div');
		el.ggId="controls_left_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : clamp(-564px, calc((30% - 36px) * -1), -364px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : clamp(400px, 30%, 600px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_left_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_left_container.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('controls_left_open') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getVariableValue('vis_controls') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else if (
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getVariableValue('vis_controls') == false))
			)
			{
				newLogicStatePosition = 2;
			}
			else if (
				((player.getVariableValue('vis_controls') == false))
			)
			{
				newLogicStatePosition = 3;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._controls_left_container.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._controls_left_container.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._controls_left_container.style.transition='left 800ms ease 0ms, top 800ms ease 0ms, width 0s, height 0s';
				if (me._controls_left_container.ggCurrentLogicStatePosition == 0) {
					me._controls_left_container.style.left='0px';
					me._controls_left_container.style.top='0px';
				}
				else if (me._controls_left_container.ggCurrentLogicStatePosition == 1) {
					me._controls_left_container.style.left='calc((100% - 42px) * -1)';
					me._controls_left_container.style.top='0px';
				}
				else if (me._controls_left_container.ggCurrentLogicStatePosition == 2) {
					me._controls_left_container.style.left='calc((100% - 6px) * -1)';
					me._controls_left_container.style.top='0px';
				}
				else if (me._controls_left_container.ggCurrentLogicStatePosition == 3) {
					me._controls_left_container.style.left='clamp(-600px, -30%, -400px)';
					me._controls_left_container.style.top='0px';
				}
				else {
					me._controls_left_container.style.left='clamp(-564px, calc((30% - 36px) * -1), -364px)';
					me._controls_left_container.style.top='0px';
				}
			}
		}
		me._controls_left_container.logicBlock_position();
		me._controls_left_container.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._controls_left_container.ggCurrentLogicStateSize != newLogicStateSize) {
				me._controls_left_container.ggCurrentLogicStateSize = newLogicStateSize;
				me._controls_left_container.style.transition='left 800ms ease 0ms, top 800ms ease 0ms, width 0s, height 0s';
				if (me._controls_left_container.ggCurrentLogicStateSize == 0) {
					me._controls_left_container.style.width='calc(100% - 6px)';
					me._controls_left_container.style.height='100%';
					skin.updateSize(me._controls_left_container);
				}
				else {
					me._controls_left_container.style.width='clamp(400px, 30%, 600px)';
					me._controls_left_container.style.height='100%';
					skin.updateSize(me._controls_left_container);
				}
			}
		}
		me._controls_left_container.logicBlock_size();
		me._controls_left_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._controls_left=document.createElement('div');
		el.ggId="controls_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 16px 16px 0px;';
		hs+='bottom : 42px;';
		hs+='cursor : default;';
		hs+='height : 178px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controls_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._controls_left.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_toggle_controls_left=document.createElement('div');
		els=me._btn_toggle_controls_left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIHI9IjEuMyIgY3g9IjMyIiBjbGFzcz0ic3QxIiBjeT0iMzIiLz4KICA8Y2lyY2xlIHI9IjEuMyIgY3g9IjMyIiBjbGFzcz0ic3QxIiBjeT0iMjEuMyIvPgog'+
			'IDxjaXJjbGUgcj0iMS4zIiBjeD0iMzIiIGNsYXNzPSJzdDEiIGN5PSI0Mi43Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_toggle_controls_left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_toggle_controls_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIGN4PSIzMiIgY3k9IjMyIi8+CiAgPGNpcmNsZSByPSIxLj'+
			'MzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIGN4PSIzMiIgY3k9IjIxLjM0Ii8+CiAgPGNpcmNsZSByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIGN4PSIzMiIgY3k9IjQyLjY2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_toggle_controls_left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_toggle_controls_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 2px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_toggle_controls_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_toggle_controls_left.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('controls_left_open') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._btn_toggle_controls_left.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._btn_toggle_controls_left.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._btn_toggle_controls_left.style.transition='transform 800ms ease 0ms';
				if (me._btn_toggle_controls_left.ggCurrentLogicStateAngle == 0) {
					me._btn_toggle_controls_left.ggParameter.a = 90;
					me._btn_toggle_controls_left.style.transform=parameterToTransform(me._btn_toggle_controls_left.ggParameter);
				}
				else {
					me._btn_toggle_controls_left.ggParameter.a = 0;
					me._btn_toggle_controls_left.style.transform=parameterToTransform(me._btn_toggle_controls_left.ggParameter);
				}
			}
		}
		me._btn_toggle_controls_left.logicBlock_angle();
		me._btn_toggle_controls_left.onclick=function (e) {
			player.setVariableValue('controls_left_open', !player.getVariableValue('controls_left_open'));
			if (
				(
					((player.getVariableValue('vis_controls') == false)) && 
					((player.getVariableValue('controls_left_open') == false))
				)
			) {
				me._toggle_controls_left.style.transition='none';
				me._toggle_controls_left.style.visibility=(Number(me._toggle_controls_left.style.opacity)>0||!me._toggle_controls_left.style.opacity)?'inherit':'hidden';
				me._toggle_controls_left.ggVisible=true;
			}
			if (
				(
					((player.getVariableValue('vis_controls') == false)) && 
					((player.getVariableValue('controls_left_open') == false))
				)
			) {
				me._toggle_controls_left.style.transition='none';
				me._toggle_controls_left.style.opacity='0';
				me._toggle_controls_left.style.visibility='hidden';
			}
			if (
				(
					((player.getVariableValue('vis_controls') == false)) && 
					((player.getVariableValue('controls_left_open') == false))
				)
			) {
				if (player.transitionsDisabled) {
					me._toggle_controls_left.style.transition='none';
				} else {
					me._toggle_controls_left.style.transition='all 200ms ease-out 1100ms';
				}
				me._toggle_controls_left.style.opacity='1';
				me._toggle_controls_left.style.visibility=me._toggle_controls_left.ggVisible?'inherit':'hidden';
			}
		}
		me._btn_toggle_controls_left.onmouseenter=function (e) {
			me._btn_toggle_controls_left__img.style.visibility='hidden';
			me._btn_toggle_controls_left__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_toggle_controls_left']=true;
		}
		me._btn_toggle_controls_left.onmouseleave=function (e) {
			me._btn_toggle_controls_left__img.style.visibility='inherit';
			me._btn_toggle_controls_left__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_toggle_controls_left']=false;
		}
		me._btn_toggle_controls_left.ggUpdatePosition=function (useTransition) {
		}
		me._controls_left.appendChild(me._btn_toggle_controls_left);
		me._controls_left_container.appendChild(me._controls_left);
		el=me._content_left=document.createElement('div');
		el.ggId="content_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 42px;';
		hs+='height : calc(100% - 42px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 42px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._content_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._content_left.ggUpdatePosition=function (useTransition) {
		}
		el=me._info=document.createElement('div');
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #e6e6e6;';
		hs+='border-radius : 0px 12px 12px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 5px 5px 5px 0px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._info.ggCurrentLogicStateSize != newLogicStateSize) {
				me._info.ggCurrentLogicStateSize = newLogicStateSize;
				me._info.style.transition='width 0s, height 0s';
				if (me._info.ggCurrentLogicStateSize == 0) {
					me._info.style.width='100%';
					me._info.style.height='calc(100% - 32px)';
					skin.updateSize(me._info);
				}
				else {
					me._info.style.width='100%';
					me._info.style.height='50%';
					skin.updateSize(me._info);
				}
			}
		}
		me._info.logicBlock_size();
		me._info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info.style.transition='width 0s, height 0s';
				if (me._info.ggCurrentLogicStateVisible == 0) {
					me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
					me._info.ggVisible=true;
				}
				else {
					me._info.style.visibility="hidden";
					me._info.ggVisible=false;
				}
			}
		}
		me._info.logicBlock_visible();
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_body=document.createElement('div');
		els=me._info_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 72px);';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 10px 0px 10px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_body.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_body.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_body.ggUpdateText();
		});
		el.appendChild(els);
		me._info_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_body.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._info_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 28px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._info_title);
		me._content_left.appendChild(me._info);
		el=me._map_bg=document.createElement('div');
		el.ggId="map_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #e6e6e6;';
		hs+='border-radius : 0px 12px 12px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 5px 5px 5px 0px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_bg.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map_bg.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map_bg.ggCurrentLogicStateSize = newLogicStateSize;
				me._map_bg.style.transition='width 0s, height 0s';
				if (me._map_bg.ggCurrentLogicStateSize == 0) {
					me._map_bg.style.width='100%';
					me._map_bg.style.height='calc(100% - 32px)';
					skin.updateSize(me._map_bg);
				}
				else {
					me._map_bg.style.width='100%';
					me._map_bg.style.height='50%';
					skin.updateSize(me._map_bg);
				}
			}
		}
		me._map_bg.logicBlock_size();
		me._map_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true)) || 
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_bg.style.transition='width 0s, height 0s';
				if (me._map_bg.ggCurrentLogicStateVisible == 0) {
					me._map_bg.style.visibility=(Number(me._map_bg.style.opacity)>0||!me._map_bg.style.opacity)?'inherit':'hidden';
					me._map_bg.ggVisible=true;
				}
				else {
					me._map_bg.style.visibility="hidden";
					me._map_bg.ggVisible=false;
				}
			}
		}
		me._map_bg.logicBlock_visible();
		me._map_bg.ggUpdatePosition=function (useTransition) {
		}
		me._content_left.appendChild(me._map_bg);
		el=me._map=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'Map01';
		el.ggId="map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border-color : #e6e6e6;';
		hs+='border-radius : 0px 12px 12px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 5px 5px 5px 0px;';
		hs+='bottom : 0px;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._map.ggCurrentLogicStateSize != newLogicStateSize) {
				me._map.ggCurrentLogicStateSize = newLogicStateSize;
				me._map.style.transition='width 0s, height 0s';
				if (me._map.ggCurrentLogicStateSize == 0) {
					me._map.style.width='100%';
					me._map.style.height='calc(100% - 32px)';
					skin.updateSize(me._map);
				}
				else {
					me._map.style.width='100%';
					me._map.style.height='50%';
					skin.updateSize(me._map);
				}
			}
		}
		me._map.logicBlock_size();
		me._map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map.style.transition='width 0s, height 0s';
				if (me._map.ggCurrentLogicStateVisible == 0) {
					me._map.style.visibility=(Number(me._map.style.opacity)>0||!me._map.style.opacity)?'inherit':'hidden';
					if (me._map.ggMapNotLoaded && me._map.ggInitMap) {
						me._map.ggInitMap(false);
						me._map.ggInitMapMarkers(true);
					}
					me._map.ggVisible=true;
				}
				else {
					me._map.style.visibility="hidden";
					if (me._map.ggClearMap) me._map.ggClearMap();
					me._map.ggVisible=false;
				}
			}
		}
		me._map.logicBlock_visible();
		me._map.ggUpdatePosition=function (useTransition) {
		}
		me._content_left.appendChild(me._map);
		el=me._floorplan=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = '_none';
		el.ggId="floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border-color : #e6e6e6;';
		hs+='border-radius : 0px 12px 12px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 5px 5px 5px 0px;';
		hs+='bottom : 0px;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._floorplan.ggCurrentLogicStateSize != newLogicStateSize) {
				me._floorplan.ggCurrentLogicStateSize = newLogicStateSize;
				me._floorplan.style.transition='width 0s, height 0s';
				if (me._floorplan.ggCurrentLogicStateSize == 0) {
					me._floorplan.style.width='100%';
					me._floorplan.style.height='calc(100% - 32px)';
					skin.updateSize(me._floorplan);
				}
				else {
					me._floorplan.style.width='100%';
					me._floorplan.style.height='50%';
					skin.updateSize(me._floorplan);
				}
			}
		}
		me._floorplan.logicBlock_size();
		me._floorplan.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floorplan.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floorplan.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floorplan.style.transition='width 0s, height 0s';
				if (me._floorplan.ggCurrentLogicStateVisible == 0) {
					me._floorplan.style.visibility=(Number(me._floorplan.style.opacity)>0||!me._floorplan.style.opacity)?'inherit':'hidden';
					if (me._floorplan.ggMapNotLoaded && me._floorplan.ggInitMap) {
						me._floorplan.ggInitMap(false);
						me._floorplan.ggInitMapMarkers(true);
					}
					me._floorplan.ggVisible=true;
				}
				else {
					me._floorplan.style.visibility="hidden";
					if (me._floorplan.ggClearMap) me._floorplan.ggClearMap();
					me._floorplan.ggVisible=false;
				}
			}
		}
		me._floorplan.logicBlock_visible();
		me._floorplan.ggUpdatePosition=function (useTransition) {
		}
		me._content_left.appendChild(me._floorplan);
		el=me._thumbnail_menu=document.createElement('div');
		el.ggId="thumbnail_menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border-color : #e6e6e6;';
		hs+='border-radius : 0px 12px 12px 0px;';
		hs+='border-style : solid;';
		hs+='border-width : 5px 5px 5px 1px;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 50%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateSize != newLogicStateSize) {
				me._thumbnail_menu.ggCurrentLogicStateSize = newLogicStateSize;
				me._thumbnail_menu.style.transition='width 0s, height 0s';
				if (me._thumbnail_menu.ggCurrentLogicStateSize == 0) {
					me._thumbnail_menu.style.width='100%';
					me._thumbnail_menu.style.height='calc(100% - 32px)';
					skin.updateSize(me._thumbnail_menu);
				}
				else {
					me._thumbnail_menu.style.width='100%';
					me._thumbnail_menu.style.height='50%';
					skin.updateSize(me._thumbnail_menu);
				}
			}
		}
		me._thumbnail_menu.logicBlock_size();
		me._thumbnail_menu.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbs') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._thumbnail_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._thumbnail_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._thumbnail_menu.style.transition='width 0s, height 0s';
				if (me._thumbnail_menu.ggCurrentLogicStateVisible == 0) {
					me._thumbnail_menu.style.visibility=(Number(me._thumbnail_menu.style.opacity)>0||!me._thumbnail_menu.style.opacity)?'inherit':'hidden';
					me._thumbnail_menu.ggVisible=true;
				}
				else {
					me._thumbnail_menu.style.visibility="hidden";
					me._thumbnail_menu.ggVisible=false;
				}
			}
		}
		me._thumbnail_menu.logicBlock_visible();
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodes=document.createElement('div');
		el.ggId="nodes";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : calc(100% - 24px);';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('has_categories') == true)) && 
				((player.getVariableValue('vis_thumbs_nodes') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodes.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodes.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodes.style.transition='';
				if (me._nodes.ggCurrentLogicStateVisible == 0) {
					me._nodes.style.visibility="hidden";
					me._nodes.ggVisible=false;
				}
				else {
					me._nodes.style.visibility=(Number(me._nodes.style.opacity)>0||!me._nodes.style.opacity)?'inherit':'hidden';
					me._nodes.ggVisible=true;
				}
			}
		}
		me._nodes.logicBlock_visible();
		me._nodes.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodes_scroller=document.createElement('div');
		els=me._nodes_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 124px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 240px;';
		hs+="";
		els.setAttribute('style',hs);
		me._nodes_scroller.ggScrollByX = function(diffX) {
			if(!me._nodes_scroller.ggHorScrollVisible || diffX == 0 || me._nodes_scroller.ggHPercentVisible >= 1.0) return;
			me._nodes_scroller.ggScrollPosX = (me._nodes_scroller__horScrollFg.offsetLeft + diffX);
			me._nodes_scroller.ggScrollPosX = Math.max(me._nodes_scroller.ggScrollPosX, 0);
			me._nodes_scroller.ggScrollPosX = Math.min(me._nodes_scroller.ggScrollPosX, me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__horScrollFg.style.left = me._nodes_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosX / (me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__content.style.left = -(Math.round((me._nodes_scroller.ggContentWidth * (1.0 - me._nodes_scroller.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentLeftOffset + 'px';
			me._nodes_scroller.ggScrollPosXPercent = (me._nodes_scroller__horScrollFg.offsetLeft / me._nodes_scroller__horScrollBg.offsetWidth);
		}
		me._nodes_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._nodes_scroller.ggHorScrollVisible || diffX == 0 || me._nodes_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._nodes_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._nodes_scroller.ggScrollPosX >= me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth)) {
					me._nodes_scroller.ggScrollPosX = Math.min(me._nodes_scroller.ggScrollPosX, me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._nodes_scroller.ggScrollPosX <= 0)) {
					me._nodes_scroller.ggScrollPosX = Math.max(me._nodes_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._nodes_scroller__horScrollFg.style.left = me._nodes_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosX / (me._nodes_scroller__horScrollBg.offsetWidth - me._nodes_scroller__horScrollFg.offsetWidth);
			me._nodes_scroller__content.style.left = -(Math.round((me._nodes_scroller.ggContentWidth * (1.0 - me._nodes_scroller.ggHPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentLeftOffset + 'px';
			me._nodes_scroller.ggScrollPosXPercent = (me._nodes_scroller__horScrollFg.offsetLeft / me._nodes_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._nodes_scroller.ggScrollByY = function(diffY) {
			if(!me._nodes_scroller.ggVertScrollVisible || diffY == 0 || me._nodes_scroller.ggVPercentVisible >= 1.0) return;
			me._nodes_scroller.ggScrollPosY = (me._nodes_scroller__vertScrollFg.offsetTop + diffY);
			me._nodes_scroller.ggScrollPosY = Math.max(me._nodes_scroller.ggScrollPosY, 0);
			me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
			me._nodes_scroller.ggScrollPosYPercent = (me._nodes_scroller__vertScrollFg.offsetTop / me._nodes_scroller__vertScrollBg.offsetHeight);
		}
		me._nodes_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._nodes_scroller.ggVertScrollVisible || diffY == 0 || me._nodes_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._nodes_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._nodes_scroller.ggScrollPosY >= me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight)) {
					me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._nodes_scroller.ggScrollPosY <= 0)) {
					me._nodes_scroller.ggScrollPosY = Math.max(me._nodes_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
			me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
			me._nodes_scroller.ggScrollPosYPercent = (me._nodes_scroller__vertScrollFg.offsetTop / me._nodes_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._nodes_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._nodes_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._nodes_scroller.ggHPercentVisible);
					me._nodes_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._nodes_scroller.clientWidth - (me._nodes_scroller.ggVertScrollVisible ? 7 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._nodes_scroller.clientWidth - (me._nodes_scroller.ggVertScrollVisible ? 7 : 0))) * me._nodes_scroller.ggHPercentVisible);
					me._nodes_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._nodes_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._nodes_scroller.clientHeight - (me._nodes_scroller.ggHorScrollVisible ? 7 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._nodes_scroller.clientHeight - (me._nodes_scroller.ggHorScrollVisible ? 7 : 0))) * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._nodes_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._nodes_scroller.ggDragInertiaX *= 0.96;
				me._nodes_scroller.ggDragInertiaY *= 0.96;
				me._nodes_scroller.ggScrollByX(me._nodes_scroller.ggDragInertiaX);
				me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
				if (Math.abs(me._nodes_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._nodes_scroller__content.onmouseup = null;
			me._nodes_scroller__content.onmousemove = null;
			me._nodes_scroller__content.ontouchend = null;
			me._nodes_scroller__content.ontouchmove = null;
			me._nodes_scroller__content.onpointerup = null;
			me._nodes_scroller__content.onpointermove = null;
			setTimeout(function() { me._nodes_scroller.ggIsDragging = false; }, 100);
		}
		me._nodes_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._nodes_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._nodes_scroller.ggDragStartY) > 10) me._nodes_scroller.ggIsDragging = true;
			var diffX = (eventX - me._nodes_scroller.ggDragLastX) * me._nodes_scroller.ggHPercentVisible;
			var diffY = (eventY - me._nodes_scroller.ggDragLastY) * me._nodes_scroller.ggVPercentVisible;
			me._nodes_scroller.ggDragInertiaX = -diffX;
			me._nodes_scroller.ggDragInertiaY = -diffY;
			me._nodes_scroller.ggDragLastX = eventX;
			me._nodes_scroller.ggDragLastY = eventY;
			me._nodes_scroller.ggScrollByX(-diffX);
			me._nodes_scroller.ggScrollByY(-diffY);
		}
		me._nodes_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._nodes_scroller.ggDragLastX = me._nodes_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._nodes_scroller.ggDragLastY = me._nodes_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._nodes_scroller__content.onmouseup = me._nodes_scroller__content.mousetouchend;
			me._nodes_scroller__content.ontouchend = me._nodes_scroller__content.mousetouchend;
			me._nodes_scroller__content.onmousemove = me._nodes_scroller__content.mousetouchmove;
			me._nodes_scroller__content.ontouchmove = me._nodes_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._nodes_scroller__content.onpointerup = me._nodes_scroller__content.ontouchend;
				me._nodes_scroller__content.onpointermove = me._nodes_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._nodes_scroller__content.mousetouchstart;
		els.ontouchstart = me._nodes_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._nodes_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._nodes_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 7px; height: 234px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._nodes_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 7px; height: 234px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._nodes_scroller.ggScrollPosY = 0;
		me._nodes_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._nodes_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller.ggDragInertiaY *= 0.96;
					me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
					if (Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._nodes_scroller.ggDragLastY;
				me._nodes_scroller.ggDragInertiaY = diffY;
				me._nodes_scroller.ggDragLastY = e.clientY;
				me._nodes_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._nodes_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._nodes_scroller.ggDragInertiaY *= 0.96;
					me._nodes_scroller.ggScrollByY(me._nodes_scroller.ggDragInertiaY);
					if (Math.abs(me._nodes_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._nodes_scroller.ggDragLastY;
				me._nodes_scroller.ggDragInertiaY = diffY;
				me._nodes_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._nodes_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._nodes_scroller.ggScrollHeight;
			if (e.offsetY < me._nodes_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._nodes_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._nodes_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._nodes_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._nodes_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._nodes_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._nodes_scroller.ggScrollByYSmooth(30 * me._nodes_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._nodes_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 7px; height: 7px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="nodes_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_scroller.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('has_categories') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._nodes_scroller.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._nodes_scroller.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._nodes_scroller.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._nodes_scroller.ggCurrentLogicStatePosition == 0) {
					me._nodes_scroller.style.left='0px';
					me._nodes_scroller.style.top='0px';
				}
				else {
					me._nodes_scroller.style.left='0px';
					me._nodes_scroller.style.top='50px';
				}
			}
		}
		me._nodes_scroller.logicBlock_position();
		me._nodes_scroller.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('has_categories') == false))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodes_scroller.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodes_scroller.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodes_scroller.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._nodes_scroller.ggCurrentLogicStateSize == 0) {
					me._nodes_scroller.style.width='100%';
					me._nodes_scroller.style.height='100%';
					skin.updateSize(me._nodes_scroller);
				}
				else {
					me._nodes_scroller.style.width='100%';
					me._nodes_scroller.style.height='calc(100% - 50px)';
					skin.updateSize(me._nodes_scroller);
				}
			}
		}
		me._nodes_scroller.logicBlock_size();
		me._nodes_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = me._nodes_scroller.clientWidth * 1;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._nodes_scroller.ggScrollPosY / me._nodes_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._nodes_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 7) || (!me._nodes_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._nodes_scroller__vertScrollBg.style.visibility = 'inherit';
					me._nodes_scroller__vertScrollFg.style.visibility = 'inherit';
					me._nodes_scroller.ggVertScrollVisible = true;
				} else {
					me._nodes_scroller__vertScrollBg.style.visibility = 'hidden';
					me._nodes_scroller__vertScrollFg.style.visibility = 'hidden';
					me._nodes_scroller.ggVertScrollVisible = false;
				}
				if(me._nodes_scroller.ggVertScrollVisible) {
					me._nodes_scroller.ggAvailableWidth = me._nodes_scroller.clientWidth - 7;
					if (me._nodes_scroller.ggHorScrollVisible) {
						me._nodes_scroller.ggAvailableHeight = me._nodes_scroller.clientHeight - 7;
						me._nodes_scroller.ggAvailableHeightWithScale = me._nodes_scroller.getBoundingClientRect().height - me._nodes_scroller__vertScrollBg.getBoundingClientRect().width;
						me._nodes_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._nodes_scroller.ggAvailableHeight = me._nodes_scroller.clientHeight;
						me._nodes_scroller.ggAvailableHeightWithScale = me._nodes_scroller.getBoundingClientRect().height;
						me._nodes_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._nodes_scroller__vertScrollBg.style.height = me._nodes_scroller.ggAvailableHeight + 'px';
					me._nodes_scroller.ggVPercentVisible = contentHeight != 0 ? me._nodes_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._nodes_scroller.ggVPercentVisible > 1.0) me._nodes_scroller.ggVPercentVisible = 1.0;
					me._nodes_scroller.ggScrollHeight =  Math.round(me._nodes_scroller__vertScrollBg.offsetHeight * me._nodes_scroller.ggVPercentVisible);
					me._nodes_scroller__vertScrollFg.style.height = me._nodes_scroller.ggScrollHeight + 'px';
					me._nodes_scroller.ggScrollPosY = me._nodes_scroller.ggScrollPosYPercent * me._nodes_scroller.ggAvailableHeight;
					me._nodes_scroller.ggScrollPosY = Math.min(me._nodes_scroller.ggScrollPosY, me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
					me._nodes_scroller__vertScrollFg.style.top = me._nodes_scroller.ggScrollPosY + 'px';
					if (me._nodes_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._nodes_scroller.ggScrollPosY / (me._nodes_scroller__vertScrollBg.offsetHeight - me._nodes_scroller__vertScrollFg.offsetHeight);
						me._nodes_scroller__content.style.top = -(Math.round((me._nodes_scroller.ggContentHeight * (1.0 - me._nodes_scroller.ggVPercentVisible)) * percentScrolled)) + me._nodes_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._nodes_scroller.ggAvailableWidth = me._nodes_scroller.clientWidth;
					me._nodes_scroller.ggScrollPosY = 0;
					me._nodes_scroller.ggScrollPosYPercent = 0.0;
					me._nodes_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._nodes_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._nodes_scroller.ggHorScrollVisible || vertScrollWasVisible != me._nodes_scroller.ggVertScrollVisible) {
					skin.updateSize(me._nodes_scroller);
					me._nodes_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._nodes_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._nodes_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 240;
		el.ggHeight = 125;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._nodes_cloner.ggUpdating == true) return;
			me._nodes_cloner.ggUpdating = true;
			var el=me._nodes_cloner;
			var curNumCols = 0;
			curNumCols = me._nodes_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._nodes_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._nodes_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._nodes_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._nodes_cloner.getFilteredNodes(tourNodes, filter);
			me._nodes_cloner.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._nodes_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._nodes_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._nodes_cloner.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._nodes_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_nodes_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._nodes_cloner.ggNodeCount = me._nodes_cloner.ggNumFilterPassed;
			me._nodes_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._nodes_cloner.parentNode && me._nodes_cloner.parentNode.classList.contains('ggskin_subelement') && me._nodes_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._nodes_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="nodes_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 125px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_cloner.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._nodes_cloner.ggCurrentLogicStateSize != newLogicStateSize) {
				me._nodes_cloner.ggCurrentLogicStateSize = newLogicStateSize;
				me._nodes_cloner.style.transition='width 0s, height 0s';
				if (me._nodes_cloner.ggCurrentLogicStateSize == 0) {
					me._nodes_cloner.ggWidth=100;
					me._nodes_cloner.ggHeight=85;
					me._nodes_cloner.ggUpdate();
					skin.updateSize(me._nodes_cloner);
				}
				else {
					me._nodes_cloner.ggWidth=240;
					me._nodes_cloner.ggHeight=125;
					me._nodes_cloner.ggUpdate();
					skin.updateSize(me._nodes_cloner);
				}
			}
		}
		me._nodes_cloner.logicBlock_size();
		me._nodes_cloner.ggCurrentLogicStateSize = -1;
		me._nodes_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._nodes_cloner.childNodes.length; i++) {
				var child=me._nodes_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._nodes_cloner.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			var newWidth = (pw*100)/100.0;
			if (newWidth != this.ggWidth) {
				this.ggWidth = newWidth;
				this.ggSizeChanged = true;
			}
			me._nodes_cloner.ggUpdate();
		}
		me._nodes_scroller__content.appendChild(me._nodes_cloner);
		me._nodes.appendChild(me._nodes_scroller);
		el=me._nodes_category_bg=document.createElement('div');
		el.ggId="nodes_category_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #e6e6e6;';
		hs+='border-radius : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_category_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_category_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('has_categories') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodes_category_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodes_category_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodes_category_bg.style.transition='';
				if (me._nodes_category_bg.ggCurrentLogicStateVisible == 0) {
					me._nodes_category_bg.style.visibility="hidden";
					me._nodes_category_bg.ggVisible=false;
				}
				else {
					me._nodes_category_bg.style.visibility=(Number(me._nodes_category_bg.style.opacity)>0||!me._nodes_category_bg.style.opacity)?'inherit':'hidden';
					me._nodes_category_bg.ggVisible=true;
				}
			}
		}
		me._nodes_category_bg.logicBlock_visible();
		me._nodes_category_bg.onclick=function (e) {
			player.setVariableValue('vis_thumbs_nodes', false);
			player.setVariableValue('vis_thumbs_categories', true);
		}
		me._nodes_category_bg.onmouseenter=function (e) {
			me.elementMouseOver['nodes_category_bg']=true;
			me._nodes_back_hover.logicBlock_visible();
		}
		me._nodes_category_bg.onmouseleave=function (e) {
			me.elementMouseOver['nodes_category_bg']=false;
			me._nodes_back_hover.logicBlock_visible();
		}
		me._nodes_category_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._nodes_category_title=document.createElement('div');
		els=me._nodes_category_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="nodes_category_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 12px 0px 12px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._nodes_category_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._nodes_category_title.ggUpdateText();
		el.appendChild(els);
		me._nodes_category_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_category_title.ggUpdatePosition=function (useTransition) {
		}
		me._nodes_category_bg.appendChild(me._nodes_category_title);
		el=me._nodes_back=document.createElement('div');
		els=me._nodes_back__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIyOS45LDQ1LjkgMTYsMzIgMTYsMzIgMjkuOSwxOC4xICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeTI9IjMyIiB4Mj0iMTcuNiIg'+
			'eDE9IjQ4IiBjbGFzcz0ic3QxIiB5MT0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._nodes_back__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="nodes_back";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_back.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_back.ggUpdatePosition=function (useTransition) {
		}
		me._nodes_category_bg.appendChild(me._nodes_back);
		el=me._nodes_back_hover=document.createElement('div');
		els=me._nodes_back_hover__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcG9pbnRzPSIyOS45MyA0NS45NCAxNiAzMS45OSAxNiAzMS45OSAyOS'+
			'45MyAxOC4wNiIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjMyIiB4Mj0iMTcuNjQiIHgxPSI0OCIgeTE9IjMyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._nodes_back_hover__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="nodes_back_hover";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._nodes_back_hover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._nodes_back_hover.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['nodes_category_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._nodes_back_hover.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._nodes_back_hover.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._nodes_back_hover.style.transition='';
				if (me._nodes_back_hover.ggCurrentLogicStateVisible == 0) {
					me._nodes_back_hover.style.visibility=(Number(me._nodes_back_hover.style.opacity)>0||!me._nodes_back_hover.style.opacity)?'inherit':'hidden';
					me._nodes_back_hover.ggVisible=true;
				}
				else {
					me._nodes_back_hover.style.visibility="hidden";
					me._nodes_back_hover.ggVisible=false;
				}
			}
		}
		me._nodes_back_hover.logicBlock_visible();
		me._nodes_back_hover.ggUpdatePosition=function (useTransition) {
		}
		me._nodes_category_bg.appendChild(me._nodes_back_hover);
		me._nodes.appendChild(me._nodes_category_bg);
		me._thumbnail_menu.appendChild(me._nodes);
		el=me._categories_scroller=document.createElement('div');
		els=me._categories_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 44px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 242px;';
		hs+="";
		els.setAttribute('style',hs);
		me._categories_scroller.ggScrollByX = function(diffX) {
			if(!me._categories_scroller.ggHorScrollVisible || diffX == 0 || me._categories_scroller.ggHPercentVisible >= 1.0) return;
			me._categories_scroller.ggScrollPosX = (me._categories_scroller__horScrollFg.offsetLeft + diffX);
			me._categories_scroller.ggScrollPosX = Math.max(me._categories_scroller.ggScrollPosX, 0);
			me._categories_scroller.ggScrollPosX = Math.min(me._categories_scroller.ggScrollPosX, me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
			me._categories_scroller__horScrollFg.style.left = me._categories_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosX / (me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
			me._categories_scroller__content.style.left = -(Math.round((me._categories_scroller.ggContentWidth * (1.0 - me._categories_scroller.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentLeftOffset + 'px';
			me._categories_scroller.ggScrollPosXPercent = (me._categories_scroller__horScrollFg.offsetLeft / me._categories_scroller__horScrollBg.offsetWidth);
		}
		me._categories_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._categories_scroller.ggHorScrollVisible || diffX == 0 || me._categories_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._categories_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._categories_scroller.ggScrollPosX >= me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth)) {
					me._categories_scroller.ggScrollPosX = Math.min(me._categories_scroller.ggScrollPosX, me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._categories_scroller.ggScrollPosX <= 0)) {
					me._categories_scroller.ggScrollPosX = Math.max(me._categories_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._categories_scroller__horScrollFg.style.left = me._categories_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosX / (me._categories_scroller__horScrollBg.offsetWidth - me._categories_scroller__horScrollFg.offsetWidth);
			me._categories_scroller__content.style.left = -(Math.round((me._categories_scroller.ggContentWidth * (1.0 - me._categories_scroller.ggHPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentLeftOffset + 'px';
			me._categories_scroller.ggScrollPosXPercent = (me._categories_scroller__horScrollFg.offsetLeft / me._categories_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._categories_scroller.ggScrollByY = function(diffY) {
			if(!me._categories_scroller.ggVertScrollVisible || diffY == 0 || me._categories_scroller.ggVPercentVisible >= 1.0) return;
			me._categories_scroller.ggScrollPosY = (me._categories_scroller__vertScrollFg.offsetTop + diffY);
			me._categories_scroller.ggScrollPosY = Math.max(me._categories_scroller.ggScrollPosY, 0);
			me._categories_scroller.ggScrollPosY = Math.min(me._categories_scroller.ggScrollPosY, me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
			me._categories_scroller__vertScrollFg.style.top = me._categories_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosY / (me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
			me._categories_scroller__content.style.top = -(Math.round((me._categories_scroller.ggContentHeight * (1.0 - me._categories_scroller.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentTopOffset + 'px';
			me._categories_scroller.ggScrollPosYPercent = (me._categories_scroller__vertScrollFg.offsetTop / me._categories_scroller__vertScrollBg.offsetHeight);
		}
		me._categories_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._categories_scroller.ggVertScrollVisible || diffY == 0 || me._categories_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._categories_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._categories_scroller.ggScrollPosY >= me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight)) {
					me._categories_scroller.ggScrollPosY = Math.min(me._categories_scroller.ggScrollPosY, me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._categories_scroller.ggScrollPosY <= 0)) {
					me._categories_scroller.ggScrollPosY = Math.max(me._categories_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._categories_scroller__vertScrollFg.style.top = me._categories_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._categories_scroller.ggScrollPosY / (me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
			me._categories_scroller__content.style.top = -(Math.round((me._categories_scroller.ggContentHeight * (1.0 - me._categories_scroller.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentTopOffset + 'px';
			me._categories_scroller.ggScrollPosYPercent = (me._categories_scroller__vertScrollFg.offsetTop / me._categories_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._categories_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._categories_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._categories_scroller.ggHPercentVisible);
					me._categories_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._categories_scroller.clientWidth - (me._categories_scroller.ggVertScrollVisible ? 7 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._categories_scroller.clientWidth - (me._categories_scroller.ggVertScrollVisible ? 7 : 0))) * me._categories_scroller.ggHPercentVisible);
					me._categories_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._categories_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._categories_scroller.ggVPercentVisible);
					me._categories_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._categories_scroller.clientHeight - (me._categories_scroller.ggHorScrollVisible ? 7 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._categories_scroller.clientHeight - (me._categories_scroller.ggHorScrollVisible ? 7 : 0))) * me._categories_scroller.ggVPercentVisible);
					me._categories_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._categories_scroller__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._categories_scroller.ggDragInertiaX *= 0.96;
				me._categories_scroller.ggDragInertiaY *= 0.96;
				me._categories_scroller.ggScrollByX(me._categories_scroller.ggDragInertiaX);
				me._categories_scroller.ggScrollByY(me._categories_scroller.ggDragInertiaY);
				if (Math.abs(me._categories_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._categories_scroller.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._categories_scroller__content.onmouseup = null;
			me._categories_scroller__content.onmousemove = null;
			me._categories_scroller__content.ontouchend = null;
			me._categories_scroller__content.ontouchmove = null;
			me._categories_scroller__content.onpointerup = null;
			me._categories_scroller__content.onpointermove = null;
			setTimeout(function() { me._categories_scroller.ggIsDragging = false; }, 100);
		}
		me._categories_scroller__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._categories_scroller.ggDragStartX) > 10 || Math.abs(eventY - me._categories_scroller.ggDragStartY) > 10) me._categories_scroller.ggIsDragging = true;
			var diffX = (eventX - me._categories_scroller.ggDragLastX) * me._categories_scroller.ggHPercentVisible;
			var diffY = (eventY - me._categories_scroller.ggDragLastY) * me._categories_scroller.ggVPercentVisible;
			me._categories_scroller.ggDragInertiaX = -diffX;
			me._categories_scroller.ggDragInertiaY = -diffY;
			me._categories_scroller.ggDragLastX = eventX;
			me._categories_scroller.ggDragLastY = eventY;
			me._categories_scroller.ggScrollByX(-diffX);
			me._categories_scroller.ggScrollByY(-diffY);
		}
		me._categories_scroller__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._categories_scroller.ggDragLastX = me._categories_scroller.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._categories_scroller.ggDragLastY = me._categories_scroller.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._categories_scroller__content.onmouseup = me._categories_scroller__content.mousetouchend;
			me._categories_scroller__content.ontouchend = me._categories_scroller__content.mousetouchend;
			me._categories_scroller__content.onmousemove = me._categories_scroller__content.mousetouchmove;
			me._categories_scroller__content.ontouchmove = me._categories_scroller__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._categories_scroller__content.onpointerup = me._categories_scroller__content.ontouchend;
				me._categories_scroller__content.onpointermove = me._categories_scroller__content.ontouchmove;
			}
		}
		els.onmousedown = me._categories_scroller__content.mousetouchstart;
		els.ontouchstart = me._categories_scroller__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._categories_scroller__content.mousetouchstart;
		}
		elVertScrollBg = me._categories_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 7px; height: 277px; background-color: rgba(128,128,128,1); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._categories_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 7px; height: 277px; background-color: rgba(192,192,192,1); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._categories_scroller.ggScrollPosY = 0;
		me._categories_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._categories_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller.ggDragInertiaY *= 0.96;
					me._categories_scroller.ggScrollByY(me._categories_scroller.ggDragInertiaY);
					if (Math.abs(me._categories_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._categories_scroller.ggDragLastY;
				me._categories_scroller.ggDragInertiaY = diffY;
				me._categories_scroller.ggDragLastY = e.clientY;
				me._categories_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._categories_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._categories_scroller.ggDragInertiaY *= 0.96;
					me._categories_scroller.ggScrollByY(me._categories_scroller.ggDragInertiaY);
					if (Math.abs(me._categories_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._categories_scroller.ggDragLastY;
				me._categories_scroller.ggDragInertiaY = diffY;
				me._categories_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._categories_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._categories_scroller.ggScrollHeight;
			if (e.offsetY < me._categories_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._categories_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._categories_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._categories_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._categories_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._categories_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._categories_scroller.ggScrollByYSmooth(30 * me._categories_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._categories_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 7px; height: 7px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="categories_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 24px);';
		hs+='left : 12px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_scroller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbs_categories') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._categories_scroller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._categories_scroller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._categories_scroller.style.transition='';
				if (me._categories_scroller.ggCurrentLogicStateVisible == 0) {
					me._categories_scroller.style.visibility=(Number(me._categories_scroller.style.opacity)>0||!me._categories_scroller.style.opacity)?'inherit':'hidden';
					me._categories_scroller.ggVisible=true;
				}
				else {
					me._categories_scroller.style.visibility="hidden";
					me._categories_scroller.ggVisible=false;
				}
			}
		}
		me._categories_scroller.logicBlock_visible();
		me._categories_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = me._categories_scroller.clientWidth * 1;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._categories_scroller.ggScrollPosY / me._categories_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._categories_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 7) || (!me._categories_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._categories_scroller__vertScrollBg.style.visibility = 'inherit';
					me._categories_scroller__vertScrollFg.style.visibility = 'inherit';
					me._categories_scroller.ggVertScrollVisible = true;
				} else {
					me._categories_scroller__vertScrollBg.style.visibility = 'hidden';
					me._categories_scroller__vertScrollFg.style.visibility = 'hidden';
					me._categories_scroller.ggVertScrollVisible = false;
				}
				if(me._categories_scroller.ggVertScrollVisible) {
					me._categories_scroller.ggAvailableWidth = me._categories_scroller.clientWidth - 7;
					if (me._categories_scroller.ggHorScrollVisible) {
						me._categories_scroller.ggAvailableHeight = me._categories_scroller.clientHeight - 7;
						me._categories_scroller.ggAvailableHeightWithScale = me._categories_scroller.getBoundingClientRect().height - me._categories_scroller__vertScrollBg.getBoundingClientRect().width;
						me._categories_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._categories_scroller.ggAvailableHeight = me._categories_scroller.clientHeight;
						me._categories_scroller.ggAvailableHeightWithScale = me._categories_scroller.getBoundingClientRect().height;
						me._categories_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._categories_scroller__vertScrollBg.style.height = me._categories_scroller.ggAvailableHeight + 'px';
					me._categories_scroller.ggVPercentVisible = contentHeight != 0 ? me._categories_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._categories_scroller.ggVPercentVisible > 1.0) me._categories_scroller.ggVPercentVisible = 1.0;
					me._categories_scroller.ggScrollHeight =  Math.round(me._categories_scroller__vertScrollBg.offsetHeight * me._categories_scroller.ggVPercentVisible);
					me._categories_scroller__vertScrollFg.style.height = me._categories_scroller.ggScrollHeight + 'px';
					me._categories_scroller.ggScrollPosY = me._categories_scroller.ggScrollPosYPercent * me._categories_scroller.ggAvailableHeight;
					me._categories_scroller.ggScrollPosY = Math.min(me._categories_scroller.ggScrollPosY, me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
					me._categories_scroller__vertScrollFg.style.top = me._categories_scroller.ggScrollPosY + 'px';
					if (me._categories_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._categories_scroller.ggScrollPosY / (me._categories_scroller__vertScrollBg.offsetHeight - me._categories_scroller__vertScrollFg.offsetHeight);
						me._categories_scroller__content.style.top = -(Math.round((me._categories_scroller.ggContentHeight * (1.0 - me._categories_scroller.ggVPercentVisible)) * percentScrolled)) + me._categories_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._categories_scroller.ggAvailableWidth = me._categories_scroller.clientWidth;
					me._categories_scroller.ggScrollPosY = 0;
					me._categories_scroller.ggScrollPosYPercent = 0.0;
					me._categories_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._categories_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._categories_scroller.ggHorScrollVisible || vertScrollWasVisible != me._categories_scroller.ggVertScrollVisible) {
					skin.updateSize(me._categories_scroller);
					me._categories_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._categories_cloner=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._categories_cloner;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 242;
		el.ggHeight = 45;
		el.ggSizeChanged = false;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._categories_cloner.ggUpdating == true) return;
			me._categories_cloner.ggUpdating = true;
			var el=me._categories_cloner;
			var curNumCols = 0;
			curNumCols = me._categories_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && !el.ggSizeChanged && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._categories_cloner.ggUpdating = false;
				return;
			} else {
				el.ggSizeChanged = false;
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._categories_cloner.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._categories_cloner.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			me._categories_cloner.ggNumFilterPassed = 0;
			var firstNode;
			for (var i = 0; i < el.ggTagTable.length; i++) {
				var cItem = el.ggTagTable[i];
				firstNode = '';
				cItem.nodecount = 0;
				for (var j=0; j < tourNodes.length; j++) {
					var nodeData = player.getNodeUserdata(tourNodes[j]);
					if ((nodeData['tags'].indexOf(cItem.tag) != -1) || (cItem.tag=='')) {
						var passed = true;
						if (filter.length > 0) {
							for (var k=0; k < filter.length; k++) {
								if (nodeData['tags'].indexOf(filter[k].trim()) == -1) passed = false;
							}
						}
						if (passed) {
							cItem.nodecount++;
							if (firstNode == '') firstNode = tourNodes[j];
						}
					}
				}
				cItem.firstnode=firstNode;
				if (cItem.nodecount == 0) continue;
				me._categories_cloner.ggNumFilterPassed++;
				var nodeId = {};
				nodeId['tag'] = cItem.tag;
				nodeId['title'] = cItem.title;
				nodeId['description'] = cItem.description;
				nodeId['nodecount'] = cItem.nodecount;
				nodeId['firstnode'] = cItem.firstnode;
				if (!keepCloning || i < me._categories_cloner.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._categories_cloner.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._categories_cloner.ggWidth) + 'px';
				parameter.width='100%';
				parameter.height=me._categories_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				var inst = new SkinCloner_categories_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
			}
			me._categories_cloner.ggNodeCount = me._categories_cloner.ggNumFilterPassed;
			me._categories_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._categories_cloner.parentNode && me._categories_cloner.parentNode.classList.contains('ggskin_subelement') && me._categories_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._categories_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggTagTable = [
			];
		el.ggId="categories_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._categories_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._categories_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._categories_cloner.childNodes.length; i++) {
				var child=me._categories_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._categories_cloner.ggUpdatePosition=function (useTransition) {
			var pw = this.parentNode.clientWidth;
			var newWidth = (pw*100)/100.0;
			if (newWidth != this.ggWidth) {
				this.ggWidth = newWidth;
				this.ggSizeChanged = true;
			}
			me._categories_cloner.ggUpdate();
		}
		me._categories_scroller__content.appendChild(me._categories_cloner);
		me._thumbnail_menu.appendChild(me._categories_scroller);
		me._content_left.appendChild(me._thumbnail_menu);
		me._controls_left_container.appendChild(me._content_left);
		el=me._content_buttons=document.createElement('div');
		el.ggId="content_buttons";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 90px;';
		hs+='height : 128px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._content_buttons.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._content_buttons.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_thumbs=document.createElement('div');
		el.ggId="btn_thumbs";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_thumbs.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_thumbs.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsTour() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_thumbs.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_thumbs.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_thumbs.style.transition='';
				if (me._btn_thumbs.ggCurrentLogicStateVisible == 0) {
					me._btn_thumbs.style.visibility=(Number(me._btn_thumbs.style.opacity)>0||!me._btn_thumbs.style.opacity)?'inherit':'hidden';
					me._btn_thumbs.ggVisible=true;
				}
				else {
					me._btn_thumbs.style.visibility="hidden";
					me._btn_thumbs.ggVisible=false;
				}
			}
		}
		me._btn_thumbs.logicBlock_visible();
		me._btn_thumbs.onclick=function (e) {
			player.setVariableValue('vis_thumbs', true);
			player.setVariableValue('vis_info', false);
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('controls_left_open', true);
		}
		me._btn_thumbs.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_thumbs_bg=document.createElement('div');
		el.ggId="btn_thumbs_bg";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 13px 13px 0px;';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_thumbs_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_thumbs_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_thumbs') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_thumbs_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_thumbs_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_thumbs_bg.style.transition='';
				if (me._btn_thumbs_bg.ggCurrentLogicStateVisible == 0) {
					me._btn_thumbs_bg.style.visibility=(Number(me._btn_thumbs_bg.style.opacity)>0||!me._btn_thumbs_bg.style.opacity)?'inherit':'hidden';
					me._btn_thumbs_bg.ggVisible=true;
				}
				else {
					me._btn_thumbs_bg.style.visibility="hidden";
					me._btn_thumbs_bg.ggVisible=false;
				}
			}
		}
		me._btn_thumbs_bg.logicBlock_visible();
		me._btn_thumbs_bg.ggUpdatePosition=function (useTransition) {
		}
		me._btn_thumbs.appendChild(me._btn_thumbs_bg);
		el=me._btn_thumbs_icon=document.createElement('div');
		els=me._btn_thumbs_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cmVjdCB3aWR0aD0iMTAuNyIgeT0iMzcuMyIgeD0iMTYiIGNsYXNzPSJzdDEiIGhlaWdodD0iMTAuNyIvPgogIDxyZWN0IHdpZHRoPSIxMC43IiB5PSIzNy4zIiB4PSIz'+
			'Ny4zIiBjbGFzcz0ic3QxIiBoZWlnaHQ9IjEwLjciLz4KICA8cmVjdCB3aWR0aD0iMTAuNyIgeT0iMTYiIHg9IjE2IiBjbGFzcz0ic3QxIiBoZWlnaHQ9IjEwLjciLz4KICA8cmVjdCB3aWR0aD0iMTAuNyIgeT0iMTYiIHg9IjM3LjMiIGNsYXNzPSJzdDEiIGhlaWdodD0iMTAuNyIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_thumbs_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_thumbs_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHJlY3Qgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB3aWR0aD0iMTAuNjciIHk9IjM3LjMzIiB4PSIxNiIgaGVpZ2h0PSIxMC42Ny'+
			'IvPgogIDxyZWN0IHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgd2lkdGg9IjEwLjY3IiB5PSIzNy4zMyIgeD0iMzcuMzMiIGhlaWdodD0iMTAuNjciLz4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHdpZHRoPSIxMC42NyIgeT0iMTYiIHg9IjE2IiBoZWlnaHQ9IjEwLjY3Ii8+CiAgPHJlY3Qgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJv'+
			'a2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB3aWR0aD0iMTAuNjciIHk9IjE2IiB4PSIzNy4zMyIgaGVpZ2h0PSIxMC42NyIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_thumbs_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_thumbs_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_thumbs_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_thumbs_icon.onmouseenter=function (e) {
			me._btn_thumbs_icon__img.style.visibility='hidden';
			me._btn_thumbs_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_thumbs_icon']=true;
		}
		me._btn_thumbs_icon.onmouseleave=function (e) {
			me._btn_thumbs_icon__img.style.visibility='inherit';
			me._btn_thumbs_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_thumbs_icon']=false;
		}
		me._btn_thumbs_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_thumbs.appendChild(me._btn_thumbs_icon);
		me._content_buttons.appendChild(me._btn_thumbs);
		el=me._btn_map=document.createElement('div');
		el.ggId="btn_map";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_map.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_maps') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_map.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_map.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_map.style.transition='';
				if (me._btn_map.ggCurrentLogicStateVisible == 0) {
					me._btn_map.style.visibility=(Number(me._btn_map.style.opacity)>0||!me._btn_map.style.opacity)?'inherit':'hidden';
					me._btn_map.ggVisible=true;
				}
				else {
					me._btn_map.style.visibility="hidden";
					me._btn_map.ggVisible=false;
				}
			}
		}
		me._btn_map.logicBlock_visible();
		me._btn_map.onclick=function (e) {
			player.setVariableValue('vis_map', true);
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('vis_info', false);
			player.setVariableValue('vis_thumbs', false);
			player.setVariableValue('controls_left_open', true);
		}
		me._btn_map.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_map_bg=document.createElement('div');
		el.ggId="btn_map_bg";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 13px 13px 0px;';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_map_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_map') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_map_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_map_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_map_bg.style.transition='';
				if (me._btn_map_bg.ggCurrentLogicStateVisible == 0) {
					me._btn_map_bg.style.visibility=(Number(me._btn_map_bg.style.opacity)>0||!me._btn_map_bg.style.opacity)?'inherit':'hidden';
					me._btn_map_bg.ggVisible=true;
				}
				else {
					me._btn_map_bg.style.visibility="hidden";
					me._btn_map_bg.ggVisible=false;
				}
			}
		}
		me._btn_map_bg.logicBlock_visible();
		me._btn_map_bg.ggUpdatePosition=function (useTransition) {
		}
		me._btn_map.appendChild(me._btn_map_bg);
		el=me._btn_map_icon=document.createElement('div');
		els=me._btn_map_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzIsMTZjNS45LDAsMTAuNyw0LjgsMTAuNywxMC43bDAsMGMwLDYuOS01LjUsMTctMTAuNywyMS4zbDAsMGMtNS4xLTQuMy0xMC43LTE0LjQtMTAuNy0y'+
			'MS4zbDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjMsMjAuOCwyNi4xLDE2LDMyLDE2TDMyLDE2eiIgY2xhc3M9InN0MSIvPgogIDxjaXJjbGUgcj0iMS4zIiBjeD0iMzIiIGNsYXNzPSJzdDEiIGN5PSIyNi43Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_map_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_map_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiBkPSJNMzIsMTZBMTAuNjcsMTAuNjcsMCwwLDEsNDIuNjcsMjYuNjdoMGMwLD'+
			'YuOTEtNS41MywxNy0xMC42NywyMS4zM2gwYy01LjE0LTQuMzUtMTAuNjctMTQuNDItMTAuNjctMjEuMzNoMEExMC42NywxMC42NywwLDAsMSwzMiwxNloiLz4KICA8Y2lyY2xlIHI9IjEuMzMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgY3g9IjMyIiBjeT0iMjYuNjciLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_map_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_map_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_map_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_map_icon.onmouseenter=function (e) {
			me._btn_map_icon__img.style.visibility='hidden';
			me._btn_map_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_map_icon']=true;
		}
		me._btn_map_icon.onmouseleave=function (e) {
			me._btn_map_icon__img.style.visibility='inherit';
			me._btn_map_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_map_icon']=false;
		}
		me._btn_map_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_map.appendChild(me._btn_map_icon);
		me._content_buttons.appendChild(me._btn_map);
		el=me._btn_floorplan=document.createElement('div');
		el.ggId="btn_floorplan";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_floorplan.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_floorplans') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_floorplan.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_floorplan.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_floorplan.style.transition='';
				if (me._btn_floorplan.ggCurrentLogicStateVisible == 0) {
					me._btn_floorplan.style.visibility=(Number(me._btn_floorplan.style.opacity)>0||!me._btn_floorplan.style.opacity)?'inherit':'hidden';
					me._btn_floorplan.ggVisible=true;
				}
				else {
					me._btn_floorplan.style.visibility="hidden";
					me._btn_floorplan.ggVisible=false;
				}
			}
		}
		me._btn_floorplan.logicBlock_visible();
		me._btn_floorplan.onclick=function (e) {
			player.setVariableValue('vis_floorplan', true);
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_info', false);
			player.setVariableValue('vis_thumbs', false);
			player.setVariableValue('controls_left_open', true);
		}
		me._btn_floorplan.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_floorplan_bg=document.createElement('div');
		el.ggId="btn_floorplan_bg";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 13px 13px 0px;';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_floorplan_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_floorplan') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_floorplan_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_floorplan_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_floorplan_bg.style.transition='';
				if (me._btn_floorplan_bg.ggCurrentLogicStateVisible == 0) {
					me._btn_floorplan_bg.style.visibility=(Number(me._btn_floorplan_bg.style.opacity)>0||!me._btn_floorplan_bg.style.opacity)?'inherit':'hidden';
					me._btn_floorplan_bg.ggVisible=true;
				}
				else {
					me._btn_floorplan_bg.style.visibility="hidden";
					me._btn_floorplan_bg.ggVisible=false;
				}
			}
		}
		me._btn_floorplan_bg.logicBlock_visible();
		me._btn_floorplan_bg.ggUpdatePosition=function (useTransition) {
		}
		me._btn_floorplan.appendChild(me._btn_floorplan_bg);
		el=me._btn_floorplan_icon=document.createElement('div');
		els=me._btn_floorplan_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjI2LjcsMjEuMyAzNy4zLDE2IDQ4LDIxLjMgNDgsNDggMzcuMyw0Mi43IDI2LjcsNDggMTYsNDIuNyAxNiwxNiAgIiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeTI9IjQy'+
			'LjciIHgyPSIzNy4zIiB4MT0iMzcuMyIgY2xhc3M9InN0MSIgeTE9IjE2Ii8+CiAgPGxpbmUgeTI9IjQ4IiB4Mj0iMjYuNyIgeDE9IjI2LjciIGNsYXNzPSJzdDEiIHkxPSIyMS4zIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_floorplan_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_floorplan_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlnb24gc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiBwb2ludHM9IjI2LjY3IDIxLjMzIDM3LjMzIDE2IDQ4IDIxLjMzIDQ4ID'+
			'Q4IDM3LjMzIDQyLjY3IDI2LjY3IDQ4IDE2IDQyLjY3IDE2IDE2IDI2LjY3IDIxLjMzIi8+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDIuNjciIHgyPSIzNy4zMyIgeDE9IjM3LjMzIiB5MT0iMTYiLz4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0OCIgeDI9IjI2LjY3IiB4MT0iMjYuNjciIHkxPSIyMS4zMyIvPgogPC9n'+
			'Pgo8L3N2Zz4K';
		me._btn_floorplan_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_floorplan_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_floorplan_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_floorplan_icon.onmouseenter=function (e) {
			me._btn_floorplan_icon__img.style.visibility='hidden';
			me._btn_floorplan_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_floorplan_icon']=true;
		}
		me._btn_floorplan_icon.onmouseleave=function (e) {
			me._btn_floorplan_icon__img.style.visibility='inherit';
			me._btn_floorplan_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_floorplan_icon']=false;
		}
		me._btn_floorplan_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_floorplan.appendChild(me._btn_floorplan_icon);
		me._content_buttons.appendChild(me._btn_floorplan);
		el=me._btn_info=document.createElement('div');
		el.ggId="btn_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_info.style.transition='';
				if (me._btn_info.ggCurrentLogicStateVisible == 0) {
					me._btn_info.style.visibility=(Number(me._btn_info.style.opacity)>0||!me._btn_info.style.opacity)?'inherit':'hidden';
					me._btn_info.ggVisible=true;
				}
				else {
					me._btn_info.style.visibility="hidden";
					me._btn_info.ggVisible=false;
				}
			}
		}
		me._btn_info.logicBlock_visible();
		me._btn_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_info_enabled=document.createElement('div');
		el.ggId="btn_info_enabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_enabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_info_enabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.description) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_info_enabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_info_enabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_info_enabled.style.transition='';
				if (me._btn_info_enabled.ggCurrentLogicStateVisible == 0) {
					me._btn_info_enabled.style.visibility="hidden";
					me._btn_info_enabled.ggVisible=false;
				}
				else {
					me._btn_info_enabled.style.visibility=(Number(me._btn_info_enabled.style.opacity)>0||!me._btn_info_enabled.style.opacity)?'inherit':'hidden';
					me._btn_info_enabled.ggVisible=true;
				}
			}
		}
		me._btn_info_enabled.logicBlock_visible();
		me._btn_info_enabled.onclick=function (e) {
			player.setVariableValue('vis_info', true);
			player.setVariableValue('vis_thumbs', false);
			player.setVariableValue('vis_map', false);
			player.setVariableValue('vis_floorplan', false);
			player.setVariableValue('controls_left_open', true);
		}
		me._btn_info_enabled.ggUpdatePosition=function (useTransition) {
		}
		el=me._btn_info_bg=document.createElement('div');
		el.ggId="btn_info_bg";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 13px 13px 0px;';
		hs+='cursor : default;';
		hs+='height : 26px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : calc(50% - ((26px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_info_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_info_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_info_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_info_bg.style.transition='';
				if (me._btn_info_bg.ggCurrentLogicStateVisible == 0) {
					me._btn_info_bg.style.visibility=(Number(me._btn_info_bg.style.opacity)>0||!me._btn_info_bg.style.opacity)?'inherit':'hidden';
					me._btn_info_bg.ggVisible=true;
				}
				else {
					me._btn_info_bg.style.visibility="hidden";
					me._btn_info_bg.ggVisible=false;
				}
			}
		}
		me._btn_info_bg.logicBlock_visible();
		me._btn_info_bg.ggUpdatePosition=function (useTransition) {
		}
		me._btn_info_enabled.appendChild(me._btn_info_bg);
		el=me._btn_info_icon=document.createElement('div');
		els=me._btn_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIHI9IjEuMyIgY3g9IjMyIiBjbGFzcz0ic3QxIiBjeT0iMjAuOCIvPgogIDxsaW5lIHkyPSI0Ny41IiB4Mj0iMzIiIHgxPSIzMiIgY2xhc3M9InN0MSIgeTE9'+
			'IjMxLjUiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_info_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIGN4PSIzMiIgY3k9IjIwLjg0Ii8+CiAgPGxpbmUgc3R5bG'+
			'U9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDcuNSIgeDI9IjMyIiB4MT0iMzIiIHkxPSIzMS41Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_info_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="btn_info_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_info_icon.onmouseenter=function (e) {
			me._btn_info_icon__img.style.visibility='hidden';
			me._btn_info_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['btn_info_icon']=true;
		}
		me._btn_info_icon.onmouseleave=function (e) {
			me._btn_info_icon__img.style.visibility='inherit';
			me._btn_info_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['btn_info_icon']=false;
		}
		me._btn_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._btn_info_enabled.appendChild(me._btn_info_icon);
		me._btn_info.appendChild(me._btn_info_enabled);
		el=me._btn_info_disabled=document.createElement('div');
		els=me._btn_info_disabled__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojM2QzZDNkO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIHI9IjEuMyIgY3g9IjMyIiBjbGFzcz0ic3QxIiBjeT0iMjAuOCIvPgogIDxsaW5lIHkyPSI0Ny41IiB4Mj0iMzIiIHgxPSIzMiIgY2xhc3M9InN0MSIgeTE9'+
			'IjMxLjUiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_info_disabled__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="btn_info_disabled";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._btn_info_disabled.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._btn_info_disabled.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.ggUserdata.description) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._btn_info_disabled.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._btn_info_disabled.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._btn_info_disabled.style.transition='';
				if (me._btn_info_disabled.ggCurrentLogicStateVisible == 0) {
					me._btn_info_disabled.style.visibility=(Number(me._btn_info_disabled.style.opacity)>0||!me._btn_info_disabled.style.opacity)?'inherit':'hidden';
					me._btn_info_disabled.ggVisible=true;
				}
				else {
					me._btn_info_disabled.style.visibility="hidden";
					me._btn_info_disabled.ggVisible=false;
				}
			}
		}
		me._btn_info_disabled.logicBlock_visible();
		me._btn_info_disabled.ggUpdatePosition=function (useTransition) {
		}
		me._btn_info.appendChild(me._btn_info_disabled);
		me._content_buttons.appendChild(me._btn_info);
		me._controls_left_container.appendChild(me._content_buttons);
		me._controls_container.appendChild(me._controls_left_container);
		el=me._toggle_controls_left=document.createElement('div');
		el.ggId="toggle_controls_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 0px 16px 16px 0px;';
		hs+='bottom : 42px;';
		hs+='cursor : pointer;';
		hs+='height : 36px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_controls_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_controls_left.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_controls') == false)) && 
				((player.getVariableValue('controls_left_open') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._toggle_controls_left.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._toggle_controls_left.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._toggle_controls_left.style.transition='opacity 200ms ease 1100ms';
				if (me._toggle_controls_left.ggCurrentLogicStateAlpha == 0) {
					me._toggle_controls_left.style.visibility=me._toggle_controls_left.ggVisible?'inherit':'hidden';
					me._toggle_controls_left.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._toggle_controls_left.style.opacity == 0.0) { me._toggle_controls_left.style.visibility="hidden"; } }, 1305);
					me._toggle_controls_left.style.opacity=0;
				}
			}
		}
		me._toggle_controls_left.logicBlock_alpha();
		me._toggle_controls_left.onclick=function (e) {
			player.setVariableValue('controls_left_open', !player.getVariableValue('controls_left_open'));
			me._toggle_controls_left.style.transition='none';
			me._toggle_controls_left.style.visibility='hidden';
			me._toggle_controls_left.ggVisible=false;
			me._toggle_controls_left.style.transition='none';
			me._toggle_controls_left.style.opacity='0';
			me._toggle_controls_left.style.visibility='hidden';
		}
		me._toggle_controls_left.ggUpdatePosition=function (useTransition) {
		}
		el=me._toggle_controls_left_icon=document.createElement('div');
		els=me._toggle_controls_left_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIHI9IjEuMyIgY3g9IjMyIiBjbGFzcz0ic3QxIiBjeT0iMzIiLz4KICA8Y2lyY2xlIHI9IjEuMyIgY3g9IjMyIiBjbGFzcz0ic3QxIiBjeT0iMjEuMyIvPgog'+
			'IDxjaXJjbGUgcj0iMS4zIiBjeD0iMzIiIGNsYXNzPSJzdDEiIGN5PSI0Mi43Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._toggle_controls_left_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_controls_left_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIGN4PSIzMiIgY3k9IjMyIi8+CiAgPGNpcmNsZSByPSIxLj'+
			'MzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIGN4PSIzMiIgY3k9IjIxLjM0Ii8+CiAgPGNpcmNsZSByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIGN4PSIzMiIgY3k9IjQyLjY2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._toggle_controls_left_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="toggle_controls_left_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 2px;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._toggle_controls_left_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._toggle_controls_left_icon.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getVariableValue('controls_left_open') == true))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._toggle_controls_left_icon.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._toggle_controls_left_icon.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._toggle_controls_left_icon.style.transition='transform 800ms ease 0ms';
				if (me._toggle_controls_left_icon.ggCurrentLogicStateAngle == 0) {
					me._toggle_controls_left_icon.ggParameter.a = 90;
					me._toggle_controls_left_icon.style.transform=parameterToTransform(me._toggle_controls_left_icon.ggParameter);
				}
				else {
					me._toggle_controls_left_icon.ggParameter.a = 0;
					me._toggle_controls_left_icon.style.transform=parameterToTransform(me._toggle_controls_left_icon.ggParameter);
				}
			}
		}
		me._toggle_controls_left_icon.logicBlock_angle();
		me._toggle_controls_left_icon.onmouseenter=function (e) {
			me._toggle_controls_left_icon__img.style.visibility='hidden';
			me._toggle_controls_left_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['toggle_controls_left_icon']=true;
		}
		me._toggle_controls_left_icon.onmouseleave=function (e) {
			me._toggle_controls_left_icon__img.style.visibility='inherit';
			me._toggle_controls_left_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['toggle_controls_left_icon']=false;
		}
		me._toggle_controls_left_icon.ggUpdatePosition=function (useTransition) {
		}
		me._toggle_controls_left.appendChild(me._toggle_controls_left_icon);
		me._controls_container.appendChild(me._toggle_controls_left);
		el=me._phone_touch_bg=document.createElement('div');
		el.ggId="phone_touch_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._phone_touch_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._phone_touch_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('resp_phone') == true)) && 
				((player.getVariableValue('controls_left_open') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._phone_touch_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._phone_touch_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._phone_touch_bg.style.transition='';
				if (me._phone_touch_bg.ggCurrentLogicStateVisible == 0) {
					me._phone_touch_bg.style.visibility=(Number(me._phone_touch_bg.style.opacity)>0||!me._phone_touch_bg.style.opacity)?'inherit':'hidden';
					me._phone_touch_bg.ggVisible=true;
				}
				else {
					me._phone_touch_bg.style.visibility="hidden";
					me._phone_touch_bg.ggVisible=false;
				}
			}
		}
		me._phone_touch_bg.logicBlock_visible();
		me._phone_touch_bg.onclick=function (e) {
			player.setVariableValue('controls_left_open', false);
		}
		me._phone_touch_bg.ggUpdatePosition=function (useTransition) {
		}
		me._controls_container.appendChild(me._phone_touch_bg);
		me.divSkin.appendChild(me._controls_container);
		el=me._info_popup=document.createElement('div');
		el.ggId="info_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 5px solid #e6e6e6;';
		hs+='border-radius : 12px;';
		hs+='cursor : default;';
		hs+='height : 40%;';
		hs+='left : calc(50% - ((360px + 10px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40% + 10px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 360px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup.style.transition='';
				if (me._info_popup.ggCurrentLogicStateVisible == 0) {
					me._info_popup.style.visibility=(Number(me._info_popup.style.opacity)>0||!me._info_popup.style.opacity)?'inherit':'hidden';
					me._info_popup.ggVisible=true;
				}
				else {
					me._info_popup.style.visibility="hidden";
					me._info_popup.ggVisible=false;
				}
			}
		}
		me._info_popup.logicBlock_visible();
		me._info_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_body=document.createElement('div');
		els=me._info_popup_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 82px);';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 66px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='font-size: 13px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 10px 0px 10px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_popup_body.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_body.ggUpdateText();
		el.appendChild(els);
		me._info_popup_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_body.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup.appendChild(me._info_popup_body);
		el=me._info_popup_title=document.createElement('div');
		els=me._info_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 24px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup.appendChild(me._info_popup_title);
		el=me._info_popup_close=document.createElement('div');
		els=me._info_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB5Mj0iNDMuMyIgeDI9IjQzLjMiIHgxPSIyMC43IiBjbGFzcz0ic3QxIiB5MT0iMjAuNyIvPgogIDxsaW5lIHkyPSI0My4zIiB4Mj0iMjAuNyIgeDE9IjQzLjMi'+
			'IGNsYXNzPSJzdDEiIHkxPSIyMC43Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._info_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDMuMzEiIHgyPSI0My4zMSIgeDE9IjIwLjY5IiB5MT0iMjAuNjkiLz'+
			'4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiIHkxPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._info_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._info_popup_close.onmouseenter=function (e) {
			me._info_popup_close__img.style.visibility='hidden';
			me._info_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['info_popup_close']=true;
		}
		me._info_popup_close.onmouseleave=function (e) {
			me._info_popup_close__img.style.visibility='inherit';
			me._info_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['info_popup_close']=false;
		}
		me._info_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup.appendChild(me._info_popup_close);
		me.divSkin.appendChild(me._info_popup);
		el=me._media_popup=document.createElement('div');
		el.ggId="media_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._media_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._media_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_url_hs_popup') == true)) || 
				((player.getVariableValue('vis_image_hs_popup') == true)) || 
				((player.getVariableValue('vis_pdf_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_youtube_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_vimeo_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_file_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._media_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._media_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._media_popup.style.transition='';
				if (me._media_popup.ggCurrentLogicStateVisible == 0) {
					me._media_popup.style.visibility=(Number(me._media_popup.style.opacity)>0||!me._media_popup.style.opacity)?'inherit':'hidden';
					me._media_popup.ggVisible=true;
				}
				else {
					me._media_popup.style.visibility="hidden";
					me._media_popup.ggVisible=false;
				}
			}
		}
		me._media_popup.logicBlock_visible();
		me._media_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._blur_bg=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="blur_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._blur_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._blur_bg.onclick=function (e) {
			me._media_popup_close.onclick.call(me._media_popup_close);
		}
		me._blur_bg.ggUpdatePosition=function (useTransition) {
		}
		me._media_popup.appendChild(me._blur_bg);
		el=me._media_popup_bg=document.createElement('div');
		el.ggId="media_popup_bg";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(80% - 40px);';
		hs+='left : calc(50% - ((80% + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((calc(80% - 40px) + 0px) / 2) - 40px);';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._media_popup_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_popup_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_youtube_popup=document.createElement('div');
		me._video_youtube_popup.seekbars = [];
			me._video_youtube_popup.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._video_youtube_popup.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_youtube_popup.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_youtube_popup.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_youtube_popup.hasChildNodes()) {
				me._video_youtube_popup.removeChild(me._video_youtube_popup.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_youtube_popup.ggVideoNotLoaded == false && me._video_youtube_popup.ggDeactivate && player.isPlaying('video_youtube_popup')) { me._video_youtube_popup.ggDeactivate(); }
				me._video_youtube_popup.ggVideoNotLoaded = true;
				return;
			}
			me._video_youtube_popup.ggVideoNotLoaded = false;
			me._video_youtube_popup__vid=document.createElement('iframe');
			me._video_youtube_popup__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._video_youtube_popup__vid.setAttribute('src', ggVideoUrl);
			me._video_youtube_popup__vid.setAttribute('width', '100%');
			me._video_youtube_popup__vid.setAttribute('height', '100%');
			me._video_youtube_popup__vid.setAttribute('allow', 'autoplay');
			me._video_youtube_popup__vid.setAttribute('allowfullscreen', 'true');
			me._video_youtube_popup__vid.setAttribute('style', 'border:none; ; ;');
			me._video_youtube_popup.appendChild(me._video_youtube_popup__vid);
			me._video_youtube_popup__vid.id = 'youtube-video';
			me._video_youtube_popup.ggYoutubeApiReady = function() {
				me._video_youtube_popup.ggApiPlayerType = 'youtube';
				me._video_youtube_popup.ggApiPlayerReady = false;
				me._video_youtube_popup.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._video_youtube_popup.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._video_youtube_popup.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._video_youtube_popup.ggMediaEnded) {
								me._video_youtube_popup.ggMediaEnded();
							}
							if (event.data == 1 && me._video_youtube_popup.ggActivate) {
								me._video_youtube_popup.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._video_youtube_popup.ggDeactivate) {
								me._video_youtube_popup.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'video_youtube_popup' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._video_youtube_popup.ggApiPlayer.unMute();
						if (args.state == 1) skin._video_youtube_popup.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._video_youtube_popup.ggApiPlayer.isMuted()) skin._video_youtube_popup.ggApiPlayer.unMute(); else skin._video_youtube_popup.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'video_youtube_popup' || args.id == '_main') {
						if (args.type == 'set') skin._video_youtube_popup.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._video_youtube_popup.ggApiPlayer.setVolume(skin._video_youtube_popup.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._video_youtube_popup.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._video_youtube_popup.ggYoutubeApiReady();}
		}
		el.ggId="video_youtube_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_youtube_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_youtube_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_youtube_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_youtube_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_youtube_popup.style.transition='';
				if (me._video_youtube_popup.ggCurrentLogicStateVisible == 0) {
					me._video_youtube_popup.style.visibility=(Number(me._video_youtube_popup.style.opacity)>0||!me._video_youtube_popup.style.opacity)?'inherit':'hidden';
					if (me._video_youtube_popup.ggVideoNotLoaded) {
						me._video_youtube_popup.ggInitMedia(me._video_youtube_popup.ggVideoSource);
					}
					me._video_youtube_popup.ggVisible=true;
				}
				else {
					me._video_youtube_popup.style.visibility="hidden";
					me._video_youtube_popup.ggInitMedia('');
					me._video_youtube_popup.ggVisible=false;
				}
			}
		}
		me._video_youtube_popup.logicBlock_visible();
		me._video_youtube_popup.ggUpdatePosition=function (useTransition) {
		}
		me._media_popup_bg.appendChild(me._video_youtube_popup);
		el=me._video_vimeo_popup=document.createElement('div');
		me._video_vimeo_popup.seekbars = [];
		me._video_vimeo_popup.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_vimeo_popup.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_vimeo_popup.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_vimeo_popup.hasChildNodes()) {
				me._video_vimeo_popup.removeChild(me._video_vimeo_popup.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_vimeo_popup.ggVideoNotLoaded == false && me._video_vimeo_popup.ggDeactivate && player.isPlaying('video_vimeo_popup')) { me._video_vimeo_popup.ggDeactivate(); }
				me._video_vimeo_popup.ggVideoNotLoaded = true;
				return;
			}
			me._video_vimeo_popup.ggVideoNotLoaded = false;
			me._video_vimeo_popup__vid=document.createElement('iframe');
			me._video_vimeo_popup__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._video_vimeo_popup__vid.setAttribute('src', ggVideoUrl);
			me._video_vimeo_popup__vid.setAttribute('width', '100%');
			me._video_vimeo_popup__vid.setAttribute('height', '100%');
			me._video_vimeo_popup__vid.setAttribute('allow', 'autoplay');
			me._video_vimeo_popup__vid.setAttribute('allowfullscreen', 'true');
			me._video_vimeo_popup__vid.setAttribute('style', 'border:none; ; ;');
			me._video_vimeo_popup.appendChild(me._video_vimeo_popup__vid);
			me._video_vimeo_popup.ggApiPlayerType = 'vimeo';
			me._video_vimeo_popup.ggApiPlayer = new Vimeo.Player(me._video_vimeo_popup__vid);
			if (player.getPlayerMuted()) me._video_vimeo_popup.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'video_vimeo_popup' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._video_vimeo_popup.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._video_vimeo_popup.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._video_vimeo_popup.ggApiPlayer.getVolume() > 0.0) skin._video_vimeo_popup.ggApiPlayer.setVolume(0); else skin._video_vimeo_popup.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'video_vimeo_popup' || args.id == '_main') {
					if (args.type == 'set') skin._video_vimeo_popup.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._video_vimeo_popup.ggApiPlayer.getVolume().then(function(volume) { skin._video_vimeo_popup.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._video_vimeo_popup.ggVideoSource = media;
		}
		el.ggId="video_vimeo_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_vimeo_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_vimeo_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_vimeo_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_vimeo_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_vimeo_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_vimeo_popup.style.transition='';
				if (me._video_vimeo_popup.ggCurrentLogicStateVisible == 0) {
					me._video_vimeo_popup.style.visibility=(Number(me._video_vimeo_popup.style.opacity)>0||!me._video_vimeo_popup.style.opacity)?'inherit':'hidden';
					if (me._video_vimeo_popup.ggVideoNotLoaded) {
						me._video_vimeo_popup.ggInitMedia(me._video_vimeo_popup.ggVideoSource);
					}
					me._video_vimeo_popup.ggVisible=true;
				}
				else {
					me._video_vimeo_popup.style.visibility="hidden";
					me._video_vimeo_popup.ggInitMedia('');
					me._video_vimeo_popup.ggVisible=false;
				}
			}
		}
		me._video_vimeo_popup.logicBlock_visible();
		me._video_vimeo_popup.ggUpdatePosition=function (useTransition) {
		}
		me._media_popup_bg.appendChild(me._video_vimeo_popup);
		el=me._video_controller=document.createElement('div');
		el.ggId="video_controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 16px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((360px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 360px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_hs_popup') == true)) || 
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller.style.transition='';
				if (me._video_controller.ggCurrentLogicStateVisible == 0) {
					me._video_controller.style.visibility=(Number(me._video_controller.style.opacity)>0||!me._video_controller.style.opacity)?'inherit':'hidden';
					me._video_controller.ggVisible=true;
				}
				else {
					me._video_controller.style.visibility="hidden";
					me._video_controller.ggVisible=false;
				}
			}
		}
		me._video_controller.logicBlock_visible();
		me._video_controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar=document.createElement('div');
		me._video_controller_seekbar__playhead=document.createElement('div');
		me._video_controller_seekbar.mediaEl = null;
		me._video_controller_seekbar.fromBufferSource = false;
		me._video_controller_seekbar.ggMediaId = '';
		el.ggId="video_controller_seekbar";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((6px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar.mediaEl != null) {
					if (e.target == me._video_controller_seekbar) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar || e.target == me._video_controller_seekbar__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar.getBoundingClientRect().x;
							if (me._video_controller_seekbar.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar.clientWidth) * me._video_controller_seekbar.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar.onmousedown = me._video_controller_seekbar.ontouchstart = me._video_controller_seekbar.mouseTouchHandling;
		me._video_controller_seekbar.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar.style.background = '#282828';
				me._video_controller_seekbar.ggConnected = false;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.removeEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.removeEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.removeEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar.mediaEl = player.getMediaObject(me._video_controller_seekbar.ggMediaId);
			if (me._video_controller_seekbar.mediaEl) {
				me._video_controller_seekbar.fromBufferSource = false;
			} else {
				me._video_controller_seekbar.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar.fromBufferSource = true;
			}
			if (me._video_controller_seekbar.mediaEl != null) {
				me._video_controller_seekbar__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar__playhead.style.left = '-11px';
				if (me._video_controller_seekbar.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar.bufferSoundActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar.mediaEl.id) me._video_controller_seekbar.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar.mediaEl.addEventListener('progress', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('canplay', me._video_controller_seekbar.updatePlayback);
					me._video_controller_seekbar.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar.updatePlayback);
					if (me._video_controller_seekbar.ggActivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('play', me._video_controller_seekbar.ggActivate);
					}
					if (me._video_controller_seekbar.ggDeactivate) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggDeactivate);
						me._video_controller_seekbar.mediaEl.addEventListener('pause', me._video_controller_seekbar.ggDeactivate);
					}
					if (me._video_controller_seekbar.ggMediaEnded) {
						me._video_controller_seekbar.mediaEl.addEventListener('ended', me._video_controller_seekbar.ggMediaEnded);
					}
				}
				me._video_controller_seekbar.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar.updatePlayback = function(args) {
			if (!me._video_controller_seekbar.ggConnected) return;
			if (me._video_controller_seekbar.mediaEl != null) {
				if (me._video_controller_seekbar.mediaEl.readyState || (me._video_controller_seekbar.fromBufferSource && args && args['id'] == me._video_controller_seekbar.mediaEl.id)) {
					if (me._video_controller_seekbar.fromBufferSource) {
						var percent = me._video_controller_seekbar.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar.mediaEl.currentTime / me._video_controller_seekbar.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar.clientWidth - 2 * 3 + 0) * percent);
					playheadpos += -11;
					me._video_controller_seekbar__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (3 / me._video_controller_seekbar.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar.fromBufferSource) {
						gradientString += ', rgba(100,100,100,1) ' + currPos +'%, rgba(100,100,100,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar.mediaEl.buffered.start(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar.mediaEl.buffered.end(i) / me._video_controller_seekbar.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(100,100,100,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(40,40,40,1) ' + currPos + '%, rgba(40,40,40,1) ' + rangeStart + '%';
									gradientString += ', rgba(100,100,100,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(100,100,100,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(40,40,40,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar.appendChild(me._video_controller_seekbar__playhead);
		hs+='background : #282828;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 3px;';
		var hs_playhead = 'height: 27px;';
		hs_playhead += 'width: 27px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -11px;';
		hs_playhead += 'top: -10.5px;';
		hs_playhead += 'border-radius: 14px;';
		hs_playhead += cssPrefix + 'border-radius: 14px;';
		hs_playhead += 'background-color: rgba(74,74,74,1);';
		me._video_controller_seekbar.setAttribute('style', hs);
		me._video_controller_seekbar__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar.ggIsActive=function() {
			if (me._video_controller_seekbar.mediaEl != null) {
				return (me._video_controller_seekbar.mediaEl.paused == false && me._video_controller_seekbar.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar.updatePlayback();
		}
		me._video_controller.appendChild(me._video_controller_seekbar);
		me._media_popup_bg.appendChild(me._video_controller);
		el=me._video_file_popup=document.createElement('div');
		me._video_file_popup.seekbars = [];
		me._video_file_popup.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup.hasChildNodes()) {
				me._video_file_popup.removeChild(me._video_file_popup.lastChild);
			}
			if (me._video_file_popup__vid) {
				me._video_file_popup__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup.ggVideoNotLoaded == false && me._video_file_popup.ggDeactivate && player.isPlaying('video_file_popup')) { me._video_file_popup.ggDeactivate(); }
				me._video_file_popup.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup.ggVideoNotLoaded = false;
			me._video_file_popup__vid=document.createElement('video');
			me._video_file_popup__vid.className='ggskin ggskin_video';
			me._video_file_popup__vid.setAttribute('width', '100%');
			me._video_file_popup__vid.setAttribute('height', '100%');
			me._video_file_popup__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_popup__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_file_popup__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup__vid.setAttribute('autoplay', '');
			me._video_file_popup__source=document.createElement('source');
			me._video_file_popup__source.setAttribute('src', media);
			me._video_file_popup__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup__vid.setAttribute('style', ';');
			me._video_file_popup__vid.style.outline = 'none';
			me._video_file_popup__vid.appendChild(me._video_file_popup__source);
			me._video_file_popup.appendChild(me._video_file_popup__vid);
			var videoEl = player.registerVideoElement('video_file_popup', me._video_file_popup__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_popup', 0.0);
			notifySeekbars();
			if (me._video_file_popup.ggActivate) {
				me._video_file_popup__vid.addEventListener('play', me._video_file_popup.ggActivate);
			}
			if (me._video_file_popup.ggDeactivate) {
				me._video_file_popup__vid.addEventListener('ended', me._video_file_popup.ggDeactivate);
				me._video_file_popup__vid.addEventListener('pause', me._video_file_popup.ggDeactivate);
			}
			me._video_file_popup.ggVideoSource = media;
		}
		el.ggId="video_file_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : 64px;';
		hs+='height : calc(100% - 140px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup.ggIsActive=function() {
			if (me._video_file_popup__vid != null) {
				return (me._video_file_popup__vid.paused == false && me._video_file_popup__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup.style.transition='';
				if (me._video_file_popup.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup.style.visibility=(Number(me._video_file_popup.style.opacity)>0||!me._video_file_popup.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup.ggVideoNotLoaded) {
						me._video_file_popup.ggInitMedia(me._video_file_popup.ggVideoSource);
					}
					me._video_file_popup.ggVisible=true;
				}
				else {
					me._video_file_popup.style.visibility="hidden";
					me._video_file_popup.ggInitMedia('');
					me._video_file_popup.ggVisible=false;
				}
			}
		}
		me._video_file_popup.logicBlock_visible();
		me._video_file_popup.onclick=function (e) {
			if (me._video_file_popup.ggApiPlayer) {
				if (me._video_file_popup.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup.ggApiPlayer.play();
						} else {
							me._video_file_popup.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup","1");
			}
		}
		me._video_file_popup.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_hs_popup_play.style.transition='none';
			} else {
				me._video_file_hs_popup_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_file_hs_popup_play.style.opacity='0';
			me._video_file_hs_popup_play.style.visibility='hidden';
		}
		me._video_file_popup.ggDeactivate=function () {
			me._video_file_hs_popup_play.style.transition='none';
			me._video_file_hs_popup_play.style.opacity='1';
			me._video_file_hs_popup_play.style.visibility=me._video_file_hs_popup_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_popup.ggUpdatePosition=function (useTransition) {
		}
		me._media_popup_bg.appendChild(me._video_file_popup);
		el=me._video_file_hs_popup_play=document.createElement('div');
		els=me._video_file_hs_popup_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojMDAwMDAwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMjEuNywyMS4yTDQwLjMsMzJMMjEuNyw0Mi44VjIxLjIgTTE5LjcsMTcuOHYyOC40TDQ0LjMsMzJDNDQuMywzMiwxOS43LDE3LjgsMTkuNywxNy44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._video_file_hs_popup_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_hs_popup_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6IzAwMDAwMDsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik0yMi4xNCwyMi45MywzNy44NiwzMiwyMi4xNCw0MS4wN1YyMi45M20tNC02LjkzVjQ4TDQ1Ljg2LDMyLDE4LjE0LDE2WiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_file_hs_popup_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_hs_popup_play";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_hs_popup_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_hs_popup_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_hs_popup_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_hs_popup_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_hs_popup_play.style.transition='';
				if (me._video_file_hs_popup_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_hs_popup_play.style.visibility=(Number(me._video_file_hs_popup_play.style.opacity)>0||!me._video_file_hs_popup_play.style.opacity)?'inherit':'hidden';
					me._video_file_hs_popup_play.ggVisible=true;
				}
				else {
					me._video_file_hs_popup_play.style.visibility="hidden";
					me._video_file_hs_popup_play.ggVisible=false;
				}
			}
		}
		me._video_file_hs_popup_play.logicBlock_visible();
		me._video_file_hs_popup_play.onclick=function (e) {
			if (me._video_file_popup.ggApiPlayer) {
				if (me._video_file_popup.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_popup.ggApiPlayer.playVideo();
					};
					if (me._video_file_popup.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup.ggApiPlayerType == 'vimeo') {
					me._video_file_popup.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_popup","1");
			}
		}
		me._video_file_hs_popup_play.onmouseenter=function (e) {
			me._video_file_hs_popup_play__img.style.visibility='hidden';
			me._video_file_hs_popup_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_hs_popup_play']=true;
		}
		me._video_file_hs_popup_play.onmouseleave=function (e) {
			me._video_file_hs_popup_play__img.style.visibility='inherit';
			me._video_file_hs_popup_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_hs_popup_play']=false;
		}
		me._video_file_hs_popup_play.ggUpdatePosition=function (useTransition) {
		}
		me._media_popup_bg.appendChild(me._video_file_hs_popup_play);
		el=me._video_url_popup=document.createElement('div');
		me._video_url_popup.seekbars = [];
		me._video_url_popup.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup.hasChildNodes()) {
				me._video_url_popup.removeChild(me._video_url_popup.lastChild);
			}
			if (me._video_url_popup__vid) {
				me._video_url_popup__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup.ggVideoNotLoaded == false && me._video_url_popup.ggDeactivate && player.isPlaying('video_url_popup')) { me._video_url_popup.ggDeactivate(); }
				me._video_url_popup.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup.ggVideoNotLoaded = false;
			me._video_url_popup__vid=document.createElement('video');
			me._video_url_popup__vid.className='ggskin ggskin_video';
			me._video_url_popup__vid.setAttribute('width', '100%');
			me._video_url_popup__vid.setAttribute('height', '100%');
			me._video_url_popup__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_popup__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_url_popup__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup__vid.setAttribute('autoplay', '');
			me._video_url_popup__source=document.createElement('source');
			me._video_url_popup__source.setAttribute('src', media);
			me._video_url_popup__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup__vid.setAttribute('style', ';');
			me._video_url_popup__vid.style.outline = 'none';
			me._video_url_popup__vid.appendChild(me._video_url_popup__source);
			me._video_url_popup.appendChild(me._video_url_popup__vid);
			var videoEl = player.registerVideoElement('video_url_popup', me._video_url_popup__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_popup', 0.0);
			notifySeekbars();
			if (me._video_url_popup.ggActivate) {
				me._video_url_popup__vid.addEventListener('play', me._video_url_popup.ggActivate);
			}
			if (me._video_url_popup.ggDeactivate) {
				me._video_url_popup__vid.addEventListener('ended', me._video_url_popup.ggDeactivate);
				me._video_url_popup__vid.addEventListener('pause', me._video_url_popup.ggDeactivate);
			}
			me._video_url_popup.ggVideoSource = media;
		}
		el.ggId="video_url_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='bottom : 64px;';
		hs+='height : calc(100% - 140px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup.ggIsActive=function() {
			if (me._video_url_popup__vid != null) {
				return (me._video_url_popup__vid.paused == false && me._video_url_popup__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup.style.transition='';
				if (me._video_url_popup.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup.style.visibility=(Number(me._video_url_popup.style.opacity)>0||!me._video_url_popup.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup.ggVideoNotLoaded) {
						me._video_url_popup.ggInitMedia(me._video_url_popup.ggVideoSource);
					}
					me._video_url_popup.ggVisible=true;
				}
				else {
					me._video_url_popup.style.visibility="hidden";
					me._video_url_popup.ggInitMedia('');
					me._video_url_popup.ggVisible=false;
				}
			}
		}
		me._video_url_popup.logicBlock_visible();
		me._video_url_popup.onclick=function (e) {
			if (me._video_url_popup.ggApiPlayer) {
				if (me._video_url_popup.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup.ggApiPlayer.play();
						} else {
							me._video_url_popup.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup","1");
			}
		}
		me._video_url_popup.ggActivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_hs_popup_play.style.transition='none';
			} else {
				me._video_url_hs_popup_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_url_hs_popup_play.style.opacity='0';
			me._video_url_hs_popup_play.style.visibility='hidden';
		}
		me._video_url_popup.ggDeactivate=function () {
			me._video_url_hs_popup_play.style.transition='none';
			me._video_url_hs_popup_play.style.opacity='1';
			me._video_url_hs_popup_play.style.visibility=me._video_url_hs_popup_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_popup.ggUpdatePosition=function (useTransition) {
		}
		me._media_popup_bg.appendChild(me._video_url_popup);
		el=me._video_url_hs_popup_play=document.createElement('div');
		els=me._video_url_hs_popup_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojMDAwMDAwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMjEuNywyMS4yTDQwLjMsMzJMMjEuNyw0Mi44VjIxLjIgTTE5LjcsMTcuOHYyOC40TDQ0LjMsMzJDNDQuMywzMiwxOS43LDE3LjgsMTkuNywxNy44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._video_url_hs_popup_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_hs_popup_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6IzAwMDAwMDsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik0yMi4xNCwyMi45MywzNy44NiwzMiwyMi4xNCw0MS4wN1YyMi45M20tNC02LjkzVjQ4TDQ1Ljg2LDMyLDE4LjE0LDE2WiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_url_hs_popup_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_hs_popup_play";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 80px;';
		hs+='left : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((80px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_hs_popup_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_hs_popup_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_hs_popup_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_hs_popup_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_hs_popup_play.style.transition='';
				if (me._video_url_hs_popup_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_hs_popup_play.style.visibility=(Number(me._video_url_hs_popup_play.style.opacity)>0||!me._video_url_hs_popup_play.style.opacity)?'inherit':'hidden';
					me._video_url_hs_popup_play.ggVisible=true;
				}
				else {
					me._video_url_hs_popup_play.style.visibility="hidden";
					me._video_url_hs_popup_play.ggVisible=false;
				}
			}
		}
		me._video_url_hs_popup_play.logicBlock_visible();
		me._video_url_hs_popup_play.onclick=function (e) {
			if (me._video_url_popup.ggApiPlayer) {
				if (me._video_url_popup.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_popup.ggApiPlayer.playVideo();
					};
					if (me._video_url_popup.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup.ggApiPlayerType == 'vimeo') {
					me._video_url_popup.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_popup","1");
			}
		}
		me._video_url_hs_popup_play.onmouseenter=function (e) {
			me._video_url_hs_popup_play__img.style.visibility='hidden';
			me._video_url_hs_popup_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_hs_popup_play']=true;
		}
		me._video_url_hs_popup_play.onmouseleave=function (e) {
			me._video_url_hs_popup_play__img.style.visibility='inherit';
			me._video_url_hs_popup_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_hs_popup_play']=false;
		}
		me._video_url_hs_popup_play.ggUpdatePosition=function (useTransition) {
		}
		me._media_popup_bg.appendChild(me._video_url_hs_popup_play);
		el=me._pdf_popup=document.createElement('div');
		els=me._pdf_popup__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup__pdf.setAttribute('frameborder', '0');
		me._pdf_popup__pdf.setAttribute('width', '100%');
		me._pdf_popup__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup.ggPdfSource == file) return;
				me._pdf_popup.pdfNotLoaded = false;
				me._pdf_popup.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup.ggPdfSource.indexOf(':') != -1 || me._pdf_popup.ggPdfSource.startsWith('/') || me._pdf_popup.ggPdfSource.startsWith('./')) ? me._pdf_popup.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup.ggPdfSource;
				me._pdf_popup__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup__pdf.style.display = 'block';
			} else {
				me._pdf_popup__pdf.setAttribute('src', '');
				me._pdf_popup__pdf.style.display = 'none';
				me._pdf_popup.pdfNotLoaded = true;
				me._pdf_popup.ggPdfSource = '';
			}
		}
		me._pdf_popup.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup.ggInitPdf('');
		el.ggId="pdf_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 20px;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_pdf_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup.style.transition='';
				if (me._pdf_popup.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup.style.visibility=(Number(me._pdf_popup.style.opacity)>0||!me._pdf_popup.style.opacity)?'inherit':'hidden';
					if (me._pdf_popup.ggPdfNotLoaded) {
						me._pdf_popup.ggInitPdf(me._pdf_popup.ggPdfSource);
					}
					me._pdf_popup.ggVisible=true;
				}
				else {
					me._pdf_popup.style.visibility="hidden";
					if (me._pdf_popup.ggInitPdf) me._pdf_popup.ggInitPdf();
					me._pdf_popup.ggVisible=false;
				}
			}
		}
		me._pdf_popup.logicBlock_visible();
		me._pdf_popup.ggUpdatePosition=function (useTransition) {
		}
		me._media_popup_bg.appendChild(me._pdf_popup);
		el=me._image_popup=document.createElement('div');
		els=me._image_popup__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup.ggSubElement.setAttribute('alt', player._(me._image_popup.ggAltText));
			me._image_popup.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_popup.ggText_untranslated = img;
			me._image_popup.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_popup.ggSubElement.style.width = '0px';
			me._image_popup.ggSubElement.style.height = '0px';
			me._image_popup.ggSubElement.src='';
			me._image_popup.ggSubElement.src=me._image_popup.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_popup.ggText != player._(me._image_popup.ggText_untranslated)) {
				me._image_popup.ggText = player._(me._image_popup.ggText_untranslated);
				me._image_popup.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 20px;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style.transition='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggSubElement.src=me._image_popup.ggText;
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggSubElement.src='';
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.logicBlock_visible();
		me._image_popup.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup.clientWidth;
			var parentHeight = me._image_popup.clientHeight;
			var img = me._image_popup__img;
			var aspectRatioDiv = me._image_popup.clientWidth / me._image_popup.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup.ggScrollbars || currentWidth < me._image_popup.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup.scrollLeft=currentWidth / 2 - me._image_popup.clientWidth / 2;
			}
			if (!me._image_popup.ggScrollbars || currentHeight < me._image_popup.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup.scrollTop=currentHeight / 2 - me._image_popup.clientHeight / 2;
			}
		}
		me._media_popup_bg.appendChild(me._image_popup);
		el=me._url_hs_popup_iframe=document.createElement('div');
		els=me._url_hs_popup_iframe__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="url_hs_popup_iframe";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 25px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 100px);';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._url_hs_popup_iframe.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._url_hs_popup_iframe.ggUpdateText();
		el.appendChild(els);
		me._url_hs_popup_iframe.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._url_hs_popup_iframe.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_url_hs_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._url_hs_popup_iframe.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._url_hs_popup_iframe.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._url_hs_popup_iframe.style.transition='';
				if (me._url_hs_popup_iframe.ggCurrentLogicStateVisible == 0) {
					me._url_hs_popup_iframe.style.visibility=(Number(me._url_hs_popup_iframe.style.opacity)>0||!me._url_hs_popup_iframe.style.opacity)?'inherit':'hidden';
					me._url_hs_popup_iframe.ggVisible=true;
				}
				else {
					me._url_hs_popup_iframe.style.visibility="hidden";
					me._url_hs_popup_iframe.ggVisible=false;
				}
			}
		}
		me._url_hs_popup_iframe.logicBlock_visible();
		me._url_hs_popup_iframe.ggUpdatePosition=function (useTransition) {
		}
		me._media_popup_bg.appendChild(me._url_hs_popup_iframe);
		el=me._media_popup_close=document.createElement('div');
		els=me._media_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB5Mj0iNDMuMyIgeDI9IjQzLjMiIHgxPSIyMC43IiBjbGFzcz0ic3QxIiB5MT0iMjAuNyIvPgogIDxsaW5lIHkyPSI0My4zIiB4Mj0iMjAuNyIgeDE9IjQzLjMi'+
			'IGNsYXNzPSJzdDEiIHkxPSIyMC43Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._media_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._media_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDMuMzEiIHgyPSI0My4zMSIgeDE9IjIwLjY5IiB5MT0iMjAuNjkiLz'+
			'4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiIHkxPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._media_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="media_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._media_popup_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_popup_close.onclick=function (e) {
			player.setVariableValue('vis_image_hs_popup', false);
			player.setVariableValue('vis_url_hs_popup', false);
			player.setVariableValue('vis_pdf_hs_popup', false);
			player.setVariableValue('vis_video_youtube_hs_popup', false);
			player.setVariableValue('vis_video_vimeo_hs_popup', false);
			player.setVariableValue('vis_video_file_hs_popup', false);
			player.setVariableValue('vis_video_url_hs_popup', false);
		}
		me._media_popup_close.onmouseenter=function (e) {
			me._media_popup_close__img.style.visibility='hidden';
			me._media_popup_close__imgo.style.visibility='inherit';
			me.elementMouseOver['media_popup_close']=true;
		}
		me._media_popup_close.onmouseleave=function (e) {
			me._media_popup_close__img.style.visibility='inherit';
			me._media_popup_close__imgo.style.visibility='hidden';
			me.elementMouseOver['media_popup_close']=false;
		}
		me._media_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me._media_popup_bg.appendChild(me._media_popup_close);
		el=me._media_popup_title=document.createElement('div');
		els=me._media_popup_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="media_popup_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((calc(100% - 50px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 32px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._media_popup_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._media_popup_title.ggUpdateText();
		el.appendChild(els);
		me._media_popup_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._media_popup_title.ggUpdatePosition=function (useTransition) {
		}
		me._media_popup_bg.appendChild(me._media_popup_title);
		me._media_popup.appendChild(me._media_popup_bg);
		me.divSkin.appendChild(me._media_popup);
		el=me._sounds_splashscreen=document.createElement('div');
		el.ggId="sounds_splashscreen";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((320px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 320px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._sounds_splashscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_sounds_splashscreen') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._sounds_splashscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._sounds_splashscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._sounds_splashscreen.style.transition='';
				if (me._sounds_splashscreen.ggCurrentLogicStateVisible == 0) {
					me._sounds_splashscreen.style.visibility=(Number(me._sounds_splashscreen.style.opacity)>0||!me._sounds_splashscreen.style.opacity)?'inherit':'hidden';
					me._sounds_splashscreen.ggVisible=true;
				}
				else {
					me._sounds_splashscreen.style.visibility="hidden";
					me._sounds_splashscreen.ggVisible=false;
				}
			}
		}
		me._sounds_splashscreen.logicBlock_visible();
		me._sounds_splashscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_splashscreen_bg=document.createElement('div');
		el.ggId="sounds_splashscreen_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 32px;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_splashscreen_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_splashscreen_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._sounds_off=document.createElement('div');
		els=me._sounds_off__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB5Mj0iMTUuOCIgeDI9IjQ3LjgiIHgxPSIxNS44IiBjbGFzcz0ic3QwIiB5MT0iNDcuOCIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3bDAsMCIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik00My4zLDIwLjdjNi4yLDYuMiw2LjIsMTYuNCwwLDIyLjYiIGNsYXNzPSJzdDAi'+
			'Lz4KIDwvZz4KIDxnIGlkPSJiYXJyYSI+CiAgPGxpbmUgeTI9IjE1LjgiIHgyPSI0Ny44IiB4MT0iMTUuOCIgY2xhc3M9InN0MCIgeTE9IjQ3LjgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._sounds_off__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_off";
		el.ggDx=75;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 75px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_off.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_off.onclick=function (e) {
			player.mute("_all");
			player.setVariableValue('toggle_audio', false);
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_off.onmouseenter=function (e) {
			me._sounds_off__img.style.visibility='hidden';
			me._sounds_off__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_off']=true;
		}
		me._sounds_off.onmouseleave=function (e) {
			me._sounds_off__img.style.visibility='inherit';
			me._sounds_off__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_off']=false;
		}
		me._sounds_off.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_off);
		el=me._sounds_on=document.createElement('div');
		els=me._sounds_on__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40LDAsMjIuNiIgY2xh'+
			'c3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._sounds_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._sounds_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3bDAsMCIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik00My4zLDIwLjdjNi4yLDYuMiw2LjIsMTYuNCwwLDIyLjYiIGNsYXNzPSJzdDAi'+
			'Lz4KIDwvZz4KPC9zdmc+Cg==';
		me._sounds_on__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="sounds_on";
		el.ggDx=-75;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg svg_shadow";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) - 75px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sounds_on.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sounds_on.onclick=function (e) {
			player.startAutoplayMedia();
			player.setVariableValue('sounds_splashscreen_accepted', true);
		}
		me._sounds_on.onmouseenter=function (e) {
			me._sounds_on__img.style.visibility='hidden';
			me._sounds_on__imgo.style.visibility='inherit';
			me.elementMouseOver['sounds_on']=true;
		}
		me._sounds_on.onmouseleave=function (e) {
			me._sounds_on__img.style.visibility='inherit';
			me._sounds_on__imgo.style.visibility='hidden';
			me.elementMouseOver['sounds_on']=false;
		}
		me._sounds_on.ggUpdatePosition=function (useTransition) {
		}
		me._sounds_splashscreen_bg.appendChild(me._sounds_on);
		me._sounds_splashscreen.appendChild(me._sounds_splashscreen_bg);
		me.divSkin.appendChild(me._sounds_splashscreen);
		el=me._popup_phone=document.createElement('div');
		el.ggId="popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		hs+='backdrop-filter: blur(5px); -webkit-backdrop-filter: blur(5px);';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_phone.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_phone.style.transition='';
				if (me._popup_phone.ggCurrentLogicStateVisible == 0) {
					me._popup_phone.style.visibility=(Number(me._popup_phone.style.opacity)>0||!me._popup_phone.style.opacity)?'inherit':'hidden';
					me._popup_phone.ggVisible=true;
				}
				else {
					me._popup_phone.style.visibility="hidden";
					me._popup_phone.ggVisible=false;
				}
			}
		}
		me._popup_phone.logicBlock_visible();
		me._popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._popup_phone_bg=document.createElement('div');
		el.ggId="popup_phone_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 50px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_phone_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_phone_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_phone=document.createElement('div');
		el.ggId="info_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 5px solid #e6e6e6;';
		hs+='border-radius : 18px;';
		hs+='cursor : default;';
		hs+='height : calc(100% - 10px);';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 10px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_info') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._info_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._info_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._info_popup_phone.style.transition='';
				if (me._info_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._info_popup_phone.style.visibility=(Number(me._info_popup_phone.style.opacity)>0||!me._info_popup_phone.style.opacity)?'inherit':'hidden';
					me._info_popup_phone.ggVisible=true;
				}
				else {
					me._info_popup_phone.style.visibility="hidden";
					me._info_popup_phone.ggVisible=false;
				}
			}
		}
		me._info_popup_phone.logicBlock_visible();
		me._info_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._info_popup_text_phone=document.createElement('div');
		els=me._info_popup_text_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_text_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : calc(100% - 100px);';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 84px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		hs+="line-height: 1.5;";
		els.setAttribute('style',hs);
		me._info_popup_text_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_text_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_text_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_text_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_text_phone);
		el=me._info_popup_title_phone=document.createElement('div');
		els=me._info_popup_title_phone__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_popup_title_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 40px;';
		hs+='left : 24px;';
		hs+='position : absolute;';
		hs+='top : 34px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 22px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: nowrap;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='text-overflow: ellipsis;';
		els.setAttribute('style',hs);
		me._info_popup_title_phone.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_popup_title_phone.ggUpdateText();
		el.appendChild(els);
		me._info_popup_title_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_popup_title_phone.ggUpdatePosition=function (useTransition) {
		}
		me._info_popup_phone.appendChild(me._info_popup_title_phone);
		me._popup_phone_bg.appendChild(me._info_popup_phone);
		el=me._image_popup_phone=document.createElement('div');
		els=me._image_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._image_popup_phone.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._image_popup_phone.ggSubElement.setAttribute('alt', player._(me._image_popup_phone.ggAltText));
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._image_popup_phone.ggText_untranslated = img;
			me._image_popup_phone.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._image_popup_phone.ggSubElement.style.width = '0px';
			me._image_popup_phone.ggSubElement.style.height = '0px';
			me._image_popup_phone.ggSubElement.src='';
			me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._image_popup_phone.ggText != player._(me._image_popup_phone.ggText_untranslated)) {
				me._image_popup_phone.ggText = player._(me._image_popup_phone.ggText_untranslated);
				me._image_popup_phone.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="image_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_image') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_phone.style.transition='';
				if (me._image_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._image_popup_phone.style.visibility=(Number(me._image_popup_phone.style.opacity)>0||!me._image_popup_phone.style.opacity)?'inherit':'hidden';
					me._image_popup_phone.ggSubElement.src=me._image_popup_phone.ggText;
					me._image_popup_phone.ggVisible=true;
				}
				else {
					me._image_popup_phone.style.visibility="hidden";
					me._image_popup_phone.ggSubElement.src='';
					me._image_popup_phone.ggVisible=false;
				}
			}
		}
		me._image_popup_phone.logicBlock_visible();
		me._image_popup_phone.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._image_popup_phone.clientWidth;
			var parentHeight = me._image_popup_phone.clientHeight;
			var img = me._image_popup_phone__img;
			var aspectRatioDiv = me._image_popup_phone.clientWidth / me._image_popup_phone.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._image_popup_phone.ggScrollbars || currentWidth < me._image_popup_phone.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._image_popup_phone.scrollLeft=currentWidth / 2 - me._image_popup_phone.clientWidth / 2;
			}
			if (!me._image_popup_phone.ggScrollbars || currentHeight < me._image_popup_phone.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._image_popup_phone.scrollTop=currentHeight / 2 - me._image_popup_phone.clientHeight / 2;
			}
		}
		me._popup_phone_bg.appendChild(me._image_popup_phone);
		el=me._pdf_popup_phone=document.createElement('div');
		els=me._pdf_popup_phone__pdf=document.createElement('iframe');
		els.className='ggskin ggskin_pdf';
		els.setAttribute('style','position: absolute;');
		me._pdf_popup_phone__pdf.setAttribute('frameborder', '0');
		me._pdf_popup_phone__pdf.setAttribute('width', '100%');
		me._pdf_popup_phone__pdf.setAttribute('height', '100%');
		el.appendChild(els);
		el.ggSubElement = els;
		me._pdf_popup_phone.ggInitPdf = function(file) {
			if (file) {
				if (me._pdf_popup_phone.ggPdfSource == file) return;
				me._pdf_popup_phone.pdfNotLoaded = false;
				me._pdf_popup_phone.ggPdfSource = file;
				let pdfUrl = (me._pdf_popup_phone.ggPdfSource.indexOf(':') != -1 || me._pdf_popup_phone.ggPdfSource.startsWith('/') || me._pdf_popup_phone.ggPdfSource.startsWith('./')) ? me._pdf_popup_phone.ggPdfSource : window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')) + '/' + me._pdf_popup_phone.ggPdfSource;
				me._pdf_popup_phone__pdf.setAttribute('src', basePath + './3rdparty/pdfjs/web/viewer.html?file=' + pdfUrl + '&toolbar=true&sidebar=true&textsearch=true&fullscreen=true&printing=true&download=false&tools=true&enablelinks=true#page=1');
				me._pdf_popup_phone__pdf.style.display = 'block';
			} else {
				me._pdf_popup_phone__pdf.setAttribute('src', '');
				me._pdf_popup_phone__pdf.style.display = 'none';
				me._pdf_popup_phone.pdfNotLoaded = true;
				me._pdf_popup_phone.ggPdfSource = '';
			}
		}
		me._pdf_popup_phone.ggSetCurrentPage = function(page) {
			if (!isNaN(page) && page > 0) me._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.page = page;
		}
		me._pdf_popup_phone.ggInitPdf('');
		el.ggId="pdf_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_pdf ";
		el.ggType='pdf';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._pdf_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pdf_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_pdf') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._pdf_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._pdf_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._pdf_popup_phone.style.transition='';
				if (me._pdf_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._pdf_popup_phone.style.visibility=(Number(me._pdf_popup_phone.style.opacity)>0||!me._pdf_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._pdf_popup_phone.ggPdfNotLoaded) {
						me._pdf_popup_phone.ggInitPdf(me._pdf_popup_phone.ggPdfSource);
					}
					me._pdf_popup_phone.ggVisible=true;
				}
				else {
					me._pdf_popup_phone.style.visibility="hidden";
					if (me._pdf_popup_phone.ggInitPdf) me._pdf_popup_phone.ggInitPdf();
					me._pdf_popup_phone.ggVisible=false;
				}
			}
		}
		me._pdf_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone_bg.appendChild(me._pdf_popup_phone);
		el=me._video_controller_phone=document.createElement('div');
		el.ggId="video_controller_phone";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 25px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((clamp(200px, calc(100% - 50px), 350px) + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : clamp(200px, calc(100% - 50px), 350px);';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true)) || 
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_controller_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_controller_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_controller_phone.style.transition='';
				if (me._video_controller_phone.ggCurrentLogicStateVisible == 0) {
					me._video_controller_phone.style.visibility=(Number(me._video_controller_phone.style.opacity)>0||!me._video_controller_phone.style.opacity)?'inherit':'hidden';
					me._video_controller_phone.ggVisible=true;
				}
				else {
					me._video_controller_phone.style.visibility="hidden";
					me._video_controller_phone.ggVisible=false;
				}
			}
		}
		me._video_controller_phone.logicBlock_visible();
		me._video_controller_phone.ggUpdatePosition=function (useTransition) {
		}
		el=me._video_controller_seekbar_phone=document.createElement('div');
		me._video_controller_seekbar_phone__playhead=document.createElement('div');
		me._video_controller_seekbar_phone.mediaEl = null;
		me._video_controller_seekbar_phone.fromBufferSource = false;
		me._video_controller_seekbar_phone.ggMediaId = '';
		el.ggId="video_controller_seekbar_phone";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 6px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((6px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_controller_seekbar_phone.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._video_controller_seekbar_phone.mediaEl != null) {
					if (e.target == me._video_controller_seekbar_phone) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._video_controller_seekbar_phone.fromBufferSource) {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
							me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
							if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._video_controller_seekbar_phone || e.target == me._video_controller_seekbar_phone__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._video_controller_seekbar_phone.getBoundingClientRect().x;
							if (me._video_controller_seekbar_phone.fromBufferSource) {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
								me._video_controller_seekbar_phone.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._video_controller_seekbar_phone.clientWidth) * me._video_controller_seekbar_phone.mediaEl.duration;
								if(!isNaN(seekpos)) me._video_controller_seekbar_phone.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._video_controller_seekbar_phone.onmousedown = me._video_controller_seekbar_phone.ontouchstart = me._video_controller_seekbar_phone.mouseTouchHandling;
		me._video_controller_seekbar_phone.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'hidden';
				me._video_controller_seekbar_phone.style.background = '#282828';
				me._video_controller_seekbar_phone.ggConnected = false;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.removeEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.removeEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
			}
			me._video_controller_seekbar_phone.mediaEl = player.getMediaObject(me._video_controller_seekbar_phone.ggMediaId);
			if (me._video_controller_seekbar_phone.mediaEl) {
				me._video_controller_seekbar_phone.fromBufferSource = false;
			} else {
				me._video_controller_seekbar_phone.mediaEl = player.getMediaBufferSourceObject('');
				me._video_controller_seekbar_phone.fromBufferSource = true;
			}
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				me._video_controller_seekbar_phone__playhead.style.visibility = 'inherit';
				me._video_controller_seekbar_phone__playhead.style.left = '-11px';
				if (me._video_controller_seekbar_phone.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.bufferSoundActivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggActivate(); };
						player.addListener('bufferSoundPlay', me._video_controller_seekbar_phone.bufferSoundActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.bufferSoundDeactivate = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._video_controller_seekbar_phone.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.bufferSoundMediaEnded = function(args) { if (args['id'] == me._video_controller_seekbar_phone.mediaEl.id) me._video_controller_seekbar_phone.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._video_controller_seekbar_phone.bufferSoundMediaEnded);
					}
				} else {
					me._video_controller_seekbar_phone.mediaEl.addEventListener('progress', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('canplay', me._video_controller_seekbar_phone.updatePlayback);
					me._video_controller_seekbar_phone.mediaEl.addEventListener('timeupdate', me._video_controller_seekbar_phone.updatePlayback);
					if (me._video_controller_seekbar_phone.ggActivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('play', me._video_controller_seekbar_phone.ggActivate);
					}
					if (me._video_controller_seekbar_phone.ggDeactivate) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggDeactivate);
						me._video_controller_seekbar_phone.mediaEl.addEventListener('pause', me._video_controller_seekbar_phone.ggDeactivate);
					}
					if (me._video_controller_seekbar_phone.ggMediaEnded) {
						me._video_controller_seekbar_phone.mediaEl.addEventListener('ended', me._video_controller_seekbar_phone.ggMediaEnded);
					}
				}
				me._video_controller_seekbar_phone.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._video_controller_seekbar_phone.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._video_controller_seekbar_phone.updatePlayback = function(args) {
			if (!me._video_controller_seekbar_phone.ggConnected) return;
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				if (me._video_controller_seekbar_phone.mediaEl.readyState || (me._video_controller_seekbar_phone.fromBufferSource && args && args['id'] == me._video_controller_seekbar_phone.mediaEl.id)) {
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						var percent = me._video_controller_seekbar_phone.mediaEl.bufferSoundCurrentTime() / me._video_controller_seekbar_phone.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._video_controller_seekbar_phone.mediaEl.currentTime / me._video_controller_seekbar_phone.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._video_controller_seekbar_phone.clientWidth - 2 * 3 + 0) * percent);
					playheadpos += -11;
					me._video_controller_seekbar_phone__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (3 / me._video_controller_seekbar_phone.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ' + currPos + '%';
					if (me._video_controller_seekbar_phone.fromBufferSource) {
						gradientString += ', rgba(100,100,100,1) ' + currPos +'%, rgba(100,100,100,1) 100%';
					} else {
						for (var i = 0; i < me._video_controller_seekbar_phone.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._video_controller_seekbar_phone.mediaEl.buffered.start(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._video_controller_seekbar_phone.mediaEl.buffered.end(i) / me._video_controller_seekbar_phone.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(100,100,100,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(40,40,40,1) ' + currPos + '%, rgba(40,40,40,1) ' + rangeStart + '%';
									gradientString += ', rgba(100,100,100,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(100,100,100,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(40,40,40,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._video_controller_seekbar_phone.style.background = gradientString;
				}
			}
		}
		me._video_controller_seekbar_phone.appendChild(me._video_controller_seekbar_phone__playhead);
		hs+='background : #282828;';
		hs+='border : 0px solid #ffffff;';
		hs+='border-radius : 3px;';
		var hs_playhead = 'height: 27px;';
		hs_playhead += 'width: 27px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -11px;';
		hs_playhead += 'top: -10.5px;';
		hs_playhead += 'border-radius: 14px;';
		hs_playhead += cssPrefix + 'border-radius: 14px;';
		hs_playhead += 'background-color: rgba(74,74,74,1);';
		me._video_controller_seekbar_phone.setAttribute('style', hs);
		me._video_controller_seekbar_phone__playhead.setAttribute('style', hs_playhead);
		me._video_controller_seekbar_phone.ggIsActive=function() {
			if (me._video_controller_seekbar_phone.mediaEl != null) {
				return (me._video_controller_seekbar_phone.mediaEl.paused == false && me._video_controller_seekbar_phone.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_controller_seekbar_phone.ggUpdatePosition=function (useTransition) {
			me._video_controller_seekbar_phone.updatePlayback();
		}
		me._video_controller_phone.appendChild(me._video_controller_seekbar_phone);
		me._popup_phone_bg.appendChild(me._video_controller_phone);
		el=me._youtube_popup_phone=document.createElement('div');
		me._youtube_popup_phone.seekbars = [];
			me._youtube_popup_phone.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._youtube_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._youtube_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._youtube_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._youtube_popup_phone.hasChildNodes()) {
				me._youtube_popup_phone.removeChild(me._youtube_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._youtube_popup_phone.ggVideoNotLoaded == false && me._youtube_popup_phone.ggDeactivate && player.isPlaying('youtube_popup_phone')) { me._youtube_popup_phone.ggDeactivate(); }
				me._youtube_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._youtube_popup_phone.ggVideoNotLoaded = false;
			me._youtube_popup_phone__vid=document.createElement('iframe');
			me._youtube_popup_phone__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._youtube_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._youtube_popup_phone__vid.setAttribute('width', '100%');
			me._youtube_popup_phone__vid.setAttribute('height', '100%');
			me._youtube_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._youtube_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._youtube_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._youtube_popup_phone.appendChild(me._youtube_popup_phone__vid);
			me._youtube_popup_phone__vid.id = 'youtube-video';
			me._youtube_popup_phone.ggYoutubeApiReady = function() {
				me._youtube_popup_phone.ggApiPlayerType = 'youtube';
				me._youtube_popup_phone.ggApiPlayerReady = false;
				me._youtube_popup_phone.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._youtube_popup_phone.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._youtube_popup_phone.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._youtube_popup_phone.ggMediaEnded) {
								me._youtube_popup_phone.ggMediaEnded();
							}
							if (event.data == 1 && me._youtube_popup_phone.ggActivate) {
								me._youtube_popup_phone.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._youtube_popup_phone.ggDeactivate) {
								me._youtube_popup_phone.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._youtube_popup_phone.ggApiPlayer.unMute();
						if (args.state == 1) skin._youtube_popup_phone.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._youtube_popup_phone.ggApiPlayer.isMuted()) skin._youtube_popup_phone.ggApiPlayer.unMute(); else skin._youtube_popup_phone.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'youtube_popup_phone' || args.id == '_main') {
						if (args.type == 'set') skin._youtube_popup_phone.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._youtube_popup_phone.ggApiPlayer.setVolume(skin._youtube_popup_phone.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._youtube_popup_phone.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._youtube_popup_phone.ggYoutubeApiReady();}
		}
		el.ggId="youtube_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._youtube_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._youtube_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._youtube_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._youtube_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._youtube_popup_phone.style.transition='';
				if (me._youtube_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._youtube_popup_phone.style.visibility=(Number(me._youtube_popup_phone.style.opacity)>0||!me._youtube_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._youtube_popup_phone.ggVideoNotLoaded) {
						me._youtube_popup_phone.ggInitMedia(me._youtube_popup_phone.ggVideoSource);
					}
					me._youtube_popup_phone.ggVisible=true;
				}
				else {
					me._youtube_popup_phone.style.visibility="hidden";
					me._youtube_popup_phone.ggInitMedia('');
					me._youtube_popup_phone.ggVisible=false;
				}
			}
		}
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone_bg.appendChild(me._youtube_popup_phone);
		el=me._vimeo_popup_phone=document.createElement('div');
		me._vimeo_popup_phone.seekbars = [];
		me._vimeo_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._vimeo_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._vimeo_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._vimeo_popup_phone.hasChildNodes()) {
				me._vimeo_popup_phone.removeChild(me._vimeo_popup_phone.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._vimeo_popup_phone.ggVideoNotLoaded == false && me._vimeo_popup_phone.ggDeactivate && player.isPlaying('vimeo_popup_phone')) { me._vimeo_popup_phone.ggDeactivate(); }
				me._vimeo_popup_phone.ggVideoNotLoaded = true;
				return;
			}
			me._vimeo_popup_phone.ggVideoNotLoaded = false;
			me._vimeo_popup_phone__vid=document.createElement('iframe');
			me._vimeo_popup_phone__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._vimeo_popup_phone__vid.setAttribute('src', ggVideoUrl);
			me._vimeo_popup_phone__vid.setAttribute('width', '100%');
			me._vimeo_popup_phone__vid.setAttribute('height', '100%');
			me._vimeo_popup_phone__vid.setAttribute('allow', 'autoplay');
			me._vimeo_popup_phone__vid.setAttribute('allowfullscreen', 'true');
			me._vimeo_popup_phone__vid.setAttribute('style', 'border:none; ; ;');
			me._vimeo_popup_phone.appendChild(me._vimeo_popup_phone__vid);
			me._vimeo_popup_phone.ggApiPlayerType = 'vimeo';
			me._vimeo_popup_phone.ggApiPlayer = new Vimeo.Player(me._vimeo_popup_phone__vid);
			if (player.getPlayerMuted()) me._vimeo_popup_phone.ggApiPlayer.setVolume(0);
			player.addListener('elementmuted', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_all' || args.id == '_main') {
					if (args.state == 0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(1);
					if (args.state == 1) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0);
					if (args.state == -1) { if (skin._vimeo_popup_phone.ggApiPlayer.getVolume() > 0.0) skin._vimeo_popup_phone.ggApiPlayer.setVolume(0); else skin._vimeo_popup_phone.ggApiPlayer.setVolume(1); }
				}
			});
			player.addListener('elementvolume', function(args) {
				if (args.id == 'vimeo_popup_phone' || args.id == '_main') {
					if (args.type == 'set') skin._vimeo_popup_phone.ggApiPlayer.setVolume(args.volume);
					if (args.type == 'change') skin._vimeo_popup_phone.ggApiPlayer.getVolume().then(function(volume) { skin._vimeo_popup_phone.ggApiPlayer.setVolume(volume + args.volume); });
				}
			});
			me._vimeo_popup_phone.ggVideoSource = media;
		}
		el.ggId="vimeo_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 60px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._vimeo_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._vimeo_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_vimeo') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vimeo_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vimeo_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vimeo_popup_phone.style.transition='';
				if (me._vimeo_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._vimeo_popup_phone.style.visibility=(Number(me._vimeo_popup_phone.style.opacity)>0||!me._vimeo_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._vimeo_popup_phone.ggVideoNotLoaded) {
						me._vimeo_popup_phone.ggInitMedia(me._vimeo_popup_phone.ggVideoSource);
					}
					me._vimeo_popup_phone.ggVisible=true;
				}
				else {
					me._vimeo_popup_phone.style.visibility="hidden";
					me._vimeo_popup_phone.ggInitMedia('');
					me._vimeo_popup_phone.ggVisible=false;
				}
			}
		}
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone_bg.appendChild(me._vimeo_popup_phone);
		el=me._video_file_popup_phone=document.createElement('div');
		me._video_file_popup_phone.seekbars = [];
		me._video_file_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_file_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_file_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_file_popup_phone.hasChildNodes()) {
				me._video_file_popup_phone.removeChild(me._video_file_popup_phone.lastChild);
			}
			if (me._video_file_popup_phone__vid) {
				me._video_file_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_file_popup_phone.ggVideoNotLoaded == false && me._video_file_popup_phone.ggDeactivate && player.isPlaying('video_file_popup_phone')) { me._video_file_popup_phone.ggDeactivate(); }
				me._video_file_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_file_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_file_popup_phone.ggVideoNotLoaded = false;
			me._video_file_popup_phone__vid=document.createElement('video');
			me._video_file_popup_phone__vid.className='ggskin ggskin_video';
			me._video_file_popup_phone__vid.setAttribute('width', '100%');
			me._video_file_popup_phone__vid.setAttribute('height', '100%');
			me._video_file_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_file_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_file_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_file_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_file_popup_phone__vid.setAttribute('autoplay', '');
			me._video_file_popup_phone__source=document.createElement('source');
			me._video_file_popup_phone__source.setAttribute('src', media);
			me._video_file_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_file_popup_phone__vid.setAttribute('style', ';');
			me._video_file_popup_phone__vid.style.outline = 'none';
			me._video_file_popup_phone__vid.appendChild(me._video_file_popup_phone__source);
			me._video_file_popup_phone.appendChild(me._video_file_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_file_popup_phone', me._video_file_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_file_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_file_popup_phone.ggActivate) {
				me._video_file_popup_phone__vid.addEventListener('play', me._video_file_popup_phone.ggActivate);
			}
			if (me._video_file_popup_phone.ggDeactivate) {
				me._video_file_popup_phone__vid.addEventListener('ended', me._video_file_popup_phone.ggDeactivate);
				me._video_file_popup_phone__vid.addEventListener('pause', me._video_file_popup_phone.ggDeactivate);
			}
			me._video_file_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_file_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone.ggIsActive=function() {
			if (me._video_file_popup_phone__vid != null) {
				return (me._video_file_popup_phone__vid.paused == false && me._video_file_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone.style.transition='';
				if (me._video_file_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone.style.visibility=(Number(me._video_file_popup_phone.style.opacity)>0||!me._video_file_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_file_popup_phone.ggVideoNotLoaded) {
						me._video_file_popup_phone.ggInitMedia(me._video_file_popup_phone.ggVideoSource);
					}
					me._video_file_popup_phone.ggVisible=true;
				}
				else {
					me._video_file_popup_phone.style.visibility="hidden";
					me._video_file_popup_phone.ggInitMedia('');
					me._video_file_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_file_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_file_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_file_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_file_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_file_popup_phone.ggApiPlayer.play();
						} else {
							me._video_file_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone.ggActivate=function () {
			me._video_file_popup_phone_play.style.transition='none';
			me._video_file_popup_phone_play.style.opacity='0';
			me._video_file_popup_phone_play.style.visibility='hidden';
		}
		me._video_file_popup_phone.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._video_file_popup_phone_play.style.transition='none';
			} else {
				me._video_file_popup_phone_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_file_popup_phone_play.style.opacity='1';
			me._video_file_popup_phone_play.style.visibility=me._video_file_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_file_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone_bg.appendChild(me._video_file_popup_phone);
		el=me._video_file_popup_phone_play=document.createElement('div');
		els=me._video_file_popup_phone_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojMDAwMDAwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMjEuNywyMS4yTDQwLjMsMzJMMjEuNyw0Mi44VjIxLjIgTTE5LjcsMTcuOHYyOC40TDQ0LjMsMzJDNDQuMywzMiwxOS43LDE3LjgsMTkuNywxNy44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._video_file_popup_phone_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_popup_phone_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTI0LjYsMjIuOUw0MC40LDMybC0xNS43LDkuMVYyMi45IE0yMC42LDE2djMybDI3LjctMTZMMjAuNiwxNnoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_file_popup_phone_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_file_popup_phone_play";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_file_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_file_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_file_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_file_popup_phone_play.style.transition='';
				if (me._video_file_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_file_popup_phone_play.style.visibility=(Number(me._video_file_popup_phone_play.style.opacity)>0||!me._video_file_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_file_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_file_popup_phone_play.style.visibility="hidden";
					me._video_file_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_file_popup_phone_play.logicBlock_visible();
		me._video_file_popup_phone_play.onclick=function (e) {
			if (me._video_file_popup_phone.ggApiPlayer) {
				if (me._video_file_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_file_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_file_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_file_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_file_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_file_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_file_popup_phone","1");
			}
		}
		me._video_file_popup_phone_play.onmouseenter=function (e) {
			me._video_file_popup_phone_play__img.style.visibility='hidden';
			me._video_file_popup_phone_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_file_popup_phone_play']=true;
		}
		me._video_file_popup_phone_play.onmouseleave=function (e) {
			me._video_file_popup_phone_play__img.style.visibility='inherit';
			me._video_file_popup_phone_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_file_popup_phone_play']=false;
		}
		me._video_file_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone_bg.appendChild(me._video_file_popup_phone_play);
		el=me._video_url_popup_phone=document.createElement('div');
		me._video_url_popup_phone.seekbars = [];
		me._video_url_popup_phone.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_url_popup_phone.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_url_popup_phone.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._video_url_popup_phone.hasChildNodes()) {
				me._video_url_popup_phone.removeChild(me._video_url_popup_phone.lastChild);
			}
			if (me._video_url_popup_phone__vid) {
				me._video_url_popup_phone__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._video_url_popup_phone.ggVideoNotLoaded == false && me._video_url_popup_phone.ggDeactivate && player.isPlaying('video_url_popup_phone')) { me._video_url_popup_phone.ggDeactivate(); }
				me._video_url_popup_phone.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_url_popup_phone');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_url_popup_phone.ggVideoNotLoaded = false;
			me._video_url_popup_phone__vid=document.createElement('video');
			me._video_url_popup_phone__vid.className='ggskin ggskin_video';
			me._video_url_popup_phone__vid.setAttribute('width', '100%');
			me._video_url_popup_phone__vid.setAttribute('height', '100%');
			me._video_url_popup_phone__vid.setAttribute('crossOrigin', 'anonymous');
			me._video_url_popup_phone__vid.setAttribute('controlsList', 'nodownload');
			me._video_url_popup_phone__vid.setAttribute('disablepictureinpicture', 'true');
			me._video_url_popup_phone__vid.setAttribute('oncontextmenu', 'return false;');
			me._video_url_popup_phone__vid.setAttribute('autoplay', '');
			me._video_url_popup_phone__source=document.createElement('source');
			me._video_url_popup_phone__source.setAttribute('src', media);
			me._video_url_popup_phone__vid.setAttribute('playsinline', 'playsinline');
			me._video_url_popup_phone__vid.setAttribute('style', ';');
			me._video_url_popup_phone__vid.style.outline = 'none';
			me._video_url_popup_phone__vid.appendChild(me._video_url_popup_phone__source);
			me._video_url_popup_phone.appendChild(me._video_url_popup_phone__vid);
			var videoEl = player.registerVideoElement('video_url_popup_phone', me._video_url_popup_phone__vid);
			videoEl.autoplay = true;
			player.changeVolume('video_url_popup_phone', 0.0);
			notifySeekbars();
			if (me._video_url_popup_phone.ggActivate) {
				me._video_url_popup_phone__vid.addEventListener('play', me._video_url_popup_phone.ggActivate);
			}
			if (me._video_url_popup_phone.ggDeactivate) {
				me._video_url_popup_phone__vid.addEventListener('ended', me._video_url_popup_phone.ggDeactivate);
				me._video_url_popup_phone__vid.addEventListener('pause', me._video_url_popup_phone.ggDeactivate);
			}
			me._video_url_popup_phone.ggVideoSource = media;
		}
		el.ggId="video_url_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : calc(100% - 100px);';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 50px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone.ggIsActive=function() {
			if (me._video_url_popup_phone__vid != null) {
				return (me._video_url_popup_phone__vid.paused == false && me._video_url_popup_phone__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone.style.transition='';
				if (me._video_url_popup_phone.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone.style.visibility=(Number(me._video_url_popup_phone.style.opacity)>0||!me._video_url_popup_phone.style.opacity)?'inherit':'hidden';
					if (me._video_url_popup_phone.ggVideoNotLoaded) {
						me._video_url_popup_phone.ggInitMedia(me._video_url_popup_phone.ggVideoSource);
					}
					me._video_url_popup_phone.ggVisible=true;
				}
				else {
					me._video_url_popup_phone.style.visibility="hidden";
					me._video_url_popup_phone.ggInitMedia('');
					me._video_url_popup_phone.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						if (me._video_url_popup_phone.ggApiPlayer.getPlayerState() == 1) {
							me._video_url_popup_phone.ggApiPlayer.pauseVideo();
						} else {
							me._video_url_popup_phone.ggApiPlayer.playVideo();
						}
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					var promise = me._video_url_popup_phone.ggApiPlayer.getPaused();
					promise.then(function(result) {
						if (result == true) {
							me._video_url_popup_phone.ggApiPlayer.play();
						} else {
							me._video_url_popup_phone.ggApiPlayer.pause();
						}
					});
				}
			} else {
				player.playPauseSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone.ggActivate=function () {
			me._video_url_popup_phone_play.style.transition='none';
			me._video_url_popup_phone_play.style.opacity='0';
			me._video_url_popup_phone_play.style.visibility='hidden';
		}
		me._video_url_popup_phone.ggDeactivate=function () {
			if (player.transitionsDisabled) {
				me._video_url_popup_phone_play.style.transition='none';
			} else {
				me._video_url_popup_phone_play.style.transition='all 200ms ease-out 0ms';
			}
			me._video_url_popup_phone_play.style.opacity='1';
			me._video_url_popup_phone_play.style.visibility=me._video_url_popup_phone_play.ggVisible?'inherit':'hidden';
		}
		me._video_url_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone_bg.appendChild(me._video_url_popup_phone);
		el=me._video_url_popup_phone_play=document.createElement('div');
		els=me._video_url_popup_phone_play__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojMDAwMDAwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMjEuNywyMS4yTDQwLjMsMzJMMjEuNyw0Mi44VjIxLjIgTTE5LjcsMTcuOHYyOC40TDQ0LjMsMzJDNDQuMywzMiwxOS43LDE3LjgsMTkuNywxNy44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._video_url_popup_phone_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_popup_phone_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTI0LjYsMjIuOUw0MC40LDMybC0xNS43LDkuMVYyMi45IE0yMC42LDE2djMybDI3LjctMTZMMjAuNiwxNnoiIGNsYXNzPSJzdDAiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._video_url_popup_phone_play__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="video_url_popup_phone_play";
		el.ggDx=0;
		el.ggDy=-8;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((64px + 0px) / 2) - 8px);';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_url_popup_phone_play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_url_popup_phone_play.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_phone_video_url') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_url_popup_phone_play.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_url_popup_phone_play.style.transition='';
				if (me._video_url_popup_phone_play.ggCurrentLogicStateVisible == 0) {
					me._video_url_popup_phone_play.style.visibility=(Number(me._video_url_popup_phone_play.style.opacity)>0||!me._video_url_popup_phone_play.style.opacity)?'inherit':'hidden';
					me._video_url_popup_phone_play.ggVisible=true;
				}
				else {
					me._video_url_popup_phone_play.style.visibility="hidden";
					me._video_url_popup_phone_play.ggVisible=false;
				}
			}
		}
		me._video_url_popup_phone_play.logicBlock_visible();
		me._video_url_popup_phone_play.onclick=function (e) {
			if (me._video_url_popup_phone.ggApiPlayer) {
				if (me._video_url_popup_phone.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_url_popup_phone.ggApiPlayer.playVideo();
					};
					if (me._video_url_popup_phone.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_url_popup_phone.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_url_popup_phone.ggApiPlayerType == 'vimeo') {
					me._video_url_popup_phone.ggApiPlayer.play();
				}
			} else {
				player.playSound("video_url_popup_phone","1");
			}
		}
		me._video_url_popup_phone_play.onmouseenter=function (e) {
			me._video_url_popup_phone_play__img.style.visibility='hidden';
			me._video_url_popup_phone_play__imgo.style.visibility='inherit';
			me.elementMouseOver['video_url_popup_phone_play']=true;
		}
		me._video_url_popup_phone_play.onmouseleave=function (e) {
			me._video_url_popup_phone_play__img.style.visibility='inherit';
			me._video_url_popup_phone_play__imgo.style.visibility='hidden';
			me.elementMouseOver['video_url_popup_phone_play']=false;
		}
		me._video_url_popup_phone_play.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone_bg.appendChild(me._video_url_popup_phone_play);
		el=me._close_popup_phone=document.createElement('div');
		els=me._close_popup_phone__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB5Mj0iNDMuMyIgeDI9IjQzLjMiIHgxPSIyMC43IiBjbGFzcz0ic3QxIiB5MT0iMjAuNyIvPgogIDxsaW5lIHkyPSI0My4zIiB4Mj0iMjAuNyIgeDE9IjQzLjMi'+
			'IGNsYXNzPSJzdDEiIHkxPSIyMC43Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDMuMzEiIHgyPSI0My4zMSIgeDE9IjIwLjY5IiB5MT0iMjAuNjkiLz'+
			'4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSI0My4zMSIgeDI9IjIwLjY5IiB4MT0iNDMuMzEiIHkxPSIyMC42OSIvPgogPC9nPgo8L3N2Zz4K';
		me._close_popup_phone__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="close_popup_phone";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close_popup_phone.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_popup_phone.onclick=function (e) {
			player.setVariableValue('vis_phone_popup', false);
			player.setVariableValue('vis_phone_youtube', false);
			player.setVariableValue('vis_phone_vimeo', false);
		}
		me._close_popup_phone.onmouseenter=function (e) {
			me._close_popup_phone__img.style.visibility='hidden';
			me._close_popup_phone__imgo.style.visibility='inherit';
			me.elementMouseOver['close_popup_phone']=true;
		}
		me._close_popup_phone.onmouseleave=function (e) {
			me._close_popup_phone__img.style.visibility='inherit';
			me._close_popup_phone__imgo.style.visibility='hidden';
			me.elementMouseOver['close_popup_phone']=false;
		}
		me._close_popup_phone.ggUpdatePosition=function (useTransition) {
		}
		me._popup_phone_bg.appendChild(me._close_popup_phone);
		me._popup_phone.appendChild(me._popup_phone_bg);
		me.divSkin.appendChild(me._popup_phone);
		el=me._local_fonts=document.createElement('div');
		el.ggId="local_fonts";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_code ";
		el.ggType='code';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._local_fonts.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._local_fonts.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._local_fonts);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNjE5IDkxMC4zIj4KIDwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyOS40LjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiAyLjEuMCBCdWlsZCAxNTIpICAtLT4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLnN0MCwgLnN0MSwgLnN0MiB7CiAgICAgICAgaXNvbGF0aW9uOiBpc29sYXRlOwogICAgICB9CgogICAgICAuc3QzLCAuc3QxLCAuc3QyIHsKIC'+
			'AgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuc3QxIHsKICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtOwogICAgICB9CgogICAgICAuc3QxLCAuc3QyIHsKICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLUxpZ2h0LCBIZWx2ZXRpY2E7CiAgICAgICAgZm9udC1zaXplOiAxNDIuOXB4OwogICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7CiAgICAgIH0KCiAgICAgIC5zdDIgewogICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBjbGFzcz0ic3QwIj4KICA8dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MjIgMzQ4LjEp'+
			'IiBjbGFzcz0ic3QyIj4KICAgPHRzcGFuIHk9IjAiIHg9IjAiPktvcmVhPC90c3Bhbj4KICA8L3RleHQ+CiAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzIyIDUxNS4zKSIgY2xhc3M9InN0MSI+CiAgIDx0c3BhbiB5PSIwIiB4PSIwIj5JbnRlcm5hdGlvbmFsPC90c3Bhbj4KICA8L3RleHQ+CiAgPHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzIyIDY4Mi41KSIgY2xhc3M9InN0MiI+CiAgIDx0c3BhbiB5PSIwIiB4PSIwIj5TY2hvb2w8L3RzcGFuPgogIDwvdGV4dD4KIDwvZz4KIDxwYXRoIGQ9Ik02MzIuNiw3MjUuOEg3OS41bC0yMCw5MS45aDU5My4xbC0yMC05MS45WiIgY2xhc3M9In'+
			'N0MyIvPgogPHBhdGggZD0iTTQ2MSwzMDguM3YxMzUuOWMwLDI5LjgsMjQuMiw1NC4xLDU0LDU0LjFoMzkuNXYxNDAuOWgtMzIuMnYtNzAuOGgtNjEuM3Y1OC40YzAsNDIuNywzNC43LDc3LjQsNzcuNCw3Ny40czc3LjQtMzQuNyw3Ny40LTc3LjR2LTEzNS45YzAtMjkuOC0yNC4zLTU0LTU0LTU0aC0zOS41di0xNDAuOWgzMi4ydjcwLjhoNjEuNHYtNTguNWMwLTQyLjctMzQuNy03Ny40LTc3LjQtNzcuNHMtNzcuNCwzNC44LTc3LjQsNzcuNGgwWiIgY2xhc3M9InN0MyIvPgogPHBhdGggZD0iTTM4NC4zLDIzNC42aC01OC45djQ2NS44aDYxLjNWMjM0LjZoLTIuNFoiIGNsYXNzPSJzdDMiLz4KIDxw'+
			'YXRoIGQ9Ik0yMjAuMiw0MzEuNWwzNi0xNTYuMWMyLjgtMTIuMiw5LjQtMjAuNiwxNy4xLTI5LjZsOS42LTExLjJoLTY1LjZsLTMuOCw0LjljLTcuMyw5LjYtMTQuOSwxOS40LTE4LjcsMzUuOCwwLDAtMzYuMiwxNTYuNy0zNy4zLDE2MS40di0yMDIuMmgtNjEuM3Y0NjUuOGg2MS4zdi0yMDIuMmgzMi4ydjE2MS40YzAsMTMuNSw1LjksMjcuNiwxMC45LDM2LjlsMiwzLjhoNjQuOGwtNi0xMC44Yy01LjQtOS43LTEwLjQtMTguOC0xMC40LTMwdi0xNTAuNGMwLTM3LjktNDIuNS00MS01NC4xLTQyLDEyLjItOC42LDE5LjUtMTkuNywyMy4yLTM1LjdoMFoiIGNsYXNzPSJzdDMiLz4KIDxwYXRoIGQ9Ik'+
			'01OS41LDEzMy45djY5aDU5My4xdi02OWwtMjk2LjUtNDEuM0w1OS41LDEzMy45WiIgY2xhc3M9InN0MyIvPgo8L3N2Zz4K';
		me._svg_1__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 177px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._svg_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 54px;';
		hs+='left : 739px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : inherit;';
		hs+='width : 162px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.customnodeid)));
			var hs = player._("<div class=\"ggmarkdown\"><h2>%1<\/h2>\n<div>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._text_1);
		me._controls_container.logicBlock_visible();
		me.elementMouseOver['btn_back_icon']=false;
		me.elementMouseOver['btn_forward_icon']=false;
		me._controller.logicBlock_position();
		me._controller.logicBlock_visible();
		me.elementMouseOver['btn_zoomout']=false;
		me.elementMouseOver['btn_zoomin']=false;
		me.elementMouseOver['btn_right']=false;
		me.elementMouseOver['btn_down']=false;
		me.elementMouseOver['btn_up']=false;
		me.elementMouseOver['btn_left']=false;
		me._controls_right.logicBlock_position();
		me._btn_toggle_audio.logicBlock_visible();
		me._btn_audio_off.logicBlock_visible();
		me.elementMouseOver['btn_audio_off']=false;
		me._btn_audio_on.logicBlock_visible();
		me.elementMouseOver['btn_audio_on']=false;
		me._btn_toggle_gyro.logicBlock_visible();
		me._btn_gyro_off.logicBlock_visible();
		me.elementMouseOver['btn_gyro_off']=false;
		me._btn_gyro_on.logicBlock_visible();
		me.elementMouseOver['btn_gyro_on']=false;
		me._btn_vr.logicBlock_visible();
		me.elementMouseOver['btn_vr']=false;
		me._btn_fullscreen.logicBlock_visible();
		me._btn_fullscreen_exit.logicBlock_visible();
		me.elementMouseOver['btn_fullscreen_exit']=false;
		me._btn_fullscreen_enter.logicBlock_visible();
		me.elementMouseOver['btn_fullscreen_enter']=false;
		me._btn_toggle_controls.logicBlock_position();
		me._btn_toggle_controls_icon.logicBlock_angle();
		me.elementMouseOver['btn_toggle_controls_icon']=false;
		me._controls_left_container.logicBlock_position();
		me._controls_left_container.logicBlock_size();
		me._btn_toggle_controls_left.logicBlock_angle();
		me.elementMouseOver['btn_toggle_controls_left']=false;
		me._info.logicBlock_size();
		me._info.logicBlock_visible();
		me._map_bg.logicBlock_size();
		me._map_bg.logicBlock_visible();
		me._map.ggMarkerInstances=[];
		me._map.ggLastNodeId=null;
		me._map.ggMarkerArray=[];
		me._map.ggGoogleMarkerArray=[];
		me._map.ggLastZoom = -1;
		me._map.ggLastLat = 0.0;
		me._map.ggLastLng = 0.0;
		me._map.ggRadar={ lastFov : -1, lastPan : -1, lastZoom : -1,activeNodeLatLng : null, poly : null }
		me._map.ggRadar.update=function() {
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			var radar=me._map.ggRadar;
			var map=me._map.ggMap;
			if (!map) return;
			var d2r = Math.PI/180 ;
			var r2d = 180/Math.PI ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			var zoom = map.getZoom();
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
				pan -= me._map.ggFloorplanNorth;
			}
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map.ggFilteredIds.length > 0 && me._map.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0)) && filterpassed) {
				if (zoom<6) zoom = 6; // avoid large radar beams on world map
				if ((radar.poly) && (fov==radar.lastFov) && (pan==radar.lastPan) && (zoom==radar.lastZoom) && (gps[0]==radar.activeNodeLatLng.lat()) && (gps[1]==radar.activeNodeLatLng.lng())) return; 
				radar.lastPan=pan;radar.lastFov=fov;radar.lastZoom=zoom;
				radar.activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
				var tileDeg = 360.0 / Math.pow(2, zoom);
				var rLng = tileDeg * 0.78125;
				var rLat = rLng * Math.cos(radar.activeNodeLatLng.lat() * d2r);
				var radar_path = [];
				radar_path.push(radar.activeNodeLatLng);
				var segments=8;
				for (i=-segments; i<=segments; i++) {
					var angle = (fov / (2*segments)) * i;
					var x = -rLng * Math.sin((pan+angle)*d2r) + radar.activeNodeLatLng.lng();
					var y =  rLat * Math.cos((pan+angle)*d2r) + radar.activeNodeLatLng.lat();
					radar_path.push(new google.maps.LatLng(y, x));
				}
				if (radar.poly) {
					radar.poly.setMap(null);
					radar.poly = null;
				}
				radar.poly = new google.maps.Polygon({
					paths: radar_path,
					strokeColor: '#282828',
					strokeOpacity: 0.8,
					strokeWeight: 1,
					fillColor: '#282828',
					fillOpacity: 0.35
				});
				radar.poly.setMap(map);
			} else {
				if (radar) {
					activeNodeLatLng = new google.maps.LatLng(0,0);
					if (radar.poly) {
						radar.poly.setMap(null);
						radar.poly = null;
					}
				}
			}
		}
		me._map.ggTileAvailable=function(x, y, z) {
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (z < 7 || z > 7 + (mapDetails['zoomlevels'] - 1)) return false;
			var mapAR = mapDetails['width'] / mapDetails['height'];
			if (mapDetails['width'] >= mapDetails['height']) {
			var tilesInX = Math.pow(2, z - 7);
			var tilesInY = Math.ceil(tilesInX / mapAR);
			} else {
				var tilesInY = Math.pow(2, z - 7);
				var tilesInX = Math.ceil(tilesInY * mapAR);
			}
			var tilesXStart = Math.pow(2, z - 1);
			var tilesYStart = tilesXStart;
			var tilesXEnd = tilesXStart + tilesInX - 1;
			var tilesYEnd = tilesYStart + tilesInY - 1;
			if (x < tilesXStart || x > tilesXEnd || y < tilesYStart || y > tilesYEnd) return false;
			return true;
		}
		me._map.ggSetLayer=function(layerIndex) {
			if (Array.isArray(me._map.ggMapLayers) && layerIndex >= 0 && layerIndex < me._map.ggMapLayers.length) {
				me._map.ggMap.setMapTypeId(me._map.ggMapLayers[layerIndex]);
			}
		}
		me._map.ggInitMap=function(keepZoom) {
			var mapType = player.getMapType(me._map.ggMapId);
			var mapDetails = player.getMapDetails(me._map.ggMapId);
			if (!me._map.ggMapId) return;
			if (!me._map.ggMapId.startsWith('google') && Object.keys(mapDetails).length === 0) return;
			if (mapType == 'file') {
				me._map.style.backgroundColor = mapDetails['bgcolor'];
				me._map.ggFloorplanNorth = mapDetails['floorplannorth'];
			} else {
				me._map.style.backgroundColor = '#fff';
			}
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng();
			} else {
				gps=player.getNodeMapCoords(null, me._map.ggMapId);
			}
			if ((typeof google !== 'object') || (typeof google.maps !== 'object')) return;
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				activeNodeLatLng = new google.maps.LatLng(gps[0], gps[1]);
			} else {
				activeNodeLatLng = new google.maps.LatLng(me._map.ggLastLat, me._map.ggLastLng);
			}
			if (mapType == 'web') {
				var mapTypeId;
				if (me._map.ggMapId == 'googleroadmap') {
					mapTypeId = google.maps.MapTypeId.ROADMAP;
				} else if (me._map.ggMapId == 'googlehybrid') {
					mapTypeId = google.maps.MapTypeId.HYBRID;
				} else if (me._map.ggMapId == 'googlesatellite') {
					mapTypeId = google.maps.MapTypeId.SATELLITE;
				} else if (me._map.ggMapId == 'googleterrain') {
					mapTypeId = google.maps.MapTypeId.TERRAIN;
				} else {
					mapTypeId = mapDetails['mapprovider'];
				}
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 14;
				var initZoom = keepZoom ? me._map.ggLastZoom : 14;
				var mapOptions = {
					zoom: initZoom,
					center: activeNodeLatLng,
					mapTypeId: mapTypeId,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false,
					gestureHandling: 'greedy'
				};
				if (mapDetails.hasOwnProperty('maplimits') && (mapDetails['maplimits'].length == 4)) {
					mapOptions.restriction = {
						strictBounds: false,
						latLngBounds: {
							north: parseFloat(mapDetails['maplimits'][0]),
							east: parseFloat(mapDetails['maplimits'][1]),
							south: parseFloat(mapDetails['maplimits'][2]),
							west: parseFloat(mapDetails['maplimits'][3]),
						}
					}
				}
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				if (mapTypeId == 'googlecustomstyle') {
					var styledMapType = new google.maps.StyledMapType(JSON.parse(mapDetails['googlecustomstylecode']), {name: 'Styled Map'});
					me._map.ggMap.mapTypes.set('styled_map', styledMapType);
					me._map.ggMap.setMapTypeId('styled_map');
				}
				if (mapTypeId == 'googlemap') {
					if (mapDetails.hasOwnProperty('googlelayerstyles')) {
						me._map.ggMapLayers = [];
						for (let layerIndex = 0; layerIndex < mapDetails['googlelayerstyles'].length; layerIndex++) {
							let layerStyle = mapDetails['googlelayerstyles'][layerIndex];
							if (layerStyle.indexOf('/') != -1) {
								var mapTypeId = 'custom' + layerIndex;
								me._map.ggMapLayers.push(mapTypeId);
								me._map.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var urlString = layerStyle;
									urlString = urlString.replace('{s}', 'a');
									urlString = urlString.replace('{z}', zoom);
									urlString = urlString.replace('{x}', coord.x);
									urlString = urlString.replace('{y}', coord.y);
									return urlString;
								},
								maxZoom: 19,
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['googlelayernames'][layerIndex]
								})) ;
							} else {
								me._map.ggMapLayers.push(layerStyle);
							}
						}
						me._map.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: me._map.ggMapLayers
							}
						});
						me._map.ggMap.setMapTypeId(me._map.ggMapLayers[0]);
					} else {
						me._map.ggMap.setMapTypeId(mapDetails['mapstyle']);
					}
				}
				if (mapTypeId == 'openstreetmap') {
					me._map.ggMap.mapTypes.set('openstreetmap', new google.maps.ImageMapType({
						getTileUrl: function(coord, zoom) {
							if (mapDetails['mapstyle'] == 'streets') {
								return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							} else if (mapDetails['mapstyle'] == 'outdoors') {
								return 'https://a.tile.opentopomap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
							}
						},
						tileSize: new google.maps.Size(256, 256),
						name: mapDetails['title'],
						maxZoom: mapDetails['mapstyle'] == 'outdoors' ? 17 : 18
					}));
				}
				if (mapTypeId == 'mapbox') {
					if (mapDetails.hasOwnProperty('mapboxlayerstyleurls')) {
						me._map.ggMapLayers = [];
						for (let layerIndex = 0; layerIndex < mapDetails['mapboxlayerstyleurls'].length; layerIndex++) {
							var mapTypeId = 'mapbox' + layerIndex;
							me._map.ggMapLayers.push(mapTypeId);
							me._map.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var layerStyle = mapDetails['mapboxlayerstyleurls'][layerIndex];
									if (!layerStyle.startsWith('mapbox:')) {
											if (layerStyle == 'satellite') {
												var urlString = 'https://api.mapbox.com/v4/mapbox.' + layerStyle +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails["mapkey"];
											} else {
												var urlString = 'https://api.mapbox.com/styles/v1/mapbox/' + layerStyle +  '-v11/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
											}
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
									} else {
										layerStyle = layerStyle.slice(layerStyle.indexOf('styles/') + 7)
										var urlString = 'https://api.mapbox.com/styles/v1/' + layerStyle + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
									} 
								},
								maxZoom: 18,
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['mapboxlayernames'][layerIndex]
							}));
						}
						me._map.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: me._map.ggMapLayers
							}
						});
						me._map.ggMap.setMapTypeId(me._map.ggMapLayers[0]);
					} else {
						me._map.ggMap.mapTypes.set('mapbox', new google.maps.ImageMapType({
							getTileUrl: function(coord, zoom) {
								if (mapDetails['styleurl'] == '') {
									if (mapDetails['mapstyle'] == 'satellite') {
										var urlString = 'https://api.mapbox.com/v4/mapbox.' + mapDetails["mapstyle"] +  '/{z}/{x}/{y}@2x.png?access_token=' + mapDetails["mapkey"];
									} else {
										var urlString = 'https://api.mapbox.com/styles/v1/mapbox/' + mapDetails["mapstyle"] +  '-v11/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
									}
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
								} else {
									var styleurlstring = mapDetails['styleurl'];
									styleurlstring = styleurlstring.slice(styleurlstring.indexOf('styles/') + 7);
									var urlString = 'https://api.mapbox.com/styles/v1/' + styleurlstring + '/tiles/256/{z}/{x}/{y}@2x?access_token=' + mapDetails["mapkey"];
										urlString = urlString.replace('{s}', 'a');
										urlString = urlString.replace('{z}', zoom);
										urlString = urlString.replace('{x}', coord.x);
										urlString = urlString.replace('{y}', coord.y);
										return urlString;
								}
							},
							tileSize: new google.maps.Size(256, 256),
							name: mapDetails['title'],
							maxZoom: 18
						}));
					}
				}
				if (mapTypeId == 'custom') {
					if (mapDetails.hasOwnProperty('customlayerurltemplates')) {
						me._map.ggMapLayers = [];
						for (let layerIndex = 0; layerIndex < mapDetails['customlayerurltemplates'].length; layerIndex++) {
							var mapTypeId = 'custom' + layerIndex;
							me._map.ggMapLayers.push(mapTypeId);
							me._map.ggMap.mapTypes.set(mapTypeId, new google.maps.ImageMapType({
								getTileUrl: function(coord, zoom) {
									var urlString = mapDetails['customlayerurltemplates'][layerIndex];
									urlString = urlString.replace('{s}', 'a');
									urlString = urlString.replace('{z}', zoom);
									urlString = urlString.replace('{x}', coord.x);
									urlString = urlString.replace('{y}', coord.y);
									return urlString;
								},
								maxZoom: parseInt(mapDetails['customlayermaxzooms'][layerIndex]),
								tileSize: new google.maps.Size(256, 256),
								name: mapDetails['customlayernames'][layerIndex]
							}));
						}
						me._map.ggMap.setOptions({
							mapTypeControl: true,
							mapTypeControlOptions: {
								style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
								mapTypeIds: me._map.ggMapLayers
							}
						});
						me._map.ggMap.setMapTypeId(me._map.ggMapLayers[0]);
					} else {
						me._map.ggMap.mapTypes.set('custom', new google.maps.ImageMapType({
							getTileUrl: function(coord, zoom) {
								var urlString = mapDetails['mapurltemplate'];
								urlString = urlString.replace('{s}', 'a');
								urlString = urlString.replace('{z}', zoom);
								urlString = urlString.replace('{x}', coord.x);
								urlString = urlString.replace('{y}', coord.y);
								return urlString;
							},
							tileSize: new google.maps.Size(256, 256),
							name: mapDetails['title'],
							maxZoom: mapDetails['mapmaxzoom']
						}));
					}
				}
				google.maps.event.addListener(me._map.ggMap, 'idle', function(){
					me.updateSize(me._map);
				});
				google.maps.event.addListener(me._map.ggMap, 'zoom_changed', function(){
					me._map.ggRadar.update();
				});
			} else if (mapType == 'file') {
				if (me._map.ggLastZoom == -1) me._map.ggLastZoom = 7;
				var initZoom = keepZoom ? me._map.ggLastZoom : 7;
				var mapOptions = {
				  backgroundColor: mapDetails['bgcolor'],
					zoom: initZoom,
					minZoom: 7,
					maxZoom: 7 + (mapDetails['zoomlevels'] - 1) + 0,
					center: activeNodeLatLng,
					fullscreenControl: false,
					mapTypeControl: false,
					streetViewControl: false,
					gestureHandling: 'greedy'
				};
				me._map.ggMap = new google.maps.Map(me._map, mapOptions);
				var customMapType = new google.maps.ImageMapType({
					getTileUrl: function(coord, zoom) {
						if (me._map.ggTileAvailable(coord.x, coord.y, zoom)) {
							return basePath + 'images/maptiles/' + me._map.ggMapId + '/' + zoom + '/' + coord.x + '_' + coord.y + '.' + mapDetails['tileformat'];
						} else {
							return null;
						}
					},
					tileSize: new google.maps.Size(256, 256),
					minZoom: 7,
					maxZoom: 7 + mapDetails['zoomlevels'],
					name: mapDetails['title'],
				});
				me._map.ggMap.mapTypes.set(me._map.ggMapId, customMapType);
				me._map.ggMap.setMapTypeId(me._map.ggMapId);
				me._map.ggCalculateFloorplanDimInDeg(mapDetails);
				google.maps.event.addListener(me._map.ggMap, 'center_changed', function() {
					me._map.ggCheckBounds(mapDetails);
				});
				google.maps.event.addListener(me._map.ggMap, 'zoom_changed', function() {
					me._map.ggCheckBounds(mapDetails);
					me._map.ggRadar.update();
				});
			}
			me._map.ggMapNotLoaded = false;
		}
		me._map.ggClearMap=function() {
		me._map.ggClearMapMarkers();
		me._map.ggMap = null;
		me._map.ggMapNotLoaded = true;
		}
		me._map.ggClearMapMarkers=function() {
			me._map.ggLastActivMarker = null;
			var id,marker;
			var markers=me._map.ggMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					if (marker._div.parentNode) {
						marker._div.parentNode.removeChild(marker._div);
					}
					marker.setMap(null);
				}
			}
			me._map.ggMarkerArray=[];
			me._map.ggMarkerInstances=[];
			me._map.ggLastActivMarker = null;
		}
		me._map.ggCenterNode=function(nodeId) {
			if (!me._map.ggMap) return;
			var gps;
			if (player.getMapType(me._map.ggMapId) == 'web') {
				gps=player.getNodeLatLng(nodeId);
			} else {
				gps=player.getNodeMapCoords(nodeId, me._map.ggMapId);
			}
			if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
				var markerLocation = new google.maps.LatLng(gps[0], gps[1]);
				me._map.ggMap.panTo(markerLocation);
			}
		}
		me._map.ggFitBounds=function(force) {
			if (me._map.ggMapNotLoaded) return;
			if (!me._map.ggMap) return;
			if (!me._map.ggMarkerBounds.isEmpty()) {
				if (me._map.ggMarkerInstances.length > 1 || Object.getOwnPropertyNames(me._map.ggGoogleMarkerArray).length > 1) {
					me._map.ggMap.fitBounds(me._map.ggMarkerBounds, 30);
				} else {
					me._map.ggMap.setCenter(me._map.ggMarkerBounds.getCenter());
					if (player.getMapType(me._map.ggMapId) == 'web') {
						me._map.ggMap.setZoom(18);
					} else {
						me._map.ggMap.setZoom(7);
					}
				}
			}
		}
		me._map.ggInitMapMarkers=function(updateMapBounds) {
			if (!me._map.ggMap) return;
			function SkinMarkerOverlay(pos, div, map) {
				this._pos = pos;
				this._div = div;
				this._map = map;
				this.setMap(map);
			}
			SkinMarkerOverlay.prototype = new google.maps.OverlayView();
			SkinMarkerOverlay.prototype.onAdd = function() {
				this.getPanes().overlayMouseTarget.appendChild(this._div);
				skin.updateSize(this._div);
			}
			SkinMarkerOverlay.prototype.draw = function() {
				var overlayProjection = this.getProjection();
				var point = this.getProjection().fromLatLngToDivPixel(this._pos);
				if (point) {
					this._div.style.left =(point.x - 16) + 'px';
					this._div.style.top =(point.y - 16) + 'px';
				}
			};
			SkinMarkerOverlay.prototype.onRemove = function() {
				this._div = null;
			};
			SkinMarkerOverlay.prototype.getPosition = function() {
				return this._pos;
			};
			me._map.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map.ggFilteredIds = [];
			if (me._map.ggFilter != '') {
				var filter = me._map.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map.ggFilteredIds.length > 0) ids = me._map.ggFilteredIds;
			}
			var marker;
			var markerLocation;
			me._map.ggMarkerBounds = new google.maps.LatLngBounds();
			var currentId = player.getCurrentNode();
			for(var i=0;i<ids.length;i++) {
				var id=ids[i];
				var gps;
				if (player.getMapType(me._map.ggMapId) == 'web') {
					gps=player.getNodeLatLng(id);
				} else {
					gps=player.getNodeMapCoords(id, me._map.ggMapId);
				}
				if ((gps.length>=2) && ((gps[0]!=0) || (gps[1]!=0))) {
					markerLocation = new google.maps.LatLng(gps[0], gps[1]);
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var div=new SkinElement_map_pin_Class(me, markerParent);
					marker=new SkinMarkerOverlay(markerLocation,div._map_pin ,me._map.ggMap);

					me._map.ggMarkerArray[id]=marker;
					me._map.ggMarkerInstances.push(div);
					me._map.ggMarkerBounds.extend(markerLocation);
				}
			}
			if (ids.length > 1 && !me._map.ggMarkerBounds.isEmpty() && updateMapBounds) {
				me._map.ggFitBounds(false);
			}
			skin.updateSize(me._map);
			this.ggLastActivMarker = null;
			if (this.ggUpdateConditionNodeChange) this.ggUpdateConditionNodeChange();
			this.ggRadar.lastFov = -1;
			this.ggRadar.update();
		}
		me._map.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'file') {
				return;
			}
			me._map.ggMapId = mapId;
			if (!me._map.ggMapNotLoaded) {
				me._map.ggLastZoom = me._map.ggMap.getZoom();
				me._map.ggLastLat = me._map.ggMap.getCenter().lat();
				me._map.ggLastLng = me._map.ggMap.getCenter().lng();
				me._map.ggClearMap();
				me._map.ggInitMap(true);
				me._map.ggInitMapMarkers(false);
			}
		}
		me._map.ggCalculateFloorplanDimInDeg=function(mapDetails) {
			var mapAR = mapDetails['width'] / mapDetails['height'];
			var tileInDeg = 360.0 / Math.pow(2, 7);
			if (mapDetails['width'] >= mapDetails['height']) {
				var tmpWidth = mapDetails['width'];
				while (tmpWidth > 256) {
					tmpWidth /= 2;
				}
				me._map.mapWidthInDeg = tileInDeg * (tmpWidth / 256);
				me._map.mapHeightInDeg = me._map.mapWidthInDeg / mapAR;
			} else {
				var tmpHeight = mapDetails['height'];
				while (tmpHeight > 256) {
					tmpHeight /= 2;
				}
				me._map.mapHeightInDeg = tileInDeg * (tmpHeight / 256);
				me._map.mapWidthInDeg = me._map.mapHeightInDeg * mapAR;
			}
		}
		me._map.ggInCheckBounds=false;
		me._map.ggCheckBounds=function(mapDetails) {
			if (me._map.ggInCheckBounds) return;
			me._map.ggInCheckBounds = true;
			var mapCenter = me._map.ggMap.getCenter();
			var currentZoom = me._map.ggMap.getZoom();
			var pixelInDeg = 360.0 / (Math.pow(2, currentZoom) * 256)
			var xOffset = (me._map.clientWidth / 2.0) * pixelInDeg;
			var yOffset = (me._map.clientHeight / 2.0) * pixelInDeg;
			var x = mapCenter.lng();
			var y = mapCenter.lat();
			var xTemp = x;
			var yTemp = y;
			if (me._map.mapWidthInDeg < me._map.clientWidth * pixelInDeg) {
				var xMargin = (me._map.clientWidth * pixelInDeg - me._map.mapWidthInDeg) / 2;
				if (x < me._map.mapWidthInDeg / 2 - xMargin) x = me._map.mapWidthInDeg / 2 - xMargin;
				if (x > me._map.mapWidthInDeg / 2 + xMargin) x = me._map.mapWidthInDeg / 2 + xMargin;
			} else {
				if (x > me._map.mapWidthInDeg - xOffset) x = me._map.mapWidthInDeg - xOffset;
				if (x < xOffset) x = xOffset;
			}
			if (me._map.mapHeightInDeg < me._map.clientHeight * pixelInDeg) {
				var yMargin = (me._map.clientHeight * pixelInDeg - me._map.mapHeightInDeg) / 2;
				if (y < -me._map.mapHeightInDeg / 2 - yMargin) y = -me._map.mapHeightInDeg / 2 - yMargin;
				if (y > -me._map.mapHeightInDeg / 2 + yMargin) y = -me._map.mapHeightInDeg / 2 + yMargin;
			} else {
				if (y < -me._map.mapHeightInDeg + yOffset) y = -me._map.mapHeightInDeg + yOffset;
				if (y > -yOffset) y = -yOffset;
			}
			if (x != xTemp || y != yTemp) {
				me._map.ggMap.setCenter(new google.maps.LatLng(y, x));
			}
			me._map.ggInCheckBounds = false;
		}
		me._map.logicBlock_size();
		me._map.logicBlock_visible();
		me._floorplan.ggInitMap=function() {};
		me._floorplan.ggInitMapMarkers=function() {};
		me._floorplan.ggClearMap=function() {};
		me._floorplan.logicBlock_size();
		me._floorplan.logicBlock_visible();
		me._thumbnail_menu.logicBlock_size();
		me._thumbnail_menu.logicBlock_visible();
		me._nodes.logicBlock_visible();
		me._nodes_scroller.logicBlock_position();
		me._nodes_scroller.logicBlock_size();
		me._nodes_cloner.logicBlock_size();
		me._nodes_category_bg.logicBlock_visible();
		me.elementMouseOver['nodes_category_bg']=false;
		me._nodes_back_hover.logicBlock_visible();
		me._categories_scroller.logicBlock_visible();
		me._btn_thumbs.logicBlock_visible();
		me._btn_thumbs_bg.logicBlock_visible();
		me.elementMouseOver['btn_thumbs_icon']=false;
		me._btn_map.logicBlock_visible();
		me._btn_map_bg.logicBlock_visible();
		me.elementMouseOver['btn_map_icon']=false;
		me._btn_floorplan.logicBlock_visible();
		me._btn_floorplan_bg.logicBlock_visible();
		me.elementMouseOver['btn_floorplan_icon']=false;
		me._btn_info.logicBlock_visible();
		me._btn_info_enabled.logicBlock_visible();
		me._btn_info_bg.logicBlock_visible();
		me.elementMouseOver['btn_info_icon']=false;
		me._btn_info_disabled.logicBlock_visible();
		me._toggle_controls_left.logicBlock_alpha();
		me._toggle_controls_left_icon.logicBlock_angle();
		me.elementMouseOver['toggle_controls_left_icon']=false;
		me._phone_touch_bg.logicBlock_visible();
		me._info_popup.logicBlock_visible();
		me.elementMouseOver['info_popup_close']=false;
		me._media_popup.logicBlock_visible();
		me._video_youtube_popup.logicBlock_visible();
		me._video_youtube_popup.ggVideoSource = '';
		me._video_youtube_popup.ggVideoNotLoaded = true;
		me._video_vimeo_popup.logicBlock_visible();
		me._video_vimeo_popup.ggVideoSource = '';
		me._video_vimeo_popup.ggVideoNotLoaded = true;
		me._video_controller.logicBlock_visible();
		me._video_file_popup.logicBlock_visible();
		me._video_file_popup.ggVideoSource = 'media/';
		me._video_file_popup.ggVideoNotLoaded = true;
		me._video_file_hs_popup_play.logicBlock_visible();
		me.elementMouseOver['video_file_hs_popup_play']=false;
		me._video_url_popup.logicBlock_visible();
		me._video_url_popup.ggVideoSource = '';
		me._video_url_popup.ggVideoNotLoaded = true;
		me._video_url_hs_popup_play.logicBlock_visible();
		me.elementMouseOver['video_url_hs_popup_play']=false;
		me._pdf_popup.logicBlock_visible();
		me._image_popup.logicBlock_visible();
		me._url_hs_popup_iframe.logicBlock_visible();
		me.elementMouseOver['media_popup_close']=false;
		me._sounds_splashscreen.logicBlock_visible();
		me.elementMouseOver['sounds_off']=false;
		me.elementMouseOver['sounds_on']=false;
		me._popup_phone.logicBlock_visible();
		me._info_popup_phone.logicBlock_visible();
		me._image_popup_phone.logicBlock_visible();
		me._pdf_popup_phone.logicBlock_visible();
		me._video_controller_phone.logicBlock_visible();
		me._youtube_popup_phone.logicBlock_visible();
		me._youtube_popup_phone.ggVideoSource = '';
		me._youtube_popup_phone.ggVideoNotLoaded = true;
		me._vimeo_popup_phone.logicBlock_visible();
		me._vimeo_popup_phone.ggVideoSource = '';
		me._vimeo_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone.logicBlock_visible();
		me._video_file_popup_phone.ggVideoSource = 'media/';
		me._video_file_popup_phone.ggVideoNotLoaded = true;
		me._video_file_popup_phone_play.logicBlock_visible();
		me.elementMouseOver['video_file_popup_phone_play']=false;
		me._video_url_popup_phone.logicBlock_visible();
		me._video_url_popup_phone.ggVideoSource = 'media/';
		me._video_url_popup_phone.ggVideoNotLoaded = true;
		me._video_url_popup_phone_play.logicBlock_visible();
		me.elementMouseOver['video_url_popup_phone_play']=false;
		me.elementMouseOver['close_popup_phone']=false;
		el = me._local_fonts;
		;
		player.addListener('activehotspotchanged', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_activehotspotchanged();
				}
			}
			me._btn_info_enabled.logicBlock_visible();
			me._btn_info_disabled.logicBlock_visible();
		});
		player.addListener('changenode', function(event) {
			for(var i = 0; i < me._nodes_cloner.ggInstances.length; i++) {
				me._nodes_cloner.ggInstances[i].ggEvent_changenode(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_changenode();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._controls_container.logicBlock_visible();
			me._controller.logicBlock_position();
			me._controller.logicBlock_visible();
			me._controls_right.logicBlock_position();
			me._btn_audio_off.logicBlock_visible();
			me._btn_audio_on.logicBlock_visible();
			me._btn_toggle_gyro.logicBlock_visible();
			me._btn_gyro_off.logicBlock_visible();
			me._btn_gyro_on.logicBlock_visible();
			me._btn_fullscreen.logicBlock_visible();
			me._btn_toggle_controls.logicBlock_position();
			me._btn_toggle_controls_icon.logicBlock_angle();
			me._controls_left_container.logicBlock_position();
			me._controls_left_container.logicBlock_size();
			me._btn_toggle_controls_left.logicBlock_angle();
			me._info.logicBlock_size();
			me._info.logicBlock_visible();
			me._map_bg.logicBlock_size();
			me._map_bg.logicBlock_visible();
			me._map.logicBlock_size();
			me._map.logicBlock_visible();
			for (var i=0; i < me._map.ggMarkerInstances.length; i++) {
				me._map.ggMarkerInstances[i].ggEvent_changenode();
			}
			if (me._map.ggLastActivMarker) {
				if (me._map.ggLastActivMarker._div.ggDeactivate) me._map.ggLastActivMarker._div.ggDeactivate();
			}
			var id=player.getCurrentNode();
			if (me.ggMarkerArray) {
			var marker=me._map.ggMarkerArray[id];
			if (marker) {
				if (marker._div.ggActivate) marker._div.ggActivate();
			}
			me._map.ggLastActivMarker=marker;
			}
			if (player.getMapType(me._map.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map.ggChangeMap(mapId);
					}
				}
			}
			me._map.ggLastNodeId = id;
			me._map.ggRadar.update();
			me._floorplan.logicBlock_size();
			me._floorplan.logicBlock_visible();
			me._thumbnail_menu.logicBlock_size();
			me._thumbnail_menu.logicBlock_visible();
			me._nodes.logicBlock_visible();
			me._nodes_scroller.logicBlock_position();
			me._nodes_scroller.logicBlock_size();
			me._nodes_cloner.logicBlock_size();
			me._nodes_cloner.ggUpdateConditionNodeChange();
			me._nodes_category_bg.logicBlock_visible();
			me._categories_scroller.logicBlock_visible();
			me._categories_cloner.ggUpdateConditionNodeChange();
			me._btn_thumbs_bg.logicBlock_visible();
			me._btn_map.logicBlock_visible();
			me._btn_map_bg.logicBlock_visible();
			me._btn_floorplan.logicBlock_visible();
			me._btn_floorplan_bg.logicBlock_visible();
			me._btn_info.logicBlock_visible();
			me._btn_info_enabled.logicBlock_visible();
			me._btn_info_bg.logicBlock_visible();
			me._btn_info_disabled.logicBlock_visible();
			me._toggle_controls_left.logicBlock_alpha();
			me._toggle_controls_left_icon.logicBlock_angle();
			me._phone_touch_bg.logicBlock_visible();
			me._info_popup.logicBlock_visible();
			me._media_popup.logicBlock_visible();
			me._video_youtube_popup.logicBlock_visible();
			me._video_vimeo_popup.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._video_controller_seekbar.ggConnectToMediaEl();
			me._video_file_popup.logicBlock_visible();
			me._video_file_hs_popup_play.logicBlock_visible();
			me._video_url_popup.logicBlock_visible();
			me._video_url_hs_popup_play.logicBlock_visible();
			me._pdf_popup.logicBlock_visible();
			me._image_popup.logicBlock_visible();
			me._url_hs_popup_iframe.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._popup_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._video_controller_seekbar_phone.ggConnectToMediaEl();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('changevisitednodes', function(event) {
			for(var i = 0; i < me._nodes_cloner.ggInstances.length; i++) {
				me._nodes_cloner.ggInstances[i].ggEvent_changevisitednodes(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			for(var i = 0; i < me._nodes_cloner.ggInstances.length; i++) {
				me._nodes_cloner.ggInstances[i].ggEvent_configloaded(event);
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_configloaded();
				}
			}
			me._variable_vis_sounds_splashscreen.logicBlock();
			me._variable_vis_skin.logicBlock();
			me._variable_opt_maps.logicBlock();
			me._variable_opt_floorplans.logicBlock();
			me._variable_has_fullscreen.logicBlock();
			me._controls_container.logicBlock_visible();
			if (player.transitionsDisabled) {
				me._controls_container.style.transition='none';
			} else {
				me._controls_container.style.transition='all 300ms ease-out 500ms';
			}
			me._controls_container.style.opacity='1';
			me._controls_container.style.visibility=me._controls_container.ggVisible?'inherit':'hidden';
			me._controller.logicBlock_position();
			me._controller.logicBlock_visible();
			me._controls_right.logicBlock_position();
			me._btn_toggle_audio.logicBlock_visible();
			me._btn_audio_off.logicBlock_visible();
			me._btn_audio_on.logicBlock_visible();
			me._btn_toggle_gyro.logicBlock_visible();
			me._btn_fullscreen.logicBlock_visible();
			me._btn_toggle_controls.logicBlock_position();
			me._btn_toggle_controls_icon.logicBlock_angle();
			me._controls_left_container.logicBlock_position();
			me._controls_left_container.logicBlock_size();
			if (
				(
					((player.getVariableValue('opt_info') == true))
				)
			) {
				player.setVariableValue('height_controls_left', player.getVariableValue('height_controls_left') + Number("32.00"));
			}
			me._btn_thumbs.style.transition='none';
			me._btn_thumbs.ggParameter.rx=0;me._btn_thumbs.ggParameter.ry=player.getVariableValue('height_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._btn_thumbs.style.transform=parameterToTransform(me._btn_thumbs.ggParameter);
			if (
				(
					((player.getIsTour() == true))
				)
			) {
				player.setVariableValue('height_controls_left', player.getVariableValue('height_controls_left') + Number("32.00"));
			}
			me._btn_map.style.transition='none';
			me._btn_map.ggParameter.rx=0;me._btn_map.ggParameter.ry=player.getVariableValue('height_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._btn_map.style.transform=parameterToTransform(me._btn_map.ggParameter);
			if (
				(
					((player.getVariableValue('opt_maps') == true))
				)
			) {
				player.setVariableValue('height_controls_left', player.getVariableValue('height_controls_left') + Number("32.00"));
			}
			me._btn_floorplan.style.transition='none';
			me._btn_floorplan.ggParameter.rx=0;me._btn_floorplan.ggParameter.ry=player.getVariableValue('height_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._btn_floorplan.style.transform=parameterToTransform(me._btn_floorplan.ggParameter);
			if (
				(
					((player.getVariableValue('opt_floorplans') == true))
				)
			) {
				player.setVariableValue('height_controls_left', player.getVariableValue('height_controls_left') + Number("32.00"));
			}
			me._content_buttons.style.transition='none';
			me._content_buttons.style.width = '40px';
			me._content_buttons.style.height = '' + player.getVariableValue('height_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) + 'px';
			me._content_buttons.ggUpdatePosition();
			skin.updateSize(me._content_buttons);
			player.setVariableValue('height_controls_left', player.getVariableValue('height_controls_left') + Number("50.00"));
			me._controls_left.style.transition='none';
			me._controls_left.style.width = '100%';
			me._controls_left.style.height = '' + player.getVariableValue('height_controls_left', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) + 'px';
			me._controls_left.ggUpdatePosition();
			skin.updateSize(me._controls_left);
			me._btn_toggle_controls_left.logicBlock_angle();
			me._info.logicBlock_size();
			me._info.logicBlock_visible();
			me._map_bg.logicBlock_size();
			me._map_bg.logicBlock_visible();
			me._map.logicBlock_size();
			me._map.logicBlock_visible();
			if (me._map.ggVisible) {
				me._map.ggClearMap();
				me._map.ggInitMap(false);
				me._map.ggInitMapMarkers(true);
			}
			me._floorplan.logicBlock_size();
			me._floorplan.logicBlock_visible();
			me._thumbnail_menu.logicBlock_size();
			me._thumbnail_menu.logicBlock_visible();
			me._nodes.logicBlock_visible();
			me._nodes_scroller.ggUpdatePosition();
			me._nodes_scroller.logicBlock_position();
			me._nodes_scroller.logicBlock_size();
			me._nodes_cloner.logicBlock_size();
			me._nodes_category_bg.logicBlock_visible();
			me._categories_scroller.ggUpdatePosition();
			me._categories_scroller.logicBlock_visible();
			if (
				(
					((skin._categories_cloner.ggNodeCount > 1))
				)
			) {
				player.setVariableValue('has_categories', true);
			}
			if (
				(
					((skin._categories_cloner.ggNodeCount > 1))
				)
			) {
				player.setVariableValue('vis_thumbs_categories', true);
			}
			if (
				(
					((skin._categories_cloner.ggNodeCount <= 1))
				)
			) {
				player.setVariableValue('vis_thumbs_nodes', true);
			}
			me._btn_thumbs.logicBlock_visible();
			me._btn_thumbs_bg.logicBlock_visible();
			me._btn_map.logicBlock_visible();
			me._btn_map_bg.logicBlock_visible();
			me._btn_floorplan.logicBlock_visible();
			me._btn_floorplan_bg.logicBlock_visible();
			me._btn_info.logicBlock_visible();
			me._btn_info_enabled.logicBlock_visible();
			me._btn_info_bg.logicBlock_visible();
			me._btn_info_disabled.logicBlock_visible();
			me._toggle_controls_left.logicBlock_alpha();
			me._toggle_controls_left_icon.logicBlock_angle();
			me._phone_touch_bg.logicBlock_visible();
			me._info_popup.logicBlock_visible();
			me._media_popup.logicBlock_visible();
			me._video_youtube_popup.logicBlock_visible();
			me._video_vimeo_popup.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._video_file_popup.logicBlock_visible();
			me._video_file_hs_popup_play.logicBlock_visible();
			me._video_url_popup.logicBlock_visible();
			me._video_url_hs_popup_play.logicBlock_visible();
			me._pdf_popup.logicBlock_visible();
			me._image_popup.logicBlock_visible();
			me._url_hs_popup_iframe.logicBlock_visible();
			me._sounds_splashscreen.logicBlock_visible();
			me._popup_phone.logicBlock_visible();
			me._info_popup_phone.logicBlock_visible();
			me._image_popup_phone.logicBlock_visible();
			me._pdf_popup_phone.logicBlock_visible();
			me._video_controller_phone.logicBlock_visible();
			me._youtube_popup_phone.logicBlock_visible();
			me._vimeo_popup_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._btn_fullscreen_exit.logicBlock_visible();
			me._btn_fullscreen_enter.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._btn_fullscreen_exit.logicBlock_visible();
			me._btn_fullscreen_enter.logicBlock_visible();
		});
		player.addListener('gyroavailable', function(event) {
			me._btn_toggle_gyro.logicBlock_visible();
		});
		player.addListener('gyrochanged', function(event) {
			me._btn_gyro_off.logicBlock_visible();
			me._btn_gyro_on.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_hastouch();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_hastouch();
				}
			}
		});
		player.addListener('playerstatechanged', function(event) {
			player.setVariableValue('height_controls_right', Number("2.00"));
			me._btn_fullscreen.style.transition='none';
			me._btn_fullscreen.ggParameter.rx=0;me._btn_fullscreen.ggParameter.ry=player.getVariableValue('height_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._btn_fullscreen.style.transform=parameterToTransform(me._btn_fullscreen.ggParameter);
			if (
				(
					((player.getVariableValue('has_fullscreen') == true)) && 
					((player.getVariableValue('opt_fullscreen') == true))
				)
			) {
				player.setVariableValue('height_controls_right', player.getVariableValue('height_controls_right') + Number("32.00"));
			}
			me._btn_vr.style.transition='none';
			me._btn_vr.ggParameter.rx=0;me._btn_vr.ggParameter.ry=player.getVariableValue('height_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._btn_vr.style.transform=parameterToTransform(me._btn_vr.ggParameter);
			if (
				(
					((player.hasVR() == true))
				)
			) {
				player.setVariableValue('height_controls_right', player.getVariableValue('height_controls_right') + Number("32.00"));
			}
			me._btn_toggle_gyro.style.transition='none';
			me._btn_toggle_gyro.ggParameter.rx=0;me._btn_toggle_gyro.ggParameter.ry=player.getVariableValue('height_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._btn_toggle_gyro.style.transform=parameterToTransform(me._btn_toggle_gyro.ggParameter);
			if (
				(
					((player.getGyroAvailable() == true)) && 
					((player.getVariableValue('opt_gyro') == true))
				)
			) {
				player.setVariableValue('height_controls_right', player.getVariableValue('height_controls_right') + Number("32.00"));
			}
			me._btn_toggle_audio.style.transition='none';
			me._btn_toggle_audio.ggParameter.rx=0;me._btn_toggle_audio.ggParameter.ry=player.getVariableValue('height_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : ''));
			me._btn_toggle_audio.style.transform=parameterToTransform(me._btn_toggle_audio.ggParameter);
			if (
				(
					((player.getHasSounds() == true))
				)
			) {
				player.setVariableValue('height_controls_right', player.getVariableValue('height_controls_right') + Number("32.00"));
			}
			player.setVariableValue('height_controls_right', player.getVariableValue('height_controls_right') + Number("50.00"));
			me._controls_right.style.transition='none';
			me._controls_right.style.width = '36px';
			me._controls_right.style.height = '' + player.getVariableValue('height_controls_right', me.hotspot ? me.hotspot.id : (player.hotspot ? player.hotspot.id : '')) + 'px';
			me._controls_right.ggUpdatePosition();
			skin.updateSize(me._controls_right);
		});
		player.addListener('positionchanged', function(event) {
			me._map.ggRadar.update();
		});
		player.addListener('sizechanged', function(event) {
			me._variable_resp_desktop.logicBlock();
			me._variable_resp_tablet.logicBlock();
			me._variable_resp_phone.logicBlock();
		});
		player.addListener('soundspermittedchanged', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_controls_left_open', function(event) {
			me._controls_right.logicBlock_position();
			me._btn_toggle_controls.logicBlock_position();
			me._controls_left_container.logicBlock_position();
			me._btn_toggle_controls_left.logicBlock_angle();
			me._toggle_controls_left.logicBlock_alpha();
			me._toggle_controls_left_icon.logicBlock_angle();
			me._phone_touch_bg.logicBlock_visible();
		});
		player.addListener('varchanged_has_categories', function(event) {
			me._nodes.logicBlock_visible();
			me._nodes_scroller.logicBlock_position();
			me._nodes_scroller.logicBlock_size();
			me._nodes_category_bg.logicBlock_visible();
		});
		player.addListener('varchanged_has_fullscreen', function(event) {
			me._btn_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_opt_controller', function(event) {
			me._controller.logicBlock_visible();
		});
		player.addListener('varchanged_opt_floorplans', function(event) {
			me._btn_floorplan.logicBlock_visible();
		});
		player.addListener('varchanged_opt_fullscreen', function(event) {
			me._btn_fullscreen.logicBlock_visible();
		});
		player.addListener('varchanged_opt_gyro', function(event) {
			me._btn_toggle_gyro.logicBlock_visible();
		});
		player.addListener('varchanged_opt_info', function(event) {
			me._btn_info.logicBlock_visible();
		});
		player.addListener('varchanged_opt_maps', function(event) {
			me._btn_map.logicBlock_visible();
		});
		player.addListener('varchanged_resp_phone', function(event) {
			for(var i = 0; i < me._nodes_cloner.ggInstances.length; i++) {
				me._nodes_cloner.ggInstances[i].ggEvent_varchanged_resp_phone(event);
			}
			me._controller.logicBlock_visible();
			me._controls_right.logicBlock_position();
			me._btn_toggle_controls.logicBlock_position();
			me._controls_left_container.logicBlock_position();
			me._controls_left_container.logicBlock_size();
			me._info.logicBlock_size();
			me._map_bg.logicBlock_size();
			me._map.logicBlock_size();
			me._floorplan.logicBlock_size();
			me._thumbnail_menu.logicBlock_size();
			me._nodes_cloner.logicBlock_size();
			me._phone_touch_bg.logicBlock_visible();
		});
		player.addListener('varchanged_sounds_splashscreen_accepted', function(event) {
			me._variable_vis_sounds_splashscreen.logicBlock();
		});
		player.addListener('varchanged_toggle_audio', function(event) {
			me._btn_audio_off.logicBlock_visible();
			me._btn_audio_on.logicBlock_visible();
		});
		player.addListener('varchanged_vis_controls', function(event) {
			me._controller.logicBlock_position();
			me._controls_right.logicBlock_position();
			me._btn_toggle_controls_icon.logicBlock_angle();
			me._controls_left_container.logicBlock_position();
			me._toggle_controls_left.logicBlock_alpha();
		});
		player.addListener('varchanged_vis_floorplan', function(event) {
			me._map_bg.logicBlock_visible();
			me._floorplan.logicBlock_visible();
			me._btn_floorplan_bg.logicBlock_visible();
		});
		player.addListener('varchanged_vis_image_hs_popup', function(event) {
			me._media_popup.logicBlock_visible();
			me._image_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_info', function(event) {
			me._info.logicBlock_visible();
			me._btn_info_bg.logicBlock_visible();
		});
		player.addListener('varchanged_vis_info_popup', function(event) {
			me._info_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_map', function(event) {
			me._map_bg.logicBlock_visible();
			me._map.logicBlock_visible();
			me._btn_map_bg.logicBlock_visible();
		});
		player.addListener('varchanged_vis_pdf_hs_popup', function(event) {
			me._media_popup.logicBlock_visible();
			me._pdf_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_image', function(event) {
			me._image_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_info', function(event) {
			me._info_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_pdf', function(event) {
			me._pdf_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_popup', function(event) {
			me._controls_container.logicBlock_visible();
			me._popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_file', function(event) {
			me._video_controller_phone.logicBlock_visible();
			me._video_file_popup_phone.logicBlock_visible();
			me._video_file_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_video_url', function(event) {
			me._video_controller_phone.logicBlock_visible();
			me._video_url_popup_phone.logicBlock_visible();
			me._video_url_popup_phone_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_vimeo', function(event) {
			me._vimeo_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_phone_youtube', function(event) {
			me._youtube_popup_phone.logicBlock_visible();
		});
		player.addListener('varchanged_vis_skin', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_video_youtube')) {
				for(var i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
					hotspotTemplates['ht_video_youtube'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_vimeo')) {
				for(var i = 0; i < hotspotTemplates['ht_video_vimeo'].length; i++) {
					hotspotTemplates['ht_video_vimeo'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_url')) {
				for(var i = 0; i < hotspotTemplates['ht_video_url'].length; i++) {
					hotspotTemplates['ht_video_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_video_file')) {
				for(var i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
					hotspotTemplates['ht_video_file'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_pdf')) {
				for(var i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
					hotspotTemplates['ht_pdf'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_info')) {
				for(var i = 0; i < hotspotTemplates['ht_info'].length; i++) {
					hotspotTemplates['ht_info'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_image')) {
				for(var i = 0; i < hotspotTemplates['ht_image'].length; i++) {
					hotspotTemplates['ht_image'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_url')) {
				for(var i = 0; i < hotspotTemplates['ht_url'].length; i++) {
					hotspotTemplates['ht_url'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('ht_node_1')) {
				for(var i = 0; i < hotspotTemplates['ht_node_1'].length; i++) {
					hotspotTemplates['ht_node_1'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._controls_container.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
			me._sounds_splashscreen.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbs', function(event) {
			me._thumbnail_menu.logicBlock_visible();
			me._btn_thumbs_bg.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbs_categories', function(event) {
			me._categories_scroller.logicBlock_visible();
		});
		player.addListener('varchanged_vis_thumbs_nodes', function(event) {
			me._nodes.logicBlock_visible();
		});
		player.addListener('varchanged_vis_url_hs_popup', function(event) {
			me._media_popup.logicBlock_visible();
			me._url_hs_popup_iframe.logicBlock_visible();
			if (
				(
					((player.getVariableValue('vis_url_hs_popup') == false))
				)
			) {
					me._url_hs_popup_iframe.ggUpdateText=function() {
						var params = [];
						var hs = player._("", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				me._url_hs_popup_iframe.ggUpdateText();
				me._url_hs_popup_iframe.ggTextDiv.scrollTop = 0;
			}
		});
		player.addListener('varchanged_vis_video_file_hs_popup', function(event) {
			me._media_popup.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._video_file_popup.logicBlock_visible();
			me._video_file_hs_popup_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_url_hs_popup', function(event) {
			me._media_popup.logicBlock_visible();
			me._video_controller.logicBlock_visible();
			me._video_url_popup.logicBlock_visible();
			me._video_url_hs_popup_play.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_vimeo_hs_popup', function(event) {
			me._media_popup.logicBlock_visible();
			me._video_vimeo_popup.logicBlock_visible();
		});
		player.addListener('varchanged_vis_video_youtube_hs_popup', function(event) {
			me._media_popup.logicBlock_visible();
			me._video_youtube_popup.logicBlock_visible();
		});
		player.addListener('viewerinit', function(event) {
			me._nodes_cloner.ggUpdate();
			me._categories_cloner.ggUpdate();
		});
		player.addListener('vrchanged', function(event) {
			me._btn_vr.logicBlock_visible();
		});
	};
	function SkinCloner_nodes_cloner_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._node_container=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_container;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggPermeable=false;
		el.ggId="node_container";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 125px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_container.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_container.onclick=function (e) {
			if (me._node_container.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('controls_left_open', false);
			}
		}
		me._node_container.onmouseenter=function (e) {
			me.elementMouseOver['node_container']=true;
			me._node_bg_hover.logicBlock_visible();
		}
		me._node_container.onmouseleave=function (e) {
			me.elementMouseOver['node_container']=false;
			me._node_bg_hover.logicBlock_visible();
		}
		me._node_container.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_bg_hover=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_bg_hover;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="node_bg_hover";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 112px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_bg_hover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_bg_hover.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_bg_hover.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_bg_hover.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_bg_hover.style.transition='width 0s, height 0s';
				if (me._node_bg_hover.ggCurrentLogicStateSize == 0) {
					me._node_bg_hover.style.width='100%';
					me._node_bg_hover.style.height='75px';
					skin.updateSize(me._node_bg_hover);
				}
				else {
					me._node_bg_hover.style.width='100%';
					me._node_bg_hover.style.height='112px';
					skin.updateSize(me._node_bg_hover);
				}
			}
		}
		me._node_bg_hover.logicBlock_size();
		me._node_bg_hover.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['node_container'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_bg_hover.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_bg_hover.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_bg_hover.style.transition='width 0s, height 0s';
				if (me._node_bg_hover.ggCurrentLogicStateVisible == 0) {
					me._node_bg_hover.style.visibility=(Number(me._node_bg_hover.style.opacity)>0||!me._node_bg_hover.style.opacity)?'inherit':'hidden';
					me._node_bg_hover.ggVisible=true;
				}
				else {
					me._node_bg_hover.style.visibility="hidden";
					me._node_bg_hover.ggVisible=false;
				}
			}
		}
		me._node_bg_hover.logicBlock_visible();
		me._node_bg_hover.ggUpdatePosition=function (useTransition) {
		}
		me._node_container.appendChild(me._node_bg_hover);
		el=me._node_title_active=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_title_active;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_title_active__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 112px;';
		hs+='left : 172px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : calc(100% - 172px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: bold;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 15px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._node_title_active.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title_active.ggUpdateText();
		el.appendChild(els);
		me._node_title_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title_active.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._node_title_active.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._node_title_active.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._node_title_active.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._node_title_active.ggCurrentLogicStatePosition == 0) {
					me._node_title_active.style.left='115px';
					me._node_title_active.style.top='0px';
				}
				else {
					me._node_title_active.style.left='172px';
					me._node_title_active.style.top='0px';
				}
			}
		}
		me._node_title_active.logicBlock_position();
		me._node_title_active.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_title_active.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_title_active.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_title_active.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._node_title_active.ggCurrentLogicStateSize == 0) {
					me._node_title_active.style.width='calc(100% - 115px)';
					me._node_title_active.style.height='75px';
					skin.updateSize(me._node_title_active);
				}
				else {
					me._node_title_active.style.width='calc(100% - 172px)';
					me._node_title_active.style.height='112px';
					skin.updateSize(me._node_title_active);
				}
			}
		}
		me._node_title_active.logicBlock_size();
		me._node_title_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._node_title_active.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title_active.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._node_title_active.ggCurrentLogicStateVisible == 0) {
					me._node_title_active.style.visibility=(Number(me._node_title_active.style.opacity)>0||!me._node_title_active.style.opacity)?'inherit':'hidden';
					me._node_title_active.ggVisible=true;
				}
				else {
					me._node_title_active.style.visibility="hidden";
					me._node_title_active.ggVisible=false;
				}
			}
		}
		me._node_title_active.logicBlock_visible();
		me._node_title_active.ggUpdatePosition=function (useTransition) {
		}
		me._node_container.appendChild(me._node_title_active);
		el=me._node_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 112px;';
		hs+='left : 172px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : calc(100% - 172px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px 15px 0px 25px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._node_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._node_title.ggUpdateText();
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._node_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._node_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._node_title.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._node_title.ggCurrentLogicStatePosition == 0) {
					me._node_title.style.left='115px';
					me._node_title.style.top='0px';
				}
				else {
					me._node_title.style.left='172px';
					me._node_title.style.top='0px';
				}
			}
		}
		me._node_title.logicBlock_position();
		me._node_title.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_title.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_title.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_title.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._node_title.ggCurrentLogicStateSize == 0) {
					me._node_title.style.width='calc(100% - 115px)';
					me._node_title.style.height='75px';
					skin.updateSize(me._node_title);
				}
				else {
					me._node_title.style.width='calc(100% - 172px)';
					me._node_title.style.height='112px';
					skin.updateSize(me._node_title);
				}
			}
		}
		me._node_title.logicBlock_size();
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._node_title.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style.transition='left 0s, top 0s, width 0s, height 0s';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.logicBlock_visible();
		me._node_title.ggUpdatePosition=function (useTransition) {
		}
		me._node_container.appendChild(me._node_title);
		el=me._node_thumbnail=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_thumbnail;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_thumbnail__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.loading = 'lazy';
		if (nodeId) els.setAttribute('src',basePath + "images/node_thumbnail_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 5px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_thumbnail";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 112px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 172px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 0%';
		me._node_thumbnail.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_thumbnail.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getVariableValue('resp_phone') == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._node_thumbnail.ggCurrentLogicStateSize != newLogicStateSize) {
				me._node_thumbnail.ggCurrentLogicStateSize = newLogicStateSize;
				me._node_thumbnail.style.transition='width 0s, height 0s';
				if (me._node_thumbnail.ggCurrentLogicStateSize == 0) {
					me._node_thumbnail.style.width='115px';
					me._node_thumbnail.style.height='75px';
					skin.updateSize(me._node_thumbnail);
				}
				else {
					me._node_thumbnail.style.width='172px';
					me._node_thumbnail.style.height='112px';
					skin.updateSize(me._node_thumbnail);
				}
			}
		}
		me._node_thumbnail.logicBlock_size();
		me._node_thumbnail.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_visited=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._node_visited;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNEMkQyRDI7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgcj0iMzEiIGN4PSIzMiIgY2xhc3M9InN0MCIgY3k9IjMyIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBjbGFzcz0ic3QxIiBoZWlnaHQ9IjY0Ii8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
			'PgogIDxwb2x5bGluZSBwb2ludHM9IjE4LjYsMjYuNyAzMC45LDQ4IDQ5LjQsMTYgICIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._node_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_visited";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -7px;';
		hs+='height : 18px;';
		hs+='position : absolute;';
		hs+='right : -7px;';
		hs+='visibility : hidden;';
		hs+='width : 18px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true)) || 
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_visited.style.transition='';
				if (me._node_visited.ggCurrentLogicStateVisible == 0) {
					me._node_visited.style.visibility=(Number(me._node_visited.style.opacity)>0||!me._node_visited.style.opacity)?'inherit':'hidden';
					me._node_visited.ggVisible=true;
				}
				else {
					me._node_visited.style.visibility="hidden";
					me._node_visited.ggVisible=false;
				}
			}
		}
		me._node_visited.logicBlock_visible();
		me._node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._node_thumbnail.appendChild(me._node_visited);
		me._node_container.appendChild(me._node_thumbnail);
		me.__div.appendChild(me._node_container);
		me.elementMouseOver['node_container']=false;
		me._node_bg_hover.logicBlock_size();
		me._node_bg_hover.logicBlock_visible();
		me._node_title_active.logicBlock_position();
		me._node_title_active.logicBlock_size();
		me._node_title_active.logicBlock_visible();
		me._node_title.logicBlock_position();
		me._node_title.logicBlock_size();
		me._node_title.logicBlock_visible();
		me._node_thumbnail.logicBlock_size();
		me._node_visited.logicBlock_visible();
			me.ggEvent_changenode=function(event) {
				me._node_bg_hover.logicBlock_size();
				me._node_title_active.logicBlock_position();
				me._node_title_active.logicBlock_size();
				me._node_title_active.logicBlock_visible();
				me._node_title.logicBlock_position();
				me._node_title.logicBlock_size();
				me._node_title.logicBlock_visible();
				me._node_thumbnail.logicBlock_size();
				me._node_visited.logicBlock_visible();
				me._node_visited.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function(event) {
				me._node_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function(event) {
				me._node_bg_hover.logicBlock_size();
				me._node_title_active.logicBlock_position();
				me._node_title_active.logicBlock_size();
				me._node_title.logicBlock_position();
				me._node_title.logicBlock_size();
				me._node_thumbnail.logicBlock_size();
			};
			me.ggEvent_varchanged_resp_phone=function(event) {
				me._node_bg_hover.logicBlock_size();
				me._node_title_active.logicBlock_position();
				me._node_title_active.logicBlock_size();
				me._node_title.logicBlock_position();
				me._node_title.logicBlock_size();
				me._node_thumbnail.logicBlock_size();
			};
	};
	function SkinCloner_categories_cloner_Class(item, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggTag = item['tag'];
		me.ggTitle = item['title'];
		me.ggDescription = item['description'];
		me.ggNodeCount = item['nodecount'];
		me.ggNodeId=item['firstnode'];
		let nodeId=item['firstnode'];
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				var tags = player.userdata.tags;
				if (tags.indexOf(me.ggTag) == -1) return false;
				for(var i=0;i<me.ggParent.ggCurrentFilter.length;i++) {
					if (tags.indexOf(me.ggParent.ggCurrentFilter[i])==-1) return false;
				}
				return true;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me._category_bg=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_bg;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggId="category_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 0px solid #e6e6e6;';
		hs+='border-radius : 12px;';
		hs+='cursor : default;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_bg.onclick=function (e) {
			if (me._category_bg.isDragging()) return;
			skin._nodes_cloner.ggText=me.ggTag;
			if (skin._nodes_cloner.ggText=='') {
				skin._nodes_cloner.ggUpdate([]);
			} else {
				skin._nodes_cloner.ggUpdate(skin._nodes_cloner.ggText.split(','));
			}
			skin.updateSize(skin.divSkin);
				skin._nodes_category_title.ggUpdateText=function() {
					var params = [];
					params.push(player._(String(me.ggTitle)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._nodes_category_title.ggUpdateText();
			skin._nodes_category_title.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_thumbs_nodes', true);
			player.setVariableValue('vis_thumbs_categories', false);
		}
		me._category_bg.onmouseenter=function (e) {
			me.elementMouseOver['category_bg']=true;
			me._category_fwd_hover.logicBlock_visible();
		}
		me._category_bg.onmouseleave=function (e) {
			me.elementMouseOver['category_bg']=false;
			me._category_fwd_hover.logicBlock_visible();
		}
		me._category_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._category_fwd_hover=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_fwd_hover;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_fwd_hover__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcG9pbnRzPSIzNC4wOCAxOC4wNiA0OCAzMi4wMSA0OCAzMi4wMSAzNC'+
			'4wOCA0NS45NCIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjMyIiB4Mj0iNDYuMzYiIHgxPSIxNiIgeTE9IjMyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._category_fwd_hover__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="category_fwd_hover";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._category_fwd_hover.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_fwd_hover.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['category_bg'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._category_fwd_hover.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._category_fwd_hover.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._category_fwd_hover.style.transition='';
				if (me._category_fwd_hover.ggCurrentLogicStateVisible == 0) {
					me._category_fwd_hover.style.visibility=(Number(me._category_fwd_hover.style.opacity)>0||!me._category_fwd_hover.style.opacity)?'inherit':'hidden';
					me._category_fwd_hover.ggVisible=true;
				}
				else {
					me._category_fwd_hover.style.visibility="hidden";
					me._category_fwd_hover.ggVisible=false;
				}
			}
		}
		me._category_fwd_hover.logicBlock_visible();
		me._category_fwd_hover.ggUpdatePosition=function (useTransition) {
		}
		me._category_bg.appendChild(me._category_fwd_hover);
		el=me._category_title=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._category_title;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._category_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="category_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 16px;';
		hs+='font-weight: 400;';
		hs+='text-align: left;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px 12px 0px 12px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._category_title.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggTitle)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._category_title.ggUpdateText();
		player.addListener('clonerchanged', function() {
			me._category_title.ggUpdateText();
		});
		el.appendChild(els);
		me._category_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._category_title.ggUpdatePosition=function (useTransition) {
		}
		me._category_bg.appendChild(me._category_title);
		me.__div.appendChild(me._category_bg);
		me.elementMouseOver['category_bg']=false;
		me._category_fwd_hover.logicBlock_visible();
	};
	function SkinHotspotClass_ht_node_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_1=document.createElement('div');
		el.ggId="ht_node_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 382px;';
		hs+='position : absolute;';
		hs+='top : 315px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_1.style.transition='';
				if (me._ht_node_1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_1.style.visibility=(Number(me._ht_node_1.style.opacity)>0||!me._ht_node_1.style.opacity)?'inherit':'hidden';
					me._ht_node_1.ggVisible=true;
				}
				else {
					me._ht_node_1.style.visibility="hidden";
					me._ht_node_1.ggVisible=false;
				}
			}
		}
		me._ht_node_1.logicBlock_visible();
		me._ht_node_1.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_1']=true;
			me._ht_node_preview_bg.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_1.onmouseleave=function (e) {
			me.elementMouseOver['ht_node_1']=false;
			me._ht_node_preview_bg.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_bg=document.createElement('div');
		el.ggId="ht_node_preview_bg";
		el.ggDx=62;
		el.ggDy=22;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #699ae4;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 118px;';
		hs+='left : calc(50% - ((184px + 0px) / 2) + 62px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((118px + 0px) / 2) + 22px);';
		hs+='visibility : hidden;';
		hs+='width : 184px;';
		hs+='pointer-events:none;';
		hs+='overflow: hidden';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_preview_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_preview_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_1'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_preview_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_preview_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_preview_bg.style.transition='';
				if (me._ht_node_preview_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_node_preview_bg.style.visibility=(Number(me._ht_node_preview_bg.style.opacity)>0||!me._ht_node_preview_bg.style.opacity)?'inherit':'hidden';
					me._ht_node_preview_bg.ggVisible=true;
				}
				else {
					me._ht_node_preview_bg.style.visibility="hidden";
					me._ht_node_preview_bg.ggVisible=false;
				}
			}
		}
		me._ht_node_preview_bg.logicBlock_visible();
		me._ht_node_preview_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_img=document.createElement('div');
		els=me._ht_node_preview_img__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_node_preview_img_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 5px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_preview_img";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 110px;';
		hs+='left : calc(50% - ((176px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((110px + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 176px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_preview_img.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_preview_img.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_preview_bg.appendChild(me._ht_node_preview_img);
		el=me._ht_node_preview_title=document.createElement('div');
		els=me._ht_node_preview_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_preview_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 22.0339%;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 95.6522%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 4px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_preview_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_preview_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_preview_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_preview_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_preview_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_preview_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_preview_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_preview_title.style.transition='';
				if (me._ht_node_preview_title.ggCurrentLogicStateVisible == 0) {
					me._ht_node_preview_title.style.visibility="hidden";
					me._ht_node_preview_title.ggVisible=false;
				}
				else {
					me._ht_node_preview_title.style.visibility=(Number(me._ht_node_preview_title.style.opacity)>0||!me._ht_node_preview_title.style.opacity)?'inherit':'hidden';
					me._ht_node_preview_title.ggVisible=true;
				}
			}
		}
		me._ht_node_preview_title.logicBlock_visible();
		me._ht_node_preview_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_preview_bg.appendChild(me._ht_node_preview_title);
		me._ht_node_1.appendChild(me._ht_node_preview_bg);
		el=me._ht_node_bg=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=60;
		el.ggDy=88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #699ae4;';
		hs+='border : 0px solid #141414;';
		hs+='border-radius : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 85px;';
		hs+='left : calc(50% - ((83px + 0px) / 2) + 60px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((85px + 0px) / 2) + 88px);';
		hs+='visibility : inherit;';
		hs+='width : 83px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_bg.style.transition='';
				if (me._ht_node_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_node_bg.style.visibility="hidden";
					me._ht_node_bg.ggVisible=false;
				}
				else {
					me._ht_node_bg.style.visibility=(Number(me._ht_node_bg.style.opacity)>0||!me._ht_node_bg.style.opacity)?'inherit':'hidden';
					me._ht_node_bg.ggVisible=true;
				}
			}
		}
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited=document.createElement('div');
		els=me._ht_node_visited__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO30mI3hkOwoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSByPSIzMSIgY3g9IjMyIiBjbGFzcz0ic3QwIiBjeT0iMzIiLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGNsYXNzPSJzdDEiIGhlaWdodD0iNjQiLz4K'+
			'IDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguNiwyNi43IDMwLjksNDggNDkuNCwxNiAmI3g5OyIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_visited";
		el.ggDx=34;
		el.ggDy=39;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 34px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 39px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited.ggElementNodeId()) == true)) || 
				((me._ht_node_visited.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited.style.transition='';
				if (me._ht_node_visited.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited.style.visibility=(Number(me._ht_node_visited.style.opacity)>0||!me._ht_node_visited.style.opacity)?'inherit':'hidden';
					me._ht_node_visited.ggVisible=true;
				}
				else {
					me._ht_node_visited.style.visibility="hidden";
					me._ht_node_visited.ggVisible=false;
				}
			}
		}
		me._ht_node_visited.logicBlock_visible();
		me._ht_node_visited.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_visited);
		el=me._ht_node_icon=document.createElement('div');
		els=me._ht_node_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjI0Ij4KIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGQ9Ik0xMC4wOSAxNS41OUwxMS41IDE3bDUtNS01LTUtMS40MSAxLjQxTDEyLjY3IDExSDN2Mmg5LjY3bC0yLjU4IDIuNTl6TTE5IDNINWMtMS4xMSAwLTIgLjktMiAydjRoMlY1aDE0djE0SDV2LTRIM3Y0YzAgMS4xLjg5IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6IiBmaWxsLW9wYWNpdHk9IjEiLz4KPC9zdmc+Cg==';
		me._ht_node_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_icon";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 83px;';
		hs+='left : -3px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 89px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._ht_node_icon);
		me._ht_node_1.appendChild(me._ht_node_bg);
		el=me._ht_node_custom_image=document.createElement('div');
		els=me._ht_node_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image.ggAltText));
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image.ggText_untranslated = img;
			me._ht_node_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image.ggSubElement.style.width = '0px';
			me._ht_node_custom_image.ggSubElement.style.height = '0px';
			me._ht_node_custom_image.ggSubElement.src='';
			me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image.ggText != player._(me._ht_node_custom_image.ggText_untranslated)) {
				me._ht_node_custom_image.ggText = player._(me._ht_node_custom_image.ggText_untranslated);
				me._ht_node_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image.style.transition='';
				if (me._ht_node_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image.style.visibility=(Number(me._ht_node_custom_image.style.opacity)>0||!me._ht_node_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image.ggSubElement.src=me._ht_node_custom_image.ggText;
					me._ht_node_custom_image.ggVisible=true;
				}
				else {
					me._ht_node_custom_image.style.visibility="hidden";
					me._ht_node_custom_image.ggSubElement.src='';
					me._ht_node_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image.logicBlock_visible();
		me._ht_node_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image.clientWidth;
			var parentHeight = me._ht_node_custom_image.clientHeight;
			var img = me._ht_node_custom_image__img;
			var aspectRatioDiv = me._ht_node_custom_image.clientWidth / me._ht_node_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentWidth < me._ht_node_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image.scrollLeft=currentWidth / 2 - me._ht_node_custom_image.clientWidth / 2;
			}
			if (!me._ht_node_custom_image.ggScrollbars || currentHeight < me._ht_node_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image.scrollTop=currentHeight / 2 - me._ht_node_custom_image.clientHeight / 2;
			}
		}
		me._ht_node_1.appendChild(me._ht_node_custom_image);
		me._ht_node_1.logicBlock_visible();
		me.elementMouseOver['ht_node_1']=false;
		me._ht_node_preview_bg.logicBlock_visible();
		me._ht_node_preview_title.logicBlock_visible();
		me._ht_node_bg.logicBlock_visible();
		me._ht_node_visited.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_preview_bg.logicBlock_visible();
				me._ht_node_preview_title.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node_1.logicBlock_visible();
				me._ht_node_preview_bg.logicBlock_visible();
				me._ht_node_preview_title.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_visited.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_visited.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node_1.logicBlock_visible();
				me._ht_node_preview_bg.logicBlock_visible();
				me._ht_node_preview_title.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node_1.logicBlock_visible();
			};
			me.__div = me._ht_node_1;
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=-72;
		el.ggDy=-258;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) - 72px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) - 258px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('controls_left_open', false);
			}
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #e6e6e6;';
		hs+='border : 1px solid #141414;';
		hs+='border-radius : 20px;';
		hs+='cursor : default;';
		hs+='height : 16px;';
		hs+='left : calc(50% - ((16px + 2px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((16px + 2px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 16px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_active.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_active.style.transition='';
				if (me._map_pin_active.ggCurrentLogicStateVisible == 0) {
					me._map_pin_active.style.visibility=(Number(me._map_pin_active.style.opacity)>0||!me._map_pin_active.style.opacity)?'inherit':'hidden';
					me._map_pin_active.ggVisible=true;
				}
				else {
					me._map_pin_active.style.visibility="hidden";
					me._map_pin_active.ggVisible=false;
				}
			}
		}
		me._map_pin_active.logicBlock_visible();
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_inactive=document.createElement('div');
		els=me._map_pin_inactive__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiNFNkU2RTY7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MntmaWxsOiNGRkZGRkY7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzIsMy4yYzEwLjYsMCwxOS4yLDguNiwxOS4y'+
			'LDE5LjJsMCwwYzAsMTIuNC0xMCwzMC42LTE5LjIsMzguNGwwLDBjLTkuMy03LjgtMTkuMi0yNi0xOS4yLTM4LjRsMCwwICAgQzEyLjgsMTEuOCwyMS40LDMuMiwzMiwzLjJMMzIsMy4yeiIgY2xhc3M9InN0MSIvPgogIDxjaXJjbGUgcj0iNC4zIiBjeD0iMzIiIGNsYXNzPSJzdDIiIGN5PSIyMi40Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._map_pin_inactive__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_inactive";
		el.ggDx=0;
		el.ggDy=-15;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((31px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) - 15px);';
		hs+='visibility : inherit;';
		hs+='width : 31px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me._map_pin_inactive.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_inactive.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_inactive'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_inactive.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_inactive.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_inactive.style.transition='transform 200ms ease 0ms';
				if (me._map_pin_inactive.ggCurrentLogicStateScaling == 0) {
					me._map_pin_inactive.ggParameter.sx = 1.2;
					me._map_pin_inactive.ggParameter.sy = 1.2;
					me._map_pin_inactive.style.transform=parameterToTransform(me._map_pin_inactive.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_inactive);}, 250);
				}
				else {
					me._map_pin_inactive.ggParameter.sx = 1;
					me._map_pin_inactive.ggParameter.sy = 1;
					me._map_pin_inactive.style.transform=parameterToTransform(me._map_pin_inactive.ggParameter);
					setTimeout(function() {skin.updateSize(me._map_pin_inactive);}, 250);
				}
			}
		}
		me._map_pin_inactive.logicBlock_scaling();
		me._map_pin_inactive.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._map_pin_inactive.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_inactive.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_inactive.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_inactive.style.transition='transform 200ms ease 0ms';
				if (me._map_pin_inactive.ggCurrentLogicStateVisible == 0) {
					me._map_pin_inactive.style.visibility="hidden";
					me._map_pin_inactive.ggVisible=false;
				}
				else {
					me._map_pin_inactive.style.visibility=(Number(me._map_pin_inactive.style.opacity)>0||!me._map_pin_inactive.style.opacity)?'inherit':'hidden';
					me._map_pin_inactive.ggVisible=true;
				}
			}
		}
		me._map_pin_inactive.logicBlock_visible();
		me._map_pin_inactive.onmouseenter=function (e) {
			me.elementMouseOver['map_pin_inactive']=true;
			me._map_pin_inactive.logicBlock_scaling();
		}
		me._map_pin_inactive.onmouseleave=function (e) {
			me.elementMouseOver['map_pin_inactive']=false;
			me._map_pin_inactive.logicBlock_scaling();
		}
		me._map_pin_inactive.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_inactive);
		me._map_pin_active.logicBlock_visible();
		me._map_pin_inactive.logicBlock_scaling();
		me._map_pin_inactive.logicBlock_visible();
		me.elementMouseOver['map_pin_inactive']=false;
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_visible();
				me._map_pin_inactive.logicBlock_visible();
			};
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 180px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style.transition='';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
				else {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
			}
		}
		me._ht_url.logicBlock_visible();
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url_popup') == false)) || 
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._media_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._media_popup_title.ggUpdateText();
				skin._media_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._url_hs_popup_iframe.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.url)));
						var hs = player._("<iframe src=\"%1\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\" ><\/iframe>", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._url_hs_popup_iframe.ggUpdateText();
				skin._url_hs_popup_iframe.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_url_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('opt_url_popup') == true)) && 
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('controls_left_open', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._ht_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseleave=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._ht_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_title=document.createElement('div');
		els=me._ht_url_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_url_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(20,20,20,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_url_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_url_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_url_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_url_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_url_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_url_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_url_title.style.transition='left 0s, top 0s';
				if (me._ht_url_title.ggCurrentLogicStatePosition == 0) {
					me._ht_url_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_url_title.style.top='-45px';
				}
				else {
					me._ht_url_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_url_title.style.top='6px';
				}
			}
		}
		me._ht_url_title.logicBlock_position();
		me._ht_url_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_title.style.transition='left 0s, top 0s';
				if (me._ht_url_title.ggCurrentLogicStateVisible == 0) {
					me._ht_url_title.style.visibility=(Number(me._ht_url_title.style.opacity)>0||!me._ht_url_title.style.opacity)?'inherit':'hidden';
					me._ht_url_title.ggVisible=true;
				}
				else {
					me._ht_url_title.style.visibility="hidden";
					me._ht_url_title.ggVisible=false;
				}
			}
		}
		me._ht_url_title.logicBlock_visible();
		me._ht_url_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._ht_url_title);
		el=me._ht_url_bg=document.createElement('div');
		el.ggId="ht_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_bg.style.transition='';
				if (me._ht_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_url_bg.style.visibility="hidden";
					me._ht_url_bg.ggVisible=false;
				}
				else {
					me._ht_url_bg.style.visibility=(Number(me._ht_url_bg.style.opacity)>0||!me._ht_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_url_bg.logicBlock_visible();
		me._ht_url_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_icon=document.createElement('div');
		els=me._ht_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8ZWxsaXBzZSByeT0iMTYiIGN4PSIzMiIgcng9IjguNiIgY2xhc3M9InN0MSIgY3k9IjMyIi8+CiAgPGNpcmNsZSByPSIxNiIgY3g9IjMyIiBjbGFzcz0ic3QxIiBjeT0i'+
			'MzIiLz4KICA8bGluZSB5Mj0iMzIiIHgyPSI0OCIgeDE9IjE2IiBjbGFzcz0ic3QxIiB5MT0iMzIiLz4KICA8bGluZSB5Mj0iNDgiIHgyPSIzMiIgeDE9IjMyIiBjbGFzcz0ic3QxIiB5MT0iMTYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGVsbGlwc2Ugc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiByeT0iMTYiIGN4PSIzMiIgcng9IjguNjIiIGN5PSIzMiIvPgogIDxjaX'+
			'JjbGUgcj0iMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgY3g9IjMyIiBjeT0iMzIiLz4KICA8bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHkyPSIzMiIgeDI9IjQ4IiB4MT0iMTYiIHkxPSIzMiIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9w'+
			'YWNpdHk6MSIgeTI9IjQ4IiB4Mj0iMzIiIHgxPSIzMiIgeTE9IjE2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_url_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_icon.onmouseenter=function (e) {
			me._ht_url_icon__img.style.visibility='hidden';
			me._ht_url_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_url_icon']=true;
		}
		me._ht_url_icon.onmouseleave=function (e) {
			me._ht_url_icon__img.style.visibility='inherit';
			me._ht_url_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_url_icon']=false;
		}
		me._ht_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url_bg.appendChild(me._ht_url_icon);
		me._ht_url.appendChild(me._ht_url_bg);
		el=me._ht_node_custom_image0=document.createElement('div');
		els=me._ht_node_custom_image0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image0.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image0.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image0.ggAltText));
			me._ht_node_custom_image0.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image0.ggText_untranslated = img;
			me._ht_node_custom_image0.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image0.ggSubElement.style.width = '0px';
			me._ht_node_custom_image0.ggSubElement.style.height = '0px';
			me._ht_node_custom_image0.ggSubElement.src='';
			me._ht_node_custom_image0.ggSubElement.src=me._ht_node_custom_image0.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image0.ggText != player._(me._ht_node_custom_image0.ggText_untranslated)) {
				me._ht_node_custom_image0.ggText = player._(me._ht_node_custom_image0.ggText_untranslated);
				me._ht_node_custom_image0.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image0.style.transition='';
				if (me._ht_node_custom_image0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image0.style.visibility=(Number(me._ht_node_custom_image0.style.opacity)>0||!me._ht_node_custom_image0.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image0.ggSubElement.src=me._ht_node_custom_image0.ggText;
					me._ht_node_custom_image0.ggVisible=true;
				}
				else {
					me._ht_node_custom_image0.style.visibility="hidden";
					me._ht_node_custom_image0.ggSubElement.src='';
					me._ht_node_custom_image0.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image0.logicBlock_visible();
		me._ht_node_custom_image0.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image0.clientWidth;
			var parentHeight = me._ht_node_custom_image0.clientHeight;
			var img = me._ht_node_custom_image0__img;
			var aspectRatioDiv = me._ht_node_custom_image0.clientWidth / me._ht_node_custom_image0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image0.ggScrollbars || currentWidth < me._ht_node_custom_image0.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image0.scrollLeft=currentWidth / 2 - me._ht_node_custom_image0.clientWidth / 2;
			}
			if (!me._ht_node_custom_image0.ggScrollbars || currentHeight < me._ht_node_custom_image0.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image0.scrollTop=currentHeight / 2 - me._ht_node_custom_image0.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_node_custom_image0);
		me._ht_url.logicBlock_visible();
		me.elementMouseOver['ht_url']=false;
		me._ht_url_title.logicBlock_position();
		me._ht_url_title.logicBlock_visible();
		me._ht_url_bg.logicBlock_visible();
		me.elementMouseOver['ht_url_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image0.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image0.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image0.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image0.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image0.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_title.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_node_custom_image0.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_title.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_node_custom_image0.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_title.logicBlock_position();
				me._ht_url_title.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_node_custom_image0.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_url_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_url.logicBlock_visible();
			};
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 435px;';
		hs+='position : absolute;';
		hs+='top : 314px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node.style.transition='';
				if (me._ht_node.ggCurrentLogicStateVisible == 0) {
					me._ht_node.style.visibility=(Number(me._ht_node.style.opacity)>0||!me._ht_node.style.opacity)?'inherit':'hidden';
					me._ht_node.ggVisible=true;
				}
				else {
					me._ht_node.style.visibility="hidden";
					me._ht_node.ggVisible=false;
				}
			}
		}
		me._ht_node.logicBlock_visible();
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._ht_node_preview_bg0.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._ht_node_preview_bg0.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_bg0=document.createElement('div');
		el.ggId="ht_node_preview_bg";
		el.ggDx=8;
		el.ggDy=22;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #699ae4;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((182px + 0px) / 2) + 8px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 22px);';
		hs+='visibility : hidden;';
		hs+='width : 182px;';
		hs+='pointer-events:none;';
		hs+='overflow: hidden';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_preview_bg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_preview_bg0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_preview_bg0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_preview_bg0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_preview_bg0.style.transition='';
				if (me._ht_node_preview_bg0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_preview_bg0.style.visibility=(Number(me._ht_node_preview_bg0.style.opacity)>0||!me._ht_node_preview_bg0.style.opacity)?'inherit':'hidden';
					me._ht_node_preview_bg0.ggVisible=true;
				}
				else {
					me._ht_node_preview_bg0.style.visibility="hidden";
					me._ht_node_preview_bg0.ggVisible=false;
				}
			}
		}
		me._ht_node_preview_bg0.logicBlock_visible();
		me._ht_node_preview_bg0.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_img0=document.createElement('div');
		els=me._ht_node_preview_img0__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_node_preview_img0_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		hs+='border-radius: 5px;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_preview_img";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 110px;';
		hs+='left : calc(50% - ((174px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((110px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 174px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_preview_img0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_preview_img0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_preview_bg0.appendChild(me._ht_node_preview_img0);
		el=me._ht_node_preview_title0=document.createElement('div');
		els=me._ht_node_preview_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_node_preview_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='color : #000000;';
		hs+='cursor : pointer;';
		hs+='height : 24.1667%;';
		hs+='left : 4px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 95.6044%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='pointer-events: none;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 4px 0px 0px 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_node_preview_title0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_preview_title0.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_preview_title0.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_preview_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_preview_title0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player._(me.hotspot.title) == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_preview_title0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_preview_title0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_preview_title0.style.transition='';
				if (me._ht_node_preview_title0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_preview_title0.style.visibility="hidden";
					me._ht_node_preview_title0.ggVisible=false;
				}
				else {
					me._ht_node_preview_title0.style.visibility=(Number(me._ht_node_preview_title0.style.opacity)>0||!me._ht_node_preview_title0.style.opacity)?'inherit':'hidden';
					me._ht_node_preview_title0.ggVisible=true;
				}
			}
		}
		me._ht_node_preview_title0.logicBlock_visible();
		me._ht_node_preview_title0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_preview_bg0.appendChild(me._ht_node_preview_title0);
		me._ht_node.appendChild(me._ht_node_preview_bg0);
		el=me._ht_node_bg0=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=7;
		el.ggDy=88;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #699ae4;';
		hs+='border : 0px solid #141414;';
		hs+='border-radius : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 85px;';
		hs+='left : calc(50% - ((83px + 0px) / 2) + 7px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((85px + 0px) / 2) + 88px);';
		hs+='visibility : inherit;';
		hs+='width : 83px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_bg0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_bg0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_bg0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_bg0.style.transition='';
				if (me._ht_node_bg0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_bg0.style.visibility="hidden";
					me._ht_node_bg0.ggVisible=false;
				}
				else {
					me._ht_node_bg0.style.visibility=(Number(me._ht_node_bg0.style.opacity)>0||!me._ht_node_bg0.style.opacity)?'inherit':'hidden';
					me._ht_node_bg0.ggVisible=true;
				}
			}
		}
		me._ht_node_bg0.logicBlock_visible();
		me._ht_node_bg0.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited0=document.createElement('div');
		els=me._ht_node_visited0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO30mI3hkOwoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSByPSIzMSIgY3g9IjMyIiBjbGFzcz0ic3QwIiBjeT0iMzIiLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGNsYXNzPSJzdDEiIGhlaWdodD0iNjQiLz4K'+
			'IDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguNiwyNi43IDMwLjksNDggNDkuNCwxNiAmI3g5OyIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_visited";
		el.ggDx=34;
		el.ggDy=39;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((28px + 0px) / 2) + 34px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 39px);';
		hs+='visibility : hidden;';
		hs+='width : 28px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_visited0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_visited0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited0.ggElementNodeId()) == true)) || 
				((me._ht_node_visited0.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited0.style.transition='';
				if (me._ht_node_visited0.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited0.style.visibility=(Number(me._ht_node_visited0.style.opacity)>0||!me._ht_node_visited0.style.opacity)?'inherit':'hidden';
					me._ht_node_visited0.ggVisible=true;
				}
				else {
					me._ht_node_visited0.style.visibility="hidden";
					me._ht_node_visited0.ggVisible=false;
				}
			}
		}
		me._ht_node_visited0.logicBlock_visible();
		me._ht_node_visited0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg0.appendChild(me._ht_node_visited0);
		el=me._ht_node_icon0=document.createElement('div');
		els=me._ht_node_icon0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeD0iMHB4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3'+
			'N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIxOC4xLDI5LjkgMzIsMTYgMzIsMTYgNDUuOSwyOS45ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeTI9IjE3LjYiIHgyPSIzMiIg'+
			'eDE9IjMyIiBjbGFzcz0ic3QxIiB5MT0iNDgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_icon0__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_icon0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcG9pbnRzPSIxOC4wNiAyOS45MyAzMi4wMSAxNiAzMi4wMSAxNiA0NS'+
			'45NCAyOS45MyIvPgogIDxsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeTI9IjE3LjY0IiB4Mj0iMzIiIHgxPSIzMiIgeTE9IjQ4Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_icon0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_node_icon";
		el.ggDx=0;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 127px;';
		hs+='left : calc(50% - ((96px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((127px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_icon0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_icon0.onmouseenter=function (e) {
			me._ht_node_icon0__img.style.visibility='hidden';
			me._ht_node_icon0__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_icon0']=true;
		}
		me._ht_node_icon0.onmouseleave=function (e) {
			me._ht_node_icon0__img.style.visibility='inherit';
			me._ht_node_icon0__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_icon0']=false;
		}
		me._ht_node_icon0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg0.appendChild(me._ht_node_icon0);
		me._ht_node.appendChild(me._ht_node_bg0);
		el=me._ht_node_custom_image1=document.createElement('div');
		els=me._ht_node_custom_image1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image1.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image1.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image1.ggAltText));
			me._ht_node_custom_image1.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image1.ggText_untranslated = img;
			me._ht_node_custom_image1.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image1.ggSubElement.style.width = '0px';
			me._ht_node_custom_image1.ggSubElement.style.height = '0px';
			me._ht_node_custom_image1.ggSubElement.src='';
			me._ht_node_custom_image1.ggSubElement.src=me._ht_node_custom_image1.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image1.ggText != player._(me._ht_node_custom_image1.ggText_untranslated)) {
				me._ht_node_custom_image1.ggText = player._(me._ht_node_custom_image1.ggText_untranslated);
				me._ht_node_custom_image1.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_node_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_custom_image1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_custom_image1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_custom_image1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image1.style.transition='';
				if (me._ht_node_custom_image1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image1.style.visibility=(Number(me._ht_node_custom_image1.style.opacity)>0||!me._ht_node_custom_image1.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image1.ggSubElement.src=me._ht_node_custom_image1.ggText;
					me._ht_node_custom_image1.ggVisible=true;
				}
				else {
					me._ht_node_custom_image1.style.visibility="hidden";
					me._ht_node_custom_image1.ggSubElement.src='';
					me._ht_node_custom_image1.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image1.logicBlock_visible();
		me._ht_node_custom_image1.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image1.clientWidth;
			var parentHeight = me._ht_node_custom_image1.clientHeight;
			var img = me._ht_node_custom_image1__img;
			var aspectRatioDiv = me._ht_node_custom_image1.clientWidth / me._ht_node_custom_image1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image1.ggScrollbars || currentWidth < me._ht_node_custom_image1.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image1.scrollLeft=currentWidth / 2 - me._ht_node_custom_image1.clientWidth / 2;
			}
			if (!me._ht_node_custom_image1.ggScrollbars || currentHeight < me._ht_node_custom_image1.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image1.scrollTop=currentHeight / 2 - me._ht_node_custom_image1.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_custom_image1);
		me._ht_node.logicBlock_visible();
		me.elementMouseOver['ht_node']=false;
		me._ht_node_preview_bg0.logicBlock_visible();
		me._ht_node_preview_title0.logicBlock_visible();
		me._ht_node_bg0.logicBlock_visible();
		me._ht_node_visited0.logicBlock_visible();
		me.elementMouseOver['ht_node_icon0']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image1.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image1.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image1.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image1.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image1.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_preview_bg0.logicBlock_visible();
				me._ht_node_preview_title0.logicBlock_visible();
				me._ht_node_bg0.logicBlock_visible();
				me._ht_node_custom_image1.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_preview_bg0.logicBlock_visible();
				me._ht_node_preview_title0.logicBlock_visible();
				me._ht_node_bg0.logicBlock_visible();
				me._ht_node_visited0.logicBlock_visible();
				me._ht_node_visited0.logicBlock_visible();
				me._ht_node_custom_image1.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_visited0.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_preview_bg0.logicBlock_visible();
				me._ht_node_preview_title0.logicBlock_visible();
				me._ht_node_bg0.logicBlock_visible();
				me._ht_node_custom_image1.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_node.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 280px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image.style.transition='';
				if (me._ht_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image.style.visibility=(Number(me._ht_image.style.opacity)>0||!me._ht_image.style.opacity)?'inherit':'hidden';
					me._ht_image.ggVisible=true;
				}
				else {
					me._ht_image.style.visibility="hidden";
					me._ht_image.ggVisible=false;
				}
			}
		}
		me._ht_image.logicBlock_visible();
		me._ht_image.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._media_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._media_popup_title.ggUpdateText();
				skin._media_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._image_popup.ggSetImage(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_youtube_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_vimeo_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('controls_left_open', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._image_popup_phone.ggSetImage(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._ht_image_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._ht_image_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_title=document.createElement('div');
		els=me._ht_image_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_image_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(20,20,20,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_image_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_image_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_image_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_image_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_image_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_image_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_image_title.style.transition='left 0s, top 0s';
				if (me._ht_image_title.ggCurrentLogicStatePosition == 0) {
					me._ht_image_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_image_title.style.top='-45px';
				}
				else {
					me._ht_image_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_image_title.style.top='6px';
				}
			}
		}
		me._ht_image_title.logicBlock_position();
		me._ht_image_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_title.style.transition='left 0s, top 0s';
				if (me._ht_image_title.ggCurrentLogicStateVisible == 0) {
					me._ht_image_title.style.visibility=(Number(me._ht_image_title.style.opacity)>0||!me._ht_image_title.style.opacity)?'inherit':'hidden';
					me._ht_image_title.ggVisible=true;
				}
				else {
					me._ht_image_title.style.visibility="hidden";
					me._ht_image_title.ggVisible=false;
				}
			}
		}
		me._ht_image_title.logicBlock_visible();
		me._ht_image_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._ht_image_title);
		el=me._ht_image_bg=document.createElement('div');
		el.ggId="ht_image_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_bg.style.transition='';
				if (me._ht_image_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_image_bg.style.visibility="hidden";
					me._ht_image_bg.ggVisible=false;
				}
				else {
					me._ht_image_bg.style.visibility=(Number(me._ht_image_bg.style.opacity)>0||!me._ht_image_bg.style.opacity)?'inherit':'hidden';
					me._ht_image_bg.ggVisible=true;
				}
			}
		}
		me._ht_image_bg.logicBlock_visible();
		me._ht_image_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_icon=document.createElement('div');
		els=me._ht_image_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIwcHgiIHZlcnNpb249IjEuMSIgeG1sOnNwYWNlPSJwcmVzZX'+
			'J2ZSI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxNDE0MTQ7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBkPSJNMzIsMjYuNWMzLjEsMCw1LjYsMi41LDUuNiw1LjZzLTIuNSw1LjYtNS42LDUuNnMtNS42LTIuNS01LjYtNS42UzI4LjksMjYuNSwzMiwyNi41TDMyLDI2LjUgTTMyLDI0LjMgICBjLTQuMywwLTcuOCwzLjUtNy44LDcuOFMyNy43LDQwLDMyLDQwczcuOC0zLjUsNy44LTcuOFMzNi4zLDI0LjMsMzIsMjQuM0wzMiwyNC4z'+
			'eiIgY2xhc3M9InN0MCIvPgogIDxwb2x5Z29uIHBvaW50cz0iMzcuMiwyMi41IDM1LjgsMTkuNyAyOC4xLDE5LjcgMjYuOSwyMi41IDE2LjQsMjIuNSAxNi40LDQzLjQgNDcuNiw0My40IDQ3LjYsMjIuNSAgIiBjbGFzcz0ic3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_image_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6IzAwMDAwMDsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik0zMiwyOC4xN2E0LDQsMCwxLDEtNCw0LDQsNCwwLDAsMSw0LTRtMC00YTgsOCwwLDEsMCw4LDgsOCw4LDAsMCwwLTgtOFoiLz4KICA8cG9seWdvbiBzdHlsZT0iZm'+
			'lsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHBvaW50cz0iMzcuMjMgMjIuMjIgMzUuODkgMTkuNDUgMjguMTEgMTkuNDUgMjYuNzcgMjIuMjIgMTYgMjIuMjIgMTYgNDMuNTUgNDggNDMuNTUgNDggMjIuMjIgMzcuMjMgMjIuMjIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_image_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_image_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_icon.onmouseenter=function (e) {
			me._ht_image_icon__img.style.visibility='hidden';
			me._ht_image_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_image_icon']=true;
		}
		me._ht_image_icon.onmouseleave=function (e) {
			me._ht_image_icon__img.style.visibility='inherit';
			me._ht_image_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_image_icon']=false;
		}
		me._ht_image_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image_bg.appendChild(me._ht_image_icon);
		me._ht_image.appendChild(me._ht_image_bg);
		el=me._ht_image_custom_image=document.createElement('div');
		els=me._ht_image_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_image_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_image_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_image_custom_image.ggAltText));
			me._ht_image_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_image_custom_image.ggText_untranslated = img;
			me._ht_image_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_image_custom_image.ggSubElement.style.width = '0px';
			me._ht_image_custom_image.ggSubElement.style.height = '0px';
			me._ht_image_custom_image.ggSubElement.src='';
			me._ht_image_custom_image.ggSubElement.src=me._ht_image_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_image_custom_image.ggText != player._(me._ht_image_custom_image.ggText_untranslated)) {
				me._ht_image_custom_image.ggText = player._(me._ht_image_custom_image.ggText_untranslated);
				me._ht_image_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_image_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_custom_image.style.transition='';
				if (me._ht_image_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image_custom_image.style.visibility=(Number(me._ht_image_custom_image.style.opacity)>0||!me._ht_image_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_image_custom_image.ggSubElement.src=me._ht_image_custom_image.ggText;
					me._ht_image_custom_image.ggVisible=true;
				}
				else {
					me._ht_image_custom_image.style.visibility="hidden";
					me._ht_image_custom_image.ggSubElement.src='';
					me._ht_image_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_image_custom_image.logicBlock_visible();
		me._ht_image_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_image_custom_image.clientWidth;
			var parentHeight = me._ht_image_custom_image.clientHeight;
			var img = me._ht_image_custom_image__img;
			var aspectRatioDiv = me._ht_image_custom_image.clientWidth / me._ht_image_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_image_custom_image.ggScrollbars || currentWidth < me._ht_image_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_image_custom_image.scrollLeft=currentWidth / 2 - me._ht_image_custom_image.clientWidth / 2;
			}
			if (!me._ht_image_custom_image.ggScrollbars || currentHeight < me._ht_image_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_image_custom_image.scrollTop=currentHeight / 2 - me._ht_image_custom_image.clientHeight / 2;
			}
		}
		me._ht_image.appendChild(me._ht_image_custom_image);
		me._ht_image.logicBlock_visible();
		me.elementMouseOver['ht_image']=false;
		me._ht_image_title.logicBlock_position();
		me._ht_image_title.logicBlock_visible();
		me._ht_image_bg.logicBlock_visible();
		me.elementMouseOver['ht_image_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_image_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_image_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_image_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_image_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_image_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_image_title.logicBlock_visible();
				me._ht_image_bg.logicBlock_visible();
				me._ht_image_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image_title.logicBlock_visible();
				me._ht_image_bg.logicBlock_visible();
				me._ht_image_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_image.logicBlock_visible();
				me._ht_image_title.logicBlock_position();
				me._ht_image_title.logicBlock_visible();
				me._ht_image_bg.logicBlock_visible();
				me._ht_image_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_image_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_image.logicBlock_visible();
			};
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 230px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info.style.transition='';
				if (me._ht_info.ggCurrentLogicStateVisible == 0) {
					me._ht_info.style.visibility=(Number(me._ht_info.style.opacity)>0||!me._ht_info.style.opacity)?'inherit':'hidden';
					me._ht_info.ggVisible=true;
				}
				else {
					me._ht_info.style.visibility="hidden";
					me._ht_info.ggVisible=false;
				}
			}
		}
		me._ht_info.logicBlock_visible();
		me._ht_info.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._info_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_title.ggUpdateText();
				skin._info_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._info_popup_body.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_body.ggUpdateText();
				skin._info_popup_body.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_info_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_title_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_title_phone.ggUpdateText();
				skin._info_popup_title_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
					skin._info_popup_text_phone.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.description)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._info_popup_text_phone.ggUpdateText();
				skin._info_popup_text_phone.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._ht_info_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseleave=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._ht_info_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_title=document.createElement('div');
		els=me._ht_info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(20,20,20,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_info_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_info_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_info_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_info_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_info_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_info_title.style.transition='left 0s, top 0s';
				if (me._ht_info_title.ggCurrentLogicStatePosition == 0) {
					me._ht_info_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_info_title.style.top='-45px';
				}
				else {
					me._ht_info_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_info_title.style.top='6px';
				}
			}
		}
		me._ht_info_title.logicBlock_position();
		me._ht_info_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_title.style.transition='left 0s, top 0s';
				if (me._ht_info_title.ggCurrentLogicStateVisible == 0) {
					me._ht_info_title.style.visibility=(Number(me._ht_info_title.style.opacity)>0||!me._ht_info_title.style.opacity)?'inherit':'hidden';
					me._ht_info_title.ggVisible=true;
				}
				else {
					me._ht_info_title.style.visibility="hidden";
					me._ht_info_title.ggVisible=false;
				}
			}
		}
		me._ht_info_title.logicBlock_visible();
		me._ht_info_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_title);
		el=me._ht_info_bg=document.createElement('div');
		el.ggId="ht_info_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_bg.style.transition='';
				if (me._ht_info_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_info_bg.style.visibility="hidden";
					me._ht_info_bg.ggVisible=false;
				}
				else {
					me._ht_info_bg.style.visibility=(Number(me._ht_info_bg.style.opacity)>0||!me._ht_info_bg.style.opacity)?'inherit':'hidden';
					me._ht_info_bg.ggVisible=true;
				}
			}
		}
		me._ht_info_bg.logicBlock_visible();
		me._ht_info_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_icon=document.createElement('div');
		els=me._ht_info_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIHI9IjEuMyIgY3g9IjMyIiBjbGFzcz0ic3QxIiBjeT0iMjAuOCIvPgogIDxsaW5lIHkyPSI0Ny41IiB4Mj0iMzIiIHgxPSIzMiIgY2xhc3M9InN0MSIgeTE9'+
			'IjMxLjUiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIGN4PSIzMiIgY3k9IjIwLjg0Ii8+CiAgPGxpbmUgc3R5bG'+
			'U9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5Mj0iNDcuNSIgeDI9IjMyIiB4MT0iMzIiIHkxPSIzMS41Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_icon.onmouseenter=function (e) {
			me._ht_info_icon__img.style.visibility='hidden';
			me._ht_info_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_icon']=true;
		}
		me._ht_info_icon.onmouseleave=function (e) {
			me._ht_info_icon__img.style.visibility='inherit';
			me._ht_info_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_icon']=false;
		}
		me._ht_info_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_bg.appendChild(me._ht_info_icon);
		me._ht_info.appendChild(me._ht_info_bg);
		el=me._ht_info_custom_image=document.createElement('div');
		els=me._ht_info_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_info_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_info_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_info_custom_image.ggAltText));
			me._ht_info_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_info_custom_image.ggText_untranslated = img;
			me._ht_info_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_info_custom_image.ggSubElement.style.width = '0px';
			me._ht_info_custom_image.ggSubElement.style.height = '0px';
			me._ht_info_custom_image.ggSubElement.src='';
			me._ht_info_custom_image.ggSubElement.src=me._ht_info_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_info_custom_image.ggText != player._(me._ht_info_custom_image.ggText_untranslated)) {
				me._ht_info_custom_image.ggText = player._(me._ht_info_custom_image.ggText_untranslated);
				me._ht_info_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_info_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_custom_image.style.transition='';
				if (me._ht_info_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_custom_image.style.visibility=(Number(me._ht_info_custom_image.style.opacity)>0||!me._ht_info_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_info_custom_image.ggSubElement.src=me._ht_info_custom_image.ggText;
					me._ht_info_custom_image.ggVisible=true;
				}
				else {
					me._ht_info_custom_image.style.visibility="hidden";
					me._ht_info_custom_image.ggSubElement.src='';
					me._ht_info_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_info_custom_image.logicBlock_visible();
		me._ht_info_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_info_custom_image.clientWidth;
			var parentHeight = me._ht_info_custom_image.clientHeight;
			var img = me._ht_info_custom_image__img;
			var aspectRatioDiv = me._ht_info_custom_image.clientWidth / me._ht_info_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_info_custom_image.ggScrollbars || currentWidth < me._ht_info_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_info_custom_image.scrollLeft=currentWidth / 2 - me._ht_info_custom_image.clientWidth / 2;
			}
			if (!me._ht_info_custom_image.ggScrollbars || currentHeight < me._ht_info_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_info_custom_image.scrollTop=currentHeight / 2 - me._ht_info_custom_image.clientHeight / 2;
			}
		}
		me._ht_info.appendChild(me._ht_info_custom_image);
		me._ht_info.logicBlock_visible();
		me.elementMouseOver['ht_info']=false;
		me._ht_info_title.logicBlock_position();
		me._ht_info_title.logicBlock_visible();
		me._ht_info_bg.logicBlock_visible();
		me.elementMouseOver['ht_info_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_info_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_info_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_info_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_info_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_info_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_info_title.logicBlock_visible();
				me._ht_info_bg.logicBlock_visible();
				me._ht_info_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info_title.logicBlock_visible();
				me._ht_info_bg.logicBlock_visible();
				me._ht_info_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_info.logicBlock_visible();
				me._ht_info_title.logicBlock_position();
				me._ht_info_title.logicBlock_visible();
				me._ht_info_bg.logicBlock_visible();
				me._ht_info_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_info_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_info.logicBlock_visible();
			};
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_pdf(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pdf=document.createElement('div');
		el.ggId="ht_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 330px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pdf.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf.style.transition='';
				if (me._ht_pdf.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf.style.visibility=(Number(me._ht_pdf.style.opacity)>0||!me._ht_pdf.style.opacity)?'inherit':'hidden';
					me._ht_pdf.ggVisible=true;
				}
				else {
					me._ht_pdf.style.visibility="hidden";
					me._ht_pdf.ggVisible=false;
				}
			}
		}
		me._ht_pdf.logicBlock_visible();
		me._ht_pdf.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._media_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._media_popup_title.ggUpdateText();
				skin._media_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._pdf_popup.ggInitPdf(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				let pdfInterval_7 = setInterval(() => {
					if (skin._pdf_popup__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_7);
					}
				}, 50);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_youtube_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_vimeo_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('controls_left_open', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._pdf_popup_phone.ggInitPdf(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				let pdfInterval_8 = setInterval(() => {
					if (skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup_phone.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_8);
					}
				}, 50);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pdf']=true;
			me._ht_pdf_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_pdf.onmouseleave=function (e) {
			me.elementMouseOver['ht_pdf']=false;
			me._ht_pdf_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_pdf.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_title=document.createElement('div');
		els=me._ht_pdf_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_pdf_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(20,20,20,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_pdf_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_pdf_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_pdf_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_pdf_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_pdf_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_pdf_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_pdf_title.style.transition='left 0s, top 0s';
				if (me._ht_pdf_title.ggCurrentLogicStatePosition == 0) {
					me._ht_pdf_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_pdf_title.style.top='-45px';
				}
				else {
					me._ht_pdf_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_pdf_title.style.top='6px';
				}
			}
		}
		me._ht_pdf_title.logicBlock_position();
		me._ht_pdf_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_pdf'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_title.style.transition='left 0s, top 0s';
				if (me._ht_pdf_title.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_title.style.visibility=(Number(me._ht_pdf_title.style.opacity)>0||!me._ht_pdf_title.style.opacity)?'inherit':'hidden';
					me._ht_pdf_title.ggVisible=true;
				}
				else {
					me._ht_pdf_title.style.visibility="hidden";
					me._ht_pdf_title.ggVisible=false;
				}
			}
		}
		me._ht_pdf_title.logicBlock_visible();
		me._ht_pdf_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf.appendChild(me._ht_pdf_title);
		el=me._ht_pdf_bg=document.createElement('div');
		el.ggId="ht_pdf_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_bg.style.transition='';
				if (me._ht_pdf_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_bg.style.visibility="hidden";
					me._ht_pdf_bg.ggVisible=false;
				}
				else {
					me._ht_pdf_bg.style.visibility=(Number(me._ht_pdf_bg.style.opacity)>0||!me._ht_pdf_bg.style.opacity)?'inherit':'hidden';
					me._ht_pdf_bg.ggVisible=true;
				}
			}
		}
		me._ht_pdf_bg.logicBlock_visible();
		me._ht_pdf_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_pdf_icon=document.createElement('div');
		els=me._ht_pdf_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgY2xhc3M9InN0MCIgaGVpZ2h0PSI2NCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM2LDE2IDIwLDE2IDIwLDQ4IDQ0LDQ4IDQ0LDI0ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzYsMTYgMzYs'+
			'MjQgNDQsMjQgJiN4OTsiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_pdf_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_pdf_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlnb24gc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiBwb2ludHM9IjM2IDE2IDIwIDE2IDIwIDQ4IDQ0IDQ4IDQ0IDI0IDM2ID'+
			'E2Ii8+CiAgPHBvbHlsaW5lIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgcG9pbnRzPSIzNiAxNiAzNiAyNCA0NCAyNCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_pdf_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_pdf_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_icon.onmouseenter=function (e) {
			me._ht_pdf_icon__img.style.visibility='hidden';
			me._ht_pdf_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_pdf_icon']=true;
		}
		me._ht_pdf_icon.onmouseleave=function (e) {
			me._ht_pdf_icon__img.style.visibility='inherit';
			me._ht_pdf_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_pdf_icon']=false;
		}
		me._ht_pdf_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_pdf_bg.appendChild(me._ht_pdf_icon);
		me._ht_pdf.appendChild(me._ht_pdf_bg);
		el=me._ht_pdf_custom_image=document.createElement('div');
		els=me._ht_pdf_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_pdf_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_pdf_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_pdf_custom_image.ggAltText));
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_pdf_custom_image.ggText_untranslated = img;
			me._ht_pdf_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_pdf_custom_image.ggSubElement.style.width = '0px';
			me._ht_pdf_custom_image.ggSubElement.style.height = '0px';
			me._ht_pdf_custom_image.ggSubElement.src='';
			me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_pdf_custom_image.ggText != player._(me._ht_pdf_custom_image.ggText_untranslated)) {
				me._ht_pdf_custom_image.ggText = player._(me._ht_pdf_custom_image.ggText_untranslated);
				me._ht_pdf_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_pdf_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_pdf_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_pdf_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf_custom_image.style.transition='';
				if (me._ht_pdf_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf_custom_image.style.visibility=(Number(me._ht_pdf_custom_image.style.opacity)>0||!me._ht_pdf_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_pdf_custom_image.ggSubElement.src=me._ht_pdf_custom_image.ggText;
					me._ht_pdf_custom_image.ggVisible=true;
				}
				else {
					me._ht_pdf_custom_image.style.visibility="hidden";
					me._ht_pdf_custom_image.ggSubElement.src='';
					me._ht_pdf_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_pdf_custom_image.logicBlock_visible();
		me._ht_pdf_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_pdf_custom_image.clientWidth;
			var parentHeight = me._ht_pdf_custom_image.clientHeight;
			var img = me._ht_pdf_custom_image__img;
			var aspectRatioDiv = me._ht_pdf_custom_image.clientWidth / me._ht_pdf_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentWidth < me._ht_pdf_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_pdf_custom_image.scrollLeft=currentWidth / 2 - me._ht_pdf_custom_image.clientWidth / 2;
			}
			if (!me._ht_pdf_custom_image.ggScrollbars || currentHeight < me._ht_pdf_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_pdf_custom_image.scrollTop=currentHeight / 2 - me._ht_pdf_custom_image.clientHeight / 2;
			}
		}
		me._ht_pdf.appendChild(me._ht_pdf_custom_image);
		me._ht_pdf.logicBlock_visible();
		me.elementMouseOver['ht_pdf']=false;
		me._ht_pdf_title.logicBlock_position();
		me._ht_pdf_title.logicBlock_visible();
		me._ht_pdf_bg.logicBlock_visible();
		me.elementMouseOver['ht_pdf_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_pdf_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_pdf_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_pdf_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_pdf_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_pdf_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_pdf_title.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf_title.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_pdf.logicBlock_visible();
				me._ht_pdf_title.logicBlock_position();
				me._ht_pdf_title.logicBlock_visible();
				me._ht_pdf_bg.logicBlock_visible();
				me._ht_pdf_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_pdf_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_pdf.logicBlock_visible();
			};
			me.__div = me._ht_pdf;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 480px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file.style.transition='';
				if (me._ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file.style.visibility=(Number(me._ht_video_file.style.opacity)>0||!me._ht_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_file.ggVisible=true;
				}
				else {
					me._ht_video_file.style.visibility="hidden";
					me._ht_video_file.ggVisible=false;
				}
			}
		}
		me._ht_video_file.logicBlock_visible();
		me._ht_video_file.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._media_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._media_popup_title.ggUpdateText();
				skin._media_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_file_popup.ggInitMedia(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_controller_seekbar.ggMediaId = "video_file_popup";
				skin._video_controller_seekbar.ggConnectToMediaEl();
				skin._video_controller_seekbar.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_file_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_youtube_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_vimeo_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('controls_left_open', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_file_popup_phone.ggInitMedia(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_file_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._ht_video_file_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_file']=false;
			me._ht_video_file_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_title=document.createElement('div');
		els=me._ht_video_file_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_file_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(20,20,20,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_file_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_file_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_file_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_file_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_file_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_file_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_file_title.style.transition='left 0s, top 0s';
				if (me._ht_video_file_title.ggCurrentLogicStatePosition == 0) {
					me._ht_video_file_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_file_title.style.top='-45px';
				}
				else {
					me._ht_video_file_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_file_title.style.top='6px';
				}
			}
		}
		me._ht_video_file_title.logicBlock_position();
		me._ht_video_file_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_title.style.transition='left 0s, top 0s';
				if (me._ht_video_file_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_title.style.visibility=(Number(me._ht_video_file_title.style.opacity)>0||!me._ht_video_file_title.style.opacity)?'inherit':'hidden';
					me._ht_video_file_title.ggVisible=true;
				}
				else {
					me._ht_video_file_title.style.visibility="hidden";
					me._ht_video_file_title.ggVisible=false;
				}
			}
		}
		me._ht_video_file_title.logicBlock_visible();
		me._ht_video_file_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_file_title);
		el=me._ht_video_file_bg=document.createElement('div');
		el.ggId="ht_video_file_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_bg.style.transition='';
				if (me._ht_video_file_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_bg.style.visibility="hidden";
					me._ht_video_file_bg.ggVisible=false;
				}
				else {
					me._ht_video_file_bg.style.visibility=(Number(me._ht_video_file_bg.style.opacity)>0||!me._ht_video_file_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_file_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_file_bg.logicBlock_visible();
		me._ht_video_file_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_file_icon=document.createElement('div');
		els=me._ht_video_file_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzE0MTQxNDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTM1LjgsMjYuNHYxMS4yaC0xNlYyNi40SDM1LjggTTQ0LjIsMjcuOHY4LjNMMzguOCwzM0wzNywzMmwxLjctMUw0NC4yLDI3LjggTTQ2LjIsMjQuNGwtOC41LDQuOXYtNC45aC0yMCYjeGQ7JiN4YTsmI3g5OyYjeDk7djE1LjJoMjB2LTQuOWw4LjUsNC45VjI0LjRMNDYuMiwyNC40eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_file_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_file_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6IzAwMDAwMDsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik0zNC40OCwyNy40M3Y5LjE0SDIwVjI3LjQzSDM0LjQ4TTQ0LDMwLjM1djMuM0w0MS4xNSwzMiw0NCwzMC4zNW00LTYuOTItOS41Miw1LjQ5VjIzLjQzSDE2VjQwLj'+
			'U3SDM4LjQ4VjM1LjA4TDQ4LDQwLjU3VjIzLjQzWiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_file_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_file_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_icon.onmouseenter=function (e) {
			me._ht_video_file_icon__img.style.visibility='hidden';
			me._ht_video_file_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_file_icon']=true;
		}
		me._ht_video_file_icon.onmouseleave=function (e) {
			me._ht_video_file_icon__img.style.visibility='inherit';
			me._ht_video_file_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_file_icon']=false;
		}
		me._ht_video_file_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file_bg.appendChild(me._ht_video_file_icon);
		me._ht_video_file.appendChild(me._ht_video_file_bg);
		el=me._ht_video_file_custom_image=document.createElement('div');
		els=me._ht_video_file_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_file_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_file_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_file_custom_image.ggAltText));
			me._ht_video_file_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_file_custom_image.ggText_untranslated = img;
			me._ht_video_file_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_file_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_file_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_file_custom_image.ggSubElement.src='';
			me._ht_video_file_custom_image.ggSubElement.src=me._ht_video_file_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_file_custom_image.ggText != player._(me._ht_video_file_custom_image.ggText_untranslated)) {
				me._ht_video_file_custom_image.ggText = player._(me._ht_video_file_custom_image.ggText_untranslated);
				me._ht_video_file_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_file_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_custom_image.style.transition='';
				if (me._ht_video_file_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_custom_image.style.visibility=(Number(me._ht_video_file_custom_image.style.opacity)>0||!me._ht_video_file_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_file_custom_image.ggSubElement.src=me._ht_video_file_custom_image.ggText;
					me._ht_video_file_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_file_custom_image.style.visibility="hidden";
					me._ht_video_file_custom_image.ggSubElement.src='';
					me._ht_video_file_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_file_custom_image.logicBlock_visible();
		me._ht_video_file_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_file_custom_image.clientWidth;
			var parentHeight = me._ht_video_file_custom_image.clientHeight;
			var img = me._ht_video_file_custom_image__img;
			var aspectRatioDiv = me._ht_video_file_custom_image.clientWidth / me._ht_video_file_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_file_custom_image.ggScrollbars || currentWidth < me._ht_video_file_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_file_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_file_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_file_custom_image.ggScrollbars || currentHeight < me._ht_video_file_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_file_custom_image.scrollTop=currentHeight / 2 - me._ht_video_file_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_file.appendChild(me._ht_video_file_custom_image);
		me._ht_video_file.logicBlock_visible();
		me.elementMouseOver['ht_video_file']=false;
		me._ht_video_file_title.logicBlock_position();
		me._ht_video_file_title.logicBlock_visible();
		me._ht_video_file_bg.logicBlock_visible();
		me.elementMouseOver['ht_video_file_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_file_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_file_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_file_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_file_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_file_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_file_title.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file_title.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_file.logicBlock_visible();
				me._ht_video_file_title.logicBlock_position();
				me._ht_video_file_title.logicBlock_visible();
				me._ht_video_file_bg.logicBlock_visible();
				me._ht_video_file_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_file_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_file.logicBlock_visible();
			};
			me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 530px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url.style.transition='';
				if (me._ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url.style.visibility=(Number(me._ht_video_url.style.opacity)>0||!me._ht_video_url.style.opacity)?'inherit':'hidden';
					me._ht_video_url.ggVisible=true;
				}
				else {
					me._ht_video_url.style.visibility="hidden";
					me._ht_video_url.ggVisible=false;
				}
			}
		}
		me._ht_video_url.logicBlock_visible();
		me._ht_video_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._media_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._media_popup_title.ggUpdateText();
				skin._media_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_url_popup.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_controller_seekbar.ggMediaId = "video_url_popup";
				skin._video_controller_seekbar.ggConnectToMediaEl();
				skin._video_controller_seekbar.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_url_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_youtube_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_vimeo_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_file_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('controls_left_open', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_url_popup_phone.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._video_controller_seekbar_phone.ggMediaId = "video_url_popup_phone";
				skin._video_controller_seekbar_phone.ggConnectToMediaEl();
				skin._video_controller_seekbar_phone.updatePlayback();
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			me._ht_video_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_url']=false;
			me._ht_video_url_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_title=document.createElement('div');
		els=me._ht_video_url_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_url_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(20,20,20,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_url_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_url_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_url_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_url_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_url_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_url_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_url_title.style.transition='left 0s, top 0s';
				if (me._ht_video_url_title.ggCurrentLogicStatePosition == 0) {
					me._ht_video_url_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_url_title.style.top='-45px';
				}
				else {
					me._ht_video_url_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_url_title.style.top='6px';
				}
			}
		}
		me._ht_video_url_title.logicBlock_position();
		me._ht_video_url_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_url'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_title.style.transition='left 0s, top 0s';
				if (me._ht_video_url_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_title.style.visibility=(Number(me._ht_video_url_title.style.opacity)>0||!me._ht_video_url_title.style.opacity)?'inherit':'hidden';
					me._ht_video_url_title.ggVisible=true;
				}
				else {
					me._ht_video_url_title.style.visibility="hidden";
					me._ht_video_url_title.ggVisible=false;
				}
			}
		}
		me._ht_video_url_title.logicBlock_visible();
		me._ht_video_url_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_url_title);
		el=me._ht_video_url_bg=document.createElement('div');
		el.ggId="ht_video_url_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_bg.style.transition='';
				if (me._ht_video_url_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_bg.style.visibility="hidden";
					me._ht_video_url_bg.ggVisible=false;
				}
				else {
					me._ht_video_url_bg.style.visibility=(Number(me._ht_video_url_bg.style.opacity)>0||!me._ht_video_url_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_url_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_url_bg.logicBlock_visible();
		me._ht_video_url_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_url_icon=document.createElement('div');
		els=me._ht_video_url_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzE0MTQxNDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTM1LjgsMjYuNHYxMS4yaC0xNlYyNi40SDM1LjggTTQ0LjIsMjcuOHY4LjNMMzguOCwzM0wzNywzMmwxLjctMUw0NC4yLDI3LjggTTQ2LjIsMjQuNGwtOC41LDQuOXYtNC45aC0yMCYjeGQ7JiN4YTsmI3g5OyYjeDk7djE1LjJoMjB2LTQuOWw4LjUsNC45VjI0LjRMNDYuMiwyNC40eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6IzAwMDAwMDsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik0zNC40OCwyNy40M3Y5LjE0SDIwVjI3LjQzSDM0LjQ4TTQ0LDMwLjM1djMuM0w0MS4xNSwzMiw0NCwzMC4zNW00LTYuOTItOS41Miw1LjQ5VjIzLjQzSDE2VjQwLj'+
			'U3SDM4LjQ4VjM1LjA4TDQ4LDQwLjU3VjIzLjQzWiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_url_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_url_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_icon.onmouseenter=function (e) {
			me._ht_video_url_icon__img.style.visibility='hidden';
			me._ht_video_url_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_url_icon']=true;
		}
		me._ht_video_url_icon.onmouseleave=function (e) {
			me._ht_video_url_icon__img.style.visibility='inherit';
			me._ht_video_url_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_url_icon']=false;
		}
		me._ht_video_url_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url_bg.appendChild(me._ht_video_url_icon);
		me._ht_video_url.appendChild(me._ht_video_url_bg);
		el=me._ht_video_url_custom_image=document.createElement('div');
		els=me._ht_video_url_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_url_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_url_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_url_custom_image.ggAltText));
			me._ht_video_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_url_custom_image.ggText_untranslated = img;
			me._ht_video_url_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_url_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_url_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_url_custom_image.ggSubElement.src='';
			me._ht_video_url_custom_image.ggSubElement.src=me._ht_video_url_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_url_custom_image.ggText != player._(me._ht_video_url_custom_image.ggText_untranslated)) {
				me._ht_video_url_custom_image.ggText = player._(me._ht_video_url_custom_image.ggText_untranslated);
				me._ht_video_url_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_url_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_url_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_url_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_url_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_url_custom_image.style.transition='';
				if (me._ht_video_url_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_url_custom_image.style.visibility=(Number(me._ht_video_url_custom_image.style.opacity)>0||!me._ht_video_url_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_url_custom_image.ggSubElement.src=me._ht_video_url_custom_image.ggText;
					me._ht_video_url_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_url_custom_image.style.visibility="hidden";
					me._ht_video_url_custom_image.ggSubElement.src='';
					me._ht_video_url_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_url_custom_image.logicBlock_visible();
		me._ht_video_url_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_url_custom_image.clientWidth;
			var parentHeight = me._ht_video_url_custom_image.clientHeight;
			var img = me._ht_video_url_custom_image__img;
			var aspectRatioDiv = me._ht_video_url_custom_image.clientWidth / me._ht_video_url_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_url_custom_image.ggScrollbars || currentWidth < me._ht_video_url_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_url_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_url_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_url_custom_image.ggScrollbars || currentHeight < me._ht_video_url_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_url_custom_image.scrollTop=currentHeight / 2 - me._ht_video_url_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_url.appendChild(me._ht_video_url_custom_image);
		me._ht_video_url.logicBlock_visible();
		me.elementMouseOver['ht_video_url']=false;
		me._ht_video_url_title.logicBlock_position();
		me._ht_video_url_title.logicBlock_visible();
		me._ht_video_url_bg.logicBlock_visible();
		me.elementMouseOver['ht_video_url_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_url_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_url_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_url_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_url_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_url_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_url_title.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url_title.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_url.logicBlock_visible();
				me._ht_video_url_title.logicBlock_position();
				me._ht_video_url_title.logicBlock_visible();
				me._ht_video_url_bg.logicBlock_visible();
				me._ht_video_url_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_url_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_url.logicBlock_visible();
			};
			me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 430px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo.style.transition='';
				if (me._ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo.style.visibility=(Number(me._ht_video_vimeo.style.opacity)>0||!me._ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo.ggVisible=true;
				}
				else {
					me._ht_video_vimeo.style.visibility="hidden";
					me._ht_video_vimeo.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo.logicBlock_visible();
		me._ht_video_vimeo.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._media_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._media_popup_title.ggUpdateText();
				skin._media_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_vimeo_popup.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_vimeo_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_youtube_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_file_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('controls_left_open', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._vimeo_popup_phone.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			me._ht_video_vimeo_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_vimeo']=false;
			me._ht_video_vimeo_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_title=document.createElement('div');
		els=me._ht_video_vimeo_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_vimeo_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(20,20,20,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_vimeo_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_vimeo_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_vimeo_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_vimeo_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_vimeo_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_vimeo_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_vimeo_title.style.transition='left 0s, top 0s';
				if (me._ht_video_vimeo_title.ggCurrentLogicStatePosition == 0) {
					me._ht_video_vimeo_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_vimeo_title.style.top='-45px';
				}
				else {
					me._ht_video_vimeo_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_vimeo_title.style.top='6px';
				}
			}
		}
		me._ht_video_vimeo_title.logicBlock_position();
		me._ht_video_vimeo_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_vimeo'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_title.style.transition='left 0s, top 0s';
				if (me._ht_video_vimeo_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_title.style.visibility=(Number(me._ht_video_vimeo_title.style.opacity)>0||!me._ht_video_vimeo_title.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_title.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_title.style.visibility="hidden";
					me._ht_video_vimeo_title.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_title.logicBlock_visible();
		me._ht_video_vimeo_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_title);
		el=me._ht_video_vimeo_bg=document.createElement('div');
		el.ggId="ht_video_vimeo_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_bg.style.transition='';
				if (me._ht_video_vimeo_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_bg.style.visibility="hidden";
					me._ht_video_vimeo_bg.ggVisible=false;
				}
				else {
					me._ht_video_vimeo_bg.style.visibility=(Number(me._ht_video_vimeo_bg.style.opacity)>0||!me._ht_video_vimeo_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_vimeo_bg.logicBlock_visible();
		me._ht_video_vimeo_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_vimeo_icon=document.createElement('div');
		els=me._ht_video_vimeo_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzE0MTQxNDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTM1LjgsMjYuNHYxMS4yaC0xNlYyNi40SDM1LjggTTQ0LjIsMjcuOHY4LjNMMzguOCwzM0wzNywzMmwxLjctMUw0NC4yLDI3LjggTTQ2LjIsMjQuNGwtOC41LDQuOXYtNC45aC0yMCYjeGQ7JiN4YTsmI3g5OyYjeDk7djE1LjJoMjB2LTQuOWw4LjUsNC45VjI0LjRMNDYuMiwyNC40eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_vimeo_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_vimeo_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6IzAwMDAwMDsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik0zNC40OCwyNy40M3Y5LjE0SDIwVjI3LjQzSDM0LjQ4TTQ0LDMwLjM1djMuM0w0MS4xNSwzMiw0NCwzMC4zNW00LTYuOTItOS41Miw1LjQ5VjIzLjQzSDE2VjQwLj'+
			'U3SDM4LjQ4VjM1LjA4TDQ4LDQwLjU3VjIzLjQzWiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_vimeo_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_vimeo_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_icon.onmouseenter=function (e) {
			me._ht_video_vimeo_icon__img.style.visibility='hidden';
			me._ht_video_vimeo_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_vimeo_icon']=true;
		}
		me._ht_video_vimeo_icon.onmouseleave=function (e) {
			me._ht_video_vimeo_icon__img.style.visibility='inherit';
			me._ht_video_vimeo_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_vimeo_icon']=false;
		}
		me._ht_video_vimeo_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo_bg.appendChild(me._ht_video_vimeo_icon);
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_bg);
		el=me._ht_video_vimeo_custom_image=document.createElement('div');
		els=me._ht_video_vimeo_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_vimeo_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_vimeo_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_vimeo_custom_image.ggAltText));
			me._ht_video_vimeo_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_vimeo_custom_image.ggText_untranslated = img;
			me._ht_video_vimeo_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_vimeo_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_vimeo_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_vimeo_custom_image.ggSubElement.src='';
			me._ht_video_vimeo_custom_image.ggSubElement.src=me._ht_video_vimeo_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_vimeo_custom_image.ggText != player._(me._ht_video_vimeo_custom_image.ggText_untranslated)) {
				me._ht_video_vimeo_custom_image.ggText = player._(me._ht_video_vimeo_custom_image.ggText_untranslated);
				me._ht_video_vimeo_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_vimeo_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_vimeo_custom_image.style.transition='';
				if (me._ht_video_vimeo_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_vimeo_custom_image.style.visibility=(Number(me._ht_video_vimeo_custom_image.style.opacity)>0||!me._ht_video_vimeo_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_vimeo_custom_image.ggSubElement.src=me._ht_video_vimeo_custom_image.ggText;
					me._ht_video_vimeo_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_vimeo_custom_image.style.visibility="hidden";
					me._ht_video_vimeo_custom_image.ggSubElement.src='';
					me._ht_video_vimeo_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible();
		me._ht_video_vimeo_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_vimeo_custom_image.clientWidth;
			var parentHeight = me._ht_video_vimeo_custom_image.clientHeight;
			var img = me._ht_video_vimeo_custom_image__img;
			var aspectRatioDiv = me._ht_video_vimeo_custom_image.clientWidth / me._ht_video_vimeo_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_vimeo_custom_image.ggScrollbars || currentWidth < me._ht_video_vimeo_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_vimeo_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_vimeo_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_vimeo_custom_image.ggScrollbars || currentHeight < me._ht_video_vimeo_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_vimeo_custom_image.scrollTop=currentHeight / 2 - me._ht_video_vimeo_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_vimeo.appendChild(me._ht_video_vimeo_custom_image);
		me._ht_video_vimeo.logicBlock_visible();
		me.elementMouseOver['ht_video_vimeo']=false;
		me._ht_video_vimeo_title.logicBlock_position();
		me._ht_video_vimeo_title.logicBlock_visible();
		me._ht_video_vimeo_bg.logicBlock_visible();
		me.elementMouseOver['ht_video_vimeo_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_vimeo_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_vimeo_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_vimeo_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_vimeo_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_vimeo_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_vimeo_title.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo_title.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_vimeo.logicBlock_visible();
				me._ht_video_vimeo_title.logicBlock_position();
				me._ht_video_vimeo_title.logicBlock_visible();
				me._ht_video_vimeo_bg.logicBlock_visible();
				me._ht_video_vimeo_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_vimeo_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_vimeo.logicBlock_visible();
			};
			me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 380px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_skin') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube.style.transition='';
				if (me._ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube.style.visibility=(Number(me._ht_video_youtube.style.opacity)>0||!me._ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube.ggVisible=true;
				}
				else {
					me._ht_video_youtube.style.visibility="hidden";
					me._ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube.logicBlock_visible();
		me._ht_video_youtube.onclick=function (e) {
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
					skin._media_popup_title.ggUpdateText=function() {
						var params = [];
						params.push(String(player._(me.hotspot.title)));
						var hs = player._("%1", params);
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				skin._media_popup_title.ggUpdateText();
				skin._media_popup_title.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				skin._video_youtube_popup.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_youtube_hs_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_image_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_pdf_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_vimeo_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_file_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('vis_video_url_hs_popup', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == false))
				)
			) {
				player.setVariableValue('controls_left_open', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				skin._youtube_popup_phone.ggInitMedia(player._(player._(me.hotspot.url)));
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_popup', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_youtube', true);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_info', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_image', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_pdf', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_vimeo', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_file', false);
			}
			if (
				(
					((player.getVariableValue('resp_phone') == true))
				)
			) {
				player.setVariableValue('vis_phone_video_url', false);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._ht_video_youtube_title.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_youtube']=false;
			me._ht_video_youtube_title.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_title=document.createElement('div');
		els=me._ht_video_youtube_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_video_youtube_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, 0px) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text poppins";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(20,20,20,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='transform : translate(-50%, 0px);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 8px;';
		hs+='font-size: 15px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 8px 8px 4px 8px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._ht_video_youtube_title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_video_youtube_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_video_youtube_title.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_video_youtube_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._ht_video_youtube_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._ht_video_youtube_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._ht_video_youtube_title.style.transition='left 0s, top 0s';
				if (me._ht_video_youtube_title.ggCurrentLogicStatePosition == 0) {
					me._ht_video_youtube_title.style.left = 'calc(50% - (0px / 2))';
					me._ht_video_youtube_title.style.top='-45px';
				}
				else {
					me._ht_video_youtube_title.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._ht_video_youtube_title.style.top='6px';
				}
			}
		}
		me._ht_video_youtube_title.logicBlock_position();
		me._ht_video_youtube_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) && 
				((player._(me.hotspot.title) != "")) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_title.style.transition='left 0s, top 0s';
				if (me._ht_video_youtube_title.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_title.style.visibility=(Number(me._ht_video_youtube_title.style.opacity)>0||!me._ht_video_youtube_title.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_title.ggVisible=true;
				}
				else {
					me._ht_video_youtube_title.style.visibility="hidden";
					me._ht_video_youtube_title.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_title.logicBlock_visible();
		me._ht_video_youtube_title.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_title);
		el=me._ht_video_youtube_bg=document.createElement('div');
		el.ggId="ht_video_youtube_bg";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #d2d2d2;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 16px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_bg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_bg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_bg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_bg.style.transition='';
				if (me._ht_video_youtube_bg.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_bg.style.visibility="hidden";
					me._ht_video_youtube_bg.ggVisible=false;
				}
				else {
					me._ht_video_youtube_bg.style.visibility=(Number(me._ht_video_youtube_bg.style.opacity)>0||!me._ht_video_youtube_bg.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_bg.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_bg.logicBlock_visible();
		me._ht_video_youtube_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_youtube_icon=document.createElement('div');
		els=me._ht_video_youtube_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHg9Ij'+
			'BweCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzE0MTQxNDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTM1LjgsMjYuNHYxMS4yaC0xNlYyNi40SDM1LjggTTQ0LjIsMjcuOHY4LjNMMzguOCwzM0wzNywzMmwxLjctMUw0NC4yLDI3LjggTTQ2LjIsMjQuNGwtOC41LDQuOXYtNC45aC0yMCYjeGQ7JiN4YTsmI3g5OyYjeDk7djE1LjJoMjB2LTQuOWw4LjUsNC45VjI0LjRMNDYuMiwyNC40eiIgY2xhc3M9InN0MCIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_youtube_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_youtube_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBkYXRhLW5hbWU9InF1YWRyYXRvIGNlbnRyYXRvcmUiIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCBzdHlsZT0iZmlsbDpub25lIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6IzAwMDAwMDsgZmlsbC1vcGFjaXR5OjEiIGQ9Ik0zNC40OCwyNy40M3Y5LjE0SDIwVjI3LjQzSDM0LjQ4TTQ0LDMwLjM1djMuM0w0MS4xNSwzMiw0NCwzMC4zNW00LTYuOTItOS41Miw1LjQ5VjIzLjQzSDE2VjQwLj'+
			'U3SDM4LjQ4VjM1LjA4TDQ4LDQwLjU3VjIzLjQzWiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_youtube_icon__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_youtube_icon";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_icon.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_icon.onmouseenter=function (e) {
			me._ht_video_youtube_icon__img.style.visibility='hidden';
			me._ht_video_youtube_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_youtube_icon']=true;
		}
		me._ht_video_youtube_icon.onmouseleave=function (e) {
			me._ht_video_youtube_icon__img.style.visibility='inherit';
			me._ht_video_youtube_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_youtube_icon']=false;
		}
		me._ht_video_youtube_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube_bg.appendChild(me._ht_video_youtube_icon);
		me._ht_video_youtube.appendChild(me._ht_video_youtube_bg);
		el=me._ht_video_youtube_custom_image=document.createElement('div');
		els=me._ht_video_youtube_custom_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_video_youtube_custom_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_video_youtube_custom_image.ggSubElement.setAttribute('alt', player._(me._ht_video_youtube_custom_image.ggAltText));
			me._ht_video_youtube_custom_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_video_youtube_custom_image.ggText_untranslated = img;
			me._ht_video_youtube_custom_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_video_youtube_custom_image.ggSubElement.style.width = '0px';
			me._ht_video_youtube_custom_image.ggSubElement.style.height = '0px';
			me._ht_video_youtube_custom_image.ggSubElement.src='';
			me._ht_video_youtube_custom_image.ggSubElement.src=me._ht_video_youtube_custom_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_video_youtube_custom_image.ggText != player._(me._ht_video_youtube_custom_image.ggText_untranslated)) {
				me._ht_video_youtube_custom_image.ggText = player._(me._ht_video_youtube_custom_image.ggText_untranslated);
				me._ht_video_youtube_custom_image.ggUpdateImage()
			}
		}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=el.ggText_untranslated=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.ggUpdateText();
		el.ggId="ht_video_youtube_custom_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube_custom_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_custom_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_custom_image.style.transition='';
				if (me._ht_video_youtube_custom_image.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_custom_image.style.visibility=(Number(me._ht_video_youtube_custom_image.style.opacity)>0||!me._ht_video_youtube_custom_image.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_custom_image.ggSubElement.src=me._ht_video_youtube_custom_image.ggText;
					me._ht_video_youtube_custom_image.ggVisible=true;
				}
				else {
					me._ht_video_youtube_custom_image.style.visibility="hidden";
					me._ht_video_youtube_custom_image.ggSubElement.src='';
					me._ht_video_youtube_custom_image.ggVisible=false;
				}
			}
		}
		me._ht_video_youtube_custom_image.logicBlock_visible();
		me._ht_video_youtube_custom_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_video_youtube_custom_image.clientWidth;
			var parentHeight = me._ht_video_youtube_custom_image.clientHeight;
			var img = me._ht_video_youtube_custom_image__img;
			var aspectRatioDiv = me._ht_video_youtube_custom_image.clientWidth / me._ht_video_youtube_custom_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_video_youtube_custom_image.ggScrollbars || currentWidth < me._ht_video_youtube_custom_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_video_youtube_custom_image.scrollLeft=currentWidth / 2 - me._ht_video_youtube_custom_image.clientWidth / 2;
			}
			if (!me._ht_video_youtube_custom_image.ggScrollbars || currentHeight < me._ht_video_youtube_custom_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_video_youtube_custom_image.scrollTop=currentHeight / 2 - me._ht_video_youtube_custom_image.clientHeight / 2;
			}
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_custom_image);
		me._ht_video_youtube.logicBlock_visible();
		me.elementMouseOver['ht_video_youtube']=false;
		me._ht_video_youtube_title.logicBlock_position();
		me._ht_video_youtube_title.logicBlock_visible();
		me._ht_video_youtube_bg.logicBlock_visible();
		me.elementMouseOver['ht_video_youtube_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_video_youtube_custom_image.style.width=hotspot.customimagewidth + 'px';
			me._ht_video_youtube_custom_image.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_video_youtube_custom_image.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_video_youtube_custom_image.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_video_youtube_custom_image.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_video_youtube_title.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_title.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_video_youtube.logicBlock_visible();
				me._ht_video_youtube_title.logicBlock_position();
				me._ht_video_youtube_title.logicBlock_visible();
				me._ht_video_youtube_bg.logicBlock_visible();
				me._ht_video_youtube_custom_image.logicBlock_visible();
			};
			me.ggEvent_hastouch=function() {
				me._ht_video_youtube_title.logicBlock_position();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._ht_video_youtube.logicBlock_visible();
			};
			me.__div = me._ht_video_youtube;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_video_youtube') {
				hotspot.skinid = 'ht_video_youtube';
				hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_vimeo') {
				hotspot.skinid = 'ht_video_vimeo';
				hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_url') {
				hotspot.skinid = 'ht_video_url';
				hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_pdf') {
				hotspot.skinid = 'ht_pdf';
				hsinst = new SkinHotspotClass_ht_pdf(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_url') {
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node_1';
				hsinst = new SkinHotspotClass_ht_node_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._btn_zoomout.ggUpdateConditionTimer();
		me._btn_zoomin.ggUpdateConditionTimer();
		me._btn_right.ggUpdateConditionTimer();
		me._btn_down.ggUpdateConditionTimer();
		me._btn_up.ggUpdateConditionTimer();
		me._btn_left.ggUpdateConditionTimer();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	hs='.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; -webkit-text-size-adjust: 100%; } .ggmarkdown p { margin-top: 0px; } .ggmarkdown a { color: #666; } .ggdefaulthotspot { font-family: "Poppins", sans-serif; font-size: 15px; -webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.7)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.7)); } .ggmarkdown h1:first-child, .ggmarkdown h2:first-child, .ggmarkdown h3:first-child, .ggmarkdown h4:first-child { margin-top: 0px; } .ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 1em; margin-bottom: 0.2em; } .ggmarkdown { white-space: normal; } .shadow { -webkit-filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.5)); filter: drop-shadow( 0px 0px 3px rgba(0, 0, 0, 0.5)); } .poppins { font-family: "Poppins", sans-serif; } .ggskin_text>div::-webkit-scrollbar { width: 5px; } .ggskin_text>div { scrollbar-width: thin; }@font-face { font-family: "Poppins"; font-style: normal; font-weight: 300; src: local(""), url("$(skinbase)fonts/poppins-latin-300.woff2") format("woff2"); } @font-face { font-family: "Poppins"; font-style: normal; font-weight: 400; src: local(""), url("$(skinbase)fonts/poppins-latin-regular.woff2") format("woff2"); } @font-face { font-family: "Poppins"; font-style: normal; font-weight: 600; src: local(""), url("$(skinbase)fonts/poppins-latin-600.woff2") format("woff2"); }';
	hs = hs.replace(/\$\(skinbase\)/g,basePath);
	style.appendChild(document.createTextNode(hs));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}