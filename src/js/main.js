window.addEventListener("load", () => {

    // Add video wrapper around YouTube iframe to make it fill space
    var iframes = document.getElementsByTagName('iframe');
    var key = 'youtube';

    for (var i = 0; i != iframes.length; ++i) {

        if(iframes[i].src.indexOf(key) !== -1) {
            var wrapper = document.createElement('div');
            wrapper.setAttribute('class', 'video-wrapper');
            iframes[i].parentNode.insertBefore(wrapper, iframes[i]);
            wrapper.appendChild(iframes[i]);
        }
    }
});