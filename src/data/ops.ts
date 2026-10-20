/** Floral Image FI Ops snapshot.
 * Coverage day: Monday Oct 19, 2026 (America/New_York). Tuesday digest covers Monday.
 * Salesforce figures pulled Tue Oct 20, 2026 ~5:40 AM ET (live MCP).
 * RouteMap Daily Changeover: Mon Oct 19 rows from routemap_2026-10-19.csv (pulled Tue Oct 20 ~4:37 AM ET). Pairs are customers / units. MTD is Oct MTD as of Oct 20 ~4:37 AM ET.
 * Geotab: local start/end + trips + miles from geotab-daily-start-end-local-2026-10-19.csv (pulled Tue Oct 20 ~4:30 AM ET).
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
  sales: "Tue Oct 20, 2026 · ~5:40 AM ET",
  routeDay: "Mon Oct 19",
  routePulled: "Tue Oct 20 · ~4:37 AM ET",
  routeMtdLabel: "Oct MTD as of Oct 20 ~4:37 AM ET",
  geotabDay: "Mon Oct 19",
  geotabPulled: "Tue Oct 20 · ~4:30 AM ET",
  sfRefreshDay: "Mon Oct 19",
  monthLabel: "October 2026",
  weekLabel: "Mon Oct 19",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1346, inactive: 214, weekly: 16222.04, monthly: 70237.75, trial: 3, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 13, cancelUnits: 17, cancelAmt: 695.70, cancelMoved: 3, sfDayUnits: 63, sfDayRows: 37, sfMtdUnits: 634, sfMtdRows: 412, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 744, inactive: 117, weekly: 10562.68, monthly: 45737.23, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 24, cancelAmt: 1262.39, cancelMoved: 0, sfDayUnits: 25, sfDayRows: 17, sfMtdUnits: 205, sfMtdRows: 129, routeDayCustomers: 17, routeDayUnits: 25, routeDayWindow: '10:17 AM–01:50 PM', routeMtdCustomers: 132, routeMtdUnits: 203, routeMtdPending: 5 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 58, weekly: 11503.10, monthly: 49818.95, trial: 26, collectTrial: 0, pending: 6, wonMonth: 9, wonWeek: 0, trialsMonth: 26, trialsWeek: 10, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 15, cancelAmt: 870, cancelMoved: 6, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 203, sfMtdRows: 113, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 131, routeMtdUnits: 225, routeMtdPending: 1 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 534, inactive: 72, weekly: 8094.25, monthly: 35046.80, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 5, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 4, cancelAmt: 250, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 208, sfMtdRows: 127, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 143, routeMtdUnits: 228, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 21, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 11, cancelUnits: 15, cancelAmt: 870, cancelMoved: 3, sfDayUnits: 11, sfDayRows: 10, sfMtdUnits: 340, sfMtdRows: 191, routeDayCustomers: 10, routeDayUnits: 11, routeDayWindow: '11:08 AM–12:14 PM', routeMtdCustomers: 167, routeMtdUnits: 300, routeMtdPending: 2 },
  { id: "austin", name: "Austin", totalUnits: 482, inactive: 58, weekly: 7244.84, monthly: 31369.70, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 10, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 54, sfDayRows: 33, sfMtdUnits: 153, sfMtdRows: 111, routeDayCustomers: 33, routeDayUnits: 54, routeDayWindow: '11:57 AM–03:29 PM', routeMtdCustomers: 101, routeMtdUnits: 140, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 483, inactive: 48, weekly: 8473.72, monthly: 36690.65, trial: 4, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 3, trialsWeek: 1, lostMonthDeals: 5, lostMonthUnits: 7, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 19, sfMtdUnits: 249, sfMtdRows: 197, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 430, inactive: 53, weekly: 7366.89, monthly: 31900.23, trial: 0, collectTrial: 0, pending: 4, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 50, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 311, sfMtdRows: 199, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 199, routeMtdUnits: 311, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 424, inactive: 39, weekly: 6219.82, monthly: 26931.44, trial: 14, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 2, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 315, sfMtdRows: 196, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 181, routeMtdUnits: 289, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 420, inactive: 54, weekly: 6511.10, monthly: 28192.42, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 370, sfMtdRows: 178, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 390, inactive: 26, weekly: 6293.46, monthly: 27250.47, trial: 1, collectTrial: 0, pending: 1, wonMonth: 6, wonWeek: 2, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 7, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 4, cancelAmt: 195, cancelMoved: 3, sfDayUnits: 17, sfDayRows: 15, sfMtdUnits: 244, sfMtdRows: 167, routeDayCustomers: 16, routeDayUnits: 18, routeDayWindow: '08:05 AM–01:44 PM', routeMtdCustomers: 203, routeMtdUnits: 279, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 387, inactive: 38, weekly: 5972.75, monthly: 25862.74, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 1, sfDayUnits: 7, sfDayRows: 6, sfMtdUnits: 113, sfMtdRows: 59, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 372, inactive: 49, weekly: 5141.55, monthly: 22263.43, trial: 16, collectTrial: 0, pending: 7, wonMonth: 5, wonWeek: 0, trialsMonth: 16, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 15, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 10, cancelAmt: 490, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 313, sfMtdRows: 139, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 140, routeMtdUnits: 315, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 357, inactive: 88, weekly: 4751.07, monthly: 20574.68, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 425, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 192, routeMtdUnits: 247, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 325, inactive: 31, weekly: 4453.56, monthly: 19283.16, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 13, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 45, cancelMoved: 1, sfDayUnits: 10, sfDayRows: 4, sfMtdUnits: 233, sfMtdRows: 126, routeDayCustomers: 4, routeDayUnits: 10, routeDayWindow: '09:00 AM–11:37 AM', routeMtdCustomers: 130, routeMtdUnits: 238, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 3, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 1, sfDayRows: 1, sfMtdUnits: 271, sfMtdRows: 170, routeDayCustomers: 1, routeDayUnits: 1, routeDayWindow: '10:26 AM–10:26 AM', routeMtdCustomers: 169, routeMtdUnits: 268, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 254, inactive: 4, weekly: 4617.20, monthly: 19991.36, trial: 24, collectTrial: 0, pending: 17, wonMonth: 12, wonWeek: 0, trialsMonth: 11, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 2, sfDayUnits: 7, sfDayRows: 4, sfMtdUnits: 257, sfMtdRows: 176, routeDayCustomers: 1, routeDayUnits: 1, routeDayWindow: '10:23 AM–10:23 AM', routeMtdCustomers: 150, routeMtdUnits: 219, routeMtdPending: 6 },
  { id: "vancouver", name: "Vancouver", totalUnits: 241, inactive: 21, weekly: 3123.84, monthly: 13525.98, trial: 2, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 38.09, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 89, sfMtdRows: 46, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 216, inactive: 16, weekly: 3397.05, monthly: 14709.77, trial: 7, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 5, cancelAmt: 265, cancelMoved: 1, sfDayUnits: 25, sfDayRows: 17, sfMtdUnits: 51, sfMtdRows: 33, routeDayCustomers: 17, routeDayUnits: 25, routeDayWindow: '09:14 AM–03:23 PM', routeMtdCustomers: 33, routeMtdUnits: 51, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 955, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 138, sfMtdRows: 82, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 77, routeMtdUnits: 132, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "10:51 AM", stop: "11:54 AM", onRoad: "1h 3m", trips: 3, miles: 0.0, flag: "short", left: 32.3, width: 7.0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "8:35 AM", stop: "1:22 PM", onRoad: "4h 47m", trips: 8, miles: 134.0, flag: "ok", left: 17.2, width: 31.9 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:28 AM", stop: "6:49 PM", onRoad: "11h 21m", trips: 17, miles: 164.0, flag: "ok", left: 9.8, width: 75.7 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "2:08 PM", stop: "3:35 PM", onRoad: "1h 27m", trips: 6, miles: 9.0, flag: "short", left: 54.2, width: 9.7 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "7:47 AM", stop: "4:53 PM", onRoad: "9h 6m", trips: 10, miles: 58.0, flag: "ok", left: 11.9, width: 60.7 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:18 AM", stop: "4:51 PM", onRoad: "7h 33m", trips: 23, miles: 86.0, flag: "ok", left: 22.0, width: 50.3 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "7:51 AM", stop: "12:27 PM", onRoad: "4h 36m", trips: 9, miles: 173.0, flag: "ok", left: 12.3, width: 30.7 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Mon Oct 19",
  status: "ok",
  rows: [
    { location: "Austin", count: 2 },
    { location: "Fort Lauderdale", count: 1 },
    { location: "Orange County", count: 1 },
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
