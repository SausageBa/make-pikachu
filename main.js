! function () {
    var time = 50
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        setTimeout(function run(){
            n += 1
            container.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            styleTag.innerHTML = code.substring(0, n)
            if (n < code.length) {
                setTimeout(run,time)
            }else{
                fn && fn.call()
            }
        }, time)
    }
    let code = `
    /*
     *首先，先准备皮卡丘的皮   
    */
    .preview {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FEE433;
    }
    .wrapper {
        width: 100%;
        height: 165px;
        position: relative;
    }
    /*
    *接下来，画个小鼻子   
   */   
    .nose {
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 12px;
        border-color: black transparent transparent;
        border-radius: 11px;
        position: absolute;
        left: 50%;
        top: 28px;
        margin-left: -12px;
    }
    /*
    *来画双眼吧   
   */   
    .eye {
        width: 49px;
        height: 49px;
        background: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000000;
    }    
    .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background: white;
        position: absolute;
        border-radius: 50%;
        left: 6px;
        top: -1px;
        border: 2px solid #000;
    }    
    .eye.left {
        right: 50%;
        margin-right: 90px;
    }    
    .eye.right {
        left: 50%;
        margin-left: 90px;
    }
    /*
    *小红脸蛋来一个   
   */    
    .face {
        width: 68px;
        height: 68px;
        background: #FC0D1C;
        border: 2px solid black;
        border-radius: 50%;
        position: absolute;
        top: 85px;
    }    
    .face.left {
        right: 50%;
        margin-right: 116px;
    }    
    .face.right {
        left: 50%;
        margin-left: 116px;
    }
    /*
    *来个性感上嘴唇  
   */   
    .upperLip {
        height: 25px;
        width: 80px;
        border: 2px solid black;
        position: absolute;
        top: 50px;
        background: #FEE433;
    }   
    .upperLip.left {
        right: 50%;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }    
    .upperLip.right {
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    /*
    *哪能没有下嘴唇   
   */    
    .lowerLip-wrapper {
        bottom: 0;
        position: absolute;
        left: 50%;
        margin-left: -150px;
    
        height: 110px;
        overflow: hidden;
        width: 300px;
    }    
    .lowerLip {
        height: 3500px;
        width: 300px;
        background: #990513;
        border-radius: 200px/2000px;
        border: 2px solid black;
        position: absolute;
        bottom: 0;
        overflow: hidden;
    }
    /*
    *最后，画个调皮的小舌头   
   */  
    .lowerLip::after {
        content: '';
        position: absolute;
        bottom: -20px;
        width: 100px;
        height: 100px;
        background: #FC4A62;
        left: 50%;
        margin-left: -50px;
        border-radius: 50px;
    }`
    writeCode('', code)
    $('.actions').on('click','button',(e)=>{
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
            .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                time = 100
                break
            case 'normal':
                time = 50
                break
            case 'fast':
                time = 10
                break   
        }    
    })
}.call()