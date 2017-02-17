"use strict";require("./user_expectation.js");'use strict';global.tr.exportTo('tr.model.um',function(){var LOAD_SUBTYPE_NAMES={SUCCESSFUL:'Successful',FAILED:'Failed'};var DOES_LOAD_SUBTYPE_NAME_EXIST={};for(var key in LOAD_SUBTYPE_NAMES){DOES_LOAD_SUBTYPE_NAME_EXIST[LOAD_SUBTYPE_NAMES[key]]=true;;}function LoadExpectation(parentModel,initiatorTitle,start,duration){if(!DOES_LOAD_SUBTYPE_NAME_EXIST[initiatorTitle])throw new Error(initiatorTitle+' is not in LOAD_SUBTYPE_NAMES');tr.model.um.UserExpectation.call(this,parentModel,initiatorTitle,start,duration);this.renderProcess=undefined;this.renderMainThread=undefined;this.routingId=undefined;this.parentRoutingId=undefined;this.loadFinishedEvent=undefined;}LoadExpectation.prototype={__proto__:tr.model.um.UserExpectation.prototype,constructor:LoadExpectation};tr.model.um.UserExpectation.subTypes.register(LoadExpectation,{stageTitle:'Load',colorId:tr.b.ColorScheme.getColorIdForReservedName('rail_load')});return{LOAD_SUBTYPE_NAMES:LOAD_SUBTYPE_NAMES,LoadExpectation:LoadExpectation};});