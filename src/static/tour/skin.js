// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: netov3.ggsk
// Generated 2026-01-10T20:44:25

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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSI0Nyw0NS45IDMzLDMyIDMzLDMyIDQ3LDE4LjEgJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIzMSw0NS45IDE3'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSI0Nyw0NS45IDMzLDMyIDMzLDMyIDQ3LDE4LjEgJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIzMSw0NS45IDE3'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIxNywxOC4xIDMxLDMyIDMxLDMyIDE3LDQ1LjkgJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIzMywxOC4xIDQ3'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIxNywxOC4xIDMxLDMyIDMxLDMyIDE3LDQ1LjkgJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8cG9seWxpbmUgcG9pbnRzPSIzMywxOC4xIDQ3'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB4Mj0iNDgiIHkyPSIzMiIgY2xhc3M9InN0MSIgeDE9IjE2IiB5MT0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_zoomout__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDI9IjQ4IiB5Mj0iMzIiIHgxPSIxNiIgeTE9IjMyIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KIDwvZz4KPC9zdm'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB4Mj0iNDgiIHkyPSIzMiIgY2xhc3M9InN0MSIgeDE9IjE2IiB5MT0iMzIiLz4KICA8bGluZSB4Mj0iMzIiIHkyPSI0OCIgY2xhc3M9InN0MSIgeDE9IjMyIiB5'+
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
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDI9IjQ4IiB5Mj0iMzIiIHgxPSIxNiIgeTE9IjMyIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4Mj'+
			'0iMzIiIHkyPSI0OCIgeDE9IjMyIiB5MT0iMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIzNC4xLDE4LjEgNDgsMzIgNDgsMzIgMzQuMSw0NS45ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeDI9IjQ2LjQiIHkyPSIzMiIg'+
			'Y2xhc3M9InN0MSIgeDE9IjE2IiB5MT0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzQuMDggMTguMDYgNDggMzIuMDEgNDggMzIuMDEgMzQuMDggNDUuOTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW'+
			'9wYWNpdHk6MSIvPgogIDxsaW5lIHgyPSI0Ni4zNiIgeTI9IjMyIiB4MT0iMTYiIHkxPSIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSI0NS45LDM0LjEgMzIsNDggMzIsNDggMTguMSwzNC4xICYj'+
			'eDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeDI9IjMyIiB5Mj0iNDYuNCIgY2xhc3M9InN0MSIgeDE9IjMyIiB5MT0iMTYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTQgMzQuMDggMzEuOTkgNDggMzEuOTkgNDggMTguMDYgMzQuMDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMD'+
			'AwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxsaW5lIHgyPSIzMiIgeTI9IjQ2LjM2IiB4MT0iMzIiIHkxPSIxNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIxOC4xLDI5LjkgMzIsMTYgMzIsMTYgNDUuOSwyOS45ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeDI9IjMyIiB5Mj0iMTcuNiIg'+
			'Y2xhc3M9InN0MSIgeDE9IjMyIiB5MT0iNDgiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_up__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguMDYgMjkuOTMgMzIuMDEgMTYgMzIuMDEgMTYgNDUuOTQgMjkuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW'+
			'9wYWNpdHk6MSIvPgogIDxsaW5lIHgyPSIzMiIgeTI9IjE3LjY0IiB4MT0iMzIiIHkxPSI0OCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIyOS45LDQ1LjkgMTYsMzIgMTYsMzIgMjkuOSwxOC4xICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeDI9IjE3LjYiIHkyPSIzMiIg'+
			'Y2xhc3M9InN0MSIgeDE9IjQ4IiB5MT0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjkuOTMgNDUuOTQgMTYgMzEuOTkgMTYgMzEuOTkgMjkuOTMgMTguMDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW'+
			'9wYWNpdHk6MSIvPgogIDxsaW5lIHgyPSIxNy42NCIgeTI9IjMyIiB4MT0iNDgiIHkxPSIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIi8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40'+
			'LDAsMjIuNiIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB4Mj0iNDcuOCIgeTI9IjE1LjgiIGNsYXNzPSJzdDAiIHgxPSIxNS44IiB5MT0iNDcuOCIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_audio_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_audio_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIi8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40'+
			'LDAsMjIuNiIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB4Mj0iNDcuOCIgeTI9IjE1LjgiIGNsYXNzPSJzdDAiIHgxPSIxNS44IiB5MT0iNDcuOCIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM0LjcsMTkuOCAyMy43LDI3LjUgMTYsMjcuNSAxNiwzNi41IDIzLjcsMzYuNSAzNC43LDQ0LjIgICIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zOS4xLDIzLjVjNC43LDQuNyw0LjcsMTIuMywwLDE3YzAsMCwwLDAsMCwwIi8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQzLjMsMjAuN2M2LjIsNi4yLDYuMiwxNi40'+
			'LDAsMjIuNiIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_audio_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_audio_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlnb24gcG9pbnRzPSIzNC42NiAxOS43NyAyMy43IDI3LjU1IDE2IDI3LjU1IDE2IDM2LjQ1IDIzLjcgMzYuNDUgMzQuNjYgNDQuMjMgMzQuNjYgMTkuNzciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybG'+
			'ltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxwYXRoIGQ9Ik0zOS4xMSwyMy40N2ExMiwxMiwwLDAsMSwwLDE3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8cGF0aCBkPSJNNDMuMzEsMjAuNjlhMTYsMTYsMCwwLDEsMCwyMi42MiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwoJLnN0MntkaXNwbGF5Om5vbmU7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8ZWxsaXBzZSBj'+
			'eT0iMzIiIGN4PSIzMyIgcng9IjguNiIgY2xhc3M9InN0MSIgcnk9IjE2Ii8+CiAgPGVsbGlwc2UgY3k9IjMyIiBjeD0iMzMiIHJ4PSIxNiIgY2xhc3M9InN0MSIgcnk9IjguNiIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB4Mj0iNDkuMiIgeTI9IjE3LjIiIHgxPSIxNy4yIiB5MT0iNDkuMiIgY2xhc3M9InN0MiIvPgogIDxsaW5lIHgyPSI0Ny44IiB5Mj0iMTUuOCIgeDE9IjE1LjgiIHkxPSI0Ny44IiBjbGFzcz0ic3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_gyro_off__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_gyro_off__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8ZWxsaXBzZSBjeT0iMzIiIGN4PSIzMyIgcng9IjguNiIgY2xhc3M9InN0MSIgcnk9IjE2Ii8+CiAgPGVsbGlwc2UgY3k9IjMyIiBjeD0iMzMiIHJ4PSIxNiIgY2xhc3M9'+
			'InN0MSIgcnk9IjguNiIvPgogPC9nPgogPGcgaWQ9ImJhcnJhIj4KICA8bGluZSB4Mj0iNDcuOCIgeTI9IjE1LjgiIHgxPSIxNS44IiB5MT0iNDcuOCIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8ZWxsaXBzZSBjeT0iMzIiIGN4PSIzMyIgcng9IjguNiIgY2xhc3M9InN0MSIgcnk9IjE2Ii8+CiAgPGVsbGlwc2UgY3k9IjMyIiBjeD0iMzMiIHJ4PSIxNiIgY2xhc3M9'+
			'InN0MSIgcnk9IjguNiIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_gyro_on__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_gyro_on__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGVsbGlwc2UgY3k9IjMyIiBjeD0iMzMiIHJ4PSI4LjYyIiByeT0iMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxlbG'+
			'xpcHNlIGN5PSIzMiIgY3g9IjMzIiByeD0iMTYiIHJ5PSI4LjYyIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMTQxNDE0O3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDQsMjIuNEgyMGMtMi4yLDAtNCwxLjctNCwzLjljMCwwLDAsMC4xLDAsMC4xdjExLjFjMCwyLjIsMS43LDQsMy45LDRjMCwwLDAu'+
			'MSwwLDAuMSwwaDUuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMSwwLDIuMS0wLjYsMi43LTEuNWwxLjgtNC43YzAuNC0xLDEuNS0xLjQsMi40LTEuMWMwLjUsMC4yLDAuOSwwLjYsMS4xLDEuMWwxLjgsNC43YzAuNiwwLjksMS42LDEuNSwyLjcsMS41SDQ0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi4yLDAsNC0xLjgsNC00YzAsMCwwLDAsMC0wLjFWMjYuNUM0OCwyNC4yLDQ2LjMsMjIuNCw0NCwyMi40QzQ0LDIyLjQsNDQsMjIuNCw0NCwyMi40eiBNMjQuNywzM2MtMC43LDAtMS4zLTAuNi0xLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjcsMC42LTEuMywxLjMtMS40YzAuNywwLDEuMywwLj'+
			'YsMS40LDEuM0MyNiwzMi40LDI1LjQsMzMsMjQuNywzM0MyNC43LDMzLDI0LjcsMzMsMjQuNywzM3ogTTM5LjYsMzNjLTAuNywwLTEuMy0wLjYtMS4zLTEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC43LDAuNi0xLjMsMS4zLTEuM3MxLjMsMC42LDEuMywxLjNjMCwwLDAsMCwwLDBDNDAuOSwzMi40LDQwLjQsMzMsMzkuNiwzM0MzOS42LDMzLDM5LjYsMzMsMzkuNiwzM3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_vr__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_vr__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTQ0LDIyLjRIMjAuMDVBNCw0LDAsMCwwLDE2LDI2LjQ1djExLjFhNCw0LDAsMCwwLDQuMDUsNC4wNWg1LjhhMy4xMywzLjEzLDAsMCwwLDIuNjctMS40OWwxLjc3LTQuN2ExLjg3LDEuODcsMCwwLDEsMy40OSwwbDEuNzgsNC43YT'+
			'MuMTEsMy4xMSwwLDAsMCwyLjY2LDEuNDlINDRhNCw0LDAsMCwwLDQtNC4wNVYyNi40NUE0LDQsMCwwLDAsNDQsMjIuNFpNMjQuNjgsMzNBMS4zNCwxLjM0LDAsMSwxLDI2LDMxLjY0LDEuMzMsMS4zMywwLDAsMSwyNC42OCwzM1ptMTQuOTMsMGExLjM0LDEuMzQsMCwxLDEsMS4zMy0xLjM0QTEuMzMsMS4zMywwLDAsMSwzOS42MSwzM1oiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSI0OCwyOC41IDM1LjUsMjguNSAzNS41LDI4LjUgMzUuNSwxNiAmI3g5OyIgY2xhc3M9InN0MSIvPgogIDxsaW5lIHgyPSIzNS41IiB5Mj0i'+
			'MjguNSIgY2xhc3M9InN0MSIgeDE9IjQ3LjciIHkxPSIxNi41Ii8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTYsMzUuNSAyOC41LDM1LjUgMjguNSwzNS41IDI4LjUsNDggJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8bGluZSB4Mj0iMjguNSIgeTI9IjM1LjUiIGNsYXNzPSJzdDEiIHgxPSIxNi40IiB5MT0iNDcuNSIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_fullscreen_exit__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_fullscreen_exit__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDggMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMTYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW'+
			'9wYWNpdHk6MSIvPgogIDxsaW5lIHgyPSIzNS41NCIgeTI9IjI4LjQ2IiB4MT0iNDcuNjUiIHkxPSIxNi40NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgMzUuNTQgMjguNDYgNDgiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxsaW5lIHgyPSIyOC40NiIgeTI9IjM1LjU0'+
			'IiB4MT0iMTYuMzUiIHkxPSI0Ny41NSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIzNS41LDE2IDQ4LDE2IDQ4LDE2IDQ4LDI4LjUgJiN4OTsiIGNsYXNzPSJzdDEiLz4KICA8bGluZSB4Mj0iNDgiIHkyPSIxNiIgY2xhc3M9'+
			'InN0MSIgeDE9IjM1LjkiIHkxPSIyOCIvPgogIDxwb2x5bGluZSBwb2ludHM9IjI4LjUsNDggMTYsNDggMTYsNDggMTYsMzUuNSAmI3g5OyIgY2xhc3M9InN0MSIvPgogIDxsaW5lIHgyPSIxNiIgeTI9IjQ4IiBjbGFzcz0ic3QxIiB4MT0iMjguMSIgeTE9IjM2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_fullscreen_enter__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_fullscreen_enter__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzUuNTQgMTYgNDggMTYgNDggMTYgNDggMjguNDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPg'+
			'ogIDxsaW5lIHgyPSI0OCIgeTI9IjE2IiB4MT0iMzUuODkiIHkxPSIyOCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjguNDYgNDggMTYgNDggMTYgNDggMTYgMzUuNTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxsaW5lIHgyPSIxNiIgeTI9IjQ4IiB4MT0iMjguMTEiIHkxPSIzNiIgc3R5bGU9ImZpbGw6bm9uZTtz'+
			'dHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSI0NS45LDMxLjcgMzIsNDUuNiAzMiw0NS42IDE4LjEsMzEuNyAmI3g5OyIgY2xhc3M9InN0MSIvPgogIDxsaW5lIHgyPSI0OCIgeTI9IjE4'+
			'LjQiIGNsYXNzPSJzdDEiIHgxPSIxNiIgeTE9IjE4LjQiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._btn_toggle_controls_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_toggle_controls_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iNDUuOTQgMzEuNyAzMS45OSA0NS42MyAzMS45OSA0NS42MyAxOC4wNiAzMS43IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm'+
			'9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4Mj0iNDgiIHkyPSIxOC4zNyIgeDE9IjE2IiB5MT0iMTguMzciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIzMiIgY3k9IjMyIiByPSIxLjMiLz4KICA8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIzMiIgY3k9IjIxLjMiIHI9IjEuMyIvPgog'+
			'IDxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjMyIiBjeT0iNDIuNyIgcj0iMS4zIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_toggle_controls_left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_toggle_controls_left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGNpcmNsZSBjeD0iMz'+
			'IiIGN5PSIyMS4zNCIgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSI0Mi42NiIgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		el.ggMapId = '_none';
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
		el.ggMapId = 'FloorPlan01';
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
		me._floorplan.ggCurrentLogicStateSize = -1;
		me._floorplan.ggCurrentLogicStateVisible = -1;
		me._floorplan.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._floorplan.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan.ggCalculateFloorplanSize(mapDetails);
				me._floorplan.ggShowSimpleFloorplan(mapDetails);
				me._floorplan.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan.ggRadar) me._floorplan.ggRadar.update();
		}
		me._floorplan.ggUpdatePosition=function (useTransition) {
			me._floorplan.ggUpdateConditionResize();
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIyOS45LDQ1LjkgMTYsMzIgMTYsMzIgMjkuOSwxOC4xICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeDI9IjE3LjYiIHkyPSIzMiIg'+
			'Y2xhc3M9InN0MSIgeDE9IjQ4IiB5MT0iMzIiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMjkuOTMgNDUuOTQgMTYgMzEuOTkgMTYgMzEuOTkgMjkuOTMgMTguMDYiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW'+
			'9wYWNpdHk6MSIvPgogIDxsaW5lIHgyPSIxNy42NCIgeTI9IjMyIiB4MT0iNDgiIHkxPSIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cmVjdCB3aWR0aD0iMTAuNyIgeD0iMTYiIGhlaWdodD0iMTAuNyIgY2xhc3M9InN0MSIgeT0iMzcuMyIvPgogIDxyZWN0IHdpZHRoPSIxMC43IiB4PSIzNy4zIiBoZWln'+
			'aHQ9IjEwLjciIGNsYXNzPSJzdDEiIHk9IjM3LjMiLz4KICA8cmVjdCB3aWR0aD0iMTAuNyIgeD0iMTYiIGhlaWdodD0iMTAuNyIgY2xhc3M9InN0MSIgeT0iMTYiLz4KICA8cmVjdCB3aWR0aD0iMTAuNyIgeD0iMzcuMyIgaGVpZ2h0PSIxMC43IiBjbGFzcz0ic3QxIiB5PSIxNiIvPgogPC9nPgo8L3N2Zz4K';
		me._btn_thumbs_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_thumbs_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHJlY3Qgd2lkdGg9IjEwLjY3IiB4PSIxNiIgaGVpZ2h0PSIxMC42NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5PSIzNy4zMy'+
			'IvPgogIDxyZWN0IHdpZHRoPSIxMC42NyIgeD0iMzcuMzMiIGhlaWdodD0iMTAuNjciIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIgeT0iMzcuMzMiLz4KICA8cmVjdCB3aWR0aD0iMTAuNjciIHg9IjE2IiBoZWlnaHQ9IjEwLjY3IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiIHk9IjE2Ii8+CiAgPHJlY3Qgd2lkdGg9IjEwLjY3IiB4PSIzNy4zMyIgaGVpZ2h0PSIxMC42'+
			'NyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIiB5PSIxNiIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzIsMTZjNS45LDAsMTAuNyw0LjgsMTAuNywxMC43bDAsMGMwLDYuOS01LjUsMTctMTAuNywyMS4zbDAsMGMtNS4xLTQuMy0xMC43'+
			'LTE0LjQtMTAuNy0yMS4zbDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjMsMjAuOCwyNi4xLDE2LDMyLDE2TDMyLDE2eiIvPgogIDxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjMyIiBjeT0iMjYuNyIgcj0iMS4zIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_map_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_map_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTMyLDE2QTEwLjY3LDEwLjY3LDAsMCwxLDQyLjY3LDI2LjY3aDBjMCw2LjkxLTUuNTMsMTctMTAuNjcsMjEuMzNoMGMtNS4xNC00LjM1LTEwLjY3LTE0LjQyLTEwLjY3LTIxLjMzaDBBMTAuNjcsMTAuNjcsMCwwLDEsMzIsMTZaIi'+
			'BzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8Y2lyY2xlIGN4PSIzMiIgY3k9IjI2LjY3IiByPSIxLjMzIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjI2LjcsMjEuMyAzNy4zLDE2IDQ4LDIxLjMgNDgsNDggMzcuMyw0Mi43IDI2LjcsNDggMTYsNDIuNyAxNiwxNiAgIiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeDI9IjM3'+
			'LjMiIHkyPSI0Mi43IiBjbGFzcz0ic3QxIiB4MT0iMzcuMyIgeTE9IjE2Ii8+CiAgPGxpbmUgeDI9IjI2LjciIHkyPSI0OCIgY2xhc3M9InN0MSIgeDE9IjI2LjciIHkxPSIyMS4zIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._btn_floorplan_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._btn_floorplan_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlnb24gcG9pbnRzPSIyNi42NyAyMS4zMyAzNy4zMyAxNiA0OCAyMS4zMyA0OCA0OCAzNy4zMyA0Mi42NyAyNi42NyA0OCAxNiA0Mi42NyAxNiAxNiAyNi42NyAyMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2'+
			'UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGxpbmUgeDI9IjM3LjMzIiB5Mj0iNDIuNjciIHgxPSIzNy4zMyIgeTE9IjE2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4Mj0iMjYuNjciIHkyPSI0OCIgeDE9IjI2LjY3IiB5MT0iMjEuMzMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogPC9n'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIzMiIgY3k9IjIwLjgiIHI9IjEuMyIvPgogIDxsaW5lIHgyPSIzMiIgeTI9IjQ3LjUiIGNsYXNzPSJzdDEiIHgxPSIzMiIgeTE9'+
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
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIyMC44NCIgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGxpbmUgeDI9Ij'+
			'MyIiB5Mj0iNDcuNSIgeDE9IjMyIiB5MT0iMzEuNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojM2QzZDNkO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIGN5PSIyMC44IiBjbGFzcz0ic3QxIiBjeD0iMzIiIHI9IjEuMyIvPgogIDxsaW5lIHgyPSIzMiIgeTI9IjQ3LjUiIHgxPSIzMiIgeTE9IjMxLjUiIGNsYXNz'+
			'PSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIzMiIgY3k9IjMyIiByPSIxLjMiLz4KICA8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIzMiIgY3k9IjIxLjMiIHI9IjEuMyIvPgog'+
			'IDxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjMyIiBjeT0iNDIuNyIgcj0iMS4zIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._toggle_controls_left_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._toggle_controls_left_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIzMiIgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGNpcmNsZSBjeD0iMz'+
			'IiIGN5PSIyMS4zNCIgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSI0Mi42NiIgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs+='left : 0px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB4Mj0iNDMuMyIgeTI9IjQzLjMiIGNsYXNzPSJzdDEiIHgxPSIyMC43IiB5MT0iMjAuNyIvPgogIDxsaW5lIHgyPSIyMC43IiB5Mj0iNDMuMyIgY2xhc3M9InN0'+
			'MSIgeDE9IjQzLjMiIHkxPSIyMC43Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._info_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDI9IjQzLjMxIiB5Mj0iNDMuMzEiIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz'+
			'4KICA8bGluZSB4Mj0iMjAuNjkiIHkyPSI0My4zMSIgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojMDAwMDAwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjEuNywyMS4yTDQwLjMsMzJMMjEuNyw0Mi44VjIxLjIgTTE5LjcsMTcuOHYyOC40TDQ0LjMsMzJDNDQuMywzMiwxOS43LDE3LjgsMTkuNywxNy44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_file_hs_popup_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_hs_popup_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTIyLjE0LDIyLjkzLDM3Ljg2LDMyLDIyLjE0LDQxLjA3VjIyLjkzbS00LTYuOTNWNDhMNDUuODYsMzIsMTguMTQsMTZaIiBzdHlsZT0iZmlsbDojMDAwMDAwOyBmaWxsLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojMDAwMDAwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjEuNywyMS4yTDQwLjMsMzJMMjEuNyw0Mi44VjIxLjIgTTE5LjcsMTcuOHYyOC40TDQ0LjMsMzJDNDQuMywzMiwxOS43LDE3LjgsMTkuNywxNy44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_url_hs_popup_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_hs_popup_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTIyLjE0LDIyLjkzLDM3Ljg2LDMyLDIyLjE0LDQxLjA3VjIyLjkzbS00LTYuOTNWNDhMNDUuODYsMzIsMTguMTQsMTZaIiBzdHlsZT0iZmlsbDojMDAwMDAwOyBmaWxsLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB4Mj0iNDMuMyIgeTI9IjQzLjMiIGNsYXNzPSJzdDEiIHgxPSIyMC43IiB5MT0iMjAuNyIvPgogIDxsaW5lIHgyPSIyMC43IiB5Mj0iNDMuMyIgY2xhc3M9InN0'+
			'MSIgeDE9IjQzLjMiIHkxPSIyMC43Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._media_popup_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._media_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDI9IjQzLjMxIiB5Mj0iNDMuMzEiIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz'+
			'4KICA8bGluZSB4Mj0iMjAuNjkiIHkyPSI0My4zMSIgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojMDAwMDAwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjEuNywyMS4yTDQwLjMsMzJMMjEuNyw0Mi44VjIxLjIgTTE5LjcsMTcuOHYyOC40TDQ0LjMsMzJDNDQuMywzMiwxOS43LDE3LjgsMTkuNywxNy44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_file_popup_phone_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_file_popup_phone_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0LjYsMjIuOUw0MC40LDMybC0xNS43LDkuMVYyMi45IE0yMC42LDE2djMybDI3LjctMTZMMjAuNiwxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDojMDAwMDAwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjEuNywyMS4yTDQwLjMsMzJMMjEuNyw0Mi44VjIxLjIgTTE5LjcsMTcuOHYyOC40TDQ0LjMsMzJDNDQuMywzMiwxOS43LDE3LjgsMTkuNywxNy44eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_url_popup_phone_play__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_url_popup_phone_play__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzAwMDAwMDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0LjYsMjIuOUw0MC40LDMybC0xNS43LDkuMVYyMi45IE0yMC42LDE2djMybDI3LjctMTZMMjAuNiwxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8bGluZSB4Mj0iNDMuMyIgeTI9IjQzLjMiIGNsYXNzPSJzdDEiIHgxPSIyMC43IiB5MT0iMjAuNyIvPgogIDxsaW5lIHgyPSIyMC43IiB5Mj0iNDMuMyIgY2xhc3M9InN0'+
			'MSIgeDE9IjQzLjMiIHkxPSIyMC43Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close_popup_phone__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close_popup_phone__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGxpbmUgeDI9IjQzLjMxIiB5Mj0iNDMuMzEiIHgxPSIyMC42OSIgeTE9IjIwLjY5IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz'+
			'4KICA8bGluZSB4Mj0iMjAuNjkiIHkyPSI0My4zMSIgeDE9IjQzLjMxIiB5MT0iMjAuNjkiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
			'AgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuc3QxIHsKICAgICAgICBsZXR0ZXItc3BhY2luZzogMGVtOwogICAgICB9CgogICAgICAuc3QxLCAuc3QyIHsKICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLUxpZ2h0LCBIZWx2ZXRpY2E7CiAgICAgICAgZm9udC1zaXplOiAxNDIuOXB4OwogICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7CiAgICAgIH0KCiAgICAgIC5zdDIgewogICAgICAgIGxldHRlci1zcGFjaW5nOiAwZW07CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8ZyBjbGFzcz0ic3QwIj4KICA8dGV4dCBjbGFzcz0ic3QyIiB0cmFuc2Zvcm09InRyYW5zbGF0'+
			'ZSg3MjIgMzQ4LjEpIj4KICAgPHRzcGFuIHg9IjAiIHk9IjAiPktvcmVhPC90c3Bhbj4KICA8L3RleHQ+CiAgPHRleHQgY2xhc3M9InN0MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzIyIDUxNS4zKSI+CiAgIDx0c3BhbiB4PSIwIiB5PSIwIj5JbnRlcm5hdGlvbmFsPC90c3Bhbj4KICA8L3RleHQ+CiAgPHRleHQgY2xhc3M9InN0MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzIyIDY4Mi41KSI+CiAgIDx0c3BhbiB4PSIwIiB5PSIwIj5TY2hvb2w8L3RzcGFuPgogIDwvdGV4dD4KIDwvZz4KIDxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik02MzIuNiw3MjUuOEg3OS41bC0yMCw5MS45aDU5My4xbC0yMC05MS'+
			'45WiIvPgogPHBhdGggY2xhc3M9InN0MyIgZD0iTTQ2MSwzMDguM3YxMzUuOWMwLDI5LjgsMjQuMiw1NC4xLDU0LDU0LjFoMzkuNXYxNDAuOWgtMzIuMnYtNzAuOGgtNjEuM3Y1OC40YzAsNDIuNywzNC43LDc3LjQsNzcuNCw3Ny40czc3LjQtMzQuNyw3Ny40LTc3LjR2LTEzNS45YzAtMjkuOC0yNC4zLTU0LTU0LTU0aC0zOS41di0xNDAuOWgzMi4ydjcwLjhoNjEuNHYtNTguNWMwLTQyLjctMzQuNy03Ny40LTc3LjQtNzcuNHMtNzcuNCwzNC44LTc3LjQsNzcuNGgwWiIvPgogPHBhdGggY2xhc3M9InN0MyIgZD0iTTM4NC4zLDIzNC42aC01OC45djQ2NS44aDYxLjNWMjM0LjZoLTIuNFoiLz4KIDxw'+
			'YXRoIGNsYXNzPSJzdDMiIGQ9Ik0yMjAuMiw0MzEuNWwzNi0xNTYuMWMyLjgtMTIuMiw5LjQtMjAuNiwxNy4xLTI5LjZsOS42LTExLjJoLTY1LjZsLTMuOCw0LjljLTcuMyw5LjYtMTQuOSwxOS40LTE4LjcsMzUuOCwwLDAtMzYuMiwxNTYuNy0zNy4zLDE2MS40di0yMDIuMmgtNjEuM3Y0NjUuOGg2MS4zdi0yMDIuMmgzMi4ydjE2MS40YzAsMTMuNSw1LjksMjcuNiwxMC45LDM2LjlsMiwzLjhoNjQuOGwtNi0xMC44Yy01LjQtOS43LTEwLjQtMTguOC0xMC40LTMwdi0xNTAuNGMwLTM3LjktNDIuNS00MS01NC4xLTQyLDEyLjItOC42LDE5LjUtMTkuNywyMy4yLTM1LjdoMFoiLz4KIDxwYXRoIGNsYX'+
			'NzPSJzdDMiIGQ9Ik01OS41LDEzMy45djY5aDU5My4xdi02OWwtMjk2LjUtNDEuM0w1OS41LDEzMy45WiIvPgo8L3N2Zz4K';
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
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
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
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 54px;';
		hs+='left : calc(50% - ((434px + 0px) / 2) + 0%);';
		hs+='position : absolute;';
		hs+='top : 3%;';
		hs+='visibility : inherit;';
		hs+='width : 434px;';
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
		me._map.ggInitMap=function() {};
		me._map.ggInitMapMarkers=function() {};
		me._map.ggClearMap=function() {};
		me._map.logicBlock_size();
		me._map.logicBlock_visible();
		me._floorplan.ggMarkerInstances=[];
		me._floorplan.ggLastNodeId=null;
		me._floorplan.ggSimpleFloorplanMarkerArray=[];
		me._floorplan.ggFloorplanWidth=0;
		me._floorplan.ggFloorplanHeight=0;
		me._floorplan__mapdiv=document.createElement('div');
		me._floorplan__mapdiv.className='ggskin ggskin_map';
		me._floorplan.appendChild(me._floorplan__mapdiv);
		me._floorplan__img=document.createElement('img');
		me._floorplan__img.className='ggskin ggskin_map';
		me._floorplan__mapdiv.appendChild(me._floorplan__img);
		me._floorplan.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._floorplan.ggRadar.update=function() {
			var radar=me._floorplan.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._floorplan.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._floorplan.ggFilteredIds.length > 0 && me._floorplan.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._floorplan.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._floorplan.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._floorplan__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',400);
				radar.radarElement.setAttributeNS(null,'height',400);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 400 400');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 200 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 200 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 200 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 200 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 200;
				arcY1 += 200;
				arcX2 += 200;
				arcY2 += 200;
				var radarPathString = 'M200,200 L' + arcX1 + ',' + arcY1 + ' A 200 200 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#282828');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#282828');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._floorplan__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 200;
				var radarYPos = activeMarker.radarYPos - 200;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._floorplan.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._floorplan__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._floorplan.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._floorplan.clientWidth;
			var mapHeight = me._floorplan.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._floorplan.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._floorplan__img.setAttribute('src', imageFilename);
			me._floorplan__img.setAttribute('loading', 'lazy');
		me._floorplan__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._floorplan.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._floorplan.ggFloorplanHeight / 2 + 'px;width:' + me._floorplan.ggFloorplanWidth + 'px;height:' + me._floorplan.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._floorplan__img.setAttribute('style','width:' + me._floorplan.ggFloorplanWidth + 'px;height:' + me._floorplan.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._floorplan.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._floorplan.clientWidth / me._floorplan.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._floorplan.ggFloorplanHeight = me._floorplan.clientHeight;
				me._floorplan.ggFloorplanWidth = me._floorplan.ggFloorplanHeight * floorplanAR;
			} else {
				me._floorplan.ggFloorplanWidth = me._floorplan.clientWidth;
				me._floorplan.ggFloorplanHeight = me._floorplan.ggFloorplanWidth / floorplanAR;
			}
		}
		me._floorplan.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._floorplan.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._floorplan.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._floorplan.ggPermeableMap = true;
			} else {
				me._floorplan.ggPermeableMap = false;
			}
			me._floorplan.ggCalculateFloorplanSize(mapDetails);
			me._floorplan.ggShowSimpleFloorplan(mapDetails);
			me._floorplan.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._floorplan.ggMapNotLoaded = false;
		}
		me._floorplan.ggClearMap=function() {
			me._floorplan.ggClearMapMarkers();
			me._floorplan.ggMapNotLoaded = true;
		}
		me._floorplan.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplan.ggMapId = mapId;
			if (!me._floorplan.ggMapNotLoaded) {
				me._floorplan.ggClearMap();
				me._floorplan.ggInitMap();
				me._floorplan.ggInitMapMarkers();
			}
		}
		me._floorplan.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._floorplan.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._floorplan.ggMapId);
					var xPos = (me._floorplan.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._floorplan.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._floorplan.ggHMarkerAnchorOffset;
					yPos -= me._floorplan.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._floorplan.style['z-index'] + 2;
				}
			}
		}
		me._floorplan.ggInitMapMarkers=function() {
			me._floorplan.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplan.ggFilteredIds = [];
			if (me._floorplan.ggFilter != '') {
				var filter = me._floorplan.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplan.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplan.ggFilteredIds.length > 0) ids = me._floorplan.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._floorplan.ggMapId);
				if (coords.length>=2) {
					me._floorplan.ggHMarkerAnchorOffset = 16;
					me._floorplan.ggVMarkerAnchorOffset = 16;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._floorplan.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._floorplan.ggSimpleFloorplanMarkerArray[id] = marker;
					me._floorplan__mapdiv.appendChild(marker);
				}
			}
			me._floorplan.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._floorplan);
		}
		me._floorplan.ggClearMapMarkers=function() {
			for (id in me._floorplan.ggSimpleFloorplanMarkerArray) {
				if (me._floorplan.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._floorplan__mapdiv.removeChild(me._floorplan.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._floorplan.ggMarkerInstances=[];
			me._floorplan.ggSimpleFloorplanMarkerArray=[];
		}
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
			if (hotspotTemplates.hasOwnProperty('doorright')) {
				for(var i = 0; i < hotspotTemplates['doorright'].length; i++) {
					hotspotTemplates['doorright'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('upnode')) {
				for(var i = 0; i < hotspotTemplates['upnode'].length; i++) {
					hotspotTemplates['upnode'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('downnode')) {
				for(var i = 0; i < hotspotTemplates['downnode'].length; i++) {
					hotspotTemplates['downnode'][i].ggEvent_activehotspotchanged();
				}
			}
			if (hotspotTemplates.hasOwnProperty('doorleft')) {
				for(var i = 0; i < hotspotTemplates['doorleft'].length; i++) {
					hotspotTemplates['doorleft'][i].ggEvent_activehotspotchanged();
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
			if (hotspotTemplates.hasOwnProperty('doorright')) {
				for(var i = 0; i < hotspotTemplates['doorright'].length; i++) {
					hotspotTemplates['doorright'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('upnode')) {
				for(var i = 0; i < hotspotTemplates['upnode'].length; i++) {
					hotspotTemplates['upnode'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('downnode')) {
				for(var i = 0; i < hotspotTemplates['downnode'].length; i++) {
					hotspotTemplates['downnode'][i].ggEvent_changenode();
				}
			}
			if (hotspotTemplates.hasOwnProperty('doorleft')) {
				for(var i = 0; i < hotspotTemplates['doorleft'].length; i++) {
					hotspotTemplates['doorleft'][i].ggEvent_changenode();
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
			me._floorplan.logicBlock_size();
			me._floorplan.logicBlock_visible();
			for (var i=0; i < me._floorplan.ggMarkerInstances.length; i++) {
				me._floorplan.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._floorplan.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplan.ggCalculateFloorplanSize(mapDetails);
				me._floorplan.ggShowSimpleFloorplan(mapDetails);
				me._floorplan.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplan.ggRadar) me._floorplan.ggRadar.update();
			if (me._floorplan.ggLastNodeId) {
				var lastActiveMarker = me._floorplan.ggSimpleFloorplanMarkerArray[me._floorplan.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._floorplan.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._floorplan.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplan.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplan.ggChangeMap(mapId);
					}
				}
			}
			me._floorplan.ggLastNodeId = id;
			me._floorplan.ggRadar.update();
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
			if (hotspotTemplates.hasOwnProperty('doorright')) {
				for(var i = 0; i < hotspotTemplates['doorright'].length; i++) {
					hotspotTemplates['doorright'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('upnode')) {
				for(var i = 0; i < hotspotTemplates['upnode'].length; i++) {
					hotspotTemplates['upnode'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('downnode')) {
				for(var i = 0; i < hotspotTemplates['downnode'].length; i++) {
					hotspotTemplates['downnode'][i].ggEvent_changevisitednodes();
				}
			}
			if (hotspotTemplates.hasOwnProperty('doorleft')) {
				for(var i = 0; i < hotspotTemplates['doorleft'].length; i++) {
					hotspotTemplates['doorleft'][i].ggEvent_changevisitednodes();
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
			if (hotspotTemplates.hasOwnProperty('doorright')) {
				for(var i = 0; i < hotspotTemplates['doorright'].length; i++) {
					hotspotTemplates['doorright'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('upnode')) {
				for(var i = 0; i < hotspotTemplates['upnode'].length; i++) {
					hotspotTemplates['upnode'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('downnode')) {
				for(var i = 0; i < hotspotTemplates['downnode'].length; i++) {
					hotspotTemplates['downnode'][i].ggEvent_configloaded();
				}
			}
			if (hotspotTemplates.hasOwnProperty('doorleft')) {
				for(var i = 0; i < hotspotTemplates['doorleft'].length; i++) {
					hotspotTemplates['doorleft'][i].ggEvent_configloaded();
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
			me._floorplan.logicBlock_size();
			me._floorplan.logicBlock_visible();
			if (me._floorplan.ggVisible) {
				me._floorplan.ggClearMap();
				me._floorplan.ggInitMap(false);
				me._floorplan.ggInitMapMarkers(true);
			}
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
			me._floorplan.ggRadar.update();
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
			if (hotspotTemplates.hasOwnProperty('doorright')) {
				for(var i = 0; i < hotspotTemplates['doorright'].length; i++) {
					hotspotTemplates['doorright'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('upnode')) {
				for(var i = 0; i < hotspotTemplates['upnode'].length; i++) {
					hotspotTemplates['upnode'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('downnode')) {
				for(var i = 0; i < hotspotTemplates['downnode'].length; i++) {
					hotspotTemplates['downnode'][i].ggEvent_varchanged_vis_skin();
				}
			}
			if (hotspotTemplates.hasOwnProperty('doorleft')) {
				for(var i = 0; i < hotspotTemplates['doorleft'].length; i++) {
					hotspotTemplates['doorleft'][i].ggEvent_varchanged_vis_skin();
				}
			}
			me._controls_container.logicBlock_visible();
		});
		player.addListener('varchanged_vis_sounds_splashscreen', function(event) {
			me._variable_vis_skin.logicBlock();
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNEMkQyRDI7fQoJLnN0MXtmaWxsOm5vbmU7fQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KIDxnIGlkPSJoaWdobGlnaHQiPgogIDxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjMyIiBjeT0iMzIiIHI9IjMxIi8+CiA8L2c+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSI+CiAgPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBjbGFzcz0ic3QxIi8+CiA8L2c+CiA8ZyBpZD0iaWNvbmEi'+
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
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzQuMDggMTguMDYgNDggMzIuMDEgNDggMzIuMDEgMzQuMDggNDUuOTQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW'+
			'9wYWNpdHk6MSIvPgogIDxsaW5lIHgyPSI0Ni4zNiIgeTI9IjMyIiB4MT0iMTYiIHkxPSIzMiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
	function SkinHotspotClass_doorleft(parentScope,hotspot) {
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
		el=me._doorleft=document.createElement('div');
		el.ggId="doorleft";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 438px;';
		hs+='position : absolute;';
		hs+='top : 235px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._doorleft.ggIsActive=function() {
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
		me._doorleft.logicBlock_visible = function() {
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
			if (me._doorleft.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._doorleft.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._doorleft.style.transition='';
				if (me._doorleft.ggCurrentLogicStateVisible == 0) {
					me._doorleft.style.visibility=(Number(me._doorleft.style.opacity)>0||!me._doorleft.style.opacity)?'inherit':'hidden';
					me._doorleft.ggVisible=true;
				}
				else {
					me._doorleft.style.visibility="hidden";
					me._doorleft.ggVisible=false;
				}
			}
		}
		me._doorleft.logicBlock_visible();
		me._doorleft.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._doorleft.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._doorleft.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['doorleft']=true;
			me._ht_node_preview_bg.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._doorleft.onmouseleave=function (e) {
			me.elementMouseOver['doorleft']=false;
			me._ht_node_preview_bg.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._doorleft.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_bg=document.createElement('div');
		el.ggId="ht_node_preview_bg";
		el.ggDx=3;
		el.ggDy=-65;
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
		hs+='left : calc(50% - ((184px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((118px + 0px) / 2) - 65px);';
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
				((me.elementMouseOver['doorleft'] == true)) && 
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
		me._doorleft.appendChild(me._ht_node_preview_bg);
		el=me._ht_node_bg=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=1;
		el.ggDy=1;
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
		hs+='left : calc(50% - ((83px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((85px + 0px) / 2) + 1px);';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO30mI3hkOwoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMzEiLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGNsYXNzPSJzdDEiLz4K'+
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
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFAmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QW'+
			'RzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI1LTEwLTI2PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjc1ZTYwN2RjLTQxNGItNGQ2YS1hMWU2LWFiOWZhYzczMWU2MTwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6'+
			'RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5VbnRpdGxlZCBkZXNpZ24gLSAzPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPkpheWRlbiBEb25naHdhbiBLaW08L3BkZjpBdXRob3I+CiA8L3JkZj'+
			'pEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YSAoUmVuZGVyZXIpIGRvYz1EQUcyNFZaYV9abyB1c2VyPVVBRDc4VnNDRVUwIGJyYW5kPUtvcmVhIEludGVybmF0aW9uYWwgU2Nob29sLSBTdHVkZW50cyAodXNlZCB0byBhY2Nlc3MgcHJldmlvdXMgZGVzaWducyBvbmx5KSB0ZW1wbGF0ZT08L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+wbiZeQAA'+
			'C8FJREFUeJzs2j/KHWUYh+Fn7CxdgK2bcRUuTLfgl5DCQiGVlY2FnaVVOkEFQXhTfIJDIIXJ+ffeXFd9Zs7T3Qz8jgEAtnfc+wAA4OMJOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABA'+
			'g6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEfHLvA4AP'+
			's9b6Yq31tP7zZq319Vrry3vfBtyeL3TY0Frrs5n5eWY+f89P/pyZ72bmxcy8PI7j91vdBtyHoMOG1lrfzMxX/+ORH2bm25l5cRzHb9e5CrgnQYcNrbX+mplPP/Dxn2bmaWaejuP45XJXAfck6LChtda60Kt+nX/jPjM/HsdxqfcCNybosKELBv3szcy8nOe4f38cx99X+A/gSgQdNnSloJ/9Mc+juqeZeWVUB49P0GFDNwj62T8z83qe425UBw9K0GFDNw76u4zq4AEJOmzozkE/M6qDByHosKEHCvqZUR3ckaDDhh406GdGdXBjgg4b2iDoZ0Z1cAOCDhvaLOjvMqqDKxB02NDmQT8zqoMLEXTYUCjoZ0Z18BHeAgAA///s3TGLHVUcxuH/CaazE2IUWz+BSNKkEEHBUrTRwsZPkUKrfAsFC9u0sUhhYaUgilimlC'+
			'AiNoI2wkmxC2rcnRuyO/cc3/M8sM0Oe/eF2cuPGYa7gs6yeu/Xq+qTqrpZVc8NnvMvrbXN92Zo0P/pj6q6VyeB9+9f4QkIOks6jfl3VXV99JazCPp/+PevcICgs6Te++dV9f7oHecR9E3f1t9x/3H0GJiFoLOk3vvDqnph9I7zCPoT81AdnBJ0ljR7EAX9qXxfVe+21h6MHgIjCDpLmj2Igv7UfqqqV1prv4weAsd2ZfQAgEv0UlXdGT0CRnCFzpJmv8J1hX4hP7fWpn0+AvYi6CzpUBAPBXU0Qd82+/mDPbjlDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQ'+
			'dAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEEHgACCDgABBB0AAgg6AAQQdAAIIOgAEEDQASCAoANAAEGHdfxZVber6uXTr4/GzgEuUxs9AEbovfet4621qd8bh/af443W2v3HXuftqrp7OavmMfv5gz34o2dJCwb9i9baW+e81jdV9erFV81j9vMHe3DLHdbw6caxz441AtiPoMMavtw49tXRVgC7cVuKJS14y/1Ka+3Mn+m9P1tVv1981TxmP3+wB1fosIarG8f+OtoKYDeCDmu4tnHsxa'+
			'OtAHYj6LCGWxvHXjvaCmA3gg5r+GDj2IdHWwHsRtBhDW/23l9//Ju993eq6uaAPcAl8yQoS1rwKfeqk49+/bhOPhnualW9V6Ef/zr7+YM9+KNnSYsGfRmznz/Yg1vuABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABBB4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQABB'+
			'B4AAgg4AAQQdAAIIOgAEEHQACCDoABBA0AEggKADQIBnRg+AGfXe+8jf31prI38/8P/jCh0AAgg6AAQQdAAIIOis6uHoAezm19EDYARBZ1X3Rw9gN1+PHgAjeJKWJfXen6+qH6rq2ugtZzn0lPvop/An9ltV3WitPRg9BI7tEQAAAP//7d2xTR1BFEDRtyUQOXBM7gpowGXQhKtyiERmmQosV+EEOvA6MBIJAmM+7N/7z5Emm5Emu3oT7JrQOUnLsvyamU8zczUzdxtfh8O4npkLMedUmdBhh0zo83v+vrB8u183y7Lcbnkh2JoPywB7IODwDEEHjpGAwwsJOnAMBBxeSdCBLQg4HJigA+9BwOGNCTrwFgQc3pmgA4cg4LAxQQf+h4DDkRF04F8IOBw5QQceI+CwM4IOzAg47J6gwz7dzczZK84LOMQIOuzT15m5fO'+
			'GZH/MQ8O8CDi3+tgY7tK7r2cz8nJmPT2wTcDghgg47ta7r+cx8mZnPM/NhBBxOmqADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKAD'+
			'QICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAgKADQICgA0CAoANAwB+uT52mfkR8hwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 156px;';
		hs+='left : -51px;';
		hs+='position : absolute;';
		hs+='top : -37px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
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
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg.appendChild(me._image_4);
		me._doorleft.appendChild(me._ht_node_bg);
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
		me._doorleft.appendChild(me._ht_node_custom_image);
		me._doorleft.logicBlock_visible();
		me.elementMouseOver['doorleft']=false;
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
				me._doorleft.logicBlock_visible();
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
				me._doorleft.logicBlock_visible();
				me._ht_node_preview_bg.logicBlock_visible();
				me._ht_node_preview_title.logicBlock_visible();
				me._ht_node_bg.logicBlock_visible();
				me._ht_node_custom_image.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._doorleft.logicBlock_visible();
			};
			me.__div = me._doorleft;
	};
	function SkinHotspotClass_downnode(parentScope,hotspot) {
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
		el=me._downnode=document.createElement('div');
		el.ggId="downnode";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 438px;';
		hs+='position : absolute;';
		hs+='top : 235px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._downnode.ggIsActive=function() {
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
		me._downnode.logicBlock_visible = function() {
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
			if (me._downnode.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._downnode.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._downnode.style.transition='';
				if (me._downnode.ggCurrentLogicStateVisible == 0) {
					me._downnode.style.visibility=(Number(me._downnode.style.opacity)>0||!me._downnode.style.opacity)?'inherit':'hidden';
					me._downnode.ggVisible=true;
				}
				else {
					me._downnode.style.visibility="hidden";
					me._downnode.ggVisible=false;
				}
			}
		}
		me._downnode.logicBlock_visible();
		me._downnode.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._downnode.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._downnode.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['downnode']=true;
			me._ht_node_preview_bg0.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._downnode.onmouseleave=function (e) {
			me.elementMouseOver['downnode']=false;
			me._ht_node_preview_bg0.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._downnode.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_bg0=document.createElement('div');
		el.ggId="ht_node_preview_bg";
		el.ggDx=3;
		el.ggDy=-65;
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
		hs+='left : calc(50% - ((184px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((118px + 0px) / 2) - 65px);';
		hs+='visibility : hidden;';
		hs+='width : 184px;';
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
				((me.elementMouseOver['downnode'] == true)) && 
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
		me._downnode.appendChild(me._ht_node_preview_bg0);
		el=me._ht_node_bg0=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=1;
		el.ggDy=1;
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
		hs+='left : calc(50% - ((83px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((85px + 0px) / 2) + 1px);';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO30mI3hkOwoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMzEiLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGNsYXNzPSJzdDEiLz4K'+
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
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFAmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QW'+
			'RzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI1LTEwLTI2PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmZmNWM0ZDI1LTFjNmEtNDE5MC1iZWQzLTYwYmIxMmNkODZlZDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6'+
			'RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5VbnRpdGxlZCBkZXNpZ24gLSAyPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPkpheWRlbiBEb25naHdhbiBLaW08L3BkZjpBdXRob3I+CiA8L3JkZj'+
			'pEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YSAoUmVuZGVyZXIpIGRvYz1EQUcyNFZaYV9abyB1c2VyPVVBRDc4VnNDRVUwIGJyYW5kPUtvcmVhIEludGVybmF0aW9uYWwgU2Nob29sLSBTdHVkZW50cyAodXNlZCB0byBhY2Nlc3MgcHJldmlvdXMgZGVzaWducyBvbmx5KSB0ZW1wbGF0ZT08L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+GthrKwAA'+
			'IRNJREFUeJzs3U2o5XUdx/HP1x6ULCxLijR6sFkMSbTRRQROElgpCZUQYpsewGpRi6SojRkUURCRELUaiiLCRZlgFCElighBKUUPYoKZTpFWCDkh/VqcS0wyD8c7997fPd//6wWzmpnz++ze/M69538qAMDGq9kDAIDTJ+gA0ICgA0ADgg4ADQg6ADQg6ADQgKADQAOCDgANCDoANCDoANCAoANAA4IOAA0IOgA0IOgA0ICgA0ADgg4ADQg6ADQg6ADQgKADQAOCDgANCDoANCDoANCAoANAA4IOAA0IOgA0IOgA0ICgA0ADgg4ADQg6ADQg6ADQgKADQAOCDgANCDoANCDoANCAoANAA4IOAA0IOgA0IOgA0ICgA0ADgg4ADQg6ADQg6ADQgKADQAOCDgANCDoANCDoANCAoANAA4IOAA0IOgA0IOgA0ICgA0ADgg'+
			'4ADQg6ADQg6ADQgKADQAOCDgANCDoANCDoANCAoANAA4IOAA0IOgA0IOgA0ICgA0ADgg4ADQg6ADQg6ADQgKADQAOCDgANCDoANCDoANCAoANAA4IOAA0IOgA0IOgA0ICgA0ADgg4ADQg6ADQg6ADQgKADQAOCDgANCDoANCDoANCAoANAA4IOAA0IOgA0IOgA0ICgA0ADgg4ADQg6ADQg6ADQgKADQAOCDgANCDoANCDoANCAoANAA4IOAA0IOgA0IOgA0ICgA0ADgg4ADQg6ADQg6ADQgKADQAOCDgANCDoANCDoANCAoANAA4IOAA0IOgA0IOiwpjHGs5KcmeS5x/nro0mOVtV/9nYVwIqgw0mMMd6e5B1JLktyYI3/cl+S25PcXFV37OY2gGMJOjzNGOP8JB9M8v4kF5zGS/0uyTeSHK6qx3ZiG8CJCDps2XpL'+
			'/fokNyZ5zg6+9BNJPlJV39zB1wT4P4IO+d+t/HtJ3riLx3w/yfuq6vFdPANYKEFn8cYYlyb5bpKX7cFxf0jyrqq6bw/OAhbkjNkDYKYxxgeS/Dh7E/Nk9Yt1d48xrtqj84CFcENnscYY1yX52qTjn8rqpn7LpPOBZgSdRRpjXJnkB5n7LtWTSS6tqnsmbgCaEHQWZ4zxoiS/yd69zX4y9ya5uKr+PXsIsNn8DJ0l+nL2R8yT5PVJPjV7BLD53NBZlDHGoaye5LafHE1yoKoemj0E2Fxu6CzNDbMHHMeZST47ewSw2dzQWYwxxluT3DZ7xwk8leRgVd0/ewiwmdzQWZL3zB5wEs9Ocu3sEcDmckNnEcYYZyc5kuTs2VtO4oEkr62qMXsIsHnc0FmKi7O/Y54kr0nyytkjgM0k6CzFm2YPWNNbZg8ANpOgsxQXzR6wpk'+
			'3ZCewzgs5SHJw9YE0Xzh4AbCZBZyleOnvAms6bPQDYTILOUrxw9oA1bcpOYJ8RdJbi77MHrGlTdgL7jKCzFE/OHrCmTdkJ7DOCzlI8OHvAmh6dPQDYTILOUvx29oA1/XL2AGAzCTpLcffsAWsSdGBbPMudRRhjvCrJH2fvOIWjSc6pqqOzhwCbxw2dRaiqB5P8avaOU/iRmAPbJegsyeHZA07h8OwBwObyljuLMcY4N8lDSZ43e8txPJzkQFX9a/YQYDO5obMYVfVYkm/N3nECN4k5cDrc0FmUMcYrkvw6yQtmbznGn5IcrKonZg8BNpcbOotSVQ8l+czsHU/zMTEHTpcbOoszxjgjya1J3jZ7S5KvV9V1s0cAm0/QWaQxxvOT/DTJJRNn3FJVV008H2hE0FmsMcaLk9yR5OCE43+e5PKq8mUswI7wM3QWq6r+luSy'+
			'7P1z3u9KcoWYAztJ0Fm0qno0yaEkP9ujI2/O6mbul+CAHSXoLF5VHamqQ0k+nWS3Pgv+eJIPVdXVYg7sBj9Dh2OMMS5I8rkk793Bl/1Kkhu3HmwDsCsEHY5jjHFRkk8keXeSs7bxEv9M8p0kX9j6YhiAXSXocBJjjHOy+rz6m5O8Icmrk5x3nH/6SFZfz/qLJLdn9c1pHuUK7BlBh20YYxzIKuyPVNV+/551YAEEHQAaEHQAaEDQYQeNMS5P8rokF279OSPJX5P8Jcn9SX5SVb+ftxDoStDhNI0xDib5cFYfdTtnjf/yQFaPfr0zyQ+r6sguzgMWQtBhm8YYL8nqM+bXnOZL3ZTkhq1H0QJsi6DDNowxrkny1STn7tBL/jnJ1VV11w69HrAwHv0Kz9AY4+NJvp2di3mSvDzJnWOMT+7gawIL4oYOz8BWzL+4y8fclu'+
			'Raj4oFnglBhzVt3Z4/v0fHPZzknVV1zx6dB2w4QYc1jDGuSHLrhKOvr6ovTTgX2DCCDqcwxjgrq8+Qnz9pwq1ZvQX/j0nnAxvAL8XBqX0082KeJFcmuXeMccnEDcA+918AAAD//+zda7RdVXnG8ecdpS0xcguKF8QcEEItRkCkmHKpFwQcKEhBTKEiFmsriFYcQmlLrZdhUSzWArWKdQAGlSK23CxSb0NQohgiKlqkXgARIw0hAgEd2qcf9o5r5+Tsc/bZa84919r7//ty4HD2O18GIzxnXtZczNCBWdjeWtLdkrYu3UvXGyPiH0s3AaB5mKEDs/sbNSfMJem9tq/svtYVAH6NGTrQh+0dJf2odB993CXppRGxunQjAJqBGTrQ39tKNzCLp0q6xfappRsB0AzM0IEZ2F4i6fbSfQzoKnVOwT9YuhEA5TBDB2b27tIN'+
			'zMMRkm61vXfpRgCUQ6AD09jeX9KRpfuYp53VWYJ/belGAJTBkjswje2vSdqndB81fELSiRHxcOlGAIwOM3Sgh+2XqN1hLknHSFpte2npRgCMDjN0oIft2yUtKd1HIo9Ken1EXFi6EQD5MUMHumy/SuMT5pK0paQP2r7U9sLSzQDIixk6oEa8gCW3OyQdGRHfKd0IgDyYoQMdr9P4hrkk7SZple0/Kd0IgDyYoWPiNfAFLLl9VNKrI+KR0o0ASIcZOiCdqckJc0k6Tp3Z+tNLNwIgHWbomGi2nyDph+ocIJs0j6gzU/9o6UYA1McMHZPuHWp2mOe8HGaBpEttf8j2gozjABgBAh0Ty/bukl5duo85vEjSjZnHOEnSV2w/NfM4ADIi0DHJ/r50AwNYFxEHqrOSkNNSSSttL848DoBMCHRMJNvPkXRU6T4GsKUkRcRZkg'+
			'6WtDbjWE+SdE3G+gAyItAxqdryetRf7+9HxGcl7SHpcxnHe0b3xjwALUOgY+LYPlzSgaX7GNAmh9UiYk1EvEDSWRnHPCljbQCZEOiYROeWbmAeZjyBHxHvkLRM0r0ZxtyfU+9A+xDomCi2T1C7XsDS95G6iFipzhL89RnG/b0MNQFkRKBj0ryzdAPzNOtMOSLWRcShkk5PPO6zE9cDkBmBjolh+zS17wUsA116ExHnqBPCdycad59EdQCMCIGOidB9Actfl+5jCAPvZUfEKnWeJ782wbgEOtAyBDomxRmSFpVuYgjzupY2ItZHxIslvb7muEs4GAe0C4GOsWf7OEl/VbqPIQ0VqhFxnqSLao69X83PAxghAh1jyfZB3ZeOPCDp0tL91FDnxTGrao7NsjvQIluUbgBIxfaukk6U9MeSxuVOcgIdwEAIdLSa7UWSjpP0'+
			'Co3ns9N19rFvrTk2gQ60CIGOVrL9cknHS3rJCIZbK2n7EYwzk6EDPSI22P6WpGcMWWKJ7a0i4sFhewAwOuyhozVs72/7A7bXSfq4RhPm90u6YATj9FNnyV2Svlbz88zSgZYg0NFotne2/Vbb35N0o6TXSNp2hC38nfK+snQudQOdfXRgQrDkjsaxvZ2k5ersiy8r2Mo9EXGe7T8t2AOBDmAgBDoaw/ZR6oT4UaV76Tqj+/XRgj3UvdyFg3HAhCDQUZTtZeqE+MvVrJvcvhkRG59fLxnotWboiQ7GLYiIR+r0ASA/Ah0jZ3tnSSeoE+RPK9xOP71vLysZZimuX12l4QNd6twY94UEfQDIiENxGBnby23fKOn76hw2a2qY/1tEXNfz962doXexjw5MAGboyK77ko/LJR1eupcBfEHSSdO+1+Y9dKl+oPNudKAFmKFjFK'+
			'5VO8L8QxHxvIh4aNr32z5DX13z889K0AOAzAh0ZGX7NEnPK93HLO6T9B5Je0dEv8fTWj1D7x5ou61GiSW2t6rbB4C8WHJHNra3kfSW0n3M4GFJV0j6SER8ZoCfb/uhOKmz7L5Hjc/vIw7GAY3GDB05LZe0dekmelylzuNxj4uIVw4Y5lLZQE+FK2CBMccMHTntX7oBSV+StELSZRGxbsgaJZfcZXubiFhfswwn3YExR6Ajpx0KjXuHpEskXRwRdyeoVzTQ1Vl2rxvoX6/5eU66Aw1HoCOnn4xwrB+r8wa2SyPilpSFu7etpSw5X7VPunf/HW7T8PvouyVaKWgd209R586EKN3LNPdHxDdKN4HmINCR05clvTJj/YckfVKDH25rqxSPrkn1D8btrQk5GGd7d0l/K+kQSY8r3E5f3V80vyjpHyLiqsLtoDAOxSGnK5Tn'+
			'QNnVkl4WEVvN83BbHT8bwRj9pAz0OiZiH932MyXdJOk4NTjMexwk6Urbp5RuBGUR6MgmItZKOi9RuRslnSJpUUQcERGfSFR3UCX30R+TqA43xs3B9q7qzHi3K93LEM63fULpJlBO0/aEMGZsP0bStyTtPMTHvy3pUkkrIuKupI3Nk+0fSlpcaPjnR8Tn6xbpXsG7oUaJ70bE7nX7aDLbF6vz4qC2ujcinly6CZTBDB1ZRcQGSftKun7Aj6xR5+a2Z0XEHhHxztJh3tXq2+KkX98Y9+0aJSbhxrhjSjdQ05Ns/2bpJlAGgY7sImJtRBwq6Vh1nguf7iFJF0l6QUQ8MSLeHBF17x9Pre33uW/EBTN92N5T6bY3SiLQJxSn3DEyEXG5pMttL5G0cVnwoYioGzKjMA7Xv0qdffQ6S8rjfAXswtINJMJEbUIR6Bi5iPiupO'+
			'+W7mOefl5w7JSBXvcZ/bE/GDcGflW6AZTBb3LAYOocJqvrtxPWqnvSfZxfpVr09qCEflG6AZRBoAODaf2hOCnNwbhUvSCLD0YEM/QJRaADgxmXQ3FSzVl691FENM+tkt5YugmUQ6ADgyl5KK5Rgd59FBHNcomkZfy3mWwcigMGM06BfkONz8702OG4GGYP/QF1ZsYl3C/pZkmfj4iVhXpAgxDowGDG5ZS7IuIW29+XtMsQH78mZS8NM8zNmasi4uDknQBDYMkdGEzJl3QkDfSus4f4zFpJ70/dSIOMyyl3TCgCHZhD97rTlxVsIXmgR8SF6ry1bj5OGfP3ofNuC7QagQ7M7UXKM0seVK6rPJer8xa7QZwSEZdl6gNAAgQ6MLcDCo+f5aKQiNgQEQdKOl3SvX1+7AZJSyPin3P00DAsuaPVOBQHzK30K0PX5iweEedI'+
			'Osf20ZKWdr/9C0k3pXhta4uw5I5WI9CBuQ3zLveUvjmKQSLiCklXjGKshiLQ0WosuQNz263w+IPuc6MeltzRagQ6MAvbOxZu4f6IqHP3OgbHDB2tRqADsyu93H5b4fEBtASBDsxuqvD4Dxcef5Kw5I5WI9CB2Q1zPWpK2xcef5Kw5I5WI9CB2U0VHn+PwuMDaAkCHZjdVOHxH2N7r8I9AGgBAh2YXelDcZJ0SOkGADQfgQ7Mbqp0AyLQAQyAQAf6sD1VuoeuF5RuAEDzEehAf01Ybpck2T60dA8Amo1AB/prTKCLZXcAcyDQgf6mSjfQ44WlGwDQbAQ60F+TZuhLbe9QugkAzUWgA/1NlW5gmsNKNwCguQh0oL8mzdAl9tEBzIJAB/or/erU6dhHB9AXgQ7MwPZupXuYwQ629yzdBIBmItCBmTVtuX0jlt0BzIhAB2'+
			'bW1EBn2R3AjLYo3QDQUI0NdNtbRsSjpRuZi+3nSHqWpLY8brdT6QaAOgh0YGZTpRuYxUGSri/dRD+23yPpZEkLSvcCTBKW3IGZ7VK6gVk0dh/d9gpJbxJhDowcgQ7MbHHpBmbRyEC3fbak40v3AUwqAh2YxvYCNXvfd6ntJ5ZuopftrSW9oXQfwCQj0IHNPS1xvQ2J60nNO+1+mKQtSzcBTDICHdhc6uX2OyT9IHHNpgV6Ey/iASYKgQ5sLvUja2skrUxc89DE9er6rdINFLK+dAPARgQ6sLk2BPoOtp+ZuCbm77bSDQAbEejA5toQ6FKzTrtH6QYKuax0A8BGBDqwuanE9dZExFcT15Sat48+ac6PCGboaAwCHdhc6gNeP+l+vSlx3UNsc7K8jE9HxKmlmwB6EehAD9vbSnps4rJrul9zLLv/t+13NuC1qi48/ij9'+
			'ZUQcVroJYDrucgc2NZWhZs5AXyzpTEln2v6OpI9KujQiUj8ml8NnJH2pdBMDelDSLZJujoiHSjcDzIRABzaV4y1rOQO919MlvV3S223fLOljkj4WET+Z/WPFXB8R55RuAhgXLLkDm5pKXTAi1nS/3iXpf1PX72NfSedKutf2522/xvZ2IxobQAEEOrCpHI+s9bohcf1BPFfSByTdb/sa28fbXligDwAZEejApnIHeu5l97kcLmmFpPtsX2b7pYX7AZAIgQ5saipxvaYF+kYLJB0r6d9tP2D7w7Z5rh1oMQId2NSuietND/SbE9dPYRtJr5J0ve01ts+3vX/ppgDMD4EOdNl+vNK/AnSTE+YR8Yik1YnHSGkHSadIutH2D22/y/ZepZsCMDcCHahMZag5fYYuNWfZfS6LJZ0uabXt79g+3fai0k0BmBmBDlRyPoPeqy'+
			'2B3ut3JL1L0l22jyndDIDNEehAZSpDzZkudbk6wzijslDS5bbfVroRAJsi0IHKLhlq/nT6NyJinaQLM4w1SmfZflPpJgBUCHSgMpWhZr9rV8+WtCHDeKP0HtvPL90EgA4CHajsmLrgxmtfZ/j+9yW9NvV4BVxSugEAHQQ6UNkmcb3Nltt7RcQlktq+F72j7RNLNwGAQAd6ReJ66+ccMOItko6UtDbx2KN0bOkGABDoQK9fJa73G4P8UERcJWknSX8u6bbEPYzCfqUbAECgA72KBLrUuUEuIj4QEc+QtKc6h+buTNxPLoskbV26CWDSEehA5f8S1xvqz1dEfCMizoyIKUkHSLpA0n0J+8oh9ZW5AOaJQAcqxWbo/UTElyLidRGxg6QXqXOq/MHanaU353kBAHkR6EClcYHeKyKui4hXqvMClWMl/UfK+jX8QNLPSzcB'+
			'TDoCHag0Ysl9LhHxaERcHhFHSdpW0kmSPptjrAFdV3BsAF0EOlBp9Ax9JhGxPiI+HBEHS3qCpL+Q9NXc405z/ojHAzADAh2opJ6hb5G43qwi4qcR8b6I2E+de+nPknRH5mGvjYhva7hn+FM/9w9MNAIdqKSeoRf78xURP4iId0TEEkl7S3q3pLsSD/NjSSd0/9pDfH6YzwDog0AHKqln6NmX3AcREV+PiDMiYrGkP5D0fknrapZdJ+nIiLh/4zDDtFazBwA9CHSg8svE9RYkrldbRHwxIk6OiEWSDpe0QtJD8yzzVUlLI+JrPd9jhg4URqADldQz9EaLiE9FxCvUeQxuuaSr5vjITyW9NiL2i4h7sjcIYF5GemgHaLjUe+hDsX2EOvej7yVp4YiHv13S7n3+2V2SlttePsM/mxpiLGboQEIEOlApGui2l0m6UtLjS/'+
			'Yxi2cnrsceOpAQgQ5Uii252/59dS5o2apUDwDajT10oFJkhm57gTozc8J8xGzvZ/u/bK93x+W2dyrdFzAMAh2oJA/0bljP5Y8kPS712Jid7bMkrZR0sKrXvx4j6Vbbv1usMWBIBDpQybHkPsifscMzjNsGRfbQbS+0fbWkt/X5ke0kXWd70QjbAmoj0IFKjkAf5HKZJ2cYtw1SP/c/J9tPk7RK0ovn+NGd1NkGAVqDQAcqOQJmkD9jk3rae6TPsts+TNJq9X8sb7oDbJ+bsSUgKQIdqJSaoU+qz4xqoO5++X9q/gcP32h70F8AgKIIdKCS45Q7gT6ziyJibe5BbD/W9pXqv18+iCNT9QPkxHPoQIVAH43vqfPe9qxs7yzpakl71CzF44RoBWboQKXUKfdJ8mVJB0XE+pyD2D5Enf3yumEuSd9IUAPIjhk6UGEPPY8f'+
			'qxOun46I83IPZvsMSWcnKnenpE8lqgVkRaADlRyn3HMF+p4Rwcyxh+2Fki6WdHSikuskvTAiHk5UD8iK5UCgwpJ7S9leLOkrShfmt0naOyLuSFQPyI7/2QAVDsW1kO3nS/q60uyXS9InJe0bEXcmqgeMBIEOVAj0lrH9ZkmflbRtopKnR8TREfFIonrAyLCHDlRYcm+J7ktvVkj6w0QlH5B0dER8LlE9YOQIdKDCDL0Fuvvl1yrdEvutko5kiR1tx+wBqBDoDWf7QKXdL78sIvYizDEOCHSgwnPoDWb7NElfVLr98tMiYnmiWkBxLLkDlRwzdH5pTsD2xyW9PFG5tZKOiogbEtUDGoFAByosuTeM7adIukbSnolK3irpxRHxo0T1gMZg9gBUWHJvkJ798lRhvnG/nDDHWCLQgQpL7g1h+w3q7Jdvn6jk69kvx7hjyR'+
			'2osOTeAIn3y++TdERErExUD2gsAh2osOReUIb98lWSXhIR9yaqBzQay4FAhRl6IRn2yz8SEc8mzDFJCHSgwh56AbZPVdr98pMj4oREtYDWYMkdqLDkPmLslwPpEOhAhSX3EbH9JElXS9onUUn2yzHxWA4EKr8s3cA8uHQDw7L9HHUueEkV5h9kvxwg0IFeD2ao+UCGmpIUmepmZftkSTdJenyikidExJ8lqgW0GkvuQOXuDDX/J0NNqYUzdNuXSHpFonL3qrPEvipRPaD1CHSgckviendGxD2Ja7ZOhv3yleocfrsvUT1gLLDkDnRFxAOSrkpY8sKEtUbO9la2D7C9pEaNZZJWK12YXxARywhzYHMEOrCptyaqs07SexPVmknWPXTbKyT9TNINkm63/U9D1DhF0pclPSFRWydGxOsS1QLGDoEO9IiIWyRdkKDUqRGx'+
			'IUGdfrLtodt+n6Tjp337VNv/Mo8a/yrp/EQt3SNp34i4OFE9YCz9PwAAAP//7d07yGVnFcfh/7IIBiVIZPBSqBBtvM3EW8Br1EaIYCGChSm0EZSkEcEYIiIyhYWFSArBRogQvIEoKILRBMRCCBpCWpVgQFGJwgwKZlnMGGSYTOay99k5az8PTDXf975rqt/sy3mPoMMFzl8FXsut929U1X1LzXNI3f2CJHc+w19/srs/8Sy//7Lu/nWSS/7cFXgwycmq+s1C68FYgg4XUVUfSvLdq/jVu4/8Y1TP9qz7m939tov9RXe/Oec+X37LQrN8rareU1V/XWg9GM1b7ozT3TcmeV2u/ZS2e5OcSXI554L/I8nnkjzW3bde4T43XOHPr+misb7Aj7r75P8f5NLdtyf51oJzfLSq7l9wPRhP0Bmhu1+a5AtJbkvyig1GuCHn/g'+
			'Nw7C4n6CeS/DjJm5Lk/LP1pe5KPJ7kg1X124XWg90QdI7e+Zg/lOTVW88ywOUEPUlu7u77krwqydsX2vuBJB9xix2uzlEeHwn/090vzLnv0b5p61kO7GRV/W7JBbv7RJI/L7nmFfhqVX1mo71hBFfoHLtPZX8xT9b52NpSL7NdibNJPu55OVw7QefYLXU2+LFZ4+7aW1dY81L+kOS2qnr0wPvCSD62xrF7/dYDDHK5z8+X8PMkp8QcliPoHK3uftHWM2zo7AprLvVy27P5SlW9//zZ+cBC3HKH4/T4kot1901Z//PwZ5N8rKq+v/I+sEuCDsfnJ1W19BX62rfbPS+HlbnlDsfnnhXWXPOFuJ/G83JYnaDDcbljpS8qWesK/XRVfcDzclifg2U4Wudfivv71nMcyJM593ntH6yxeHefSXL9wss+UlVvXHhN4Bl4hs4e'+
			'/XLrAS7TU0keS/Jwkh9W1SqnuHX3qSwf8yR5Q3efrqrPr7A2cAFBZ2+eqKpbtx7iOWbNF+Lu6u6fVdUDK+4BxDN0YP033L/T3S9ZeQ/YPUEH1j7y9cVJvrfyHrB7gg471t3XJznEi2vv6O7TB9gHdkvQYd/ecsC97uruWw+4H+yKoMO+HfILWZLkzgPvB7sh6LBvLz/wfl6Og5UIOuzbYwfe71cH3g92Q9Bh376d5PcH2uvRJF860F6wO4IOO1ZVZ5K8M+e+QGUtf0zy2STvrqp/rrgP7Jqz3DlaV3mW+xNVdejnxkehu08keW2S/yzxZ4WveAUuwdGvQJKkqv6S4znnHriAW+4AMICgA8AAgg4AAwg6AAwg6AAwgKADwACCDgADCDoADCDoADCAoAPAAIIOAAMIOgAMIOgAMICgA8AAgg4AA/g+dJ7W3TcnOZXklV'+
			'vPcpmefxW/04tPAfAcIOiku+9I8sUkN248yiHU1gMArEHQd667707y5a3nAODaeIa+Y919e/YXc7fcgZEEfd/u2XqADbjlDowk6DvV3c9L8pqt59iAK3RgJEHfr71eqe713w0MJ+jszZNbDwCwBkHfr6e2HmAjj249AMAaBH2nqqqTPLz1HBu4f+sBANbgeeKOdfe7kjy49RwH9Iuqeu/WQwCswRX6jlXVQ0k+vfUcB/JIkg9vPQTAWgR956rq3iTvS/KnrWdZ0deT3FJVf9t6EIC1uOXO07r7uiTXZcaRwJ3k30n+VVV7fQEQ2BFBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNAB'+
			'YABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGE'+
			'DQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABvgvAnGkm5g4Bp4AAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 118px;';
		hs+='left : -21px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 130px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
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
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg0.appendChild(me._image_3);
		me._downnode.appendChild(me._ht_node_bg0);
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
		me._downnode.appendChild(me._ht_node_custom_image0);
		me._downnode.logicBlock_visible();
		me.elementMouseOver['downnode']=false;
		me._ht_node_preview_bg0.logicBlock_visible();
		me._ht_node_preview_title0.logicBlock_visible();
		me._ht_node_bg0.logicBlock_visible();
		me._ht_node_visited0.logicBlock_visible();
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
				me._ht_node_preview_bg0.logicBlock_visible();
				me._ht_node_preview_title0.logicBlock_visible();
				me._ht_node_bg0.logicBlock_visible();
				me._ht_node_custom_image0.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._downnode.logicBlock_visible();
				me._ht_node_preview_bg0.logicBlock_visible();
				me._ht_node_preview_title0.logicBlock_visible();
				me._ht_node_bg0.logicBlock_visible();
				me._ht_node_visited0.logicBlock_visible();
				me._ht_node_visited0.logicBlock_visible();
				me._ht_node_custom_image0.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_visited0.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._downnode.logicBlock_visible();
				me._ht_node_preview_bg0.logicBlock_visible();
				me._ht_node_preview_title0.logicBlock_visible();
				me._ht_node_bg0.logicBlock_visible();
				me._ht_node_custom_image0.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._downnode.logicBlock_visible();
			};
			me.__div = me._downnode;
	};
	function SkinHotspotClass_upnode(parentScope,hotspot) {
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
		el=me._upnode=document.createElement('div');
		el.ggId="upnode";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 438px;';
		hs+='position : absolute;';
		hs+='top : 235px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._upnode.ggIsActive=function() {
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
		me._upnode.logicBlock_visible = function() {
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
			if (me._upnode.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._upnode.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._upnode.style.transition='';
				if (me._upnode.ggCurrentLogicStateVisible == 0) {
					me._upnode.style.visibility=(Number(me._upnode.style.opacity)>0||!me._upnode.style.opacity)?'inherit':'hidden';
					me._upnode.ggVisible=true;
				}
				else {
					me._upnode.style.visibility="hidden";
					me._upnode.ggVisible=false;
				}
			}
		}
		me._upnode.logicBlock_visible();
		me._upnode.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._upnode.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._upnode.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['upnode']=true;
			me._ht_node_preview_bg1.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._upnode.onmouseleave=function (e) {
			me.elementMouseOver['upnode']=false;
			me._ht_node_preview_bg1.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._upnode.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_bg1=document.createElement('div');
		el.ggId="ht_node_preview_bg";
		el.ggDx=3;
		el.ggDy=-65;
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
		hs+='left : calc(50% - ((184px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((118px + 0px) / 2) - 65px);';
		hs+='visibility : hidden;';
		hs+='width : 184px;';
		hs+='pointer-events:none;';
		hs+='overflow: hidden';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_preview_bg1.ggIsActive=function() {
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
		me._ht_node_preview_bg1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['upnode'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_preview_bg1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_preview_bg1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_preview_bg1.style.transition='';
				if (me._ht_node_preview_bg1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_preview_bg1.style.visibility=(Number(me._ht_node_preview_bg1.style.opacity)>0||!me._ht_node_preview_bg1.style.opacity)?'inherit':'hidden';
					me._ht_node_preview_bg1.ggVisible=true;
				}
				else {
					me._ht_node_preview_bg1.style.visibility="hidden";
					me._ht_node_preview_bg1.ggVisible=false;
				}
			}
		}
		me._ht_node_preview_bg1.logicBlock_visible();
		me._ht_node_preview_bg1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_img1=document.createElement('div');
		els=me._ht_node_preview_img1__img=document.createElement('img');
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
		me._ht_node_preview_img1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_preview_img1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_preview_bg1.appendChild(me._ht_node_preview_img1);
		el=me._ht_node_preview_title1=document.createElement('div');
		els=me._ht_node_preview_title1__text=document.createElement('div');
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
		me._ht_node_preview_title1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_preview_title1.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_preview_title1.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_preview_title1.ggIsActive=function() {
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
		me._ht_node_preview_title1.logicBlock_visible = function() {
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
			if (me._ht_node_preview_title1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_preview_title1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_preview_title1.style.transition='';
				if (me._ht_node_preview_title1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_preview_title1.style.visibility="hidden";
					me._ht_node_preview_title1.ggVisible=false;
				}
				else {
					me._ht_node_preview_title1.style.visibility=(Number(me._ht_node_preview_title1.style.opacity)>0||!me._ht_node_preview_title1.style.opacity)?'inherit':'hidden';
					me._ht_node_preview_title1.ggVisible=true;
				}
			}
		}
		me._ht_node_preview_title1.logicBlock_visible();
		me._ht_node_preview_title1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_preview_bg1.appendChild(me._ht_node_preview_title1);
		me._upnode.appendChild(me._ht_node_preview_bg1);
		el=me._ht_node_bg1=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=1;
		el.ggDy=1;
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
		hs+='left : calc(50% - ((83px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((85px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 83px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_bg1.ggIsActive=function() {
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
		me._ht_node_bg1.logicBlock_visible = function() {
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
			if (me._ht_node_bg1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_bg1.style.transition='';
				if (me._ht_node_bg1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_bg1.style.visibility="hidden";
					me._ht_node_bg1.ggVisible=false;
				}
				else {
					me._ht_node_bg1.style.visibility=(Number(me._ht_node_bg1.style.opacity)>0||!me._ht_node_bg1.style.opacity)?'inherit':'hidden';
					me._ht_node_bg1.ggVisible=true;
				}
			}
		}
		me._ht_node_bg1.logicBlock_visible();
		me._ht_node_bg1.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited1=document.createElement('div');
		els=me._ht_node_visited1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO30mI3hkOwoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMzEiLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGNsYXNzPSJzdDEiLz4K'+
			'IDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguNiwyNi43IDMwLjksNDggNDkuNCwxNiAmI3g5OyIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited1__img.setAttribute('src',hs);
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
		me._ht_node_visited1.ggIsActive=function() {
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
		me._ht_node_visited1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited1.ggElementNodeId()) == true)) || 
				((me._ht_node_visited1.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited1.style.transition='';
				if (me._ht_node_visited1.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited1.style.visibility=(Number(me._ht_node_visited1.style.opacity)>0||!me._ht_node_visited1.style.opacity)?'inherit':'hidden';
					me._ht_node_visited1.ggVisible=true;
				}
				else {
					me._ht_node_visited1.style.visibility="hidden";
					me._ht_node_visited1.ggVisible=false;
				}
			}
		}
		me._ht_node_visited1.logicBlock_visible();
		me._ht_node_visited1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg1.appendChild(me._ht_node_visited1);
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFAmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QW'+
			'RzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI1LTEwLTI2PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjQyOTMwMDY4LWY5YTYtNDYwYS05N2ViLWJkM2YwNWE3ZmMzMjwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6'+
			'RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5VbnRpdGxlZCBkZXNpZ24gLSAxPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPkpheWRlbiBEb25naHdhbiBLaW08L3BkZjpBdXRob3I+CiA8L3JkZj'+
			'pEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YSAoUmVuZGVyZXIpIGRvYz1EQUcyNFZaYV9abyB1c2VyPVVBRDc4VnNDRVUwIGJyYW5kPUtvcmVhIEludGVybmF0aW9uYWwgU2Nob29sLSBTdHVkZW50cyAodXNlZCB0byBhY2Nlc3MgcHJldmlvdXMgZGVzaWducyBvbmx5KSB0ZW1wbGF0ZT08L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+AQYvkAAA'+
			'IZhJREFUeJzs3U+I53Udx/HXey1UJIrYrCgKMg/RwUOs/RFxYQ0yw1oL1qCDHoQ6BUGRwXapU0WHLlFJpJK1SplC0S23QxCdKsLYyswwSkOjEBbS+XSYgWTR3fnN/H6/z8x7Ho/LHpb5fl6X4bmf7+zMVACAfa9mDwAAdk/QAaABQQeABgQdABoQdABoQNABoAFBB4AGBB0AGhB0AGhA0AGgAUEHgAYEHQAaEHQAaEDQAaABQQeABgQdABoQdABoQNABoAFBB4AGBB0AGhB0AGhA0AGgAUEHgAYEHQAaEHQAaEDQAaABQQeABgQdABoQdABoQNABoAFBB4AGBB0AGhB0AGhA0AGgAUEHgAYEHQAaEHQAaEDQAaABQQeABgQdABoQdABoQNABoAFBB4AGBB0AGhB0AGhA0AGgAUEHgAYEHQAaEHQAaEDQAaABQQeABg'+
			'QdABoQdABoQNABoAFBB4AGBB0AGhB0AGhA0AGgAUEHgAYEHQAaEHQAaEDQAaABQQeABgQdABoQdABoQNABoAFBB4AGBB0AGhB0AGhA0AGgAUEHgAYEHQAaEHQAaEDQAaABQQeABgQdABoQdABoQNABoAFBB4AGBB0AGhB0AGhA0AGgAUEHgAYEHQAaEHQAaEDQAaABQQeABgQdABoQdABoQNABoAFBB4AGBB0AGhB0AGhA0AGgAUEHgAYEHQAaEHQAaEDQAaABQQeABgQdABoQdABoQNABoAFBB4AGBB0AGhB0AGhA0AGgAUEHgAYEHQAaEHQAaEDQYYIxxsVJLk5y6Jy/ei7J2ap6bv2rgP1M0GENxhiXJ7k1ybEk1yS57AIf8kSSh5M8VFX3rXQc0IKgwwqNMa5P8okkN+/iMU8muTvJ16vq0aUMA9oRdFiBMcY7'+
			'k3wjyVVLfOxGkjuT3FFVTy/xuUADgg5LNMa4KMkXknw2q/v8ejrJzVV1ekXPB/YhQYclGWO8Lsn3k1y3huOeT/K5JF+uqrGG84A9TtBhCcYYlyR5IMn71njsRpLbq+rbazwT2KMEHXZpjHEomzG/acLxG0mOV9VDE84G9pBzvwcWWNzXMifmyebn8KkxxtWTzgf2CDd02IUxxolsft18tseTHKmqJ2cPAeYQdNihMcbhJI8kOTx7y5ZTVXXL7BHAHF65w859JXsn5klyYoxxbPYIYA43dNiBMcZbkpxJctHsLec4XVVHZ48A1s8NHXbm89l7MU+S68YYR2ePANZP0GFBY4yXJ7lh9o7z+NDsAcD6CTos7sYkl88ecR63bP2jAzhABB0W967ZAy7gtUmumD0CWC9Bh8UdmT1gG66ZPQBYL0GHxb199oBtuHL2AGC9BB'+
			'0WMMZ4RTZfae91gg4HjKDDYi6bPWCb9stOYEkEHRbzqtkDtmm/7ASWRNBhMf+aPWCb9stOYEkEHRbz7OwB27RfdgJLIuiwgKr6T5J/zN6xDX+YPQBYL0GHxT0ye8A2/G72AGC9BB0Wd3r2gG341ewBwHoJOizuZ7MHXMBjVfX72SOA9RJ0WNwvsre/jv7g7AHA+gk6LKiq/pvk/tk7zuOe2QOA9avZA2A/GmO8NZv/Oe5ls7ec43RVHZ09Alg/N3TYgar6Y5K7Zu94ESdnDwDmcEOHHRpjHM7mLf3w7C1b7qqqW2ePAOZwQ4cdqqp/Jvnk7B1b/prk07NHAPMIOuxCVd2b5KuTZ5xN8uGqemryDmAir9xhl8YYh5I8kOSmCcdvJDleVQ9NOBvYQ9zQYZeqaiPJiSQ/nXD87WIOJG7osDRjjEuS/CDJ+9d05G1V9Z01'+
			'nQXscW7osCRVdTabr92/mGSs8Ki/Jzkq5sALCTosUVU9X1Unk7w7ya+X/PiNJN9KclVV7YdfEAOskVfusEJjjGNJPp7kI7t4zJNJ7kzyzar6y1KGAe0IOqzBGOPyJLcleW+S9yS59AIf8rckDyd5sKruW+06oANBhwnGGG9M8qYkb97689kkjyZ5IsnjVfXMxHnAPiToANCAoMOSjTEuTXJF/v8z3s8meSrJU1X172nDgNYEHXZp65e0fDTJtUmuzuZr9JfyWJLvJrm7qs6sfh1wUAg67NAY48ps/hz3D+zwEQ8m+VRVPbq8VcBB5fvQYQfGGCeTnMnOY54kH0zypzHGl5azCjjI3NBhAWOM1yS5N8n1S370I0lOVNVvl/xc4IBwQ4dtGmNcm82f/rbsmCfJ25L8ZozxsRU8GzgABB22YYxxR5KfJ3n9io+6Z4xxYs'+
			'VnAA155Q7nMcZ4dZJTWc2t/HyOV9WP1nwmsI8JOryEMcbVSX6Y5A2TJtxYVT+ZdDawz3jlDi9ijPGZJL/MvJgnyY+3vm4PcEFu6PACY4xXJvlekhtmb9nyTJJ3VNWfZw8B9jZBhy1br9jvz+YvS9lLziQ54sfGAufzPwAAAP//7N170F1Vfcbx7zPqCIKgclFR0GoAUVGgFBUVuSiieJcqWquCHS8jpWilxcto1SroSFtQGZWp0AIqIgqCItjhjqgRokUEhVa5qQSJgNHEavv0j/Nm8ia8l5Oz9zprn7Ofz0xmyPue9du/JDM871pr77Wz5B4B2D6CwRJ718IcYAcgN8hFxIIS6NFrtje3/RXgn2v3soh9bB9bu4mI6K4suUdv2d6Vwcy3i7Py+TxX0gW1m4iI7skMPXrJ9mHA1UxWmAOcOnP8bETEOhLo0Su2H2j7'+
			'DODjtXsZ0VbAqbWbiIjuSaBHb9jemcFZ7AfV7qWh/W2/tXYTEdEt2UOPXphZYp/UWflcVjN4lO2HtRuJiG5IoMdUs70JcDKTPyufy43AkyX9rnYjEVFfltxjas0ssS9jOsMcYAlwUu0mIqIbEugxlWz/FYODYrav3Uthr5j5s0ZEz2XJPabKzBL7icCravcyRquB3SVdW7uRiKgngR5Tw/ZOwNlM/6x8LjcCu0paWbuRiKgjS+4xFWy/GriKfoY5DPbTP1e7iYioJ4EeE832xrY/C5wGbFy7n8peOPMe94jooSy5x8SyvT2DJfadavfSMftIurh2ExExXpmhx0SaWWJfRsJ8Ll+y/YjaTUTEeCXQY+LY/hSDJfZNCl/qBuB9ha9Rwhbk/ekRvZNAj4lheyPbFwJvGsPlTgd2Y3D3+CTa3fbJtZuIiPFJoMck+RiwT+'+
			'FrrAbeLOngmUfAJvlGu9fZPrx2ExExHgn0mAi2dwNKv2Hsp8Aekj4962sbFb5macfZ3q92ExFRXgI9JsW7C9f/EoMXnVyz3tcnPdABzrD9mNpNRERZCfSYFC8rWPtwSX8u6TdzfG+Sl9zXeDBwru0X1W4kIspJoEfn2f7TQqV/CuwmaaH3pE/DDB0Gj/edbXul7TNsv9r2ZrWbioj2JNBjEpQI9K8yWGJftsjnpmGGPtsmDF4nexpwt+3zbL/R9taV+4qIhhLoMQnaDvQjJL14niX29dWeoZ9cuP4BwKeB221fZvvttrcrfM2IKCCBHpOgrUC/mcES+3EbMKb2DP27wF+O6VrPAI4FbrK9zPZ7bT9xTNeOiIYS6DEJ2gj084AnDbHEvr7aM/TVkk4FPjPm6+4CvB+4xvYNtj9i+6lj7iEiNkACPTpt5vnzpo6S9HxJ'+
			'd48wtvYMfRWApDcB36/UwxLg74Arbd9m+wTbz67US0TMI4EeXdd0dr5K0kcajK8+Q5/13y8B7qrVyIxtgLcA37S9wva/2X6J7dp/TxG9l0CPrmsa6Fc2HN+JGTqApJuAV1bsZX0PBl4LfAW40/aZtl9je/PKfUX0UgI9um73huOvbji+9szz97N/I+kC4IOVelnIAxgc/nMKcJftC2ZecRsRY5JAj65rOkNf2nB87Rn679b/gqT3At+s0MuGeA5wmu3rbR9Qu5mIPkigR2fZ3rWFMlc1HF97hr56nq+/CrhtnI2MaEfgPNuH1G4kYtol0KPLms7Ofy3pvxrW6GSgS7oTeOmYe2nis3nsLaKsBHp0WdP98w195nwutZfc55uhI2kp8Bdj7KWpz9ZuIGKaJdCjy2rvn0P9Gfqqhb4p6XPAHnR/Tx1gJ9svrt1ExLRKoE'+
			'eXNZ2hN90/B3hgCzWaWDDQYTBTl7Q/8DjgfdQ7gGYYe9VuIGJaJdCjk1q6Ie57LdSoStLKDfjsjyV9QNKuwCOBtwEXFmtuNEtqNxAxrRLo0VVNl9vvlvTTJgVsb9qwh2ok3SbpXyTtB2wOvAY4AxjmDXMl3afy9SOmVgI9uqppoH+3hR5q758PPTtfiKR7JJ0m6RWSNgOex+CVqT9vo/4GuqPCNSN6IYEeXdU00NvYP+/sHe5NSPqGpDdLegSwJ3A0cE2Ja83hujFdJ6J3VLuBiLnYdsMSB0k6s2EP2wM/adhHE7dK2nZcF7P9KOAg4MXAMwtd5lGSbi5UO6LXMkOPzrG9Swtl2pih115yX/QO9zZJuknSsZL2ArYADgXObrGPTyXMI8pJoEcXtXFD3M9a6GMql9yHIWmFpJMkvUTSAxi8uvUkRt8D/z7w9tYajIh7'+
			'SaBHFzV9/vw7rXTRsxn6QiSdLelQSVszWI7/J2DYY3XPA/aR1Jk/T8Q0SqBHFzWdobf1/HlvZ+gLkXS5pL+VtAR4IvBO4PI5PnoT8BZJz5d011ibjOih+9ZuIGIOOzcc38b+OWSGvihJ1wLXAscA2N4N2AxYLulHNXuL6JsEenTKzA1xTYM0M/RKJF1du4eIvsqSe3RNGzfEtXUnde0Z+sQFekTUkxl6dE3TQL+ylS4Gas/QO7/kPs1mtg+eB9yvdi8N/AH4qqRxHRwUFSXQo2u6cELcGpmh95TtE4C31O6jJf9o+xhJ76zdSJSVJffomj0ajm/zDWu1Z+gJ9Apsf4jpCfM1jrJ9WO0moqwEenSG7Se3UGaaZuhZch8z2w8C3lW7j0LeV7uBKCuBHl3Sxg1xt7TSyUDtQM8MffyarhB12Za271+7iSgngR5d0jTQv9'+
			'VKF2vVXnLPDH38HlC7gcLyQq4plkCPLunKCXFrZIYe0+Q3wO9rNxHlJNCjS57ScHzbgV57hp5Ajza9S1LT1xJHhyXQoxM6eEMc1J+hZ8k92vJBSZ+o3USUlefQoyv+pOH45ZJua6WTtTJDj/lcUruBIfyRwX0lX8i5+v2QQI+u2LTh+KWtdLGu2jP0N9teLencyn3EulZJ2rt2ExHry5J7dMUdDce3vX8O9QN9P+Ac27fZPtr2ksr9RESHJdCjK5ruf5/XShfrqr3kvsY2wFHADbYvtf1629P+eFVEbKAEenSCpF8x+r7kMknfabOfGV0J9NmeCZwELLf9adt71m4oIrohgR5dcuSI497Rahdr1V5yX8gmwBuBK2xfZ/tI2w+t3VRE1JNAj86QtBR49wYO+4SkC0v0A0zKMZmPAz4K/NL2mbZfWLuhiBi/BHp0iqQP'+
			'Ax8a8uPHS/rrgu38T8HapbwM+Krt5bY/mhvpIvojgR6dI+k9wNOAi+b49i+ALwJPk/Q3hVv5beH6JW3FYAvjBtuX2z7UdtNHAyOiw3JQf3Sa7S2BJwL/C1wvqenjbRty7UuAvcZ1vTFYBXwBOEnSZbWb6SLbLwG+ssjHVknKUwbROZmhR6dJ+pWkiyVdNs4wn9H2UbK1bQwcAlxq+8e2/9721rWbioh2JNAj5vft2g0UtANwDHC77XNtv7x2QxHRTAI9Yn5fpx/nqR8IfMn27baPtb197YYiYsMl0CPmIWklcFbtPsZoa+DtwE9sn277EbUbiojhJdAjFvb+2g1U8grgWtvPqd1IRAwngR6xAEnXA5+p3UclmzN4pv2ZtRuJiMUl0CMWd5/aDVS0EYM3vm1Xu5GIWFgCPWJxz6jdQGWbAyfWbiIiFpZAj1jAzME2O9'+
			'buowP2t7177SYiYn4J9IiFZf94rYNrNxAR80ugRyzs6bUb6JDc8R7RYQn0iIWVOsv9FuB1wMuBcwtdo21Pqt1ARMzvvrUbiOgq2xsDf1ag9D3AvpJunPn9l20/HHg98AbgsQWu2Qrbm0u6u3YfEXFvmaFHzK/U3e0fnxXmAEj6haSjJS0B9gVOKXTtpu5Xu4GImFsCPWJ+pZbbT1jom5IukvRa4EHAYcAPC/WxwST9qnYPETG3BHrE/EoE+rWSfj7MByXdLemTknYG9mDwg8DKAj0Na0XFa0fEIhLoEfMrEegXjjJI0lJJb2XwApVDgCta7Wo4yytcMyKGlECPmEPB88u/22SwpFWSTpb0DGB74GOML2jvGNN1ImIECfSIuZXaP1/aViFJN0o6UtJDgYOA89uqPY8EekSHJdAj5lZihr5a0o8L1EXSmZIOALZj8MrX'+
			'3xW4TAI9osMS6BFze1aBmtcWqLkOSbdI+gfgrgLlE+gRHZZAj1iP7d0YvDa0bUVm5/PYpkDN3BQX0WE5KS7i3krdEFd8hg5g+0GFSg81Q7e9DfBKBq9dnTSPG+IzLt5FxAgS6BH3VirQryxUd31bFaq7aKDbPhj4DPDAQj1ExDwS6BH3tk+hulMd6DOP+n2+0LW7RLUbiJhL9tAjZrG9I/CQAqW/JWl1gbpzqTVD/0Ch63ZNltyjkxLoEesqcXc7wCWF6s6lSKBL+sUiH9m7xHUjYjgJ9Ih1lQr0SwvVnUuJQC/xGNykGtdKS8QGSaBHrGvfQnUvL1R3LlsXqJln0Nf6z9oNRMwlgR4xw/YS4GEFSl8taZxvSSsxQ0+gr3V07QYi5pJAj1ir1HL7ZYXqzqdEoOdQmYF3SbqgdhMRc8ljaxFr7V2o7jiX26HbM/QfMJ'+
			'n78XcAx0ka979lxNAS6BFrPbtQ3ZHegd5AlwP9bZIuaqlWRMySJfcIwPZ2lNk/v1HSigJ1F/LIAjWzhx7RcQn0iIFSx72Odf/c9maFSifQIzougR4xUCrQp2H/HBLoEZ2XQI8YmPQXsqyRQI/oqQR69J7thwCPL1B6haTrCtRdSAI9oqcS6BHlZufjPL99jS1LFJV0a4m6EdGeBHoE7FWo7jjPb1+jxLGv9xSoGREtS6BHlAv0cZ8QB91+Bj0iCkqgR6/Z3hTYvUDp1ZKuKlB3MXkxS0RPJdCj755RqG6N/XPIDD2itxLo0XfTtNwOCfSI3kqgR99N0w1xkECP6K0EevSW7Y2Bpxcqv7RQ3cVkDz2ipxLo0Wd7FKp7maTVhWrPy/YmwEYFSudd6BETIIEefTYVL2SZpcTsHDJDj5gICfTos1J3uE/T/jkk0CMmQgI9'+
			'+uxZhepeUajuYhLoET2WQI9esr0bZfabr5K0skDdYdy/RFFJN5eoGxHtSqBHX03b/jnAHwvUrPXDSURsoAR69NW0PX8OsKJAzesL1IyIAhLo0Vel9s8vL1R3GN8rUHNZgZoRUUACPXrH9s7AFgVKXyep2g1kM8++n99y2bNarhcRhSTQo49Kzc5r7p+vcUyLtX4l6est1ouIghLo0UdTG+iSLga+1lK5Q1uqExFjkECPPtq7UN2aN8TN9gbgzoY1Pi7pnDaaiYjxSKBHr9jeCdiyQOlbu/K8tqTbgf2Bu0cscZakw1tsKSLGIIEefVNquf3iQnVHIulqBs/aX7mBQz8i6aUFWoqIwhLo0TelAv2SQnVHJukaSXsCrwZuWOCjvwZOAXaRdNRYmouI1ql2AxHjZPvnwMMLlN5B0kKhWZ3t/YDHMPjz/wG4Cbh+ZjbfRn'+
			'0P8bF9JV3UxvUiYl0J9OgN20tYeKY6qhWSSjzXPlES6BF13bd2AxFjtHehuv/RViHb2wKPbaveGFX7f4nt1wH7Atsy2D64Zf1fkm6t1V/EuCTQo086u39ue1PgeOCQ5u10Wqurgra/DCx6E9/M4sGagL8Z+Bnwc9YN/eVt9hYxbgn06JP9C9Vt4/nzcyn3A0eXDLMsP1wh+3iGCPNZtp35tec89QC+ARwp6YeNG4wYs+yhRy/Y3h74SYHSjffPbb+GwV3mfbCfpAubFrG9EbCqhX7m8lvgqQn1mDR5bC36Yp9CdduYnR/YQo2+eUrB2pvQnx+wYook0KMvOrt/DjykhRqToq1Z9X1aqjOfXWw/tfA1IlqVQI++2LdQ3a6c3z4prmupTol3v6/v0WO4RkRrEugx9WaeP39YgdIr2zqUpSeOk3RXG4Uk3QOc1EatBdxT'+
			'uH5EqxLo0QddXm6HftycepGkI1queRhwcss1Z7utYO2I1uWxteiDvQrVbevEs9Ye5eqgi4DPSzqx7cKSfgccYvsLwNOArYDtZv16UMNL3NJwfMRYJdCjD0rd4d748asZw8zQj5X0jpauN1UknQ+cP/trtj8MvLNh3RVNxkeMWwI9pprtRzM4TKRtv5W0rEDdaMD2ZsAXgec2LFXizIKIohLoMe1K3d3+zUJ1Y0S2dwS+Rjtn4We5PSZOboqLaVcq0Ntabo8W2H4BcBXtvdgmL3OJiZNAj2n3nEJ1E+gdYfsDwDkMTnhrSwI9Jk6W3GNqzSzBbl2g9F2Sri1QNzZAi/vlc8mSe0ycBHpMs1J3t5+/+EeiJNuPZfDvUOrd8Zmhx8TJkntMs1KB3tbz5zEC2wcCVzNamJ8x5OcyQ4+Jk0CPabZ3obrZP6/E9nsZvDt+sx'+
			'GGHwx8csjPZoYeEyeBHlPJ9uMps3++XNINBerGAmxvYvsc4P0jDL8V2EXS6Qx5JkEOlYlJlD30mFaljnvN/vmYzeyXfw3YcYTh3wZeIOnOmd8PE+g5VCYmUmboMa32LlT34kJ1Yw62DwCWMVqYnyDpabPCHGCbIcZluT0mUgI9plWpA2WuLFQ31mP7PcB5wANHGH6IpLfO8fX/G2Lsz0a4XkR1CfSYOrZ3ZfDmrbb9RtJ1BerGLLY3tn0G8MERhv8S2EPSyfN8/4ohauRY35hICfSYRqVm55cWqhszbD8K+A5w0AjDr2Rw89vSBT5zDgsvqd/I4C76iImTQI9ptGehut8qVDcA288GfgDsPMLwEyTtKen2hT4kaRXwbOBHc3z7h8CBklaOcP2I6nKXe0yjUue3X1aobu/ZPhL46IjD3yjpxGE/LOnHwBNsHw48n8GM'+
			'/UxJ5414/YhOSKDHVLH9XEa7iWoYCy3lxghsbwycCrxshOF3AC+S9O1Rri3peOD4UcZGdFECPabNDoXqXi5pdaHavWT7kcA3gCeMMPwq4IWSftFuVxGTK3voMW0eUahulmNbZPuZwPcZLcxPkbR7wjxiXQn0mDZ/KFT3rEJ1e8f2EQyeGNhihOGHSXptyy1FTIUsuce0WV6g5n9Lmuuu6NhAtr8AvHKEoY32yyP6IIEe06bEjWunFqjZKzP75ecCTx5h+A+A52WJPWJhWXKPqTIzg7uj5bKfaLler8zaLx8lzE+XtEvCPGJxCfSYRv/aYq1PSmr7B4TesH0Yo++XHyHp4JZbiphaCfSYRscAbczoVjL6YSe9Z/vfgY+PMPROYC9Jx7XcUsRU+38AAAD//+3dP6glBxnG4ffDiCgiCoqksI6FRciqbCloEcSgElH8E0'+
			'FEUASxUFBEggE1jYXNio2FxEKJKWJAUvgPKzEYUkRcJIaNdoIbF6NCDJ/FuRbq6t4dzpm59zvPA8vCcubOC1v8ODP3nBF0xqmqPye5Zw8/6h1V9cwefs5R6e5bu/uxLPs/eCK772P3rXxwkwSdkarqR0mu9/jM03pPVf1sX3uORXdfzC7KFxYc/tDJ/XLPI4cFBJ2xqupSkjdnF5jT+kOSO6rq+4dZNVd3fzy7J54teXTtZ6rq7j1PgqMi6IxWVb+sqtuzu/z7/56W9vMkn83ucu/jq4wb5OR++TcWHPpskrdW1df2PAmOjs+hcxSq6oEkD3T3K7J7POcbkrwkya+SPF5Vz22577zq7tdk97W4Sy6xP5nd40qv7HcVHCdBZ4TufnmSO3L6q06XT/6+Jcmbuvsgu07pVVuefKnuvpDkB0luXXD4Q0k+dPJ8cmAPBJ1z'+
			'r7s/md3Hy1629ZZj0d33JPn2wsM/X1X373MPIOicc939uSRf3XrHMenuS0k+seDQa0neXVU/3vMkIILOOdbdr42Yr+bkfvnDSS4uOPxydvfLn9rvKuBf/JY759nbth5wLE7ulz+RZTF/JMkFMYfDEnTOs1dvPWBFL2x14u5+X5LHsuyX375YVXf5FAEcnkvunGe19YAVPb3FSbv760k+teDQa0neW1WP7nkS8D8IOpx9f0nyvbVP2t0/SfKWBYf+JrvvwXeJHVbkkjucfR+pqj+tecLu/k6WxfzRJG8Uc1ifoMPZ9YskF6vqwTVP2t23J/nAgkO/VFV3ul8O23DJnel+n+TDW49Y4Mmq+uNG577rJl//1yTvr6qHDzEGOB1B5zw7zfe1PldVPz30kGGev4nXPpXd58sv3/CVwEG55A78p9P+Rv0Ps3vUrJjDGSDowL'+
			'+pqu8m+fUNXvaVqnp7VV1bYxNwY4IOXM+7kjxznX9/Nsk7q+oLK+8BbsA9dOC/VNVvu/u2JJ9OcmeSq9l9W9ylqrq66TjgugQduK6q+nuS+0/+AGecS+4AMICgA8AAgg4AAwg6AAwg6AAwgKADwACCDgADCDoADCDoADCAoAPAAIIOAAMIOgAMIOgAMICgA8AAgg4AAwg6AAwg6AAwgKADwACCDgADCDoADCDoADCAoAPAAIIOAAMIOgAMIOgAMMAtWw/g8Lr77iRfTnLb1ls2UFsPAFiDd+jDdfe9SR7MccYc4Gh49zJYd78yydWtd2zsclW9fusRAIfmHfpsr9t6AADrEPTZXrr1gDPgH1sPAFiDoM/2t60HnAFPbz0AYA2CPtuVrQecAd/cegDAGgR9sKq6luS+rXds6FtV9cjWIwDWIOjDVdW9ST6Y5Hdbb1nR'+
			'lSQfq6qPbj0EYC0+tnZEuvvFSV609Y4De6Gqnt96BMDaBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4'+
			'ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABhA0AFgAEEHgAEEHQAGEHQAGEDQAWAAQQeAAQQdAAYQdAAYQNABYABBB4ABBB0ABhB0ABjgn6QDwnxh89MlAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 116px;';
		hs+='left : -19px;';
		hs+='position : absolute;';
		hs+='top : -14px;';
		hs+='visibility : inherit;';
		hs+='width : 127px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
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
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg1.appendChild(me._image_2);
		me._upnode.appendChild(me._ht_node_bg1);
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
		me._upnode.appendChild(me._ht_node_custom_image1);
		me._upnode.logicBlock_visible();
		me.elementMouseOver['upnode']=false;
		me._ht_node_preview_bg1.logicBlock_visible();
		me._ht_node_preview_title1.logicBlock_visible();
		me._ht_node_bg1.logicBlock_visible();
		me._ht_node_visited1.logicBlock_visible();
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
				me._ht_node_preview_bg1.logicBlock_visible();
				me._ht_node_preview_title1.logicBlock_visible();
				me._ht_node_bg1.logicBlock_visible();
				me._ht_node_custom_image1.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._upnode.logicBlock_visible();
				me._ht_node_preview_bg1.logicBlock_visible();
				me._ht_node_preview_title1.logicBlock_visible();
				me._ht_node_bg1.logicBlock_visible();
				me._ht_node_visited1.logicBlock_visible();
				me._ht_node_visited1.logicBlock_visible();
				me._ht_node_custom_image1.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_visited1.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._upnode.logicBlock_visible();
				me._ht_node_preview_bg1.logicBlock_visible();
				me._ht_node_preview_title1.logicBlock_visible();
				me._ht_node_bg1.logicBlock_visible();
				me._ht_node_custom_image1.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._upnode.logicBlock_visible();
			};
			me.__div = me._upnode;
	};
	function SkinHotspotClass_doorright(parentScope,hotspot) {
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
		el=me._doorright=document.createElement('div');
		el.ggId="doorright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 438px;';
		hs+='position : absolute;';
		hs+='top : 235px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._doorright.ggIsActive=function() {
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
		me._doorright.logicBlock_visible = function() {
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
			if (me._doorright.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._doorright.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._doorright.style.transition='';
				if (me._doorright.ggCurrentLogicStateVisible == 0) {
					me._doorright.style.visibility=(Number(me._doorright.style.opacity)>0||!me._doorright.style.opacity)?'inherit':'hidden';
					me._doorright.ggVisible=true;
				}
				else {
					me._doorright.style.visibility="hidden";
					me._doorright.ggVisible=false;
				}
			}
		}
		me._doorright.logicBlock_visible();
		me._doorright.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._doorright.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._doorright.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['doorright']=true;
			me._ht_node_preview_bg2.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._doorright.onmouseleave=function (e) {
			me.elementMouseOver['doorright']=false;
			me._ht_node_preview_bg2.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._doorright.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_bg2=document.createElement('div');
		el.ggId="ht_node_preview_bg";
		el.ggDx=3;
		el.ggDy=-65;
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
		hs+='left : calc(50% - ((184px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((118px + 0px) / 2) - 65px);';
		hs+='visibility : hidden;';
		hs+='width : 184px;';
		hs+='pointer-events:none;';
		hs+='overflow: hidden';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_preview_bg2.ggIsActive=function() {
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
		me._ht_node_preview_bg2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['doorright'] == true)) && 
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_preview_bg2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_preview_bg2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_preview_bg2.style.transition='';
				if (me._ht_node_preview_bg2.ggCurrentLogicStateVisible == 0) {
					me._ht_node_preview_bg2.style.visibility=(Number(me._ht_node_preview_bg2.style.opacity)>0||!me._ht_node_preview_bg2.style.opacity)?'inherit':'hidden';
					me._ht_node_preview_bg2.ggVisible=true;
				}
				else {
					me._ht_node_preview_bg2.style.visibility="hidden";
					me._ht_node_preview_bg2.ggVisible=false;
				}
			}
		}
		me._ht_node_preview_bg2.logicBlock_visible();
		me._ht_node_preview_bg2.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_img2=document.createElement('div');
		els=me._ht_node_preview_img2__img=document.createElement('img');
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
		me._ht_node_preview_img2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_preview_img2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_preview_bg2.appendChild(me._ht_node_preview_img2);
		el=me._ht_node_preview_title2=document.createElement('div');
		els=me._ht_node_preview_title2__text=document.createElement('div');
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
		me._ht_node_preview_title2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_preview_title2.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_preview_title2.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_preview_title2.ggIsActive=function() {
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
		me._ht_node_preview_title2.logicBlock_visible = function() {
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
			if (me._ht_node_preview_title2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_preview_title2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_preview_title2.style.transition='';
				if (me._ht_node_preview_title2.ggCurrentLogicStateVisible == 0) {
					me._ht_node_preview_title2.style.visibility="hidden";
					me._ht_node_preview_title2.ggVisible=false;
				}
				else {
					me._ht_node_preview_title2.style.visibility=(Number(me._ht_node_preview_title2.style.opacity)>0||!me._ht_node_preview_title2.style.opacity)?'inherit':'hidden';
					me._ht_node_preview_title2.ggVisible=true;
				}
			}
		}
		me._ht_node_preview_title2.logicBlock_visible();
		me._ht_node_preview_title2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_preview_bg2.appendChild(me._ht_node_preview_title2);
		me._doorright.appendChild(me._ht_node_preview_bg2);
		el=me._ht_node_bg2=document.createElement('div');
		el.ggId="ht_node_bg";
		el.ggDx=1;
		el.ggDy=1;
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
		hs+='left : calc(50% - ((83px + 0px) / 2) + 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((85px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 83px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_bg2.ggIsActive=function() {
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
		me._ht_node_bg2.logicBlock_visible = function() {
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
			if (me._ht_node_bg2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_bg2.style.transition='';
				if (me._ht_node_bg2.ggCurrentLogicStateVisible == 0) {
					me._ht_node_bg2.style.visibility="hidden";
					me._ht_node_bg2.ggVisible=false;
				}
				else {
					me._ht_node_bg2.style.visibility=(Number(me._ht_node_bg2.style.opacity)>0||!me._ht_node_bg2.style.opacity)?'inherit':'hidden';
					me._ht_node_bg2.ggVisible=true;
				}
			}
		}
		me._ht_node_bg2.logicBlock_visible();
		me._ht_node_bg2.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited2=document.createElement('div');
		els=me._ht_node_visited2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO30mI3hkOwoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMzEiLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGNsYXNzPSJzdDEiLz4K'+
			'IDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguNiwyNi43IDMwLjksNDggNDkuNCwxNiAmI3g5OyIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited2__img.setAttribute('src',hs);
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
		me._ht_node_visited2.ggIsActive=function() {
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
		me._ht_node_visited2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited2.ggElementNodeId()) == true)) || 
				((me._ht_node_visited2.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited2.style.transition='';
				if (me._ht_node_visited2.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited2.style.visibility=(Number(me._ht_node_visited2.style.opacity)>0||!me._ht_node_visited2.style.opacity)?'inherit':'hidden';
					me._ht_node_visited2.ggVisible=true;
				}
				else {
					me._ht_node_visited2.style.visibility="hidden";
					me._ht_node_visited2.ggVisible=false;
				}
			}
		}
		me._ht_node_visited2.logicBlock_visible();
		me._ht_node_visited2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg2.appendChild(me._ht_node_visited2);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwUAAAPoCAYAAACPv1IlAAAACXBIWXMAAA3/AAAN/wH0irKJAAAFAmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QW'+
			'RzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI1LTA4LTAzPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjc5NGFkMmRkLTNjYzktNDVhOS1iNjdlLWMxNDFiNWQxYzkxODwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6'+
			'RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5VbnRpdGxlZCBkZXNpZ24gLSAxPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPkpheWRlbiBEb25naHdhbiBLaW08L3BkZjpBdXRob3I+CiA8L3JkZj'+
			'pEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YSAoUmVuZGVyZXIpIGRvYz1EQUd2QlV2RG1WayB1c2VyPVVBRDc4VnNDRVUwIGJyYW5kPUtvcmVhIEludGVybmF0aW9uYWwgU2Nob29sLSBTdHVkZW50cyAodXNlZCB0byBhY2Nlc3MgcHJldmlvdXMgZGVzaWducyBvbmx5KSB0ZW1wbGF0ZT08L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+5w+vkgAA'+
			'HZFJREFUeJzs1zEBAAAIgDDtX9oYHmwJeNkBAADS9jsAAAD4ZQoAACDOFAAAQJwpAACAOFMAAABxpgAAAOJMAQAAxJkCAACIMwUAABBnCgAAIM4UAABAnCkAAIA4UwAAAHGmAAAA4kwBAADEmQIAAIgzBQAAEGcKAAAgzhQAAECcKQAAgDhTAAAAcaYAAADiTAEAAMSZAgAAiDMFAAAQZwoAACDOFAAAQJwpAACAOFMAAABxpgAAAOJMAQAAxJkCAACIMwUAABBnCgAAIM4UAABAnCkAAIA4UwAAAHGmAAAA4kwBAADEmQIAAIgzBQAAEGcKAAAgzhQAAECcKQAAgDhTAAAAcaYAAADiTAEAAMSZAgAAiDMFAAAQZwoAACDOFAAAQJwpAACAOFMAAABxpgAAAOJMAQAAxJkCAACIMwUAABBnCgAAIM4UAABAnCkAAI'+
			'A4UwAAAHGmAAAA4kwBAADEmQIAAIgzBQAAEGcKAAAgzhQAAECcKQAAgDhTAAAAcaYAAADiTAEAAMSZAgAAiDMFAAAQZwoAACDOFAAAQJwpAACAOFMAAABxpgAAAOJMAQAAxJkCAACIMwUAABBnCgAAIM4UAABAnCkAAIA4UwAAAHGmAAAA4kwBAADEmQIAAIgzBQAAEHcAAAD//+zXgQAAAACAIH/rQS6LpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAA'+
			'AOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOYCAAD//+zXgQAAAACAIH/rQS6LpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpA'+
			'AAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA'+
			'5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOYCAAD//+zdv8+V5R3H8c9lHVBQlNhiCSFGbRpSCAkhUNNSQlAQEBSdHWgb/wX/BDeHplOTNp06NmkaYzq3Q9c26VIdjG4OJixs5utwQ07QCM+Pc57r3Od6vfZzzmd7zvu5z3XfogAAAAYnCgAAYHCiAAAABicKAABgcKIAAAAGJwoAAGBwogAAAAYnCgAAYHCiAAAABicKAABgcKIAAAAGJwoAAGBwogAAAAYnCgAAYHCiAAAABicKAABgcKIAAAAGJwoAAGBwogAAAAYnCgAAYHCiAAAABicKAABgcKIAAAAGJwoAAGBwogAAAAYnCgAAYHCiAAAABicKAA'+
			'BgcI/1HgDAfFTV9ar6Y1V9WQ/6T1X9rqrO9N4IwPa5UgDA96qqp5PcSPJWkteTHNjCy/6R5L3W2uer3AbA8ogCAB5QVUcyRcCbSS7v8G0+TXKutfbV0oYBsDKiAIBU1fFMIfBWkrNLets/tdZ+s6T3AmCFRAHAoKrqlUxXA95J8vKKPuZUa+2/K3pvAJZEFAAMpKpez3Q14GaSH+/BR/65tXZ7Dz4HgF0QBQAb7N5B4WuZrghcT/LUHk+421rbv8efCcA2iQKADVNVz2eKgPt3DOrtp621//ceAcD3e7z3AAB2r6p+kuTtTCHw885zvu35JKIAYI2JAoCZqqqzWdwx6HjnOQDMmCgAmJGqupzFMwSOdJ4DwIYQBQBrrKoOJLmaKQSuJznYdxEAm0gUAKyZqvpRFgeFr3WeA8AARAHAGqiql5LcyhQCv+g8B4DBiAKA'+
			'TqrqTBYHhX/WeQ4AAxMFAHuoqi5lEQJHO88BgCSiAGClqmp/pgeI3T8o/GzfRQDwXaIAYMmq6rksDgq/mmRf30UA8HCiAGAJquqFLJ4ofL7vGgDYHlEAsENVdTqL8wEnO88BgB0TBQDbUFUXswiBY53nAMBSiAKAh6iqJ5NcyRQBbyQ51HcRACyfKAD4lqo6lORmphC4nOSJvosAYLVEAUCSqjqWxUHhC53nAMCeEgXAsKrqVJJbmULgVOc5ANCNKACGUlUXsjgo/ELfNQCwHkQBsNGqal8ePCj8XN9FALB+RAGwcarq2SQ3MoXAlSRP9l0EAOtNFAAb4d5B4fs/C7rYeQ4AzIooAGarqk5mEQKnO88BgNkSBcCsVNX5LELgxc5zAGAjiAJg7VXVG5ki4GaSH3aeAwAbRxQAa6eqDmY6KPx2HBTeBLWrF1f9O8m5JW'+
			'3ZRHeS/C/JR0n+0lr7rO8cYI5a7wEASVJVRzNFwM0klzrPYbl+1Vr7505fLAq27e9J3m2t3ek9BJgPVwqAbqrqRJI3M/006EznObApbiT5V1Wda63d7T0GmAdRAOypqvplpqsB78RB4VG4Kr33TiT5fZJf9x4CzIMoAFauqq5lcVD4cOc5zM+uziQM7HZVfdBa+6T3EGD9iQJg6e4dFL6eKQSuJjnQdxEM67dJ3u89Alh/ogBYiqo6kuRWpjMCr3Wew2bx86OduxpRAGyBKAB2rKqOZ/EgsbOd57C5/Hxo5072HgDMgygAtq2qDif5Q6YzAvAou/1S70rBLlTVD1prX/feAaw3UQBsS1VdSPLXJId6b2E2fKkHWHOiANiyqjqd5OMkT/TeAgAsz2O9BwDzcO+OQn+LIACAjSMKgK36MMnR3iMAgOUTBcAjVdUz8WRU'+
			'ANhYogDYipd7D2DW3FIUYM2JAmArDvYewKzt9u5DogJgxdx9CNgK/0Cgm9baK7039FRVX8R5HmDF/KEHAIDBiQIAABicKAAAgMGJAgAAGJwoAACAwYkCAAAYnCgAAIDBiQIAABicKAAAgMGJAgAAGJwoAACAwYkCAAAYnCgAAIDBiQIAABjcNwAAAP//7NeBAAAAAIAgf+tBLoukAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAA'+
			'AA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5gIAAP//7N2xi11FFMDhc0AIQpAQ/QM0CgnBwkYQ0WbtldjZiKWQRkTQUjtTqa2dVbSysbdTUlhE0qTSyiJqECu7'+
			'sYmg7q7uvrnz7t4539e+e5hTzo93364oAACA4kQBAAAUJwoAAKA4UQAAAMWJAgAAKE4UAABAcaIAAACKEwUAAFCcKAAAgOJEAQAAFCcKAACgOFEAAADFiQIAAChOFAAAQHGiAAAAihMFAABQnCgAAIDiRAEAABQnCgAAoDhRAAAAxYkCAAAoThQAAEBxogAAAIoTBQAAUJwoAACA4kQBAAAUJwoAAKA4UQAAAMWJAgAAKE4UAABAcaIAAACKEwUAAFCcKAAAgOJEAQAAFCcKAACgOFEAAADFiQIAAChOFADM7YeIuBUR91fcoa149gxy7QWA+YkCgDndiIjHMvNSZj6XmY9GxPMR8fXKewFwBokCgLncjYgrmfleZv769w8y89vMPIiIt9ZZDYCzShQAzON+RBxk5t3/eigzP4mI9/ey0YMj93jWjLx+BQwnCgDmcT'+
			'0zfzrJg5n5QUTcHrzPX1xq+4gqYDhRADCHHzPz81PO3BiyyWEutX1EFTCcKACYw8enHcjMmxHx84Bd/s2lto+oAoYTBQBzuLnj3BeLbnE0l9o+ogoYThQAbN83mXlvx9mvFt3kaC61fUQVMJwoANi+7zpmby22xfFcavuIKmA4UQCwfXd2HczM3yJi128Z2A9RBQwnCgC27/fO+RP9GVNW45sCYDhRALB9f3TO/7LIFsdzqe3jmwJgOFEAsH3nO+fPLbLF8Vxq+4gqYDhRALB9FzrnLy6yBQCbJQoAtu/xzvlLSywBwHaJAoDte2bXwdba5Yh4eMFdANggUQCwfc92zL642BbH8058H7/JAIYTBQDb90hr7eUdZ19bdJOjudT2EVXAcKIAYA5vnHagtfZkRBwsv8rho/ZwxsxEFTCcKACYw7XW2hOnnHlnyCaHudT2'+
			'EVXAcKIAYB4fnfTB1trTEfHmwF3+cdyezpmVqAKGEwUA83iltfbu/z3UWrsYEV/uYR8ANkIUAMzlw9baZ621I/+hWWvtpYj4PiKe2u9aAJxlD629AACLez0iXm2tfRoRtyPiXkRcjYhrEfHCmosBcDaJAoA5nY+It9de4gHvxPfxmwxgOK8PAQBAcaIAAACKEwUAAFCcKAAAgOJEAQAAFCcKAACgOFEAAADFiQIAAChOFAAAQHGiAAAAihMFAABQnCgAAIDiRAEAABQnCgAAoDhRAAAAxYkCAAAoThQAAEBxogAAAIoTBQAAUJwoAACA4kQBAAAUJwoAAKA4UQAAAMWJAgAAKE4UAABAcaIAAACKEwUAAFCcKAAAgOL+BAAA///s14EAAAAAgCB/60Eui6QAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAA'+
			'DmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOak'+
			'AAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmAgAA///s3b+LZeUdx/HPA4JrdHdNxGAskkUikQTFX2jWnZ2Z1Wydyso/IG0graSzFSxEtNB/wMLGfyAJKVKEoKRIkSqCCBJSJWvj1+LOcndWNzOz98dzzn1eL5hm4J77Yar75pl7jigAAIDBiQIAABicKAAAgMGJAgAAGJwoAACAwYkCAAAYnCgAAIDBiQIAABicKAAAgMGJAgAAGJwoAACAwYkCAAAYnCgAAIDBiQIAABicKAAAgMHd03sAADuvVnpx1bNJLqxpyxyd6z0A2H2iAIBNayu+/u0kv1zHEAC+m38fAgCAwYkCAAAYnCgAAIDBiQIAABicKAAAgM'+
			'GJAgAAGJwoAGDTVnpOQVa/penoVv37AwMQBcBpfNV7ALO26od6H2pX0Fr7uvcGYPpEAXAa/+49gFlzUtDPp70HAPMgCoDT+GfvAcBd+aj3AGAeRAFwotba/5J80HsHcGbv9B4AzIMoAE7r970HAGfyemvt894jgHkQBcCptNY+S/Jq7x3Mku8EbN97rbU3eo8A5kMUAKfWWvswyX6Sf/Tewqy4e9D2/C3JQWvtN72HAPNyT+8BwLy01v6Y5Imq2kvyWpJfJ/lR31VM3KpR8NckN9YxZEf9J8nfk3zcWvtz7zHAPDnSBVZWVZeSHCQ5PPq51G8NE3TQWvtD7xEA3JkoANauqh5N8qssQ+GxroPoTRQATJwoADauqh7JIhIOswiFn3YdxLaJAoCJEwXA1lXVD5Ncz/Ik4fGug9g0UQAwcaIA6O4oEl7J8iThZ10HsW6i'+
			'AGDiRAEwOVX1cBaRcPMk4Ymug1iVKACYOFEATF5VPZTjJwk/7zqIsxIFABMnCoDZqaof5PhJwi+6DuIkogBg4kQBMHtHkXAty5OEJ7sO4naiAGDiRAGwc6rq+1k+SO0wyVMd5yAKACZPFAA7r6ou5vhJwtNdB41HFABMnCgAhlNVF3L8JOGZjnNGIAoAJk4UAMOrqvNZBsJBkud67tlBogBg4kQBwG2OImE/y1B4vueeHSAKACZOFACcoKoeyCISbt4C9YWug+ZHFABMnCgAOKOq+l6OnyS82HPPDIgCgIkTBQArqqr7cvwk4XLXQdMjCgAmThQArNlRJOxl+cXlK10H9ScKACZOFABsWFWdyyISbp4k7HUdtH2iAGDiRAFAB1X1cpYnCft912ycKACYOFEAMAFVdS3Lk4SDvmvWThQATJwoAJigqro1EC4nOdd10G'+
			'pEAcDEiQKAGaiq2+9udF/XQWcjCgAmThQAzNAtkXA1yfXOc05ytbX2p94jALgzUQCwA6rqpSwfpvZSkvt77rnNj1tr/+o9AoA7EwUAO+goEvaTXMviOQm9IuHL1trDnd4bgFMSBQADqKoXszxJuJLk/Jbe+o3W2utbei8A7pIoABhQVV3O4vsIh1k8TG0TkXAjyaXW2hcbuDYAayQKAEhVPZ/lScJekotruOzvWmtvruE6AGyYKADgW6rquSxvgXo1yYNnvMRbrbXfrnsXAJshCgA4UVU9m0UkXMv/j4T3k7zbWvvLtrYBsDpRAMCZVdWjSX6S5N6jX91I8klr7b/9VgFwt0QBAAAMThQAAMDgRAEAAAxOFAAAwOBEAQAADE4UAADA4EQBAAAMThQAAMDgRAEAAAxOFAAAwOBEAQAADE4UAADA4EQBAAAMThQAAMDg'+
			'RAEAAAxOFAAAwOBEAQAADE4UAADA4EQBAAAMThQAAMDgRAEAAAxOFAAAwOBEAQAADE4UAADA4EQBAAAMThQAAMDgRAEAAAzuGwAAAP//7NeBAAAAAIAgf+tBLoukAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5q'+
			'QAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5gIAAP//7NeBAAAAAIAgf+tBLoukAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA'+
			'5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpA'+
			'AAAOakAAAA5gIAAP//7deBAAAAAIAgf+tBLoukAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADm'+
			'pAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5qQAAADmpAAAAOakAAAA5gJw4i7AL61nlQAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 157px;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : -36px;';
		hs+='visibility : inherit;';
		hs+='width : 153px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
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
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg2.appendChild(me._image_1);
		me._doorright.appendChild(me._ht_node_bg2);
		el=me._ht_node_custom_image2=document.createElement('div');
		els=me._ht_node_custom_image2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image2.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image2.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image2.ggAltText));
			me._ht_node_custom_image2.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image2.ggText_untranslated = img;
			me._ht_node_custom_image2.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image2.ggSubElement.style.width = '0px';
			me._ht_node_custom_image2.ggSubElement.style.height = '0px';
			me._ht_node_custom_image2.ggSubElement.src='';
			me._ht_node_custom_image2.ggSubElement.src=me._ht_node_custom_image2.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image2.ggText != player._(me._ht_node_custom_image2.ggText_untranslated)) {
				me._ht_node_custom_image2.ggText = player._(me._ht_node_custom_image2.ggText_untranslated);
				me._ht_node_custom_image2.ggUpdateImage()
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
		me._ht_node_custom_image2.ggIsActive=function() {
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
		me._ht_node_custom_image2.logicBlock_visible = function() {
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
			if (me._ht_node_custom_image2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image2.style.transition='';
				if (me._ht_node_custom_image2.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image2.style.visibility=(Number(me._ht_node_custom_image2.style.opacity)>0||!me._ht_node_custom_image2.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image2.ggSubElement.src=me._ht_node_custom_image2.ggText;
					me._ht_node_custom_image2.ggVisible=true;
				}
				else {
					me._ht_node_custom_image2.style.visibility="hidden";
					me._ht_node_custom_image2.ggSubElement.src='';
					me._ht_node_custom_image2.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image2.logicBlock_visible();
		me._ht_node_custom_image2.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image2.clientWidth;
			var parentHeight = me._ht_node_custom_image2.clientHeight;
			var img = me._ht_node_custom_image2__img;
			var aspectRatioDiv = me._ht_node_custom_image2.clientWidth / me._ht_node_custom_image2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image2.ggScrollbars || currentWidth < me._ht_node_custom_image2.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image2.scrollLeft=currentWidth / 2 - me._ht_node_custom_image2.clientWidth / 2;
			}
			if (!me._ht_node_custom_image2.ggScrollbars || currentHeight < me._ht_node_custom_image2.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image2.scrollTop=currentHeight / 2 - me._ht_node_custom_image2.clientHeight / 2;
			}
		}
		me._doorright.appendChild(me._ht_node_custom_image2);
		me._doorright.logicBlock_visible();
		me.elementMouseOver['doorright']=false;
		me._ht_node_preview_bg2.logicBlock_visible();
		me._ht_node_preview_title2.logicBlock_visible();
		me._ht_node_bg2.logicBlock_visible();
		me._ht_node_visited2.logicBlock_visible();
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image2.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image2.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image2.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image2.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image2.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_preview_bg2.logicBlock_visible();
				me._ht_node_preview_title2.logicBlock_visible();
				me._ht_node_bg2.logicBlock_visible();
				me._ht_node_custom_image2.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._doorright.logicBlock_visible();
				me._ht_node_preview_bg2.logicBlock_visible();
				me._ht_node_preview_title2.logicBlock_visible();
				me._ht_node_bg2.logicBlock_visible();
				me._ht_node_visited2.logicBlock_visible();
				me._ht_node_visited2.logicBlock_visible();
				me._ht_node_custom_image2.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_visited2.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._doorright.logicBlock_visible();
				me._ht_node_preview_bg2.logicBlock_visible();
				me._ht_node_preview_title2.logicBlock_visible();
				me._ht_node_bg2.logicBlock_visible();
				me._ht_node_custom_image2.logicBlock_visible();
			};
			me.ggEvent_varchanged_vis_skin=function() {
				me._doorright.logicBlock_visible();
			};
			me.__div = me._doorright;
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7fQoJLnN0MXtmaWxsOiNFNkU2RTY7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MntmaWxsOiNGRkZGRkY7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzIsMy4yYzEwLjYsMCwx'+
			'OS4yLDguNiwxOS4yLDE5LjJsMCwwYzAsMTIuNC0xMCwzMC42LTE5LjIsMzguNGwwLDBjLTkuMy03LjgtMTkuMi0yNi0xOS4yLTM4LjRsMCwwICAgQzEyLjgsMTEuOCwyMS40LDMuMiwzMiwzLjJMMzIsMy4yeiIvPgogIDxjaXJjbGUgY2xhc3M9InN0MiIgY3g9IjMyIiBjeT0iMjIuNCIgcj0iNC4zIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8ZWxsaXBzZSBjbGFzcz0ic3QxIiBjeD0iMzIiIHJ4PSI4LjYiIHJ5PSIxNiIgY3k9IjMyIi8+CiAgPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMzIiIGN5PSIzMiIgcj0i'+
			'MTYiLz4KICA8bGluZSB4Mj0iNDgiIHkyPSIzMiIgY2xhc3M9InN0MSIgeDE9IjE2IiB5MT0iMzIiLz4KICA8bGluZSB4Mj0iMzIiIHkyPSI0OCIgY2xhc3M9InN0MSIgeDE9IjMyIiB5MT0iMTYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGVsbGlwc2UgY3g9IjMyIiByeD0iOC42MiIgcnk9IjE2IiBjeT0iMzIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxjaX'+
			'JjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjE2IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KICA8bGluZSB4Mj0iNDgiIHkyPSIzMiIgeDE9IjE2IiB5MT0iMzIiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogIDxsaW5lIHgyPSIzMiIgeTI9IjQ4IiB4MT0iMzIiIHkxPSIxNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1p'+
			'dDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		el=me._ht_node_custom_image3=document.createElement('div');
		els=me._ht_node_custom_image3__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image3.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image3.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image3.ggAltText));
			me._ht_node_custom_image3.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image3.ggText_untranslated = img;
			me._ht_node_custom_image3.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image3.ggSubElement.style.width = '0px';
			me._ht_node_custom_image3.ggSubElement.style.height = '0px';
			me._ht_node_custom_image3.ggSubElement.src='';
			me._ht_node_custom_image3.ggSubElement.src=me._ht_node_custom_image3.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image3.ggText != player._(me._ht_node_custom_image3.ggText_untranslated)) {
				me._ht_node_custom_image3.ggText = player._(me._ht_node_custom_image3.ggText_untranslated);
				me._ht_node_custom_image3.ggUpdateImage()
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
		me._ht_node_custom_image3.ggIsActive=function() {
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
		me._ht_node_custom_image3.logicBlock_visible = function() {
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
			if (me._ht_node_custom_image3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image3.style.transition='';
				if (me._ht_node_custom_image3.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image3.style.visibility=(Number(me._ht_node_custom_image3.style.opacity)>0||!me._ht_node_custom_image3.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image3.ggSubElement.src=me._ht_node_custom_image3.ggText;
					me._ht_node_custom_image3.ggVisible=true;
				}
				else {
					me._ht_node_custom_image3.style.visibility="hidden";
					me._ht_node_custom_image3.ggSubElement.src='';
					me._ht_node_custom_image3.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image3.logicBlock_visible();
		me._ht_node_custom_image3.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image3.clientWidth;
			var parentHeight = me._ht_node_custom_image3.clientHeight;
			var img = me._ht_node_custom_image3__img;
			var aspectRatioDiv = me._ht_node_custom_image3.clientWidth / me._ht_node_custom_image3.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image3.ggScrollbars || currentWidth < me._ht_node_custom_image3.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image3.scrollLeft=currentWidth / 2 - me._ht_node_custom_image3.clientWidth / 2;
			}
			if (!me._ht_node_custom_image3.ggScrollbars || currentHeight < me._ht_node_custom_image3.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image3.scrollTop=currentHeight / 2 - me._ht_node_custom_image3.clientHeight / 2;
			}
		}
		me._ht_url.appendChild(me._ht_node_custom_image3);
		me._ht_url.logicBlock_visible();
		me.elementMouseOver['ht_url']=false;
		me._ht_url_title.logicBlock_position();
		me._ht_url_title.logicBlock_visible();
		me._ht_url_bg.logicBlock_visible();
		me.elementMouseOver['ht_url_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image3.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image3.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image3.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image3.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image3.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_url_title.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_node_custom_image3.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_title.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_node_custom_image3.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_url.logicBlock_visible();
				me._ht_url_title.logicBlock_position();
				me._ht_url_title.logicBlock_visible();
				me._ht_url_bg.logicBlock_visible();
				me._ht_node_custom_image3.logicBlock_visible();
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
			me._ht_node_preview_bg3.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._ht_node_preview_bg3.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_bg3=document.createElement('div');
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
		me._ht_node_preview_bg3.ggIsActive=function() {
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
		me._ht_node_preview_bg3.logicBlock_visible = function() {
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
			if (me._ht_node_preview_bg3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_preview_bg3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_preview_bg3.style.transition='';
				if (me._ht_node_preview_bg3.ggCurrentLogicStateVisible == 0) {
					me._ht_node_preview_bg3.style.visibility=(Number(me._ht_node_preview_bg3.style.opacity)>0||!me._ht_node_preview_bg3.style.opacity)?'inherit':'hidden';
					me._ht_node_preview_bg3.ggVisible=true;
				}
				else {
					me._ht_node_preview_bg3.style.visibility="hidden";
					me._ht_node_preview_bg3.ggVisible=false;
				}
			}
		}
		me._ht_node_preview_bg3.logicBlock_visible();
		me._ht_node_preview_bg3.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_preview_img3=document.createElement('div');
		els=me._ht_node_preview_img3__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/ht_node_preview_img3_" + nodeId + ".jpg");
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
		me._ht_node_preview_img3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._ht_node_preview_img3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_preview_bg3.appendChild(me._ht_node_preview_img3);
		el=me._ht_node_preview_title3=document.createElement('div');
		els=me._ht_node_preview_title3__text=document.createElement('div');
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
		me._ht_node_preview_title3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_node_preview_title3.ggUpdateText();
		player.addListener('changenode', function() {
			me._ht_node_preview_title3.ggUpdateText();
		});
		el.appendChild(els);
		me._ht_node_preview_title3.ggIsActive=function() {
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
		me._ht_node_preview_title3.logicBlock_visible = function() {
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
			if (me._ht_node_preview_title3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_preview_title3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_preview_title3.style.transition='';
				if (me._ht_node_preview_title3.ggCurrentLogicStateVisible == 0) {
					me._ht_node_preview_title3.style.visibility="hidden";
					me._ht_node_preview_title3.ggVisible=false;
				}
				else {
					me._ht_node_preview_title3.style.visibility=(Number(me._ht_node_preview_title3.style.opacity)>0||!me._ht_node_preview_title3.style.opacity)?'inherit':'hidden';
					me._ht_node_preview_title3.ggVisible=true;
				}
			}
		}
		me._ht_node_preview_title3.logicBlock_visible();
		me._ht_node_preview_title3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_preview_bg3.appendChild(me._ht_node_preview_title3);
		me._ht_node.appendChild(me._ht_node_preview_bg3);
		el=me._ht_node_bg3=document.createElement('div');
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
		me._ht_node_bg3.ggIsActive=function() {
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
		me._ht_node_bg3.logicBlock_visible = function() {
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
			if (me._ht_node_bg3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_bg3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_bg3.style.transition='';
				if (me._ht_node_bg3.ggCurrentLogicStateVisible == 0) {
					me._ht_node_bg3.style.visibility="hidden";
					me._ht_node_bg3.ggVisible=false;
				}
				else {
					me._ht_node_bg3.style.visibility=(Number(me._ht_node_bg3.style.opacity)>0||!me._ht_node_bg3.style.opacity)?'inherit':'hidden';
					me._ht_node_bg3.ggVisible=true;
				}
			}
		}
		me._ht_node_bg3.logicBlock_visible();
		me._ht_node_bg3.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_node_visited3=document.createElement('div');
		els=me._ht_node_visited3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I2ZmZmZmZjt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO30mI3hkOwoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9ImhpZ2hsaWdodCI+CiAgPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMzIiIGN5PSIzMiIgcj0iMzEiLz4KIDwvZz4KIDxnIGlkPSJxdWFkcmF0b19jZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGNsYXNzPSJzdDEiLz4K'+
			'IDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguNiwyNi43IDMwLjksNDggNDkuNCwxNiAmI3g5OyIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_visited3__img.setAttribute('src',hs);
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
		me._ht_node_visited3.ggIsActive=function() {
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
		me._ht_node_visited3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._ht_node_visited3.ggElementNodeId()) == true)) || 
				((me._ht_node_visited3.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_visited3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_visited3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_visited3.style.transition='';
				if (me._ht_node_visited3.ggCurrentLogicStateVisible == 0) {
					me._ht_node_visited3.style.visibility=(Number(me._ht_node_visited3.style.opacity)>0||!me._ht_node_visited3.style.opacity)?'inherit':'hidden';
					me._ht_node_visited3.ggVisible=true;
				}
				else {
					me._ht_node_visited3.style.visibility="hidden";
					me._ht_node_visited3.ggVisible=false;
				}
			}
		}
		me._ht_node_visited3.logicBlock_visible();
		me._ht_node_visited3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg3.appendChild(me._ht_node_visited3);
		el=me._ht_node_icon=document.createElement('div');
		els=me._ht_node_icon__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWxpbmUgcG9pbnRzPSIxOC4xLDI5LjkgMzIsMTYgMzIsMTYgNDUuOSwyOS45ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPGxpbmUgeDI9IjMyIiB5Mj0iMTcuNiIg'+
			'eDE9IjMyIiB5MT0iNDgiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_node_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlsaW5lIHBvaW50cz0iMTguMDYgMjkuOTMgMzIuMDEgMTYgMzIuMDEgMTYgNDUuOTQgMjkuOTMiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW'+
			'9wYWNpdHk6MSIvPgogIDxsaW5lIHgyPSIzMiIgeTI9IjE3LjY0IiB4MT0iMzIiIHkxPSI0OCIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_icon__imgo.setAttribute('src',hs);
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
		me._ht_node_icon.onmouseenter=function (e) {
			me._ht_node_icon__img.style.visibility='hidden';
			me._ht_node_icon__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_node_icon']=true;
		}
		me._ht_node_icon.onmouseleave=function (e) {
			me._ht_node_icon__img.style.visibility='inherit';
			me._ht_node_icon__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_node_icon']=false;
		}
		me._ht_node_icon.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_bg3.appendChild(me._ht_node_icon);
		me._ht_node.appendChild(me._ht_node_bg3);
		el=me._ht_node_custom_image4=document.createElement('div');
		els=me._ht_node_custom_image4__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._ht_node_custom_image4.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._ht_node_custom_image4.ggSubElement.setAttribute('alt', player._(me._ht_node_custom_image4.ggAltText));
			me._ht_node_custom_image4.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._ht_node_custom_image4.ggText_untranslated = img;
			me._ht_node_custom_image4.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._ht_node_custom_image4.ggSubElement.style.width = '0px';
			me._ht_node_custom_image4.ggSubElement.style.height = '0px';
			me._ht_node_custom_image4.ggSubElement.src='';
			me._ht_node_custom_image4.ggSubElement.src=me._ht_node_custom_image4.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._ht_node_custom_image4.ggText != player._(me._ht_node_custom_image4.ggText_untranslated)) {
				me._ht_node_custom_image4.ggText = player._(me._ht_node_custom_image4.ggText_untranslated);
				me._ht_node_custom_image4.ggUpdateImage()
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
		me._ht_node_custom_image4.ggIsActive=function() {
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
		me._ht_node_custom_image4.logicBlock_visible = function() {
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
			if (me._ht_node_custom_image4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_custom_image4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_custom_image4.style.transition='';
				if (me._ht_node_custom_image4.ggCurrentLogicStateVisible == 0) {
					me._ht_node_custom_image4.style.visibility=(Number(me._ht_node_custom_image4.style.opacity)>0||!me._ht_node_custom_image4.style.opacity)?'inherit':'hidden';
					me._ht_node_custom_image4.ggSubElement.src=me._ht_node_custom_image4.ggText;
					me._ht_node_custom_image4.ggVisible=true;
				}
				else {
					me._ht_node_custom_image4.style.visibility="hidden";
					me._ht_node_custom_image4.ggSubElement.src='';
					me._ht_node_custom_image4.ggVisible=false;
				}
			}
		}
		me._ht_node_custom_image4.logicBlock_visible();
		me._ht_node_custom_image4.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._ht_node_custom_image4.clientWidth;
			var parentHeight = me._ht_node_custom_image4.clientHeight;
			var img = me._ht_node_custom_image4__img;
			var aspectRatioDiv = me._ht_node_custom_image4.clientWidth / me._ht_node_custom_image4.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			if (!me._ht_node_custom_image4.ggScrollbars || currentWidth < me._ht_node_custom_image4.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._ht_node_custom_image4.scrollLeft=currentWidth / 2 - me._ht_node_custom_image4.clientWidth / 2;
			}
			if (!me._ht_node_custom_image4.ggScrollbars || currentHeight < me._ht_node_custom_image4.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._ht_node_custom_image4.scrollTop=currentHeight / 2 - me._ht_node_custom_image4.clientHeight / 2;
			}
		}
		me._ht_node.appendChild(me._ht_node_custom_image4);
		me._ht_node.logicBlock_visible();
		me.elementMouseOver['ht_node']=false;
		me._ht_node_preview_bg3.logicBlock_visible();
		me._ht_node_preview_title3.logicBlock_visible();
		me._ht_node_bg3.logicBlock_visible();
		me._ht_node_visited3.logicBlock_visible();
		me.elementMouseOver['ht_node_icon']=false;
		if ((hotspot) && (hotspot.customimage)) {
			me._ht_node_custom_image4.style.width=hotspot.customimagewidth + 'px';
			me._ht_node_custom_image4.style.height=hotspot.customimageheight + 'px';
			let d = 0;
			me._ht_node_custom_image4.style.left='calc(50% - ' + ((hotspot.customimagewidth)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
			d = 0;
			me._ht_node_custom_image4.style.top='calc(50% - ' + ((hotspot.customimageheight)/2 + 0) +'px' + ((d<0) ? ' - ' : ' + ') + d + 'px)';
		}
		me._ht_node_custom_image4.logicBlock_visible();
			me.ggEvent_activehotspotchanged=function() {
				me._ht_node_preview_bg3.logicBlock_visible();
				me._ht_node_preview_title3.logicBlock_visible();
				me._ht_node_bg3.logicBlock_visible();
				me._ht_node_custom_image4.logicBlock_visible();
			};
			me.ggEvent_changenode=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_preview_bg3.logicBlock_visible();
				me._ht_node_preview_title3.logicBlock_visible();
				me._ht_node_bg3.logicBlock_visible();
				me._ht_node_visited3.logicBlock_visible();
				me._ht_node_visited3.logicBlock_visible();
				me._ht_node_custom_image4.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._ht_node_visited3.logicBlock_visible();
			};
			me.ggEvent_configloaded=function() {
				me._ht_node.logicBlock_visible();
				me._ht_node_preview_bg3.logicBlock_visible();
				me._ht_node_preview_title3.logicBlock_visible();
				me._ht_node_bg3.logicBlock_visible();
				me._ht_node_custom_image4.logicBlock_visible();
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxNDE0MTQ7fQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiMxNDE0MTQ7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgogPGcgaWQ9Imljb25hIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzIsMjYuNWMzLjEsMCw1LjYsMi41LDUuNiw1LjZzLTIuNSw1LjYtNS42LDUuNnMtNS42LTIuNS01LjYtNS42UzI4LjksMjYuNSwzMiwyNi41TDMyLDI2LjUgTTMyLDI0LjMgICBjLTQuMywwLTcuOCwzLjUtNy44LDcuOFMyNy43LDQwLDMyLDQwczcuOC0zLjUsNy44LTcuOFMzNi4zLDI0LjMsMzIs'+
			'MjQuM0wzMiwyNC4zeiIvPgogIDxwb2x5Z29uIHBvaW50cz0iMzcuMiwyMi41IDM1LjgsMTkuNyAyOC4xLDE5LjcgMjYuOSwyMi41IDE2LjQsMjIuNSAxNi40LDQzLjQgNDcuNiw0My40IDQ3LjYsMjIuNSAgIiBjbGFzcz0ic3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_image_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTMyLDI4LjE3YTQsNCwwLDEsMS00LDQsNCw0LDAsMCwxLDQtNG0wLTRhOCw4LDAsMSwwLDgsOCw4LDgsMCwwLDAtOC04WiIgc3R5bGU9ImZpbGw6IzAwMDAwMDsgZmlsbC1vcGFjaXR5OjEiLz4KICA8cG9seWdvbiBwb2ludHM9Ij'+
			'M3LjIzIDIyLjIyIDM1Ljg5IDE5LjQ1IDI4LjExIDE5LjQ1IDI2Ljc3IDIyLjIyIDE2IDIyLjIyIDE2IDQzLjU1IDQ4IDQzLjU1IDQ4IDIyLjIyIDM3LjIzIDIyLjIyIiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo0cHg7IHN0cm9rZS1vcGFjaXR5OjEiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSIzMiIgY3k9IjIwLjgiIHI9IjEuMyIvPgogIDxsaW5lIHgyPSIzMiIgeTI9IjQ3LjUiIGNsYXNzPSJzdDEiIHgxPSIzMiIgeTE9'+
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
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPGNpcmNsZSBjeD0iMzIiIGN5PSIyMC44NCIgcj0iMS4zMyIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiAgPGxpbmUgeDI9Ij'+
			'MyIiB5Mj0iNDcuNSIgeDE9IjMyIiB5MT0iMzEuNSIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eToxIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
				let pdfInterval_1 = setInterval(() => {
					if (skin._pdf_popup__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_1);
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
				let pdfInterval_2 = setInterval(() => {
					if (skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.initialized && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.downloadComplete && skin._pdf_popup_phone__pdf.contentWindow.PDFViewerApplication.pdfViewer._pageViewsReady) {
						skin._pdf_popup_phone.ggSetCurrentPage(Number(player._(me.hotspot.target)));
						clearInterval(pdfInterval_2);
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6bm9uZTt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30mI3hkOwo8L3N0eWxlPgogPGcgaWQ9InF1YWRyYXRvX2NlbnRyYXRvcmUiPgogIDxyZWN0IHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIvPgogPC9nPgogPGcgaWQ9Imljb25hIj4KICA8cG9seWdvbiBwb2ludHM9IjM2LDE2IDIwLDE2IDIwLDQ4IDQ0LDQ4IDQ0LDI0ICYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzYsMTYgMzYs'+
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
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBvbHlnb24gcG9pbnRzPSIzNiAxNiAyMCAxNiAyMCA0OCA0NCA0OCA0NCAyNCAzNiAxNiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NHB4OyBzdHJva2Utb3BhY2l0eT'+
			'oxIi8+CiAgPHBvbHlsaW5lIHBvaW50cz0iMzYgMTYgMzYgMjQgNDQgMjQiIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLXdpZHRoOjRweDsgc3Ryb2tlLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzE0MTQxNDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1LjgsMjYuNHYxMS4yaC0xNlYyNi40SDM1LjggTTQ0LjIsMjcuOHY4LjNMMzguOCwzM0wzNywzMmwxLjctMUw0NC4yLDI3LjggTTQ2LjIsMjQuNGwtOC41LDQuOXYtNC45aC0yMCYjeGQ7JiN4YTsmI3g5OyYjeDk7djE1LjJoMjB2LTQuOWw4LjUsNC45VjI0LjRMNDYuMiwyNC40eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_file_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_file_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMNDgsNDAuNTdWMjMuNDNaIiBzdHlsZT'+
			'0iZmlsbDojMDAwMDAwOyBmaWxsLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzE0MTQxNDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1LjgsMjYuNHYxMS4yaC0xNlYyNi40SDM1LjggTTQ0LjIsMjcuOHY4LjNMMzguOCwzM0wzNywzMmwxLjctMUw0NC4yLDI3LjggTTQ2LjIsMjQuNGwtOC41LDQuOXYtNC45aC0yMCYjeGQ7JiN4YTsmI3g5OyYjeDk7djE1LjJoMjB2LTQuOWw4LjUsNC45VjI0LjRMNDYuMiwyNC40eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_url_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_url_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMNDgsNDAuNTdWMjMuNDNaIiBzdHlsZT'+
			'0iZmlsbDojMDAwMDAwOyBmaWxsLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzE0MTQxNDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1LjgsMjYuNHYxMS4yaC0xNlYyNi40SDM1LjggTTQ0LjIsMjcuOHY4LjNMMzguOCwzM0wzNywzMmwxLjctMUw0NC4yLDI3LjggTTQ2LjIsMjQuNGwtOC41LDQuOXYtNC45aC0yMCYjeGQ7JiN4YTsmI3g5OyYjeDk7djE1LjJoMjB2LTQuOWw4LjUsNC45VjI0LjRMNDYuMiwyNC40eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_vimeo_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_vimeo_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMNDgsNDAuNTdWMjMuNDNaIiBzdHlsZT'+
			'0iZmlsbDojMDAwMDAwOyBmaWxsLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHk9IjBweCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHZpZXdCb3g9IjAgMCA2NC'+
			'A2NCI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzE0MTQxNDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1LjgsMjYuNHYxMS4yaC0xNlYyNi40SDM1LjggTTQ0LjIsMjcuOHY4LjNMMzguOCwzM0wzNywzMmwxLjctMUw0NC4yLDI3LjggTTQ2LjIsMjQuNGwtOC41LDQuOXYtNC45aC0yMCYjeGQ7JiN4YTsmI3g5OyYjeDk7djE1LjJoMjB2LTQuOWw4LjUsNC45VjI0LjRMNDYuMiwyNC40eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_youtube_icon__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_youtube_icon__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+CiA8ZyBpZD0icXVhZHJhdG9fY2VudHJhdG9yZSIgZGF0YS1uYW1lPSJxdWFkcmF0byBjZW50cmF0b3JlIj4KICA8cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHN0eWxlPSJmaWxsOm5vbmUiLz4KIDwvZz4KIDxnIGlkPSJpY29uYSI+CiAgPHBhdGggZD0iTTM0LjQ4LDI3LjQzdjkuMTRIMjBWMjcuNDNIMzQuNDhNNDQsMzAuMzV2My4zTDQxLjE1LDMyLDQ0LDMwLjM1bTQtNi45Mi05LjUyLDUuNDlWMjMuNDNIMTZWNDAuNTdIMzguNDhWMzUuMDhMNDgsNDAuNTdWMjMuNDNaIiBzdHlsZT'+
			'0iZmlsbDojMDAwMDAwOyBmaWxsLW9wYWNpdHk6MSIvPgogPC9nPgo8L3N2Zz4K';
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
			if (hotspot.skinid=='doorright') {
				hotspot.skinid = 'doorright';
				hsinst = new SkinHotspotClass_doorright(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='upnode') {
				hotspot.skinid = 'upnode';
				hsinst = new SkinHotspotClass_upnode(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='downnode') {
				hotspot.skinid = 'downnode';
				hsinst = new SkinHotspotClass_downnode(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'doorleft';
				hsinst = new SkinHotspotClass_doorleft(me, hotspot);
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