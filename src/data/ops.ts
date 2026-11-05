/** Floral Image FI Ops snapshot.
 * Coverage day: Wednesday Nov 4, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Thu Nov 5, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Wed Nov 4 rows from routemap_2026-11-04.csv (pulled Thu Nov 5 ~4:42 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 4 ~4:42 AM ET.
 * Geotab: Wed Nov 4 from geotab-daily-start-end-local-2026-11-04.csv (written Thu Nov 5 ~4:24 AM ET).
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
  sales: "Thu Nov 5, 2026 · ~5:30 AM ET",
  routeDay: "Wed Nov 4",
  routePulled: "Thu Nov 5 · ~4:42 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 4 ~4:42 AM ET",
  geotabDay: "Wed Nov 4",
  geotabPulled: "Thu Nov 5 · ~4:24 AM ET",
  sfRefreshDay: "Wed Nov 4",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 2–Wed Nov 4 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1328, inactive: 206, weekly: 16080.13, monthly: 69623.38, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 19, cancelUnits: 25, cancelAmt: 1048.62, cancelMoved: 1, sfDayUnits: 79, sfDayRows: 50, sfMtdUnits: 138, sfMtdRows: 96, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 738, inactive: 117, weekly: 10460.91, monthly: 45296.63, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 15, cancelUnits: 30, cancelAmt: 1568.30, cancelMoved: 2, sfDayUnits: 14, sfDayRows: 10, sfMtdUnits: 31, sfMtdRows: 19, routeDayCustomers: 10, routeDayUnits: 13, routeDayWindow: '10:29 AM–11:47 AM', routeMtdCustomers: 20, routeMtdUnits: 31, routeMtdPending: 1 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 57, weekly: 11497.58, monthly: 49794.94, trial: 29, collectTrial: 0, pending: 5, wonMonth: 2, wonWeek: 2, trialsMonth: 29, trialsWeek: 29, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 6, cancelAmt: 355, cancelMoved: 0, sfDayUnits: 2, sfDayRows: 1, sfMtdUnits: 51, sfMtdRows: 28, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 28, routeMtdUnits: 48, routeMtdPending: 1 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 25, sfDayRows: 18, sfMtdUnits: 59, sfMtdRows: 40, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 27, routeMtdUnits: 39, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 9, sfMtdRows: 4, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 4, routeMtdUnits: 9, routeMtdPending: 0 },
  { id: "austin", name: "Austin", totalUnits: 480, inactive: 58, weekly: 7208.24, monthly: 31211.26, trial: 10, collectTrial: 0, pending: 21, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 15, sfDayRows: 13, sfMtdUnits: 61, sfMtdRows: 47, routeDayCustomers: 13, routeDayUnits: 15, routeDayWindow: '11:03 AM–01:37 PM', routeMtdCustomers: 47, routeMtdUnits: 61, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 480, inactive: 46, weekly: 8468.93, monthly: 36669.87, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 5, lostWeekDeals: 2, lostWeekUnits: 5, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 18, sfMtdUnits: 52, sfMtdRows: 43, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7243.81, monthly: 31367.32, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 37, sfDayRows: 28, sfMtdUnits: 103, sfMtdRows: 70, routeDayCustomers: 28, routeDayUnits: 37, routeDayWindow: '09:16 AM–02:26 PM', routeMtdCustomers: 69, routeMtdUnits: 103, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6203.18, monthly: 26859.43, trial: 17, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 38, sfDayRows: 23, sfMtdUnits: 102, sfMtdRows: 60, routeDayCustomers: 23, routeDayUnits: 38, routeDayWindow: '10:07 AM–04:41 PM', routeMtdCustomers: 60, routeMtdUnits: 102, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 416, inactive: 54, weekly: 6424.63, monthly: 27817.95, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 0, sfDayUnits: 27, sfDayRows: 20, sfMtdUnits: 91, sfMtdRows: 46, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 386, inactive: 30, weekly: 6148.78, monthly: 26623.94, trial: 1, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 4, lostWeekDeals: 2, lostWeekUnits: 4, cancelDeals: 3, cancelUnits: 3, cancelAmt: 145, cancelMoved: 1, sfDayUnits: 20, sfDayRows: 12, sfMtdUnits: 78, sfMtdRows: 45, routeDayCustomers: 12, routeDayUnits: 20, routeDayWindow: '09:00 AM–03:05 PM', routeMtdCustomers: 44, routeMtdUnits: 78, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 382, inactive: 49, weekly: 5311.19, monthly: 22997.98, trial: 15, collectTrial: 0, pending: 4, wonMonth: 6, wonWeek: 6, trialsMonth: 11, trialsWeek: 11, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 65, sfDayRows: 24, sfMtdUnits: 113, sfMtdRows: 45, routeDayCustomers: 24, routeDayUnits: 65, routeDayWindow: '08:30 AM–04:24 PM', routeMtdCustomers: 45, routeMtdUnits: 113, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 352, inactive: 87, weekly: 4684.55, monthly: 20286.62, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 9, cancelAmt: 410, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 322, inactive: 31, weekly: 4397.02, monthly: 19038.31, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 4, cancelAmt: 215, cancelMoved: 2, sfDayUnits: 23, sfDayRows: 12, sfMtdUnits: 63, sfMtdRows: 32, routeDayCustomers: 12, routeDayUnits: 23, routeDayWindow: '10:46 AM–02:17 PM', routeMtdCustomers: 34, routeMtdUnits: 65, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 5, sfDayRows: 3, sfMtdUnits: 5, sfMtdRows: 3, routeDayCustomers: 3, routeDayUnits: 5, routeDayWindow: '02:04 PM–03:18 PM', routeMtdCustomers: 3, routeMtdUnits: 5, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 265, inactive: 4, weekly: 4853.36, monthly: 21013.97, trial: 15, collectTrial: 0, pending: 12, wonMonth: 3, wonWeek: 2, trialsMonth: 4, trialsWeek: 4, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 0, sfDayUnits: 14, sfDayRows: 13, sfMtdUnits: 41, sfMtdRows: 37, routeDayCustomers: 13, routeDayUnits: 14, routeDayWindow: '10:39 AM–04:11 PM', routeMtdCustomers: 36, routeMtdUnits: 38, routeMtdPending: 2 },
  { id: "vancouver", name: "Vancouver", totalUnits: 246, inactive: 21, weekly: 3252.97, monthly: 14085.07, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 1, sfMtdRows: 1, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 16, weekly: 3526.79, monthly: 15271.48, trial: 8, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 3, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 156, inactive: 7, weekly: 2559.82, monthly: 11083.05, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 22, cancelAmt: 995, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 51, inactive: 1, weekly: 1153.05, monthly: 4993.04, trial: 26, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 3, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 16, sfMtdRows: 12, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:24 AM", stop: "6:10 PM", onRoad: "8h 46m", trips: 24, miles: 121.5, flag: "ok", left: 22.7, width: 58.4 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "7:55 AM", stop: "10:06 PM", onRoad: "14h 11m", trips: 24, miles: 116.4, flag: "ok", left: 12.8, width: 87.2 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "9:09 AM", stop: "6:42 PM", onRoad: "9h 33m", trips: 22, miles: 81.1, flag: "ok", left: 21.0, width: 63.7 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "7:03 AM", stop: "3:00 PM", onRoad: "7h 57m", trips: 8, miles: 95.6, flag: "ok", left: 7.0, width: 53.0 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:15 AM", stop: "5:39 PM", onRoad: "10h 24m", trips: 20, miles: 36.7, flag: "ok", left: 8.3, width: 69.3 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "10:02 AM", stop: "8:06 PM", onRoad: "10h 4m", trips: 26, miles: 59.8, flag: "ok", left: 26.9, width: 67.1 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "7:52 AM", stop: "4:44 PM", onRoad: "8h 52m", trips: 3, miles: 69.4, flag: "ok", left: 12.4, width: 59.1 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "8:43 AM", stop: "2:50 PM", onRoad: "6h 7m", trips: 11, miles: 143.6, flag: "ok", left: 18.1, width: 40.8 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "8:45 AM", stop: "7:50 PM", onRoad: "11h 5m", trips: 22, miles: 73.5, flag: "ok", left: 18.3, width: 73.9 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Wed Nov 4",
  status: "ok",
  rows: [
    { location: "Austin", count: 1 },
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
