/** Floral Image FI Ops snapshot.
 * Coverage day: Wednesday Oct 28, 2026 (America/New_York). Wed–Fri digests cover the previous day.
 * Salesforce figures pulled Thu Oct 29, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Wed Oct 28 rows from routemap_2026-10-28.csv (pulled Thu Oct 29 ~4:37 AM ET). Pairs are customers / units. MTD is Oct MTD as of Oct 29 ~4:37 AM ET.
 * Geotab: Wed Oct 28 from geotab-daily-start-end-local-2026-10-28.csv (written Thu Oct 29 ~4:19 AM ET).
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
  sales: "Thu Oct 29, 2026 · ~5:30 AM ET",
  routeDay: "Wed Oct 28",
  routePulled: "Thu Oct 29 · ~4:37 AM ET",
  routeMtdLabel: "Oct MTD as of Oct 29 ~4:37 AM ET",
  geotabDay: "Wed Oct 28",
  geotabPulled: "Thu Oct 29 · ~4:19 AM ET",
  sfRefreshDay: "Wed Oct 28",
  monthLabel: "October 2026",
  weekLabel: "Mon–Wed Oct 26–28 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1341, inactive: 214, weekly: 16148.56, monthly: 69919.59, trial: 5, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 18, cancelUnits: 23, cancelAmt: 962.30, cancelMoved: 8, sfDayUnits: 55, sfDayRows: 30, sfMtdUnits: 977, sfMtdRows: 628, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 741, inactive: 117, weekly: 10509.15, monthly: 45505.47, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 13, cancelUnits: 27, cancelAmt: 1423.30, cancelMoved: 3, sfDayUnits: 36, sfDayRows: 24, sfMtdUnits: 430, sfMtdRows: 275, routeDayCustomers: 24, routeDayUnits: 36, routeDayWindow: '08:18 AM–12:27 PM', routeMtdCustomers: 281, routeMtdUnits: 428, routeMtdPending: 10 },
  { id: "atlanta", name: "Atlanta", totalUnits: 551, inactive: 58, weekly: 11514.22, monthly: 49866.96, trial: 10, collectTrial: 0, pending: 8, wonMonth: 11, wonWeek: 0, trialsMonth: 10, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 6, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 9, cancelAmt: 560, cancelMoved: 3, sfDayUnits: 36, sfDayRows: 27, sfMtdUnits: 421, sfMtdRows: 257, routeDayCustomers: 21, routeDayUnits: 26, routeDayWindow: '07:34 AM–01:51 PM', routeMtdCustomers: 255, routeMtdUnits: 416, routeMtdPending: 1 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 20, lostWeekDeals: 1, lostWeekUnits: 11, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 23, sfDayRows: 10, sfMtdUnits: 375, sfMtdRows: 204, routeDayCustomers: 11, routeDayUnits: 24, routeDayWindow: '10:34 AM–04:32 PM', routeMtdCustomers: 231, routeMtdUnits: 411, routeMtdPending: 1 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 374, sfMtdRows: 221, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 187, routeMtdUnits: 322, routeMtdPending: 2 },
  { id: "austin", name: "Austin", totalUnits: 481, inactive: 58, weekly: 7228.20, monthly: 31297.68, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 11, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 22, sfDayRows: 8, sfMtdUnits: 361, sfMtdRows: 217, routeDayCustomers: 8, routeDayUnits: 22, routeDayWindow: '09:08 AM–01:15 PM', routeMtdCustomers: 207, routeMtdUnits: 348, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 485, inactive: 48, weekly: 8521.80, monthly: 36898.82, trial: 3, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 1, trialsMonth: 2, trialsWeek: 1, lostMonthDeals: 6, lostMonthUnits: 8, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 16, sfMtdUnits: 387, sfMtdRows: 299, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 425, inactive: 53, weekly: 7265.43, monthly: 31460.94, trial: 16, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 16, trialsWeek: 5, lostMonthDeals: 6, lostMonthUnits: 7, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 378, sfMtdRows: 226, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 224, routeMtdUnits: 379, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6203.18, monthly: 26859.43, trial: 19, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 8, trialsWeek: 5, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 1, sfDayRows: 1, sfMtdUnits: 378, sfMtdRows: 232, routeDayCustomers: 1, routeDayUnits: 1, routeDayWindow: '02:24 PM–02:24 PM', routeMtdCustomers: 217, routeMtdUnits: 353, routeMtdPending: 1 },
  { id: "san-diego", name: "San Diego", totalUnits: 416, inactive: 54, weekly: 6424.63, monthly: 27817.95, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 4, cancelAmt: 260, cancelMoved: 2, sfDayUnits: 35, sfDayRows: 5, sfMtdUnits: 405, sfMtdRows: 183, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 391, inactive: 31, weekly: 6228.62, monthly: 26969.61, trial: 1, collectTrial: 0, pending: 1, wonMonth: 9, wonWeek: 2, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 10, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 145, cancelMoved: 2, sfDayUnits: 14, sfDayRows: 10, sfMtdUnits: 304, sfMtdRows: 214, routeDayCustomers: 10, routeDayUnits: 14, routeDayWindow: '09:45 AM–01:18 PM', routeMtdCustomers: 250, routeMtdUnits: 341, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 1, sfDayUnits: 25, sfDayRows: 16, sfMtdUnits: 223, sfMtdRows: 118, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 376, inactive: 49, weekly: 5211.41, monthly: 22565.89, trial: 7, collectTrial: 0, pending: 4, wonMonth: 9, wonWeek: 3, trialsMonth: 7, trialsWeek: 5, lostMonthDeals: 7, lostMonthUnits: 22, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 313, sfMtdRows: 139, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 140, routeMtdUnits: 315, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 356, inactive: 88, weekly: 4732.78, monthly: 20495.46, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 9, cancelAmt: 480, cancelMoved: 5, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 192, routeMtdUnits: 247, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 325, inactive: 31, weekly: 4453.56, monthly: 19283.16, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 13, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 45, cancelMoved: 1, sfDayUnits: 49, sfDayRows: 23, sfMtdUnits: 288, sfMtdRows: 154, routeDayCustomers: 23, routeDayUnits: 48, routeDayWindow: '11:25 AM–04:39 PM', routeMtdCustomers: 158, routeMtdUnits: 292, routeMtdPending: 1 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 5, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 271, sfMtdRows: 170, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 169, routeMtdUnits: 268, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 4, weekly: 4833.41, monthly: 20927.55, trial: 15, collectTrial: 0, pending: 10, wonMonth: 15, wonWeek: 0, trialsMonth: 11, trialsWeek: 3, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 257, sfMtdRows: 176, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 150, routeMtdUnits: 220, routeMtdPending: 5 },
  { id: "vancouver", name: "Vancouver", totalUnits: 247, inactive: 21, weekly: 3235.28, monthly: 14008.50, trial: 0, collectTrial: 0, pending: 0, wonMonth: 3, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 23, sfDayRows: 10, sfMtdUnits: 200, sfMtdRows: 124, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 216, inactive: 16, weekly: 3397.05, monthly: 14709.77, trial: 7, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 5, cancelAmt: 265, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 191, sfMtdRows: 102, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 103, routeMtdUnits: 192, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 955, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 144, sfMtdRows: 85, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 80, routeMtdUnits: 138, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 45, inactive: 1, weekly: 1061.01, monthly: 4594.56, trial: 29, collectTrial: 0, pending: 0, wonMonth: 10, wonWeek: 0, trialsMonth: 9, trialsWeek: 5, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 32, sfMtdRows: 26, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:23 AM", stop: "6:02 PM", onRoad: "8h 39m", trips: 16, miles: 127.2, flag: "ok", left: 22.6, width: 57.7 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "10:49 AM", stop: "3:39 PM", onRoad: "4h 50m", trips: 13, miles: 87.9, flag: "ok", left: 32.1, width: 32.2 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "11:32 AM", stop: "4:49 PM", onRoad: "5h 17m", trips: 11, miles: 58.2, flag: "ok", left: 36.9, width: 35.2 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "8:05 AM", stop: "1:38 PM", onRoad: "5h 33m", trips: 6, miles: 56.4, flag: "ok", left: 13.9, width: 37.0 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "11:31 AM", stop: "11:35 AM", onRoad: "0h 4m", trips: 1, miles: 0.1, flag: "short", left: 36.8, width: 0.4 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "6:13 AM", stop: "2:46 PM", onRoad: "8h 33m", trips: 15, miles: 210.0, flag: "ok", left: 1.4, width: 57.0 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:54 AM", stop: "4:47 PM", onRoad: "6h 53m", trips: 20, miles: 118.4, flag: "ok", left: 26.0, width: 45.9 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "9:08 AM", stop: "11:38 AM", onRoad: "2h 30m", trips: 4, miles: 3.9, flag: "short", left: 20.9, width: 16.7 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "10:47 AM", stop: "7:00 PM", onRoad: "8h 13m", trips: 18, miles: 158.0, flag: "ok", left: 31.9, width: 54.8 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "7:15 AM", stop: "5:33 PM", onRoad: "10h 18m", trips: 21, miles: 160.1, flag: "ok", left: 8.3, width: 68.7 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Wed Oct 28",
  status: "ok",
  rows: [
    { location: "Phoenix", count: 15 },
    { location: "Austin", count: 1 },
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
