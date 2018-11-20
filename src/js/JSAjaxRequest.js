var JSAjaxRequest = function(option){
    var _default = {
        url:option.url,
        type:'POST',
        data:option.data,
        contentType:option.contentType||'application/x-www-form-urlencoded',
        success:option.success,
        error:option.error
    }

    var xmlhttp;

    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.responseType = "json";
    
    xmlhttp.open(_default.type,_default.url,true);

    xmlhttp.setRequestHeader("Content-type",_default.contentType);

    xmlhttp.onload = function(e) { 
        if(this.status == 200||this.status == 304){
            console.log(this.response);
        }
    }
    xmlhttp.onerror = function(e) {
        _default.error(e.responseText)
    };
    xmlhttp.send(_default.data);
};



export {JSAjaxRequest};
