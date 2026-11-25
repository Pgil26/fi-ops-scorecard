/** Floral Image FI Ops snapshot.
 * Coverage day: Tuesday Nov 24, 2026 (America/New_York). Tuesday–Friday runs cover the previous calendar day.
 * Salesforce figures pulled Wed Nov 25, 2026 ~5:35 AM ET (live MCP).
 * RouteMap Daily Changeover: Tue Nov 24 rows from routemap_2026-11-24.csv (pulled Wed Nov 25 ~4:41 AM ET). Pairs are customers / units. MTD is Nov MTD as of Wed Nov 25 ~4:41 AM ET
 * Geotab: Tue Nov 24 from geotab-daily-start-end-local-2026-11-24.csv (written Wed Nov 25 ~4:35 AM ET).
 * Units on hire = Closed Won Total Units − Inactive Units.
 * Closed won units use product Start Date, not close date.
 * sfDayUnits/sfDayRows/sfMtdUnits/sfMtdRows = Product_Refresh__c Refresh_Date_Formula__c and Refresh_Units__c (not Closed Won).
 * Open Trial stock: IsConverted=false AND Status=Trial; Collect Trial stock: Status=Collect Trial or Pending.
 * cancelAmt = row-level convertCurrency(Amount) USD (not the corporate-currency aggregate).
 */

export type LocationRow = {
  id: string;
  name: string;
  /** RouteMap label when it differs from the Salesforce owner. */
  routeName?: string;
  totalUnits: number;
  inactive: number;
  weekly: number;
  monthly: number;
  trial: number;
  collectTrial: number;
  pending: number;
  wonMonth: number;
  wonWeek: number;
  trialsMonth: number;
  trialsWeek: number;
  lostMonthDeals: number;
  lostMonthUnits: number;
  lostWeekDeals: number;
  lostWeekUnits: number;
  cancelDeals: number;
  cancelUnits: number;
  cancelAmt: number;
  /** Still in Collect/Cancel, and the stage changed in October. */
  cancelMoved: number;
  sfDayUnits: number;
  sfDayRows: number;
  sfMtdUnits: number;
  sfMtdRows: number;
  routeDayCustomers: number | null;
  routeDayUnits: number | null;
  routeDayWindow: string | null;
  routeMtdCustomers: number | null;
  routeMtdUnits: number | null;
  routeMtdPending: number | null;
};

export type VanRow = {
  id: string;
  name: string;
  locationId: string | null;
  zone: string;
  start: string;
  stop: string;
  onRoad: string;
  trips: number;
  miles: number;
  flag: "ok" | "short" | "none";
  /** Position on a 6 AM–9 PM local day, percent. */
  left: number;
  width: number;
};

