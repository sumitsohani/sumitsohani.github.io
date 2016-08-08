function calcHeight() {
	var top = document.getElementById('top-cont').clientHeight + 10;
	var bottom = document.getElementById('footer').clientHeight;

	var body = document.body,
    html = document.documentElement;

    var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    var cHeight = document.getElementById('contact').clientHeight;
    var corrHeight = height - (top + bottom);
    var toPad = (corrHeight - cHeight)/2 + 5;

    document.getElementById("contact").setAttribute("style", "padding-top:" + toPad + "px;padding-bottom:" + toPad + "px;");
    }