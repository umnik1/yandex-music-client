"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YandexMusicClient = void 0;
var AxiosHttpRequest_1 = require("./core/AxiosHttpRequest");
var AccountService_1 = require("./services/AccountService");
var AlbumsService_1 = require("./services/AlbumsService");
var ArtistsService_1 = require("./services/ArtistsService");
var DefaultService_1 = require("./services/DefaultService");
var LandingService_1 = require("./services/LandingService");
var PlaylistsService_1 = require("./services/PlaylistsService");
var QueuesService_1 = require("./services/QueuesService");
var RotorService_1 = require("./services/RotorService");
var SearchService_1 = require("./services/SearchService");
var TagsService_1 = require("./services/TagsService");
var TracksService_1 = require("./services/TracksService");
var UserService_1 = require("./services/UserService");
var YandexMusicClient = /** @class */ (function () {
    function YandexMusicClient(config, HttpRequest) {
        if (HttpRequest === void 0) { HttpRequest = AxiosHttpRequest_1.AxiosHttpRequest; }
        var _a, _b, _c, _d;
        this.request = new HttpRequest({
            BASE: (_a = config === null || config === void 0 ? void 0 : config.BASE) !== null && _a !== void 0 ? _a : 'https://yandex-music-cors-proxy.onrender.com/https://api.music.yandex.net:443',
            VERSION: (_b = config === null || config === void 0 ? void 0 : config.VERSION) !== null && _b !== void 0 ? _b : '0.0.1',
            WITH_CREDENTIALS: (_c = config === null || config === void 0 ? void 0 : config.WITH_CREDENTIALS) !== null && _c !== void 0 ? _c : false,
            CREDENTIALS: (_d = config === null || config === void 0 ? void 0 : config.CREDENTIALS) !== null && _d !== void 0 ? _d : 'include',
            TOKEN: config === null || config === void 0 ? void 0 : config.TOKEN,
            USERNAME: config === null || config === void 0 ? void 0 : config.USERNAME,
            PASSWORD: config === null || config === void 0 ? void 0 : config.PASSWORD,
            HEADERS: config === null || config === void 0 ? void 0 : config.HEADERS,
            ENCODE_PATH: config === null || config === void 0 ? void 0 : config.ENCODE_PATH,
        });
        this.account = new AccountService_1.AccountService(this.request);
        this.albums = new AlbumsService_1.AlbumsService(this.request);
        this.artists = new ArtistsService_1.ArtistsService(this.request);
        this.default = new DefaultService_1.DefaultService(this.request);
        this.landing = new LandingService_1.LandingService(this.request);
        this.playlists = new PlaylistsService_1.PlaylistsService(this.request);
        this.queues = new QueuesService_1.QueuesService(this.request);
        this.rotor = new RotorService_1.RotorService(this.request);
        this.search = new SearchService_1.SearchService(this.request);
        this.tags = new TagsService_1.TagsService(this.request);
        this.tracks = new TracksService_1.TracksService(this.request);
        this.user = new UserService_1.UserService(this.request);
    }
    return YandexMusicClient;
}());
exports.YandexMusicClient = YandexMusicClient;
