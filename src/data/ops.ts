/** Floral Image FI Ops snapshot.
 * Coverage day: Thursday Oct 29, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Fri Oct 30, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Thu Oct 29 rows from routemap_2026-10-29.csv (pulled Fri Oct 30 ~4:42 AM ET). Pairs are customers / units. MTD is Oct MTD as of Oct 30 ~4:42 AM ET.
 * Geotab: Thu Oct 29 from geotab-daily-start-end-local-2026-10-29.csv (written Fri Oct 30 ~4:27 AM ET).
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
  sales: "Fri Oct 30, 2026 · ~5:30 AM ET",
  routeDay: "Thu Oct 29",
  routePulled: "Fri Oct 30 · ~4:42 AM ET",
  routeMtdLabel: "Oct MTD as of Oct 30 ~4:42 AM ET",
  geotabDay: "Thu Oct 29",
  geotabPulled: "Fri Oct 30 · ~4:27 AM ET",
  sfRefreshDay: "Thu Oct 29",
  monthLabel: "October 2026",
  weekLabel: "Mon–Thu Oct 26–29 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1340, inactive: 214, weekly: 16133.35, monthly: 69853.77, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 2, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 18, cancelUnits: 23, cancelAmt: 962.30, cancelMoved: 8, sfDayUnits: 56, sfDayRows: 38, sfMtdUnits: 1033, sfMtdRows: 666, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 741, inactive: 117, weekly: 10509.15, monthly: 45505.47, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 13, cancelUnits: 27, cancelAmt: 1423.30, cancelMoved: 3, sfDayUnits: 6, sfDayRows: 6, sfMtdUnits: 438, sfMtdRows: 283, routeDayCustomers: 3, routeDayUnits: 3, routeDayWindow: '08:59 AM–10:11 AM', routeMtdCustomers: 286, routeMtdUnits: 433, routeMtdPending: 10 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 57, weekly: 11497.58, monthly: 49794.94, trial: 6, collectTrial: 0, pending: 7, wonMonth: 11, wonWeek: 0, trialsMonth: 6, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 11, lostWeekDeals: 1, lostWeekUnits: 2, cancelDeals: 2, cancelUnits: 6, cancelAmt: 355, cancelMoved: 2, sfDayUnits: 59, sfDayRows: 37, sfMtdUnits: 485, sfMtdRows: 299, routeDayCustomers: 30, routeDayUnits: 43, routeDayWindow: '06:54 AM–01:55 PM', routeMtdCustomers: 289, routeMtdUnits: 464, routeMtdPending: 1 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 20, lostWeekDeals: 1, lostWeekUnits: 11, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 35, sfDayRows: 17, sfMtdUnits: 410, sfMtdRows: 221, routeDayCustomers: 19, routeDayUnits: 38, routeDayWindow: '10:24 AM–04:02 PM', routeMtdCustomers: 249, routeMtdUnits: 449, routeMtdPending: 1 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 374, sfMtdRows: 221, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 187, routeMtdUnits: 322, routeMtdPending: 2 },
  { id: "austin", name: "Austin", totalUnits: 481, inactive: 58, weekly: 7228.20, monthly: 31297.68, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 11, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 38, sfDayRows: 13, sfMtdUnits: 399, sfMtdRows: 230, routeDayCustomers: 13, routeDayUnits: 38, routeDayWindow: '10:52 AM–02:54 PM', routeMtdCustomers: 220, routeMtdUnits: 386, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 485, inactive: 48, weekly: 8521.80, monthly: 36898.82, trial: 3, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 1, trialsMonth: 2, trialsWeek: 1, lostMonthDeals: 6, lostMonthUnits: 8, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 19, sfDayRows: 10, sfMtdUnits: 407, sfMtdRows: 310, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7247.14, monthly: 31381.72, trial: 2, collectTrial: 0, pending: 7, wonMonth: 0, wonWeek: 0, trialsMonth: 2, trialsWeek: 2, lostMonthDeals: 6, lostMonthUnits: 7, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 378, sfMtdRows: 226, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 224, routeMtdUnits: 379, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6203.18, monthly: 26859.43, trial: 19, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 8, trialsWeek: 5, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 378, sfMtdRows: 232, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 217, routeMtdUnits: 353, routeMtdPending: 1 },
  { id: "san-diego", name: "San Diego", totalUnits: 416, inactive: 54, weekly: 6424.63, monthly: 27817.95, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 2, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 1, sfDayUnits: 14, sfDayRows: 2, sfMtdUnits: 419, sfMtdRows: 185, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 391, inactive: 31, weekly: 6228.62, monthly: 26969.61, trial: 1, collectTrial: 0, pending: 1, wonMonth: 9, wonWeek: 2, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 10, lostMonthUnits: 14, lostWeekDeals: 2, lostWeekUnits: 2, cancelDeals: 3, cancelUnits: 3, cancelAmt: 145, cancelMoved: 2, sfDayUnits: 34, sfDayRows: 26, sfMtdUnits: 338, sfMtdRows: 240, routeDayCustomers: 27, routeDayUnits: 36, routeDayWindow: '09:26 AM–02:35 PM', routeMtdCustomers: 277, routeMtdUnits: 377, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 1, sfDayUnits: 59, sfDayRows: 25, sfMtdUnits: 282, sfMtdRows: 143, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 376, inactive: 49, weekly: 5211.41, monthly: 22565.89, trial: 7, collectTrial: 0, pending: 4, wonMonth: 9, wonWeek: 3, trialsMonth: 7, trialsWeek: 5, lostMonthDeals: 7, lostMonthUnits: 22, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 313, sfMtdRows: 139, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 140, routeMtdUnits: 315, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 356, inactive: 88, weekly: 4732.78, monthly: 20495.46, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 9, cancelAmt: 480, cancelMoved: 5, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 192, routeMtdUnits: 247, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 325, inactive: 31, weekly: 4453.56, monthly: 19283.16, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 13, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 45, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 288, sfMtdRows: 154, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 158, routeMtdUnits: 292, routeMtdPending: 1 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 5, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 271, sfMtdRows: 170, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 169, routeMtdUnits: 268, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 4, weekly: 4833.41, monthly: 20927.55, trial: 15, collectTrial: 0, pending: 10, wonMonth: 15, wonWeek: 0, trialsMonth: 11, trialsWeek: 3, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 257, sfMtdRows: 176, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 150, routeMtdUnits: 220, routeMtdPending: 5 },
  { id: "vancouver", name: "Vancouver", totalUnits: 246, inactive: 21, weekly: 3252.97, monthly: 14085.07, trial: 0, collectTrial: 0, pending: 0, wonMonth: 3, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 9, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 4, sfDayRows: 3, sfMtdUnits: 204, sfMtdRows: 127, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 215, inactive: 16, weekly: 3377.10, monthly: 14623.35, trial: 7, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 6, lostWeekDeals: 4, lostWeekUnits: 6, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 191, sfMtdRows: 102, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 103, routeMtdUnits: 192, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 955, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 144, sfMtdRows: 85, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 80, routeMtdUnits: 138, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 48, inactive: 1, weekly: 1117.56, monthly: 4839.41, trial: 26, collectTrial: 0, pending: 0, wonMonth: 10, wonWeek: 0, trialsMonth: 10, trialsWeek: 6, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 32, sfMtdRows: 26, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:42 AM", stop: "5:05 PM", onRoad: "7h 23m", trips: 18, miles: 119.9, flag: "ok", left: 24.7, width: 49.2 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "8:09 AM", stop: "3:23 PM", onRoad: "7h 14m", trips: 22, miles: 122.0, flag: "ok", left: 14.3, width: 48.2 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "11:10 AM", stop: "6:17 PM", onRoad: "7h 7m", trips: 10, miles: 108.3, flag: "ok", left: 34.4, width: 47.4 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "7:01 AM", stop: "2:10 PM", onRoad: "7h 9m", trips: 11, miles: 104.6, flag: "ok", left: 6.8, width: 47.7 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "10:57 AM", stop: "10:59 AM", onRoad: "0h 2m", trips: 1, miles: 0.0, flag: "short", left: 33.0, width: 0.2 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "6:29 AM", stop: "3:11 PM", onRoad: "8h 42m", trips: 25, miles: 160.2, flag: "ok", left: 3.2, width: 58.0 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:44 AM", stop: "5:47 PM", onRoad: "8h 3m", trips: 26, miles: 81.1, flag: "ok", left: 24.9, width: 53.7 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "9:11 AM", stop: "1:20 PM", onRoad: "4h 9m", trips: 3, miles: 71.0, flag: "ok", left: 21.2, width: 27.7 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "7:15 AM", stop: "5:24 PM", onRoad: "10h 9m", trips: 21, miles: 120.2, flag: "ok", left: 8.3, width: 67.7 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Thu Oct 29",
  status: "ok",
  rows: [
    { location: "Atlanta", count: 4 },
    { location: "Dallas", count: 2 },
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
