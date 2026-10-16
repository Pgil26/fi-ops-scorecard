/** Floral Image FI Ops snapshot.
 * Coverage day: Thursday Oct 15, 2026 (America/New_York). Friday digest covers previous calendar day.
 * Salesforce figures pulled Fri Oct 16, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Thu Oct 15 rows from routemap_2026-10-15.csv (pulled Fri Oct 16 ~4:45 AM ET). Pairs are customers / units. MTD is Oct MTD as of Oct 16 ~4:45 AM ET.
 * Geotab: local start/end + trips + miles from geotab-daily-start-end-local-2026-10-15.csv (pulled Fri Oct 16 ~4:29 AM ET).
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
  sales: "Fri Oct 16, 2026 · ~5:30 AM ET",
  routeDay: "Thu Oct 15",
  routePulled: "Fri Oct 16 · ~4:45 AM ET",
  routeMtdLabel: "Oct MTD as of Oct 16 ~4:45 AM ET",
  geotabDay: "Thu Oct 15",
  geotabPulled: "Fri Oct 16 · ~4:29 AM ET",
  sfRefreshDay: "Thu Oct 15",
  monthLabel: "October 2026",
  weekLabel: "Mon Oct 12 – Thu Oct 15",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1346, inactive: 214, weekly: 16222.04, monthly: 70237.75, trial: 3, collectTrial: 5, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 13, cancelUnits: 17, cancelAmt: 695.70, cancelMoved: 3, sfDayUnits: 56, sfDayRows: 39, sfMtdUnits: 531, sfMtdRows: 352, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 744, inactive: 117, weekly: 10562.68, monthly: 45737.23, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 24, cancelAmt: 1262.39, cancelMoved: 0, sfDayUnits: 22, sfDayRows: 12, sfMtdUnits: 111, sfMtdRows: 76, routeDayCustomers: 12, routeDayUnits: 22, routeDayWindow: '10:15 AM–01:27 PM', routeMtdCustomers: 79, routeMtdUnits: 109, routeMtdPending: 5 },
  { id: "atlanta", name: "Atlanta", totalUnits: 548, inactive: 58, weekly: 11479.81, monthly: 49718.13, trial: 21, collectTrial: 0, pending: 7, wonMonth: 8, wonWeek: 3, trialsMonth: 21, trialsWeek: 5, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 15, cancelAmt: 870, cancelMoved: 6, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 192, sfMtdRows: 107, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 125, routeMtdUnits: 215, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 534, inactive: 72, weekly: 8094.25, monthly: 35046.80, trial: 8, collectTrial: 18, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 5, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 4, cancelAmt: 250, cancelMoved: 0, sfDayUnits: 26, sfDayRows: 14, sfMtdUnits: 208, sfMtdRows: 127, routeDayCustomers: 15, routeDayUnits: 27, routeDayWindow: '10:34 AM–03:25 PM', routeMtdCustomers: 143, routeMtdUnits: 228, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 490, inactive: 28, weekly: 8021.88, monthly: 34734.26, trial: 21, collectTrial: 17, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 800, cancelMoved: 2, sfDayUnits: 9, sfDayRows: 7, sfMtdUnits: 318, sfMtdRows: 177, routeDayCustomers: 6, routeDayUnits: 8, routeDayWindow: '11:04 AM–12:27 PM', routeMtdCustomers: 154, routeMtdUnits: 278, routeMtdPending: 3 },
  { id: "austin", name: "Austin", totalUnits: 482, inactive: 58, weekly: 7244.84, monthly: 31369.70, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 10, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 77, sfMtdRows: 63, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 53, routeMtdUnits: 64, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 483, inactive: 48, weekly: 8473.72, monthly: 36690.65, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 1, trialsMonth: 2, trialsWeek: 1, lostMonthDeals: 5, lostMonthUnits: 7, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 14, sfDayRows: 13, sfMtdUnits: 210, sfMtdRows: 165, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 430, inactive: 53, weekly: 7366.89, monthly: 31900.23, trial: 0, collectTrial: 0, pending: 4, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 50, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 311, sfMtdRows: 199, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 199, routeMtdUnits: 311, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 424, inactive: 39, weekly: 6219.82, monthly: 26931.44, trial: 14, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 2, trialsWeek: 1, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 315, sfMtdRows: 196, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 181, routeMtdUnits: 289, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 420, inactive: 54, weekly: 6511.10, monthly: 28192.42, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 22, sfDayRows: 10, sfMtdUnits: 349, sfMtdRows: 169, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 388, inactive: 26, weekly: 6256.88, monthly: 27092.04, trial: 2, collectTrial: 3, pending: 1, wonMonth: 4, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 5, lostWeekDeals: 2, lostWeekUnits: 2, cancelDeals: 5, cancelUnits: 6, cancelAmt: 315, cancelMoved: 4, sfDayUnits: 16, sfDayRows: 13, sfMtdUnits: 219, sfMtdRows: 144, routeDayCustomers: 16, routeDayUnits: 19, routeDayWindow: '09:05 AM–02:00 PM', routeMtdCustomers: 179, routeMtdUnits: 253, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 387, inactive: 38, weekly: 5972.75, monthly: 25862.74, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 1, sfDayUnits: 25, sfDayRows: 9, sfMtdUnits: 92, sfMtdRows: 46, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 372, inactive: 49, weekly: 5141.55, monthly: 22263.43, trial: 16, collectTrial: 0, pending: 7, wonMonth: 5, wonWeek: 5, trialsMonth: 16, trialsWeek: 10, lostMonthDeals: 5, lostMonthUnits: 15, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 10, cancelAmt: 490, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 295, sfMtdRows: 130, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 131, routeMtdUnits: 297, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 357, inactive: 88, weekly: 4751.07, monthly: 20574.68, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 425, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 192, routeMtdUnits: 247, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 326, inactive: 31, weekly: 4473.53, monthly: 19369.58, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 6, lostMonthUnits: 12, lostWeekDeals: 1, lostWeekUnits: 2, cancelDeals: 1, cancelUnits: 1, cancelAmt: 45, cancelMoved: 1, sfDayUnits: 56, sfDayRows: 26, sfMtdUnits: 187, sfMtdRows: 106, routeDayCustomers: 27, routeDayUnits: 58, routeDayWindow: '10:33 AM–03:57 PM', routeMtdCustomers: 110, routeMtdUnits: 192, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 284, inactive: 15, weekly: 4765.09, monthly: 20632.29, trial: 1, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 0, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 26, sfDayRows: 16, sfMtdUnits: 270, sfMtdRows: 169, routeDayCustomers: 16, routeDayUnits: 26, routeDayWindow: '10:23 AM–02:23 PM', routeMtdCustomers: 168, routeMtdUnits: 267, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 255, inactive: 4, weekly: 4637.16, monthly: 20077.78, trial: 25, collectTrial: 1, pending: 17, wonMonth: 12, wonWeek: 0, trialsMonth: 12, trialsWeek: 4, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 60, cancelMoved: 1, sfDayUnits: 30, sfDayRows: 17, sfMtdUnits: 222, sfMtdRows: 157, routeDayCustomers: 16, routeDayUnits: 27, routeDayWindow: '09:21 AM–04:45 PM', routeMtdCustomers: 134, routeMtdUnits: 191, routeMtdPending: 2 },
  { id: "vancouver", name: "Vancouver", totalUnits: 240, inactive: 21, weekly: 3098.51, monthly: 13416.30, trial: 3, collectTrial: 2, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 38.09, cancelMoved: 0, sfDayUnits: 20, sfDayRows: 12, sfMtdUnits: 60, sfMtdRows: 25, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 216, inactive: 16, weekly: 3397.05, monthly: 14709.77, trial: 7, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 2, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 5, cancelAmt: 265, cancelMoved: 1, sfDayUnits: 26, sfDayRows: 16, sfMtdUnits: 26, sfMtdRows: 16, routeDayCustomers: 16, routeDayUnits: 26, routeDayWindow: '09:40 AM–02:38 PM', routeMtdCustomers: 16, routeMtdUnits: 26, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 1, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 955, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 137, sfMtdRows: 81, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 76, routeMtdUnits: 131, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 1, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "9:11 AM", stop: "6:32 PM", onRoad: "9h 21m", trips: 13, miles: 56.0, flag: "ok", left: 21.2, width: 62.3 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "8:13 AM", stop: "2:09 PM", onRoad: "5h 56m", trips: 9, miles: 137.0, flag: "ok", left: 14.8, width: 39.6 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:39 AM", stop: "4:40 PM", onRoad: "9h 1m", trips: 14, miles: 165.0, flag: "ok", left: 11.0, width: 60.1 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "8:12 AM", stop: "11:20 AM", onRoad: "3h 8m", trips: 9, miles: 7.0, flag: "short", left: 14.7, width: 20.9 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:35 AM", stop: "8:05 PM", onRoad: "10h 30m", trips: 25, miles: 80.0, flag: "ok", left: 23.9, width: 70.0 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:55 AM", stop: "2:48 PM", onRoad: "5h 53m", trips: 8, miles: 159.0, flag: "ok", left: 19.4, width: 39.2 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "9:57 AM", stop: "4:05 PM", onRoad: "6h 8m", trips: 22, miles: 55.0, flag: "ok", left: 26.3, width: 40.9 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "9:58 AM", stop: "4:29 PM", onRoad: "6h 31m", trips: 17, miles: 92.0, flag: "ok", left: 26.4, width: 43.4 },
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
