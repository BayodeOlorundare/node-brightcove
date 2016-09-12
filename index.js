var MediaApi = require('./lib/mediaApi'),
	OAuthApi = require('./lib/oauthApi'),
	PolicyApi = require('./lib/policyApi'),
	Playlist = require('./lib/playlist'),
	Video = require('./lib/video'),
	Image = require('./lib/image'),
	Errors = require('./lib/errors');

module.exports = {
	Api: MediaApi, // old and deprecated!!
	MediaApi: MediaApi,
	OAuthApi: OAuthApi,
	PolicyApi: PolicyApi,
	Playlist: Playlist,
	Video: Video,
	Image: Image,
	errors: Errors
}