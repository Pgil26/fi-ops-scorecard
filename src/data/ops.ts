/** Floral Image FI Ops snapshot.
 * Coverage day: Wednesday Oct 14, 2026 (America/New_York). Thursday digest covers previous calendar day.
 * Salesforce figures pulled Thu Oct 15, 2026 ~5:33 AM ET (live MCP).
 * RouteMap Daily Changeover: Wed Oct 14 rows from routemap_2026-10-14.csv (pulled Thu Oct 15 ~4:41 AM ET). Pairs are customers / units. MTD is Oct MTD as of Oct 15 ~4:41 AM ET.
 * Geotab: local start/end + trips + miles from geotab-daily-start-end-local-2026-10-14.csv (pulled Thu Oct 15 ~4:25 AM ET).
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
  sales: "Thu Oct 15, 2026 · ~5:33 AM ET",
  routeDay: "Wed Oct 14",
  routePulled: "Thu Oct 15 · ~4:41 AM ET",
  routeMtdLabel: "Oct MTD as of Oct 15 ~4:41 AM ET",
  geotabDay: "Wed Oct 14",
  geotabPulled: "Thu Oct 15 · ~4:25 AM ET",
  sfRefreshDay: "Wed Oct 14",
  monthLabel: "October 2026",
  weekLabel: "Mon Oct 12 – Wed Oct 14",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1348, inactive: 215, weekly: 16237.25, monthly: 70303.58, trial: 3, collectTrial: 5, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 12, cancelUnits: 15, cancelAmt: 616.99, cancelMoved: 2, sfDayUnits: 47, sfDayRows: 33, sfMtdUnits: 475, sfMtdRows: 313, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 744, inactive: 117, weekly: 10562.68, monthly: 45737.23, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 24, cancelAmt: 1262.39, cancelMoved: 0, sfDayUnits: 5, sfDayRows: 1, sfMtdUnits: 89, sfMtdRows: 64, routeDayCustomers: 3, routeDayUnits: 6, routeDayWindow: '12:00 AM–12:00 AM, 10:08 AM–10:08 AM', routeMtdCustomers: 67, routeMtdUnits: 87, routeMtdPending: 5 },
  { id: "atlanta", name: "Atlanta", totalUnits: 552, inactive: 58, weekly: 11572.95, monthly: 50121.42, trial: 28, collectTrial: 0, pending: 8, wonMonth: 7, wonWeek: 2, trialsMonth: 28, trialsWeek: 5, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 10, cancelAmt: 570, cancelMoved: 4, sfDayUnits: 8, sfDayRows: 7, sfMtdUnits: 192, sfMtdRows: 107, routeDayCustomers: 8, routeDayUnits: 10, routeDayWindow: '08:54 AM–12:00 PM', routeMtdCustomers: 125, routeMtdUnits: 215, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 534, inactive: 72, weekly: 8094.25, monthly: 35046.80, trial: 8, collectTrial: 18, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 5, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 4, cancelAmt: 250, cancelMoved: 0, sfDayUnits: 23, sfDayRows: 19, sfMtdUnits: 182, sfMtdRows: 113, routeDayCustomers: 20, routeDayUnits: 24, routeDayWindow: '10:04 AM–04:51 PM', routeMtdCustomers: 128, routeMtdUnits: 201, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 490, inactive: 28, weekly: 8021.88, monthly: 34734.26, trial: 21, collectTrial: 17, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 800, cancelMoved: 2, sfDayUnits: 4, sfDayRows: 1, sfMtdUnits: 309, sfMtdRows: 170, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 148, routeMtdUnits: 266, routeMtdPending: 7 },
  { id: "austin", name: "Austin", totalUnits: 482, inactive: 58, weekly: 7244.84, monthly: 31369.70, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 10, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 71, sfMtdRows: 57, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 47, routeMtdUnits: 58, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 482, inactive: 48, weekly: 8455.77, monthly: 36612.91, trial: 5, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 0, trialsMonth: 4, trialsWeek: 1, lostMonthDeals: 5, lostMonthUnits: 7, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 23, sfDayRows: 19, sfMtdUnits: 196, sfMtdRows: 152, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 430, inactive: 53, weekly: 7366.89, monthly: 31900.23, trial: 0, collectTrial: 0, pending: 4, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 50, cancelMoved: 1, sfDayUnits: 28, sfDayRows: 22, sfMtdUnits: 311, sfMtdRows: 199, routeDayCustomers: 22, routeDayUnits: 28, routeDayWindow: '10:07 AM–02:20 PM', routeMtdCustomers: 199, routeMtdUnits: 311, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 424, inactive: 39, weekly: 6219.82, monthly: 26931.44, trial: 14, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 2, trialsWeek: 1, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 33, sfDayRows: 22, sfMtdUnits: 315, sfMtdRows: 196, routeDayCustomers: 22, routeDayUnits: 33, routeDayWindow: '10:44 AM–04:45 PM', routeMtdCustomers: 181, routeMtdUnits: 289, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 420, inactive: 54, weekly: 6511.10, monthly: 28192.42, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 34, sfDayRows: 18, sfMtdUnits: 327, sfMtdRows: 159, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 388, inactive: 26, weekly: 6256.88, monthly: 27092.04, trial: 2, collectTrial: 3, pending: 1, wonMonth: 3, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 4, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 6, cancelUnits: 7, cancelAmt: 365, cancelMoved: 4, sfDayUnits: 17, sfDayRows: 15, sfMtdUnits: 203, sfMtdRows: 131, routeDayCustomers: 15, routeDayUnits: 18, routeDayWindow: '09:26 AM–03:34 PM', routeMtdCustomers: 163, routeMtdUnits: 234, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 387, inactive: 38, weekly: 5972.75, monthly: 25862.74, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 67, sfMtdRows: 37, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 368, inactive: 49, weekly: 5076.70, monthly: 21982.57, trial: 16, collectTrial: 0, pending: 7, wonMonth: 1, wonWeek: 1, trialsMonth: 16, trialsWeek: 8, lostMonthDeals: 5, lostMonthUnits: 15, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 10, cancelAmt: 490, cancelMoved: 0, sfDayUnits: 37, sfDayRows: 15, sfMtdUnits: 295, sfMtdRows: 130, routeDayCustomers: 15, routeDayUnits: 37, routeDayWindow: '08:52 AM–03:30 PM', routeMtdCustomers: 131, routeMtdUnits: 297, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 357, inactive: 88, weekly: 4751.07, monthly: 20574.68, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 425, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 181, routeMtdUnits: 236, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 327, inactive: 31, weekly: 4488.49, monthly: 19434.39, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 10, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 100, cancelMoved: 0, sfDayUnits: 23, sfDayRows: 9, sfMtdUnits: 131, sfMtdRows: 80, routeDayCustomers: 10, routeDayUnits: 24, routeDayWindow: '11:53 AM–02:24 PM', routeMtdCustomers: 83, routeMtdUnits: 134, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 284, inactive: 15, weekly: 4765.09, monthly: 20632.29, trial: 0, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 40, sfDayRows: 22, sfMtdUnits: 244, sfMtdRows: 153, routeDayCustomers: 22, routeDayUnits: 40, routeDayWindow: '09:44 AM–12:15 PM', routeMtdCustomers: 152, routeMtdUnits: 241, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 255, inactive: 4, weekly: 4637.16, monthly: 20077.78, trial: 28, collectTrial: 1, pending: 17, wonMonth: 12, wonWeek: 0, trialsMonth: 13, trialsWeek: 3, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 60, cancelMoved: 1, sfDayUnits: 23, sfDayRows: 18, sfMtdUnits: 192, sfMtdRows: 140, routeDayCustomers: 16, routeDayUnits: 21, routeDayWindow: '09:47 AM–03:41 PM', routeMtdCustomers: 118, routeMtdUnits: 164, routeMtdPending: 2 },
  { id: "vancouver", name: "Vancouver", totalUnits: 241, inactive: 21, weekly: 3111.18, monthly: 13471.16, trial: 3, collectTrial: 2, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 76.18, cancelMoved: 0, sfDayUnits: 19, sfDayRows: 7, sfMtdUnits: 40, sfMtdRows: 13, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 216, inactive: 16, weekly: 3397.05, monthly: 14709.77, trial: 5, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 5, cancelAmt: 265, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 1, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 955, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 137, sfMtdRows: 81, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 76, routeMtdUnits: 131, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 1, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:27 AM", stop: "6:43 PM", onRoad: "9h 16m", trips: 28, miles: 86.0, flag: "ok", left: 23.0, width: 61.8 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "9:55 AM", stop: "3:06 PM", onRoad: "5h 11m", trips: 13, miles: 69.0, flag: "ok", left: 26.1, width: 34.6 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "9:27 AM", stop: "7:02 PM", onRoad: "9h 35m", trips: 19, miles: 55.0, flag: "ok", left: 23.0, width: 63.9 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "8:01 AM", stop: "2:33 PM", onRoad: "6h 32m", trips: 12, miles: 105.0, flag: "ok", left: 13.4, width: 43.6 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:39 AM", stop: "4:06 PM", onRoad: "8h 27m", trips: 15, miles: 56.0, flag: "ok", left: 11.0, width: 56.3 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "8:14 AM", stop: "12:27 PM", onRoad: "4h 13m", trips: 7, miles: 99.0, flag: "ok", left: 14.9, width: 28.1 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "9:05 AM", stop: "11:41 AM", onRoad: "2h 36m", trips: 3, miles: 0.0, flag: "short", left: 20.6, width: 17.3 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:30 AM", stop: "7:03 PM", onRoad: "9h 33m", trips: 35, miles: 58.0, flag: "ok", left: 23.3, width: 63.7 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:34 AM", stop: "2:46 PM", onRoad: "6h 12m", trips: 8, miles: 80.0, flag: "ok", left: 17.1, width: 41.3 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "11:15 AM", stop: "2:55 PM", onRoad: "3h 40m", trips: 12, miles: 50.0, flag: "ok", left: 35.0, width: 24.4 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "8:43 AM", stop: "4:51 PM", onRoad: "8h 8m", trips: 19, miles: 114.0, flag: "ok", left: 18.1, width: 54.2 },
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
