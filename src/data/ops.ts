/** Floral Image FI Ops snapshot.
 * Coverage day: Friday Nov 6, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Mon Nov 9, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Fri Nov 6 rows from routemap_2026-11-06.csv (pulled Mon Nov 9 ~7:17 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 6 ~7:17 AM ET.
 * Geotab: Fri Nov 6 from geotab-daily-start-end-local-2026-11-06.csv (written Mon Nov 9 ~4:21 AM ET).
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
  sales: "Mon Nov 9, 2026 · ~5:30 AM ET",
  routeDay: "Fri Nov 6",
  routePulled: "Mon Nov 9 · ~7:17 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 6 ~7:17 AM ET",
  geotabDay: "Fri Nov 6",
  geotabPulled: "Mon Nov 9 · ~4:21 AM ET",
  sfRefreshDay: "Fri Nov 6",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 2–Fri Nov 6 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1327, inactive: 206, weekly: 16067.46, monthly: 69568.52, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 20, cancelUnits: 26, cancelAmt: 1086.71, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 213, sfMtdRows: 147, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 738, inactive: 117, weekly: 10460.91, monthly: 45296.63, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 15, cancelUnits: 30, cancelAmt: 1568.30, cancelMoved: 2, sfDayUnits: 20, sfDayRows: 14, sfMtdUnits: 86, sfMtdRows: 52, routeDayCustomers: 14, routeDayUnits: 20, routeDayWindow: 'ST 11:10 AM – ET 02:11 PM', routeMtdCustomers: 53, routeMtdUnits: 87, routeMtdPending: 0 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 57, weekly: 11497.58, monthly: 49794.94, trial: 44, collectTrial: 0, pending: 3, wonMonth: 2, wonWeek: 2, trialsMonth: 44, trialsWeek: 44, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 6, cancelAmt: 355, cancelMoved: 0, sfDayUnits: 37, sfDayRows: 22, sfMtdUnits: 141, sfMtdRows: 79, routeDayCustomers: 22, routeDayUnits: 37, routeDayWindow: 'ST 07:35 AM – ET 01:52 PM', routeMtdCustomers: 80, routeMtdUnits: 140, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 23, sfDayRows: 15, sfMtdUnits: 110, sfMtdRows: 74, routeDayCustomers: 19, routeDayUnits: 31, routeDayWindow: 'ST 10:02 AM – ET 04:31 PM', routeMtdCustomers: 88, routeMtdUnits: 128, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 0, sfDayUnits: 33, sfDayRows: 10, sfMtdUnits: 70, sfMtdRows: 25, routeDayCustomers: 9, routeDayUnits: 31, routeDayWindow: 'Orange County ST 10:38 AM – ET 12:47 PM, LA ST 11:13 AM – ET 11:13 AM', routeMtdCustomers: 23, routeMtdUnits: 63, routeMtdPending: 2 },
  { id: "austin", name: "Austin", totalUnits: 480, inactive: 58, weekly: 7208.24, monthly: 31211.26, trial: 10, collectTrial: 0, pending: 21, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 13, sfDayRows: 10, sfMtdUnits: 82, sfMtdRows: 64, routeDayCustomers: 10, routeDayUnits: 13, routeDayWindow: 'ST 10:15 AM – ET 12:28 PM', routeMtdCustomers: 64, routeMtdUnits: 82, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 474, inactive: 46, weekly: 8344.13, monthly: 36129.49, trial: 3, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 1, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 7, lostMonthUnits: 12, lostWeekDeals: 7, lostWeekUnits: 12, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 27, sfDayRows: 17, sfMtdUnits: 94, sfMtdRows: 68, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7243.81, monthly: 31367.32, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 6, sfDayRows: 2, sfMtdUnits: 119, sfMtdRows: 80, routeDayCustomers: 2, routeDayUnits: 6, routeDayWindow: 'ST 09:06 AM – ET 10:10 AM', routeMtdCustomers: 79, routeMtdUnits: 119, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6203.18, monthly: 26859.43, trial: 16, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 37, sfDayRows: 24, sfMtdUnits: 169, sfMtdRows: 104, routeDayCustomers: 24, routeDayUnits: 37, routeDayWindow: 'ST 09:46 AM – ET 04:19 PM', routeMtdCustomers: 104, routeMtdUnits: 169, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 415, inactive: 54, weekly: 6406.34, monthly: 27738.73, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 0, sfDayUnits: 31, sfDayRows: 14, sfMtdUnits: 145, sfMtdRows: 73, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 386, inactive: 30, weekly: 6148.78, monthly: 26623.94, trial: 1, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 4, lostWeekDeals: 2, lostWeekUnits: 4, cancelDeals: 3, cancelUnits: 3, cancelAmt: 145, cancelMoved: 1, sfDayUnits: 23, sfDayRows: 16, sfMtdUnits: 124, sfMtdRows: 81, routeDayCustomers: 16, routeDayUnits: 23, routeDayWindow: 'ST 08:23 AM – ET 02:56 PM', routeMtdCustomers: 80, routeMtdUnits: 124, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 383, inactive: 52, weekly: 5284.59, monthly: 22882.76, trial: 19, collectTrial: 0, pending: 4, wonMonth: 7, wonWeek: 7, trialsMonth: 15, trialsWeek: 15, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 55, sfDayRows: 22, sfMtdUnits: 221, sfMtdRows: 98, routeDayCustomers: 22, routeDayUnits: 55, routeDayWindow: 'ST 09:33 AM – ET 04:42 PM', routeMtdCustomers: 98, routeMtdUnits: 221, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 351, inactive: 87, weekly: 4666.25, monthly: 20207.40, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 10, cancelAmt: 465, cancelMoved: 2, sfDayUnits: 44, sfDayRows: 33, sfMtdUnits: 89, sfMtdRows: 67, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 322, inactive: 31, weekly: 4397.02, monthly: 19038.31, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 4, cancelAmt: 215, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 83, sfMtdRows: 42, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 44, routeMtdUnits: 84, routeMtdPending: 1 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 5, sfMtdRows: 3, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 3, routeMtdUnits: 5, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 12, weekly: 4703.67, monthly: 20365.84, trial: 15, collectTrial: 0, pending: 12, wonMonth: 2, wonWeek: 1, trialsMonth: 4, trialsWeek: 4, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 0, sfDayUnits: 1, sfDayRows: 1, sfMtdUnits: 77, sfMtdRows: 57, routeDayCustomers: 1, routeDayUnits: 1, routeDayWindow: 'ST 10:45 AM – ET 10:45 AM', routeMtdCustomers: 56, routeMtdUnits: 66, routeMtdPending: 10 },
  { id: "vancouver", name: "Vancouver", totalUnits: 248, inactive: 23, weekly: 3228.65, monthly: 13979.78, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 1, sfMtdRows: 1, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 16, weekly: 3526.79, monthly: 15271.48, trial: 42, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 37, trialsWeek: 37, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 154, inactive: 7, weekly: 2533.20, monthly: 10967.82, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 11, cancelUnits: 24, cancelAmt: 1075, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 2, sfMtdRows: 1, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 1, routeMtdUnits: 2, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 51, inactive: 1, weekly: 1153.05, monthly: 4993.04, trial: 25, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 3, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 1, sfDayRows: 1, sfMtdUnits: 17, sfMtdRows: 13, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "8:54 AM", stop: "6:15 PM", onRoad: "9h 21m", trips: 25, miles: 77.7, flag: "ok", left: 19.3, width: 62.3 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "8:02 AM", stop: "10:20 AM", onRoad: "2h 18m", trips: 4, miles: 64.1, flag: "ok", left: 13.6, width: 15.3 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "8:19 AM", stop: "6:23 PM", onRoad: "10h 4m", trips: 23, miles: 79.4, flag: "ok", left: 15.4, width: 67.1 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "9:36 AM", stop: "1:49 PM", onRoad: "4h 13m", trips: 5, miles: 58.1, flag: "ok", left: 24.0, width: 28.1 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:57 AM", stop: "5:59 PM", onRoad: "10h 2m", trips: 16, miles: 123.7, flag: "ok", left: 13.0, width: 66.9 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:03 AM", stop: "6:16 PM", onRoad: "9h 13m", trips: 26, miles: 78.5, flag: "ok", left: 20.3, width: 61.4 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "10:42 AM", stop: "2:00 PM", onRoad: "3h 18m", trips: 5, miles: 33.4, flag: "ok", left: 31.3, width: 22.0 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "9:07 AM", stop: "4:27 PM", onRoad: "7h 20m", trips: 17, miles: 74.1, flag: "ok", left: 20.8, width: 48.9 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Fri Nov 6",
  status: "ok",
  rows: [
    { location: "Orange County", count: 8 },
    { location: "San Francisco", count: 3 },
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
