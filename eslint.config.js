export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2020, // Du kannst die ECMAScript-Version nach deinen Bedürfnissen anpassen
      sourceType: "module", // Wichtig, da du ES-Module verwendest
    },
    rules: {
      "no-unused-vars": "warn", // Beispielregel, füge deine eigenen Regeln hinzu
      "no-console": "off", // Erlaubt die Verwendung von console.log
    },
  },
];
