export default class _PageBase {

    public initPage(pageId: string): void {
        this.animateAll(pageId);
    }

    public clearPage(pageId: string): void {
        this.initAllDefaultAnimation(pageId);
    }

    protected animateAll(pageId: string): void {
        let animationDelay = 0;
        const elmtsToAnimate = $(`#${pageId} .animate-me`);

        elmtsToAnimate.each(function () {
            let animationName = 'rotation';
            const elmtClass = $(this).attr('class');

            if (elmtClass !== undefined) {
                if (elmtClass.includes("animation-")) {
                    const animationClassWithEndClass = elmtClass.substring(elmtClass.indexOf("animation-"), elmtClass.length);
                    const animationClass = (animationClassWithEndClass.split(' '))[0];
                    const className = animationClass.replace("animation-", '');

                    animationName = className;
                }
            }


            $(this).css({
                animation: animationName + ' 1s forwards',
                animationDelay: animationDelay + 's',
            });

            animationDelay += 0.2;
        })
    };

    protected initAllDefaultAnimation(pageId: string): void {
        const elmtsToAnimate = $(`#${pageId} .animate-me`);

        elmtsToAnimate.each(function () {
            $(this).css({
                animation: 'none',
            });
        })
    };
}