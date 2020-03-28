# update

This package is no longer required as the public versions of Microsoft Teams have moved to Chromium v67+, which natively supports the latest standards. This package will be placed in deprecated status.

# msteams-samesite-compatibility-validator

The Microsoft Teams desktop client is currently using Chromium version 66. This is incompatible with the `SameSite=None` cookie property that is required for continued used of third-party cookies across websites, as the default in the near future will be to enforce unspecified cookies as first-party only. This is a great bump for security, but due to the issue of the Microsoft Teams client being incompatible with these changes, certain pages might break when updated to work with the new standard. This is a simple function to check the UserAgent provided from MS Teams and determine whether it is incompatible.
