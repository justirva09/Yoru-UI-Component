module.exports = {
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  '**/*.{js,jsx,ts,tsx}': 'pnpm clean',
  '**/*.{js,jsx,ts,tsx,json,css,scss}': ['prettier --write'],
  '**/packages/**/*.{ts,tsx}': 'jest --bail --findRelatedTests',
};
