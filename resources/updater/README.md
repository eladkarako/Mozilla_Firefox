Downloading <code>en-GB</code> / <code>Windows 64-bit</code> of either one of those: 
<ul>
<li>nightly <code>node index__nightly.js</code> from <a href="https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-central-l10n/">https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-central-l10n/</a> for example <code>https://ftp.mozilla.org/pub/firefox/nightly/latest-mozilla-central-l10n/firefox-77.0a1.en-GB.win64.zip</code></li>
<li>developer candidate <code><code>node index__developercandidate.js</code></code> from <a href="https://ftp.mozilla.org/pub/devedition/candidates/">https://ftp.mozilla.org/pub/devedition/candidates/</a> based on <code>https://ftp.mozilla.org/pub/devedition/candidates/____THE_VERSION____/build1/win64/en-GB/</code> for example <code>https://ftp.mozilla.org/pub/devedition/candidates/77.0b2-candidates/build1/win64/en-GB/firefox-77.0b2.zip</code></li>
<li>esr (extended support) <code>node index__esr.js</code> based on <code>https://ftp.mozilla.org/pub/firefox/releases/{LATEST_VERSION}esr/win64/en-GB/Firefox%20Setup%20{LATEST_VERSION}esr.exe</code> for example <code>https://ftp.mozilla.org/pub/firefox/releases/68.8.0esr/win64/en-GB/Firefox%20Setup%2068.8.0esr.exe</code></li>
<li></li>
</ul>

Some information is dumped to the standard-error (which can be safely-ignored in a batch-file), <br/>
and the final-URL to whatever version you've choosen to download will be written to the standard-output. <br/>

The exit-code should be <code>0</code>, if it is not - it means there was an error while trying to fetch the information (maybe user is offline?) .
