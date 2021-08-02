var ketcherFrame = document.getElementById('ifKetcher');
var ketcher = null;

if ('contentDocument' in ketcherFrame) {
    ketcher = ketcherFrame.contentWindow.ketcher;
    ketcherFrame.contentWindow.document.onclick = function() {
        document.getElementById("taKetcher").value = ketcher.getMolfile()
    };
}
else { // IE7
    ketcher = document.frames['ifKetcher'].window.ketcher;
    document.frames['ifKetcher'].window.document.onclick = function() {
        document.getElementById("taKetcher").value = ketcher.getMolfile()
    };
}