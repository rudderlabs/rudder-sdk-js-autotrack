<p align="center">
  <a href="https://rudderstack.com/">
    <img src="https://user-images.githubusercontent.com/59817155/121357083-1c571300-c94f-11eb-8cc7-ce6df13855c9.png">
  </a>
</p>

<p align="center"><b>The Customer Data Platform for Developers</b></p>

<p align="center">
  <b>
    <a href="https://rudderstack.com">Website</a>
    ·
    <a href="https://rudderstack.com/docs/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk/">Documentation</a>
    ·
    <a href="https://rudderstack.com/join-rudderstack-slack-community">Community Slack</a>
  </b>
</p>

---

# RudderStack JavaScript SDK

The [**RudderStack**](https://rudderstack.com/) JavaScript SDK leverages the `rudder-analytics.js` library to track and send user events from your website to RudderStack. You can then further transform and route this event data to the destination platform of your choice.

> For detailed documentation on the RudderStack JavaScript SDK, click [**here**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk).

<br>

| **IMPORTANT**: The [**Autotrack**](#autotrack) feature for the RudderStack JavaScript SDK has been deprecated and it will be removed soon. |
| :-------------------------------------------- |

## Installing the JavaScript SDK

To integrate the JavaScript SDK with your website, place the following code snippet in the `<head>` section of your website.

```javascript
<script type="text/javascript">
!function(){var e=window.rudderanalytics=window.rudderanalytics||[];e.methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],e.factory=function(t){return function(){var r=Array.prototype.slice.call(arguments);return r.unshift(t),e.push(r),e}};for(var t=0;t<e.methods.length;t++){var r=e.methods[t];e[r]=e.factory(r)}e.loadJS=function(e,t){var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a)},e.loadJS(),
e.load(<WRITE_KEY>,<DATA_PLANE_URL>),
e.page()}();
</script>
```
<br>

> The above snippet lets you integrate the SDK with your website and load it asynchronously to keep your page load time unaffected.

To load `rudder-analytics.js` on to your page synchronously, you can refer to the minified or non-minified versions of the code in the following sections:

### Minified code

```html
<script>
rudderanalytics=window.rudderanalytics=[];for(var methods=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],i=0;i<methods.length;i++){var method=methods[i];rudderanalytics[method]=function(a){return function(){rudderanalytics.push([a].concat(Array.prototype.slice.call(arguments)))}}(method)}rudderanalytics.load(<WRITE_KEY>,<DATA_PLANE_URL>),rudderanalytics.page();
</script>

<script src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js"></script>
```

### Non-minified code

```html
<script>
  rudderanalytics = window.rudderanalytics = [];
  var methods = [
    "load",
    "page",
    "track",
    "identify",
    "alias",
    "group",
    "ready",
    "reset",
    "getAnonymousId",
    "setAnonymousId",
  ];
  for (var i = 0; i < methods.length; i++) {
    var method = methods[i];
    rudderanalytics[method] = (function (methodName) {
      return function () {
        rudderanalytics.push(
          [methodName].concat(Array.prototype.slice.call(arguments))
        );
      };
    })(method);
  }
  rudderanalytics.load(<WRITE_KEY>, <DATA_PLANE_URL>);
  //For example,
  //rudderanalytics.load("1Qb1F3jSWv0eKFBPZcrM7ypgjVo", "http://localhost:8080");
  rudderanalytics.page();
</script>

<script src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js"></script>
```

In all the above versions, there is an explicit `page` call at the end. This is added to ensure that whenever the SDK loads in a page, a `page` call is sent. You can remove this call completely or modify it with the extra page properties to suit your requirement. You can also add `page` calls in your application in places not tied directly to page load, e.g., virtual page views, page renders on route change such as in SPAs, etc.

### Write key and data plane URL

To integrate and initialize the JavaScript SDK, you will need the source write key and the data plane URL.

- To get the source write key, follow [**this guide**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack/sending-test-events#get-the-source-write-key).
- To get the data plane URL, follow [**this guide**](https://docs.rudderstack.com/get-started/installing-and-setting-up-rudderstack#what-is-a-data-plane-url-where-do-i-get-it).
	
### Alternative installation using NPM

Although we recommend using the snippets mentioned above to use the JavaScript SDK with your website, you can also use this [**NPM module**](https://www.npmjs.com/package/rudder-sdk-js) to package RudderStack directly into your project.

To install the SDK via npm, run the following command:

```bash
npm install rudder-sdk-js --save
```

**Note that this NPM module is only meant to be used for a browser installation**. If you want to integrate RudderStack with your Node.js application, refer to the [**RudderStack Node.js repository**](https://github.com/rudderlabs/rudder-sdk-node).
<br><br>

**IMPORTANT**: Since the module exports the [**related APIs**](#exported-apis) on an already-defined object combined with the Node.js module caching, you should run the following code snippet only once and use the exported object throughout your project:

```javascript
import * as rudderanalytics from "rudder-sdk-js";
rudderanalytics.ready(() => {
  console.log("we are all set!!!");
});
rudderanalytics.load(<WRITE_KEY>, <DATA_PLANE_URL>);
export { rudderanalytics };
```

You can also do this with **ES5** using the `require` method, as shown:

```javascript
var rudderanalytics = require("rudder-sdk-js");
rudderanalytics.load(<WRITE_KEY>, <DATA_PLANE_URL>);
exports.rudderanalytics = rudderanalytics;
```

For destinations where you don't want the SDK to load the third-party scripts separately, modify the `load` call as shown:

```javascript
rudderanalytics.load(<YOUR_WRITE_KEY>, <DATA_PLANE_URL>, {loadIntegration:  false})
```

> For more information on the `load()` method, refer to the detailed [**JavaScript SDK documentation**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk).

A few important things to note:

- The SDK expects the destination global queue or function for pushing the events is already present for the particular destination/s.
- Currently, `loadIntegration` is supported only for Amplitude and Google Analytics.
- The JavaScript SDK expects `window.amplitude` and `window.ga` to be already defined by the user separately for the sending the events to these destinations.

### Exported APIs

The APIs exported by the module are:

- `load`
- `ready`
- `identify`
- `alias`
- `page`
- `track`
- `group`
- `reset`
- `getAnonymousId`
- `setAnonymousId`


### Sample implementations

Refer to the following projects for a detailed walk-through of the above steps:

- [**Sample Angular project**](https://github.com/rudderlabs/rudder-analytics-angular)
- [**Sample React project**](https://github.com/rudderlabs/rudder-analytics-react)

### Supported browser versions

| **Browser**         | **Supported Versions** |
| :------------------ | :--------------------- |
| Safari              | v7 or later            |
| IE                  | v10 or later           |
| Edge                | v15 or later           |
| Mozilla Firefox     | v40 or later           |
| Chrome              | v37 or later           |
| Opera               | v23 or later           |
| Yandex              | v14.12 or later        |

> If the SDK does not work on the browser versions that you are targeting, verify if adding the browser polyfills to your application solves the issue.

## Identifying users

The `identify` call lets you identify a visiting user and associate them to their actions. It also lets you record the traits about them like their name, email address, etc.

A sample `identify()` call is shown below:

```javascript
rudderanalytics.identify(
  "12345", {
    email: "name@domain.com"
  }, {
    page: {
      path: "",
      referrer: "",
      search: "",
      title: "",
      url: "",
    },
  },
  () => {
    console.log("in identify call");
  }
);
```

In the above example, the user-related information like the `userId` and `email` along with the [**contextual information**](https://docs.rudderstack.com/rudderstack-api/api-specification/rudderstack-spec/common-fields#javascript-sdk) is captured.


> There is no need to call `identify()` for anonymous visitors to your website. Such visitors are automatically assigned an `anonymousId`.

For more information on how to use the `identify` call, refer to the [**JavaScript SDK documentation**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk).

## Tracking user actions

The `track` call lets you record the customer events, i.e. the actions that they perform, along with any associated properties.

A sample `track` call is shown below:

```javascript
rudderanalytics.track(
  "test track event GA3", {
    revenue: 30,
    currency: "USD",
    user_actual_id: 12345,
  },
  () => {
    console.log("in track call");
  }
);
```

In the above example, the `track` method tracks the user event ‘**test track event GA3**’ and information such as the `revenue`, `currency`, `anonymousId`.

> You can use the `track` method to track various success metrics for your website like user signups, item purchases, article bookmarks, and more.

## The `ready` API

There are cases when you may want to tap into the features provided by the end-destination SDKs to enhance tracking and other functionalities. The JavaScript SDK exposes a `ready` API with a `callback` parameter that fires when the SDK is done initializing itself and the other third-party native SDK destinations.

An example is shown in the following snippet:

```javascript
rudderanalytics.ready(() => {
  console.log("we are all set!!!");
});
```

> For more information on the other supported methods, refer to the [**JavaScript SDK APIs**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#supported-apis).

## Autotrack

| **IMPORTANT**: The Autotrack feature for the RudderStack JavaScript SDK has been deprecated and it will soon be removed. |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

It may happen that the need arises to track most of user interactions with a web-app. It becomes hard for a developer to capture these DOM interactions and make `track` calls for all. The autotrack feature of the RudderStack JavaScript SDK lets you track all the user interactions related to clicks, changes, and submissions (`click` | `change` | `submit`) automatically. The data that is generated as a result will be verbose and to make sense of it, you can leverage the RudderStack [**transformations**](https://rudderstack.com/docs/transformations/) to build specific use-cases, like monitoring user journeys.

To enable autotracking, make the `load` call as shown:

```javascript
rudderanalytics.load("WRITE_KEY", "DATA_PLANE_URL", {useAutoTracking:  true});
```

### Security

**IMPORTANT**: While we have set a bunch of safeguards around collecting sensitive information (as documented below), it is possible that some sensitive data (particularly passwords) can still be captured for certain React apps, or a number of password manager browser extensions which store passwords in the attributes in the DOM. 

This issue was first reported for [**MixPanel**](https://techcrunch.com/2018/02/05/mixpanel-passwords/) and also documented [**here**](https://freedom-to-tinker.com/2018/02/26/no-boundaries-for-credentials-password-leaks-to-mixpanel-and-session-replay-companies/).

|**Use the autotrack feature after thoroughly testing it on your application. RudderStack doesn't persist any of the data, however it may end up in your downstream destinations, including your data warehouse.** |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |


By default, the SDK does not track hidden passwords and the elements of type input, select, or text-areas. So the events like `click | change | submit` on these elements won’t get tracked

**Note**: If an element with class `rudder-include` is present, that element becomes eligible for tracking.

By default, the SDK does not capture any DOM element **values**. To start capturing values, e.g. form field values while submitting the form, whitelist them using any attribute of the element for which you want to send values. 

For example, to track the values for all the elements containing the attribute "CLASS_ATTR_NAME", load the SDK as shown:

```javascript
rudderanalytics.load(WRITE_KEY, DATA_PLANE_URL, {useAutoTracking:  true, valTrackingList: ["CLASS_ATTR_NAME"]});
```

The SDK tracks the element attributes and text elements as properties of the DOM event. It removes the attributes that contain **sensitive** information such as credit card number, SSN, PAN, etc.

If an element with class `rudder-no-track` is present in the DOM, the SDK will **not track on that node along with any child nodes in the DOM tree**.

**Note**: To use AutoTrack functionality, use the SDK from **https://cdn.rudderlabs.com/v1/rudder-analytics-autotrack.min.js** in the above examples.

## [](https://github.com/rudderlabs/rudder-sdk-js/blob/master/README.md#the-ready-api)The `ready` API

There are cases when you may want to tap into the features provided by the end-destination SDKs to enhance tracking and other functionalities. The JavaScript SDK exposes a `ready` API with a `callback` parameter that fires when the SDK is done initializing itself and the other third-party native SDK destinations.

An example is shown in the following snippet:

```javascript
rudderanalytics.ready(() => {
  console.log("we are all set!!!");
});
```

> For more information on the other supported methods, refer to the [**JavaScript SDK APIs**](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk#supported-apis).


## Self-hosted control plane

If you are using a device mode destination like Heap, FullStory, etc., the JavaScript SDK needs to fetch the required configuration from the [**control plane**](https://docs.rudderstack.com/get-started/rudderstack-architecture#control-plane).

If you are self-hosting the control plane using the [**RudderStack Control Plane Lite**](https://docs.rudderstack.com/get-started/control-plane-lite#what-is-the-control-plane-url) utility, your `load` call will look like the following:

```javascript
rudderanalytics.load(<WRITE_KEY>, <DATA_PLANE_URL>, {
  configUrl: <CONTROL_PLANE_URL>,
});
```

> More information on how to get the `CONTROL_PLANE_URL` can be found [**here**](https://docs.rudderstack.com/get-started/control-plane-lite#what-is-the-control-plane-url).

| **For detailed technical documentation and troubleshooting guide on the RudderStack’s JavaScript SDK, check out our [docs](https://docs.rudderstack.com/stream-sources/rudderstack-sdk-integration-guides/rudderstack-javascript-sdk).** |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

## [](https://github.com/rudderlabs/rudder-sdk-js/blob/master/README.md#adding-your-own-integrations)Adding your own integrations

You can start adding integrations of your choice for sending the data through their respective web (JavaScript) SDKs.

### How to build the SDK

- Look for run scripts in the `package.json` file for getting the browser minified and non-minified builds. The builds are updated in the `dist` folder of the directory. Among the others, some of the important ones are:

  - `npm run buildProdBrowser`: This outputs **rudder-analytics.min.js**.
  - `npm run buildProdBrowserBrotli`: This outputs two files - **rudder-analytics.min.br.js** (the original minified file, same as above) and **rudder-analytics.min.br.js.br** (the Brotli-compressed file).
  - `npm run buildProdBrowserGzip`: This outputs two files, **rudder-analytics.min.gzip.js** (the original minified file, same as above) and **rudder-analytics.min.gzip.js.gz** (the gzipped compressed file).

> We use **rollup** to build our SDKs. The configuration for it is present in `rollup.config.js` in the repo directory.

- For adding or removing integrations, modify the imports in `index.js` under the `integrations` folder.



## Contact us

For more information on any of the sections covered in this readme, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
