var DELAYLOADIMAGE = DELAYLOADIMAGE || {};

DELAYLOADIMAGE.CLASSNAME = 'delayLoadImage';

DELAYLOADIMAGE.startDelayLoadImage = function(success, error) {
    var imageElements = document.getElementsByClassName(DELAYLOADIMAGE.CLASSNAME);
    for (var i = 0; i < imageElements.length; i++) {
        var imageSrc = imageElements[i].getAttribute('data-src');
        imageElements[i].setAttribute('src', imageSrc);
        imageElements[i].onload = function() {
            this.classList.remove(DELAYLOADIMAGE.CLASSNAME);
            if (typeof success == 'function') {
                success();
            }
        }
        imageElements[i].onerror = function() {
            this.classList.remove(DELAYLOADIMAGE.CLASSNAME);
            if (typeof error == 'function') {
                error();
            }
        }
    }
}
