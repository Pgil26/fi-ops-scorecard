/** Floral Image FI Ops snapshot.
 * Coverage day: Friday Nov 13, 2026 (America/New_York). Monday runs cover Friday.
 * Salesforce figures pulled Mon Nov 16, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Fri Nov 13 rows from routemap_2026-11-13.csv (pulled Mon Nov 16 ~4:39 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 13 ~4:39 AM ET.
 * Geotab: Fri Nov 13 from geotab-daily-start-end-local-2026-11-13.csv (written Mon Nov 16 ~5:03 AM ET).
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
  sales: "Mon Nov 16, 2026 · ~5:30 AM ET",
  routeDay: "Fri Nov 13",
  routePulled: "Mon Nov 16 · ~4:39 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 13 ~4:39 AM ET",
  geotabDay: "Fri Nov 13",
  geotabPulled: "Mon Nov 16 · ~5:03 AM ET",
  sfRefreshDay: "Fri Nov 13",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 9–Fri Nov 13 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1318, inactive: 206, weekly: 15947.11, monthly: 69047.41, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 26, cancelUnits: 35, cancelAmt: 1448.52, cancelMoved: 8, sfDayUnits: 64, sfDayRows: 45, sfMtdUnits: 542, sfMtdRows: 361, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 737, inactive: 115, weekly: 10482.53, monthly: 45390.25, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 14, cancelUnits: 31, cancelAmt: 1611.24, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 202, sfMtdRows: 111, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 114, routeMtdUnits: 204, routeMtdPending: 1 },
  { id: "atlanta", name: "Atlanta", totalUnits: 547, inactive: 57, weekly: 11324.74, monthly: 49045.99, trial: 52, collectTrial: 0, pending: 2, wonMonth: 2, wonWeek: 0, trialsMonth: 52, trialsWeek: 17, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 8, cancelAmt: 475, cancelMoved: 1, sfDayUnits: 10, sfDayRows: 8, sfMtdUnits: 226, sfMtdRows: 135, routeDayCustomers: 8, routeDayUnits: 10, routeDayWindow: '08:00 AM–09:20 AM', routeMtdCustomers: 138, routeMtdUnits: 229, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 11, sfMtdUnits: 246, sfMtdRows: 144, routeDayCustomers: 14, routeDayUnits: 25, routeDayWindow: '10:22 AM–03:31 PM', routeMtdCustomers: 165, routeMtdUnits: 273, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 488, inactive: 28, weekly: 7975.30, monthly: 34532.62, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 805, cancelMoved: 1, sfDayUnits: 16, sfDayRows: 8, sfMtdUnits: 198, sfMtdRows: 99, routeDayCustomers: 8, routeDayUnits: 15, routeDayWindow: '11:07 AM–01:11 PM', routeMtdCustomers: 90, routeMtdUnits: 186, routeMtdPending: 2 },
  { id: "austin", name: "Austin", totalUnits: 474, inactive: 52, weekly: 7203.24, monthly: 31189.66, trial: 10, collectTrial: 0, pending: 21, wonMonth: 1, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 7, cancelUnits: 20, cancelAmt: 1085, cancelMoved: 1, sfDayUnits: 2, sfDayRows: 1, sfMtdUnits: 158, sfMtdRows: 122, routeDayCustomers: 1, routeDayUnits: 2, routeDayWindow: '02:53 PM–02:53 PM', routeMtdCustomers: 122, routeMtdUnits: 158, routeMtdPending: 1 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 474, inactive: 46, weekly: 8343.08, monthly: 36124.95, trial: 4, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 1, trialsMonth: 3, trialsWeek: 2, lostMonthDeals: 8, lostMonthUnits: 13, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 18, sfMtdUnits: 218, sfMtdRows: 168, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7243.81, monthly: 31367.32, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 31, sfDayRows: 20, sfMtdUnits: 271, sfMtdRows: 167, routeDayCustomers: 20, routeDayUnits: 31, routeDayWindow: '11:05 AM–02:45 PM', routeMtdCustomers: 166, routeMtdUnits: 271, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 420, inactive: 39, weekly: 6158.29, monthly: 26664.99, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 3, lostWeekDeals: 2, lostWeekUnits: 3, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 1, sfDayUnits: 56, sfDayRows: 28, sfMtdUnits: 360, sfMtdRows: 218, routeDayCustomers: 28, routeDayUnits: 55, routeDayWindow: '10:07 AM–04:27 PM', routeMtdCustomers: 218, routeMtdUnits: 359, routeMtdPending: 1 },
  { id: "san-diego", name: "San Diego", totalUnits: 415, inactive: 54, weekly: 6406.34, monthly: 27738.73, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 0, sfDayUnits: 14, sfDayRows: 8, sfMtdUnits: 247, sfMtdRows: 125, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 382, inactive: 32, weekly: 6045.69, monthly: 26177.44, trial: 1, collectTrial: 0, pending: 1, wonMonth: 1, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 21, lostMonthUnits: 29, lostWeekDeals: 19, lostWeekUnits: 25, cancelDeals: 5, cancelUnits: 6, cancelAmt: 305, cancelMoved: 4, sfDayUnits: 20, sfDayRows: 14, sfMtdUnits: 187, sfMtdRows: 129, routeDayCustomers: 17, routeDayUnits: 23, routeDayWindow: '08:45 AM–02:50 PM', routeMtdCustomers: 130, routeMtdUnits: 190, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 5, sfDayRows: 3, sfMtdUnits: 39, sfMtdRows: 26, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 384, inactive: 52, weekly: 5297.90, monthly: 22940.37, trial: 16, collectTrial: 0, pending: 7, wonMonth: 8, wonWeek: 1, trialsMonth: 15, trialsWeek: 5, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 308, sfMtdRows: 141, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 141, routeMtdUnits: 308, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 351, inactive: 87, weekly: 4666.25, monthly: 20207.40, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 4, cancelUnits: 8, cancelAmt: 345, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 321, inactive: 31, weekly: 4377.06, monthly: 18951.89, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 5, cancelAmt: 275, cancelMoved: 3, sfDayUnits: 10, sfDayRows: 9, sfMtdUnits: 163, sfMtdRows: 87, routeDayCustomers: 9, routeDayUnits: 10, routeDayWindow: '12:27 PM–01:53 PM', routeMtdCustomers: 89, routeMtdUnits: 165, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 39, sfMtdRows: 16, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 16, routeMtdUnits: 39, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 12, weekly: 4703.67, monthly: 20365.84, trial: 14, collectTrial: 0, pending: 12, wonMonth: 2, wonWeek: 0, trialsMonth: 5, trialsWeek: 1, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 60, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 172, sfMtdRows: 117, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 116, routeMtdUnits: 161, routeMtdPending: 10 },
  { id: "vancouver", name: "Vancouver", totalUnits: 228, inactive: 20, weekly: 3010.75, monthly: 13036.28, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 20, cancelAmt: 792.18, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 22, sfMtdRows: 7, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 17, weekly: 3510.15, monthly: 15199.47, trial: 52, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 47, trialsWeek: 10, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 0, sfDayUnits: 26, sfDayRows: 18, sfMtdUnits: 66, sfMtdRows: 38, routeDayCustomers: 18, routeDayUnits: 26, routeDayWindow: '08:26 AM–01:42 PM', routeMtdCustomers: 39, routeMtdUnits: 67, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 149, inactive: 7, weekly: 2450.05, monthly: 10607.75, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 4, lostWeekDeals: 2, lostWeekUnits: 3, cancelDeals: 9, cancelUnits: 24, cancelAmt: 1075, cancelMoved: 2, sfDayUnits: 13, sfDayRows: 5, sfMtdUnits: 141, sfMtdRows: 81, routeDayCustomers: 5, routeDayUnits: 13, routeDayWindow: '09:14 AM–01:09 PM', routeMtdCustomers: 81, routeMtdUnits: 141, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 46, inactive: 1, weekly: 1056.57, monthly: 4575.36, trial: 26, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 4, trialsWeek: 1, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 4, cancelAmt: 200, cancelMoved: 1, sfDayUnits: 2, sfDayRows: 2, sfMtdUnits: 26, sfMtdRows: 22, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "8:30 AM", stop: "6:34 PM", onRoad: "10h 4m", trips: 36, miles: 103.0, flag: "ok", left: 16.7, width: 67.1 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "10:14 AM", stop: "3:44 PM", onRoad: "5h 30m", trips: 11, miles: 84.0, flag: "ok", left: 28.2, width: 36.7 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "9:49 AM", stop: "3:23 PM", onRoad: "5h 34m", trips: 18, miles: 71.0, flag: "ok", left: 25.4, width: 37.1 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "7:46 AM", stop: "7:16 PM", onRoad: "11h 30m", trips: 17, miles: 58.0, flag: "ok", left: 11.8, width: 76.7 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "10:33 AM", stop: "5:27 PM", onRoad: "6h 54m", trips: 3, miles: 0.0, flag: "short", left: 30.3, width: 46.0 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:06 AM", stop: "5:16 PM", onRoad: "10h 10m", trips: 17, miles: 163.0, flag: "ok", left: 7.3, width: 67.8 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "7:24 AM", stop: "2:06 PM", onRoad: "6h 42m", trips: 19, miles: 90.0, flag: "ok", left: 9.3, width: 44.7 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:08 AM", stop: "4:37 PM", onRoad: "7h 29m", trips: 24, miles: 48.0, flag: "ok", left: 20.9, width: 49.9 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "9:43 AM", stop: "2:13 PM", onRoad: "4h 30m", trips: 6, miles: 80.0, flag: "ok", left: 24.8, width: 30.0 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "12:03 PM", stop: "2:09 PM", onRoad: "2h 6m", trips: 9, miles: 21.0, flag: "ok", left: 40.3, width: 14.0 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "7:16 AM", stop: "4:01 PM", onRoad: "8h 45m", trips: 14, miles: 101.0, flag: "ok", left: 8.4, width: 58.3 },
  { id: "fw-van-non-active", name: "FW van non active", locationId: null, zone: "CT", start: "3:05 PM", stop: "3:19 PM", onRoad: "0h 14m", trips: 3, miles: 0.0, flag: "short", left: 60.6, width: 1.6 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Fri Nov 13",
  status: "ok",
  rows: [
    { location: "San Francisco", count: 8 },
    { location: "Dallas", count: 3 },
    { location: "Orange County", count: 2 },
    { location: "Chicago", count: 1 },
    { location: "Denver", count: 1 },
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
