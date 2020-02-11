import { incompatible } from "../src/index";

const windowsOutdated = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Teams/1.3.00.362 Chrome/66.0.3359.181 Electron/3.1.13 Safari/537.36";
const macOsOutdated = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Teams/1.2.00.28258 Chrome/66.0.3359.181 Electron/3.1.11 Safari/537.36";
const linuxInsiders = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) MicrosoftTeams-Insiders/1.2.00.32955 Chrome/69.0.3497.128 Electron/4.2.12 Safari/537.36";

const invalidUserAgent = "lkjasbz908zZK idfk man";
const emptyUserAgent = "";

describe("User Agent Tests", () => {
    it("should be incompatible for outdated Windows client", () => {
        expect(incompatible(windowsOutdated)).toBe(true);
    });

    it("should be incompatible for outdated macOS client", () => {
        expect(incompatible(macOsOutdated)).toBe(true);
    });

    it("should be compatible with the Insiders client (Linux)", () => {
        expect(incompatible(linuxInsiders)).toBe(false);
    })

    it("should not assume incompatibility with unknown UserAgents", () => {
        expect(incompatible(invalidUserAgent)).toBe(false);
    });

    it("should not assume incompatibility with empty UserAgents", () => {
        expect(incompatible(emptyUserAgent)).toBe(false);
    });
});
  