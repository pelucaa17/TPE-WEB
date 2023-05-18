"use strict"

(function(){
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchavalue = "";
    function generatecaptcha(){
        let value = btoa(Math.random() *1000000000);
        value = value.substring(0,5+Math.random()*5);
        captchavalue = value;
    }
    function setcaptcha(){
        let html = captchavalue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return <span
                style="
                transform:rotate(${rotate}deg);
                font-family:${fonts[font]}
                "
            >${char}</span>
        }).join("");
        document.querySelector(".captcha .preview") .innerHTML = html;
    }
    function initcaptcha(){
        document .querySelector(".captcha .captcha-refresh").addEventListener("click", function(){
            generatecaptcha();
            setcaptcha();
        });
        generatecaptcha();
        setcaptcha();
    }
    initcaptcha();

    document.querySelector(".captcha #signup-btn").addEventListener("click", function(){
        let inputcaptchavalue = document.querySelector(".captcha .captcha input").value;
        if (inputcaptchavalue === captchavalue){
            swal("", "Logging In", "Success");
        } else {
            swal("Invalid Captcha");
        }
    });
})();