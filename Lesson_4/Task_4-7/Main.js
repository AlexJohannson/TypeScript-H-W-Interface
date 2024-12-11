var list1 = function (text, counter) {
    document.write("<ul>");
    for (var i = 0; i < counter; i++) {
        document.write("<li>".concat(text, "</li>"));
    }
    document.write("</ul>");
};
list1('Frontend', 5);
