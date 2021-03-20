import portfolioContentT from "./index";
export declare const pfcDefaults: {
    tabSectionTitles: ({
        tabTitle: string;
        subSections?: undefined;
    } | {
        tabTitle: string;
        subSections: {
            tabTitle: string;
        }[];
    })[];
    introParagraph: string;
    videoProjects: {
        url: string;
        alt: string;
    };
    tech: {
        icon: string;
        video: string;
        alt: string;
    };
    moreTech: {
        icon: string;
        alt: string;
    };
    photoshop: {
        url: string;
        alt: string;
    };
    bio: {
        title: string;
        paragraph: string;
    };
    contacts: {
        email: string;
        github: string;
        linkedin: string;
    };
};
export declare const initialPortfolioContent: portfolioContentT;
//# sourceMappingURL=portfolioContentDefaultData.d.ts.map