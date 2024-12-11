var arr = [1, 45, 'javascript', true, false, -567, 'node,js'];
list(arr);
function list(arrayOfItem) {
    document.write("<ul>");
    for (var _i = 0, arrayOfItem_1 = arrayOfItem; _i < arrayOfItem_1.length; _i++) {
        var item = arrayOfItem_1[_i];
        document.write("<li>".concat(item, "</li>"));
    }
    document.write("</ul>");
}
