// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-= KEEP THIS LINE.
// https://hg.mozilla.org/mozilla-central/file/tip/mobile/android/app/mobile.js         - requires editing of '/assets/omni.ja (<-zip)/defaults/pref/mobile.js' https://developer.mozilla.org/en-US/docs/Mozilla/About_omni.ja_(formerly_omni.jar)
// https://hg.mozilla.org/releases/mozilla-release/file/tip/modules/libpref/init/all.js - best to use 'channel-prefs.js'+'mozilla.cfg' method.
//pref("browser.tabs.closeButtons, 1);                                    //with 'browser.tabs.tabClipWidth=0' will show 'x' button on all tabs
//pref("browser.tabs.tabClipWidth, 0);                                    //with 'browser.tabs.closeButtons=1' will show 'x' button on all tabs
//pref("apz.allow_zooming", true);                                        //problematic with some extensions. you need it true for Firefox for Android otherwise it won't allow zoon-gesture. BUT it will break newer versions (webextention) of ublock-origin, legacy versions still works OK.
//pref("browser.migrated-sync-button", true);                             //this is a flag that is set after migration to newer version
//pref("browser.newtabpage.activity-stream.migrationExpired", true);      //this is a flag that is set after migration to newer version
//pref("browser.urlbar.matchBuckets", "general:5, suggestion:Infinity");  //show results from 'history' and 'bookmarks' first. dynamic search-results last.
//pref("dom.meta-viewport.enabled", false);                               //do not set true. when 'true'===>BUG: v45.0 / ublock origin 1.6.10 will a little white-square instead of the addon control panel.
//pref("dom.storage.enabled", false);                                     //this will disable HTML5 localStorage!
//pref("dom.w3c_pointer_events.enabled", true);                           //try it
//pref("extensions.autoDisableScopes", 0);
//pref("extensions.enabledScopes", 15);
//pref("extensions.pendingOperations", false);                            //this is a flag that is set after some extension has done a long-persisting action. should not be used since it can break extension-action-results (such as ones that should be completed after browser-restart).
//pref("extensions.webextensions.base-content-security-policy", "default-src 'none'; script-src 'none'; object-src 'none';");
//pref("extensions.webextensions.base-content-security-policy.v3", "default-src 'none'; script-src 'none'; object-src 'none';");
//pref("gecko.handlerService.migrated", true);                            //this is a flag that is set after migration to newer version
//pref("gfx.font_rendering.cleartype_params.rendering_mode", 2);
//pref("gfx.font_rendering.fontconfig.fontlist.enabled", false);          //if firefox version is less then 48 it will crash...
//pref("layout.css.touch_action.enabled", true);                          //try it
//pref("media.autoplay.blocking_policy", 2); //autoplay - block autoplay unless element is clicked, and apply the policy to all elements including muted ones.
//pref("media.autoplay.enabled", false);                    //disable auto play of audio/video
//pref("media.autoplay.enabled.user-gestures-needed", false);
//pref("media.block-autoplay-until-in-foreground", true);   //limit auto play of audio/video, avoiding start-playing in background tab (but can start and leave playing manually in background-tabs).
//pref("media.block-play-until-visible", true);             //limit auto play of audio/video, avoiding start-playing in background tab (but can start and leave playing manually in background-tabs).
//pref("media.hardware-video-decoding.failed", false);                    //this is a flag that is set after migration to newer version
//pref("network.cookie.prefsMigrated", true);                             //this is a flag that is set after migration to newer version
//pref("network.http.referer.XOriginPolicy", 0);         // cross-origin referer header : default, might be worth changing to 2 to stop sending them completely
//pref("network.http.referer.XOriginTrimmingPolicy", 2); // cross-origin referer header : trim referer to only send scheme, host and port
//pref("pdfjs.migrationVersion", 2);                                      //this is a flag that is set after migration to newer version
//pref("plugins.click_to_play", true);
//pref("pref.browser.language.disable_button.down", false);                   //not working as expected actually disables the UI when presented
//pref("pref.browser.language.disable_button.remove", false);                 //not working as expected actually disables the UI when presented
//pref("pref.general.disable_button.default_browser", false);                 //not working as expected actually disables the UI when presented
//pref("pref.privacy.disable_button.change_blocklist", false);                //not working as expected actually disables the UI when presented
//pref("pref.privacy.disable_button.tracking_protection_exceptions", false);  //not working as expected actually disables the UI when presented
//pref("security.disable_button.openCertManager", false);             //not working as expected actually disables the UI when presented
//pref("security.disable_button.openDeviceManager", false);           //not working as expected actually disables the UI when presented
//pref("services.sync.migrated", true);                                   //this is a flag that is set after migration to newer version
pref("accelerometer.enabled", false);
pref("accessibility.blockautorefresh", true);
pref("accessibility.delay_plugin_time", 10000);
pref("accessibility.delay_plugins", false);
pref("accessibility.force_disabled", 1);
pref("accessibility.typeaheadfind", false);
pref("accessibility.typeaheadfind.flashBar", 0);
pref("alerts.showFavicons", true);
pref("app.normandy.api_url", "https://0.0.0.0/");    // opt-out of normandy and studies
pref("app.normandy.enabled", false);                 // opt-out of normandy and studies
pref("app.normandy.first_run", false);
pref("app.normandy.run_interval_seconds", 86400);
pref("app.normandy.startup_delay_seconds", 300);
pref("app.normandy.user_id", "");
pref("app.shield.optoutstudies.enabled", false);
pref("app.shield.optoutstudies.enabled", false);     // opt-out of normandy and studies
pref("app.update.android.enabled", false);
pref("app.update.android.url", "https://0.0.0.0/");
pref("app.update.auto", false);
pref("app.update.autodownload", "never");
pref("app.update.background.scheduling.enabled", false);
pref("app.update.backgroundErrors", 0);
pref("app.update.badgeWaitTime", -1);
pref("app.update.checkInstallTime", false);
pref("app.update.doorhanger", false);
pref("app.update.download.attempts", 0);
pref("app.update.enabled", false);
pref("app.update.ios.url", "https://0.0.0.0/");
pref("app.update.mode", 0);
pref("app.update.promptWaitTime", -1);
pref("app.update.service.enabled", false);
pref("app.update.silent", true);                    //app.update.silent:true + app.update.url:"https://0.0.0.0/"means no annoying messages.
pref("app.update.staging.enabled", false);
pref("app.update.url", "https://0.0.0.0/");
pref("app.update.url.android", "https://0.0.0.0/");
pref("app.update.url.ios", "https://0.0.0.0/");
pref("app.update.url.manual", "https://0.0.0.0/");
pref("apz.autoscroll.enabled", false);
pref("apz.frame_delay.enabled", false);
pref("apz.record_checkerboarding", false);
pref("apz.relative-update.enabled", false);
pref("apz.scale_repaint_delay_ms", 50);
pref("apz.test.logging_enabled", false);
pref("beacon.enabled", false);
pref("bidi.browser.ui", true);
pref("breakpad.reportURL", "https://0.0.0.0/");
pref("browser.aboutConfig.showWarning", false);
pref("browser.aboutHomeSnippets.updateUrl", "https://0.0.0.0/");
pref("browser.allTabs.previews", true);
pref("browser.backspace_action", 2);
pref("browser.blink_allowed", false);
pref("browser.bookmarks.addedImportButton", true);
pref("browser.bookmarks.max_backups", 1);
pref("browser.bookmarks.restore_default_bookmarks", false);
pref("browser.bookmarks.showMobileBookmarks", true);
pref("browser.cache.disk.filesystem_reported", 1);
pref("browser.cache.disk.smart_size.first_run", false);
pref("browser.cache.frecency_experiment", -1);
pref("browser.cache.memory.enable", true);
pref("browser.cache.offline.enable", true);
pref("browser.cache.use_new_backend", 1);
pref("browser.casting.enabled", false);
pref("browser.chrome.errorReporter.enabled", false);
pref("browser.chrome.errorReporter.submitUrl", "https://0.0.0.0/");
pref("browser.chrome.toolbar_tips", false);
pref("browser.compactmode.show", true);
pref("browser.contentblocking.allowlist.annotations.enabled", false);
pref("browser.contentblocking.allowlist.storage.enabled", false);
pref("browser.contentblocking.category", "custom");
pref("browser.contentblocking.control-center.ui.showAllowedLabels", false);
pref("browser.contentblocking.control-center.ui.showBlockedLabels", false);
pref("browser.contentblocking.cryptomining.preferences.ui.enabled", false);
pref("browser.contentblocking.database.enabled", false);
pref("browser.contentblocking.enabled", false);
pref("browser.contentblocking.features.standard", "");
pref("browser.contentblocking.features.strict", "");
pref("browser.contentblocking.fingerprinting.preferences.ui.enabled", false);
pref("browser.contentblocking.introCount", 20);                           //prevent notice of content-blocking by marking that the maximum-amount of notice-msg.s reached already.
pref("browser.contentblocking.rejecttrackers.control-center.ui.enabled", false);
pref("browser.contentblocking.rejecttrackers.reportBreakage.enabled", false);
pref("browser.contentblocking.report.hide_vpn_banner", true);
pref("browser.contentblocking.report.lockwise.enabled", false);  //remove warnings from 'about:*' pages
pref("browser.contentblocking.report.monitor.enabled", false);
pref("browser.contentblocking.report.show_mobile_app", false);
pref("browser.contentblocking.report.vpn.enabled", false);
pref("browser.contentblocking.reportBreakage.enabled", false);
pref("browser.contentblocking.reportBreakage.url", "https://0.0.0.0/");
pref("browser.contentblocking.trackingprotection.control-center.ui.enabled", false);
pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
pref("browser.crashReports.unsubmittedCheck.enabled", false);
pref("browser.ctrlTab.previews", true);
pref("browser.discovery.containers.enabled", false);     // disable personalized extension recommendations
pref("browser.discovery.enabled", false);                // disable personalized extension recommendations
pref("browser.discovery.sites", "");                     // disable personalized extension recommendations
pref("browser.display.blankWindow", false);
pref("browser.display.history.maxresults", 50);
pref("browser.display.use_system_colors", false);
pref("browser.dom.window.dump.enabled", false);
pref("browser.download.importedFromSqlite", true);
pref("browser.download.manager.addToRecentDocs", false);
pref("browser.download.manager.closeWhenDone", true);
pref("browser.download.panel.shown", true);
pref("browser.eme.ui.enabled", true);
pref("browser.enable_automatic_image_resizing", false);
pref("browser.enable_click_image_resizing", false);
pref("browser.fixup.alternate.enabled", false);
pref("browser.fixup.alternate.enabled", false);               //disable prefetch / speculative connections and domain guessing
pref("browser.fixup.hide_user_pass", false);
pref("browser.formfill.enable", true);
pref("browser.fullscreen.animate", false);
pref("browser.fullscreen.autohide", false);
pref("browser.history.grouping", "day");
pref("browser.history.showSessions", true);
pref("browser.laterrun.bookkeeping.sessionCount", 1);
pref("browser.laterrun.enabled", true);
pref("browser.library.activity-stream.enabled", false);
pref("browser.messaging-system.whatsNewPanel.enabled", false);
pref("browser.meta_refresh_when_inactive.disabled", true);
pref("browser.mirroring.enabled", false);
pref("browser.newtab.preload", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
pref("browser.newtabpage.activity-stream.default.sites", "");
pref("browser.newtabpage.activity-stream.disableSnippets", true);
pref("browser.newtabpage.activity-stream.discoverystream.config", "{\"enabled\":false,\"show_spocs\":false,\"layout_endpoint\":\"https://0.0.0.0/\"}");
pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "{\"enabled\":false,\"hidden\":true,\"read_more_endpoint\":\"https://0.0.0.0/\",\"stories_endpoint\":\"https://0.0.0.0/\",\"stories_referrer\":\"https://0.0.0.0\",\"topics_endpoint\":\"https://0.0.0.0/\",\"model_keys\":[],\"show_spocs\":false,\"personalized\":false,\"version\":2}");
pref("browser.newtabpage.activity-stream.feeds.snippets", false);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
pref("browser.newtabpage.activity-stream.feeds.topsites", false);
pref("browser.newtabpage.activity-stream.filterAdult", false);
pref("browser.newtabpage.activity-stream.impressionId", "");
pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false); //about:home Search Bar
pref("browser.newtabpage.activity-stream.pocketCta", "");
pref("browser.newtabpage.activity-stream.prerender", false);
pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
pref("browser.newtabpage.activity-stream.showSearch", false);
pref("browser.newtabpage.activity-stream.showSponsored", false);
pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
pref("browser.newtabpage.activity-stream.telemetry", false);
pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "https://0.0.0.0/");
pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
pref("browser.newtabpage.directory.ping", "data:text/plain, ");
pref("browser.newtabpage.directory.source", "data:text/plain, ");
pref("browser.newtabpage.enabled", false);
pref("browser.newtabpage.enhanced", false);
pref("browser.newtabpage.introShown", false);
pref("browser.newtabpage.storageVersion", 1);
pref("browser.onboarding.notification.prompt-count", 1);
pref("browser.onboarding.seen-tourset-version", 2);
pref("browser.onboarding.tour-type", "update");
pref("browser.onboarding.tour.onboarding-tour-sync.completed", true);
pref("browser.pagethumbnails.capturing_disabled", true);
pref("browser.ping-centre.telemetry", false);
pref("browser.places.importBookmarksHTML", false);
pref("browser.places.smartBookmarksVersion", 2);
pref("browser.places.speculativeConnect.enabled", false);     //disable prefetch / speculative connections and domain guessing
pref("browser.polaris.enabled", false);
pref("browser.preferences.advanced.selectedTabIndex", 0);
pref("browser.preferences.defaultPerformanceSettings.enabled", false);
pref("browser.preferences.moreFromMozilla", false);
pref("browser.preferences.useOldOrganization", true);
pref("browser.promo.focus.enabled", false);
pref("browser.proton.enabled", false);     //true is default
pref("browser.proton.places-tooltip.enabled", false);
pref("browser.proton.toolbar.version", 0); //3 is default
pref("browser.reader.detectedFirstArticle", false);
pref("browser.readinglist.enabled", false);
pref("browser.rights.3.shown", true);
pref("browser.safebrowsing.allowOverride", true);
pref("browser.safebrowsing.blockedURIs.enabled", false);
pref("browser.safebrowsing.debug", false);              
pref("browser.safebrowsing.downloads.enabled", false);
pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.url", "https://0.0.0.0/");
pref("browser.safebrowsing.enabled", false);
pref("browser.safebrowsing.gethashURL", "https://0.0.0.0/");
pref("browser.safebrowsing.malware.enabled", false);
pref("browser.safebrowsing.malware.reportURL", "https://0.0.0.0/");
pref("browser.safebrowsing.passwords.enabled", false);
pref("browser.safebrowsing.passwords.remote.enabled", false);
pref("browser.safebrowsing.passwords.remote.url", "https://0.0.0.0/");
pref("browser.safebrowsing.passwords.url", "https://0.0.0.0/");
pref("browser.safebrowsing.phishing.enabled", false);
pref("browser.safebrowsing.provider.google4.gethashURL", "https://0.0.0.0/");
pref("browser.safebrowsing.provider.google4.lastupdatetime", "");
pref("browser.safebrowsing.provider.google4.nextupdatetime", "");
pref("browser.safebrowsing.provider.google4.reportURL", "https://0.0.0.0/");
pref("browser.safebrowsing.provider.google4.updateURL", "https://0.0.0.0/");
pref("browser.safebrowsing.provider.google.appRepURL", "https://0.0.0.0/");
pref("browser.safebrowsing.provider.google.gethashURL", "https://0.0.0.0/");
pref("browser.safebrowsing.provider.google.lastupdatetime", "");
pref("browser.safebrowsing.provider.google.nextupdatetime", "");
pref("browser.safebrowsing.provider.google.reportURL", "https://0.0.0.0/");
pref("browser.safebrowsing.provider.google.updateURL", "https://0.0.0.0/");
pref("browser.safebrowsing.provider.mozilla.gethashURL", "https://0.0.0.0/");
pref("browser.safebrowsing.provider.mozilla.lastupdatetime", "");
pref("browser.safebrowsing.provider.mozilla.nextupdatetime", "");
pref("browser.safebrowsing.provider.mozilla.updateURL", "");
pref("browser.safebrowsing.reportErrorURL", "https://0.0.0.0/");
pref("browser.safebrowsing.reportGenericURL", "https://0.0.0.0/");
pref("browser.safebrowsing.reportMalwareErrorURL", "https://0.0.0.0/");
pref("browser.safebrowsing.reportMalwareMistakeURL", "https://0.0.0.0/");
pref("browser.safebrowsing.reportMalwareURL", "https://0.0.0.0/");
pref("browser.safebrowsing.reportPhishMistakeURL", "https://0.0.0.0/");
pref("browser.safebrowsing.reportPhishURL", "https://0.0.0.0/");
pref("browser.safebrowsing.reportURL", "https://0.0.0.0/");
pref("browser.safebrowsing.updateURL", "https://0.0.0.0/");
pref("browser.search.defaulturl", "https://www.google.co.il/search?num=50&gbv=1&q=%s%20-site%3Aw3schools.com");
pref("browser.search.geoip.timeout", 1);
pref("browser.search.geoip.url", "");
pref("browser.search.geoSpecificDefaults", false);
pref("browser.search.geoSpecificDefaults.url", "");
pref("browser.search.hiddenOneOffs", "Amazon.co.uk,Bing,Chambers (UK),DuckDuckGo,eBay,Google,Twitter,Wikipedia (en)");
pref("browser.search.reset.status", "silent");
pref("browser.search.suggest.enabled", false);
pref("browser.search.suggest.prompted", false);
pref("browser.search.update", false);
pref("browser.search.useDBForOrder", true);
pref("browser.selfsupport.enabled", false);
pref("browser.selfsupport.url", "https://0.0.0.0/");
pref("browser.send_pings", false);
pref("browser.send_pings.max_per_link", 0);
pref("browser.send_pings.require_same_host", true);
pref("browser.sessionstore.debug_logging", false);
pref("browser.sessionstore.max_resumed_crashes", 0);
pref("browser.sessionstore.max_tabs_undo", 3);
pref("browser.sessionstore.max_windows_undo", 2);
pref("browser.sessionstore.privacy_level", 1);
pref("browser.sessionstore.resume_from_crash", false);
pref("browser.shell.checkDefaultBrowser", false);
pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", true);
pref("browser.showQuitWarning", false);
pref("browser.slowStartup.averageTime", 0);
pref("browser.slowStartup.notificationDisabled", true);
pref("browser.slowStartup.samples", 0);
pref("browser.snippets.enabled", false);
pref("browser.snippets.firstrunHomepage.enabled", false);
pref("browser.snippets.syncPromo.enabled", false);
pref("browser.snippets.updateUrl", "https://0.0.0.0/");
pref("browser.startup.homepage", "https://www.google.co.il");
pref("browser.startup.homepage_override.mstone", "ignore"); //first run
pref("browser.tabs.animate", false);
pref("browser.tabs.closeWindowWithLastTab", false);
pref("browser.tabs.crashReporting.sendReport", false);
pref("browser.tabs.drawInTitlebar", false); // false means write menu normally.
pref("browser.tabs.inTitlebar", 0);         // 
pref("browser.tabs.remote.autostart", true);
pref("browser.tabs.remote.autostart.2", true);
pref("browser.tabs.remote.force-disable", false);
pref("browser.tabs.remote.force-enable", true);
pref("browser.tabs.remote.separateFileUriProcess", true);
pref("browser.tabs.tabMinWidth", 200);
pref("browser.tabs.warnOnClose", false);
pref("browser.tabs.warnOnCloseOtherTabs", false);
pref("browser.tabs.warnOnOpen", false);
pref("browser.taskbar.previews.enable", true);
pref("browser.toolbarbuttons.introduced.pocket-button", false);
pref("browser.topsites.useRemoteSetting", false); // hide sponsored shortcuts button
pref("browser.trackingprotection.gethashURL", "https://0.0.0.0/");
pref("browser.trackingprotection.getupdateURL", "https://0.0.0.0/");
pref("browser.trackingprotection.updateURL", "https://0.0.0.0/");
pref("browser.turbo.enabled", true);
pref("browser.ui.linkify.phone", false);
pref("browser.ui.zoom.force-user-scalable", true);
pref("browser.uidensity", 1);
pref("browser.uitour.enabled", false);
pref("browser.uitour.url", "");
pref("browser.urlbar.autocomplete.enabled", true);
pref("browser.urlbar.autoFill", true);
pref("browser.urlbar.clickSelectsAll", false);
pref("browser.urlbar.daysBeforeHidingSuggestionsPrompt", 3);
pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0);   //disable prefetch / speculative connections and domain guessing
pref("browser.urlbar.doubleClickSelectsAll", false);
pref("browser.urlbar.eventTelemetry.enabled", false);
pref("browser.urlbar.filter.javascript", true);
pref("browser.urlbar.matchBuckets", "suggestion:8, general:10");          //show results from 'history' and 'bookmarks' last.
pref("browser.urlbar.maxHistoricalSearchSuggestions", 0);                 //hide results from 'history' (bookmarks still shown).
pref("browser.urlbar.maxRichResults", 20);
pref("browser.urlbar.placeholderName", "Google");
pref("browser.urlbar.speculativeConnect.enabled", false);     //disable prefetch / speculative connections and domain guessing
pref("browser.urlbar.suggest.calculator", true); //calculator at urlbar
pref("browser.urlbar.timesBeforeHidingSuggestionsHint", 0);
pref("browser.urlbar.trimURLs", false);
pref("browser.urlbar.unitConversion.enabled", true); //unit convertor at urlbar
pref("browser.urlbar.update1.interventions", false);
pref("browser.urlbar.update1.searchTips", false);
pref("browser.urlbar.usepreloadedtopurls.enabled", true);
pref("browser.vpn_promo.enabled", false);
pref("browser.warnOnQuit", false);
pref("browser.zoom.full", true);
pref("browser.zoom.siteSpecific", true);
pref("browser.zoom.updateBackgroundTabs", false);
pref("camera.control.face_detection.enabled", false);
pref("canvas.capturestream.enabled", false);
pref("captivedetect.canonicalURL", "https://0.0.0.0/");
pref("clipboard.autocopy", false);
pref("clipboard.plainTextOnly", true);
pref("config.trim_on_minimize", true);
pref("config.use_system_prefs", true);
pref("config.use_system_prefs.accessibility", true);
pref("consoleservice.logcat", false);
pref("crashreporter.enabled", false);
pref("crashreporter.include_context_heap", false);
pref("datareporting.healthreport.documentServerURI", "https://0.0.0.0/");
pref("datareporting.healthreport.infoURL", "https://0.0.0.0/");
pref("datareporting.healthreport.service.enabled", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled.v2", false);
pref("datareporting.sessions.current.activeTicks", 1);
pref("datareporting.sessions.current.clean", true);
pref("datareporting.sessions.current.main", 0);
pref("datareporting.sessions.currentIndex", 0);
pref("default-browser-agent.enabled", false); // disable windows specific telemetry
pref("device.sensors.enabled", false);
pref("devtools.cache.disabled", true);
pref("devtools.chrome.enabled", true);                         //https://developer.mozilla.org/en-US/docs/Tools/about:debugging#Enabling_add-on_debugging
pref("devtools.command-button-screenshot.enabled", true);
pref("devtools.debugger.remote-enabled", true);                //https://developer.mozilla.org/en-US/docs/Tools/about:debugging#Enabling_add-on_debugging
pref("devtools.dom.enabled", true);
pref("devtools.onboarding.telemetry.logged", false);
pref("devtools.remote.usb.enabled", false);
pref("devtools.remote.wifi.enabled", false);
pref("devtools.theme", "light");
pref("devtools.toolbox.host", "window");
pref("devtools.toolbox.tabsOrder", "inspector,jsdebugger,styleeditor,performance,memory,netmonitor,storage,dom,accessibility,webconsole");
pref("devtools.webconsole.filter.csserror", false);
pref("devtools.webconsole.filter.net", true);
pref("devtools.webconsole.filter.networkinfo", true);
pref("devtools.webconsole.filter.netxhr", true);
pref("devtools.webconsole.filter.servererror", true);
pref("devtools.webconsole.filter.serverinfo", true);
pref("devtools.webconsole.filter.serverlog", true);
pref("devtools.webconsole.filter.serverwarn", true);
pref("devtools.webconsole.filter.sharedworkers", true);
pref("devtools.webconsole.filter.windowlessworkers", true);
pref("devtools.webconsole.ui.filterbar", true);
pref("devtools.webide.autoinstallADBHelper", false);
pref("devtools.webide.autoinstallFxdtAdapters", false);
pref("devtools.webide.enabled", false);
pref("distribution.iniFile.exists.value", false);
pref("dom.allow_cut_copy", false);
pref("dom.battery.enabled", false);
pref("dom.disable_window_open_feature.close", true);
pref("dom.disable_window_open_feature.directories", true);
pref("dom.disable_window_open_feature.menubar", true);
pref("dom.disable_window_open_feature.minimizable", true);
pref("dom.disable_window_open_feature.personalbar", true);
pref("dom.disable_window_open_feature.scrollbars", true);
pref("dom.disable_window_open_feature.titlebar", true);
pref("dom.disable_window_open_feature.toolbar", true);
pref("dom.enable_performance", false);
pref("dom.enable_performance_navigation_timing", false);
pref("dom.enable_performance_observer", false);
pref("dom.enable_resource_timing", false);
pref("dom.enable_user_timing", false);
pref("dom.event.clipboardevents.enabled", false);
pref("dom.event.coalesce_mouse_move", true);
pref("dom.event.highrestimestamp.enabled", false);
pref("dom.event.touch.coalescing.enabled", true);
pref("dom.experimental_forms", true);
pref("dom.flyweb.enabled", false);
pref("dom.forms.autocomplete.formautofill", true);
pref("dom.forms.selectSearch", true);
pref("dom.gamepad.enabled", false);
pref("dom.global_stop_script", true);
pref("dom.idle-observers-api.enabled", false);
pref("dom.imagecapture.enabled", false);
pref("dom.indexedDB.enabled", true);
pref("dom.indexedDB.experimental", true);
pref("dom.indexedDB.logging.enabled", true);
pref("dom.indexedDB.storageOption.enabled", true);
pref("dom.IntersectionObserver.enabled", false);
pref("dom.ipc.plugins.asyncdrawing.enabled", true);
pref("dom.ipc.plugins.enabled", true);
pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
pref("dom.ipc.plugins.forcedirect.enabled", true);
pref("dom.ipc.plugins.reportCrashURL", false);
pref("dom.ipc.processCount", 6);
pref("dom.max_chrome_script_run_time", 120);
pref("dom.max_script_run_time", 60);
pref("dom.media.autoplay.autoplay-policy-api", true); //autoplay status on DOM, to help page's code be aware.
pref("dom.mozPay.enabled", false);
pref("dom.netinfo.enabled", false);
pref("dom.popup_maximum", 1);
pref("dom.push.userAgentID", "");
pref("dom.security.unexpected_system_load_telemetry_enabled", false);
pref("dom.telephony.enabled", false);
pref("dom.vibrator.enabled", false);
pref("dom.vr.enabled", false);
pref("dom.vr.oculus050.enabled", false);
pref("dom.vr.oculus.enabled", false);
pref("dom.vr.openvr.enabled", false);
pref("dom.vr.osvr.enabled", false);
pref("dom.vr.service.enabled", false);
pref("dom.vr.test.enabled", false);
pref("dom.w3c_touch_events.enabled", 1);    // 0 - disabled, 1 - enabled, 2 - autodetect(Windows and GTK3 only)
pref("dom.webaudio.enabled", false);
pref("dom.webcomponents.customelements.enabled", true);
pref("dom.webcomponents.shadowdom.enabled", true);
pref("dom.webnotifications.enabled", false);
pref("dump.emit", false);
pref("editor.background_color", "#F0F0F0");
pref("editor.singleLine.pasteNewlines", 0);
pref("experiments.activeExperiment", false);
pref("experiments.enabled", false);
pref("experiments.manifest.uri", "https://0.0.0.0/");
pref("experiments.supported", false);
pref("extensions.alwaysUnpack", true);
pref("extensions.autoupdate.enabled", false);
pref("extensions.blocklist.enabled", false);
pref("extensions.blocklist.url", "https://blocklist.addons.mozilla.org/blocklist/3/%APP_ID%/%APP_VERSION%/");
pref("extensions.checkCompatibility", false);
pref("extensions.checkCompatibility.45.0", false);
pref("extensions.checkUpdateSecurity", false);
pref("extensions.disabledObsolete", false);
pref("extensions.followonsearch.cohortSample", "0.000288");
pref("extensions.formautofill.creditCards.available", false);
pref("extensions.formautofill.creditCards.enabled", false);
pref("extensions.formautofill.creditCards.used", 0);
pref("extensions.getAddons.cache.enabled", false);
pref("extensions.hideInstallButton", false);
pref("extensions.hideUpdateButton", false);
pref("extensions.hotfix.cert.checkAttributes", false);
pref("extensions.langpacks.signatures.required", false);
pref("extensions.legacy.enabled", true);
pref("extensions.pocket.api", "0.0.0.0");
pref("extensions.pocket.enabled", false);
pref("extensions.pocket.oAuthConsumerKey", "");
pref("extensions.pocket.site", "0.0.0.0");
pref("extensions.screenshots.disabled", true);
pref("extensions.screenshots.system-disabled", true);
pref("extensions.sidebar-button.shown", true);
pref("extensions.spellcheck.inline.max-misspellings", 100);
pref("extensions.strictCompatibility", false);
pref("extensions.systemAddon.update.enabled", false);
pref("extensions.systemAddon.update.url", "https://0.0.0.0/");
pref("extensions.ui.dictionary.hidden", false);
pref("extensions.ui.experiment.hidden", false);
pref("extensions.ui.lastCategory", "addons://list/extension");
pref("extensions.ui.locale.hidden", false);
pref("extensions.update.autoUpdate", false);
pref("extensions.update.autoUpdateDefault", false);
pref("extensions.update.autoUpdateEnabled", false);
pref("extensions.update.background.url", "https://0.0.0.0/");
pref("extensions.update.enabled", false);
pref("extensions.update.url", "https://0.0.0.0/");
pref("extensions.webcompat-reporter.enabled", false);
pref("extensions.webcompat-reporter.newIssueEndpoint", "https://0.0.0.0/");
pref("extensions.webextensions.keepStorageOnUninstall", false);
pref("extensions.webextensions.keepUuidOnUninstall", false);
pref("extensions.webservice.discoverURL", "https://0.0.0.0/");
pref("fission.autostart", true); //project fission is site memory isolation everywhere (iframes).
pref("full-screen-api.enabled", true);
pref("full-screen-api.warning.delay", 0);
pref("full-screen-api.warning.timeout", 0);
pref("general.autoScroll", false);
pref("general.smoothScroll", false);
pref("general.smoothScroll.other", false);
pref("general.smoothScroll.pages", false);
pref("general.useragent.compatMode.firefox", false);
pref("general.warnOnAboutConfig", false);
pref("geo.enabled", false);
pref("geo.wifi.logging.enabled", false);
pref("geo.wifi.uri", "https://0.0.0.0/");
pref("geo.wifi.xhr.timeout", 1);
pref("gfx.android.rgb16.force", false);
pref("gfx.color_management.enabled", false);
pref("gfx.color_management.enablev4", false);
pref("gfx.color_management.mode", 0);
pref("gfx.crash-guard.d3d11layers.feature-d2d", false);
pref("gfx.crash-guard.d3d11layers.feature-d3d11", false);
pref("gfx.crash-guard.status.d3d9video", 2);
pref("gfx.crash-guard.status.d3d11layers", 2);
pref("gfx.direct2d.disabled", true);
pref("gfx.downloadable_fonts.woff2.enabled", false);
pref("gfx.font_rendering.directwrite.force-enabled", true);
pref("gfx.font_rendering.graphite.enabled", false);
pref("gfx.font_rendering.opentype_svg.enabled", false);
pref("gfx.layerscope.enabled", false);
pref("gfx.offscreencanvas.enabled", true);
pref("gfx.SurfaceTexture.detach.enabled", true);
pref("gfx.use_text_smoothing_setting", false);
pref("gfx.webrender.blob-images", true);
pref("gfx.webrender.svg-images", true);                                   //allow SVG (but not as font).
pref("home.sync.updateMode", 1);
pref("html5.offmainthread", true);
pref("identity.enabled", false);
pref("identity.fxaccounts.enabled", false);  //disable sync, also disable its controls and menu
pref("identity.mobilepromo.android", "");
pref("identity.mobilepromo.ios", "");
pref("image.decode-immediately.enabled", true);
pref("image.downscale-during-decode.enabled", false);
pref("image.high_quality_downscaling.enabled", false);
pref("image.multithreaded_decoding.enabled", true);
pref("image.multithreaded_decoding.limit", 2);
pref("image.single-color-optimization.enabled", false);
pref("image.svg.blob-image", true);                                   //allow SVG (but not as font).
pref("images.dither", "false");
pref("intl.accept_languages", "en-gb, en, he");
pref("intl.charset.fallback.override", "windows-1255");
pref("intl.locale.matchOS", false);
pref("javascript.options.asmjs", false);
pref("javascript.options.asyncstack", false);
pref("javascript.options.baselinejit", true);
pref("javascript.options.gc_on_memory_pressure", false);
pref("javascript.options.ion", false);
pref("javascript.options.ion.offthread_compilation", false);
pref("javascript.options.parallel_parsing", true);
pref("javascript.options.strict", true);
pref("javascript.options.wasm", false);
pref("javascript.options.wasm_baselinejit", false);
pref("javascript.options.wasm_ionjit", false);
pref("keyword.URL", "https://www.google.co.il/search?num=50&gbv=1&q=%s%20-site%3Aw3schools.com");
pref("layers.acceleration.disabled", false);
pref("layers.acceleration.force-enabled", true);
pref("layers.async-pan-zoom.enabled", false);                             //do not set true. when 'true'===>BUG: v45.0 will show white-page with no content!
pref("layers.async-video.enabled", true);
pref("layers.dump", false);
pref("layers.enable-tiles", true);
pref("layers.low-precision-buffer", true);
pref("layers.low-precision-opacity", "1.0");
pref("layers.low-precision-resolution", "0.25");
pref("layers.max-active", 10);
pref("layers.mlgpu.enabled", true);                                       //BUG: leave 'true'. let Firefox try sanity test. if 'prefs.js' will have 'layers.mlgpu.sanity-test-failed'-true, it means it can't use GPU.    Don't include 'layers.mlgpu.sanity-test-failed' !
pref("layers.offmainthreadcomposition.enabled", true);
pref("layers.prefer-d3d9", true);
pref("layers.progressive-paint", true);
pref("layers.tile-height", 96);
pref("layers.tile-width", 96);
pref("layers.tiles.adjust", true);
pref("layers.tiles.edge-padding", true);
pref("layout.accessiblecaret.hapticfeedback", true);
pref("layout.css.backdrop-filter.enabled", true);  //css blur
pref("layout.css.color-mix.enabled", true);
pref("layout.css.devPixelsPerPx", "1.6");
pref("layout.css.osx-font-smoothing.enabled", false);
pref("layout.css.overscroll-behavior.enabled", false);
pref("layout.css.prefixes.webkit", true);
pref("layout.css.report_errors", false);
pref("layout.css.scroll-behavior.enabled", false);
pref("layout.css.visited_links_enabled", false);
pref("layout.reflow.synthMouseMove", false);
pref("layout.spellcheckDefault", 2);            //0 none, 1 multi-line only (textarea), 2 multi and single line (input). must have spellcheck="true"attribute as well. - next you should download spellcheck dic.s from:  https://addons.mozilla.org/en-GB/firefox/language-tools/ 
pref("lightweightThemes.selectedThemeID", "");
pref("lightweightThemes.update.enabled", false);
pref("mathml.disabled", true);
pref("media.android-media-codec.enabled", true);
pref("media.android-media-codec.preferred", true);
pref("media.autoplay.allow-muted", false);            //in the past autoplay with muted audio was fine. false mean never autoplay, even w/o audio.
pref("media.autoplay.block-event.enabled", true);     //reject .play() promise (sends a DOMException), helps the page be aware of autoplay not available.
pref("media.autoplay.block-webaudio", true);          //web-audio API is different from AUDIO/VIDEO elements. make sure to block it as well.
pref("media.autoplay.default", 5);                    //autoplay default: block audio and video.
pref("media.benchmark.vp9.fps", 108);
pref("media.benchmark.vp9.versioncheck", 2);
pref("media.cache_size", 4096);
pref("media.eme.apiVisible", false);
pref("media.eme.enabled", false); // master switch for drm content
pref("media.flac.enabled", true);
pref("media.getusermedia.aec_enabled", false);
pref("media.getusermedia.agc_enabled", false);
pref("media.getusermedia.audiocapture.enabled", false);
pref("media.getusermedia.browser.enabled", false);
pref("media.getusermedia.noise_enabled", false);
pref("media.getusermedia.screensharing.allow_on_old_platforms", false);
pref("media.getusermedia.screensharing.allowed_domains", "");
pref("media.getusermedia.screensharing.enabled", false);
pref("media.gmp-eme-adobe.autoupdate", false);
pref("media.gmp-eme-adobe.enabled", false);
pref("media.gmp-eme-adobe.visible", false);
pref("media.gmp-gmpopenh264.abi", "x86_64-msvc-x64");
pref("media.gmp-gmpopenh264.autoupdate", false);
pref("media.gmp-gmpopenh264.enabled", false);
pref("media.gmp-manager.url", "data:text/plain, "); // prevent checks for plugin updates when drm is disabled
pref("media.gmp-provider.enabled", false);
pref("media.gmp-widevinecdm.autoupdate", false);
pref("media.gmp-widevinecdm.enabled", false);
pref("media.gmp-widevinecdm.visible", false);
pref("media.gmp.storage.version.observed", 1);
pref("media.gmp.trial-create.enabled", false);
pref("media.hls.enabled", false);
pref("media.mediadrm-widevinecdm.visible", false);
pref("media.mediasource.enabled", true);
pref("media.mediasource.mp4.enabled", true);
pref("media.mediasource.webm.audio.enabled", true);
pref("media.mediasource.webm.enabled", true);
pref("media.mp4.enabled", true);
pref("media.navigator.enabled", false);
pref("media.navigator.hardware.vp8_decode.acceleration_enabled", true);
pref("media.navigator.hardware.vp8_encode.acceleration_enabled", true);
pref("media.navigator.video.enabled", false);
pref("media.ogg.enabled", false);
pref("media.ogg.flac.enabled", false);
pref("media.ondevicechange.enabled", false);
pref("media.openUnsupportedTypeWithExternalApp", true);
pref("media.opus.enabled", false);
pref("media.peerconnection.enabled", false);
pref("media.peerconnection.ice.default_address_only", true);
pref("media.peerconnection.ice.no_host", true);
pref("media.peerconnection.ice.proxy_only", true);
pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true); // force webrtc inside proxy when one is used
pref("media.peerconnection.identity.enabled", false);
pref("media.peerconnection.identity.timeout", 1);
pref("media.peerconnection.turn.disable", true);
pref("media.peerconnection.use_document_iceservers", false);
pref("media.peerconnection.video.enabled", false);
pref("media.plugins.enabled", true);
pref("media.preload.auto", 2);
pref("media.preload.default", 1);
pref("media.raw.enabled", false);
pref("media.realtime_decoder.enabled", true);
pref("media.stagefright.omxcodec.flags", 16);
pref("media.throttle-regardless-of-download-rate", false);
pref("media.track.enabled", false);
pref("media.video_stats.enabled", false);
pref("media.video-queue.send-to-compositor-size", 1);
pref("media.wave.enabled", false);
pref("media.webm.enabled", true);
pref("media.webspeech.recognition.enable", false);
pref("media.webspeech.synth.enabled", false);
pref("media.webvtt.enabled", true);
pref("media.wmf.deblacklisting-for-telemetry-in-gpu-process", false);
pref("media.wmf.enabled", true);
pref("middlemouse.contentLoadURL", false);
pref("middlemouse.paste", false);
pref("mousebutton.4th.enabled", false);
pref("mousebutton.5th.enabled", false);
pref("mousebutton.6th.enabled", false);
pref("mozilla.widget.disable-native-theme", false);                       //do not set true. when 'true'===>BUG: v45.0 will not render Windows frame, won't draw checkboxes nor buttons.
pref("mozilla.widget.force-24bpp", true);
pref("mozilla.widget.use-buffer-pixmap", true);
pref("network.allow-experiments", false);
pref("network.captive-portal-service.enabled", false);                    //block a-lot of background-traffic for resolving DNS.  https://support.mozilla.org/en-US/questions/1169302  https://support.mozilla.org/en-US/questions/1157121  - note that this is a mechianisem that detects 'WiFi pre-connection web-pages' such as policy-agree if you browse a lot on free-WiFi, you better keep this ON (true) - https://en.wikipedia.org/wiki/Captive_portal
pref("network.connectivity-service.enabled", false);
pref("network.cookie.cookieBehavior", 1);                                 //enable, but block 3rd-party ones.
pref("network.cookie.thirdparty.sessionOnly", true);
pref("network.dns.blockDotOnion", true);
pref("network.dns.disableIPv6", true);
pref("network.dns.disablePrefetch", false);
pref("network.dns.disablePrefetchFromHTTPS", false);
pref("network.dns.echconfig.enabled", true);
pref("network.dns.upgrade_with_https_rr", true);
pref("network.dns.use_https_rr_as_altsvc", true);    //not sure if it is a good idea
pref("network.dns.use_https_rr_for_speculative_connection", true);
pref("network.dnsCacheEntries", 0);                             //400 domains resolved       (default:20 domains)
pref("network.dnsCacheExpiration", 0);                         //86400seconds === 24 hours (default:60 seconds)
pref("network.file.disable_unc_paths", true); // hidden, disable using uniform naming convention to prevent proxy bypass
pref("network.gio.supported-protocols", ""); // disable gio as it could bypass proxy
pref("network.http.accept-encoding", "gzip, deflate");            //disable Brotli(br) compression,  by default it is either missing/empty or "gzip, deflate, br"
pref("network.http.accept-encoding.secure", "gzip, deflate");     //disable Brotli(br) compression,  by default it is either missing/empty or "gzip, deflate, br"
pref("network.http.accept-encoding.secure.reverted", true);       //disable Brotli(br) compression.
pref("network.http.altsvc.enabled", false);
pref("network.http.altsvc.oe", false);
pref("network.http.fast-fallback-to-IPv4", true);
pref("network.http.http3.enabled", true);
pref("network.http.keep-alive", true);
pref("network.http.max-connections", 128);
pref("network.http.max-connections-per-server", 32);
pref("network.http.max-persistent-connections-per-proxy", 64);
pref("network.http.max-persistent-connections-per-server", 32);
pref("network.http.pipelining", true);
pref("network.http.pipelining.firstrequest", false);
pref("network.http.pipelining.max-optimistic-requests", 16);
pref("network.http.pipelining.maxrequests", 16);
pref("network.http.pipelining.ssl", true);
pref("network.http.proxy.keep-alive", true);
pref("network.http.proxy.pipelining", true);
pref("network.http.redirection-limit", 5);
pref("network.http.referer.defaultPolicy", 1);
pref("network.http.spdy.enabled", true);               //enable SPDY
pref("network.http.spdy.enabled.deps", true);          //enable SPDY
pref("network.http.spdy.enabled.http2", true);         //enable SPDY
pref("network.http.spdy.enabled.v2", true);            //enable SPDY
pref("network.http.spdy.enabled.v3", true);            //enable SPDY
pref("network.http.spdy.enabled.v3-1", true);          //enable SPDY
pref("network.http.spdy.enforce-tls-profile", true);   //false is compatible for older-versions of Firefox, in-case SPDY is enabled, allowing loose-HTTPS certificates exchange.
pref("network.http.spdy.persistent-settings", false);   //disable SPDY  - true will client-side verification error, that will cause 302-redirect errors on GMAIL and Google-based logins.
pref("network.http.spdy.websockets", true);            //enable SPDY
pref("network.http.speculative-parallel-limit", 0);           //disable prefetch / speculative connections and domain guessing
pref("network.http.windows-sso.enabled", false); // disable MS auto authentication via sso
pref("network.IDN_show_punycode", true); // use punycode in idn to prevent spoofing
pref("network.jar.block-remote-files", true);
pref("network.jar.open-unsafe-types", false);
pref("network.manage-offline-status", false); //let users set the browser as offline, without the browser trying to guess.
pref("network.predictor.cleaned-up", true);
pref("network.predictor.enable-prefetch", true);
pref("network.predictor.enabled", false);
pref("network.predictor.preconnect-min-confidence", 40);
pref("network.prefetch-next", false);
pref("network.preload", true);
pref("network.process.enabled", true);
pref("network.protocol-handler.external.ms-windows-store", false);
pref("network.proxy.autoconfig_url.include_path", false);
pref("network.proxy.backup.ftp", "");
pref("network.proxy.backup.ftp_port", 0);
pref("network.proxy.backup.socks", "");
pref("network.proxy.backup.socks_port", 0);
pref("network.proxy.backup.ssl", "");
pref("network.proxy.backup.ssl_port", 0);
pref("network.proxy.share_proxy_settings", true);
pref("network.proxy.socks_remote_dns", true); // forces dns query through the proxy when using one
pref("network.standard-url.encode-query-utf8", true);
pref("network.stricttransportsecurity.enabled", false);
pref("network.stricttransportsecurity.preloadlist", false);
pref("network.tcp.tcp_fastopen_enable", false);
pref("network.tickle-wifi.enabled", false);
pref("network.trr.confirmationNS", "skip"); // skip undesired DNS-over-HTTPS test connection
pref("network.trr.custom_uri", "https://94.140.14.14/dns-query");
pref("network.trr.mode", 2); //2=use dns-over-https, and fallback to default dns. 3=only use dns-over-https. 0=off
pref("network.trr.uri", "https://94.140.14.14/dns-query");
pref("network.trr.useGET", false);
pref("network.warnOnAboutNetworking", false);
pref("network.websocket.timeout.ping.request", 0);
pref("nglayout.initialpaint.delay", 10);
pref("notification.feature.enabled", false);
pref("offline-apps.allow_by_default", false);
pref("pageThumbs.enabled", false);
pref("pdfjs.disabled", true);
pref("pdfjs.enabledCache.initialized", true);
pref("pdfjs.enabledCache.state", true);
pref("pdfjs.enableScripting", false); // disable js scripting in the built-in pdf reader
pref("pdfjs.enableWebGL", false);
pref("pdfjs.previousHandler.alwaysAskBeforeHandling", true);
pref("pdfjs.previousHandler.preferredAction", 4);
pref("plugin.default.state", 0);
pref("plugin.defaultXpi.state", 0);
pref("plugin.disable_full_page_plugin_for_types", "application/pdf");
pref("plugin.expose_full_path", true);
pref("plugin.scan.plid.all", false);
pref("plugin.state.flash", 2);
pref("plugin.state.java", 0);
pref("plugins.hide_infobar_for_missing_plugin", true);
pref("plugins.hide_infobar_for_outdated_plugin", true);
pref("plugins.update.url", "https://0.0.0.0/");
pref("privacy.cpd.formdata", false);
pref("privacy.cpd.offlineApps", true);
pref("privacy.cpd.sessions", false);
pref("privacy.cpd.siteSettings", true);
pref("privacy.donottrackheader.enabled", true);
pref("privacy.popups.disable_from_plugins", 1);
pref("privacy.reduceTimerPrecision", false);
pref("privacy.reduceTimerPrecision.enabled", false);
pref("privacy.resistFingerprinting", false);
pref("privacy.resistFingerprinting.autoDeclineNoUserInputCanvasPrompts", false);
pref("privacy.resistFingerprinting.block_mozAddonManager", true); // prevents rfp from breaking AMO
pref("privacy.resistFingerprinting.enabled", false);
pref("privacy.resistFingerprinting.letterboxing", false);
pref("privacy.resistFingerprinting.letterboxing.enabled", false);
pref("privacy.resistFingerprinting.reduceTimerPrecision.enabled", false);
pref("privacy.resistFingerprinting.reduceTimerPrecision.jitter", false);
pref("privacy.resistFingerprinting.reduceTimerPrecision.microseconds", 0);
pref("privacy.sanitize.timeSpan", 0);
pref("privacy.trackingprotection.cryptomining.annotate", false);
pref("privacy.trackingprotection.cryptomining.annotate.enabled", false);
pref("privacy.trackingprotection.cryptomining.enabled", false);
pref("privacy.trackingprotection.enabled", false);                         //might be problematic
pref("privacy.trackingprotection.fingerprinting.annotate", false);
pref("privacy.trackingprotection.fingerprinting.annotate.enabled", false);
pref("privacy.trackingprotection.fingerprinting.enabled", false);
pref("privacy.trackingprotection.introCount", 20);
pref("privacy.trackingprotection.origin_telemetry.enabled", false);
pref("privacy.trackingprotection.pbmode", false);
pref("privacy.trackingprotection.pbmode.enabled", false);
pref("privacy.trackingprotection.ui.enabled", false);
pref("privacy.userContext.enabled", false);
pref("reader.color_scheme", "light");
pref("reader.parse-on-load.enabled", false);
pref("sanity-test.advanced-layers", true);
pref("sanity-test.running", false);
pref("scrollbox.smoothScroll", false);
pref("security.allow_chrome_frames_inside_content", false);
pref("security.app_menu.recordEventTelemetry", false);
pref("security.block_script_with_wrong_mime", true);
pref("security.cert_pinning.enforcement_level", 0);
pref("security.certerrors.recordEventTelemetry", false);
pref("security.csp.enable", false);
pref("security.default_personal_cert", "Select Automatically");
pref("security.family_safety.mode", 0);  // disable win8.1 family safety cert
pref("security.fileuri.strict_origin_policy", true);
pref("security.identitypopup.recordEventTelemetry", false);
pref("security.insecure_connection_icon.enabled", true);
pref("security.insecure_password.ui.enabled", true);
pref("security.mixed_content.block_active_content", true);
pref("security.mixed_content.block_display_content", true);
pref("security.mixed_content.block_object_subrequest", true);
pref("security.mixed_content.send_hsts_priming", false);
pref("security.mixed_content.upgrade_display_content", true);
pref("security.mixed_content.use_hsts", false);
pref("security.OCSP.enabled", 0);
pref("security.OCSP.require", false);
pref("security.pki.distrust_ca_policy", 0);                               //Symantec certificates will work again (no symantec distrust) [0 permit all|1 distrust symantec|2 distrust symantec even if is new (default in FirefoxV63+)]
pref("security.pki.sha1_enforcement_level", 0);                           //allow SHA1 certificates again.
pref("security.protectionspopup.recordEventTelemetry", false);
pref("security.ssl.disable_session_identifiers", false);
pref("security.ssl.enable_alpn", false);
pref("security.ssl.enable_false_start", false);
pref("security.ssl.enable_ocsp_must_staple", false);
pref("security.ssl.enable_ocsp_stapling", false);
pref("security.ssl.errorReporting.automatic", false);
pref("security.ssl.errorReporting.enabled", false);
pref("security.ssl.errorReporting.url", "https://0.0.0.0/");
pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
pref("security.tls.version.max",5);
pref("security.tls.version.min",3);   // 0 SSL3, 1 TLS1.0, 2 TLS1.1, 3 TLS1.2, 4 TLS1.3, 5 ?
pref("security.warn_leaving_secure", true);
pref("security.warn_submit_insecure", true);
pref("security.warn_viewing_mixed", false);
pref("security.xpconnect.plugin.unrestricted", false);
pref("services.blocklist.signing.enforced", false);
pref("services.blocklist.update_enabled", false);
pref("services.sync.clients.devices.desktop", 1);
pref("services.sync.clients.devices.mobile", 1);
pref("services.sync.engine.creditcards", false);
pref("services.sync.engine.creditcards.available", false);
pref("services.sync.log.logger.telemetry", false);
pref("services.sync.nextSync", 0);
pref("services.sync.prefs.sync.browser.crashReports.unsubmittedCheck.autoSubmit2", false);
pref("services.sync.prefs.sync.browser.search.update", false);
pref("services.sync.prefs.sync.extensions.update.enabled", false);
pref("services.sync.syncInterval", 600000);
pref("services.sync.syncThreshold", 300);
pref("services.sync.telemetry.maxEventsCount", 0);
pref("services.sync.telemetry.maxPayloadCount", 0);
pref("signon.autofillForms", true);
pref("signon.autofillForms.http", true);
pref("signon.autologin.proxy", true);
pref("signon.formlessCapture.enabled", false);
pref("signon.ignoreAutocomplete", false);
pref("signon.importedFromSqlite", true);
pref("signon.storeWhenAutocompleteOff", true);
pref("snav.enabled", true);
pref("social.directories", "");
pref("social.enabled", false);
pref("social.remote-install.enabled", false);
pref("social.share.activationPanelEnabled", false);
pref("social.shareDirectory", "");
pref("social.toast-notifications.enabled", false);
pref("social.whitelist", "");
pref("startup.homepage_override_url", "about:blank");
pref("startup.homepage_welcome_url", "about:blank");
pref("startup.homepage_welcome_url.additional", "");
pref("storage.vacuum.last.index", 1);
pref("svg.context-properties.content.enabled", true);
pref("svg.disabled", false);                                   //allow SVG (but not as font).
pref("telemetry.archive.enabled", false);
pref("telemetry.bhrPing.enabled", false);
pref("telemetry.cachedClientID", "");
pref("telemetry.debugSlowSql", false);
pref("telemetry.enabled", false);
pref("telemetry.firstShutdownPing.enabled", false);
pref("telemetry.hybridContent.enabled", false);
pref("telemetry.infoURL", "https://0.0.0.0/");
pref("telemetry.maxEventsCount", 0);
pref("telemetry.maxPayloadCount", 0);
pref("telemetry.newProfilePing.enabled", false);
pref("telemetry.origin_telemetry_test_mode.enabled", false);
pref("telemetry.previousBuildID", "");
pref("telemetry.rejected", true);
pref("telemetry.reportingPolics.firstRun", false);
pref("telemetry.reportingpolicy.enabled", false);
pref("telemetry.reportingpolicy.firstRun", false);
pref("telemetry.server", "https://0.0.0.0/");
pref("telemetry.shutdownPingSender.enabled", false);
pref("telemetry.shutdownPingSender.enabledFirstSession", false);
pref("telemetry.unified", false);
pref("telemetry.unifiedIsOptIn", true);
pref("telemetry.updatePing.enabled", false);
pref("toolkit.coverage.enabled", false);
pref("toolkit.coverage.endpoint.base", "");
pref("toolkit.coverage.opt-out", true); // hidden
pref("toolkit.crashreporter.enabled", false);
pref("toolkit.crashreporter.include_context_heap", false);
pref("toolkit.crashreporter.infoURL", "");
pref("toolkit.dump.emit", false);
pref("toolkit.identity.enabled", false);
pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); //allow custom look for the shell of the browser, using custom css: userchrome.css and usercontent.css in profile/chrome/ folder
pref("toolkit.scrollbox.smoothScroll", false);
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.bhrPing.enabled", false);
pref("toolkit.telemetry.cachedClientID", "");
pref("toolkit.telemetry.coverage.opt-out", true);
pref("toolkit.telemetry.coverage.opt-out", true); // hidden
pref("toolkit.telemetry.debugSlowSql", false);
pref("toolkit.telemetry.ecosystemtelemetry", false);
pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.enabled ", false);
pref("toolkit.telemetry.firstShutdownPing.enabled", false);
pref("toolkit.telemetry.geckoview.streaming", false);
pref("toolkit.telemetry.hybridContent.enabled", false);
pref("toolkit.telemetry.infoURL", "https://0.0.0.0/");
pref("toolkit.telemetry.maxEventsCount", 0);
pref("toolkit.telemetry.maxPayloadCount", 0);
pref("toolkit.telemetry.newProfilePing.enabled", false);
pref("toolkit.telemetry.pioneer-new-studies-available", false);
pref("toolkit.telemetry.previousBuildID", "");
pref("toolkit.telemetry.rejected", true);
pref("toolkit.telemetry.reportingPolics.firstRun", false);
pref("toolkit.telemetry.reportingpolicy.enabled", false);
pref("toolkit.telemetry.reportingpolicy.firstRun", false);
pref("toolkit.telemetry.server", "https://0.0.0.0/");
pref("toolkit.telemetry.server_owner", "https://0.0.0.0/");
pref("toolkit.telemetry.shutdownPingSender", false);
pref("toolkit.telemetry.shutdownPingSender.enabled", false);
pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
pref("toolkit.telemetry.testing.overrideProductsCheck", false);
pref("toolkit.telemetry.unified", false);
pref("toolkit.telemetry.unifiedIsOptIn", true);
pref("toolkit.telemetry.updatePing.enabled", false);
pref("toolkit.winRegisterApplicationRestart", false);         //prevent auto-start of the browser (Windows)
pref("ui.elantech_gesture_hack.enabled", 1);
pref("ui.elantech_gesture_hacks.enabled", 1);
pref("ui.submenuDelay", 20);
pref("ui.trackpoint_hack.enabled", -1);
pref("view_source.syntax_highlight", true);
pref("view_source.wrap_long_lines", true);
pref("webextensions.storage.sync.enabled", true);
pref("webgl.disable-extensions", true);
pref("webgl.disable-fail-if-major-performance-caveat", true);
pref("webgl.disabled", true);
pref("webgl.dxgl.enabled", false);
pref("webgl.enable-debug-renderer-info", false);
pref("webgl.enable-webgl2", false);
pref("webgl.min_capability_mode", true);
pref("xpinstall.signatures.required", false);
pref("xpinstall.whitelist.required", false);
pref("zoom.maxPercent", 600);
