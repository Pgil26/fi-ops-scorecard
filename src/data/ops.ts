/** Floral Image FI Ops snapshot.
 * Coverage day: Monday Oct 26, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Tue Oct 27, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Mon Oct 26 rows from routemap_2026-10-26.csv (pulled Tue Oct 27 ~4:37 AM ET). Pairs are customers / units. MTD is Oct MTD as of Oct 27 ~4:37 AM ET.
 * Geotab: Mon Oct 26 from geotab-daily-start-end-local-2026-10-26.csv (written Tue Oct 27 ~4:27 AM ET).
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
  sales: "Tue Oct 27, 2026 · ~5:30 AM ET",
  routeDay: "Mon Oct 26",
  routePulled: "Tue Oct 27 · ~4:37 AM ET",
  routeMtdLabel: "Oct MTD as of Oct 27 ~4:37 AM ET",
  geotabDay: "Mon Oct 26",
  geotabPulled: "Tue Oct 27 · ~4:27 AM ET",
  sfRefreshDay: "Mon Oct 26",
  monthLabel: "October 2026",
  weekLabel: "Mon Oct 26 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1345, inactive: 214, weekly: 16206.83, monthly: 70171.93, trial: 6, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 4, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 14, cancelUnits: 18, cancelAmt: 741.40, cancelMoved: 4, sfDayUnits: 64, sfDayRows: 33, sfMtdUnits: 855, sfMtdRows: 555, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 741, inactive: 117, weekly: 10509.15, monthly: 45505.47, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 13, cancelUnits: 27, cancelAmt: 1423.30, cancelMoved: 3, sfDayUnits: 6, sfDayRows: 3, sfMtdUnits: 339, sfMtdRows: 222, routeDayCustomers: 3, routeDayUnits: 5, routeDayWindow: '09:43 AM–10:24 AM', routeMtdCustomers: 228, routeMtdUnits: 339, routeMtdPending: 8 },
  { id: "atlanta", name: "Atlanta", totalUnits: 551, inactive: 58, weekly: 11514.22, monthly: 49866.96, trial: 18, collectTrial: 0, pending: 11, wonMonth: 11, wonWeek: 0, trialsMonth: 18, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 4, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 11, cancelAmt: 670, cancelMoved: 4, sfDayUnits: 36, sfDayRows: 25, sfMtdUnits: 352, sfMtdRows: 211, routeDayCustomers: 22, routeDayUnits: 33, routeDayWindow: '09:33 AM–02:10 PM', routeMtdCustomers: 223, routeMtdUnits: 369, routeMtdPending: 1 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 535, inactive: 72, weekly: 8110.89, monthly: 35118.81, trial: 8, collectTrial: 0, pending: 32, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 9, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 28, sfDayRows: 8, sfMtdUnits: 332, sfMtdRows: 184, routeDayCustomers: 9, routeDayUnits: 23, routeDayWindow: '10:52 AM–04:02 PM', routeMtdCustomers: 209, routeMtdUnits: 360, routeMtdPending: 7 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 1, sfDayUnits: 9, sfDayRows: 7, sfMtdUnits: 374, sfMtdRows: 221, routeDayCustomers: 5, routeDayUnits: 7, routeDayWindow: '10:51 AM–11:33 AM', routeMtdCustomers: 187, routeMtdUnits: 322, routeMtdPending: 2 },
  { id: "austin", name: "Austin", totalUnits: 481, inactive: 58, weekly: 7228.20, monthly: 31297.68, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 11, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 12, sfDayRows: 3, sfMtdUnits: 323, sfMtdRows: 200, routeDayCustomers: 3, routeDayUnits: 6, routeDayWindow: '10:38 AM–01:40 PM', routeMtdCustomers: 190, routeMtdUnits: 304, routeMtdPending: 6 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 484, inactive: 48, weekly: 8498.15, monthly: 36796.42, trial: 3, collectTrial: 0, pending: 0, wonMonth: 4, wonWeek: 0, trialsMonth: 2, trialsWeek: 0, lostMonthDeals: 6, lostMonthUnits: 8, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 24, sfDayRows: 14, sfMtdUnits: 337, sfMtdRows: 258, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 425, inactive: 53, weekly: 7265.43, monthly: 31460.94, trial: 13, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 13, trialsWeek: 2, lostMonthDeals: 6, lostMonthUnits: 7, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 2, sfDayRows: 1, sfMtdUnits: 378, sfMtdRows: 226, routeDayCustomers: 1, routeDayUnits: 2, routeDayWindow: '10:26 AM–10:26 AM', routeMtdCustomers: 224, routeMtdUnits: 379, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6203.18, monthly: 26859.43, trial: 19, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 7, trialsWeek: 4, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 376, sfMtdRows: 230, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 215, routeMtdUnits: 351, routeMtdPending: 1 },
  { id: "san-diego", name: "San Diego", totalUnits: 418, inactive: 54, weekly: 6464.54, monthly: 27990.78, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 370, sfMtdRows: 178, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 392, inactive: 30, weekly: 6260.22, monthly: 27106.44, trial: 1, collectTrial: 0, pending: 1, wonMonth: 9, wonWeek: 2, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 10, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 95, cancelMoved: 1, sfDayUnits: 14, sfDayRows: 11, sfMtdUnits: 290, sfMtdRows: 204, routeDayCustomers: 11, routeDayUnits: 14, routeDayWindow: '08:52 AM–01:11 PM', routeMtdCustomers: 240, routeMtdUnits: 327, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 161, sfMtdRows: 84, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 373, inactive: 49, weekly: 5161.52, monthly: 22349.85, trial: 6, collectTrial: 0, pending: 5, wonMonth: 6, wonWeek: 0, trialsMonth: 6, trialsWeek: 4, lostMonthDeals: 7, lostMonthUnits: 22, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 313, sfMtdRows: 139, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 140, routeMtdUnits: 315, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 357, inactive: 88, weekly: 4751.07, monthly: 20574.68, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 425, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 192, routeMtdUnits: 247, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 325, inactive: 31, weekly: 4453.56, monthly: 19283.16, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 13, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 45, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 239, sfMtdRows: 131, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 135, routeMtdUnits: 244, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 5, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 271, sfMtdRows: 170, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 169, routeMtdUnits: 268, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 4, weekly: 4833.41, monthly: 20927.55, trial: 13, collectTrial: 0, pending: 10, wonMonth: 15, wonWeek: 0, trialsMonth: 9, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 257, sfMtdRows: 176, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 150, routeMtdUnits: 219, routeMtdPending: 6 },
  { id: "vancouver", name: "Vancouver", totalUnits: 245, inactive: 21, weekly: 3204.89, monthly: 13876.92, trial: 1, collectTrial: 0, pending: 0, wonMonth: 3, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 19, sfDayRows: 15, sfMtdUnits: 157, sfMtdRows: 95, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 216, inactive: 16, weekly: 3397.05, monthly: 14709.77, trial: 7, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 5, cancelAmt: 265, cancelMoved: 1, sfDayUnits: 21, sfDayRows: 8, sfMtdUnits: 191, sfMtdRows: 102, routeDayCustomers: 8, routeDayUnits: 21, routeDayWindow: '09:51 AM–02:17 PM', routeMtdCustomers: 103, routeMtdUnits: 192, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 955, cancelMoved: 2, sfDayUnits: 6, sfDayRows: 3, sfMtdUnits: 144, sfMtdRows: 85, routeDayCustomers: 3, routeDayUnits: 6, routeDayWindow: '11:40 AM–12:27 PM', routeMtdCustomers: 80, routeMtdUnits: 138, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "10:18 AM", stop: "4:24 PM", onRoad: "6h 6m", trips: 20, miles: 53.7, flag: "ok", left: 28.7, width: 40.7 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "9:32 AM", stop: "3:41 PM", onRoad: "6h 9m", trips: 17, miles: 119.7, flag: "ok", left: 23.6, width: 41.0 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "6:59 AM", stop: "4:30 PM", onRoad: "9h 31m", trips: 11, miles: 291.0, flag: "ok", left: 6.6, width: 63.4 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "8:37 AM", stop: "2:52 PM", onRoad: "6h 15m", trips: 18, miles: 87.4, flag: "ok", left: 17.4, width: 41.7 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:29 AM", stop: "5:01 PM", onRoad: "7h 32m", trips: 16, miles: 84.0, flag: "ok", left: 23.2, width: 50.2 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:23 AM", stop: "4:14 PM", onRoad: "7h 51m", trips: 10, miles: 130.8, flag: "ok", left: 15.9, width: 52.3 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "10:07 AM", stop: "4:22 PM", onRoad: "6h 15m", trips: 12, miles: 112.0, flag: "ok", left: 27.4, width: 41.7 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Mon Oct 26",
  status: "ok",
  rows: [
    { location: "San Francisco", count: 6 },
    { location: "Austin", count: 3 },
    { location: "Denver", count: 2 },
    { location: "Dallas", count: 1 },
    { location: "Seattle", count: 1 },
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
