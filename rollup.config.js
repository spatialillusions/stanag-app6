import string from "rollup-plugin-string";

export default [
  {
    // Generate JSON for all standards
    input: "src/index.js",
    output: [
      {
        file: "stanagapp6.js",
        format: "umd",
        name: "stanagapp6"
      },
      {
        file: "stanagapp6.esm.js",
        format: "es"
      }
    ],
    plugins: [
      string({
        // Required to be specified
        include: "**/*.tsv"
      })
    ]
  }
];
