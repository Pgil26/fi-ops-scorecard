/** Floral Image FI Ops snapshot.
 * Coverage day: Friday Oct 16, 2026 (America/New_York). Monday digest covers Friday.
 * Salesforce figures pulled Mon Oct 19, 2026 ~5:35 AM ET (live MCP).
 * RouteMap Daily Changeover: Fri Oct 16 rows from routemap_2026-10-16.csv (pulled Mon Oct 19 ~4:40 AM ET). Pairs are customers / units. MTD is Oct MTD as of Oct 19 ~4:40 AM ET.
 * Geotab: local start/end + trips + miles from geotab-daily-start-end-local-2026-10-16.csv (pulled Mon Oct 19 ~4:28 AM ET).
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
  sales: "Mon Oct 19, 2026 · ~5:35 AM ET",
  routeDay: "Fri Oct 16",
  routePulled: "Mon Oct 19 · ~4:40 AM ET",
  routeMtdLabel: "Oct MTD as of Oct 19 ~4:40 AM ET",
  geotabDay: "Fri Oct 16",
  geotabPulled: "Mon Oct 19 · ~4:28 AM ET",
  sfRefreshDay: "Fri Oct 16",
  monthLabel: "October 2026",
  weekLabel: "Mon Oct 12 – Fri Oct 16",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1346, inactive: 214, weekly: 16222.04, monthly: 70237.75, trial: 3, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 13, cancelUnits: 17, cancelAmt: 695.70, cancelMoved: 3, sfDayUnits: 40, sfDayRows: 23, sfMtdUnits: 571, sfMtdRows: 375, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 744, inactive: 117, weekly: 10562.68, monthly: 45737.23, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 24, cancelAmt: 1262.39, cancelMoved: 0, sfDayUnits: 37, sfDayRows: 15, sfMtdUnits: 167, sfMtdRows: 101, routeDayCustomers: 15, routeDayUnits: 37, routeDayWindow: '09:55 AM–12:18 PM', routeMtdCustomers: 104, routeMtdUnits: 166, routeMtdPending: 4 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 58, weekly: 11503.10, monthly: 49818.95, trial: 16, collectTrial: 0, pending: 6, wonMonth: 9, wonWeek: 4, trialsMonth: 16, trialsWeek: 5, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 15, cancelAmt: 870, cancelMoved: 6, sfDayUnits: 11, sfDayRows: 6, sfMtdUnits: 203, sfMtdRows: 113, routeDayCustomers: 6, routeDayUnits: 10, routeDayWindow: '11:23 AM–12:29 PM', routeMtdCustomers: 131, routeMtdUnits: 225, routeMtdPending: 1 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 534, inactive: 72, weekly: 8094.25, monthly: 35046.80, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 5, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 4, cancelAmt: 250, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 208, sfMtdRows: 127, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 143, routeMtdUnits: 228, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 490, inactive: 28, weekly: 8021.88, monthly: 34734.26, trial: 21, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 800, cancelMoved: 2, sfDayUnits: 1, sfDayRows: 1, sfMtdUnits: 319, sfMtdRows: 178, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 154, routeMtdUnits: 278, routeMtdPending: 3 },
  { id: "austin", name: "Austin", totalUnits: 482, inactive: 58, weekly: 7244.84, monthly: 31369.70, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 10, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 14, sfDayRows: 8, sfMtdUnits: 91, sfMtdRows: 71, routeDayCustomers: 8, routeDayUnits: 14, routeDayWindow: '10:30 AM–01:06 PM', routeMtdCustomers: 61, routeMtdUnits: 78, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 483, inactive: 48, weekly: 8473.72, monthly: 36690.65, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 1, trialsMonth: 2, trialsWeek: 1, lostMonthDeals: 5, lostMonthUnits: 7, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 13, sfDayRows: 10, sfMtdUnits: 228, sfMtdRows: 178, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 430, inactive: 53, weekly: 7366.89, monthly: 31900.23, trial: 0, collectTrial: 0, pending: 4, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 50, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 311, sfMtdRows: 199, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 199, routeMtdUnits: 311, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 424, inactive: 39, weekly: 6219.82, monthly: 26931.44, trial: 14, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 2, trialsWeek: 1, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 315, sfMtdRows: 196, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 181, routeMtdUnits: 289, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 420, inactive: 54, weekly: 6511.10, monthly: 28192.42, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 9, sfMtdUnits: 370, sfMtdRows: 178, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 388, inactive: 26, weekly: 6256.88, monthly: 27092.04, trial: 2, collectTrial: 0, pending: 1, wonMonth: 4, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 7, lostWeekDeals: 3, lostWeekUnits: 4, cancelDeals: 4, cancelUnits: 4, cancelAmt: 195, cancelMoved: 3, sfDayUnits: 8, sfDayRows: 8, sfMtdUnits: 227, sfMtdRows: 152, routeDayCustomers: 8, routeDayUnits: 8, routeDayWindow: '09:51 AM–01:22 PM', routeMtdCustomers: 187, routeMtdUnits: 261, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 387, inactive: 38, weekly: 5972.75, monthly: 25862.74, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 1, sfDayUnits: 14, sfDayRows: 7, sfMtdUnits: 106, sfMtdRows: 53, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 372, inactive: 49, weekly: 5141.55, monthly: 22263.43, trial: 16, collectTrial: 0, pending: 7, wonMonth: 5, wonWeek: 5, trialsMonth: 16, trialsWeek: 10, lostMonthDeals: 5, lostMonthUnits: 15, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 10, cancelAmt: 490, cancelMoved: 0, sfDayUnits: 18, sfDayRows: 9, sfMtdUnits: 313, sfMtdRows: 139, routeDayCustomers: 9, routeDayUnits: 18, routeDayWindow: '08:53 AM–01:22 PM', routeMtdCustomers: 140, routeMtdUnits: 315, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 357, inactive: 88, weekly: 4751.07, monthly: 20574.68, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 425, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 192, routeMtdUnits: 247, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 326, inactive: 31, weekly: 4473.53, monthly: 19369.58, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 6, lostMonthUnits: 12, lostWeekDeals: 1, lostWeekUnits: 2, cancelDeals: 1, cancelUnits: 1, cancelAmt: 45, cancelMoved: 1, sfDayUnits: 36, sfDayRows: 16, sfMtdUnits: 223, sfMtdRows: 122, routeDayCustomers: 16, routeDayUnits: 36, routeDayWindow: '01:01 PM–04:10 PM', routeMtdCustomers: 126, routeMtdUnits: 228, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 287, inactive: 15, weekly: 4814.98, monthly: 20848.34, trial: 1, collectTrial: 0, pending: 0, wonMonth: 4, wonWeek: 3, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 270, sfMtdRows: 169, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 168, routeMtdUnits: 267, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 255, inactive: 4, weekly: 4637.16, monthly: 20077.78, trial: 24, collectTrial: 0, pending: 17, wonMonth: 12, wonWeek: 0, trialsMonth: 11, trialsWeek: 3, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 60, cancelMoved: 1, sfDayUnits: 28, sfDayRows: 15, sfMtdUnits: 250, sfMtdRows: 172, routeDayCustomers: 15, routeDayUnits: 27, routeDayWindow: '09:14 AM–04:00 PM', routeMtdCustomers: 149, routeMtdUnits: 218, routeMtdPending: 3 },
  { id: "vancouver", name: "Vancouver", totalUnits: 241, inactive: 21, weekly: 3123.84, monthly: 13525.98, trial: 2, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 38.09, cancelMoved: 0, sfDayUnits: 29, sfDayRows: 21, sfMtdUnits: 89, sfMtdRows: 46, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 216, inactive: 16, weekly: 3397.05, monthly: 14709.77, trial: 7, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 2, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 5, cancelAmt: 265, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 26, sfMtdRows: 16, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 16, routeMtdUnits: 26, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 955, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 138, sfMtdRows: 82, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 77, routeMtdUnits: 132, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "9:52 AM", stop: "6:50 PM", onRoad: "8h 58m", trips: 20, miles: 89.0, flag: "ok", left: 25.8, width: 59.8 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "8:46 AM", stop: "3:56 PM", onRoad: "7h 10m", trips: 7, miles: 89.0, flag: "ok", left: 18.4, width: 47.8 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:37 AM", stop: "4:18 PM", onRoad: "8h 41m", trips: 11, miles: 140.0, flag: "ok", left: 10.8, width: 57.9 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "9:06 AM", stop: "1:13 PM", onRoad: "4h 7m", trips: 9, miles: 64.0, flag: "ok", left: 20.7, width: 27.4 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "9:08 AM", stop: "9:25 PM", onRoad: "12h 17m", trips: 7, miles: 8.0, flag: "short", left: 20.9, width: 79.1 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:55 AM", stop: "5:20 PM", onRoad: "7h 25m", trips: 20, miles: 74.0, flag: "ok", left: 26.1, width: 49.4 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "9:08 AM", stop: "2:02 PM", onRoad: "4h 54m", trips: 4, miles: 69.0, flag: "ok", left: 20.9, width: 32.7 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "12:32 PM", stop: "4:12 PM", onRoad: "3h 40m", trips: 15, miles: 22.0, flag: "ok", left: 43.6, width: 24.4 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Fri Oct 16",
  status: "ok",
  rows: [
    { location: "Fort Lauderdale", count: 6 },
    { location: "New York", count: 2 },
    { location: "Phoenix", count: 2 },
    { location: "Seattle", count: 2 },
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
