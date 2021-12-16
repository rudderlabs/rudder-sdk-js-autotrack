# [](https://github.com/rudderlabs/rudder-sdk-js/blob/master/README.md#autotrack)Autotrack

| **IMPORTANT**: The Autotrack feature for the RudderStack JavaScript SDK has been deprecated and it will soon be removed. |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

It may happen that the need arises to track most of user interactions with a web-app. It becomes hard for a developer to capture these DOM interactions and make `track` calls for all. The autotrack feature of the RudderStack JavaScript SDK lets you track all the user interactions related to clicks, changes, and submissions (`click` | `change` | `submit`) automatically. The data that is generated as a result will be verbose and to make sense of it, you can leverage the RudderStack [**transformations**](https://rudderstack.com/docs/transformations/) to build specific use-cases, like monitoring user journeys.

To enable autotracking, make the `load` call as shown:

```javascript
rudderanalytics.load("WRITE_KEY", "DATA_PLANE_URL", {useAutoTracking:  true});
```

## Security

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

## Contact us

For more information on any of the sections covered in this readme, you can [**contact us**](mailto:%20docs@rudderstack.com) or start a conversation on our [**Slack**](https://resources.rudderstack.com/join-rudderstack-slack) channel.
