/** Floral Image FI Ops snapshot.
 * Coverage day: Wednesday Oct 21, 2026 (America/New_York). Thursday digest covers Wednesday.
 * Salesforce figures pulled Thu Oct 22, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Wed Oct 21 rows from routemap_2026-10-21.csv (pulled Thu Oct 22 ~4:45 AM ET). Pairs are customers / units. MTD is Oct MTD as of Oct 22 ~4:45 AM ET.
 * Geotab: local start/end + trips + miles from geotab-daily-start-end-local-2026-10-21.csv (pulled Thu Oct 22 ~4:23 AM ET).
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
  sales: "Thu Oct 22, 2026 · ~5:30 AM ET",
  routeDay: "Wed Oct 21",
  routePulled: "Thu Oct 22 · ~4:45 AM ET",
  routeMtdLabel: "Oct MTD as of Oct 22 ~4:45 AM ET",
  geotabDay: "Wed Oct 21",
  geotabPulled: "Thu Oct 22 · ~4:23 AM ET",
  sfRefreshDay: "Wed Oct 21",
  monthLabel: "October 2026",
  weekLabel: "Mon Oct 19–Wed Oct 21",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1345, inactive: 214, weekly: 16206.83, monthly: 70171.93, trial: 5, collectTrial: 5, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 3, trialsWeek: 2, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 14, cancelUnits: 18, cancelAmt: 741.40, cancelMoved: 4, sfDayUnits: 53, sfDayRows: 30, sfMtdUnits: 732, sfMtdRows: 475, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 744, inactive: 117, weekly: 10562.68, monthly: 45737.23, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 24, cancelAmt: 1262.39, cancelMoved: 0, sfDayUnits: 26, sfDayRows: 18, sfMtdUnits: 260, sfMtdRows: 171, routeDayCustomers: 18, routeDayUnits: 26, routeDayWindow: '08:59 AM–12:59 PM', routeMtdCustomers: 173, routeMtdUnits: 255, routeMtdPending: 6 },
  { id: "atlanta", name: "Atlanta", totalUnits: 550, inactive: 58, weekly: 11523.06, monthly: 49905.37, trial: 24, collectTrial: 0, pending: 12, wonMonth: 10, wonWeek: 1, trialsMonth: 24, trialsWeek: 19, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 15, cancelAmt: 870, cancelMoved: 6, sfDayUnits: 34, sfDayRows: 22, sfMtdUnits: 237, sfMtdRows: 135, routeDayCustomers: 22, routeDayUnits: 34, routeDayWindow: '08:47 AM–03:09 PM', routeMtdCustomers: 153, routeMtdUnits: 259, routeMtdPending: 1 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 534, inactive: 72, weekly: 8094.25, monthly: 35046.80, trial: 8, collectTrial: 18, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 5, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 4, cancelAmt: 250, cancelMoved: 0, sfDayUnits: 30, sfDayRows: 12, sfMtdUnits: 252, sfMtdRows: 150, routeDayCustomers: 13, routeDayUnits: 33, routeDayWindow: '11:15 AM–04:23 PM', routeMtdCustomers: 170, routeMtdUnits: 279, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 20, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 815, cancelMoved: 2, sfDayUnits: 4, sfDayRows: 4, sfMtdUnits: 359, sfMtdRows: 208, routeDayCustomers: 2, routeDayUnits: 2, routeDayWindow: '12:00 AM–12:00 AM', routeMtdCustomers: 178, routeMtdUnits: 311, routeMtdPending: 2 },
  { id: "austin", name: "Austin", totalUnits: 481, inactive: 58, weekly: 7228.20, monthly: 31297.68, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 11, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 37, sfDayRows: 23, sfMtdUnits: 248, sfMtdRows: 176, routeDayCustomers: 23, routeDayUnits: 37, routeDayWindow: '10:02 AM–02:54 PM', routeMtdCustomers: 166, routeMtdUnits: 235, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 485, inactive: 48, weekly: 8515.37, monthly: 36870.97, trial: 3, collectTrial: 0, pending: 0, wonMonth: 4, wonWeek: 2, trialsMonth: 2, trialsWeek: 2, lostMonthDeals: 5, lostMonthUnits: 7, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 16, sfDayRows: 9, sfMtdUnits: 288, sfMtdRows: 222, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 426, inactive: 53, weekly: 7285.40, monthly: 31547.36, trial: 0, collectTrial: 0, pending: 4, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 3, lostWeekDeals: 2, lostWeekUnits: 2, cancelDeals: 2, cancelUnits: 3, cancelAmt: 180, cancelMoved: 2, sfDayUnits: 30, sfDayRows: 15, sfMtdUnits: 362, sfMtdRows: 218, routeDayCustomers: 14, routeDayUnits: 30, routeDayWindow: '10:32 AM–03:05 PM', routeMtdCustomers: 217, routeMtdUnits: 362, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6203.18, monthly: 26859.43, trial: 13, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 10, sfDayRows: 9, sfMtdUnits: 376, sfMtdRows: 230, routeDayCustomers: 10, routeDayUnits: 11, routeDayWindow: '09:42 AM–02:26 PM', routeMtdCustomers: 215, routeMtdUnits: 351, routeMtdPending: 1 },
  { id: "san-diego", name: "San Diego", totalUnits: 420, inactive: 54, weekly: 6511.10, monthly: 28192.42, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 370, sfMtdRows: 178, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 390, inactive: 27, weekly: 6280.15, monthly: 27192.86, trial: 1, collectTrial: 3, pending: 1, wonMonth: 7, wonWeek: 3, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 7, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 5, cancelAmt: 245, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 256, sfMtdRows: 176, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 212, routeMtdUnits: 291, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 387, inactive: 38, weekly: 5972.75, monthly: 25862.74, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 1, sfDayUnits: 13, sfDayRows: 4, sfMtdUnits: 139, sfMtdRows: 70, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 373, inactive: 49, weekly: 5161.52, monthly: 22349.85, trial: 6, collectTrial: 0, pending: 7, wonMonth: 6, wonWeek: 1, trialsMonth: 6, trialsWeek: 2, lostMonthDeals: 5, lostMonthUnits: 15, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 10, cancelAmt: 490, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 313, sfMtdRows: 139, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 140, routeMtdUnits: 315, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 357, inactive: 88, weekly: 4751.07, monthly: 20574.68, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 425, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 192, routeMtdUnits: 247, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 325, inactive: 31, weekly: 4453.56, monthly: 19283.16, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 13, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 45, cancelMoved: 1, sfDayUnits: 6, sfDayRows: 5, sfMtdUnits: 239, sfMtdRows: 131, routeDayCustomers: 5, routeDayUnits: 6, routeDayWindow: '11:27 AM–12:18 PM', routeMtdCustomers: 135, routeMtdUnits: 244, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 3, trialsMonth: 5, trialsWeek: 5, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 271, sfMtdRows: 170, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 169, routeMtdUnits: 268, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 259, inactive: 4, weekly: 4733.62, monthly: 20495.46, trial: 20, collectTrial: 2, pending: 9, wonMonth: 12, wonWeek: 0, trialsMonth: 12, trialsWeek: 2, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 257, sfMtdRows: 176, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 150, routeMtdUnits: 219, routeMtdPending: 6 },
  { id: "vancouver", name: "Vancouver", totalUnits: 241, inactive: 21, weekly: 3123.84, monthly: 13525.98, trial: 2, collectTrial: 1, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 38.09, cancelMoved: 0, sfDayUnits: 23, sfDayRows: 15, sfMtdUnits: 112, sfMtdRows: 61, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 216, inactive: 16, weekly: 3397.05, monthly: 14709.77, trial: 7, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 5, cancelAmt: 265, cancelMoved: 1, sfDayUnits: 38, sfDayRows: 17, sfMtdUnits: 119, sfMtdRows: 64, routeDayCustomers: 17, routeDayUnits: 38, routeDayWindow: '09:25 AM–03:15 PM', routeMtdCustomers: 65, routeMtdUnits: 120, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 1, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 955, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 138, sfMtdRows: 82, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 77, routeMtdUnits: 132, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 1, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:06 AM", stop: "4:24 PM", onRoad: "7h 18m", trips: 13, miles: 148.2, flag: "ok", left: 20.7, width: 48.7 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "9:18 AM", stop: "3:59 PM", onRoad: "6h 41m", trips: 14, miles: 100.1, flag: "ok", left: 22.0, width: 44.6 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "10:04 AM", stop: "2:22 PM", onRoad: "4h 18m", trips: 7, miles: 67.4, flag: "ok", left: 27.1, width: 28.7 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:17 AM", stop: "6:29 PM", onRoad: "11h 12m", trips: 18, miles: 199.9, flag: "ok", left: 8.6, width: 74.7 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "8:49 AM", stop: "4:54 PM", onRoad: "8h 5m", trips: 17, miles: 125.8, flag: "ok", left: 18.8, width: 53.9 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "9:41 AM", stop: "10:05 AM", onRoad: "0h 24m", trips: 4, miles: 0.3, flag: "short", left: 24.6, width: 2.7 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "9:17 AM", stop: "3:07 PM", onRoad: "5h 50m", trips: 7, miles: 95.1, flag: "ok", left: 21.9, width: 38.9 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "10:54 AM", stop: "12:26 PM", onRoad: "1h 32m", trips: 5, miles: 34.9, flag: "short", left: 32.7, width: 10.2 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "10:24 AM", stop: "5:59 PM", onRoad: "7h 35m", trips: 16, miles: 102.8, flag: "ok", left: 29.3, width: 50.6 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Wed Oct 21",
  status: "ok",
  rows: [
    { location: "Atlanta", count: 4 },
    { location: "Chicago", count: 3 },
    { location: "Denver", count: 3 },
    { location: "Seattle", count: 2 },
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
