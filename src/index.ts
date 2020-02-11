const lowerIncompatibleVersion = 51;
const compatibleVersion = 67;
const teamsChromePattern = /(Teams|MicrosoftTeams-Insiders)\/[\d\.]+ Chrome\/([\d\.]+)/;

/**
 * Checks whether the UserAgent matches a Microsoft Teams desktop clients
 * with older Chromium versions incorrectly handle cookies with the
 * SameSite=None property. We check for Teams clients with Chrome
 * versions >= `51.x` < `67.x` and provide the user with more details and
 * an alternative process for account linking.
 * 
 * This method returns true if an invalid user agent is not found. Cases
 * that are not known may fall through, this was based on testing with
 * macOS, Windows, and Linux clients for Microsoft Teams.
 */
export function incompatible(userAgent?: string | null) {
  if (!userAgent) {
    return false;
  }

  const match = userAgent.match(teamsChromePattern);
  if (!match) {
    return false;
  }

  let teamsVersion = 0;
  try {
    let majorVersion = match[2].split(".")[0];
    teamsVersion = parseInt(majorVersion);
  } catch (err) {
    return false;
  }

  return (
    teamsVersion < compatibleVersion &&
    teamsVersion >= lowerIncompatibleVersion
  )
}