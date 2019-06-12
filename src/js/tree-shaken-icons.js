import { library, dom } from 'node_modules/@fortawesome/fontawesome-svg-core';
import { faFacebookF, faTwitter, faPinterest, faInstagram, faLinkedin, faYoutube } from 'node_modules/@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFilter, faFilePdf, faExclamationTriangle, faInfoCircle, faLink, faSearch, faPrint, faPlus, faMinus, faTimes, faChevronUp, faChevronRight, faChevronDown, faChevronLeft } from 'node_modules/@fortawesome/pro-regular-svg-icons';

//
// ---------------------------------------

library.add(faEnvelope, faFacebookF, faTwitter, faPinterest, faInstagram, faLinkedin, faYoutube, // falEnvelope,
// fasEnvelope,
// farEnvelope,
faFilter, faFilePdf, faExclamationTriangle, faInfoCircle, faLink, faSearch, faPrint, faPlus, faMinus, faTimes, faChevronUp, faChevronRight, faChevronDown, faChevronLeft); // Replace any existing <i> tags with <svg> and set up a MutationObserver to
// continue doing this as the DOM changes.
// ---------------------------------------

dom.watch();
