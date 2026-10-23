/** Floral Image FI Ops snapshot.
 * Coverage day: Thursday Oct 22, 2026 (America/New_York). Friday digest covers Thursday.
 * Salesforce figures pulled Fri Oct 23, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Thu Oct 22 rows from routemap_2026-10-22.csv (pulled Fri Oct 23 ~4:40 AM ET). Pairs are customers / units. MTD is Oct MTD as of Oct 23 ~4:40 AM ET.
 * Geotab: local start/end + trips + miles from geotab-daily-start-end-local-2026-10-22.csv (pulled Fri Oct 23 ~4:36 AM ET).
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
  sales: "Fri Oct 23, 2026 · ~5:30 AM ET",
  routeDay: "Thu Oct 22",
  routePulled: "Fri Oct 23 · ~4:40 AM ET",
  routeMtdLabel: "Oct MTD as of Oct 23 ~4:40 AM ET",
  geotabDay: "Thu Oct 22",
  geotabPulled: "Fri Oct 23 · ~4:36 AM ET",
  sfRefreshDay: "Thu Oct 22",
  monthLabel: "October 2026",
  weekLabel: "Mon Oct 19–Thu Oct 22",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1345, inactive: 214, weekly: 16206.83, monthly: 70171.93, trial: 5, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 3, trialsWeek: 2, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 14, cancelUnits: 18, cancelAmt: 741.40, cancelMoved: 4, sfDayUnits: 36, sfDayRows: 28, sfMtdUnits: 768, sfMtdRows: 503, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 744, inactive: 117, weekly: 10562.68, monthly: 45737.23, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 24, cancelAmt: 1262.39, cancelMoved: 0, sfDayUnits: 3, sfDayRows: 2, sfMtdUnits: 284, sfMtdRows: 187, routeDayCustomers: 3, routeDayUnits: 4, routeDayWindow: '12:00 AM–10:08 AM', routeMtdCustomers: 193, routeMtdUnits: 285, routeMtdPending: 7 },
  { id: "atlanta", name: "Atlanta", totalUnits: 550, inactive: 58, weekly: 11523.06, monthly: 49905.37, trial: 19, collectTrial: 0, pending: 10, wonMonth: 10, wonWeek: 1, trialsMonth: 19, trialsWeek: 19, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 5, cancelUnits: 14, cancelAmt: 820, cancelMoved: 5, sfDayUnits: 21, sfDayRows: 11, sfMtdUnits: 258, sfMtdRows: 146, routeDayCustomers: 10, routeDayUnits: 16, routeDayWindow: '08:43 AM–10:43 AM', routeMtdCustomers: 163, routeMtdUnits: 275, routeMtdPending: 5 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 534, inactive: 72, weekly: 8094.25, monthly: 35046.80, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 5, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 4, cancelAmt: 250, cancelMoved: 0, sfDayUnits: 27, sfDayRows: 12, sfMtdUnits: 279, sfMtdRows: 162, routeDayCustomers: 14, routeDayUnits: 30, routeDayWindow: '10:14 AM–04:36 PM', routeMtdCustomers: 184, routeMtdUnits: 309, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 815, cancelMoved: 2, sfDayUnits: 3, sfDayRows: 3, sfMtdUnits: 364, sfMtdRows: 213, routeDayCustomers: 2, routeDayUnits: 2, routeDayWindow: '01:59 PM–02:04 PM', routeMtdCustomers: 182, routeMtdUnits: 315, routeMtdPending: 2 },
  { id: "austin", name: "Austin", totalUnits: 481, inactive: 58, weekly: 7228.20, monthly: 31297.68, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 11, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 24, sfDayRows: 12, sfMtdUnits: 272, sfMtdRows: 188, routeDayCustomers: 12, routeDayUnits: 24, routeDayWindow: '08:20 AM–01:31 PM', routeMtdCustomers: 178, routeMtdUnits: 259, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 484, inactive: 48, weekly: 8498.15, monthly: 36796.42, trial: 3, collectTrial: 0, pending: 0, wonMonth: 4, wonWeek: 2, trialsMonth: 2, trialsWeek: 2, lostMonthDeals: 6, lostMonthUnits: 8, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 24, sfDayRows: 21, sfMtdUnits: 312, sfMtdRows: 243, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 425, inactive: 53, weekly: 7265.43, monthly: 31460.94, trial: 1, collectTrial: 0, pending: 4, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 5, lostMonthUnits: 6, lostWeekDeals: 4, lostWeekUnits: 5, cancelDeals: 1, cancelUnits: 1, cancelAmt: 60, cancelMoved: 1, sfDayUnits: 14, sfDayRows: 7, sfMtdUnits: 376, sfMtdRows: 225, routeDayCustomers: 8, routeDayUnits: 15, routeDayWindow: '11:04 AM–12:41 PM', routeMtdCustomers: 224, routeMtdUnits: 377, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6203.18, monthly: 26859.43, trial: 14, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 2, trialsWeek: 1, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 376, sfMtdRows: 230, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 215, routeMtdUnits: 351, routeMtdPending: 1 },
  { id: "san-diego", name: "San Diego", totalUnits: 420, inactive: 54, weekly: 6511.10, monthly: 28192.42, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 370, sfMtdRows: 178, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 390, inactive: 27, weekly: 6280.15, monthly: 27192.86, trial: 1, collectTrial: 0, pending: 1, wonMonth: 7, wonWeek: 3, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 7, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 5, cancelAmt: 245, cancelMoved: 4, sfDayUnits: 14, sfDayRows: 12, sfMtdUnits: 270, sfMtdRows: 188, routeDayCustomers: 13, routeDayUnits: 15, routeDayWindow: '09:17 AM–02:10 PM', routeMtdCustomers: 225, routeMtdUnits: 306, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 1, sfDayUnits: 22, sfDayRows: 14, sfMtdUnits: 161, sfMtdRows: 84, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 373, inactive: 49, weekly: 5161.52, monthly: 22349.85, trial: 2, collectTrial: 0, pending: 7, wonMonth: 6, wonWeek: 1, trialsMonth: 2, trialsWeek: 2, lostMonthDeals: 5, lostMonthUnits: 15, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 10, cancelAmt: 490, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 313, sfMtdRows: 139, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 140, routeMtdUnits: 315, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 357, inactive: 88, weekly: 4751.07, monthly: 20574.68, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 425, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 192, routeMtdUnits: 247, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 325, inactive: 31, weekly: 4453.56, monthly: 19283.16, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 13, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 45, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 239, sfMtdRows: 131, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 135, routeMtdUnits: 244, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 3, trialsMonth: 5, trialsWeek: 5, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 271, sfMtdRows: 170, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 169, routeMtdUnits: 268, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 263, inactive: 4, weekly: 4816.78, monthly: 20855.54, trial: 15, collectTrial: 0, pending: 10, wonMonth: 15, wonWeek: 3, trialsMonth: 7, trialsWeek: 2, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 257, sfMtdRows: 176, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 150, routeMtdUnits: 219, routeMtdPending: 6 },
  { id: "vancouver", name: "Vancouver", totalUnits: 241, inactive: 21, weekly: 3123.84, monthly: 13525.98, trial: 2, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 11, sfDayRows: 7, sfMtdUnits: 123, sfMtdRows: 68, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 216, inactive: 16, weekly: 3397.05, monthly: 14709.77, trial: 7, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 5, cancelAmt: 265, cancelMoved: 1, sfDayUnits: 30, sfDayRows: 19, sfMtdUnits: 149, sfMtdRows: 83, routeDayCustomers: 19, routeDayUnits: 30, routeDayWindow: '08:38 AM–04:50 PM', routeMtdCustomers: 84, routeMtdUnits: 150, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 955, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 138, sfMtdRows: 82, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 77, routeMtdUnits: 132, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "8:37 AM", stop: "4:12 PM", onRoad: "7h 35m", trips: 20, miles: 62.7, flag: "ok", left: 17.4, width: 50.6 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "10:25 AM", stop: "4:00 PM", onRoad: "5h 35m", trips: 15, miles: 91.2, flag: "ok", left: 29.4, width: 37.2 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "8:26 AM", stop: "1:00 PM", onRoad: "4h 34m", trips: 3, miles: 75.8, flag: "ok", left: 16.2, width: 30.4 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "6:39 AM", stop: "7:06 PM", onRoad: "12h 27m", trips: 23, miles: 211.1, flag: "ok", left: 4.3, width: 83.0 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "7:32 AM", stop: "3:12 PM", onRoad: "7h 40m", trips: 28, miles: 62.3, flag: "ok", left: 10.2, width: 51.1 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:42 AM", stop: "7:32 PM", onRoad: "9h 50m", trips: 23, miles: 70.2, flag: "ok", left: 24.7, width: 65.6 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "8:53 AM", stop: "4:55 PM", onRoad: "8h 2m", trips: 14, miles: 118.7, flag: "ok", left: 19.2, width: 53.6 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Thu Oct 22",
  status: "ok",
  rows: [
    { location: "Denver", count: 3 },
    { location: "Atlanta", count: 2 },
    { location: "San Francisco", count: 1 },
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
