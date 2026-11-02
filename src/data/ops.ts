/** Floral Image FI Ops snapshot.
 * Coverage day: Friday Oct 30, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Mon Nov 2, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Fri Oct 30 rows from routemap_2026-10-30.csv (pulled Mon Nov 2 ~4:40 AM ET). Pairs are customers / units. MTD is Oct MTD as of Nov 2 ~4:40 AM ET.
 * Geotab: Fri Oct 30 from geotab-daily-start-end-local-2026-10-30.csv (written Mon Nov 2 ~4:25 AM ET).
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
  sales: "Mon Nov 2, 2026 · ~5:30 AM ET",
  routeDay: "Fri Oct 30",
  routePulled: "Mon Nov 2 · ~4:40 AM ET",
  routeMtdLabel: "Oct MTD as of Nov 2 ~4:40 AM ET",
  geotabDay: "Fri Oct 30",
  geotabPulled: "Mon Nov 2 · ~4:25 AM ET",
  sfRefreshDay: "Fri Oct 30",
  monthLabel: "October 2026",
  weekLabel: "Mon–Fri Oct 26–30 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1340, inactive: 214, weekly: 16133.35, monthly: 69853.77, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 2, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 18, cancelUnits: 23, cancelAmt: 962.30, cancelMoved: 8, sfDayUnits: 25, sfDayRows: 17, sfMtdUnits: 1058, sfMtdRows: 683, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 738, inactive: 117, weekly: 10460.91, monthly: 45296.63, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 15, cancelUnits: 30, cancelAmt: 1568.30, cancelMoved: 3, sfDayUnits: 35, sfDayRows: 20, sfMtdUnits: 517, sfMtdRows: 331, routeDayCustomers: 21, routeDayUnits: 36, routeDayWindow: '08:43 AM–02:49 PM', routeMtdCustomers: 339, routeMtdUnits: 517, routeMtdPending: 11 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 57, weekly: 11497.58, monthly: 49794.94, trial: 0, collectTrial: 0, pending: 7, wonMonth: 11, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 11, lostWeekDeals: 1, lostWeekUnits: 2, cancelDeals: 2, cancelUnits: 6, cancelAmt: 355, cancelMoved: 2, sfDayUnits: 3, sfDayRows: 1, sfMtdUnits: 488, sfMtdRows: 300, routeDayCustomers: 1, routeDayUnits: 3, routeDayWindow: '08:07 AM–08:07 AM', routeMtdCustomers: 290, routeMtdUnits: 467, routeMtdPending: 1 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 20, lostWeekDeals: 1, lostWeekUnits: 11, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 6, sfDayRows: 2, sfMtdUnits: 416, sfMtdRows: 223, routeDayCustomers: 2, routeDayUnits: 6, routeDayWindow: '09:58 AM–11:33 AM', routeMtdCustomers: 251, routeMtdUnits: 455, routeMtdPending: 1 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 1, sfDayUnits: 1, sfDayRows: 1, sfMtdUnits: 375, sfMtdRows: 222, routeDayCustomers: 1, routeDayUnits: 1, routeDayWindow: '09:42 AM–09:42 AM', routeMtdCustomers: 188, routeMtdUnits: 323, routeMtdPending: 2 },
  { id: "austin", name: "Austin", totalUnits: 481, inactive: 58, weekly: 7228.20, monthly: 31297.68, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 11, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 4, sfDayRows: 3, sfMtdUnits: 403, sfMtdRows: 233, routeDayCustomers: 3, routeDayUnits: 4, routeDayWindow: '11:59 AM–01:18 PM', routeMtdCustomers: 223, routeMtdUnits: 390, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 485, inactive: 48, weekly: 8521.80, monthly: 36898.82, trial: 3, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 1, trialsMonth: 2, trialsWeek: 1, lostMonthDeals: 6, lostMonthUnits: 8, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 15, sfDayRows: 9, sfMtdUnits: 422, sfMtdRows: 319, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7247.14, monthly: 31381.72, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 2, trialsWeek: 2, lostMonthDeals: 7, lostMonthUnits: 8, lostWeekDeals: 2, lostWeekUnits: 2, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 378, sfMtdRows: 226, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 223, routeMtdUnits: 379, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6203.18, monthly: 26859.43, trial: 17, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 6, trialsWeek: 4, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 378, sfMtdRows: 232, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 217, routeMtdUnits: 353, routeMtdPending: 1 },
  { id: "san-diego", name: "San Diego", totalUnits: 416, inactive: 54, weekly: 6424.63, monthly: 27817.95, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 2, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 419, sfMtdRows: 185, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 391, inactive: 31, weekly: 6228.62, monthly: 26969.61, trial: 1, collectTrial: 0, pending: 1, wonMonth: 9, wonWeek: 2, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 10, lostMonthUnits: 14, lostWeekDeals: 2, lostWeekUnits: 2, cancelDeals: 3, cancelUnits: 3, cancelAmt: 145, cancelMoved: 2, sfDayUnits: 25, sfDayRows: 16, sfMtdUnits: 363, sfMtdRows: 256, routeDayCustomers: 16, routeDayUnits: 25, routeDayWindow: '08:19 AM–12:37 PM', routeMtdCustomers: 293, routeMtdUnits: 402, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 1, sfDayUnits: 25, sfDayRows: 10, sfMtdUnits: 307, sfMtdRows: 153, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 376, inactive: 49, weekly: 5211.41, monthly: 22565.89, trial: 7, collectTrial: 0, pending: 4, wonMonth: 9, wonWeek: 3, trialsMonth: 7, trialsWeek: 5, lostMonthDeals: 7, lostMonthUnits: 22, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 313, sfMtdRows: 139, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 140, routeMtdUnits: 315, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 356, inactive: 88, weekly: 4732.78, monthly: 20495.46, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 9, cancelAmt: 480, cancelMoved: 5, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 192, routeMtdUnits: 247, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 325, inactive: 31, weekly: 4453.56, monthly: 19283.16, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 13, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 45, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 288, sfMtdRows: 154, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 158, routeMtdUnits: 292, routeMtdPending: 1 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 5, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 271, sfMtdRows: 170, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 169, routeMtdUnits: 268, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 4, weekly: 4833.41, monthly: 20927.55, trial: 13, collectTrial: 0, pending: 11, wonMonth: 15, wonWeek: 0, trialsMonth: 9, trialsWeek: 2, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 257, sfMtdRows: 176, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 150, routeMtdUnits: 220, routeMtdPending: 5 },
  { id: "vancouver", name: "Vancouver", totalUnits: 246, inactive: 21, weekly: 3252.97, monthly: 14085.07, trial: 0, collectTrial: 0, pending: 0, wonMonth: 3, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 9, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 204, sfMtdRows: 127, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 215, inactive: 16, weekly: 3377.10, monthly: 14623.35, trial: 7, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 6, lostWeekDeals: 4, lostWeekUnits: 6, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 191, sfMtdRows: 102, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 103, routeMtdUnits: 192, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 955, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 144, sfMtdRows: 85, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 80, routeMtdUnits: 138, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 51, inactive: 1, weekly: 1156.37, monthly: 5007.45, trial: 24, collectTrial: 0, pending: 0, wonMonth: 18, wonWeek: 6, trialsMonth: 10, trialsWeek: 6, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 32, sfMtdRows: 26, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "10:01 AM", stop: "5:58 PM", onRoad: "7h 57m", trips: 17, miles: 94.5, flag: "ok", left: 26.8, width: 53.0 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "8:06 AM", stop: "9:07 AM", onRoad: "1h 1m", trips: 3, miles: 0.2, flag: "short", left: 14.0, width: 6.8 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "9:36 AM", stop: "2:56 PM", onRoad: "5h 20m", trips: 12, miles: 136.7, flag: "ok", left: 24.0, width: 35.6 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "8:21 AM", stop: "5:42 PM", onRoad: "9h 21m", trips: 7, miles: 35.9, flag: "ok", left: 15.7, width: 62.3 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "8:04 AM", stop: "3:51 PM", onRoad: "7h 47m", trips: 9, miles: 87.7, flag: "ok", left: 13.8, width: 51.9 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "7:06 AM", stop: "8:04 AM", onRoad: "0h 58m", trips: 2, miles: 27.1, flag: "short", left: 7.3, width: 6.4 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:15 AM", stop: "4:30 PM", onRoad: "7h 15m", trips: 21, miles: 110.5, flag: "ok", left: 21.7, width: 48.3 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:18 AM", stop: "12:42 PM", onRoad: "4h 24m", trips: 7, miles: 87.4, flag: "ok", left: 15.3, width: 29.3 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "7:16 AM", stop: "4:54 PM", onRoad: "9h 38m", trips: 17, miles: 127.6, flag: "ok", left: 8.4, width: 64.2 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Fri Oct 30",
  status: "ok",
  rows: [
    { location: "Seattle", count: 3 },
    { location: "Dallas", count: 1 },
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
