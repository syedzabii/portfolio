import designData from '../alternate-design.json';

export const theme = designData.portfolio.theme;
export const navigation = designData.portfolio.navigation;
export const hero = designData.portfolio.hero;
export const workExperience = designData.portfolio.workExperience;
export const skills = designData.portfolio.skills;
export const awards = designData.portfolio.awards;
export const projects = designData.portfolio.projects;
export const layout = designData.portfolio.layout;
export const components = designData.portfolio.components;
export const animations = designData.portfolio.animations;
export const responsive = designData.portfolio.responsive;

// Helper function to get CSS custom properties
export const getThemeCSS = () => {
  return {
    '--background': theme.colors.background,
    '--text-primary': theme.colors.text.primary,
    '--text-secondary': theme.colors.text.secondary,
    '--text-accent': theme.colors.text.accent,
    '--border': theme.colors.border,
  } as React.CSSProperties;
};
