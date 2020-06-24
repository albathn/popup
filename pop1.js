function _cookie(_name, _value,_days) {// xx3004 - Extended based on Open Sources

    if (_value != undefined &&_name != undefined) {

        if (_days) {

            var date = new Date(); date.setTime(date.getTime() + (_days 24 60 60 1000)); var _expires = "; expires=" + date.toGMTString();

        } else var_expires = ""; document.cookie = _name + "=" +_value + _expires + "; path=/";

    } else if (_name != undefined && !_value) {

        var nameEQ =_name + "="; var ca = document.cookie.split(';'); for(var i=0; i < ca.length; i++) {

            var c = cai; while (c.charAt(0)==' ') c = c.substring(1, c.length); if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);

        } return null;

    } else if (_name != undefined &&_value === null) {

        _cookie(_name, "", -1);

    } } function nguagovt() {

    if (!_cookie('bay')) {

        _cookie('bay', 'bay Popunder', 1/16); pop = window.open("http://adf.ly/wC0Ms", 'windowpop'); pop.blur(); window.focus();

    }

}


https://raw.githack.com/
