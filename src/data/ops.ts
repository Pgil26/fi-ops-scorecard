/** Floral Image FI Ops snapshot.
 * Coverage day: Friday Oct 10, 2026 (America/New_York). Monday digest covers Friday.
 * Salesforce figures pulled Mon Oct 12, 2026 ~9:30 AM ET (live MCP).
 * RouteMap Daily Changeover: latest box export is Thu Oct 8 (pulled Fri Oct 9); no Fri Oct 10 file.
 * Geotab: no Fri Oct 10 trips export on box (have Sat Oct 11 + older Oct 8–9 only) — vans marked missing.
 * Units on hire = Closed Won Total Units − Inactive Units.
 * Closed won units use product Start Date, not close date.
 * sfDayUnits/sfDayRows/sfMtdUnits/sfMtdRows = Product_Refresh__c Refresh_Date_Formula__c and Refresh_Units__c (not Closed Won).
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
  sales: "Mon Oct 12, 2026 · 9:30 AM ET",
  routeDay: "Thu Oct 8",
  routePulled: "Fri Oct 9 · 3:06 PM ET",
  geotabDay: "Fri Oct 10 (missing)",
  geotabPulled: "no Fri export on box",
  sfRefreshDay: "Fri Oct 10",
  monthLabel: "October 2026",
  weekLabel: "Mon Oct 5 – Fri Oct 10",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1350, inactive: 215, weekly: 16263.85, monthly: 70418.77, trial: 2, collectTrial: 5, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 13, cancelAmt: 773.45, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 378, sfMtdRows: 246, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 744, inactive: 117, weekly: 10562.68, monthly: 45737.23, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 24, cancelAmt: 1818.22, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 46, sfMtdRows: 36, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: 37, routeMtdUnits: 45, routeMtdPending: 2 },
  { id: "atlanta", name: "Atlanta", totalUnits: 555, inactive: 58, weekly: 11782.33, monthly: 51028.81, trial: 60, collectTrial: 0, pending: 1, wonMonth: 5, wonWeek: 4, trialsMonth: 60, trialsWeek: 44, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 5, cancelAmt: 460.9, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 132, sfMtdRows: 69, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: 72, routeMtdUnits: 129, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 534, inactive: 72, weekly: 8094.25, monthly: 35046.8, trial: 8, collectTrial: 18, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 5, lostWeekDeals: 2, lostWeekUnits: 2, cancelDeals: 1, cancelUnits: 4, cancelAmt: 360.07, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 106, sfMtdRows: 64, routeDayCustomers: 11, routeDayUnits: 23, routeDayWindow: "9:32 AM\u20133:01 PM", routeMtdCustomers: 74, routeMtdUnits: 120, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 490, inactive: 28, weekly: 8021.88, monthly: 34734.26, trial: 36, collectTrial: 24, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 1152.24, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 214, sfMtdRows: 128, routeDayCustomers: 1, routeDayUnits: 1, routeDayWindow: "11:54 AM", routeMtdCustomers: 90, routeMtdUnits: 157, routeMtdPending: 5 },
  { id: "austin", name: "Austin", totalUnits: 482, inactive: 58, weekly: 7244.84, monthly: 31369.7, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 10, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 6, cancelUnits: 13, cancelAmt: 993.81, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 54, sfMtdRows: 42, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: 28, routeMtdUnits: 36, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 482, inactive: 48, weekly: 8455.77, monthly: 36612.91, trial: 5, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 0, trialsMonth: 3, trialsWeek: 3, lostMonthDeals: 4, lostMonthUnits: 6, lostWeekDeals: 3, lostWeekUnits: 3, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 146, sfMtdRows: 109, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 430, inactive: 53, weekly: 7366.89, monthly: 31900.23, trial: 2, collectTrial: 0, pending: 7, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 72.01, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 252, sfMtdRows: 159, routeDayCustomers: 26, routeDayUnits: 40, routeDayWindow: "9:14 AM\u20132:34 PM", routeMtdCustomers: 137, routeMtdUnits: 216, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 424, inactive: 39, weekly: 6219.82, monthly: 26931.44, trial: 13, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 3, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 212, sfMtdRows: 132, routeDayCustomers: 36, routeDayUnits: 52, routeDayWindow: "9:40 AM\u20135:17 PM", routeMtdCustomers: 100, routeMtdUnits: 155, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 420, inactive: 54, weekly: 6511.1, monthly: 28192.42, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 244, sfMtdRows: 118, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 390, inactive: 26, weekly: 6286.82, monthly: 27221.66, trial: 2, collectTrial: 3, pending: 1, wonMonth: 3, wonWeek: 2, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 3, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 6, cancelAmt: 468.1, cancelMoved: 3, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 143, sfMtdRows: 86, routeDayCustomers: 12, routeDayUnits: 21, routeDayWindow: "9:55 AM\u20132:37 PM", routeMtdCustomers: 101, routeMtdUnits: 155, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 387, inactive: 38, weekly: 5972.75, monthly: 25862.74, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 8, cancelAmt: 626.53, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 30, sfMtdRows: 21, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "new-york", name: "New York", totalUnits: 367, inactive: 49, weekly: 5060.06, monthly: 21910.56, trial: 31, collectTrial: 0, pending: 5, wonMonth: 0, wonWeek: 0, trialsMonth: 25, trialsWeek: 25, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 10, cancelAmt: 705.75, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 183, sfMtdRows: 85, routeDayCustomers: 24, routeDayUnits: 32, routeDayWindow: "8:51 AM\u20133:39 PM", routeMtdCustomers: 58, routeMtdUnits: 131, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 357, inactive: 88, weekly: 4754.4, monthly: 20589.08, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 612.13, cancelMoved: 4, sfDayUnits: 8, sfDayRows: 5, sfMtdUnits: 172, sfMtdRows: 125, routeDayCustomers: 7, routeDayUnits: 7, routeDayWindow: "9:36 AM\u20135:56 PM", routeMtdCustomers: 62, routeMtdUnits: 76, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 327, inactive: 31, weekly: 4488.49, monthly: 19434.39, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 10, lostWeekDeals: 3, lostWeekUnits: 7, cancelDeals: 1, cancelUnits: 2, cancelAmt: 144.03, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 87, sfMtdRows: 54, routeDayCustomers: 19, routeDayUnits: 25, routeDayWindow: "11:10 AM\u20132:17 PM", routeMtdCustomers: 52, routeMtdUnits: 82, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 284, inactive: 15, weekly: 4765.09, monthly: 20632.29, trial: 0, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 2, lostWeekUnits: 2, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 154, sfMtdRows: 98, routeDayCustomers: 26, routeDayUnits: 35, routeDayWindow: "10:44 AM\u20133:11 PM", routeMtdCustomers: 96, routeMtdUnits: 152, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 256, inactive: 4, weekly: 4660.45, monthly: 20178.6, trial: 33, collectTrial: 1, pending: 18, wonMonth: 12, wonWeek: 11, trialsMonth: 18, trialsWeek: 13, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 86.42, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 148, sfMtdRows: 103, routeDayCustomers: 15, routeDayUnits: 26, routeDayWindow: "9:50 AM\u20135:22 PM", routeMtdCustomers: 81, routeMtdUnits: 117, routeMtdPending: 2 },
  { id: "vancouver", name: "Vancouver", totalUnits: 241, inactive: 21, weekly: 3111.18, monthly: 13471.16, trial: 3, collectTrial: 2, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 109.71, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 217, inactive: 16, weekly: 3415.34, monthly: 14788.98, trial: 5, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 4, cancelAmt: 302.46, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 1, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 2, lostWeekUnits: 2, cancelDeals: 9, cancelUnits: 21, cancelAmt: 1375.49, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 137, sfMtdRows: 81, routeDayCustomers: 15, routeDayUnits: 23, routeDayWindow: "8:50 AM\u20132:28 PM", routeMtdCustomers: 76, routeMtdUnits: 131, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 1, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 43.21, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "\u2014", stop: "\u2014", onRoad: "No Fri data", trips: 0, miles: 0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "\u2014", stop: "\u2014", onRoad: "No Fri data", trips: 0, miles: 0, flag: "none", left: 0, width: 0 },
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "\u2014", stop: "\u2014", onRoad: "No Fri data", trips: 0, miles: 0, flag: "none", left: 0, width: 0 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "\u2014", stop: "\u2014", onRoad: "No Fri data", trips: 0, miles: 0, flag: "none", left: 0, width: 0 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "\u2014", stop: "\u2014", onRoad: "No Fri data", trips: 0, miles: 0, flag: "none", left: 0, width: 0 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "\u2014", stop: "\u2014", onRoad: "No Fri data", trips: 0, miles: 0, flag: "none", left: 0, width: 0 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "\u2014", stop: "\u2014", onRoad: "No Fri data", trips: 0, miles: 0, flag: "none", left: 0, width: 0 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "\u2014", stop: "\u2014", onRoad: "No Fri data", trips: 0, miles: 0, flag: "none", left: 0, width: 0 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "\u2014", stop: "\u2014", onRoad: "No Fri data", trips: 0, miles: 0, flag: "none", left: 0, width: 0 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "\u2014", stop: "\u2014", onRoad: "No Fri data", trips: 0, miles: 0, flag: "none", left: 0, width: 0 },
];

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
