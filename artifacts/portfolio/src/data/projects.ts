export type Project = {
  /** URL-safe id, also used as the anchor on the /projects page */
  slug: string;
  title: string;
  subtitle: string;
  /** Short blurb used on the home page card */
  description: string;
  /** Longer breakdown shown on the /projects detail page */
  highlights: string[];
  tags: string[];
  githubUrl: string;
  /** Optional deployed/live version of the project */
  liveUrl?: string;
  /** When true, the project is embedded at the top of the /projects page */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'financial-data-analytics',
    title: 'Financial Data Analytics',
    subtitle: 'Interactive Streamlit Dashboard',
    description:
      'Live Streamlit dashboard for equity analysis — price history and returns, rolling volatility, drawdown and risk metrics, and correlation across a selected basket of tickers. Fully interactive in the browser.',
    highlights: [
      'Price history with moving averages and configurable lookback windows.',
      'Daily and cumulative return series, plus rolling volatility.',
      'Portfolio risk metrics — Sharpe ratio, max drawdown, and value at risk.',
      'Correlation matrix across the selected basket of tickers.',
      'Built with Python, pandas, and Plotly; deployed on Streamlit Community Cloud.',
    ],
    tags: ['Python', 'Streamlit', 'pandas', 'Plotly', 'Time Series'],
    githubUrl: 'https://github.com/VirajVShetty',
    liveUrl: 'https://financial-data-analytics-viraj.streamlit.app/',
    featured: true,
  },
  {
    slug: 'credit-risk-model',
    title: 'Credit Risk Model',
    subtitle: 'Lending Club (2.3M Loans)',
    description:
      'Built XGBoost credit risk model on 2.3M+ Lending Club loans. Applied fuzzy augmentation reject inference to incorporate 27M+ declined applications and correct accept-only sample bias. Tuned via stratified 5-fold CV → 0.709 AUC / 0.303 KS. Segment analysis across grade, DTI, and FICO bands.',
    highlights: [
      'XGBoost charge-off model trained on 2.3M+ Lending Club loans.',
      'Fuzzy augmentation reject inference over 27M+ declined applications to correct accept-only sample bias.',
      'Stratified 5-fold cross-validation tuning → 0.709 AUC / 0.303 KS.',
      'Segment-level performance analysis across grade, DTI, and FICO bands.',
    ],
    tags: ['XGBoost', 'Reject Inference', 'Python', 'Stratified CV'],
    githubUrl:
      'https://github.com/VirajVShetty/lending-club-charge-off-xgboost',
  },
  {
    slug: 'fraud-detection-model',
    title: 'Fraud Detection Model',
    subtitle: 'Wells Fargo Transactions',
    description:
      'Cleaned and prepared 1M rows of transaction data. One-hot encoded categoricals, feature engineering. Implemented XGBoost with grid + random search hyperparameter tuning → 93% accuracy.',
    highlights: [
      'Cleaned and prepared 1M rows of raw transaction data.',
      'One-hot encoding of categorical fields plus engineered behavioural features.',
      'XGBoost classifier tuned with both grid search and randomized search.',
      'Final model reached 93% accuracy on held-out transactions.',
    ],
    tags: ['XGBoost', 'Feature Engineering', 'GridSearchCV', 'Python'],
    githubUrl: 'https://github.com/Fraud-Transaction-Detection',
  },
];

export const featuredProject = projects.find((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export const GITHUB_PROFILE_URL = 'https://github.com/VirajVShetty';
