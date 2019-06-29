export default class _pageBase {

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
            $(this).css({
                animation: 'rotation 1s forwards',
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