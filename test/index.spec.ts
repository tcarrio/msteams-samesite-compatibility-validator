import { incompatible } from "../src/index";

const windowsClient =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Teams/1.3.00.362 Chrome/66.0.3359.181 Electron/3.1.13 Safari/537.36";
const macOsClient =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Teams/1.2.00.28258 Chrome/66.0.3359.181 Electron/3.1.11 Safari/537.36";

const windowsInsidersOutdated =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) MicrosoftTeams-Insiders/1.3.00.362 Chrome/66.0.3359.181 Electron/3.1.13 Safari/537.36";
const macOsInsidersOutdated =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) MicrosoftTeams-Insiders/1.2.00.28258 Chrome/66.0.3359.181 Electron/3.1.11 Safari/537.36";

const windowsUpdated =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Teams/1.3.00.362 Chrome/69.0.3497.128 Electron/3.1.13 Safari/537.36";
const macOsUpdated =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Teams/1.2.00.28258 Chrome/69.0.3497.128 Electron/3.1.11 Safari/537.36";

const windowsInsidersUpdated =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) MicrosoftTeams-Insiders/1.3.00.362 Chrome/69.0.3497.128 Electron/3.1.13 Safari/537.36";
const macOsInsidersUpdated =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) MicrosoftTeams-Insiders/1.2.00.28258 Chrome/69.0.3497.128 Electron/3.1.11 Safari/537.36";
const linuxInsiders =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) MicrosoftTeams-Insiders/1.2.00.32955 Chrome/69.0.3497.128 Electron/4.2.12 Safari/537.36";

const invalidUserAgent = "lkjasbz908zZK idfk man";
const emptyUserAgent = "";
const undefinedUserAgent = undefined;
const nullUserAgent = null;

describe("User Agent Tests", () => {
  describe("Updated Clients", () => {
    it("should be incompatible for outdated Windows client", () => {
      expect(incompatible(windowsClient)).toBe(true);
    });
    it("should be incompatible for outdated macOS client", () => {
      expect(incompatible(macOsClient)).toBe(true);
    });
    it("should be incompatible for outdated Windows Insiders client", () => {
      expect(incompatible(windowsInsidersOutdated)).toBe(true);
    });
    it("should be incompatible for outdated macOS Insiders client", () => {
      expect(incompatible(macOsInsidersOutdated)).toBe(true);
    });
  });
  describe("Outdated Clients", () => {
    it("should be compatible with the Linux Insiders client", () => {
      expect(incompatible(linuxInsiders)).toBe(false);
    });

    it("should be compatible with the updated Windows client", () => {
      expect(incompatible(windowsUpdated)).toBe(false);
    });

    it("should be compatible with the updated macOS client", () => {
      expect(incompatible(macOsUpdated)).toBe(false);
    });

    it("should be compatible with the updated Windows Insiders client", () => {
      expect(incompatible(windowsInsidersUpdated)).toBe(false);
    });

    it("should be compatible with the updated macOS Insiders client", () => {
      expect(incompatible(macOsInsidersUpdated)).toBe(false);
    });
  });

  describe("Invalid/Unknown Cases", () => {
    it("should not assume incompatibility with unknown UserAgents", () => {
      expect(incompatible(invalidUserAgent)).toBe(false);
    });

    it("should not assume incompatibility with empty UserAgents", () => {
      expect(incompatible(emptyUserAgent)).toBe(false);
    });

    it("should not assume incompatibility with undefined UserAgents", () => {
      expect(incompatible(undefinedUserAgent)).toBe(false);
    })

    it("should not assume incompatibility with null UserAgents", () => {
      expect(incompatible(nullUserAgent)).toBe(false);
    })
  });
});
