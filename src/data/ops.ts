/** Floral Image FI Ops snapshot.
 * Coverage day: Tuesday Oct 13, 2026 (America/New_York). Wednesday digest covers previous calendar day.
 * Salesforce figures pulled Wed Oct 14, 2026 ~5:40 AM ET (live MCP).
 * RouteMap Daily Changeover: Tue Oct 13 rows from routemap_2026-10-13.csv. Pairs are customers / units. MTD is Oct MTD as of Oct 14 ~4:40 AM ET.
 * Geotab: local start/end + trips + miles from geotab-daily-start-end-local-2026-10-13.csv.
 * Units on hire = Closed Won Total Units − Inactive Units.
 * Closed won units use product Start Date, not close date.
 * sfDayUnits/sfDayRows/sfMtdUnits/sfMtdRows = Product_Refresh__c Refresh_Date_Formula__c and Refresh_Units__c (not Closed Won).
 * Open Trial stock: IsConverted=false AND Status=Trial; Collect Trial stock: Status=Collect Trial or Pending.
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
  sales: "Wed Oct 14, 2026 · ~5:40 AM ET",
  routeDay: "Tue Oct 13",
  routePulled: "Wed Oct 14 · ~4:40 AM ET",
  routeMtdLabel: "Oct MTD as of Oct 14 ~4:40 AM ET",
  geotabDay: "Tue Oct 13",
  geotabPulled: "Wed Oct 14 · ~4:29 AM ET",
  sfRefreshDay: "Tue Oct 13",
  monthLabel: "October 2026",
  weekLabel: "Mon Oct 12 – Tue Oct 13",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1349, inactive: 215, weekly: 16249.92, monthly: 70358.43, trial: 3, collectTrial: 5, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 11, cancelUnits: 14, cancelAmt: 833.79, cancelMoved: 1, sfDayUnits: 50, sfDayRows: 34, sfMtdUnits: 428, sfMtdRows: 280, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 744, inactive: 117, weekly: 10562.68, monthly: 45737.23, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 24, cancelAmt: 1818.22, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 57, sfMtdRows: 44, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 45, routeMtdUnits: 55, routeMtdPending: 3 },
  { id: "atlanta", name: "Atlanta", totalUnits: 556, inactive: 58, weekly: 11802.29, monthly: 51115.22, trial: 37, collectTrial: 0, pending: 5, wonMonth: 6, wonWeek: 1, trialsMonth: 37, trialsWeek: 5, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 5, cancelAmt: 460.90, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 151, sfMtdRows: 79, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 96, routeMtdUnits: 172, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 534, inactive: 72, weekly: 8094.25, monthly: 35046.80, trial: 8, collectTrial: 18, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 5, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 4, cancelAmt: 360.07, cancelMoved: 0, sfDayUnits: 25, sfDayRows: 12, sfMtdUnits: 159, sfMtdRows: 94, routeDayCustomers: 15, routeDayUnits: 28, routeDayWindow: '12:32 PM–05:17 PM, 11:34 AM–02:45 PM', routeMtdCustomers: 108, routeMtdUnits: 177, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 490, inactive: 28, weekly: 8021.88, monthly: 34734.26, trial: 21, collectTrial: 17, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 1152.24, cancelMoved: 2, sfDayUnits: 12, sfDayRows: 5, sfMtdUnits: 293, sfMtdRows: 160, routeDayCustomers: 5, routeDayUnits: 12, routeDayWindow: '11:14 AM–12:28 PM', routeMtdCustomers: 139, routeMtdUnits: 255, routeMtdPending: 6 },
  { id: "austin", name: "Austin", totalUnits: 482, inactive: 58, weekly: 7244.84, monthly: 31369.70, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 10, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 13, cancelAmt: 993.81, cancelMoved: 0, sfDayUnits: 5, sfDayRows: 4, sfMtdUnits: 71, sfMtdRows: 57, routeDayCustomers: 4, routeDayUnits: 5, routeDayWindow: '12:19 PM–01:37 PM', routeMtdCustomers: 47, routeMtdUnits: 58, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 482, inactive: 48, weekly: 8455.77, monthly: 36612.91, trial: 5, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 0, trialsMonth: 4, trialsWeek: 1, lostMonthDeals: 5, lostMonthUnits: 7, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 24, sfDayRows: 21, sfMtdUnits: 171, sfMtdRows: 131, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 430, inactive: 53, weekly: 7366.89, monthly: 31900.23, trial: 0, collectTrial: 0, pending: 4, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 72.01, cancelMoved: 1, sfDayUnits: 5, sfDayRows: 5, sfMtdUnits: 283, sfMtdRows: 177, routeDayCustomers: 5, routeDayUnits: 5, routeDayWindow: '12:45 PM–01:26 PM', routeMtdCustomers: 177, routeMtdUnits: 283, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 424, inactive: 39, weekly: 6219.82, monthly: 26931.44, trial: 14, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 2, trialsWeek: 1, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 40, sfDayRows: 23, sfMtdUnits: 282, sfMtdRows: 174, routeDayCustomers: 23, routeDayUnits: 40, routeDayWindow: '10:38 AM–05:35 PM', routeMtdCustomers: 159, routeMtdUnits: 256, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 420, inactive: 54, weekly: 6511.10, monthly: 28192.42, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 28, sfDayRows: 15, sfMtdUnits: 293, sfMtdRows: 141, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 390, inactive: 26, weekly: 6286.82, monthly: 27221.66, trial: 2, collectTrial: 3, pending: 1, wonMonth: 3, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 3, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 6, cancelAmt: 468.10, cancelMoved: 3, sfDayUnits: 23, sfDayRows: 16, sfMtdUnits: 186, sfMtdRows: 116, routeDayCustomers: 16, routeDayUnits: 23, routeDayWindow: '09:31 AM–04:32 PM', routeMtdCustomers: 148, routeMtdUnits: 216, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 387, inactive: 38, weekly: 5972.75, monthly: 25862.74, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 547.31, cancelMoved: 1, sfDayUnits: 17, sfDayRows: 8, sfMtdUnits: 67, sfMtdRows: 37, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 368, inactive: 49, weekly: 5076.70, monthly: 21982.57, trial: 19, collectTrial: 0, pending: 7, wonMonth: 1, wonWeek: 1, trialsMonth: 19, trialsWeek: 4, lostMonthDeals: 5, lostMonthUnits: 15, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 10, cancelAmt: 705.75, cancelMoved: 0, sfDayUnits: 31, sfDayRows: 13, sfMtdUnits: 258, sfMtdRows: 115, routeDayCustomers: 14, routeDayUnits: 33, routeDayWindow: '08:53 AM–03:30 PM', routeMtdCustomers: 116, routeMtdUnits: 260, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 357, inactive: 88, weekly: 4754.40, monthly: 20589.08, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 612.13, cancelMoved: 4, sfDayUnits: 8, sfDayRows: 6, sfMtdUnits: 221, sfMtdRows: 165, routeDayCustomers: 3, routeDayUnits: 3, routeDayWindow: '09:49 AM–10:47 AM', routeMtdCustomers: 170, routeMtdUnits: 223, routeMtdPending: 2 },
  { id: "phoenix", name: "Phoenix", totalUnits: 327, inactive: 31, weekly: 4488.49, monthly: 19434.39, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 10, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 144.03, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 17, sfMtdUnits: 108, sfMtdRows: 71, routeDayCustomers: 18, routeDayUnits: 22, routeDayWindow: '11:52 AM–04:02 PM', routeMtdCustomers: 73, routeMtdUnits: 110, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 284, inactive: 15, weekly: 4765.09, monthly: 20632.29, trial: 0, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 18, sfDayRows: 12, sfMtdUnits: 204, sfMtdRows: 131, routeDayCustomers: 14, routeDayUnits: 20, routeDayWindow: '11:33 AM–03:54 PM', routeMtdCustomers: 130, routeMtdUnits: 201, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 255, inactive: 4, weekly: 4637.16, monthly: 20077.78, trial: 32, collectTrial: 2, pending: 18, wonMonth: 12, wonWeek: 0, trialsMonth: 17, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 86.42, cancelMoved: 1, sfDayUnits: 21, sfDayRows: 19, sfMtdUnits: 169, sfMtdRows: 122, routeDayCustomers: 19, routeDayUnits: 21, routeDayWindow: '11:29 AM–05:36 PM', routeMtdCustomers: 102, routeMtdUnits: 143, routeMtdPending: 2 },
  { id: "vancouver", name: "Vancouver", totalUnits: 241, inactive: 21, weekly: 3111.18, monthly: 13471.16, trial: 3, collectTrial: 2, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 109.71, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 6, sfMtdUnits: 21, sfMtdRows: 6, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 216, inactive: 16, weekly: 3397.05, monthly: 14709.77, trial: 5, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 5, cancelAmt: 381.68, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 1, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 1375.49, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 137, sfMtdRows: 81, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 76, routeMtdUnits: 131, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 1, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 43.21, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:28 AM", stop: "7:46 PM", onRoad: "10h 18m", trips: 32, miles: 84.0, flag: "ok", left: 23.1, width: 68.7 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "CT", start: "8:35 AM", stop: "11:40 PM", onRoad: "15h 5m", trips: 13, miles: 109.0, flag: "ok", left: 17.2, width: 82.8 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "9:35 AM", stop: "6:37 PM", onRoad: "9h 2m", trips: 19, miles: 53.0, flag: "ok", left: 23.9, width: 60.2 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "8:44 AM", stop: "3:05 PM", onRoad: "6h 21m", trips: 12, miles: 151.0, flag: "ok", left: 18.2, width: 42.3 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:25 AM", stop: "4:48 PM", onRoad: "9h 23m", trips: 13, miles: 113.0, flag: "ok", left: 9.4, width: 62.6 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "8:16 AM", stop: "2:48 PM", onRoad: "6h 32m", trips: 18, miles: 82.0, flag: "ok", left: 15.1, width: 43.6 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "9:08 AM", stop: "9:11 AM", onRoad: "0h 3m", trips: 1, miles: 0.0, flag: "short", left: 20.9, width: 0.3 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:30 AM", stop: "7:47 PM", onRoad: "10h 17m", trips: 32, miles: 66.0, flag: "ok", left: 23.3, width: 68.6 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:48 AM", stop: "10:15 AM", onRoad: "1h 27m", trips: 7, miles: 5.0, flag: "short", left: 18.7, width: 9.7 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "11:18 AM", stop: "4:25 PM", onRoad: "5h 7m", trips: 17, miles: 63.0, flag: "ok", left: 35.3, width: 34.1 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "10:13 AM", stop: "5:35 PM", onRoad: "7h 22m", trips: 19, miles: 93.0, flag: "ok", left: 28.1, width: 49.1 },
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
