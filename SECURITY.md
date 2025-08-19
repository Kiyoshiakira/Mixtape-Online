# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in Mixtape-Online, the desktop app, browser extension, or any related platform, **please do not create a public issue**.  
Report it privately via:

- Email: [shaunessy24@gmail.com]  
  *(replace with your preferred contact)*
- Or use GitHub's [private security advisory](https://github.com/Kiyoshiakira/Mixtape-Online/security/advisories/new)

We will acknowledge your report within 5 business days and aim to resolve critical vulnerabilities as quickly as possible.

## Disclosure Policy

Please allow us time to investigate and address vulnerabilities before any public disclosure.  
We appreciate responsible reporting and will credit valid reports in future release notes (unless anonymity is requested).

## Scope

This policy covers:

- The Electron desktop app (including nodeIntegration, OAuth handoff, resource management)
- The web platform and all website features (user authentication, playlist submission, watch-together)
- The browser extension (playlist management, URL scanning, community database integration)
- VR platform features (WebXR, sync, room management)
- Community features (moderation, reporting, mixtape sharing)

## Supported Versions

| Version      | Supported          |
| ------------ | ----------------- |
| main branch  | ✔️                |
| older tags   | ❌                |

We only provide security fixes for the latest `main` branch release.

## Security Considerations

- Electron apps may expose APIs via nodeIntegration. Please review PRs and extensions for security risks.
- OAuth and authentication flows should use secure handoff and never expose sensitive tokens in public logs or URLs.
- Playlist/URL submission features should avoid XSS, CSRF, and link injection vulnerabilities.
- Community moderation tools and reporting are being developed; please report any abuse or bypass methods.

## Policy Updates

This policy will be updated as Mixtape-Online evolves and new platforms/features are added.

---

Thank you for helping keep Mixtape-Online safe for everyone!
