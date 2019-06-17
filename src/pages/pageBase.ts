export default class _pageBase {

    public initPage(pageId: string) {
        this.animateAll(pageId);
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

}