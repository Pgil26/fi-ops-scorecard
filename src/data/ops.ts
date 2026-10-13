/** Floral Image FI Ops snapshot.
 * Coverage day: Monday Oct 12, 2026 (America/New_York). Tuesday digest covers previous calendar day.
 * Salesforce figures pulled Tue Oct 13, 2026 ~9:26 AM ET (live MCP).
 * RouteMap: Pending — Oct 12 export not yet available (RouteMap login expired). No RouteMap figures shown; pairs are customers/units.
 * Geotab: local start/end + trips from geotab-daily-start-end-local-2026-10-12.csv; miles from FloralImage_Trips_2026-10-12.csv.
 * Units on hire = Closed Won Total Units − Inactive Units.
 * Closed won units use product Start Date, not close date.
 * sfDayUnits/sfDayRows/sfMtdUnits/sfMtdRows = Product_Refresh__c Refresh_Date_Formula__c and Refresh_Units__c (not Closed Won).
 * Open Trial stock: IsConverted=false AND Status=Trial (corrected; not inflated OC/SF counts).
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
  sales: "Tue Oct 13, 2026 · 9:26 AM ET",
  routeDay: "Mon Oct 12",
  routePulled: "not pulled",
  routeStatus: "Pending — Oct 12 export not yet available (RouteMap login expired)",
  geotabDay: "Mon Oct 12",
  geotabPulled: "Tue Oct 13 · ~9:07 AM ET",
  sfRefreshDay: "Mon Oct 12",
  monthLabel: "October 2026",
  weekLabel: "Mon Oct 12 – (week just started)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1350, inactive: 215, weekly: 16263.85, monthly: 70418.77, trial: 2, collectTrial: 5, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 13, cancelAmt: 773.45, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 378, sfMtdRows: 246, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 744, inactive: 117, weekly: 10562.68, monthly: 45737.23, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 24, cancelAmt: 1818.22, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 49, sfMtdRows: 38, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "atlanta", name: "Atlanta", totalUnits: 555, inactive: 58, weekly: 11782.33, monthly: 51028.81, trial: 45, collectTrial: 0, pending: 3, wonMonth: 5, wonWeek: 0, trialsMonth: 45, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 5, cancelAmt: 460.9, cancelMoved: 2, sfDayUnits: 19, sfDayRows: 10, sfMtdUnits: 151, sfMtdRows: 79, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "san-francisco", name: "San Francisco", totalUnits: 534, inactive: 72, weekly: 8094.25, monthly: 35046.8, trial: 8, collectTrial: 18, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 5, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 4, cancelAmt: 360.07, cancelMoved: 0, sfDayUnits: 28, sfDayRows: 18, sfMtdUnits: 134, sfMtdRows: 82, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "orange-county", name: "Orange County", totalUnits: 490, inactive: 28, weekly: 8021.88, monthly: 34734.26, trial: 33, collectTrial: 24, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 1152.24, cancelMoved: 2, sfDayUnits: 11, sfDayRows: 7, sfMtdUnits: 255, sfMtdRows: 146, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "austin", name: "Austin", totalUnits: 482, inactive: 58, weekly: 7244.84, monthly: 31369.7, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 10, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 13, cancelAmt: 993.81, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 54, sfMtdRows: 42, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 482, inactive: 48, weekly: 8455.77, monthly: 36612.91, trial: 5, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 7, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0.0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 147, sfMtdRows: 110, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 430, inactive: 53, weekly: 7366.89, monthly: 31900.23, trial: 0, collectTrial: 0, pending: 4, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 72.01, cancelMoved: 1, sfDayUnits: 26, sfDayRows: 13, sfMtdUnits: 278, sfMtdRows: 172, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "chicago", name: "Chicago", totalUnits: 424, inactive: 39, weekly: 6219.82, monthly: 26931.44, trial: 14, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 2, trialsWeek: 1, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0.0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 212, sfMtdRows: 132, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "san-diego", name: "San Diego", totalUnits: 420, inactive: 54, weekly: 6511.1, monthly: 28192.42, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0.0, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 8, sfMtdUnits: 265, sfMtdRows: 126, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "dallas", name: "Dallas", totalUnits: 390, inactive: 26, weekly: 6286.82, monthly: 27221.66, trial: 2, collectTrial: 3, pending: 1, wonMonth: 3, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 3, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 6, cancelAmt: 468.1, cancelMoved: 3, sfDayUnits: 20, sfDayRows: 14, sfMtdUnits: 163, sfMtdRows: 100, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "houston", name: "Houston", totalUnits: 387, inactive: 38, weekly: 5972.75, monthly: 25862.74, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 8, cancelAmt: 626.53, cancelMoved: 1, sfDayUnits: 20, sfDayRows: 8, sfMtdUnits: 50, sfMtdRows: 29, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "new-york", name: "New York", totalUnits: 368, inactive: 49, weekly: 5076.7, monthly: 21982.57, trial: 25, collectTrial: 0, pending: 5, wonMonth: 1, wonWeek: 1, trialsMonth: 22, trialsWeek: 2, lostMonthDeals: 5, lostMonthUnits: 15, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 10, cancelAmt: 705.75, cancelMoved: 0, sfDayUnits: 44, sfDayRows: 17, sfMtdUnits: 227, sfMtdRows: 102, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "portland", name: "Portland", totalUnits: 357, inactive: 88, weekly: 4754.4, monthly: 20589.08, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 612.13, cancelMoved: 4, sfDayUnits: 41, sfDayRows: 34, sfMtdUnits: 213, sfMtdRows: 159, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "phoenix", name: "Phoenix", totalUnits: 327, inactive: 31, weekly: 4488.49, monthly: 19434.39, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 10, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 144.03, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 87, sfMtdRows: 54, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 284, inactive: 15, weekly: 4765.09, monthly: 20632.29, trial: 0, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0.0, cancelMoved: 0, sfDayUnits: 32, sfDayRows: 21, sfMtdUnits: 186, sfMtdRows: 119, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 256, inactive: 4, weekly: 4660.45, monthly: 20178.6, trial: 33, collectTrial: 1, pending: 18, wonMonth: 12, wonWeek: 0, trialsMonth: 18, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 86.42, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 148, sfMtdRows: 103, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "vancouver", name: "Vancouver", totalUnits: 241, inactive: 21, weekly: 3111.18, monthly: 13471.16, trial: 3, collectTrial: 2, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 109.71, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 217, inactive: 16, weekly: 3415.34, monthly: 14788.98, trial: 5, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 4, cancelAmt: 302.46, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 1, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 1375.49, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 137, sfMtdRows: 81, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 1, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 43.21, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:16 AM", stop: "5:59 PM", onRoad: "10h 43m", trips: 18, miles: 189.0, flag: "ok", left: 8.4, width: 71.4 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:18 AM", stop: "5:17 PM", onRoad: "7h 59m", trips: 29, miles: 50.0, flag: "ok", left: 22.0, width: 53.2 },
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "8:29 AM", stop: "5:27 PM", onRoad: "8h 58m", trips: 28, miles: 130.0, flag: "ok", left: 16.6, width: 59.8 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "9:23 AM", stop: "7:17 PM", onRoad: "9h 54m", trips: 12, miles: 95.0, flag: "ok", left: 22.6, width: 66.0 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "9:15 AM", stop: "2:18 PM", onRoad: "5h 3m", trips: 12, miles: 82.0, flag: "ok", left: 21.7, width: 33.7 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "8:48 AM", stop: "4:31 PM", onRoad: "7h 43m", trips: 22, miles: 95.0, flag: "ok", left: 18.7, width: 51.4 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0, flag: "none", left: 0, width: 0 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "9:11 AM", stop: "3:13 PM", onRoad: "6h 2m", trips: 7, miles: 110.0, flag: "ok", left: 21.2, width: 40.2 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "8:24 AM", stop: "9:13 AM", onRoad: "0h 49m", trips: 2, miles: 2.0, flag: "short", left: 16.0, width: 5.4 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "7:51 AM", stop: "6:31 PM", onRoad: "10h 40m", trips: 13, miles: 46.0, flag: "ok", left: 12.3, width: 71.1 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "CT", start: "9:56 AM", stop: "11:24 AM", onRoad: "1h 28m", trips: 4, miles: 7.0, flag: "short", left: 26.2, width: 9.8 },
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
