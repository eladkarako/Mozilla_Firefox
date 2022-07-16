<h1>Mozilla_Firefox</h1>

- portable, by batch-files pointing to relative path of profile.
- pre-configured + policy, my own custom preferences. need to keep sorted, to help with repo-diff.
- update script, nightly|ESR|developer, default to en-GB, can be adjusted to other languages.
- icons from https://github.com/black7375/Firefox-UI-Fix (glitches on non-English versions of Firefox).
- compatible with LibreWolf structure (you don't need the portable launcher wrap unless you want to..).

for the first time, run the updater, it will download the firefox program,  
if you wish to adjust what it will download (by default nightly build) - edit `get_most_updated_url.cmd`.