export const PULLED = {
  sales: "Wed Nov 25, 2026 · ~5:35 AM ET",
  routeDay: "Tue Nov 24",
  routePulled: "Wed Nov 25 · ~4:41 AM ET",
  routeMtdLabel: "Nov MTD as of Wed Nov 25 ~4:41 AM ET",
  geotabDay: "Tue Nov 24",
  geotabPulled: "Wed Nov 25 · ~4:35 AM ET",
  sfRefreshDay: "Tue Nov 24",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 23 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1306, inactive: 205, weekly: 15789.42, monthly: 68364.65, trial: 3, collectTrial: 0, pending: 9, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 32, cancelUnits: 47, cancelAmt: 1955.56, cancelMoved: 14, sfDayUnits: 1, sfDayRows: 1, sfMtdUnits: 971, sfMtdRows: 634, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 22, routeMtdUnits: 41, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 735, inactive: 114, weekly: 10487.33, monthly: 45411.05, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 6, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 13, cancelAmt: 607.51, cancelMoved: 0, sfDayUnits: 14, sfDayRows: 11, sfMtdUnits: 385, sfMtdRows: 241, routeDayCustomers: 14, routeDayUnits: 17, routeDayWindow: '10:26 AM–1:20 PM', routeMtdCustomers: 249, routeMtdUnits: 394, routeMtdPending: 2 },
  { id: "atlanta", name: "Atlanta", totalUnits: 538, inactive: 57, weekly: 11003.92, monthly: 47656.10, trial: 0, collectTrial: 0, pending: 2, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 10, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 7, cancelAmt: 390, cancelMoved: 4, sfDayUnits: 4, sfDayRows: 4, sfMtdUnits: 437, sfMtdRows: 268, routeDayCustomers: 4, routeDayUnits: 4, routeDayWindow: '8:06 AM–9:47 AM', routeMtdCustomers: 270, routeMtdUnits: 439, routeMtdPending: 1 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 17, sfDayRows: 12, sfMtdUnits: 391, sfMtdRows: 220, routeDayCustomers: 11, routeDayUnits: 15, routeDayWindow: '9:11 AM–2:46 PM', routeMtdCustomers: 248, routeMtdUnits: 430, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 484, inactive: 27, weekly: 7930.39, monthly: 34338.18, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 12, cancelUnits: 18, cancelAmt: 940, cancelMoved: 3, sfDayUnits: 17, sfDayRows: 14, sfMtdUnits: 345, sfMtdRows: 195, routeDayCustomers: 15, routeDayUnits: 19, routeDayWindow: '10:04 AM–2:29 PM', routeMtdCustomers: 185, routeMtdUnits: 331, routeMtdPending: 1 },
  { id: "austin", name: "Austin", totalUnits: 475, inactive: 52, weekly: 7219.88, monthly: 31261.67, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 8, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 10, cancelAmt: 540, cancelMoved: 0, sfDayUnits: 26, sfDayRows: 6, sfMtdUnits: 365, sfMtdRows: 214, routeDayCustomers: 6, routeDayUnits: 26, routeDayWindow: '12:01 PM–1:58 PM', routeMtdCustomers: 213, routeMtdUnits: 365, routeMtdPending: 1 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 475, inactive: 46, weekly: 8361.24, monthly: 36203.55, trial: 2, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 9, lostMonthUnits: 15, lostWeekDeals: 1, lostWeekUnits: 2, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 26, sfDayRows: 16, sfMtdUnits: 362, sfMtdRows: 272, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 416, inactive: 52, weekly: 7109.10, monthly: 30784, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 8, lostWeekDeals: 1, lostWeekUnits: 3, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 364, sfMtdRows: 220, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 218, routeMtdUnits: 364, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 418, inactive: 42, weekly: 6078.47, monthly: 26319.31, trial: 12, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 5, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 90, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 370, sfMtdRows: 225, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 224, routeMtdUnits: 368, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 417, inactive: 54, weekly: 6449.58, monthly: 27925.97, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 338, sfMtdRows: 157, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 371, inactive: 28, weekly: 5939.25, monthly: 25716.55, trial: 1, collectTrial: 0, pending: 1, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 27, lostMonthUnits: 40, lostWeekDeals: 5, lostWeekUnits: 10, cancelDeals: 3, cancelUnits: 4, cancelAmt: 210, cancelMoved: 3, sfDayUnits: 22, sfDayRows: 13, sfMtdUnits: 285, sfMtdRows: 201, routeDayCustomers: 13, routeDayUnits: 22, routeDayWindow: '9:43 AM–1:59 PM', routeMtdCustomers: 200, routeMtdUnits: 290, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 17, sfDayRows: 11, sfMtdUnits: 187, sfMtdRows: 99, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 367, inactive: 52, weekly: 4931.96, monthly: 21356.04, trial: 0, collectTrial: 0, pending: 5, wonMonth: 13, wonWeek: 5, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 11, cancelUnits: 25, cancelAmt: 1510, cancelMoved: 8, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 311, sfMtdRows: 142, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 142, routeMtdUnits: 311, routeMtdPending: 5 },
  { id: "portland", name: "Portland", totalUnits: 351, inactive: 87, weekly: 4666.25, monthly: 20207.40, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 8, cancelAmt: 345, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 318, inactive: 31, weekly: 4328.43, monthly: 18741.38, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 7, cancelAmt: 376.16, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 275, sfMtdRows: 148, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 151, routeMtdUnits: 279, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 286, inactive: 15, weekly: 4791.68, monthly: 20747.52, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 4, cancelAmt: 220, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 39, sfMtdRows: 16, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 16, routeMtdUnits: 39, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 12, weekly: 4693.69, monthly: 20322.63, trial: 14, collectTrial: 0, pending: 12, wonMonth: 2, wonWeek: 0, trialsMonth: 5, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 60, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 213, sfMtdRows: 141, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 140, routeMtdUnits: 201, routeMtdPending: 11 },
  { id: "vancouver", name: "Vancouver", totalUnits: 227, inactive: 21, weekly: 2979.08, monthly: 12899.14, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 20, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 91.39, cancelMoved: 2, sfDayUnits: 17, sfDayRows: 14, sfMtdUnits: 143, sfMtdRows: 93, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 212, inactive: 18, weekly: 3290.61, monthly: 14248.87, trial: 52, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 47, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 11, cancelAmt: 600, cancelMoved: 5, sfDayUnits: 10, sfDayRows: 1, sfMtdUnits: 194, sfMtdRows: 104, routeDayCustomers: 1, routeDayUnits: 1, routeDayWindow: '11:50 AM–11:50 AM', routeMtdCustomers: 105, routeMtdUnits: 186, routeMtdPending: 9 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 142, inactive: 7, weekly: 2330.30, monthly: 10089.24, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 4, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 12, cancelUnits: 31, cancelAmt: 1435, cancelMoved: 5, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 141, sfMtdRows: 81, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 81, routeMtdUnits: 141, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 46, inactive: 1, weekly: 1053.25, monthly: 4560.95, trial: 27, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 0, trialsMonth: 6, trialsWeek: 2, lostMonthDeals: 4, lostMonthUnits: 7, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 42, sfMtdRows: 32, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "8:52 AM", stop: "8:36 PM", onRoad: "11h 44m", trips: 7, miles: 51.2, flag: "ok", left: 19.1, width: 78.2 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "11:30 AM", stop: "3:44 PM", onRoad: "4h 14m", trips: 10, miles: 74.4, flag: "ok", left: 36.7, width: 28.2 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "7:38 AM", stop: "8:01 PM", onRoad: "12h 23m", trips: 6, miles: 37.1, flag: "ok", left: 10.9, width: 82.6 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:25 AM", stop: "6:42 PM", onRoad: "11h 17m", trips: 4, miles: 130.2, flag: "ok", left: 9.4, width: 75.2 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "5:15 AM", stop: "11:07 AM", onRoad: "5h 52m", trips: 9, miles: 171.4, flag: "ok", left: 0, width: 34.1 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:27 AM", stop: "8:42 PM", onRoad: "11h 15m", trips: 21, miles: 133.8, flag: "ok", left: 23.0, width: 75.0 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:04 AM", stop: "4:12 PM", onRoad: "8h 8m", trips: 9, miles: 123.5, flag: "ok", left: 13.8, width: 54.2 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "8:09 AM", stop: "5:42 PM", onRoad: "9h 33m", trips: 21, miles: 183.0, flag: "ok", left: 14.3, width: 63.7 },
  { id: "fw-van-non-active", name: "FW van non active", locationId: null, zone: "CT", start: "6:50 PM", stop: "8:56 PM", onRoad: "2h 6m", trips: 2, miles: 0.1, flag: "short", left: 85.6, width: 14.0 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Tue Nov 24",
  status: "ok",
  rows: [
    { location: "Orange County", count: 3 },
    { location: "New Jersey", count: 1 },
    { location: "San Francisco", count: 1 },
    { location: "Seattle", count: 1 },
  ],
};

export function onHire(row: LocationRow) {
  return row.totalUnits - row.inactive;
}

export function findLocation(id: string | undefined) {
  if (!id) return undefined;
  return LOCATIONS.find((row) => row.id === id);
}

export const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const num = new Intl.NumberFormat("en-US");
