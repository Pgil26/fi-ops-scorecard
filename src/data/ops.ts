/** Floral Image FI Ops snapshot.
 * Coverage day: Monday Nov 2, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Tue Nov 3, 2026 ~5:35 AM ET (live MCP).
 * RouteMap Daily Changeover: Mon Nov 2 rows from routemap_2026-11-02.csv (pulled Tue Nov 3 ~4:38 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 3 ~4:38 AM ET.
 * Geotab: Mon Nov 2 from geotab-daily-start-end-local-2026-11-02.csv (written Tue Nov 3 ~4:29 AM ET).
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
  sales: "Tue Nov 3, 2026 · ~5:35 AM ET",
  routeDay: "Mon Nov 2",
  routePulled: "Tue Nov 3 · ~4:38 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 3 ~4:38 AM ET",
  geotabDay: "Mon Nov 2",
  geotabPulled: "Tue Nov 3 · ~4:29 AM ET",
  sfRefreshDay: "Mon Nov 2",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 2 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1341, inactive: 214, weekly: 16148.55, monthly: 69919.59, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 18, cancelUnits: 23, cancelAmt: 962.30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 738, inactive: 117, weekly: 10460.91, monthly: 45296.63, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 15, cancelUnits: 30, cancelAmt: 1568.30, cancelMoved: 2, sfDayUnits: 4, sfDayRows: 2, sfMtdUnits: 4, sfMtdRows: 2, routeDayCustomers: 2, routeDayUnits: 3, routeDayWindow: '11:52 AM–12:04 PM', routeMtdCustomers: 2, routeMtdUnits: 3, routeMtdPending: 1 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 57, weekly: 11497.58, monthly: 49794.94, trial: 12, collectTrial: 0, pending: 7, wonMonth: 2, wonWeek: 2, trialsMonth: 12, trialsWeek: 12, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 6, cancelAmt: 355, cancelMoved: 0, sfDayUnits: 29, sfDayRows: 16, sfMtdUnits: 29, sfMtdRows: 16, routeDayCustomers: 18, routeDayUnits: 31, routeDayWindow: '08:47 AM–01:38 PM', routeMtdCustomers: 18, routeMtdUnits: 31, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 25, sfDayRows: 14, sfMtdUnits: 25, sfMtdRows: 14, routeDayCustomers: 16, routeDayUnits: 27, routeDayWindow: '10:52 AM–04:03 PM', routeMtdCustomers: 16, routeMtdUnits: 27, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 0, sfDayUnits: 9, sfDayRows: 4, sfMtdUnits: 9, sfMtdRows: 4, routeDayCustomers: 4, routeDayUnits: 9, routeDayWindow: '12:08 PM–01:51 PM', routeMtdCustomers: 4, routeMtdUnits: 9, routeMtdPending: 0 },
  { id: "austin", name: "Austin", totalUnits: 480, inactive: 58, weekly: 7208.24, monthly: 31211.26, trial: 10, collectTrial: 0, pending: 21, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 5, sfDayRows: 4, sfMtdUnits: 5, sfMtdRows: 4, routeDayCustomers: 4, routeDayUnits: 5, routeDayWindow: '11:36 AM–11:59 AM', routeMtdCustomers: 4, routeMtdUnits: 5, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 485, inactive: 48, weekly: 8521.80, monthly: 36898.82, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7243.81, monthly: 31367.32, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 32, sfDayRows: 22, sfMtdUnits: 32, sfMtdRows: 22, routeDayCustomers: 21, routeDayUnits: 32, routeDayWindow: '10:58 AM–03:13 PM', routeMtdCustomers: 21, routeMtdUnits: 32, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6203.18, monthly: 26859.43, trial: 17, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 36, sfDayRows: 22, sfMtdUnits: 36, sfMtdRows: 22, routeDayCustomers: 22, routeDayUnits: 36, routeDayWindow: '10:14 AM–04:49 PM', routeMtdCustomers: 22, routeMtdUnits: 36, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 416, inactive: 54, weekly: 6424.63, monthly: 27817.95, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 0, sfDayUnits: 34, sfDayRows: 10, sfMtdUnits: 34, sfMtdRows: 10, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 388, inactive: 30, weekly: 6182.05, monthly: 26767.97, trial: 1, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 3, lostWeekDeals: 1, lostWeekUnits: 3, cancelDeals: 2, cancelUnits: 2, cancelAmt: 95, cancelMoved: 0, sfDayUnits: 36, sfDayRows: 18, sfMtdUnits: 36, sfMtdRows: 18, routeDayCustomers: 18, routeDayUnits: 36, routeDayWindow: '08:23 AM–02:53 PM', routeMtdCustomers: 18, routeMtdUnits: 36, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 376, inactive: 49, weekly: 5211.41, monthly: 22565.89, trial: 9, collectTrial: 0, pending: 4, wonMonth: 0, wonWeek: 0, trialsMonth: 5, trialsWeek: 5, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 48, sfDayRows: 21, sfMtdUnits: 48, sfMtdRows: 21, routeDayCustomers: 21, routeDayUnits: 48, routeDayWindow: '09:15 AM–04:26 PM', routeMtdCustomers: 21, routeMtdUnits: 48, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 356, inactive: 88, weekly: 4732.78, monthly: 20495.46, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 9, cancelAmt: 480, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 325, inactive: 31, weekly: 4453.56, monthly: 19283.16, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 45, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 4, weekly: 4833.41, monthly: 20927.55, trial: 16, collectTrial: 0, pending: 11, wonMonth: 2, wonWeek: 1, trialsMonth: 3, trialsWeek: 3, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 0, sfDayUnits: 10, sfDayRows: 10, sfMtdUnits: 10, sfMtdRows: 10, routeDayCustomers: 9, routeDayUnits: 9, routeDayWindow: '10:51 AM–04:25 PM', routeMtdCustomers: 9, routeMtdUnits: 9, routeMtdPending: 0 },
  { id: "vancouver", name: "Vancouver", totalUnits: 246, inactive: 21, weekly: 3252.97, monthly: 14085.07, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 1, sfDayRows: 1, sfMtdUnits: 1, sfMtdRows: 1, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 16, weekly: 3526.79, monthly: 15271.48, trial: 5, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 156, inactive: 7, weekly: 2559.82, monthly: 11083.05, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 22, cancelAmt: 995, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 51, inactive: 1, weekly: 1156.37, monthly: 5007.45, trial: 26, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 2, trialsWeek: 2, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 6, sfDayRows: 3, sfMtdUnits: 6, sfMtdRows: 3, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:16 AM", stop: "5:42 PM", onRoad: "8h 26m", trips: 24, miles: 112.0, flag: "ok", left: 21.8, width: 56.2 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "9:33 AM", stop: "10:30 PM", onRoad: "12h 57m", trips: 16, miles: 104.0, flag: "ok", left: 23.7, width: 76.3 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "8:50 AM", stop: "5:50 PM", onRoad: "9h 0m", trips: 17, miles: 96.0, flag: "ok", left: 18.9, width: 60.0 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "7:02 AM", stop: "11:10 PM", onRoad: "16h 8m", trips: 9, miles: 118.0, flag: "ok", left: 6.9, width: 93.1 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:37 AM", stop: "12:10 AM", onRoad: "16h 33m", trips: 11, miles: 36.0, flag: "ok", left: 10.8, width: 89.2 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "8:51 AM", stop: "7:11 PM", onRoad: "10h 20m", trips: 30, miles: 68.0, flag: "ok", left: 19.0, width: 68.9 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:12 AM", stop: "9:14 PM", onRoad: "13h 2m", trips: 11, miles: 117.0, flag: "ok", left: 14.7, width: 85.3 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "10:11 AM", stop: "4:02 PM", onRoad: "5h 51m", trips: 19, miles: 35.0, flag: "ok", left: 27.9, width: 39.0 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Mon Nov 2",
  status: "ok",
  rows: [
    { location: "Atlanta", count: 1 },
    { location: "Chicago", count: 1 },
    { location: "Fort Lauderdale", count: 1 },
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
