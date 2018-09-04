window.alert = function(msg) {  
    var div = document.createElement("div");  
    div.innerHTML = "<style type=\"text/css\">"  
            + ".nbaMask {font-family:'Helvetica Neue',Helvetica,sans-serif; position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); }                                                                                                                                                                       "  
            + ".nbaMaskTransparent { position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; }                                                                                                                                                                                            "  
            + ".nbaDialog { position: fixed; z-index: 5000; width:80%; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); background: rgba(0, 0, 0, 0.8); text-align: center; border-radius:.7rem; overflow: hidden; opacity: 1;}"  
            + ".nbaDialog .nbaDialogHd { padding: .2rem .27rem .08rem .27rem; }                                                                                                                                                                                                                         "  
            + ".nbaDialog .nbaDialogHd .nbaDialogTitle { font-size: 15px; font-weight: 400; }                                                                                                                                                                                                           "  
            + ".nbaDialog .nbaDialogBd { padding:1.6rem; font-size:1.5rem; line-height:1rem; word-wrap: break-word; word-break: break-all; color: #FFF; }                                                                                                                                          "  
            + ".nbaDialog .nbaDialogFt { position: relative; line-height:5rem; font-size:2rem; display: -webkit-box; display: -webkit-flex; display: flex; }                                                                                                                                          "  
            + ".nbaDialog .nbaDialogFt:after { content: \" \"; position: absolute; left: 0; top: 0; right: 0; height: 1px; border-top: 1px solid #b5b5b5; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleY(0.5); transform: scaleY(0.5); }               "  
            + ".nbaDialog .nbaDialogBtn { display: block; -webkit-box-flex: 1; -webkit-flex: 1; flex: 1; color:#0894ec; text-decoration: none; -webkit-tap-highlight-color: transparent; position: relative; margin-bottom: 0; }                                                                       "  
            + ".nbaDialog .nbaDialogBtn:after { content: \" \"; position: absolute; left: 0; top: 0; width: 1px; bottom: 0; color: #e6e6e6; -webkit-transform-origin: 0 0; transform-origin: 0 0; -webkit-transform: scaleX(0.5); transform: scaleX(0.5); }             "  
            + ".nbaDialog a { text-decoration: none; -webkit-tap-highlight-color: transparent; }"  
            + "</style>"  
            + "<div id=\"dialogs\" style=\"display: none\">"  
            + "<div class=\"nbaDialog\">"  
            + " <div class=\"nbaDialogHd\">"  
            + "     <strong class=\"nbaDialogTitle\"></strong>"  
            + " </div>"  
            + " <div class=\"nbaDialogBd\" id=\"dialog_msg\"></div>"  
            + " <div class=\"nbaDialogHd\">"  
            + "     <strong class=\"nbaDialogTitle\"></strong>"  
            + " </div>"      
            + " </div></div>";  
    document.body.appendChild(div);  
  
    var dialogs = document.getElementById("dialogs");  
    dialogs.style.display = 'block';  
  
    var dialog_msg = document.getElementById("dialog_msg");  
    dialog_msg.innerHTML = msg;  
  
  setTimeout(" var div = document.createElement('div'); var dialogs = document.getElementById('dialogs'); dialogs.parentNode.remove(div)",1500);  

};  



 








