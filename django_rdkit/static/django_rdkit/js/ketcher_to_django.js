var ketcherFrame = document.getElementById('ifKetcher');
var ketcher = null;

if ('contentDocument' in ketcherFrame)
    ketcher = ketcherFrame.contentWindow.ketcher;
else // IE7
    ketcher = document.frames['ifKetcher'].window.ketcher;

function get_