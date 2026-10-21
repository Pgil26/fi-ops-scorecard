/** Floral Image FI Ops snapshot.
 * Coverage day: Tuesday Oct 20, 2026 (America/New_York). Wednesday digest covers Tuesday.
 * Salesforce figures pulled Wed Oct 21, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Tue Oct 20 rows from routemap_2026-10-20.csv (pulled Wed Oct 21 ~4:40 AM ET). Pairs are customers / units. MTD is Oct MTD as of Oct 21 ~4:40 AM ET.
 * Geotab: local start/end + trips + miles from geotab-daily-start-end-local-2026-10-20.csv (pulled Wed Oct 21 ~4:25 AM ET).
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
  sales: "Wed Oct 21, 2026 · ~5:30 AM ET",
  routeDay: "Tue Oct 20",
  routePulled: "Wed Oct 21 · ~4:40 AM ET",
  routeMtdLabel: "Oct MTD as of Oct 21 ~4:40 AM ET",
  geotabDay: "Tue Oct 20",
  geotabPulled: "Wed Oct 21 · ~4:25 AM ET",
  sfRefreshDay: "Tue Oct 20",
  monthLabel: "October 2026",
  weekLabel: "Mon Oct 19–Tue Oct 20",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1345, inactive: 214, weekly: 16206.83, monthly: 70171.93, trial: 5, collectTrial: 5, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 3, trialsWeek: 2, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 14, cancelUnits: 18, cancelAmt: 741.40, cancelMoved: 4, sfDayUnits: 45, sfDayRows: 33, sfMtdUnits: 679, sfMtdRows: 445, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 744, inactive: 117, weekly: 10562.68, monthly: 45737.23, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 24, cancelAmt: 1262.39, cancelMoved: 0, sfDayUnits: 15, sfDayRows: 12, sfMtdUnits: 228, sfMtdRows: 149, routeDayCustomers: 14, routeDayUnits: 17, routeDayWindow: '12:00 AM–01:11 PM', routeMtdCustomers: 154, routeMtdUnits: 228, routeMtdPending: 6 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 58, weekly: 11503.10, monthly: 49818.95, trial: 35, collectTrial: 0, pending: 6, wonMonth: 9, wonWeek: 0, trialsMonth: 35, trialsWeek: 19, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 15, cancelAmt: 870, cancelMoved: 6, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 203, sfMtdRows: 113, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 131, routeMtdUnits: 225, routeMtdPending: 1 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 534, inactive: 72, weekly: 8094.25, monthly: 35046.80, trial: 8, collectTrial: 18, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 5, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 4, cancelAmt: 250, cancelMoved: 0, sfDayUnits: 14, sfDayRows: 11, sfMtdUnits: 222, sfMtdRows: 138, routeDayCustomers: 14, routeDayUnits: 18, routeDayWindow: '11:31 AM–05:21 PM', routeMtdCustomers: 157, routeMtdUnits: 246, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 21, collectTrial: 17, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 11, cancelUnits: 15, cancelAmt: 870, cancelMoved: 3, sfDayUnits: 12, sfDayRows: 10, sfMtdUnits: 355, sfMtdRows: 204, routeDayCustomers: 6, routeDayUnits: 6, routeDayWindow: '11:49 AM–11:50 AM', routeMtdCustomers: 176, routeMtdUnits: 309, routeMtdPending: 2 },
  { id: "austin", name: "Austin", totalUnits: 481, inactive: 58, weekly: 7228.20, monthly: 31297.68, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 11, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 58, sfDayRows: 42, sfMtdUnits: 211, sfMtdRows: 153, routeDayCustomers: 42, routeDayUnits: 58, routeDayWindow: '09:40 AM–04:05 PM', routeMtdCustomers: 143, routeMtdUnits: 198, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 485, inactive: 48, weekly: 8515.37, monthly: 36870.97, trial: 3, collectTrial: 0, pending: 0, wonMonth: 4, wonWeek: 2, trialsMonth: 2, trialsWeek: 2, lostMonthDeals: 5, lostMonthUnits: 7, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 22, sfDayRows: 15, sfMtdUnits: 272, sfMtdRows: 213, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 428, inactive: 53, weekly: 7323.65, monthly: 31712.99, trial: 0, collectTrial: 0, pending: 4, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 3, cancelAmt: 180, cancelMoved: 2, sfDayUnits: 21, sfDayRows: 4, sfMtdUnits: 332, sfMtdRows: 203, routeDayCustomers: 4, routeDayUnits: 21, routeDayWindow: '11:23 AM–01:13 PM', routeMtdCustomers: 203, routeMtdUnits: 332, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 424, inactive: 39, weekly: 6219.82, monthly: 26931.44, trial: 14, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 2, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 51, sfDayRows: 25, sfMtdUnits: 366, sfMtdRows: 221, routeDayCustomers: 25, routeDayUnits: 51, routeDayWindow: '10:57 AM–06:44 PM', routeMtdCustomers: 206, routeMtdUnits: 340, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 420, inactive: 54, weekly: 6511.10, monthly: 28192.42, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 370, sfMtdRows: 178, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 389, inactive: 26, weekly: 6276.83, monthly: 27178.45, trial: 1, collectTrial: 3, pending: 1, wonMonth: 6, wonWeek: 2, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 7, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 5, cancelAmt: 245, cancelMoved: 4, sfDayUnits: 12, sfDayRows: 9, sfMtdUnits: 256, sfMtdRows: 176, routeDayCustomers: 9, routeDayUnits: 12, routeDayWindow: '09:19 AM–01:13 PM', routeMtdCustomers: 212, routeMtdUnits: 291, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 387, inactive: 38, weekly: 5972.75, monthly: 25862.74, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 1, sfDayUnits: 13, sfDayRows: 7, sfMtdUnits: 126, sfMtdRows: 66, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 372, inactive: 49, weekly: 5141.55, monthly: 22263.43, trial: 16, collectTrial: 0, pending: 7, wonMonth: 5, wonWeek: 0, trialsMonth: 16, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 15, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 10, cancelAmt: 490, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 313, sfMtdRows: 139, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 140, routeMtdUnits: 315, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 357, inactive: 88, weekly: 4751.07, monthly: 20574.68, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 425, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 192, routeMtdUnits: 247, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 325, inactive: 31, weekly: 4453.56, monthly: 19283.16, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 13, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 45, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 233, sfMtdRows: 126, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 130, routeMtdUnits: 238, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 3, trialsMonth: 5, trialsWeek: 5, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 271, sfMtdRows: 170, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 169, routeMtdUnits: 268, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 259, inactive: 4, weekly: 4733.62, monthly: 20495.46, trial: 21, collectTrial: 2, pending: 11, wonMonth: 12, wonWeek: 0, trialsMonth: 12, trialsWeek: 2, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 257, sfMtdRows: 176, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 150, routeMtdUnits: 219, routeMtdPending: 6 },
  { id: "vancouver", name: "Vancouver", totalUnits: 241, inactive: 21, weekly: 3123.84, monthly: 13525.98, trial: 2, collectTrial: 1, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 38.09, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 89, sfMtdRows: 46, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 216, inactive: 16, weekly: 3397.05, monthly: 14709.77, trial: 7, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 5, cancelAmt: 265, cancelMoved: 1, sfDayUnits: 30, sfDayRows: 14, sfMtdUnits: 81, sfMtdRows: 47, routeDayCustomers: 15, routeDayUnits: 31, routeDayWindow: '09:15 AM–04:27 PM', routeMtdCustomers: 48, routeMtdUnits: 82, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 1, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 955, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 138, sfMtdRows: 82, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 77, routeMtdUnits: 132, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 1, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "8:38 AM", stop: "7:59 PM", onRoad: "11h 21m", trips: 36, miles: 117.0, flag: "ok", left: 17.6, width: 75.7 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "10:05 AM", stop: "3:28 PM", onRoad: "5h 23m", trips: 11, miles: 98.0, flag: "ok", left: 27.2, width: 35.9 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "9:19 AM", stop: "2:36 PM", onRoad: "5h 17m", trips: 12, miles: 76.0, flag: "ok", left: 22.1, width: 35.2 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "2:24 AM", stop: "6:36 PM", onRoad: "16h 12m", trips: 16, miles: 196.0, flag: "ok", left: 0, width: 84.0 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "2:42 PM", stop: "2:46 PM", onRoad: "0h 4m", trips: 2, miles: 0.0, flag: "short", left: 58.0, width: 0.4 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:25 AM", stop: "5:51 PM", onRoad: "8h 26m", trips: 22, miles: 77.0, flag: "ok", left: 22.8, width: 56.2 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:27 AM", stop: "2:21 PM", onRoad: "5h 54m", trips: 8, miles: 96.0, flag: "ok", left: 16.3, width: 39.3 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "4:16 PM", stop: "6:40 PM", onRoad: "2h 24m", trips: 2, miles: 122.0, flag: "ok", left: 68.4, width: 16.0 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "10:34 AM", stop: "5:21 PM", onRoad: "6h 47m", trips: 12, miles: 92.0, flag: "ok", left: 30.4, width: 45.2 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Tue Oct 20",
  status: "ok",
  rows: [
    { location: "San Francisco", count: 6 },
    { location: "Chicago", count: 1 },
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
