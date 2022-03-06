/*

type Setting = {
    element: HTMLElement,
    imageUrl: string,
    backgroundImageUrl: string,
    imageHeight: number,
    imageWidth: number,
    backgroundOpacity: number
}


declare global {
    interface JQuery {
        toggleVisibility(): JQuery;
        progressBar(settings: Setting): JQuery;
    }
}




export class ProgressBar {
    
    element: HTMLElement;
    imageUrl: string;
    backgroundImageUrl: string;
    imageHeight: number;
    imageWidth: number;
    backgroundOpacity: number;

    constructor(settings: Setting) {
        this.element = settings.element;
        this.imageUrl;
        this.backgroundImageUrl = settings.backgroundImageUrl || settings.imageUrl;
        this.imageHeight = settings.imageHeight;
        this.imageWidth = settings.imageWidth;
        if (settings.backgroundOpacity || settings.backgroundOpacity === 0) {
            this.backgroundOpacity = settings.backgroundOpacity;
        } else {
            this.backgroundOpacity = .3;
        }

        $(this.element).prepend($('<div>', { class: 'progress-bar', style: 'height: ' + this.imageHeight + 'px; width: ' + this.imageHeight + 'px;' }));
        $(this.element).children('.progress-bar').prepend($('<div>', { class: 'pb-progress' }));
        $(this.element).children('.progress-bar').prepend($('<div>', { class: 'pb-background' }));
        $(this.element).find('.pb-background').prepend($('<img/>', { style: 'opacity: ' + this.backgroundOpacity + ';', class: 'background-image', src: this.backgroundImageUrl }));
        $(this.element).find('.pb-progress').prepend($('<img/>', { class: 'progress-image', src: this.imageUrl }));
    }

    

    setProgress(value: number) {
        if (value > 100) value = 100;
        if (value < 0) value = 0;
        var toShowAmount = (this.imageHeight / 100) * value;
        var toHideAmount = (this.imageHeight / 100) * (100 - value);
        $(this.element).find('.pb-progress').height(toShowAmount).css({ top: toHideAmount + 'px' });
    };

}



$.fn.progressBar = function (settings: Setting): JQuery {
    this.element = $(this);
    var newProgressBar = new ProgressBar(settings);
    return newProgressBar;

};

*/