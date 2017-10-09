var Swiper = function (ele,swiperLeft,swiperRight) {
    this.config = {
        startX: 0,
        startY: 0,
        step: 20,
        ele:ele,
        flag:false,
        callbackLeft:swiperLeft,
        callbackRight:swiperRight
    };
    this.init();
};

Swiper.prototype.init = function () {
    var that=this;
    var curElement=this.config.ele;
    curElement.addEventListener("touchstart",function(event){
        that.touchStart(curElement,event);
    },false);
};
Swiper.prototype.touchStart = function (ele,event) {
        var that = this;
        this.config.startX=event.changedTouches[0].clientX || event.clientX;
        //that.config.startY=event.changedTouches[0].clientY || event.clientY;
       ele.addEventListener("touchmove",function(event){
           that.touchMove(event);
       },false);

};

Swiper.prototype.swiperLeft=function(){
    this.config.callbackLeft();
};
Swiper.prototype.swiperRight=function(){
    this.config.callbackRight();
};
Swiper.prototype.swiperCancle=function(){
  this.config.startX=0;
    this.config.ele.removeEventListener("touchmove",this.touchMove)
};
Swiper.prototype.touchMove=function(event){

        var moveX=event.changedTouches[0].clientX || event.clientX;
        //var moveY=event.changedTouches[0].clientY || event.clientY;
        var absDistX=Math.abs(this.config.startX-moveX);
        if(absDistX<this.config.step){
            this.swiperCancle();
        }else{
            if(this.config.startX>moveX){
                this.swiperLeft();
            }else{
                this.swiperRight();
            }
        }
};