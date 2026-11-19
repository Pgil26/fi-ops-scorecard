/** Floral Image FI Ops snapshot.
 * Coverage day: Wednesday Nov 18, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Thu Nov 19, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Wed Nov 18 rows from routemap_2026-11-18.csv (pulled Thu Nov 19 ~4:42 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 18 ~4:42 AM ET.
 * Geotab: Wed Nov 18 from geotab-daily-start-end-local-2026-11-18.csv (written Thu Nov 19 ~4:30 AM ET).
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
  sales: "Thu Nov 19, 2026 · ~5:30 AM ET",
  routeDay: "Wed Nov 18",
  routePulled: "Thu Nov 19 · ~4:42 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 18 ~4:42 AM ET",
  geotabDay: "Wed Nov 18",
  geotabPulled: "Thu Nov 19 · ~4:30 AM ET",
  sfRefreshDay: "Wed Nov 18",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 16 – Wed Nov 18 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1316, inactive: 206, weekly: 15914.16, monthly: 68904.78, trial: 3, collectTrial: 0, pending: 9, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 28, cancelUnits: 37, cancelAmt: 1547.54, cancelMoved: 10, sfDayUnits: 68, sfDayRows: 46, sfMtdUnits: 793, sfMtdRows: 529, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 22, routeMtdUnits: 41, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 735, inactive: 114, weekly: 10487.33, monthly: 45411.05, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 6, lostWeekDeals: 3, lostWeekUnits: 3, cancelDeals: 6, cancelUnits: 13, cancelAmt: 607.51, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 247, sfMtdRows: 137, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 139, routeMtdUnits: 250, routeMtdPending: 1 },
  { id: "atlanta", name: "Atlanta", totalUnits: 546, inactive: 57, weekly: 11306.45, monthly: 48966.77, trial: 11, collectTrial: 0, pending: 6, wonMonth: 2, wonWeek: 0, trialsMonth: 11, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 9, cancelAmt: 530, cancelMoved: 2, sfDayUnits: 25, sfDayRows: 15, sfMtdUnits: 295, sfMtdRows: 174, routeDayCustomers: 15, routeDayUnits: 25, routeDayWindow: '8:41 AM–11:42 AM', routeMtdCustomers: 177, routeMtdUnits: 298, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 18, sfDayRows: 8, sfMtdUnits: 311, sfMtdRows: 180, routeDayCustomers: 11, routeDayUnits: 23, routeDayWindow: '9:49 AM–4:33 PM', routeMtdCustomers: 206, routeMtdUnits: 347, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 488, inactive: 28, weekly: 7975.30, monthly: 34532.62, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 805, cancelMoved: 1, sfDayUnits: 27, sfDayRows: 14, sfMtdUnits: 270, sfMtdRows: 145, routeDayCustomers: 14, routeDayUnits: 27, routeDayWindow: '9:38 AM–12:17 PM', routeMtdCustomers: 135, routeMtdUnits: 255, routeMtdPending: 1 },
  { id: "austin", name: "Austin", totalUnits: 474, inactive: 52, weekly: 7203.24, monthly: 31189.66, trial: 10, collectTrial: 0, pending: 21, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 8, lostWeekDeals: 1, lostWeekUnits: 7, cancelDeals: 5, cancelUnits: 10, cancelAmt: 540, cancelMoved: 0, sfDayUnits: 51, sfDayRows: 15, sfMtdUnits: 262, sfMtdRows: 174, routeDayCustomers: 15, routeDayUnits: 51, routeDayWindow: '11:28 AM–2:45 PM', routeMtdCustomers: 173, routeMtdUnits: 262, routeMtdPending: 1 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 477, inactive: 46, weekly: 8400.42, monthly: 36373.22, trial: 4, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 3, trialsMonth: 3, trialsWeek: 1, lostMonthDeals: 8, lostMonthUnits: 13, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 18, sfDayRows: 12, sfMtdUnits: 292, sfMtdRows: 225, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 420, inactive: 52, weekly: 7193.92, monthly: 31151.27, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 5, lostWeekDeals: 1, lostWeekUnits: 4, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 7, sfDayRows: 3, sfMtdUnits: 359, sfMtdRows: 219, routeDayCustomers: 3, routeDayUnits: 7, routeDayWindow: '12:32 PM–2:52 PM', routeMtdCustomers: 218, routeMtdUnits: 359, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 418, inactive: 41, weekly: 6095.09, monthly: 26391.33, trial: 13, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 5, lostWeekDeals: 2, lostWeekUnits: 2, cancelDeals: 1, cancelUnits: 2, cancelAmt: 90, cancelMoved: 1, sfDayUnits: 1, sfDayRows: 1, sfMtdUnits: 368, sfMtdRows: 224, routeDayCustomers: 1, routeDayUnits: 1, routeDayWindow: '12:41 PM–12:41 PM', routeMtdCustomers: 223, routeMtdUnits: 367, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 417, inactive: 54, weekly: 6449.58, monthly: 27925.97, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 12, sfDayRows: 5, sfMtdUnits: 300, sfMtdRows: 148, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 378, inactive: 31, weekly: 5995.79, monthly: 25961.40, trial: 1, collectTrial: 0, pending: 1, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 22, lostMonthUnits: 30, lostWeekDeals: 1, lostWeekUnits: 2, cancelDeals: 6, cancelUnits: 7, cancelAmt: 355, cancelMoved: 5, sfDayUnits: 22, sfDayRows: 16, sfMtdUnits: 209, sfMtdRows: 145, routeDayCustomers: 17, routeDayUnits: 24, routeDayWindow: '10:44 AM–3:17 PM', routeMtdCustomers: 147, routeMtdUnits: 214, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 7, sfDayRows: 4, sfMtdUnits: 88, sfMtdRows: 53, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 383, inactive: 52, weekly: 5277.93, monthly: 22853.95, trial: 8, collectTrial: 0, pending: 5, wonMonth: 8, wonWeek: 0, trialsMonth: 8, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 4, cancelAmt: 270, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 311, sfMtdRows: 142, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 142, routeMtdUnits: 311, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 351, inactive: 87, weekly: 4666.25, monthly: 20207.40, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 4, cancelUnits: 8, cancelAmt: 345, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 318, inactive: 31, weekly: 4328.43, monthly: 18741.38, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 7, cancelAmt: 376.16, cancelMoved: 4, sfDayUnits: 23, sfDayRows: 13, sfMtdUnits: 195, sfMtdRows: 106, routeDayCustomers: 13, routeDayUnits: 23, routeDayWindow: '11:40 AM–2:04 PM', routeMtdCustomers: 109, routeMtdUnits: 199, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 286, inactive: 15, weekly: 4791.68, monthly: 20747.52, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 4, cancelAmt: 220, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 39, sfMtdRows: 16, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 16, routeMtdUnits: 39, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 12, weekly: 4693.69, monthly: 20322.63, trial: 14, collectTrial: 0, pending: 12, wonMonth: 2, wonWeek: 0, trialsMonth: 5, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 60, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 189, sfMtdRows: 125, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 124, routeMtdUnits: 177, routeMtdPending: 11 },
  { id: "vancouver", name: "Vancouver", totalUnits: 227, inactive: 20, weekly: 2998.08, monthly: 12981.43, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 20, lostWeekDeals: 3, lostWeekUnits: 20, cancelDeals: 1, cancelUnits: 1, cancelAmt: 38.09, cancelMoved: 1, sfDayUnits: 14, sfDayRows: 12, sfMtdUnits: 81, sfMtdRows: 47, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 18, weekly: 3490.21, monthly: 15113.05, trial: 52, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 47, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 24, sfDayRows: 16, sfMtdUnits: 162, sfMtdRows: 94, routeDayCustomers: 16, routeDayUnits: 24, routeDayWindow: '8:46 AM–1:57 PM', routeMtdCustomers: 95, routeMtdUnits: 163, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 142, inactive: 7, weekly: 2330.30, monthly: 10089.24, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 4, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 12, cancelUnits: 31, cancelAmt: 1435, cancelMoved: 5, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 141, sfMtdRows: 81, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 81, routeMtdUnits: 141, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 47, inactive: 1, weekly: 1073.21, monthly: 4647.37, trial: 27, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 1, trialsMonth: 5, trialsWeek: 2, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 4, cancelAmt: 200, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 29, sfMtdRows: 25, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:12 AM", stop: "5:22 PM", onRoad: "8h 10m", trips: 14, miles: 75.9, flag: "ok", left: 21.3, width: 54.4 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "9:03 AM", stop: "3:16 PM", onRoad: "6h 13m", trips: 14, miles: 96.9, flag: "ok", left: 20.3, width: 41.4 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "7:20 AM", stop: "7:02 PM", onRoad: "11h 42m", trips: 11, miles: 50.4, flag: "ok", left: 8.9, width: 78.0 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:11 AM", stop: "4:14 PM", onRoad: "9h 3m", trips: 18, miles: 181.7, flag: "ok", left: 7.9, width: 60.3 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "7:31 AM", stop: "12:11 PM", onRoad: "4h 40m", trips: 13, miles: 50.9, flag: "ok", left: 10.1, width: 31.1 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "7:36 AM", stop: "6:27 PM", onRoad: "10h 51m", trips: 27, miles: 59.5, flag: "ok", left: 10.7, width: 72.3 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "7:52 AM", stop: "3:27 PM", onRoad: "7h 35m", trips: 10, miles: 93.0, flag: "ok", left: 12.4, width: 50.6 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "11:04 AM", stop: "2:09 PM", onRoad: "3h 5m", trips: 11, miles: 28.2, flag: "ok", left: 33.8, width: 20.6 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "8:35 AM", stop: "6:08 PM", onRoad: "9h 33m", trips: 17, miles: 123.5, flag: "ok", left: 17.2, width: 63.7 },
  { id: "fw-van-non-active", name: "FW van non active", locationId: null, zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Wed Nov 18",
  status: "ok",
  rows: [
    { location: "Austin", count: 2 },
    { location: "Dallas", count: 2 },
    { location: "Orange County", count: 2 },
    { location: "San Francisco", count: 2 },
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
