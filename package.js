Package.describe({
  summary: "Wrapper for npm module discourse-sso",
  version: "0.2.0",
  git: "https://github.com/MaazAli/Meteor-Discourse-SSO.git"
});

Npm.depends({
	'discourse-sso': '1.0.1'
});

Package.onUse(function(api) {
  api.addFiles('discourse-sso.js', 'server');
  api.export('discourse_sso', 'server');
  api.versionsFrom('METEOR@0.9.1.1');
});