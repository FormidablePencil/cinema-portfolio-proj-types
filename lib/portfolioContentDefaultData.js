"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialPortfolioContent = exports.pfcDefaults = void 0;
exports.pfcDefaults = {
    tabSectionTitles: [
        {
            tabTitle: "Intro",
        },
        {
            tabTitle: "TechStack",
        },
        {
            tabTitle: "Content",
            subSections: [
                { tabTitle: "Images" },
                { tabTitle: "Videos" },
                { tabTitle: "Technologies" },
            ],
        },
        {
            tabTitle: "Info & Contacts",
            subSections: [{ tabTitle: "Bio" }, { tabTitle: "Contacts" }],
        },
    ],
    introParagraph: "",
    videoProjects: { url: "", alt: "" },
    tech: { icon: "", video: "", alt: "" },
    moreTech: { icon: "", alt: "" },
    photoshop: { url: "", alt: "" },
    bio: { title: "", paragraph: "" },
    contacts: { email: "", github: "", linkedin: "" },
};
exports.initialPortfolioContent = {
    tabSectionTitles: exports.pfcDefaults.tabSectionTitles,
    introParagraph: exports.pfcDefaults.introParagraph,
    videoProjects: [exports.pfcDefaults.videoProjects],
    tech: [exports.pfcDefaults.tech],
    moreTech: [exports.pfcDefaults.moreTech],
    photoshop: [exports.pfcDefaults.photoshop],
    bio: exports.pfcDefaults.bio,
    contacts: exports.pfcDefaults.contacts,
};
//# sourceMappingURL=portfolioContentDefaultData.js.map