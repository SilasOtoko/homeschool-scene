//
// Icons import file
// --------------------------------------------------
// Uses Font Awesome 5 icons + API:
// https://fontawesome.com/how-to-use/on-the-web/advanced/svg-javascript-core
// https://fontawesome.com/how-to-use/with-the-api/setup/getting-started
// --------------------------------------------------
// 
// --------------------------------------------------
// Gulp is used to command Rollup to turn this import
// file in to a rendered, tree-shaken file, that only
// includes the icons desired.
// --------------------------------------------------


// [Step 1] Import desired icons...
// ---------------------------------------

// First, import the library and DOM manipulation utilities
import { library, dom } from '@fortawesome/fontawesome-svg-core';


// Add the icons you want to use here, AND include them in the Library .add() function below

// Common Brands _________
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';

import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
// import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';

// Demo: Light, Solid, and Regular versions of the same icon _________
// import { faEnvelope as falEnvelope } from '@fortawesome/pro-light-svg-icons';
// import { faEnvelope as fasEnvelope } from '@fortawesome/pro-solid-svg-icons';
// import { faEnvelope as farEnvelope } from '@fortawesome/pro-regular-svg-icons';

// Common Icons that RB uses on sites _________
// import { faEnvelope } from '@fortawesome/pro-regular-svg-icons';
// import { faFilter } from '@fortawesome/pro-regular-svg-icons';
// import { faFilePdf } from '@fortawesome/pro-regular-svg-icons';
// import { faExclamationTriangle } from '@fortawesome/pro-regular-svg-icons';
// import { faInfoCircle } from '@fortawesome/pro-regular-svg-icons';
// import { faLink } from '@fortawesome/pro-regular-svg-icons';
// import { faSearch } from '@fortawesome/pro-regular-svg-icons';
// import { faPrint } from '@fortawesome/pro-regular-svg-icons';
// import { faPlus } from '@fortawesome/pro-regular-svg-icons';
// import { faMinus } from '@fortawesome/pro-regular-svg-icons';
// import { faTimes } from '@fortawesome/pro-regular-svg-icons';
// import { faChevronUp } from '@fortawesome/pro-regular-svg-icons';
// import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
// import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';
// import { faChevronLeft } from '@fortawesome/pro-regular-svg-icons';


// [Step 2] Add desired icons to library
// ---------------------------------------
library.add(
	// faEnvelope,
	faFacebookF,
	faFacebook,
	faTwitter,
	// faPinterest,
	faInstagram,
	// faLinkedin,
	// faYoutube,
	// falEnvelope,
	// fasEnvelope,
	// farEnvelope,
	// faFilter,
	// faFilePdf,
	// faExclamationTriangle,
	// faInfoCircle,
	// faLink,
	// faSearch,
	// faPrint,
	// faPlus,
	// faMinus,
	// faTimes,
	// faChevronUp,
	// faChevronRight,
	// faChevronDown,
	// faChevronLeft,
);


// Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
// ---------------------------------------
dom.watch();
