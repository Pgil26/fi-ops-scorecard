/** Floral Image FI Ops snapshot.
 * Coverage day: Wednesday Nov 11, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Thu Nov 12, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Wed Nov 11 rows from routemap_2026-11-11.csv (pulled Thu Nov 12 ~4:44 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 11 ~4:44 AM ET.
 * Geotab: Wed Nov 11 from geotab-daily-start-end-local-2026-11-11.csv (written Thu Nov 12 ~4:23 AM ET).
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
  sales: "Thu Nov 12, 2026 · ~5:30 AM ET",
  routeDay: "Wed Nov 11",
  routePulled: "Thu Nov 12 · ~4:44 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 11 ~4:44 AM ET",
  geotabDay: "Wed Nov 11",
  geotabPulled: "Thu Nov 12 · ~4:23 AM ET",
  sfRefreshDay: "Wed Nov 11",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 9 – Wed Nov 11 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1319, inactive: 206, weekly: 15959.78, monthly: 69102.26, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 25, cancelUnits: 34, cancelAmt: 1410.43, cancelMoved: 7, sfDayUnits: 68, sfDayRows: 41, sfMtdUnits: 411, sfMtdRows: 274, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 738, inactive: 117, weekly: 10460.91, monthly: 45296.63, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 15, cancelUnits: 30, cancelAmt: 1568.30, cancelMoved: 2, sfDayUnits: 17, sfDayRows: 8, sfMtdUnits: 179, sfMtdRows: 101, routeDayCustomers: 8, routeDayUnits: 17, routeDayWindow: 'Kaci Kirk: 10:58 AM ET – 01:35 PM', routeMtdCustomers: 104, routeMtdUnits: 181, routeMtdPending: 1 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 57, weekly: 11497.58, monthly: 49794.94, trial: 52, collectTrial: 0, pending: 2, wonMonth: 2, wonWeek: 0, trialsMonth: 52, trialsWeek: 17, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 6, cancelAmt: 355, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 189, sfMtdRows: 108, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 109, routeMtdUnits: 188, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 35, sfDayRows: 12, sfMtdUnits: 197, sfMtdRows: 116, routeDayCustomers: 13, routeDayUnits: 36, routeDayWindow: 'Irving Chavez: 10:58 AM ET – 03:28 PM', routeMtdCustomers: 133, routeMtdUnits: 219, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 0, sfDayUnits: 31, sfDayRows: 18, sfMtdUnits: 149, sfMtdRows: 74, routeDayCustomers: 15, routeDayUnits: 28, routeDayWindow: 'Orange County: 09:55 AM ET – 02:14 PM, LA: 09:18 AM ET – 11:21 AM', routeMtdCustomers: 65, routeMtdUnits: 134, routeMtdPending: 1 },
  { id: "austin", name: "Austin", totalUnits: 474, inactive: 52, weekly: 7203.24, monthly: 31189.66, trial: 10, collectTrial: 0, pending: 21, wonMonth: 1, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 7, cancelUnits: 20, cancelAmt: 1085, cancelMoved: 1, sfDayUnits: 17, sfDayRows: 14, sfMtdUnits: 136, sfMtdRows: 105, routeDayCustomers: 14, routeDayUnits: 17, routeDayWindow: 'Nicole Drake: 11:09 AM ET – 01:54 PM', routeMtdCustomers: 105, routeMtdUnits: 136, routeMtdPending: 1 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 474, inactive: 46, weekly: 8343.08, monthly: 36124.95, trial: 2, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 1, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 8, lostMonthUnits: 13, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 11, sfMtdUnits: 168, sfMtdRows: 125, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7243.81, monthly: 31367.32, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 35, sfDayRows: 20, sfMtdUnits: 206, sfMtdRows: 122, routeDayCustomers: 20, routeDayUnits: 35, routeDayWindow: 'DEN switch 1: 08:20 AM ET – 02:16 PM', routeMtdCustomers: 121, routeMtdUnits: 206, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 422, inactive: 39, weekly: 6191.55, monthly: 26809.02, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 1, sfDayUnits: 25, sfDayRows: 17, sfMtdUnits: 267, sfMtdRows: 170, routeDayCustomers: 17, routeDayUnits: 25, routeDayWindow: 'Sara Gorstein: 11:30 AM ET – 04:42 PM', routeMtdCustomers: 170, routeMtdUnits: 267, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 415, inactive: 54, weekly: 6406.34, monthly: 27738.73, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 0, sfDayUnits: 20, sfDayRows: 7, sfMtdUnits: 208, sfMtdRows: 103, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 384, inactive: 32, weekly: 6080.61, monthly: 26328.68, trial: 1, collectTrial: 0, pending: 1, wonMonth: 1, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 4, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 6, cancelAmt: 295, cancelMoved: 3, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 143, sfMtdRows: 96, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 95, routeMtdUnits: 143, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 15, sfMtdRows: 13, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 383, inactive: 52, weekly: 5284.59, monthly: 22882.76, trial: 24, collectTrial: 0, pending: 4, wonMonth: 7, wonWeek: 0, trialsMonth: 20, trialsWeek: 5, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 290, sfMtdRows: 132, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 132, routeMtdUnits: 290, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 351, inactive: 87, weekly: 4666.25, monthly: 20207.40, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 4, cancelUnits: 8, cancelAmt: 345, cancelMoved: 1, sfDayUnits: 35, sfDayRows: 31, sfMtdUnits: 231, sfMtdRows: 175, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 322, inactive: 31, weekly: 4397.02, monthly: 19038.31, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 4, cancelAmt: 215, cancelMoved: 2, sfDayUnits: 35, sfDayRows: 15, sfMtdUnits: 136, sfMtdRows: 67, routeDayCustomers: 15, routeDayUnits: 35, routeDayWindow: 'CSR: 12:13 PM ET – 02:13 PM', routeMtdCustomers: 69, routeMtdUnits: 138, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 39, sfMtdRows: 16, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 16, routeMtdUnits: 39, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 12, weekly: 4703.67, monthly: 20365.84, trial: 16, collectTrial: 0, pending: 12, wonMonth: 2, wonWeek: 0, trialsMonth: 5, trialsWeek: 1, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 0, sfDayUnits: 3, sfDayRows: 1, sfMtdUnits: 137, sfMtdRows: 89, routeDayCustomers: 1, routeDayUnits: 1, routeDayWindow: 'Ft Lauderdale Refresh Rep: 10:23 AM ET – 10:23 AM', routeMtdCustomers: 88, routeMtdUnits: 124, routeMtdPending: 12 },
  { id: "vancouver", name: "Vancouver", totalUnits: 248, inactive: 23, weekly: 3228.65, monthly: 13979.78, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 1, sfMtdRows: 1, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 17, weekly: 3510.15, monthly: 15199.47, trial: 52, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 47, trialsWeek: 10, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 0, sfDayUnits: 40, sfDayRows: 20, sfMtdUnits: 40, sfMtdRows: 20, routeDayCustomers: 21, routeDayUnits: 41, routeDayWindow: 'Jose Moure (New Jersey): 07:08 AM ET – 04:37 PM', routeMtdCustomers: 21, routeMtdUnits: 41, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 152, inactive: 7, weekly: 2499.94, monthly: 10823.79, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 3, lostWeekDeals: 2, lostWeekUnits: 3, cancelDeals: 10, cancelUnits: 23, cancelAmt: 1035, cancelMoved: 1, sfDayUnits: 30, sfDayRows: 22, sfMtdUnits: 98, sfMtdRows: 59, routeDayCustomers: 22, routeDayUnits: 30, routeDayWindow: 'Amelie Drake: 09:07 AM ET – 02:54 PM', routeMtdCustomers: 59, routeMtdUnits: 98, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 50, inactive: 1, weekly: 1136.41, monthly: 4921.03, trial: 25, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 50, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 22, sfMtdRows: 18, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:49 AM", stop: "5:55 PM", onRoad: "8h 6m", trips: 21, miles: 76.9, flag: "ok", left: 25.4, width: 54.0 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "8:29 AM", stop: "6:18 PM", onRoad: "9h 49m", trips: 16, miles: 113.4, flag: "ok", left: 16.6, width: 65.4 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "7:25 AM", stop: "10:50 PM", onRoad: "15h 25m", trips: 21, miles: 114.2, flag: "ok", left: 9.4, width: 90.6 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "7:57 AM", stop: "7:31 PM", onRoad: "11h 34m", trips: 19, miles: 100.0, flag: "ok", left: 13.0, width: 77.1 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "8:39 AM", stop: "9:32 AM", onRoad: "0h 53m", trips: 3, miles: 9.8, flag: "short", left: 17.7, width: 5.9 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "6:00 AM", stop: "6:14 PM", onRoad: "12h 14m", trips: 23, miles: 224.9, flag: "ok", left: 0, width: 81.6 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "7:49 AM", stop: "3:39 PM", onRoad: "7h 50m", trips: 13, miles: 143.3, flag: "ok", left: 12.1, width: 52.2 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "12:01 PM", stop: "2:21 PM", onRoad: "2h 20m", trips: 11, miles: 19.0, flag: "ok", left: 40.1, width: 15.6 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "9:17 AM", stop: "4:31 PM", onRoad: "7h 14m", trips: 17, miles: 108.0, flag: "ok", left: 21.9, width: 48.2 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Wed Nov 11",
  status: "ok",
  rows: [
    { location: "Fort Lauderdale", count: 2 },
    { location: "Denver", count: 1 },
    { location: "Orange County", count: 1 },
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
