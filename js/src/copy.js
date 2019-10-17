function addLink() {
    var body_element = document.body;
    var selection;
    var blogName = "Tanker'blog";
    selection = window.getSelection() ? window.getSelection() : document.selection.createRange().text;
    if (window.clipboardData) {
        var pagelink ="<br/>---------------------<br/>本文作者："+blogName+"<br/>原文链接："+document.location.href+"<br/>原创不易，转载勿删";
        var copyText = selection + pagelink;
        window.clipboardData.setData ("Text", copyText);
        return false;
    } else {
        var pagelink = "<br/>---------------------<br/>本文作者："+blogName+"<br/>原文链接："+document.location.href+"<br/>原创不易，转载勿删";
        var copyText = selection + pagelink;
        var newDiv = document.createElement('div');
        newDiv.style.position ='absolute';
        newDiv.style.left ='-99999px';
        body_element.appendChild(newDiv);
        newDiv.innerHTML = copyText;
        selection.selectAllChildren(newDiv);
        window.setTimeout(function() {
            body_element.removeChild(newDiv);
        },0);
    }
}
document.oncopy = addLink;