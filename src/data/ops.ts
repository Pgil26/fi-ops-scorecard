/** Floral Image FI Ops snapshot.
 * Coverage day: Thursday Nov 5, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Fri Nov 6, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Thu Nov 5 rows from routemap_2026-11-05.csv (pulled Fri Nov 6 ~4:35 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 5 ~4:35 AM ET.
 * Geotab: Thu Nov 5 from geotab-daily-start-end-local-2026-11-05.csv (written Fri Nov 6 ~4:27 AM ET).
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
  sales: "Fri Nov 6, 2026 · ~5:30 AM ET",
  routeDay: "Thu Nov 5",
  routePulled: "Fri Nov 6 · ~4:35 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 5 ~4:35 AM ET",
  geotabDay: "Thu Nov 5",
  geotabPulled: "Fri Nov 6 · ~4:27 AM ET",
  sfRefreshDay: "Thu Nov 5",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 2–Thu Nov 5 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1328, inactive: 206, weekly: 16080.13, monthly: 69623.38, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 19, cancelUnits: 25, cancelAmt: 1048.62, cancelMoved: 1, sfDayUnits: 75, sfDayRows: 51, sfMtdUnits: 213, sfMtdRows: 147, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 738, inactive: 117, weekly: 10460.91, monthly: 45296.63, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 15, cancelUnits: 30, cancelAmt: 1568.30, cancelMoved: 2, sfDayUnits: 10, sfDayRows: 1, sfMtdUnits: 50, sfMtdRows: 26, routeDayCustomers: 1, routeDayUnits: 2, routeDayWindow: '10:46 AM–10:46 AM', routeMtdCustomers: 27, routeMtdUnits: 43, routeMtdPending: 8 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 57, weekly: 11497.58, monthly: 49794.94, trial: 37, collectTrial: 0, pending: 3, wonMonth: 2, wonWeek: 2, trialsMonth: 37, trialsWeek: 37, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 6, cancelAmt: 355, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 64, sfMtdRows: 35, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 35, routeMtdUnits: 60, routeMtdPending: 2 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 28, sfDayRows: 19, sfMtdUnits: 87, sfMtdRows: 59, routeDayCustomers: 22, routeDayUnits: 31, routeDayWindow: '09:36 AM–04:09 PM', routeMtdCustomers: 69, routeMtdUnits: 97, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 0, sfDayUnits: 18, sfDayRows: 8, sfMtdUnits: 27, sfMtdRows: 12, routeDayCustomers: 7, routeDayUnits: 15, routeDayWindow: '11:40 AM–02:15 PM', routeMtdCustomers: 11, routeMtdUnits: 24, routeMtdPending: 0 },
  { id: "austin", name: "Austin", totalUnits: 480, inactive: 58, weekly: 7208.24, monthly: 31211.26, trial: 10, collectTrial: 0, pending: 21, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 61, sfMtdRows: 47, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 47, routeMtdUnits: 61, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 475, inactive: 46, weekly: 8365.36, monthly: 36221.42, trial: 3, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 1, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 3, lostMonthUnits: 8, lostWeekDeals: 6, lostWeekUnits: 11, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 15, sfDayRows: 8, sfMtdUnits: 67, sfMtdRows: 51, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7243.81, monthly: 31367.32, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 10, sfDayRows: 8, sfMtdUnits: 113, sfMtdRows: 78, routeDayCustomers: 8, routeDayUnits: 10, routeDayWindow: '08:31 AM–11:39 AM', routeMtdCustomers: 77, routeMtdUnits: 113, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6203.18, monthly: 26859.43, trial: 17, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 30, sfDayRows: 20, sfMtdUnits: 132, sfMtdRows: 80, routeDayCustomers: 20, routeDayUnits: 30, routeDayWindow: '10:29 AM–04:42 PM', routeMtdCustomers: 80, routeMtdUnits: 132, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 416, inactive: 54, weekly: 6424.63, monthly: 27817.95, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 0, sfDayUnits: 23, sfDayRows: 13, sfMtdUnits: 114, sfMtdRows: 59, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 386, inactive: 30, weekly: 6148.78, monthly: 26623.94, trial: 1, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 4, lostWeekDeals: 2, lostWeekUnits: 4, cancelDeals: 3, cancelUnits: 3, cancelAmt: 145, cancelMoved: 1, sfDayUnits: 23, sfDayRows: 20, sfMtdUnits: 101, sfMtdRows: 65, routeDayCustomers: 20, routeDayUnits: 23, routeDayWindow: '08:38 AM–03:24 PM', routeMtdCustomers: 64, routeMtdUnits: 101, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 383, inactive: 52, weekly: 5284.59, monthly: 22882.76, trial: 15, collectTrial: 0, pending: 4, wonMonth: 7, wonWeek: 7, trialsMonth: 11, trialsWeek: 11, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 53, sfDayRows: 31, sfMtdUnits: 166, sfMtdRows: 76, routeDayCustomers: 31, routeDayUnits: 53, routeDayWindow: '09:23 AM–07:10 PM', routeMtdCustomers: 76, routeMtdUnits: 166, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 351, inactive: 87, weekly: 4666.25, monthly: 20207.40, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 10, cancelAmt: 465, cancelMoved: 2, sfDayUnits: 45, sfDayRows: 34, sfMtdUnits: 45, sfMtdRows: 34, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 322, inactive: 31, weekly: 4397.02, monthly: 19038.31, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 4, cancelAmt: 215, cancelMoved: 2, sfDayUnits: 20, sfDayRows: 10, sfMtdUnits: 83, sfMtdRows: 42, routeDayCustomers: 10, routeDayUnits: 19, routeDayWindow: '12:18 PM–03:04 PM', routeMtdCustomers: 44, routeMtdUnits: 84, routeMtdPending: 1 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 5, sfMtdRows: 3, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 3, routeMtdUnits: 5, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 12, weekly: 4703.67, monthly: 20365.84, trial: 15, collectTrial: 0, pending: 12, wonMonth: 2, wonWeek: 1, trialsMonth: 4, trialsWeek: 4, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 0, sfDayUnits: 33, sfDayRows: 18, sfMtdUnits: 76, sfMtdRows: 56, routeDayCustomers: 18, routeDayUnits: 25, routeDayWindow: '09:51 AM–04:03 PM', routeMtdCustomers: 55, routeMtdUnits: 65, routeMtdPending: 10 },
  { id: "vancouver", name: "Vancouver", totalUnits: 248, inactive: 23, weekly: 3228.65, monthly: 13979.78, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 1, sfMtdRows: 1, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 16, weekly: 3526.79, monthly: 15271.48, trial: 32, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 27, trialsWeek: 27, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 156, inactive: 7, weekly: 2559.82, monthly: 11083.05, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 22, cancelAmt: 995, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 51, inactive: 1, weekly: 1153.05, monthly: 4993.04, trial: 26, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 3, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 16, sfMtdRows: 12, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:17 AM", stop: "7:19 PM", onRoad: "10h 2m", trips: 19, miles: 151.3, flag: "ok", left: 21.9, width: 66.9 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "7:40 AM", stop: "11:59 AM", onRoad: "4h 19m", trips: 10, miles: 101.6, flag: "ok", left: 11.1, width: 28.8 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "9:00 AM", stop: "7:38 PM", onRoad: "10h 38m", trips: 21, miles: 75.7, flag: "ok", left: 20.0, width: 70.9 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:43 AM", stop: "6:48 PM", onRoad: "11h 5m", trips: 19, miles: 54.1, flag: "ok", left: 11.4, width: 73.9 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:09 AM", stop: "6:34 PM", onRoad: "9h 25m", trips: 33, miles: 47.6, flag: "ok", left: 21.0, width: 62.8 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "7:53 AM", stop: "3:01 PM", onRoad: "7h 8m", trips: 8, miles: 119.7, flag: "ok", left: 12.6, width: 47.6 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "11:45 AM", stop: "4:26 PM", onRoad: "4h 41m", trips: 14, miles: 76.0, flag: "ok", left: 38.3, width: 31.2 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "7:21 AM", stop: "4:07 PM", onRoad: "8h 46m", trips: 21, miles: 109.5, flag: "ok", left: 9.0, width: 58.4 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Thu Nov 5",
  status: "ok",
  rows: [
    { location: "Fort Lauderdale", count: 10 },
    { location: "Seattle", count: 8 },
    { location: "Denver", count: 2 },
    { location: "Phoenix", count: 1 },
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
