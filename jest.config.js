// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "js", "json", "node"],
  verbose: true,
  testTimeout: 60000,
  name: require("./package.json").name,
  displayName: require("./package.json").name,
  setupFiles: ["./test/jest.env.ts"]
};
