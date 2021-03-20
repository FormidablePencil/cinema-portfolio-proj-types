import portfolioContentT from "./index";

export const pfcDefaults = {
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

export const initialPortfolioContent: portfolioContentT = {
  tabSectionTitles: pfcDefaults.tabSectionTitles,
  introParagraph: pfcDefaults.introParagraph,
  videoProjects: [pfcDefaults.videoProjects],
  tech: [pfcDefaults.tech],
  moreTech: [pfcDefaults.moreTech],
  photoshop: [pfcDefaults.photoshop],
  bio: pfcDefaults.bio,
  contacts: pfcDefaults.contacts,
};
