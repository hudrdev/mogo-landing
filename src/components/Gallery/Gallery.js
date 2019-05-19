import React, { Component } from 'react';
import $ from "jquery";

class Gallery extends Component {
    componentDidMount() {
        $.fn.snakeify = function( options ) {
            var settings = $.extend({
                inaccuracy: 30,
                speed: 200
            }, options );
            this.find('.overlay').css({top: -9999999});
    
            this.mouseenter(function(e){
                const container = $(this);
                const overlay = container.find('.overlay');
                const parentOffset = container.offset(); 
                const relX = e.pageX - parentOffset.left;
                const relY = e.pageY - parentOffset.top;
                overlay.css({
                    top: 0,
                    left: 0,
                    width: container.width(),
                    height: container.height()
                });
                if(relX > container.width()-settings.inaccuracy){
                    overlay.css({
                        top: 0,
                        left: container.width(),
                    });
                }else if(relX < settings.inaccuracy){
                    overlay.css({
                        top: 0,
                        left: -container.width(),
                    });
                }else if(relY > container.width()-settings.inaccuracy){
                    overlay.css({
                        top: container.width(),
                        left: 0,
                    });
                }else if(relY < settings.inaccuracy){
                    overlay.css({
                        top: -container.width(),
                        left: 0,
                    });
                }
                overlay.animate({
                        top: 0,
                        left: 0
                },settings.speed);
            });
    
            this.mouseleave(function(e){
                const container = $(this);
                const overlay = container.find('.overlay');
                const parentOffset = container.offset(); 
                const relX = e.pageX - parentOffset.left;
                const relY = e.pageY - parentOffset.top;
                if(relX <= 0){
                    overlay.animate({
                        top: 0,
                        left: -container.width()
                    },settings.speed);
                } 
                if(relX >= container.width()) {
                    overlay.animate({
                        top: 0,
                        left: container.width()
                    },settings.speed);
                }
                if(relY <= 0){
                    overlay.animate({
                        left: 0,
                        top: -container.height()
                    },settings.speed);
                }
                if(relY >= container.height()){
                    overlay.animate({
                        left: 0,
                        top: container.height()
                    },settings.speed);
                }
            });
        };

        $(".snake").snakeify({
            speed: 200    
        });    
    }

    render() {
        return (
            <div className="Gallery">
                <div className="Gallery__item snake">
                    <div className="overlay">
                        <div className="Gallery__item-over">
                            <img src={require('../../img/gallery-overlay.svg')} alt=""/>
                            <p>creatively designed</p>
                            <span>Lorem ipsum dolor sit</span>
                        </div>
                    </div>
                    <img src={require('../../img/gallery-1.jpg')} alt=""/>
                </div>

                <div className="Gallery__item snake">
                    <div className="overlay">
                        <div className="Gallery__item-over">
                            <img src={require('../../img/gallery-overlay.svg')} alt=""/>
                            <p>creatively designed</p>
                            <span>Lorem ipsum dolor sit</span>
                        </div>
                    </div>
                    <img src={require('../../img/gallery-2.jpg')} alt=""/>
                </div>

                <div className="Gallery__item snake">
                    <div className="overlay">
                        <div className="Gallery__item-over">
                            <img src={require('../../img/gallery-overlay.svg')} alt=""/>
                            <p>creatively designed</p>
                            <span>Lorem ipsum dolor sit</span>
                        </div>
                    </div>
                    <img src={require('../../img/gallery-3.jpg')} alt=""/>
                </div>

                <div className="Gallery__item snake">
                    <div className="overlay">
                        <div className="Gallery__item-over">
                            <img src={require('../../img/gallery-overlay.svg')} alt=""/>
                            <p>creatively designed</p>
                            <span>Lorem ipsum dolor sit</span>
                        </div>
                    </div>
                    <img src={require('../../img/gallery-4.jpg')} alt=""/>
                </div>

                <div className="Gallery__item snake">
                    <div className="overlay">
                        <div className="Gallery__item-over">
                            <img src={require('../../img/gallery-overlay.svg')} alt=""/>
                            <p>creatively designed</p>
                            <span>Lorem ipsum dolor sit</span>
                        </div>
                    </div>
                    <img src={require('../../img/gallery-5.jpg')} alt=""/>
                </div>

                <div className="Gallery__item snake">
                    <div className="overlay">
                        <div className="Gallery__item-over">
                            <img src={require('../../img/gallery-overlay.svg')} alt=""/>
                            <p>creatively designed</p>
                            <span>Lorem ipsum dolor sit</span>
                        </div>
                    </div>
                    <img src={require('../../img/gallery-6.jpg')} alt=""/>
                </div>

                <div className="Gallery__item snake">
                    <div className="overlay">
                        <div className="Gallery__item-over">
                            <img src={require('../../img/gallery-overlay.svg')} alt=""/>
                            <p>creatively designed</p>
                            <span>Lorem ipsum dolor sit</span>
                        </div>
                    </div>
                    <img src={require('../../img/gallery-7.jpg')} alt=""/>
                </div>
            </div>
        )
    }
}

export default Gallery;