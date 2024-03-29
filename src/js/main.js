import $ from 'jquery';
window.jQuery = window.$ = $;

import device from 'current-device';

require('./app');

require('./components/verificationPopup');
require('./components/uploadFile');
require('./components/footerMobileExpand');
require('./components/accountOrdersChange');
require('./components/accountPageSwitch');
require('./components/imgSlider');
require('./components/contactsSlider');
require('./components/mainSlider');
require('./components/recenseSlider');

require('./other/select');
require('./other/teamSlider');
require('./other/popup');

