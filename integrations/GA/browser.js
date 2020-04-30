import logger from "../../utils/logUtil";
class GA {
  constructor(config) {
    this.trackingID = config.trackingID; //UA-149602794-1
    this.name = "GA";
  }

  init() {
    (function(i, s, o, g, r, a, m) {
      i["GoogleAnalyticsObject"] = r;
      (i[r] =
        i[r] ||
        function() {
          (i[r].q = i[r].q || []).push(arguments);
        }),
        (i[r].l = 1 * new Date());
      (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(
      window,
      document,
      "script",
      "https://www.google-analytics.com/analytics.js",
      "ga"
    );

    //window.ga_debug = {trace: true};

    ga("create", this.trackingID, "auto");
    ga("send", "pageview");

    logger.debug("===in init GA===");
  }

  identify(rudderElement) {
    ga("set", "userId", rudderElement.message.anonymous_id);
    logger.debug("in GoogleAnalyticsManager identify");
  }

  track(rudderElement) {
    var eventCategory = rudderElement.message.event;
    var eventAction = rudderElement.message.event;
    var eventLabel = rudderElement.message.event;
    var eventValue = "";
    if (rudderElement.message.properties) {
      eventValue = rudderElement.message.properties.value
        ? rudderElement.message.properties.value
        : rudderElement.message.properties.revenue;
    }

    var payLoad = {
      hitType: "event",
      eventCategory: eventCategory,
      eventAction: eventAction,
      eventLabel: eventLabel,
      eventValue: eventValue
    };
    ga("send", "event", payLoad);
    logger.debug("in GoogleAnalyticsManager track");
  }

  page(rudderElement) {
    logger.debug("in GoogleAnalyticsManager page");
    var path =
      rudderElement.message.properties && rudderElement.message.properties.path
        ? rudderElement.message.properties.path
        : undefined;
    var title = rudderElement.message.properties && rudderElement.message.properties.title
        ? rudderElement.message.properties.title
        : undefined;
    var location = rudderElement.message.properties && rudderElement.message.properties.url
        ? rudderElement.message.properties.url
        : undefined;

    if (path) {
      ga("set", "page", path);
    }

    if (title) {
      ga("set", "title", title);
    }

    if (location) {
      ga("set", "location", location);
    }

    ga("send", "pageview");
  }

  isLoaded() {
    logger.debug("in GA isLoaded");
    return !!window.gaplugins;
  }

  isReady() {
    return !!window.gaplugins;
  }
}

export { GA };
