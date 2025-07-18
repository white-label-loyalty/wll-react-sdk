## [1.4.1](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.4.0...v1.4.1) (2025-07-15)


### Bug Fixes

* update base URL for STAGING-US environment ([791f3e2](https://github.com/white-label-loyalty/wll-react-sdk/commit/791f3e28edb6aaac06587747baf5882def256543))



# [1.4.0](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.3.1...v1.4.0) (2025-07-15)


### Features

* add us core url ([1d6f942](https://github.com/white-label-loyalty/wll-react-sdk/commit/1d6f9425bb61c627ebba0b3ffaa31a3bbbbccd26))



## [1.3.1](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.3.0...v1.3.1) (2025-07-14)


### Bug Fixes

* removing debug logging ([503b722](https://github.com/white-label-loyalty/wll-react-sdk/commit/503b722d525232263a474de52250d58ec5b54e2c))


### Features

* add environment selection support with dynamic API base URL ([0cf887a](https://github.com/white-label-loyalty/wll-react-sdk/commit/0cf887abe2bf8d3ab56e1e88b700acc55fffc179))



# [1.3.0](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.2.1...v1.3.0) (2025-07-08)


### Bug Fixes

* add mobile/tablet snapshots to chromatic ([57fcb3a](https://github.com/white-label-loyalty/wll-react-sdk/commit/57fcb3a5816153ec5528a1429d6d0ad5e03f0630))
* adjust no of lines back to 3 for tiles with title and artwork ([f007809](https://github.com/white-label-loyalty/wll-react-sdk/commit/f007809cfe6e57b8b45e91543b7e7646d35bd06c))
* remove breakpoints from empty section test ([8de472d](https://github.com/white-label-loyalty/wll-react-sdk/commit/8de472ded59f389817026e3b25ca03cc354f02bb))


### Features

* add responsive test story with viewport breakpoints for ContentTile ([c6041b7](https://github.com/white-label-loyalty/wll-react-sdk/commit/c6041b7144216e20811fe6163b7913b939678446))
* implement dynamic summary truncation based on reward price visibility ([fa98c85](https://github.com/white-label-loyalty/wll-react-sdk/commit/fa98c85f8083ac354f54fdb377ffaf45dd2575fb))
* implement dynamic text truncation based on content tile layout variants ([06ee1ee](https://github.com/white-label-loyalty/wll-react-sdk/commit/06ee1eef997244cf840db95cab60b161b9be9c92))
* increase title clamp limit from 2 to 3 lines in mock content tile ([b54b63d](https://github.com/white-label-loyalty/wll-react-sdk/commit/b54b63de62541deed6cb6384772f24ade189636e))



## [1.2.1](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.2.0...v1.2.1) (2025-06-19)


### Bug Fixes

* prevent image edge artifacts in ContentTile by expanding image bounds ([9492dc6](https://github.com/white-label-loyalty/wll-react-sdk/commit/9492dc69baf25f607895983c4f9d5391e4ce2ec6))



# [1.2.0](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.1.0...v1.2.0) (2025-06-13)


### Features

* implement request deduplication for group fetching ([adc2a56](https://github.com/white-label-loyalty/wll-react-sdk/commit/adc2a562cb86f1e90acd90a57b2491b6b19338ac))



# [1.1.0](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.113...v1.1.0) (2025-06-06)


### Bug Fixes

* trigger release for web loading state fix ([9e46417](https://github.com/white-label-loyalty/wll-react-sdk/commit/9e46417b4a28ee704fee9ea2e67c60002f939c89))
* trigger release for web loading state fix ([4ba97ff](https://github.com/white-label-loyalty/wll-react-sdk/commit/4ba97ffcd57595e1c5545a676887dcc61b095f46))
* update test to use balance instead of amount for zero points value ([a18199a](https://github.com/white-label-loyalty/wll-react-sdk/commit/a18199a6ac1438506ceba6471d7cd66ec6b879e7))


### Features

* add manual version bump workflow with patch/minor/major options ([4d8f4db](https://github.com/white-label-loyalty/wll-react-sdk/commit/4d8f4dbe570e0a902f37e6544ed58ab78a749855))
* integrate Storybook with native app, add new stories and update configurations ([bf1767e](https://github.com/white-label-loyalty/wll-react-sdk/commit/bf1767ec77c33d394c07d422b217d89be00132bd))



## [1.0.113](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.112...v1.0.113) (2025-06-05)


### Bug Fixes

* adjust vertical alignment ([1206955](https://github.com/white-label-loyalty/wll-react-sdk/commit/1206955bd45cf98f118b04a6714759a76632b588))
* continuous loading state ([8a5a081](https://github.com/white-label-loyalty/wll-react-sdk/commit/8a5a081833aaff61b0d19ca0e08bb3e94c7b5572))
* trigger release for web loading state fix ([195a70b](https://github.com/white-label-loyalty/wll-react-sdk/commit/195a70bc783e56dd20c16e9da48e90b2c5dc1082))
* visual regression with skeleton ([4ea5973](https://github.com/white-label-loyalty/wll-react-sdk/commit/4ea597380ed6c2170ad7d8be16cb2cde6dd5c23c))



## [1.0.112](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.111...v1.0.112) (2025-05-28)


### Bug Fixes

* remove redundant isLoading check in group fetch logic ([be2914f](https://github.com/white-label-loyalty/wll-react-sdk/commit/be2914f77ec45fda5766fcfd542b41316c11aaf3))
* remove unused dependency initialFetch from useEffect in Group component ([fb1343b](https://github.com/white-label-loyalty/wll-react-sdk/commit/fb1343bbeef12a6c130630c424109e9f94318246))
* type useGroupRefresh  and add default to prevent accidental subscriptions ([b26dfd5](https://github.com/white-label-loyalty/wll-react-sdk/commit/b26dfd514e6ebc6dace8fe91efe543cb4de90ef7))
* update hook params ([852fefa](https://github.com/white-label-loyalty/wll-react-sdk/commit/852fefa2693b8ef79948d3a232f8290f5babcf3b))


### Features

* add debug logging for Group component and WllSdkProvider lifecycle events ([ee5fcc4](https://github.com/white-label-loyalty/wll-react-sdk/commit/ee5fcc43f63848d8c4fbcdf10709eaa9fdb3c7aa))



## [1.0.111](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.110...v1.0.111) (2025-05-23)



## [1.0.109](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.108...v1.0.109) (2025-05-08)


### Bug Fixes

* add chevron icon styles ([4f8fbdb](https://github.com/white-label-loyalty/wll-react-sdk/commit/4f8fbdb2a1ec5a660d3357eb7b1743e70a38abda))
* build ([38714bf](https://github.com/white-label-loyalty/wll-react-sdk/commit/38714bf90ea5b4497d46a79fd365a8064c3577e9))
* change the tile name to ROUND_UP_BALANCE ([ee2724a](https://github.com/white-label-loyalty/wll-react-sdk/commit/ee2724ae2392ca63a8b6dae40793dafe74d2bee9))
* stories and tests ([55631df](https://github.com/white-label-loyalty/wll-react-sdk/commit/55631df420381c2122fcba4d2a541199913f8782))
* update snapshots for points and roundup tiles ([bbc9407](https://github.com/white-label-loyalty/wll-react-sdk/commit/bbc9407b751dda8a01973a960f26e19bfd9d0348))


### Features

* add chevron to points tile ([e1b8565](https://github.com/white-label-loyalty/wll-react-sdk/commit/e1b85659951524d088c2261254ddd72a6ae993e2))
* add roundup tile component ([f26f893](https://github.com/white-label-loyalty/wll-react-sdk/commit/f26f8935ff8cb3c5a64c330a8dd7a471933467b6))



## [1.0.108](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.107...v1.0.108) (2025-04-28)


### Bug Fixes

* skeleton loading for mobile devices ([e6affb7](https://github.com/white-label-loyalty/wll-react-sdk/commit/e6affb776807f4aa02bdd7f64f3863297ff372c2))


### Features

* **Skeleton:** adjust number of squares based on device type ([e99703b](https://github.com/white-label-loyalty/wll-react-sdk/commit/e99703b1c4646a617f10c71413c1b8dc2b95786d))



## [1.0.107](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.106...v1.0.107) (2025-04-25)


### Bug Fixes

* implement getDirectionalMargin for consistent RTL support across components ([b661d6f](https://github.com/white-label-loyalty/wll-react-sdk/commit/b661d6fa9510a1e778ed39e46d7871aebe0c650d))
* remove commented alternative for margin-inline-end in getDirectionalMargin ([3c1dce9](https://github.com/white-label-loyalty/wll-react-sdk/commit/3c1dce9679a771c8bd192ae16c8aee18754ad27e))
* trigger version bump workflow ([eee33ce](https://github.com/white-label-loyalty/wll-react-sdk/commit/eee33ce4c2a71b92324f66d2934c730b78ae175f))



## [1.0.106](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.105...v1.0.106) (2025-04-24)


### Bug Fixes

* replace marginRight with marginEnd for RTL support in tile components ([4cb2f98](https://github.com/white-label-loyalty/wll-react-sdk/commit/4cb2f9856890be0e3826482a38b810b2e543ab19))
* update test snapshots ([2a91ced](https://github.com/white-label-loyalty/wll-react-sdk/commit/2a91ced912834b54f9f06495930b9525e49bf467))



## [1.0.105](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.104...v1.0.105) (2025-04-10)


### Bug Fixes

* trigger version bump workflow ([e9b4ee3](https://github.com/white-label-loyalty/wll-react-sdk/commit/e9b4ee30fe6dd88d191367d628c6fe2d1b829c5b))



## [1.0.104](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.103...v1.0.104) (2025-04-03)


### Bug Fixes

* **BadgeTile:** handle date formatting errors gracefully ([5f48282](https://github.com/white-label-loyalty/wll-react-sdk/commit/5f482827e959ea977efb626adf435d5af5f64c55))
* **BadgeTile:** handle undefined date in handleLastEarnedDate ([2ec678e](https://github.com/white-label-loyalty/wll-react-sdk/commit/2ec678e2f7fc65fe6f8265be5caf4570a24e25f2))
* **transforms:** handle null or undefined locale in transformLocale ([dc52ab6](https://github.com/white-label-loyalty/wll-react-sdk/commit/dc52ab642d92a6bcaf0a824b94e93f97d1dc1975))
* trigger version bump workflow ([951edcb](https://github.com/white-label-loyalty/wll-react-sdk/commit/951edcbefbfc9ee89b3050cfa8d1e0d3a24bd6b8))


### Features

* **badge-tile:** add lastEarnedAt field and locale transformation ([6e79118](https://github.com/white-label-loyalty/wll-react-sdk/commit/6e791189253804e5f1197602f6f3432c4d35f011))



## [1.0.103](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.102...v1.0.103) (2025-04-01)


### Bug Fixes

* trigger version bump workflow ([b0b1870](https://github.com/white-label-loyalty/wll-react-sdk/commit/b0b1870190ea5d349fea48c62df2f7248755867d))


### Features

* **data-invalidation:** add event-driven data invalidation system ([2a5931b](https://github.com/white-label-loyalty/wll-react-sdk/commit/2a5931b90124b336e78a99058670cb5967745831))



## [1.0.102](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.101...v1.0.102) (2025-03-28)


### Bug Fixes

* trigger version bump workflow ([1374e2e](https://github.com/white-label-loyalty/wll-react-sdk/commit/1374e2ebd01a870a930d08162ee7a48f1afe2fc1))
* trigger version bump workflow ([cd59c7a](https://github.com/white-label-loyalty/wll-react-sdk/commit/cd59c7a0006a63cb7cb74f8f145fbce29321108d))


### Features

* **Carousel:** add auto-rotate functionality ([486638c](https://github.com/white-label-loyalty/wll-react-sdk/commit/486638cc7574537a3180e3ba3e28395c2630aa7b))



## [1.0.101](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.100...v1.0.101) (2025-03-28)


### Bug Fixes

* trigger version bump workflow ([a8d8822](https://github.com/white-label-loyalty/wll-react-sdk/commit/a8d8822f5461d28fbc87ee440816098bf0035a06))


### Features

* **group:** add refreshGroup method to fetch updated group data ([d5bc409](https://github.com/white-label-loyalty/wll-react-sdk/commit/d5bc40982332329b69cc9d485b6eb40795dea7da))



## [1.0.100](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.99...v1.0.100) (2025-03-25)


### Bug Fixes

* resolve web font inheritance issues ([3272c01](https://github.com/white-label-loyalty/wll-react-sdk/commit/3272c01616b7520639b3493e21d11d8030d6249d))
* update snapshots ([b0767dd](https://github.com/white-label-loyalty/wll-react-sdk/commit/b0767dd790b478fe86a51afd520c019a47ba17dc))



## [1.0.99](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.98...v1.0.99) (2025-03-25)


### Bug Fixes

* add loggin to see why theme isnt being set proprlty in consumer ([6bc36e9](https://github.com/white-label-loyalty/wll-react-sdk/commit/6bc36e986abd908808889e6c7634aa4d638b9453))



## [1.0.98](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.97...v1.0.98) (2025-03-24)


### Bug Fixes

* add note to ensure it doesnt get changed in the future ([790de1d](https://github.com/white-label-loyalty/wll-react-sdk/commit/790de1d9ef40351ca7e47265296b2b417ed6fd2c))
* remove debug logs ([010401f](https://github.com/white-label-loyalty/wll-react-sdk/commit/010401f914ec0ef038b71070811df78017bc5bd1))
* trigger version bump workflow ([7ed964e](https://github.com/white-label-loyalty/wll-react-sdk/commit/7ed964e509d96f66ceaa9aacab623e86ed33483b))



## [1.0.97](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.96...v1.0.97) (2025-03-24)


### Bug Fixes

* ensure consistent font family application in Text component ([853ee1e](https://github.com/white-label-loyalty/wll-react-sdk/commit/853ee1e6db5064f273f5ceb024123c3bc1fb443f))
* update test snapshots ([4ad56df](https://github.com/white-label-loyalty/wll-react-sdk/commit/4ad56dfc71770ddeabd724615ad7cd0be273a887))



## [1.0.96](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.95...v1.0.96) (2025-03-24)


### Bug Fixes

* replace development mode checks with direct logging for theme debugging ([fe546cf](https://github.com/white-label-loyalty/wll-react-sdk/commit/fe546cfd6107e5271fa9be9de58d66416b90991a))
* trigger version bump workflow ([2ef2bd2](https://github.com/white-label-loyalty/wll-react-sdk/commit/2ef2bd2dad0542cf0305288af484a6b687771865))



## [1.0.95](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.94...v1.0.95) (2025-03-24)


### Bug Fixes

* add global type for __DEV__ ([a5df1f9](https://github.com/white-label-loyalty/wll-react-sdk/commit/a5df1f9d00abd84043d7daed3c7cecc9b8ee17f0))
* add some logs around theme so we know its being set ([cf6babc](https://github.com/white-label-loyalty/wll-react-sdk/commit/cf6babc4e3351f6bb3ac12eb1f5bdec13d487ea9))
* trigger version bump workflow ([729b86c](https://github.com/white-label-loyalty/wll-react-sdk/commit/729b86c327670419d5b60c39796e7f84c8f125a9))



## [1.0.94](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.93...v1.0.94) (2025-03-24)


### Bug Fixes

* apply font family from the theme ([162b59a](https://github.com/white-label-loyalty/wll-react-sdk/commit/162b59afc586fd237263c54e3cca33c062c7a84a))
* update snapshot ([7045e59](https://github.com/white-label-loyalty/wll-react-sdk/commit/7045e5906fb60c50950900972d710ced1ab066d6))



## [1.0.93](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.92...v1.0.93) (2025-03-21)


### Bug Fixes

* fix issue with layout when user is logged out ([2d0eca9](https://github.com/white-label-loyalty/wll-react-sdk/commit/2d0eca9cc0b43553a1f747d9ecf329ac49e0d987))
* update snapshots ([693dd67](https://github.com/white-label-loyalty/wll-react-sdk/commit/693dd6793b815607627aaabb2c43589468eea91e))



## [1.0.92](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.91...v1.0.92) (2025-03-21)


### Bug Fixes

* make sure react naitve uses the react native entry point ([41a4979](https://github.com/white-label-loyalty/wll-react-sdk/commit/41a497951ed96b2554b0d8cee2b41151e36e8ce1))
* make sure web version consumes the web bundle ([31e476c](https://github.com/white-label-loyalty/wll-react-sdk/commit/31e476cee2961071faed8240a0ded5208c403e1f))



## [1.0.91](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.90...v1.0.91) (2025-03-21)


### Bug Fixes

* display points when user has zero points ([64cb6a6](https://github.com/white-label-loyalty/wll-react-sdk/commit/64cb6a6872f23b9ca051307fc949ff0c0eb37235))



## [1.0.90](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.89...v1.0.90) (2025-03-21)


### Bug Fixes

* refactor button into own component and adjust size for mobile ([1e5951f](https://github.com/white-label-loyalty/wll-react-sdk/commit/1e5951f502927cc7712093389717aef6d82a7e04))
* update imports ([461cb08](https://github.com/white-label-loyalty/wll-react-sdk/commit/461cb0855e918eaf792faa04eeb9cda983890836))



## [1.0.89](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.88...v1.0.89) (2025-03-21)


### Bug Fixes

* cleanup fragmented styles ([be481fe](https://github.com/white-label-loyalty/wll-react-sdk/commit/be481fe547e21c5e330a7ee017420445ed5cb125))
* overflowing title on the mobile device ([760541f](https://github.com/white-label-loyalty/wll-react-sdk/commit/760541f999698c03d4d0067a1d7f115c4cb340ca))
* remove logs from api helpers file ([111fbbb](https://github.com/white-label-loyalty/wll-react-sdk/commit/111fbbb5b1f34744c59943e3cb80ea437d7188c4))
* update snapshot ([764dc2e](https://github.com/white-label-loyalty/wll-react-sdk/commit/764dc2e608c95d36eaf77c7a7c0b1d1e6fe722ae))



## [1.0.88](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.87...v1.0.88) (2025-03-20)


### Bug Fixes

* apply size limit to chevron on mobile devices ([79f8320](https://github.com/white-label-loyalty/wll-react-sdk/commit/79f83203a94e963849046db831133b55ee63c958))



## [1.0.87](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.86...v1.0.87) (2025-03-20)


### Bug Fixes

*  issue with saturation on React Native ([6732ba2](https://github.com/white-label-loyalty/wll-react-sdk/commit/6732ba2e0100b43d55e2becebe401f94fc16b998))
* (ContentTile) Completly refactor content tile as old version was flakey ([a63dbba](https://github.com/white-label-loyalty/wll-react-sdk/commit/a63dbba42d57135673333b75ce9428f29e55f926))
* change the way we calculate margins on react native ([1d05376](https://github.com/white-label-loyalty/wll-react-sdk/commit/1d05376466b9132a6c643931a9e452569b093b99))
* issue with desaturated image react native, overlay workaround ([4b3dc8e](https://github.com/white-label-loyalty/wll-react-sdk/commit/4b3dc8e980449add3fdda19ae10ed3e1934cd2c8))


### Features

* trigger release workflow ([c60d9e7](https://github.com/white-label-loyalty/wll-react-sdk/commit/c60d9e7b870886405e0670182e60a17d6bb2abb3))



## [1.0.86](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.85...v1.0.86) (2025-03-19)


### Bug Fixes

* add more debugging markers ([7202c03](https://github.com/white-label-loyalty/wll-react-sdk/commit/7202c039ab617b1a33ae1c7a9111ba07769e5685))



## [1.0.85](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.84...v1.0.85) (2025-03-19)


### Bug Fixes

* add logging to see why layout breaks mobile (native) ([ad1bc18](https://github.com/white-label-loyalty/wll-react-sdk/commit/ad1bc184ddd8e729e55bb160a66bfddb728f1ddc))



## [1.0.84](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.83...v1.0.84) (2025-03-19)


### Bug Fixes

* (Grid) remove aspect ratio ([570afef](https://github.com/white-label-loyalty/wll-react-sdk/commit/570afefcf064030fc8bf71fdcf61d1ae4b313e97))
* (PointsTile) fix issue with image width/height on mobile ([816cec1](https://github.com/white-label-loyalty/wll-react-sdk/commit/816cec181b53f83228ad31c2b3530403a7001613))
* (ThemeHelpers) fix desaturation so that it isnt too high ([b7d439c](https://github.com/white-label-loyalty/wll-react-sdk/commit/b7d439cd44aafbafbc38493135050403018a637a))


### Features

* trigger version bump without code changes ([322d7b6](https://github.com/white-label-loyalty/wll-react-sdk/commit/322d7b66d57e34208396fafa9261d4f28daae56e))



## [1.0.83](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.82...v1.0.83) (2025-03-19)


### Bug Fixes

* (ProgressiveImage) dont desaturate the image on native ([dc8f0ae](https://github.com/white-label-loyalty/wll-react-sdk/commit/dc8f0ae7b638fa826479e8fd851fbeb011441a6c))
* (RewardTile) fix issue with chevron overflowing container ([838f7c7](https://github.com/white-label-loyalty/wll-react-sdk/commit/838f7c7fa1d86427f01ffc6a7fa871f19581b047))
* (TileContainer) try reducing the margin ([546bb62](https://github.com/white-label-loyalty/wll-react-sdk/commit/546bb6211d36a348d8c7f312421c8455fe3572e9))



## [1.0.82](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.81...v1.0.82) (2025-03-19)


### Bug Fixes

* (TileConatiner) try different approach for defining flex layouts ([cdd045b](https://github.com/white-label-loyalty/wll-react-sdk/commit/cdd045bef074956dcf411157cba0199b6269f4c1))



## [1.0.81](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.80...v1.0.81) (2025-03-19)


### Bug Fixes

* (Grid) adjust width calculations based on section padding ([58f5aab](https://github.com/white-label-loyalty/wll-react-sdk/commit/58f5aabb4ec5c19221e91956a0f1727d83882d4c))



## [1.0.80](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.79...v1.0.80) (2025-03-19)


### Bug Fixes

* (Grid) remove margin right on mobile ([9199431](https://github.com/white-label-loyalty/wll-react-sdk/commit/91994310f4e3fd07e2ad31ae4ee55960ff4f56eb))



## [1.0.79](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.78...v1.0.79) (2025-03-19)


### Bug Fixes

* (HalfTile) make sure rounding is correct ([cc75c94](https://github.com/white-label-loyalty/wll-react-sdk/commit/cc75c948712e7a2f2de6036b0fe3927f5d620bae))



## [1.0.78](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.77...v1.0.78) (2025-03-19)


### Bug Fixes

* (TileContainer) remove aspect ratio on half tile ([322c412](https://github.com/white-label-loyalty/wll-react-sdk/commit/322c41239e7f56fc5db5bfee5b7b6089e6dfe11d))



## [1.0.77](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.76...v1.0.77) (2025-03-19)


### Bug Fixes

* (Grid) fix spacing with tiles ([01d8adf](https://github.com/white-label-loyalty/wll-react-sdk/commit/01d8adf296ee79b59e4190332ce76e7a1d4696e4))



## [1.0.76](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.75...v1.0.76) (2025-03-19)


### Bug Fixes

* (Grid) try another solution ([b5009b1](https://github.com/white-label-loyalty/wll-react-sdk/commit/b5009b11846d23b9a58e15f2467603c6af09aa0c))



## [1.0.75](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.74...v1.0.75) (2025-03-19)


### Bug Fixes

* (Grid) remove the GRID_GAP as its still causing layout issues ([6100f3b](https://github.com/white-label-loyalty/wll-react-sdk/commit/6100f3b135c3247d1cd35b045f947a4cfae44d4c))



## [1.0.74](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.73...v1.0.74) (2025-03-19)


### Bug Fixes

* (Grid) modify the width calculation logic to ensure tiles properly fill the available space ([c04a959](https://github.com/white-label-loyalty/wll-react-sdk/commit/c04a959c12179d7fb66937219001c7565daceaa3))



## [1.0.73](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.72...v1.0.73) (2025-03-14)


### Bug Fixes

* issue with padding on mobile devices ([9151c7d](https://github.com/white-label-loyalty/wll-react-sdk/commit/9151c7dfbf9d74abd9f063ca217294ccff544403))



## [1.0.72](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.71...v1.0.72) (2025-03-13)


### Bug Fixes

* adjust the padding to expect GRID_GAP padding ([c5e7112](https://github.com/white-label-loyalty/wll-react-sdk/commit/c5e7112118274e7ff926af29748e7e2e39ad09a7))



## [1.0.71](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.70...v1.0.71) (2025-03-13)


### Bug Fixes

* ensure the padding is applied correctly to the content inside the ScrollView ([016cfcb](https://github.com/white-label-loyalty/wll-react-sdk/commit/016cfcb50848d708877acaeae623929947a74da5))



## [1.0.70](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.69...v1.0.70) (2025-03-13)


### Bug Fixes

* make container conditional, add GRID_GAP level padding ([6a16c83](https://github.com/white-label-loyalty/wll-react-sdk/commit/6a16c83c1be91e5f8814ac8b4f77b681c31501d3))



## [1.0.69](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.68...v1.0.69) (2025-03-11)


### Bug Fixes

* add react, and revert jsx in tsconfig ([630e758](https://github.com/white-label-loyalty/wll-react-sdk/commit/630e7589964e32cb9c39b2fee9c4617d5003078a))
* give tile aspec ratio of 1 ([7328ee8](https://github.com/white-label-loyalty/wll-react-sdk/commit/7328ee88756837366bfeb8f21c2a765211ac1009))



## [1.0.68](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.67...v1.0.68) (2025-03-11)


### Bug Fixes

* remove non style properties from stylesheet, and check for the correct theme ([ac84aac](https://github.com/white-label-loyalty/wll-react-sdk/commit/ac84aac556b089ebe9c2f599d27bbe183e507e25))



## [1.0.67](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.66...v1.0.67) (2025-03-11)


### Bug Fixes

* add react-native-svg ([e3f6f73](https://github.com/white-label-loyalty/wll-react-sdk/commit/e3f6f737540b51a8cd468155f2260f736470e98c))
* make sure we use lucide react native for react native ([69f5e81](https://github.com/white-label-loyalty/wll-react-sdk/commit/69f5e816696b9d91f59231d97b98bf7208ab9438))



## [1.0.66](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.65...v1.0.66) (2025-03-11)


### Features

* trigger release ([5ac2154](https://github.com/white-label-loyalty/wll-react-sdk/commit/5ac2154b04feec4d8a9a4d76adb951de9e37d1cd))



## [1.0.65](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.64...v1.0.65) (2025-03-07)


### Bug Fixes

* update config for react native ([0054b11](https://github.com/white-label-loyalty/wll-react-sdk/commit/0054b11ab7f9837e790faf458f9b125253a368b2))



## [1.0.64](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.63...v1.0.64) (2025-03-05)


### Bug Fixes

* added toFixed rounding to cleanNumber method ([614ff0d](https://github.com/white-label-loyalty/wll-react-sdk/commit/614ff0dfeea3484afe840b81bf9a50a9bb5694e5))



## [1.0.63](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.62...v1.0.63) (2025-03-03)


### Bug Fixes

* cleanup code spacing for better readability ([35dc9c8](https://github.com/white-label-loyalty/wll-react-sdk/commit/35dc9c8b6dcea5df2b1ef6c1bf0db9b747388b15))



## [1.0.62](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.61...v1.0.62) (2025-03-03)


### Bug Fixes

* make proper use of enum to determine target ([806eb9f](https://github.com/white-label-loyalty/wll-react-sdk/commit/806eb9f0b170aab657cba496c207f9958e45577e))
* standardise context null-checking across all tile components ([709105a](https://github.com/white-label-loyalty/wll-react-sdk/commit/709105acd62e0f8dd9be689fae4bacce2b36f5f7))


### Features

* add isContextValid utility function to streamline context validation ([c2a5b8f](https://github.com/white-label-loyalty/wll-react-sdk/commit/c2a5b8f5d86d962f5f2de45a458e60519ac5cb10))



## [1.0.61](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.60...v1.0.61) (2025-02-24)


### Bug Fixes

* add alt text for points tile ([67c83c0](https://github.com/white-label-loyalty/wll-react-sdk/commit/67c83c0eb28066695527b752ea373e8fbec0ce9c))



## [1.0.60](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.59...v1.0.60) (2025-02-24)


### Bug Fixes

* for alt tags not being passed down ([a62cead](https://github.com/white-label-loyalty/wll-react-sdk/commit/a62cead3f235eb5dd8589f3180d7793144a18b91))



## [1.0.59](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.58...v1.0.59) (2025-02-24)


### Bug Fixes

* use badge tile types ([43b4f04](https://github.com/white-label-loyalty/wll-react-sdk/commit/43b4f044bf92e8b8060a89b8121f3b889d0816c9))



## [1.0.58](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.57...v1.0.58) (2025-02-21)


### Bug Fixes

* add declerations after warning ([3d47472](https://github.com/white-label-loyalty/wll-react-sdk/commit/3d47472282c93c0229a0046ece9c0d39eefef54e))


### Features

* add web and native specific bundles ([8f22111](https://github.com/white-label-loyalty/wll-react-sdk/commit/8f221117a65dd48b878a988d89891896a69f5396))
* create platform-specific bundles for web and native ([d533e40](https://github.com/white-label-loyalty/wll-react-sdk/commit/d533e4004d9328003ebad4e1f9c0026b5401085c))



## [1.0.57](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.56...v1.0.57) (2025-02-21)


### Bug Fixes

* issues with bundling in react naitve ([1bc0ad9](https://github.com/white-label-loyalty/wll-react-sdk/commit/1bc0ad959f08db4e70285cf856165e524e3f5e98))



## [1.0.56](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.55...v1.0.56) (2025-02-21)


### Bug Fixes

* add alt text to tiles ([ceea46a](https://github.com/white-label-loyalty/wll-react-sdk/commit/ceea46ac953b852a5f211645e57696e522f75ff9))
* import issues ([1f26fb4](https://github.com/white-label-loyalty/wll-react-sdk/commit/1f26fb4b0d0a00599502f8c681be2a6c1aa0eac3))
* mock factory default was incorrect - updated so tests pass and visual regression fix ([1e79f53](https://github.com/white-label-loyalty/wll-react-sdk/commit/1e79f53a08d2721576135bc13928473b5ae4026c))



## [1.0.55](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.54...v1.0.55) (2025-02-04)


### Bug Fixes

* babel in react native, web tags transform to mobile equivalents ([40d5cfb](https://github.com/white-label-loyalty/wll-react-sdk/commit/40d5cfbd49a81ced589a9b6253683b4bce95a8b7))



## [1.0.54](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.53...v1.0.54) (2025-02-03)


### Bug Fixes

* cjs rollup config ([faf7ef7](https://github.com/white-label-loyalty/wll-react-sdk/commit/faf7ef7805471b07713d87b84711fdd31841f810))



## [1.0.53](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.52...v1.0.53) (2025-02-03)


### Bug Fixes

* issues with esmodules ([6c087c6](https://github.com/white-label-loyalty/wll-react-sdk/commit/6c087c65b11a12fb01571c8db5489e334722c687))



## [1.0.52](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.51...v1.0.52) (2025-02-03)


### Bug Fixes

* (BadgeTile) fix issues surrounding specific badge not earned ([fe8aefe](https://github.com/white-label-loyalty/wll-react-sdk/commit/fe8aefe577088aef347328a4e1ab184a05b02f79))
* (TestUtils) use correct import ([3466a9d](https://github.com/white-label-loyalty/wll-react-sdk/commit/3466a9d5b93c6f57d7a506e34e4bbfba920f2027))
* filter out inactive sections and tiles before render ([23b2f2e](https://github.com/white-label-loyalty/wll-react-sdk/commit/23b2f2e9f966c59689914920c742933c66ae9242))
* guard against inactive tiles ([0dd8d95](https://github.com/white-label-loyalty/wll-react-sdk/commit/0dd8d9527afc394c89d70d9cb80ed0d0a8044253))
* issue with BaseBanner tile ([fb4ad65](https://github.com/white-label-loyalty/wll-react-sdk/commit/fb4ad65bea9ced239aa3c2435898067521aeed3e))
* make Latest badge description visibility explicit ([2d73d8c](https://github.com/white-label-loyalty/wll-react-sdk/commit/2d73d8ca486eeba5710dc8aad0a1ddf77f8ed771))
* mock banner data ([e3f8ca7](https://github.com/white-label-loyalty/wll-react-sdk/commit/e3f8ca727b9e5cae838e558b793502281ece4f00))
* styling issue with base banner ([59bc60d](https://github.com/white-label-loyalty/wll-react-sdk/commit/59bc60db374dd144cfdd4e597bcda099f7a0805f))
* update test ([ec91aca](https://github.com/white-label-loyalty/wll-react-sdk/commit/ec91aca9d63f06d2b46237bd3c7b9211c316eab3))
* update test name ([d6953bd](https://github.com/white-label-loyalty/wll-react-sdk/commit/d6953bd3cfa6830409eba33b3c6b580a754b5619))


### Features

* trigger new release ([23d6748](https://github.com/white-label-loyalty/wll-react-sdk/commit/23d6748b8b9d9e3da3fef1cd2d9a9336850e8f45))



## [1.0.51](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.50...v1.0.51) (2025-01-15)


### Bug Fixes

* (PointsTile) make image cover image container if full size ([e45c88e](https://github.com/white-label-loyalty/wll-react-sdk/commit/e45c88e6a186bdb8e64ce451b510dda6a14b1f38))



## [1.0.50](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.49...v1.0.50) (2025-01-15)


### Bug Fixes

* (PointsTile) issue with points multiplier, wrong key, also refactored into a helper method ([f930ee7](https://github.com/white-label-loyalty/wll-react-sdk/commit/f930ee7f82ad1d61b4285f93c55e3fb7fe54ec77))



## [1.0.49](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.48...v1.0.49) (2025-01-01)


### Bug Fixes

* make sure view isnt being rendered inside text ([e573537](https://github.com/white-label-loyalty/wll-react-sdk/commit/e5735371777cc7c968251b17d44d8c4cfbd5f76d))



## [1.0.48](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.47...v1.0.48) (2025-01-01)


### Bug Fixes

* (RewardTile) fixes issue in react native mobile with strings being rendered in a text component ([5fa09d3](https://github.com/white-label-loyalty/wll-react-sdk/commit/5fa09d321a2cee15fd2952edd79051b5f10b6646))
* (RewardTile) make sure styling applied to decendant ([1bb5aca](https://github.com/white-label-loyalty/wll-react-sdk/commit/1bb5acacb219b9f249031a3a98ac985eac7186f2))
* improve points multiplier handling in tile components ([66ad21f](https://github.com/white-label-loyalty/wll-react-sdk/commit/66ad21fce799e4f8ab4257af955e34b750861562))



## [1.0.47](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.46...v1.0.47) (2025-01-01)


### Features

* trigger release ([1ff6ea7](https://github.com/white-label-loyalty/wll-react-sdk/commit/1ff6ea78f205f0a6028f71223c0d9377bc49437a))



## [1.0.46](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.45...v1.0.46) (2024-12-22)


### Bug Fixes

* (Stories) fix issue with date on story ([5d7bc79](https://github.com/white-label-loyalty/wll-react-sdk/commit/5d7bc7994d8a7a648c7bc514760d135e6f8a4938))
* (Tiles) various fixes to the layout of tiles ([f4e54e7](https://github.com/white-label-loyalty/wll-react-sdk/commit/f4e54e79b4a477f2b8967cfeb2da6b56c18f8737))
* fix issue with desaturation ([af2a883](https://github.com/white-label-loyalty/wll-react-sdk/commit/af2a883850ff677034fd79fcd01628c4b441b30e))
* fix style issue tih earned date text ([97f0532](https://github.com/white-label-loyalty/wll-react-sdk/commit/97f053277f5b8d48a7ddec639b7926e63db56548))


### Features

* trigger release build ([d0c8b24](https://github.com/white-label-loyalty/wll-react-sdk/commit/d0c8b24bbab83438d9167b73c083293eb916e3aa))



## [1.0.45](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.44...v1.0.45) (2024-12-20)


### Bug Fixes

* remCove default props and update Points Tile ([551d813](https://github.com/white-label-loyalty/wll-react-sdk/commit/551d8139c9fbbb812732fd4daaacbd33afb9f86b))



## [1.0.44](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.43...v1.0.44) (2024-12-20)


### Bug Fixes

* (BaseTile) Fix issues with base tile and update stories ([d49e948](https://github.com/white-label-loyalty/wll-react-sdk/commit/d49e948bd084f444403ad67d13de950bcbb7d003))
* (ci) fix deployment script ([9d55c2c](https://github.com/white-label-loyalty/wll-react-sdk/commit/9d55c2ca2514d4a2d0b4d1e00067e72c90a6b3ea))
* cleanup remaining files ([254e933](https://github.com/white-label-loyalty/wll-react-sdk/commit/254e933be6eb7f4eb627105c9c7e44fd84b5fcc7))


### Features

* trigger release ([4c41e90](https://github.com/white-label-loyalty/wll-react-sdk/commit/4c41e902a4cb0535f78a210acf7c4019407d2956))



## [1.0.42](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.41...v1.0.42) (2024-12-06)


### Bug Fixes

* (BaseBanner) pass undefined rather than not passing anything ([ec23ae8](https://github.com/white-label-loyalty/wll-react-sdk/commit/ec23ae865c3503e1c8b9612acf6fd65f9f684a97))
* (Tiles) Fixes grid half tiles and added loyalty based stories ([256f392](https://github.com/white-label-loyalty/wll-react-sdk/commit/256f392f90ebb2c0a639f362ec244f35d20b421a))
* (Tiles) Resolve grid layout issues with mixed tile sizes ([44645cd](https://github.com/white-label-loyalty/wll-react-sdk/commit/44645cd5e2a9e5e628c398f4d9cb5ba5fb1cd98a))
* add --exit-once-uploaded to chromatic ([cb44410](https://github.com/white-label-loyalty/wll-react-sdk/commit/cb44410f817135c6509ceed3018b1b060ba34b7a))
* always pass the tile ([3dc2b35](https://github.com/white-label-loyalty/wll-react-sdk/commit/3dc2b35c445a4f0ec39c2fb3a2d4c37d450c509c))
* handle reward and reward category tiles better ([648de3b](https://github.com/white-label-loyalty/wll-react-sdk/commit/648de3bef4449ebc37b5f9acc5570a509ba59333))
* pass tile in banner tile cta ([27ec0fa](https://github.com/white-label-loyalty/wll-react-sdk/commit/27ec0fae945781e7c25463a61a56d19a37d72a43))


### Features

* (RewardTile & RewardCategoryTile) add navigation handlers for reward and rewardcategory tiles ([d41383a](https://github.com/white-label-loyalty/wll-react-sdk/commit/d41383a0e17ef5685c54e299a6dd19cbd73dd7fb))



## [1.0.41](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.40...v1.0.41) (2024-12-05)


### Bug Fixes

* (Tiles) Fixes grid half tiles and added loyalty based stories ([f0134e9](https://github.com/white-label-loyalty/wll-react-sdk/commit/f0134e926a0b48d05fcaf20a4768942245990169))



## [1.0.40](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.38...v1.0.40) (2024-12-05)



## [1.0.40](https://github.com/white-label-loyalty/wll-react-sdk/compare/v1.0.38...v1.0.40) (2024-12-05)



