/** Floral Image FI Ops snapshot.
 * Coverage day: Tuesday Nov 3, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Wed Nov 4, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Tue Nov 3 rows from routemap_2026-11-03.csv (pulled Wed Nov 4 ~4:37 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 4 ~4:37 AM ET.
 * Geotab: Tue Nov 3 from geotab-daily-start-end-local-2026-11-03.csv (written Wed Nov 4 ~4:30 AM ET).
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
  sales: "Wed Nov 4, 2026 · ~5:30 AM ET",
  routeDay: "Tue Nov 3",
  routePulled: "Wed Nov 4 · ~4:37 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 4 ~4:37 AM ET",
  geotabDay: "Tue Nov 3",
  geotabPulled: "Wed Nov 4 · ~4:30 AM ET",
  sfRefreshDay: "Tue Nov 3",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 2–Tue Nov 3 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1328, inactive: 206, weekly: 16080.13, monthly: 69623.38, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 19, cancelUnits: 25, cancelAmt: 1048.62, cancelMoved: 1, sfDayUnits: 59, sfDayRows: 46, sfMtdUnits: 59, sfMtdRows: 46, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 738, inactive: 117, weekly: 10460.91, monthly: 45296.63, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 15, cancelUnits: 30, cancelAmt: 1568.30, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 17, sfMtdRows: 9, routeDayCustomers: 1, routeDayUnits: 1, routeDayWindow: '12:00 AM–12:00 AM', routeMtdCustomers: 10, routeMtdUnits: 18, routeMtdPending: 0 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 57, weekly: 11497.58, monthly: 49794.94, trial: 20, collectTrial: 0, pending: 5, wonMonth: 2, wonWeek: 2, trialsMonth: 20, trialsWeek: 20, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 6, cancelAmt: 355, cancelMoved: 0, sfDayUnits: 3, sfDayRows: 2, sfMtdUnits: 32, sfMtdRows: 18, routeDayCustomers: 1, routeDayUnits: 1, routeDayWindow: '07:16 AM–07:16 AM', routeMtdCustomers: 19, routeMtdUnits: 32, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 9, sfDayRows: 8, sfMtdUnits: 34, sfMtdRows: 22, routeDayCustomers: 11, routeDayUnits: 12, routeDayWindow: '12:22 PM–04:18 PM', routeMtdCustomers: 27, routeMtdUnits: 39, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 9, sfMtdRows: 4, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 4, routeMtdUnits: 9, routeMtdPending: 0 },
  { id: "austin", name: "Austin", totalUnits: 480, inactive: 58, weekly: 7208.24, monthly: 31211.26, trial: 10, collectTrial: 0, pending: 21, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 32, sfDayRows: 22, sfMtdUnits: 41, sfMtdRows: 29, routeDayCustomers: 22, routeDayUnits: 30, routeDayWindow: '10:29 AM–02:58 PM', routeMtdCustomers: 29, routeMtdUnits: 39, routeMtdPending: 2 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 480, inactive: 46, weekly: 8468.93, monthly: 36669.87, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 5, lostWeekDeals: 2, lostWeekUnits: 5, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 24, sfDayRows: 19, sfMtdUnits: 24, sfMtdRows: 19, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7243.81, monthly: 31367.32, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 34, sfDayRows: 20, sfMtdUnits: 66, sfMtdRows: 42, routeDayCustomers: 20, routeDayUnits: 34, routeDayWindow: '10:32 AM–03:13 PM', routeMtdCustomers: 41, routeMtdUnits: 66, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6203.18, monthly: 26859.43, trial: 17, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 18, sfDayRows: 7, sfMtdUnits: 54, sfMtdRows: 29, routeDayCustomers: 7, routeDayUnits: 16, routeDayWindow: '11:09 AM–02:30 PM', routeMtdCustomers: 29, routeMtdUnits: 52, routeMtdPending: 2 },
  { id: "san-diego", name: "San Diego", totalUnits: 416, inactive: 54, weekly: 6424.63, monthly: 27817.95, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 0, sfDayUnits: 30, sfDayRows: 16, sfMtdUnits: 64, sfMtdRows: 26, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 387, inactive: 30, weekly: 6165.42, monthly: 26695.95, trial: 1, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 4, lostWeekDeals: 2, lostWeekUnits: 4, cancelDeals: 2, cancelUnits: 2, cancelAmt: 95, cancelMoved: 0, sfDayUnits: 22, sfDayRows: 15, sfMtdUnits: 58, sfMtdRows: 33, routeDayCustomers: 15, routeDayUnits: 22, routeDayWindow: '09:54 AM–03:04 PM', routeMtdCustomers: 32, routeMtdUnits: 58, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 376, inactive: 49, weekly: 5211.41, monthly: 22565.89, trial: 15, collectTrial: 0, pending: 4, wonMonth: 0, wonWeek: 0, trialsMonth: 11, trialsWeek: 11, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 48, sfMtdRows: 21, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 21, routeMtdUnits: 48, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 352, inactive: 87, weekly: 4684.55, monthly: 20286.62, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 9, cancelAmt: 410, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 323, inactive: 31, weekly: 4420.31, monthly: 19139.13, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 3, cancelAmt: 145, cancelMoved: 1, sfDayUnits: 40, sfDayRows: 20, sfMtdUnits: 40, sfMtdRows: 20, routeDayCustomers: 22, routeDayUnits: 42, routeDayWindow: '09:11 AM–02:12 PM', routeMtdCustomers: 22, routeMtdUnits: 42, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 265, inactive: 4, weekly: 4853.36, monthly: 21013.97, trial: 15, collectTrial: 0, pending: 12, wonMonth: 3, wonWeek: 2, trialsMonth: 4, trialsWeek: 4, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 0, sfDayUnits: 17, sfDayRows: 14, sfMtdUnits: 27, sfMtdRows: 24, routeDayCustomers: 14, routeDayUnits: 15, routeDayWindow: '10:02 AM–05:13 PM', routeMtdCustomers: 23, routeMtdUnits: 24, routeMtdPending: 2 },
  { id: "vancouver", name: "Vancouver", totalUnits: 246, inactive: 21, weekly: 3252.97, monthly: 14085.07, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 1, sfMtdRows: 1, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 16, weekly: 3526.79, monthly: 15271.48, trial: 5, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 156, inactive: 7, weekly: 2559.82, monthly: 11083.05, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 22, cancelAmt: 995, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 51, inactive: 1, weekly: 1153.05, monthly: 4993.04, trial: 26, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 3, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 10, sfDayRows: 9, sfMtdUnits: 16, sfMtdRows: 12, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:07 AM", stop: "5:50 PM", onRoad: "8h 43m", trips: 20, miles: 151.0, flag: "ok", left: 20.8, width: 58.1 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "4:27 PM", stop: "4:32 PM", onRoad: "0h 5m", trips: 1, miles: 0.0, flag: "short", left: 69.7, width: 0.6 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "9:18 AM", stop: "3:41 PM", onRoad: "6h 23m", trips: 19, miles: 119.0, flag: "ok", left: 22.0, width: 42.6 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "8:58 AM", stop: "6:24 PM", onRoad: "9h 26m", trips: 20, miles: 79.0, flag: "ok", left: 19.8, width: 62.9 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "7:01 AM", stop: "3:36 PM", onRoad: "8h 35m", trips: 14, miles: 71.0, flag: "ok", left: 6.8, width: 57.2 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:13 AM", stop: "6:11 PM", onRoad: "8h 58m", trips: 28, miles: 70.0, flag: "ok", left: 21.4, width: 59.8 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:16 AM", stop: "3:45 PM", onRoad: "7h 29m", trips: 9, miles: 118.0, flag: "ok", left: 15.1, width: 49.9 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "8:16 AM", stop: "3:00 PM", onRoad: "6h 44m", trips: 17, miles: 120.0, flag: "ok", left: 15.1, width: 44.9 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "8:56 AM", stop: "4:17 PM", onRoad: "7h 21m", trips: 15, miles: 30.0, flag: "ok", left: 19.6, width: 49.0 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Tue Nov 3",
  status: "ok",
  rows: [
    { location: "Phoenix", count: 9 },
    { location: "Fort Lauderdale", count: 3 },
    { location: "Austin", count: 2 },
    { location: "Chicago", count: 2 },
    { location: "Denver", count: 1 },
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
