/**
 * This object makes the HTML5 <input placeholder> attribute cross-browser
 * compatible, allowing any page that includes this in the <head> section
 * to use it, regardless of browser. No calls to it or initialization is
 * required.
 * 
 * Also enables the ability to add placeholders to input elements without
 * the use of the attribute, by simply calling the "Add" method of the global
 * "Placeholder" object. (See details below, in the function's docblock.)

 * Found in a comment on http://www.dreamincode.net/forums/topic/247539-how-to-use-the-placeholder-attribute-of-html-5-create-a-fallback/,
(link?) http://www.dreamincode.net/forums/topic/247539-how-to-use-the-placeholder-attribute-of-html-5-create-a-fallback/page__view__findpost__p__1438425?s=690d9abf92411a3baaff0031e3d37df5

 */
var Placeholder = (function() 
{
    /** The color of the placeholder text. */
    var placeholderColor = "#A0A0A0";
    
    /** The color of normal text values. */
    var normalColor = "#000000";
    
    /**
     * Cross browser compatible addEventListener function. Parameters mimic the
     * standard version, with the added elem param.
     */
    var xAddEventListener = function(elem, type, listener, useCapture) {
        if (elem.addEventListener)
            elem.addEventListener(type, listener, useCapture);
        else if (elem.attachEvent)
            elem.attachEvent("on" + type, listener);
        else
            elem["on" + type] = listener;
    }
    
    /**
     * A boolean indiciating the browser support for the
     * placeholder attribute. 
     */
    this.native_support = (function() {
        var input = document.createElement("input");
        return "placeholder" in input;
    })();
    
    /**
     * Adds a placeholder value on the specified input. Note that this does not
     * check if native placholder support is available, allowing you to add
     * Javascript placeholders regardless of browser support.
     * @param input The input element, or the ID of the input element.
     * @param placeholder The string to use as the placeholder value.
     */
    this.Add = function(input, placeholder) {
        if (typeof input == "string") {
            input = document.getElementById(input);
        }

        // Add the blur and focus events
        xAddEventListener(input, "focus", function() {
            if (input.value == placeholder) {
                input.value = "";
                input.style.color = normalColor;
            }
        }, true);
        var onblur = function() {
            if (input.value == "" || input.value == placeholder) {
                input.value = placeholder;
                input.style.color = placeholderColor;
            }
        }
        xAddEventListener(input, "blur", onblur, true);
        
        // Make sure the placeholder value isn't sent with the form.
        var pform = input;
        do {
            pform = pform.parentNode;
        } while (pform != document && pform.tagName.toLowerCase() != "form");
        
        if (pform && pform != document) {
            xAddEventListener(pform, "submit", function() {
                if (input.value == placeholder) {
                    input.value = "";
                }
            }, true);
        }
        
        // Set the initial state of the input, showing the placeholder.
        onblur();
    }
    
    /* Enables the placeholder values set on input elements  
     * in browsers that do not support it. */
    var onReady = function() {
        if (!Placeholder.native_support) {
            var inputs = document.getElementsByTagName("input");
            for (var i = 0; i < inputs.length; ++i) {
                if (inputs[i] && inputs[i].tagName.toLowerCase() == "input") {
                    var attr = inputs[i].getAttribute("placeholder");
                    if (typeof attr == "string" && attr.length > 0) {
                        Placeholder.Add(inputs[i], attr);
                    }
                }
            }
        }
    };

    // Prefer the DOMContentLoaded event if available, but fall back on the
    // load event for old or HTML5 non-compliant browsers.
    var readyHasFired = false;
    xAddEventListener(window, "DOMContentLoaded", function() {
        readyHasFired = true;
        onReady();
    }, true);
    xAddEventListener(window, "load", function() {
        if (!readyHasFired) {
            onReady();
        }
    }, true);
    
    return this;
})();