import * as HubSpot from "./HubSpot";
import * as GA from "./GA";
import * as Hotjar from "./Hotjar";
import * as GoogleAds from "./GoogleAds";
// import * as Heap from "./Heap";

let integrations = {
  HS: HubSpot.default,
  GA: GA.default,
  HOTJAR: Hotjar.default,
  GOOGLEADS: GoogleAds.default
  // HEAP: Heap.default
};

export { integrations };
