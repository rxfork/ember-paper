/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/base-focusable', ['exports', 'ember-paper/components/base-focusable'], function (exports, BaseFocusable) {

	'use strict';

	exports['default'] = BaseFocusable['default'];

});
define('dummy/components/paper-backdrop', ['exports', 'ember-paper/components/paper-backdrop'], function (exports, PaperBackdrop) {

	'use strict';

	exports['default'] = PaperBackdrop['default'];

});
define('dummy/components/paper-button', ['exports', 'ember-paper/components/paper-button'], function (exports, PaperButton) {

	'use strict';

	exports['default'] = PaperButton['default'];

});
define('dummy/components/paper-checkbox', ['exports', 'ember-paper/components/paper-checkbox'], function (exports, PaperCheckbox) {

	'use strict';

	exports['default'] = PaperCheckbox['default'];

});
define('dummy/components/paper-content', ['exports', 'ember-paper/components/paper-content'], function (exports, PaperContent) {

	'use strict';

	exports['default'] = PaperContent['default'];

});
define('dummy/components/paper-divider', ['exports', 'ember-paper/components/paper-divider'], function (exports, PaperDivider) {

	'use strict';

	exports['default'] = PaperDivider['default'];

});
define('dummy/components/paper-icon', ['exports', 'ember-paper/components/paper-icon'], function (exports, PaperIcon) {

	'use strict';

	exports['default'] = PaperIcon['default'];

});
define('dummy/components/paper-item', ['exports', 'ember-paper/components/paper-item'], function (exports, PaperItem) {

	'use strict';

	exports['default'] = PaperItem['default'];

});
define('dummy/components/paper-list', ['exports', 'ember-paper/components/paper-list'], function (exports, PaperList) {

	'use strict';

	exports['default'] = PaperList['default'];

});
define('dummy/components/paper-nav-container', ['exports', 'ember-paper/components/paper-nav-container'], function (exports, PaperNavContainer) {

	'use strict';

	exports['default'] = PaperNavContainer['default'];

});
define('dummy/components/paper-radio', ['exports', 'ember-paper/components/paper-radio'], function (exports, PaperRadio) {

	'use strict';

	exports['default'] = PaperRadio['default'];

});
define('dummy/components/paper-sidenav-toggle', ['exports', 'ember-paper/components/paper-sidenav-toggle'], function (exports, PaperSidenavToggle) {

	'use strict';

	exports['default'] = PaperSidenavToggle['default'];

});
define('dummy/components/paper-sidenav', ['exports', 'ember-paper/components/paper-sidenav'], function (exports, PaperSidenav) {

	'use strict';

	exports['default'] = PaperSidenav['default'];

});
define('dummy/components/paper-switch', ['exports', 'ember-paper/components/paper-switch'], function (exports, PaperSwitch) {

	'use strict';

	exports['default'] = PaperSwitch['default'];

});
define('dummy/components/paper-text', ['exports', 'ember-paper/components/paper-text'], function (exports, PaperText) {

	'use strict';

	exports['default'] = PaperText['default'];

});
define('dummy/components/paper-tile-content', ['exports', 'ember-paper/components/paper-tile-content'], function (exports, PaperTileContent) {

	'use strict';

	exports['default'] = PaperTileContent['default'];

});
define('dummy/components/paper-tile-left', ['exports', 'ember-paper/components/paper-tile-left'], function (exports, PaperTileLeft) {

	'use strict';

	exports['default'] = PaperTileLeft['default'];

});
define('dummy/components/paper-toolbar', ['exports', 'ember-paper/components/paper-toolbar'], function (exports, PaperToolbar) {

	'use strict';

	exports['default'] = PaperToolbar['default'];

});
define('dummy/controllers/checkbox', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    value1:true,
    value2:false
  });

});
define('dummy/controllers/icons', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    icons:[
      'access-alarms',
      'access-time',
      'accessibility',
      'account-box',
      'account-circle',
      'adb',
      'add',
      'add-alarm',
      'add-box',
      'add-circle',
      'add-circle-outline',
      'airplane-mode-off',
      'airplane-mode-on',
      'android',
      'apps',
      'archive',
      'arrow-back',
      'arrow-drop-down',
      'arrow-drop-down-circle',
      'arrow-drop-up',
      'arrow-forward',
      'attachment',
      'auto-fix',
      'backspace',
      'backup',
      'beenhere',
      'block',
      'bluetooth',
      'bluetooth-audio',
      'bluetooth-connected',
      'bluetooth-disabled',
      'bluetooth-searching',
      'bold',
      'book',
      'bookmark',
      'bookmark-outline',
      'brightness-auto',
      'brightness-high',
      'brightness-low',
      'brightness-medium',
      'bug-report',
      'cake',
      'call',
      'call-end',
      'call-made',
      'call-merge',
      'call-missed',
      'call-received',
      'call-split',
      'camera',
      'camera-alt',
      'camera-roll',
      'cancel',
      'cast',
      'cast-connected',
      'chat',
      'check',
      'check-box',
      'check-box-blank',
      'check-box-outline',
      'check-box-outline-blank',
      'check-circle',
      'check-circle-blank',
      'check-circle-outline',
      'check-circle-outline-blank',
      'chevron-left',
      'chevron-right',
      'chromecast',
      'circles',
      'circles-add',
      'circles-extended',
      'clear',
      'close',
      'close-caption',
      'cloud',
      'cloud-circle',
      'cloud-done',
      'cloud-download',
      'cloud-off',
      'cloud-queue',
      'cloud-upload',
      'comment',
      'communities',
      'content-copy',
      'content-cut',
      'content-paste',
      'create',
      'credit-card',
      'crop',
      'crop-free',
      'crop-landscape',
      'crop-portrait',
      'crop-square',
      'data-usage',
      'delete',
      'developer-mode',
      'dialpad',
      'directions',
      'directions-bike',
      'directions-bus',
      'directions-car',
      'directions-subway',
      'directions-train',
      'directions-transit',
      'directionswalk',
      'disc-full',
      'do-not-disturb',
      'dock',
      'domain',
      'done',
      'done-all',
      'drafts',
      'drive',
      'drive-apk',
      'drive-audio',
      'drive-code',
      'drive-document',
      'drive-drawing',
      'drive-eta',
      'drive-file',
      'drive-font',
      'drive-form',
      'drive-fusiontable',
      'drive-image',
      'drive-ms-excel',
      'drive-ms-powerpoint',
      'drive-ms-word',
      'drive-pdf',
      'drive-presentation',
      'drive-script',
      'drive-site',
      'drive-spreadsheet',
      'drive-video',
      'drive-zip',
      'earth',
      'email',
      'error',
      'event',
      'exit-to-app',
      'expand-less',
      'expand-more',
      'explore',
      'extension',
      'fast-forward',
      'fast-rewind',
      'favorite',
      'favorite-outline',
      'file-download',
      'file-upload',
      'filter',
      'flag',
      'flash-auto',
      'flash-off',
      'flash-on',
      'flights',
      'flip-to-back',
      'flip-to-front',
      'folder',
      'folder-mydrive',
      'folder-shared',
      'forum',
      'forward',
      'fullscreen',
      'fullscreen-exit',
      'gamepad',
      'games',
      'gesture',
      'glass',
      'gmail',
      'google',
      'google-plus',
      'gps-fixed',
      'gps-not-fixed',
      'gps-off',
      'group',
      'group-add',
      'hangout',
      'hangout-video',
      'hangout-video-off',
      'headset',
      'headset-mic',
      'help',
      'high-quality',
      'history',
      'home',
      'hotel',
      'https',
      'image',
      'import-export',
      'inbox',
      'info',
      'info-outline',
      'invert-colors',
      'italics',
      'keep',
      'keyboard',
      'keyboard-alt',
      'keyboard-arrow-down',
      'keyboard-arrow-left',
      'keyboard-arrow-right',
      'keyboard-arrow-up',
      'keyboard-backspace',
      'keyboard-capslock',
      'keyboard-control',
      'keyboard-hide',
      'keyboard-return',
      'keyboard-tab',
      'keyboard-voice',
      'label',
      'label-outline',
      'landscape',
      'language',
      'laptop',
      'launch',
      'link',
      'list',
      'live-help',
      'location',
      'location-city',
      'location-disabled',
      'location-searching',
      'lock',
      'lock-open',
      'lock-outline',
      'loop',
      'mail',
      'map',
      'mark-unread',
      'memory',
      'menu',
      'message',
      'messenger',
      'mic',
      'none',
      'off',
      'mms',
      'mood',
      'more',
      'more-horiz',
      'more-vert',
      'mouse',
      'movie',
      'nest-protect',
      'nest-thermostat',
      'network-cell',
      'network-wifi',
      'news',
      'nfc',
      'notifications',
      'notifications-none',
      'notifications-off',
      'notifications-on',
      'notifications-paused',
      'pages',
      'palette',
      'panorama',
      'party-mode',
      'pause',
      'pause-circle-fill',
      'pause-circle-outline',
      'people',
      'person',
      'person-add',
      'person-location',
      'person-outline',
      'phone',
      'phone2',
      'phone-bluetooth-speaker',
      'phone-forwarded',
      'phone-in-talk',
      'phone-locked',
      'phone-missed',
      'phone-paused',
      'photo',
      'photo-album',
      'photo-library',
      'place',
      'play-arrow',
      'play-circle-fill',
      'play-circle-outline',
      'play-download',
      'play-install',
      'plus-one',
      'poll',
      'polymer',
      'portrait',
      'post-blogger',
      'post-facebook',
      'post-gplus',
      'post-instagram',
      'post-linkedin',
      'post-pinterest',
      'post-tumblr',
      'post-twitter',
      'print',
      'public',
      'queue',
      'radio-button-off',
      'radio-button-on',
      'receipt',
      'refresh',
      'reminder',
      'remove',
      'remove-circle',
      'remove-circle-outline',
      'replay',
      'reply',
      'reply-all',
      'report',
      'ring-volume',
      'rotate-left',
      'rotate-right',
      'satellite',
      'save',
      'schedule',
      'school',
      'screen-lock-landscape',
      'screen-lock-portrait',
      'screen-lock-rotation',
      'screen-rotation',
      'sd-card',
      'sd-storage',
      'search',
      'select-all',
      'send',
      'settings',
      'settings-application',
      'settings-bluetooth',
      'settings-cell',
      'settings-phone',
      'settings-power',
      'settings-voice',
      'share',
      'share-alt',
      'shopping-basket',
      'shopping-cart',
      'shuffle',
      'signal-cellular-1-bar',
      'signal-cellular-2-bar',
      'signal-cellular-3-bar',
      'signal-cellular-4-bar',
      'signal-wifi-1-bar',
      'signal-wifi-2-bar',
      'signal-wifi-3-bar',
      'signal-wifi-4-bar',
      'sim-card-alert',
      'skip-next',
      'skip-previous',
      'slideshow',
      'sms',
      'sms-failed',
      'sort',
      'speaker',
      'star',
      'star-half',
      'star-outline',
      'star-rate',
      'stop',
      'storage',
      'store',
      'swap-driving-apps',
      'swap-horiz',
      'swap-vert',
      'swap-vert-circle',
      'switch-camera',
      'switch-video',
      'sync',
      'sync-disabled',
      'sync-green',
      'sync-problem',
      'sync-problem-red',
      'system-update',
      'tab',
      'tab-unselected',
      'tablet',
      'tag-faces',
      'tap-and-play',
      'terrain',
      'text-format',
      'text-sms',
      'theaters',
      'thumbs-down',
      'thumbs-up',
      'time-to-leave',
      'timelapse',
      'timer',
      'today',
      'traffic',
      'translate',
      'tv',
      'underline',
      'undo',
      'unfold-less',
      'unfold-more',
      'unknown-1',
      'unknown-3',
      'unknown-4',
      'unknown-5',
      'unknown-6',
      'unknown-7',
      'unkown-2',
      'usb',
      'vibration',
      'video-youtube',
      'videocam',
      'videocam-off',
      'view-array',
      'view-column',
      'view-headline',
      'view-list',
      'view-module',
      'view-quilt',
      'view-stream',
      'visibility',
      'visibility-off',
      'voice',
      'voicemail',
      'volume-down',
      'volume-mute',
      'volume-off',
      'volume-up',
      'vpn',
      'warning',
      'watch',
      'wb-auto',
      'wb-cloudy',
      'wb-incandescent',
      'wb-irradescent',
      'wb-sunny',
      'web',
      'whatshot',
      'wifi-tethering',
      'work'
    ]
  });

});
define('dummy/controllers/list', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    listData: [{
      face: 'tomster.png',
      who: 'tomster',
      what: 'a message for you',
      notes: 'this is a message for you about ember'
    },{
      face: 'tomster.png',
      who: 'tomster',
      what: 'a message for you',
      notes: 'this is a message for you about ember'
    },{
      face: 'tomster.png',
      who: 'tomster',
      what: 'a message for you',
      notes: 'this is a message for you about ember'
    },{
      face: 'tomster.png',
      who: 'tomster',
      what: 'a message for you',
      notes: 'this is a message for you about ember'
    },{
      face: 'tomster.png',
      who: 'tomster',
      what: 'a message for you',
      notes: 'this is a message for you about ember'
    }]
  })

});
define('dummy/controllers/switch', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({
    booleanProp1:true,
    booleanProp2:false
  });

});
define('dummy/initializers/events', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var customEvents = application.get('customEvents') || {};
    Ember.String.w('toggle expand collapse').forEach(function (prefix) {
      var name = Ember.String.fmt("%@Sidenav", prefix);
      customEvents[name] = name;
    });
    application.set('customEvents', customEvents);
  }

  exports['default'] = {
    name: 'events',
    initialize: initialize
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  };

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function() {
    this.route('introduction');
    this.route('button');
    this.route('checkbox');
    this.route('radio');
    this.route('switch');
    this.route('typography');
    this.route('list');
    this.route('divider');
    this.route('navigation');
    this.route('textfield');
    this.route('toolbar');
    this.route('icons');
  });

  exports['default'] = Router;

});
define('dummy/routes/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    actions:{
      raisedButton:function(){
        alert('You pressed a raised button.');
      },
      flatButton:function(){
        alert('You pressed a flat button.');
      },
      targetButton:function() {
        alert('You pressed a target button. -from route');
      }
    }
  });

});
define('dummy/routes/divider', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    controllerName: 'list'
  });

});
define('dummy/templates/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n\n  ");
    stack1 = (helper = helpers['paper-sidenav'] || (depth0 && depth0['paper-sidenav']),options={hash:{
      'classNames': ("md-sidenav-left md-whiteframe-z2"),
      'flex-layout': ("column")
    },hashTypes:{'classNames': "STRING",'flex-layout': "STRING"},hashContexts:{'classNames': depth0,'flex-layout': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n  ");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'flex-layout': ("column")
    },hashTypes:{'flex-layout': "STRING"},hashContexts:{'flex-layout': depth0},inverse:self.noop,fn:self.program(30, program30, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n\n    ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-content']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-content']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-content']) { stack1 = blockHelperMissing.call(depth0, 'paper-content', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  ");
    return buffer;
    }
  function program3(depth0,data) {
    
    
    data.buffer.push("\n      <div class=\"md-toolbar-tools\">\n        <div class=\"logo\">\n          <img src=\"ember-logo-white.png\" height=\"30\"/>&nbsp;&nbsp;<strong>Paper</strong>\n        </div>\n      </div>\n    ");
    }

  function program5(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n      <nav class=\"sidenav\">\n        <ul>\n        <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n          <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "navigation", options) : helperMissing.call(depth0, "link-to", "navigation", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n          <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "typography", options) : helperMissing.call(depth0, "link-to", "typography", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n          <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "list", options) : helperMissing.call(depth0, "link-to", "list", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n          <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "divider", options) : helperMissing.call(depth0, "link-to", "divider", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n          <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(16, program16, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "button", options) : helperMissing.call(depth0, "link-to", "button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n          <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "checkbox", options) : helperMissing.call(depth0, "link-to", "checkbox", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n          <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(20, program20, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "switch", options) : helperMissing.call(depth0, "link-to", "switch", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n          <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(22, program22, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "radio", options) : helperMissing.call(depth0, "link-to", "radio", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n          <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(24, program24, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "textfield", options) : helperMissing.call(depth0, "link-to", "textfield", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n          <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(26, program26, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "toolbar", options) : helperMissing.call(depth0, "link-to", "toolbar", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n          <li>");
    stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(28, program28, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "icons", options) : helperMissing.call(depth0, "link-to", "icons", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n        </ul>\n      </nav>\n    ");
    return buffer;
    }
  function program6(depth0,data) {
    
    
    data.buffer.push("Introduction");
    }

  function program8(depth0,data) {
    
    
    data.buffer.push("Navigation");
    }

  function program10(depth0,data) {
    
    
    data.buffer.push("Typography");
    }

  function program12(depth0,data) {
    
    
    data.buffer.push("List");
    }

  function program14(depth0,data) {
    
    
    data.buffer.push("Divider");
    }

  function program16(depth0,data) {
    
    
    data.buffer.push("Button");
    }

  function program18(depth0,data) {
    
    
    data.buffer.push("Checkbox");
    }

  function program20(depth0,data) {
    
    
    data.buffer.push("Switch");
    }

  function program22(depth0,data) {
    
    
    data.buffer.push("Radio");
    }

  function program24(depth0,data) {
    
    
    data.buffer.push("Text Field");
    }

  function program26(depth0,data) {
    
    
    data.buffer.push("Toolbar");
    }

  function program28(depth0,data) {
    
    
    data.buffer.push("Icons");
    }

  function program30(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    ");
    stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  ");
    return buffer;
    }

    stack1 = (helper = helpers['paper-nav-container'] || (depth0 && depth0['paper-nav-container']),options={hash:{
      'classNames': ("ember-app")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-nav-container", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n<!-- Place this tag right after the last button or just before your close body tag. -->\n<script async defer id=\"github-bjs\" src=\"https://buttons.github.io/buttons.js\"></script>\n");
    return buffer;
    
  });

});
define('dummy/templates/button', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <h2 class=\"md-toolbar-tools\">\n    ");
    stack1 = (helper = helpers['paper-sidenav-toggle'] || (depth0 && depth0['paper-sidenav-toggle']),options={hash:{
      'class': ("menu-sidenav-toggle")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav-toggle", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <span>Buttons</span>\n  </h2>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n      ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("menu")
    },hashTypes:{'icon': "STRING"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <p>\n    ");
    stack1 = (helper = helpers['paper-button'] || (depth0 && depth0['paper-button']),options={hash:{
      'action': ("flatButton")
    },hashTypes:{'action': "STRING"},hashContexts:{'action': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['paper-button'] || (depth0 && depth0['paper-button']),options={hash:{
      'noink': (true),
      'classNames': ("md-primary")
    },hashTypes:{'noink': "BOOLEAN",'classNames': "STRING"},hashContexts:{'noink': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['paper-button'] || (depth0 && depth0['paper-button']),options={hash:{
      'disabled': (true)
    },hashTypes:{'disabled': "BOOLEAN"},hashContexts:{'disabled': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['paper-button'] || (depth0 && depth0['paper-button']),options={hash:{
      'classNames': ("md-warn")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  </p>\n  <p>\n    ");
    stack1 = (helper = helpers['paper-button'] || (depth0 && depth0['paper-button']),options={hash:{
      'raised': (true),
      'action': ("raisedButton")
    },hashTypes:{'raised': "BOOLEAN",'action': "STRING"},hashContexts:{'raised': depth0,'action': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['paper-button'] || (depth0 && depth0['paper-button']),options={hash:{
      'raised': (true),
      'classNames': ("md-primary")
    },hashTypes:{'raised': "BOOLEAN",'classNames': "STRING"},hashContexts:{'raised': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['paper-button'] || (depth0 && depth0['paper-button']),options={hash:{
      'raised': (true),
      'disabled': (true)
    },hashTypes:{'raised': "BOOLEAN",'disabled': "BOOLEAN"},hashContexts:{'raised': depth0,'disabled': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['paper-button'] || (depth0 && depth0['paper-button']),options={hash:{
      'raised': (true),
      'classNames': ("md-warn")
    },hashTypes:{'raised': "BOOLEAN",'classNames': "STRING"},hashContexts:{'raised': depth0,'classNames': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  </p>\n  <p>\n    ");
    stack1 = (helper = helpers['paper-button'] || (depth0 && depth0['paper-button']),options={hash:{
      'raised': (true),
      'action': ("targetButton"),
      'target': ("view")
    },hashTypes:{'raised': "BOOLEAN",'action': "STRING",'target': "ID"},hashContexts:{'raised': depth0,'action': depth0,'target': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['paper-button'] || (depth0 && depth0['paper-button']),options={hash:{
      'raised': (true),
      'classNames': ("md-primary"),
      'action': ("targetButton"),
      'target': ("view")
    },hashTypes:{'raised': "BOOLEAN",'classNames': "STRING",'action': "STRING",'target': "ID"},hashContexts:{'raised': depth0,'classNames': depth0,'action': depth0,'target': depth0},inverse:self.noop,fn:self.program(17, program17, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['paper-button'] || (depth0 && depth0['paper-button']),options={hash:{
      'raised': (true),
      'classNames': ("md-primary"),
      'action': ("targetButton"),
      'target': ("view"),
      'bubbles': (false)
    },hashTypes:{'raised': "BOOLEAN",'classNames': "STRING",'action': "STRING",'target': "ID",'bubbles': "BOOLEAN"},hashContexts:{'raised': depth0,'classNames': depth0,'action': depth0,'target': depth0,'bubbles': depth0},inverse:self.noop,fn:self.program(19, program19, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-button", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  </p>\n  <p>\n    ");
    data.buffer.push(escapeExpression((helper = helpers['paper-button'] || (depth0 && depth0['paper-button']),options={hash:{
      'raised': (true),
      'label': ("Blockless version")
    },hashTypes:{'raised': "BOOLEAN",'label': "STRING"},hashContexts:{'raised': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-button", options))));
    data.buffer.push("\n  </p>\n  <h3>Template</h3>\n  <pre>\n  &lt;p&gt;\n    {{#paper-button action=\"flatButton\"}}Button with action{{/paper-button}}\n    {{#paper-button noink=true classNames=\"md-primary\"}}Primary (noink){{/paper-button}}\n    {{#paper-button disabled=true}}disabled{{/paper-button}}\n    {{#paper-button classNames=\"md-warn\"}}warn{{/paper-button}}\n  &lt;/p&gt;\n  &lt;p&gt;\n    {{#paper-button raised=true action=\"raisedButton\"}}Button with action{{/paper-button}}\n    {{#paper-button raised=true classNames=\"md-primary\"}}Primary{{/paper-button}}\n    {{#paper-button raised=true disabled=true}}disabled{{/paper-button}}\n    {{#paper-button raised=true classNames=\"md-warn\"}}warn{{/paper-button}}\n  &lt;/p&gt;\n  &lt;p&gt;\n    {{#paper-button raised=true action=\"targetButton\" target=view}}Button with target{{/paper-button}}\n    {{#paper-button raised=true classNames=\"md-primary\" action=\"targetButton\" target=view}}Button with bubble{{/paper-button}}\n    {{#paper-button raised=true classNames=\"md-primary\" action=\"targetButton\" target=view bubbles=false}}Button no bubble{{/paper-button}}\n  &lt;/p&gt;\n  &lt;p&gt;\n    {{paper-button raised=true label=\"Blockless version\"}}\n  &lt;/p&gt;\n  </pre>\n");
    return buffer;
    }
  function program5(depth0,data) {
    
    
    data.buffer.push("Button with action");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("Primary (noink)");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("disabled");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("warn");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("Primary");
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("Button with target");
    }

  function program17(depth0,data) {
    
    
    data.buffer.push("Button with bubble");
    }

  function program19(depth0,data) {
    
    
    data.buffer.push("Button no bubble");
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-padding demo-buttons")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/checkbox', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <h2 class=\"md-toolbar-tools\">\n    ");
    stack1 = (helper = helpers['paper-sidenav-toggle'] || (depth0 && depth0['paper-sidenav-toggle']),options={hash:{
      'class': ("menu-sidenav-toggle")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav-toggle", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <span>Checkboxes</span>\n  </h2>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n      ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("menu")
    },hashTypes:{'icon': "STRING"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  ");
    stack1 = (helper = helpers['paper-checkbox'] || (depth0 && depth0['paper-checkbox']),options={hash:{
      'checked': ("value1")
    },hashTypes:{'checked': "ID"},hashContexts:{'checked': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-checkbox", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  ");
    stack1 = (helper = helpers['paper-checkbox'] || (depth0 && depth0['paper-checkbox']),options={hash:{
      'checked': ("value2")
    },hashTypes:{'checked': "ID"},hashContexts:{'checked': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-checkbox", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  ");
    stack1 = (helper = helpers['paper-checkbox'] || (depth0 && depth0['paper-checkbox']),options={hash:{
      'disabled': (true)
    },hashTypes:{'disabled': "BOOLEAN"},hashContexts:{'disabled': depth0},inverse:self.noop,fn:self.program(12, program12, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-checkbox", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  ");
    stack1 = (helper = helpers['paper-checkbox'] || (depth0 && depth0['paper-checkbox']),options={hash:{
      'disabled': (true),
      'checked': (true)
    },hashTypes:{'disabled': "BOOLEAN",'checked': "BOOLEAN"},hashContexts:{'disabled': depth0,'checked': depth0},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-checkbox", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  ");
    stack1 = (helper = helpers['paper-checkbox'] || (depth0 && depth0['paper-checkbox']),options={hash:{
      'noink': (true)
    },hashTypes:{'noink': "BOOLEAN"},hashContexts:{'noink': depth0},inverse:self.noop,fn:self.program(16, program16, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-checkbox", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n  ");
    data.buffer.push(escapeExpression((helper = helpers['paper-checkbox'] || (depth0 && depth0['paper-checkbox']),options={hash:{
      'label': ("Blockless version")
    },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-checkbox", options))));
    data.buffer.push("\n\n  <h3>Template</h3>\n  <pre>\n    {{#paper-checkbox checked=value1}}A checkbox: {{value1}}{{/paper-checkbox}}\n    {{#paper-checkbox checked=value2}}A checkbox: {{#if value2}}yep{{else}}nope{{/if}}{{/paper-checkbox}}\n    {{#paper-checkbox disabled=true}}Checkbox (disabled){{/paper-checkbox}}\n    {{#paper-checkbox disabled=true checked=true}}Checkbox (disabled and checked){{/paper-checkbox}}\n    {{#paper-checkbox noink=true}}Checkbox (no ink){{/paper-checkbox}}\n\n    {{paper-checkbox label=\"Blockless version\"}}\n  </pre>\n");
    return buffer;
    }
  function program5(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("A checkbox: ");
    stack1 = helpers._triageMustache.call(depth0, "value1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    return buffer;
    }

  function program7(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("A checkbox: ");
    stack1 = helpers['if'].call(depth0, "value2", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    return buffer;
    }
  function program8(depth0,data) {
    
    
    data.buffer.push("yep");
    }

  function program10(depth0,data) {
    
    
    data.buffer.push("nope");
    }

  function program12(depth0,data) {
    
    
    data.buffer.push("Checkbox (disabled)");
    }

  function program14(depth0,data) {
    
    
    data.buffer.push("Checkbox (disabled and checked)");
    }

  function program16(depth0,data) {
    
    
    data.buffer.push("Checkbox (no ink)");
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-padding")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/base-focusable', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1;


    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/paper-button', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  ");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n    ");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  ");
    return buffer;
    }

    data.buffer.push("<span ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'type': ("type"),
      'disabled': ("disabled")
    },hashTypes:{'type': "ID",'disabled': "ID"},hashContexts:{'type': depth0,'disabled': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">\n  ");
    stack1 = helpers['if'].call(depth0, "template", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n</span>\n");
    return buffer;
    
  });

});
define('dummy/templates/components/paper-checkbox', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n  <div class=\"md-label\">\n    ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  </div>\n");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n  <div class=\"md-label\">\n    ");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  </div>\n");
    return buffer;
    }

    data.buffer.push("<div class=\"md-container\">\n  <div class=\"md-icon\"></div>\n</div>\n");
    stack1 = helpers['if'].call(depth0, "template", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/paper-nav-container', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

  function program1(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n  ");
    data.buffer.push(escapeExpression((helper = helpers['paper-backdrop'] || (depth0 && depth0['paper-backdrop']),options={hash:{
      'classNames': ("md-sidenav-backdrop")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-backdrop", options))));
    data.buffer.push("\n");
    return buffer;
    }

    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    stack1 = helpers['if'].call(depth0, "active", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/paper-radio', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n  <div class=\"md-label\">\n    ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  </div>\n");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n  <div class=\"md-label\">\n    ");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  </div>\n");
    return buffer;
    }

    data.buffer.push("<div class=\"md-container\">\n  <div class=\"md-off\"></div>\n  <div class=\"md-on\"></div>\n</div>\n");
    stack1 = helpers['if'].call(depth0, "template", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/paper-switch', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, self=this;

  function program1(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n  <div class=\"md-label\">\n    ");
    stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  </div>\n");
    return buffer;
    }

  function program3(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n  <div class=\"md-label\">\n    ");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  </div>\n");
    return buffer;
    }

    data.buffer.push("<div class=\"md-switch-bar\"></div>\n<div class=\"md-container\">\n  <div class=\"md-bar\"></div>\n  <div class=\"md-thumb-container\">\n    <div class=\"md-thumb\">\n    </div>\n  </div>\n</div>\n");
    stack1 = helpers['if'].call(depth0, "template", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/components/paper-text', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


    data.buffer.push("<label ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'for': ("inputElementId")
    },hashTypes:{'for': "ID"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(">");
    stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</label>\n");
    data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
      'id': ("inputElementId"),
      'type': ("type"),
      'value': ("value"),
      'focus-in': ("focusIn"),
      'focus-out': ("focusOut"),
      'disabled': ("disabled")
    },hashTypes:{'id': "ID",'type': "ID",'value': "ID",'focus-in': "STRING",'focus-out': "STRING",'disabled': "ID"},hashContexts:{'id': depth0,'type': depth0,'value': depth0,'focus-in': depth0,'focus-out': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/divider', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <h2 class=\"md-toolbar-tools\">\n    ");
    stack1 = (helper = helpers['paper-sidenav-toggle'] || (depth0 && depth0['paper-sidenav-toggle']),options={hash:{
      'class': ("menu-sidenav-toggle")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav-toggle", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <span>Dividers</span>\n  </h2>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n      ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("menu")
    },hashTypes:{'icon': "STRING"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n\n  <h4>Full width dividers</h4>\n  ");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-whiteframe-z1 list-demo")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n  <h4>Inset dividers</h4>\n  ");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-whiteframe-z1 list-demo")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n  <h3>Template</h3>\n  <pre>\n  {{#paper-content classNames=\"md-whiteframe-z1 list-demo\"}}\n    {{#paper-list}}\n      {{#each listData}}\n        {{#paper-item}}\n          {{#paper-tile-left}}\n            &lt;img {{bind-attr src=face alt=who}} class=&quot;face&quot;&gt;\n          {{/paper-tile-left}}\n\n          {{#paper-tile-content}}\n            &lt;h3&gt;{{what}}&lt;/h3&gt;\n            &lt;h4&gt;{{who}}&lt;/h4&gt;\n            &lt;p&gt;\n              {{notes}}\n            &lt;/p&gt;\n          {{/paper-tile-content}}\n        {{/paper-item}}\n        {{paper-divider}} {{! OR {{paper-divider inset=true}} }}\n      {{/each}}\n    {{/paper-list}}\n  {{/paper-content}}\n  </pre>\n\n");
    return buffer;
    }
  function program5(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n    ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-list']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-list']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-list']) { stack1 = blockHelperMissing.call(depth0, 'paper-list', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  ");
    return buffer;
    }
  function program6(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n      ");
    stack1 = helpers.each.call(depth0, "listData", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    return buffer;
    }
  function program7(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n        ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-item']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-item']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-item']) { stack1 = blockHelperMissing.call(depth0, 'paper-item', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        ");
    stack1 = helpers._triageMustache.call(depth0, "paper-divider", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n      ");
    return buffer;
    }
  function program8(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n          ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-tile-left']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-tile-left']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-tile-left']) { stack1 = blockHelperMissing.call(depth0, 'paper-tile-left', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n          ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-tile-content']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-tile-content']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-tile-content']) { stack1 = blockHelperMissing.call(depth0, 'paper-tile-content', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        ");
    return buffer;
    }
  function program9(depth0,data) {
    
    var buffer = '';
    data.buffer.push("\n            <img ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'src': ("face"),
      'alt': ("who")
    },hashTypes:{'src': "ID",'alt': "ID"},hashContexts:{'src': depth0,'alt': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" class=\"face\">\n          ");
    return buffer;
    }

  function program11(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n            <h3>");
    stack1 = helpers._triageMustache.call(depth0, "what", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</h3>\n            <h4>");
    stack1 = helpers._triageMustache.call(depth0, "who", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</h4>\n            <p>\n              ");
    stack1 = helpers._triageMustache.call(depth0, "notes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n            </p>\n          ");
    return buffer;
    }

  function program13(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n    ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-list']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-list']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-list']) { stack1 = blockHelperMissing.call(depth0, 'paper-list', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  ");
    return buffer;
    }
  function program14(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n      ");
    stack1 = helpers.each.call(depth0, "listData", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(15, program15, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    return buffer;
    }
  function program15(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n        ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-item']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-item']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-item']) { stack1 = blockHelperMissing.call(depth0, 'paper-item', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        ");
    data.buffer.push(escapeExpression((helper = helpers['paper-divider'] || (depth0 && depth0['paper-divider']),options={hash:{
      'inset': (true)
    },hashTypes:{'inset': "BOOLEAN"},hashContexts:{'inset': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-divider", options))));
    data.buffer.push("\n      ");
    return buffer;
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-padding")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/icons', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <h2 class=\"md-toolbar-tools\">\n    ");
    stack1 = (helper = helpers['paper-sidenav-toggle'] || (depth0 && depth0['paper-sidenav-toggle']),options={hash:{
      'class': ("menu-sidenav-toggle")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav-toggle", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <span>Material icons</span>\n  </h2>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n      ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("menu")
    },hashTypes:{'icon': "STRING"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n\n  <h3>Template</h3>\n  <pre>\n    {{paper-icon icon=\"check\"}}\n  </pre>\n\n  <div>\n    ");
    stack1 = helpers.each.call(depth0, "icon", "in", "icons", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  </div>\n\n");
    return buffer;
    }
  function program5(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n      <div class=\"icon-tile\">\n        ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("icon")
    },hashTypes:{'icon': "ID"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n        <p>");
    stack1 = helpers._triageMustache.call(depth0, "icon", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n      </div>\n    ");
    return buffer;
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-padding icon-demo")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/index', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <h2 class=\"md-toolbar-tools\">\n    ");
    stack1 = (helper = helpers['paper-sidenav-toggle'] || (depth0 && depth0['paper-sidenav-toggle']),options={hash:{
      'class': ("menu-sidenav-toggle")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav-toggle", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <span>Introduction</span>\n  </h2>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n      ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("menu")
    },hashTypes:{'icon': "STRING"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    
    data.buffer.push("\n  <h3>Welcome to Ember Paper.</h3>\n  <p><br>This project aims to bring Google's new <a href=\"https://www.google.com/design/spec/material-design/introduction.html\">Material Design</a> to Ember. The goal is to encapsulate everything possible in Ember components. This project is packaged as an <a href=\"http://www.ember-cli.com/\">Ember-cli</a> addon.</p>\n\n  <h3>Installation</h3>\n  <p>Install the ember-cli addon in your ember-cli project:</p>\n  <div class=\"preview-block\">\n    <pre style=\"margin:0\">$ ember install:addon ember-paper</pre>\n  </div>\n  <p>All the components and styles are ready to use in your application templates.</p>\n  <p>Navigate through the docs to understand how to use each component.</p>\n\n  <h3>Contribution</h3>\n  <p><p>This is a very ambitious project. Google's design specs are extensive, and not trivial to implement. <strong>ember-paper</strong> is heavily based on <a href=\"https://github.com/angular/material\">Angular Material</a> and <a href=\"https://github.com/google/web-starter-kit/tree/material-sprint\">Web Starter Kit (material-sprint branch)</a>. These seem to be the most useful resources at the moment. If you feel like porting or fixing an element or two, please drop a pull request or issue at GitHub!</p>\n  <p>I believe that with the help of everyone we can bring these amazing design spec to Ember in a modular and robust way. The Ember way. </p>\n  <p>\n  <strong>Help us on Github!</strong>\n  <!-- Place this tag where you want the button to render. -->\n  </p>\n  <p>\n  <a class=\"github-button\" href=\"https://github.com/miguelcobain/ember-paper\" data-style=\"mega\" data-count-href=\"/miguelcobain/ember-paper/network\" data-count-api=\"/repos/miguelcobain/ember-paper#forks_count\">Fork</a>\n  </p>\n");
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-padding")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/list', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <h2 class=\"md-toolbar-tools\">\n    ");
    stack1 = (helper = helpers['paper-sidenav-toggle'] || (depth0 && depth0['paper-sidenav-toggle']),options={hash:{
      'class': ("menu-sidenav-toggle")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav-toggle", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <span>Lists</span>\n  </h2>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n      ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("menu")
    },hashTypes:{'icon': "STRING"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n\n  ");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-whiteframe-z1 list-demo")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n  <h3>Template</h3>\n  <pre>\n  {{#paper-content classNames=\"md-whiteframe-z1 list-demo\"}}\n    {{#paper-list}}\n      {{#each listData}}\n        {{#paper-item}}\n          {{#paper-tile-left}}\n            &lt;img {{bind-attr src=face alt=who}} class=&quot;face&quot;&gt;\n          {{/paper-tile-left}}\n\n          {{#paper-tile-content}}\n            &lt;h3&gt;{{what}}&lt;/h3&gt;\n            &lt;h4&gt;{{who}}&lt;/h4&gt;\n            &lt;p&gt;\n              {{notes}}\n            &lt;/p&gt;\n          {{/paper-tile-content}}\n        {{/paper-item}}\n      {{/each}}\n    {{/paper-list}}\n  {{/paper-content}}\n  </pre>\n");
    return buffer;
    }
  function program5(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n    ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-list']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-list']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-list']) { stack1 = blockHelperMissing.call(depth0, 'paper-list', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n  ");
    return buffer;
    }
  function program6(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n      ");
    stack1 = helpers.each.call(depth0, "listData", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    return buffer;
    }
  function program7(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n        ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-item']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-item']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-item']) { stack1 = blockHelperMissing.call(depth0, 'paper-item', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n      ");
    return buffer;
    }
  function program8(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n          ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-tile-left']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-tile-left']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-tile-left']) { stack1 = blockHelperMissing.call(depth0, 'paper-tile-left', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n          ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-tile-content']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-tile-content']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-tile-content']) { stack1 = blockHelperMissing.call(depth0, 'paper-tile-content', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n        ");
    return buffer;
    }
  function program9(depth0,data) {
    
    var buffer = '';
    data.buffer.push("\n            <img ");
    data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
      'src': ("face"),
      'alt': ("who")
    },hashTypes:{'src': "ID",'alt': "ID"},hashContexts:{'src': depth0,'alt': depth0},contexts:[],types:[],data:data})));
    data.buffer.push(" class=\"face\">\n          ");
    return buffer;
    }

  function program11(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push("\n            <h3>");
    stack1 = helpers._triageMustache.call(depth0, "what", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</h3>\n            <h4>");
    stack1 = helpers._triageMustache.call(depth0, "who", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</h4>\n            <p>\n              ");
    stack1 = helpers._triageMustache.call(depth0, "notes", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n            </p>\n          ");
    return buffer;
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-padding")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/navigation', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <h2 class=\"md-toolbar-tools\">\n    ");
    stack1 = (helper = helpers['paper-sidenav-toggle'] || (depth0 && depth0['paper-sidenav-toggle']),options={hash:{
      'class': ("menu-sidenav-toggle")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav-toggle", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <span>Navigation</span>\n  </h2>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n      ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("menu")
    },hashTypes:{'icon': "STRING"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '';
    data.buffer.push("\n  <p>Try to resize this webpage.</p>\n  <h3>Template</h3>\n  <pre>\n    {{#paper-nav-container classNames=\"ember-app\"}}\n\n      {{#paper-sidenav classNames=\"md-sidenav-left md-whiteframe-z2\" flex-layout=\"column\"}}\n\n        {{#paper-toolbar}}\n          &lt;div class=\"md-toolbar-tools\"&gt;\n            &lt;div class=\"logo\"&gt;\n              &lt;img src=\"ember-logo-white.png\" height=\"30\"/&gt;&nbsp;&nbsp;&lt;strong&gt;Paper&lt;/strong&gt;\n            &lt;/div&gt;\n          &lt;/div&gt;\n        {{/paper-toolbar}}\n\n        {{#paper-content}}\n          &lt;nav class=\"sidenav\"&gt;\n            &lt;ul&gt;\n              &lt;li&gt;{{#link-to \"index\"}}Introduction{{/link-to}}&lt;/li&gt;\n              &lt;li&gt;{{#link-to \"navigation\"}}Navigation{{/link-to}}&lt;/li&gt;\n              &lt;li&gt;{{#link-to \"typography\"}}Typography{{/link-to}}&lt;/li&gt;\n              &lt;li&gt;{{#link-to \"list\"}}List{{/link-to}}&lt;/li&gt;\n              &lt;li&gt;{{#link-to \"divider\"}}Divider{{/link-to}}&lt;/li&gt;\n              &lt;li&gt;{{#link-to \"button\"}}Button{{/link-to}}&lt;/li&gt;\n              &lt;li&gt;{{#link-to \"checkbox\"}}Checkbox{{/link-to}}&lt;/li&gt;\n              &lt;li&gt;{{#link-to \"switch\"}}Switch{{/link-to}}&lt;/li&gt;\n              &lt;li&gt;{{#link-to \"radio\"}}Radio{{/link-to}}&lt;/li&gt;\n              &lt;li&gt;{{#link-to \"textfield\"}}Text Field{{/link-to}}&lt;/li&gt;\n              &lt;li&gt;{{#link-to \"toolbar\"}}Toolbar{{/link-to}}&lt;/li&gt;\n              &lt;li&gt;{{#link-to \"icons\"}}Icons{{/link-to}}&lt;/li&gt;\n            &lt;/ul&gt;\n          &lt;/nav&gt;\n        {{/paper-content}}\n      {{/paper-sidenav}}\n\n      {{#paper-content flex-layout=\"column\" flex=true}}\n        {{outlet}}\n      {{/paper-content}}\n\n    {{/paper-nav-container}}\n  </pre>\n");
    return buffer;
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-padding")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/radio', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <h2 class=\"md-toolbar-tools\">\n    ");
    stack1 = (helper = helpers['paper-sidenav-toggle'] || (depth0 && depth0['paper-sidenav-toggle']),options={hash:{
      'class': ("menu-sidenav-toggle")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav-toggle", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <span>Radio buttons</span>\n  </h2>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n      ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("menu")
    },hashTypes:{'icon': "STRING"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <ul class=\"paper-list-inline\">\n    <li>");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-radio']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-radio']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-radio']) { stack1 = blockHelperMissing.call(depth0, 'paper-radio', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n    <li>");
    stack1 = (helper = helpers['paper-radio'] || (depth0 && depth0['paper-radio']),options={hash:{
      'toggle': (true)
    },hashTypes:{'toggle': "BOOLEAN"},hashContexts:{'toggle': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-radio", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n    <li>");
    stack1 = (helper = helpers['paper-radio'] || (depth0 && depth0['paper-radio']),options={hash:{
      'disabled': (true)
    },hashTypes:{'disabled': "BOOLEAN"},hashContexts:{'disabled': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-radio", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n  </ul>\n  <h3>Radio Button Group</h3>\n  <ul class=\"paper-list-inline\">\n    <li>");
    stack1 = (helper = helpers['paper-radio'] || (depth0 && depth0['paper-radio']),options={hash:{
      'value': ("1"),
      'selected': ("selectedValue")
    },hashTypes:{'value': "STRING",'selected': "ID"},hashContexts:{'value': depth0,'selected': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-radio", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n    <li>");
    stack1 = (helper = helpers['paper-radio'] || (depth0 && depth0['paper-radio']),options={hash:{
      'value': ("2"),
      'selected': ("selectedValue")
    },hashTypes:{'value': "STRING",'selected': "ID"},hashContexts:{'value': depth0,'selected': depth0},inverse:self.noop,fn:self.program(13, program13, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-radio", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n    <li>");
    stack1 = (helper = helpers['paper-radio'] || (depth0 && depth0['paper-radio']),options={hash:{
      'value': ("3"),
      'selected': ("selectedValue")
    },hashTypes:{'value': "STRING",'selected': "ID"},hashContexts:{'value': depth0,'selected': depth0},inverse:self.noop,fn:self.program(15, program15, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-radio", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</li>\n  </ul>\n  <p>Selected value: ");
    stack1 = helpers._triageMustache.call(depth0, "selectedValue", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n\n  <p>");
    data.buffer.push(escapeExpression((helper = helpers['paper-radio'] || (depth0 && depth0['paper-radio']),options={hash:{
      'toggle': (true),
      'label': ("Blockless version")
    },hashTypes:{'toggle': "BOOLEAN",'label': "STRING"},hashContexts:{'toggle': depth0,'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-radio", options))));
    data.buffer.push("</p>\n  <h3>Template</h3>\n  <pre>\n    {{#paper-radio}}A radio button{{/paper-radio}}\n    {{#paper-radio toggle=true}}Toggable radio button{{/paper-radio}}\n    {{#paper-radio disabled=true}}Disabled radio button{{/paper-radio}}\n\n    {{#paper-radio value=\"1\" selected=selectedValue}}Radio button 1{{/paper-radio}}\n    {{#paper-radio value=\"2\" selected=selectedValue}}Radio button 2{{/paper-radio}}\n    {{#paper-radio value=\"3\" selected=selectedValue}}Radio button 3{{/paper-radio}}\n\n    {{paper-radio toggle=true label=\"Blockless version\"}}\n  </pre>\n");
    return buffer;
    }
  function program5(depth0,data) {
    
    
    data.buffer.push("A radio button");
    }

  function program7(depth0,data) {
    
    
    data.buffer.push("Toggable radio button");
    }

  function program9(depth0,data) {
    
    
    data.buffer.push("Disabled radio button");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push("Radio button 1");
    }

  function program13(depth0,data) {
    
    
    data.buffer.push("Radio button 2");
    }

  function program15(depth0,data) {
    
    
    data.buffer.push("Radio button 3");
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-padding")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/switch', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <h2 class=\"md-toolbar-tools\">\n    ");
    stack1 = (helper = helpers['paper-sidenav-toggle'] || (depth0 && depth0['paper-sidenav-toggle']),options={hash:{
      'class': ("menu-sidenav-toggle")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav-toggle", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <span>Switches</span>\n  </h2>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n      ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("menu")
    },hashTypes:{'icon': "STRING"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <p>\n    ");
    stack1 = (helper = helpers['paper-switch'] || (depth0 && depth0['paper-switch']),options={hash:{
      'checked': ("booleanProp1")
    },hashTypes:{'checked': "ID"},hashContexts:{'checked': depth0},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-switch", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['paper-switch'] || (depth0 && depth0['paper-switch']),options={hash:{
      'checked': ("booleanProp2")
    },hashTypes:{'checked': "ID"},hashContexts:{'checked': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-switch", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['paper-switch'] || (depth0 && depth0['paper-switch']),options={hash:{
      'disabled': (true)
    },hashTypes:{'disabled': "BOOLEAN"},hashContexts:{'disabled': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-switch", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    ");
    stack1 = (helper = helpers['paper-switch'] || (depth0 && depth0['paper-switch']),options={hash:{
      'noink': (true)
    },hashTypes:{'noink': "BOOLEAN"},hashContexts:{'noink': depth0},inverse:self.noop,fn:self.program(11, program11, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-switch", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n    ");
    data.buffer.push(escapeExpression((helper = helpers['paper-switch'] || (depth0 && depth0['paper-switch']),options={hash:{
      'label': ("Blockless version")
    },hashTypes:{'label': "STRING"},hashContexts:{'label': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-switch", options))));
    data.buffer.push("\n  </p>\n  <h3>Template</h3>\n  <pre>\n    {{#paper-switch checked=booleanProp1}} {{booleanProp1}} {{/paper-switch}}\n\n    {{#paper-switch checked=booleanProp2}} {{booleanProp2}} {{/paper-switch}}\n\n    {{#paper-switch disabled=true}} Disabled switch {{/paper-switch}}\n\n    {{#paper-switch noink=true}} Noink switch {{/paper-switch}}\n\n    {{paper-switch label=\"Blockless version\"}}\n  </pre>\n");
    return buffer;
    }
  function program5(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push(" ");
    stack1 = helpers._triageMustache.call(depth0, "booleanProp1", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push(" ");
    return buffer;
    }

  function program7(depth0,data) {
    
    var buffer = '', stack1;
    data.buffer.push(" ");
    stack1 = helpers._triageMustache.call(depth0, "booleanProp2", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push(" ");
    return buffer;
    }

  function program9(depth0,data) {
    
    
    data.buffer.push(" Disabled switch ");
    }

  function program11(depth0,data) {
    
    
    data.buffer.push(" Noink switch ");
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-padding")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/textfield', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <h2 class=\"md-toolbar-tools\">\n    ");
    stack1 = (helper = helpers['paper-sidenav-toggle'] || (depth0 && depth0['paper-sidenav-toggle']),options={hash:{
      'class': ("menu-sidenav-toggle")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav-toggle", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <span>Text fields</span>\n  </h2>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n      ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("menu")
    },hashTypes:{'icon': "STRING"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <ul class=\"paper-list-inline\">\n    <li>");
    data.buffer.push(escapeExpression((helper = helpers['paper-text'] || (depth0 && depth0['paper-text']),options={hash:{
      'label': ("Name"),
      'value': ("name")
    },hashTypes:{'label': "STRING",'value': "ID"},hashContexts:{'label': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-text", options))));
    data.buffer.push("</li>\n    <li>");
    data.buffer.push(escapeExpression((helper = helpers['paper-text'] || (depth0 && depth0['paper-text']),options={hash:{
      'label': ("E-mail"),
      'type': ("email"),
      'value': ("email")
    },hashTypes:{'label': "STRING",'type': "STRING",'value': "ID"},hashContexts:{'label': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-text", options))));
    data.buffer.push("</li>\n    <li>");
    data.buffer.push(escapeExpression((helper = helpers['paper-text'] || (depth0 && depth0['paper-text']),options={hash:{
      'label': ("Password"),
      'type': ("password")
    },hashTypes:{'label': "STRING",'type': "STRING"},hashContexts:{'label': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-text", options))));
    data.buffer.push("</li>\n    <li>");
    data.buffer.push(escapeExpression((helper = helpers['paper-text'] || (depth0 && depth0['paper-text']),options={hash:{
      'label': ("E-mail"),
      'type': ("email"),
      'disabled': (true)
    },hashTypes:{'label': "STRING",'type': "STRING",'disabled': "BOOLEAN"},hashContexts:{'label': depth0,'type': depth0,'disabled': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-text", options))));
    data.buffer.push("</li>\n  </ul>\n  <p>Name: ");
    stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n  <p>Email: ");
    stack1 = helpers._triageMustache.call(depth0, "email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("</p>\n  <h3>Template</h3>\n  <pre>\n    {{paper-text label=\"Name\" value=name}}\n    {{paper-text label=\"E-mail\" type=\"email\" value=email}}\n    {{paper-text label=\"Password\" type=\"password\"}}\n    {{paper-text label=\"E-mail\" type=\"email\" disabled=true}}\n  </pre>\n");
    return buffer;
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-padding")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/toolbar', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <h2 class=\"md-toolbar-tools\">\n    ");
    stack1 = (helper = helpers['paper-sidenav-toggle'] || (depth0 && depth0['paper-sidenav-toggle']),options={hash:{
      'class': ("menu-sidenav-toggle")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav-toggle", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <span>Toolbars</span>\n  </h2>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n      ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("menu")
    },hashTypes:{'icon': "STRING"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n\n  ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n  <p>\"md-toolbar-tools\" is a class that centers your elements in the toolbar.</p>\n\n  <h3>Template</h3>\n  <pre>\n    {{#paper-toolbar}}\n      &lt;div class=\"md-toolbar-tools\"&gt;\n        {{#paper-button}}Example button{{/paper-button}}\n        {{#paper-button}}Example button{{/paper-button}}\n      &lt;/div&gt;\n    {{/paper-toolbar}}\n  </pre>\n\n");
    return buffer;
    }
  function program5(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n    <div class=\"md-toolbar-tools\">\n      ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-button']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-button']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-button']) { stack1 = blockHelperMissing.call(depth0, 'paper-button', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n      ");
    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-button']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-button']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-button']) { stack1 = blockHelperMissing.call(depth0, 'paper-button', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    </div>\n  ");
    return buffer;
    }
  function program6(depth0,data) {
    
    
    data.buffer.push("Example button");
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-padding")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/templates/typography', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
  helpers = this.merge(helpers, Ember['default'].Handlebars.helpers); data = data || {};
    var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

  function program1(depth0,data) {
    
    var buffer = '', stack1, helper, options;
    data.buffer.push("\n  <h2 class=\"md-toolbar-tools\">\n    ");
    stack1 = (helper = helpers['paper-sidenav-toggle'] || (depth0 && depth0['paper-sidenav-toggle']),options={hash:{
      'class': ("menu-sidenav-toggle")
    },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-sidenav-toggle", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n    <span>HTML Elements</span>\n  </h2>\n");
    return buffer;
    }
  function program2(depth0,data) {
    
    var buffer = '', helper, options;
    data.buffer.push("\n      ");
    data.buffer.push(escapeExpression((helper = helpers['paper-icon'] || (depth0 && depth0['paper-icon']),options={hash:{
      'icon': ("menu")
    },hashTypes:{'icon': "STRING"},hashContexts:{'icon': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-icon", options))));
    data.buffer.push("\n    ");
    return buffer;
    }

  function program4(depth0,data) {
    
    
    data.buffer.push("\n  <h3>Headings</h3>\n  <div class=\"preview-block\">\n    <h1>&lt;h1&gt;</h1>\n    <h2>&lt;h2&gt;</h2>\n    <h3>&lt;h3&gt;</h3>\n    <h4>&lt;h4&gt;</h4>\n    <h5>&lt;h5&gt;</h5>\n    <h6>&lt;h6&gt;</h6>\n  </div>\n\n  <h3>Formatting</h3>\n  <div class=\"preview-block\">\n    <p><u>&lt;u&gt;Underlined&lt;u&gt;</u></p>\n\n    <p><b>&lt;b&gt;Bold&lt;b&gt;</b></p>\n\n    <p><strong>&lt;strong&gt;Strong&lt;strong&gt;</strong></p>\n\n    <p><i>&lt;italic&gt;Italic&lt;italic&gt;</i></p>\n\n    <p><em>&lt;em&gt;Em&lt;em&gt;</em></p>\n\n    <p><s>&lt;s&gt;Strikethrough&lt;s&gt;</s></p>\n\n    <p><small>&lt;small&gt;Small&lt;small&gt;</small></p>\n\n    <p><mark>&lt;mark&gt;Mark&lt;mark&gt;</mark></p>\n  </div>\n\n  <h3>Subtitles</h3>\n  <div class=\"preview-block\">\n    <h1>&lt;h1&gt; <small>Subtitle</small></h1>\n    <h2>&lt;h2&gt; <small>Subtitle</small></h2>\n    <h3>&lt;h3&gt; <small>Subtitle</small></h3>\n    <h4>&lt;h4&gt; <small>Subtitle</small></h4>\n    <h5>&lt;h5&gt; <small>Subtitle</small></h5>\n    <h6>&lt;h6&gt; <small>Subtitle</small></h6>\n  </div>\n\n  <h3>Description</h3>\n  <div class=\"preview-block\">\n    <dl>\n      <dt>Description lists</dt>\n      <dd>A description list is perfect for defining terms.</dd>\n      <dt>Euismod</dt>\n      <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>\n      <dd>Donec id elit non mi porta gravida at eget metus.</dd>\n      <dt>Malesuada porta</dt>\n      <dd>Etiam porta sem malesuada magna mollis euismod.</dd>\n    </dl>\n  </div>\n\n  <h3>Quotes</h3>\n  <div class=\"preview-block\">\n    <blockquote>&lt;blockquote&gt;</blockquote>\n  </div>\n\n  <h2>Addresses</h2>\n\n  <address>\n    <strong>Googleplex</strong><br>\n    1600 Amphitheatre Pkwy<br>\n    Mountain View, CA 94043<br>\n    <abbr title=\"Phone\">P:</abbr> (650) 253-0000\n  </address>\n\n  <h2>Code</h2>\n\n  <h3>Multi-line code blocks</h3>\n  <p>\n  Use &lt;pre&gt; for multi-line code blocks.\n  <pre>\n  &lt;p&gt;This is the first line of code&lt;/p&gt;\n  &lt;p&gt;This is the second line of code&lt;/p&gt;\n  </pre>\n  </p>\n\n  <h3>Inline code blocks</h3>\n  <p>Code blocks like <code>&lt;main&gt;</code> could be displayed inline.</p>\n\n  <h2>Tables</h2>\n\n  <h3>Basic table</h3>\n\n  <table>\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>First Name</th>\n        <th>Last Name</th>\n        <th>Username</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>1</td>\n        <td>Larry</td>\n        <td>Page</td>\n        <td>+LarryPage</td>\n      </tr>\n      <tr>\n        <td>2</td>\n        <td>Sergey</td>\n        <td>Brin</td>\n        <td>+SergeyBrin</td>\n      </tr>\n      <tr>\n        <td>3</td>\n        <td>Eric</td>\n        <td>Schmidt</td>\n        <td>+EricSchmidt</td>\n      </tr>\n    </tbody>\n  </table>\n");
    }

    options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}
    if (helper = helpers['paper-toolbar']) { stack1 = helper.call(depth0, options); }
    else { helper = (depth0 && depth0['paper-toolbar']); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
    if (!helpers['paper-toolbar']) { stack1 = blockHelperMissing.call(depth0, 'paper-toolbar', {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data}); }
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n\n");
    stack1 = (helper = helpers['paper-content'] || (depth0 && depth0['paper-content']),options={hash:{
      'classNames': ("md-padding")
    },hashTypes:{'classNames': "STRING"},hashContexts:{'classNames': depth0},inverse:self.noop,fn:self.program(4, program4, data),contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "paper-content", options));
    if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
    data.buffer.push("\n");
    return buffer;
    
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';

  function startApp(attrs) {
    var App;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Router['default'].reopen({
      location: 'none'
    });

    Ember['default'].run(function() {
      App = Application['default'].create(attributes);
      App.setupForTesting();
      App.injectTestHelpers();
    });

    App.reset(); // this shouldn't be needed, i want to be able to "start an app at a specific URL"

    return App;
  }
  exports['default'] = startApp;

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

  'use strict';

  ember_qunit.setResolver(resolver['default']);

  document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

  QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
  var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
  document.getElementById('ember-testing-container').style.visibility = containerVisibility;

});
define('dummy/tests/unit/components/base-focusable-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('base-focusable', 'BaseFocusableComponent', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  ember_qunit.test('it renders', function() {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    equal(component._state, 'inDOM');
  });

});
define('dummy/tests/unit/components/paper-button-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('paper-button', 'PaperButtonComponent', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  ember_qunit.test('it renders', function() {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    equal(component._state, 'inDOM');


  });

});
define('dummy/tests/unit/components/paper-checkbox-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('paper-checkbox', 'PaperCheckboxComponent', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  ember_qunit.test('it renders', function() {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    equal(component._state, 'inDOM');
  });

});
define('dummy/tests/unit/components/paper-content-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('paper-content', 'PaperContentComponent', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  ember_qunit.test('it renders', function() {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    equal(component._state, 'inDOM');
  });

});
define('dummy/tests/unit/components/paper-drawer-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('paper-drawer', 'PaperDrawerComponent', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  ember_qunit.test('it renders', function() {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    equal(component._state, 'inDOM');
  });

});
define('dummy/tests/unit/components/paper-radio-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('paper-radio', 'PaperRadioComponent', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  ember_qunit.test('it renders', function() {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    equal(component._state, 'inDOM');
  });

});
define('dummy/tests/unit/components/paper-ripple-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('paper-ripple', 'PaperRippleComponent', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  ember_qunit.test('it renders', function() {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    equal(component._state, 'inDOM');
  });

});
define('dummy/tests/unit/components/paper-shadow-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('paper-shadow', 'PaperShadowComponent', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  ember_qunit.test('it renders', function() {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    equal(component._state, 'inDOM');
  });

});
define('dummy/tests/unit/components/paper-sidenav-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('paper-sidenav', 'PaperSidenavComponent', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  ember_qunit.test('it renders', function() {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    equal(component._state, 'inDOM');
  });

});
define('dummy/tests/unit/components/paper-text-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('paper-text', 'PaperTextComponent', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  ember_qunit.test('it renders', function() {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    equal(component._state, 'inDOM');
  });

});
define('dummy/tests/unit/components/paper-toggle-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('paper-toggle', 'PaperToggleComponent', {
    // specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
  });

  ember_qunit.test('it renders', function() {
    expect(2);

    // creates the component instance
    var component = this.subject();
    equal(component._state, 'preRender');

    // appends the component to the page
    this.append();
    equal(component._state, 'inDOM');
  });

});
define('dummy/tests/unit/initializers/events-test', ['ember', 'dummy/initializers/events', 'qunit'], function (Ember, events, qunit) {

  'use strict';

  var container, application;

  qunit.module('EventsInitializer', {
    beforeEach: function() {
      Ember['default'].run(function() {
        application = Ember['default'].Application.create();
        container = application.__container__;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  qunit.test('it works', function(assert) {
    events.initialize(container, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});
define('dummy/views/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].View.extend({
    classNames:['ember-app']
  });

});
define('dummy/views/button', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].View.extend({
    actions: {
      targetButton: function() {
        alert('You pressed a target button. -from view');
      }
    }
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map