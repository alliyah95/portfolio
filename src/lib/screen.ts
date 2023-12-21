export enum ScreenSize {
    XS = "xs",
    SM = "sm",
    SML = "sm-landscape",
    MD = "md",
    LG = "lg",
    XL = "xl",
    XL2 = "2xl",
}

export const getScreenWidth = (): ScreenSize => {
    const width = window.innerWidth;

    switch (true) {
        case width < 640:
            return ScreenSize.XS;
        case width < 768:
            return ScreenSize.SM;
        case width < 1024:
            return ScreenSize.MD;
        case width < 1280:
            return ScreenSize.LG;
        case width <= 1536:
            return ScreenSize.XL;
        default:
            return ScreenSize.XL2;
    }
};
