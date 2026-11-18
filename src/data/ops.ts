/** Floral Image FI Ops snapshot.
 * Coverage day: Tuesday Nov 17, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Wed Nov 18, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Tue Nov 17 rows from routemap_2026-11-17.csv (pulled Wed Nov 18 ~4:41 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 17 ~4:41 AM ET.
 * Geotab: Tue Nov 17 from geotab-daily-start-end-local-2026-11-17.csv (written Wed Nov 18 ~4:22 AM ET).
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
  sales: "Wed Nov 18, 2026 · ~5:30 AM ET",
  routeDay: "Tue Nov 17",
  routePulled: "Wed Nov 18 · ~4:41 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 17 ~4:41 AM ET",
  geotabDay: "Tue Nov 17",
  geotabPulled: "Wed Nov 18 · ~4:22 AM ET",
  sfRefreshDay: "Tue Nov 17",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 16 – Tue Nov 17 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1317, inactive: 206, weekly: 15931.90, monthly: 68981.58, trial: 3, collectTrial: 0, pending: 9, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 27, cancelUnits: 36, cancelAmt: 1494.22, cancelMoved: 9, sfDayUnits: 55, sfDayRows: 40, sfMtdUnits: 725, sfMtdRows: 483, routeDayCustomers: 6, routeDayUnits: 11, routeDayWindow: '08:15 AM–09:31 AM', routeMtdCustomers: 22, routeMtdUnits: 41, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 735, inactive: 114, weekly: 10487.33, monthly: 45411.05, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 6, lostWeekDeals: 3, lostWeekUnits: 3, cancelDeals: 6, cancelUnits: 13, cancelAmt: 607.51, cancelMoved: 0, sfDayUnits: 20, sfDayRows: 11, sfMtdUnits: 247, sfMtdRows: 137, routeDayCustomers: 12, routeDayUnits: 21, routeDayWindow: '10:29 AM–01:56 PM', routeMtdCustomers: 141, routeMtdUnits: 250, routeMtdPending: 2 },
  { id: "atlanta", name: "Atlanta", totalUnits: 546, inactive: 57, weekly: 11306.45, monthly: 48966.77, trial: 22, collectTrial: 0, pending: 6, wonMonth: 2, wonWeek: 0, trialsMonth: 22, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 9, cancelAmt: 530, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 251, sfMtdRows: 147, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 150, routeMtdUnits: 254, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 24, sfDayRows: 11, sfMtdUnits: 293, sfMtdRows: 172, routeDayCustomers: 11, routeDayUnits: 24, routeDayWindow: '10:12 AM–03:26 PM', routeMtdCustomers: 195, routeMtdUnits: 324, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 488, inactive: 28, weekly: 7975.30, monthly: 34532.62, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 805, cancelMoved: 1, sfDayUnits: 13, sfDayRows: 8, sfMtdUnits: 243, sfMtdRows: 131, routeDayCustomers: 8, routeDayUnits: 13, routeDayWindow: '11:12 AM–12:52 PM', routeMtdCustomers: 121, routeMtdUnits: 228, routeMtdPending: 1 },
  { id: "austin", name: "Austin", totalUnits: 474, inactive: 52, weekly: 7203.24, monthly: 31189.66, trial: 10, collectTrial: 0, pending: 21, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 7, cancelUnits: 20, cancelAmt: 1085, cancelMoved: 1, sfDayUnits: 25, sfDayRows: 18, sfMtdUnits: 211, sfMtdRows: 159, routeDayCustomers: 18, routeDayUnits: 25, routeDayWindow: '10:24 AM–02:16 PM', routeMtdCustomers: 159, routeMtdUnits: 211, routeMtdPending: 1 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 477, inactive: 46, weekly: 8400.42, monthly: 36373.22, trial: 4, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 3, trialsMonth: 3, trialsWeek: 1, lostMonthDeals: 8, lostMonthUnits: 13, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 24, sfDayRows: 19, sfMtdUnits: 274, sfMtdRows: 213, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7243.81, monthly: 31367.32, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 40, sfDayRows: 28, sfMtdUnits: 352, sfMtdRows: 216, routeDayCustomers: 28, routeDayUnits: 40, routeDayWindow: '09:24 AM–02:44 PM', routeMtdCustomers: 215, routeMtdUnits: 352, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 418, inactive: 41, weekly: 6095.09, monthly: 26391.33, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 5, lostWeekDeals: 2, lostWeekUnits: 2, cancelDeals: 1, cancelUnits: 2, cancelAmt: 90, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 367, sfMtdRows: 223, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 222, routeMtdUnits: 366, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 417, inactive: 54, weekly: 6449.58, monthly: 27925.97, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 16, sfDayRows: 5, sfMtdUnits: 288, sfMtdRows: 143, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 381, inactive: 32, weekly: 6029.05, monthly: 26105.43, trial: 1, collectTrial: 0, pending: 1, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 21, lostMonthUnits: 29, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 7, cancelAmt: 355, cancelMoved: 5, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 187, sfMtdRows: 129, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 130, routeMtdUnits: 190, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 12, sfMtdUnits: 81, sfMtdRows: 49, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 383, inactive: 52, weekly: 5277.93, monthly: 22853.95, trial: 8, collectTrial: 0, pending: 5, wonMonth: 8, wonWeek: 0, trialsMonth: 8, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 4, cancelAmt: 270, cancelMoved: 1, sfDayUnits: 3, sfDayRows: 1, sfMtdUnits: 311, sfMtdRows: 142, routeDayCustomers: 1, routeDayUnits: 3, routeDayWindow: '11:02 AM–11:02 AM', routeMtdCustomers: 142, routeMtdUnits: 311, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 351, inactive: 87, weekly: 4666.25, monthly: 20207.40, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 4, cancelUnits: 8, cancelAmt: 345, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 318, inactive: 31, weekly: 4328.43, monthly: 18741.38, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 7, cancelAmt: 376.16, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 172, sfMtdRows: 93, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 96, routeMtdUnits: 176, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 289, inactive: 15, weekly: 4848.24, monthly: 20992.37, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 50, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 39, sfMtdRows: 16, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 16, routeMtdUnits: 39, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 12, weekly: 4693.69, monthly: 20322.63, trial: 14, collectTrial: 0, pending: 12, wonMonth: 2, wonWeek: 0, trialsMonth: 5, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 60, cancelMoved: 0, sfDayUnits: 8, sfDayRows: 3, sfMtdUnits: 189, sfMtdRows: 125, routeDayCustomers: 3, routeDayUnits: 7, routeDayWindow: '10:45 AM–12:16 PM', routeMtdCustomers: 124, routeMtdUnits: 177, routeMtdPending: 11 },
  { id: "vancouver", name: "Vancouver", totalUnits: 227, inactive: 20, weekly: 2998.08, monthly: 12981.43, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 20, lostWeekDeals: 3, lostWeekUnits: 20, cancelDeals: 1, cancelUnits: 1, cancelAmt: 38.09, cancelMoved: 0, sfDayUnits: 19, sfDayRows: 16, sfMtdUnits: 67, sfMtdRows: 35, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 18, weekly: 3490.21, monthly: 15113.05, trial: 52, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 47, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 33, sfDayRows: 16, sfMtdUnits: 138, sfMtdRows: 78, routeDayCustomers: 16, routeDayUnits: 33, routeDayWindow: '09:01 AM–03:03 PM', routeMtdCustomers: 79, routeMtdUnits: 139, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 146, inactive: 7, weekly: 2396.83, monthly: 10377.30, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 4, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 11, cancelUnits: 27, cancelAmt: 1235, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 141, sfMtdRows: 81, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 81, routeMtdUnits: 141, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 46, inactive: 1, weekly: 1056.57, monthly: 4575.36, trial: 28, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 6, trialsWeek: 2, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 4, cancelAmt: 200, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 29, sfMtdRows: 25, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:08 AM", stop: "12:48 PM", onRoad: "3h 40m", trips: 3, miles: 1.0, flag: "short", left: 20.9, width: 24.4 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "8:08 AM", stop: "3:39 PM", onRoad: "7h 31m", trips: 22, miles: 71.0, flag: "ok", left: 14.2, width: 50.1 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "8:05 AM", stop: "7:48 PM", onRoad: "11h 43m", trips: 9, miles: 44.0, flag: "ok", left: 13.9, width: 78.1 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:08 AM", stop: "4:57 PM", onRoad: "9h 49m", trips: 14, miles: 222.0, flag: "ok", left: 7.6, width: 65.4 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "5:42 PM", stop: "5:43 PM", onRoad: "0h 1m", trips: 1, miles: 0.0, flag: "short", left: 78.0, width: 0.1 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "4:07 PM", stop: "5:28 PM", onRoad: "1h 21m", trips: 4, miles: 2.0, flag: "short", left: 67.4, width: 9.0 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:00 AM", stop: "1:39 PM", onRoad: "5h 39m", trips: 10, miles: 84.0, flag: "ok", left: 13.3, width: 37.7 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "9:30 AM", stop: "5:05 PM", onRoad: "7h 35m", trips: 14, miles: 87.0, flag: "ok", left: 23.3, width: 50.6 },
  { id: "fw-van-non-active", name: "FW van non active", locationId: null, zone: "CT", start: "3:00 PM", stop: "3:34 PM", onRoad: "0h 34m", trips: 3, miles: 0.0, flag: "short", left: 60.0, width: 3.8 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Tue Nov 17",
  status: "ok",
  rows: [
    { location: "Fort Lauderdale", count: 5 },
    { location: "Denver", count: 2 },
    { location: "San Francisco", count: 2 },
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
