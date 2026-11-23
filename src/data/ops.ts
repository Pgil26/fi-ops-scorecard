/** Floral Image FI Ops snapshot.
 * Coverage day: Friday Nov 20, 2026 (America/New_York). Monday runs cover Friday.
 * Salesforce figures pulled Mon Nov 23, 2026 ~5:35 AM ET (live MCP).
 * RouteMap Daily Changeover: Fri Nov 20 rows from routemap_2026-11-20.csv (pulled Mon Nov 23 ~4:38 AM ET). Pairs are customers / units. MTD is Nov MTD as of Mon Nov 23 ~4:38 AM ET (includes Sat Nov 21 Austin 1/6; Sunday had no activity).
 * Geotab: Fri Nov 20 from geotab-daily-start-end-local-2026-11-20.csv (written Mon Nov 23 ~4:26 AM ET).
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
  sales: "Mon Nov 23, 2026 · ~5:35 AM ET",
  routeDay: "Fri Nov 20",
  routePulled: "Mon Nov 23 · ~4:38 AM ET",
  routeMtdLabel: "Nov MTD as of Mon Nov 23 ~4:38 AM ET",
  geotabDay: "Fri Nov 20",
  geotabPulled: "Mon Nov 23 · ~4:26 AM ET",
  sfRefreshDay: "Fri Nov 20",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 16 – Fri Nov 20 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1314, inactive: 206, weekly: 15883.76, monthly: 68773.13, trial: 3, collectTrial: 0, pending: 9, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 29, cancelUnits: 39, cancelAmt: 1638.95, cancelMoved: 10, sfDayUnits: 55, sfDayRows: 22, sfMtdUnits: 907, sfMtdRows: 596, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 22, routeMtdUnits: 41, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 735, inactive: 114, weekly: 10487.33, monthly: 45411.05, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 6, lostWeekDeals: 3, lostWeekUnits: 3, cancelDeals: 6, cancelUnits: 13, cancelAmt: 607.51, cancelMoved: 0, sfDayUnits: 33, sfDayRows: 20, sfMtdUnits: 306, sfMtdRows: 175, routeDayCustomers: 21, routeDayUnits: 34, routeDayWindow: '9:40 AM–1:42 PM', routeMtdCustomers: 178, routeMtdUnits: 310, routeMtdPending: 1 },
  { id: "atlanta", name: "Atlanta", totalUnits: 539, inactive: 57, weekly: 11023.88, monthly: 47742.52, trial: 0, collectTrial: 0, pending: 2, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 10, lostWeekDeals: 1, lostWeekUnits: 4, cancelDeals: 4, cancelUnits: 6, cancelAmt: 330, cancelMoved: 3, sfDayUnits: 5, sfDayRows: 4, sfMtdUnits: 338, sfMtdRows: 201, routeDayCustomers: 4, routeDayUnits: 5, routeDayWindow: '7:50 AM–8:34 AM', routeMtdCustomers: 203, routeMtdUnits: 340, routeMtdPending: 1 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 8, sfDayRows: 5, sfMtdUnits: 341, sfMtdRows: 195, routeDayCustomers: 6, routeDayUnits: 11, routeDayWindow: '9:54 AM–1:49 PM', routeMtdCustomers: 223, routeMtdUnits: 381, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 488, inactive: 28, weekly: 7975.30, monthly: 34532.62, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 805, cancelMoved: 1, sfDayUnits: 13, sfDayRows: 9, sfMtdUnits: 305, sfMtdRows: 166, routeDayCustomers: 8, routeDayUnits: 12, routeDayWindow: '9:14 AM–12:16 PM', routeMtdCustomers: 155, routeMtdUnits: 289, routeMtdPending: 1 },
  { id: "austin", name: "Austin", totalUnits: 474, inactive: 52, weekly: 7203.24, monthly: 31189.66, trial: 10, collectTrial: 0, pending: 21, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 8, lostWeekDeals: 1, lostWeekUnits: 7, cancelDeals: 5, cancelUnits: 10, cancelAmt: 540, cancelMoved: 0, sfDayUnits: 18, sfDayRows: 6, sfMtdUnits: 308, sfMtdRows: 198, routeDayCustomers: 6, routeDayUnits: 18, routeDayWindow: '12:37 PM–2:09 PM', routeMtdCustomers: 198, routeMtdUnits: 314, routeMtdPending: 2 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 477, inactive: 46, weekly: 8400.42, monthly: 36373.22, trial: 2, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 3, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 8, lostMonthUnits: 13, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 310, sfMtdRows: 240, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 416, inactive: 52, weekly: 7109.10, monthly: 30784, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 5, lostWeekDeals: 1, lostWeekUnits: 4, cancelDeals: 2, cancelUnits: 4, cancelAmt: 255, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 364, sfMtdRows: 220, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 219, routeMtdUnits: 364, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 418, inactive: 42, weekly: 6078.47, monthly: 26319.31, trial: 12, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 5, lostWeekDeals: 2, lostWeekUnits: 2, cancelDeals: 1, cancelUnits: 2, cancelAmt: 90, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 370, sfMtdRows: 225, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 224, routeMtdUnits: 368, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 417, inactive: 54, weekly: 6449.58, monthly: 27925.97, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 30, sfDayRows: 4, sfMtdUnits: 338, sfMtdRows: 157, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 372, inactive: 28, weekly: 5955.88, monthly: 25788.56, trial: 1, collectTrial: 0, pending: 1, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 22, lostMonthUnits: 30, lostWeekDeals: 1, lostWeekUnits: 2, cancelDeals: 7, cancelUnits: 13, cancelAmt: 660, cancelMoved: 6, sfDayUnits: 10, sfDayRows: 8, sfMtdUnits: 235, sfMtdRows: 163, routeDayCustomers: 8, routeDayUnits: 10, routeDayWindow: '9:34 AM–1:07 PM', routeMtdCustomers: 164, routeMtdUnits: 240, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 20, sfDayRows: 6, sfMtdUnits: 135, sfMtdRows: 74, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 383, inactive: 52, weekly: 5277.93, monthly: 22853.95, trial: 0, collectTrial: 0, pending: 5, wonMonth: 8, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 4, cancelAmt: 270, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 311, sfMtdRows: 142, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 142, routeMtdUnits: 311, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 351, inactive: 87, weekly: 4666.25, monthly: 20207.40, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 4, cancelUnits: 8, cancelAmt: 345, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 318, inactive: 31, weekly: 4328.43, monthly: 18741.38, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 7, cancelAmt: 376.16, cancelMoved: 4, sfDayUnits: 26, sfDayRows: 14, sfMtdUnits: 233, sfMtdRows: 127, routeDayCustomers: 14, routeDayUnits: 26, routeDayWindow: '10:51 AM–1:02 PM', routeMtdCustomers: 130, routeMtdUnits: 237, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 286, inactive: 15, weekly: 4791.68, monthly: 20747.52, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 4, cancelAmt: 220, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 39, sfMtdRows: 16, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 16, routeMtdUnits: 39, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 12, weekly: 4693.69, monthly: 20322.63, trial: 14, collectTrial: 0, pending: 12, wonMonth: 2, wonWeek: 0, trialsMonth: 5, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 60, cancelMoved: 0, sfDayUnits: 18, sfDayRows: 12, sfMtdUnits: 213, sfMtdRows: 141, routeDayCustomers: 12, routeDayUnits: 17, routeDayWindow: '10:07 AM–2:48 PM', routeMtdCustomers: 140, routeMtdUnits: 200, routeMtdPending: 12 },
  { id: "vancouver", name: "Vancouver", totalUnits: 227, inactive: 21, weekly: 2979.08, monthly: 12899.14, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 20, lostWeekDeals: 3, lostWeekUnits: 20, cancelDeals: 2, cancelUnits: 2, cancelAmt: 91.39, cancelMoved: 2, sfDayUnits: 23, sfDayRows: 16, sfMtdUnits: 104, sfMtdRows: 63, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 221, inactive: 18, weekly: 3455.28, monthly: 14961.82, trial: 52, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 47, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 2, cancelUnits: 2, cancelAmt: 105, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 184, sfMtdRows: 103, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 104, routeMtdUnits: 185, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 142, inactive: 7, weekly: 2330.30, monthly: 10089.24, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 4, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 12, cancelUnits: 31, cancelAmt: 1435, cancelMoved: 5, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 141, sfMtdRows: 81, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 81, routeMtdUnits: 141, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 46, inactive: 1, weekly: 1053.25, monthly: 4560.95, trial: 25, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 1, trialsMonth: 4, trialsWeek: 2, lostMonthDeals: 4, lostMonthUnits: 7, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 8, sfDayRows: 4, sfMtdUnits: 40, sfMtdRows: 31, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "8:58 AM", stop: "4:51 PM", onRoad: "7h 53m", trips: 14, miles: 71.0, flag: "ok", left: 19.8, width: 52.6 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "7:57 AM", stop: "7:25 PM", onRoad: "11h 28m", trips: 11, miles: 56.0, flag: "ok", left: 13.0, width: 76.4 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "11:30 AM", stop: "11:31 AM", onRoad: "0h 1m", trips: 1, miles: 0.0, flag: "short", left: 36.7, width: 0.1 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "6:53 AM", stop: "6:16 PM", onRoad: "11h 23m", trips: 14, miles: 127.0, flag: "ok", left: 5.9, width: 75.9 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:46 AM", stop: "5:34 PM", onRoad: "7h 48m", trips: 23, miles: 110.0, flag: "ok", left: 25.1, width: 52.0 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "7:59 AM", stop: "11:30 AM", onRoad: "3h 31m", trips: 6, miles: 79.0, flag: "ok", left: 13.2, width: 23.4 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "10:10 AM", stop: "2:10 PM", onRoad: "4h 0m", trips: 10, miles: 83.0, flag: "ok", left: 27.8, width: 26.7 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "7:15 AM", stop: "4:54 PM", onRoad: "9h 39m", trips: 13, miles: 90.0, flag: "ok", left: 8.3, width: 64.3 },
  { id: "fw-van-non-active", name: "FW van non active", locationId: null, zone: "CT", start: "8:18 AM", stop: "8:19 AM", onRoad: "0h 1m", trips: 1, miles: 0.0, flag: "short", left: 15.3, width: 0.1 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Fri Nov 20",
  status: "ok",
  rows: [
    { location: "Phoenix", count: 11 },
    { location: "Fort Lauderdale (mismatch: detail report 12 stops / 18 photos vs RouteMap 12/17)", count: 1 },
    { location: "Orange County (partial: 6 of 8 stops checked)", count: 0 },
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
