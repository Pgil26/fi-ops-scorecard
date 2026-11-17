/** Floral Image FI Ops snapshot.
 * Coverage day: Monday Nov 16, 2026 (America/New_York). Monday runs cover Friday.
 * Salesforce figures pulled Tue Nov 17, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Mon Nov 16 rows from routemap_2026-11-16.csv (pulled Tue Nov 17 ~4:35 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 16 ~4:35 AM ET.
 * Geotab: Mon Nov 16 from geotab-daily-start-end-local-2026-11-16.csv (written Tue Nov 17 ~4:24 AM ET).
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
  sales: "Tue Nov 17, 2026 · ~5:30 AM ET",
  routeDay: "Mon Nov 16",
  routePulled: "Tue Nov 17 · ~4:35 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 16 ~4:35 AM ET",
  geotabDay: "Mon Nov 16",
  geotabPulled: "Tue Nov 17 · ~4:24 AM ET",
  sfRefreshDay: "Mon Nov 16",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 16 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1318, inactive: 206, weekly: 15947.11, monthly: 69047.41, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 26, cancelUnits: 35, cancelAmt: 1448.52, cancelMoved: 8, sfDayUnits: 98, sfDayRows: 66, sfMtdUnits: 640, sfMtdRows: 427, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 737, inactive: 115, weekly: 10482.53, monthly: 45390.25, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 14, cancelUnits: 31, cancelAmt: 1611.24, cancelMoved: 2, sfDayUnits: 17, sfDayRows: 9, sfMtdUnits: 219, sfMtdRows: 120, routeDayCustomers: 9, routeDayUnits: 17, routeDayWindow: '10:18 AM–01:09 PM', routeMtdCustomers: 123, routeMtdUnits: 221, routeMtdPending: 1 },
  { id: "atlanta", name: "Atlanta", totalUnits: 546, inactive: 57, weekly: 11306.45, monthly: 48966.77, trial: 37, collectTrial: 0, pending: 4, wonMonth: 2, wonWeek: 0, trialsMonth: 37, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 9, cancelAmt: 530, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 251, sfMtdRows: 147, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 150, routeMtdUnits: 254, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 23, sfDayRows: 17, sfMtdUnits: 269, sfMtdRows: 161, routeDayCustomers: 19, routeDayUnits: 27, routeDayWindow: '10:09 AM–03:37 PM', routeMtdCustomers: 184, routeMtdUnits: 300, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 488, inactive: 28, weekly: 7975.30, monthly: 34532.62, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 805, cancelMoved: 1, sfDayUnits: 27, sfDayRows: 21, sfMtdUnits: 226, sfMtdRows: 121, routeDayCustomers: 19, routeDayUnits: 22, routeDayWindow: '09:42 AM–02:37 PM', routeMtdCustomers: 110, routeMtdUnits: 210, routeMtdPending: 1 },
  { id: "austin", name: "Austin", totalUnits: 474, inactive: 52, weekly: 7203.24, monthly: 31189.66, trial: 10, collectTrial: 0, pending: 21, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 7, cancelUnits: 20, cancelAmt: 1085, cancelMoved: 1, sfDayUnits: 18, sfDayRows: 17, sfMtdUnits: 186, sfMtdRows: 141, routeDayCustomers: 17, routeDayUnits: 18, routeDayWindow: '11:52 AM–02:58 PM', routeMtdCustomers: 141, routeMtdUnits: 186, routeMtdPending: 1 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 476, inactive: 46, weekly: 8380.73, monthly: 36287.95, trial: 3, collectTrial: 0, pending: 0, wonMonth: 4, wonWeek: 2, trialsMonth: 2, trialsWeek: 0, lostMonthDeals: 8, lostMonthUnits: 13, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 22, sfDayRows: 18, sfMtdUnits: 240, sfMtdRows: 186, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7243.81, monthly: 31367.32, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 41, sfDayRows: 21, sfMtdUnits: 312, sfMtdRows: 188, routeDayCustomers: 21, routeDayUnits: 41, routeDayWindow: '10:13 AM–03:08 PM', routeMtdCustomers: 187, routeMtdUnits: 312, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 418, inactive: 41, weekly: 6095.09, monthly: 26391.33, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 5, lostWeekDeals: 2, lostWeekUnits: 2, cancelDeals: 1, cancelUnits: 2, cancelAmt: 90, cancelMoved: 1, sfDayUnits: 7, sfDayRows: 5, sfMtdUnits: 367, sfMtdRows: 223, routeDayCustomers: 5, routeDayUnits: 7, routeDayWindow: '10:11 AM–02:10 PM', routeMtdCustomers: 222, routeMtdUnits: 366, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 415, inactive: 54, weekly: 6406.34, monthly: 27738.73, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 3, lostWeekDeals: 1, lostWeekUnits: 2, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 25, sfDayRows: 13, sfMtdUnits: 272, sfMtdRows: 138, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 382, inactive: 32, weekly: 6045.69, monthly: 26177.44, trial: 1, collectTrial: 0, pending: 1, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 21, lostMonthUnits: 29, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 6, cancelAmt: 305, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 187, sfMtdRows: 129, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 130, routeMtdUnits: 190, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 11, sfMtdUnits: 60, sfMtdRows: 37, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 384, inactive: 52, weekly: 5297.90, monthly: 22940.37, trial: 11, collectTrial: 0, pending: 7, wonMonth: 8, wonWeek: 0, trialsMonth: 11, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 308, sfMtdRows: 141, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 141, routeMtdUnits: 308, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 351, inactive: 87, weekly: 4666.25, monthly: 20207.40, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 4, cancelUnits: 8, cancelAmt: 345, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 318, inactive: 31, weekly: 4328.43, monthly: 18741.38, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 421.16, cancelMoved: 4, sfDayUnits: 9, sfDayRows: 6, sfMtdUnits: 172, sfMtdRows: 93, routeDayCustomers: 7, routeDayUnits: 11, routeDayWindow: '12:56 PM–03:47 PM', routeMtdCustomers: 96, routeMtdUnits: 176, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 289, inactive: 15, weekly: 4848.24, monthly: 20992.37, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 50, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 39, sfMtdRows: 16, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 16, routeMtdUnits: 39, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 12, weekly: 4693.69, monthly: 20322.63, trial: 14, collectTrial: 0, pending: 12, wonMonth: 2, wonWeek: 0, trialsMonth: 5, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 60, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 181, sfMtdRows: 122, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 121, routeMtdUnits: 170, routeMtdPending: 10 },
  { id: "vancouver", name: "Vancouver", totalUnits: 228, inactive: 20, weekly: 3010.75, monthly: 13036.28, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 20, lostWeekDeals: 3, lostWeekUnits: 20, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 26, sfDayRows: 12, sfMtdUnits: 48, sfMtdRows: 19, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 17, weekly: 3510.15, monthly: 15199.47, trial: 52, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 47, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 0, sfDayUnits: 39, sfDayRows: 24, sfMtdUnits: 105, sfMtdRows: 62, routeDayCustomers: 24, routeDayUnits: 39, routeDayWindow: '08:43 AM–04:19 PM', routeMtdCustomers: 63, routeMtdUnits: 106, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 149, inactive: 7, weekly: 2450.05, monthly: 10607.75, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 4, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 24, cancelAmt: 1075, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 141, sfMtdRows: 81, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 81, routeMtdUnits: 141, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 46, inactive: 1, weekly: 1056.57, monthly: 4575.36, trial: 27, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 5, trialsWeek: 1, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 4, cancelAmt: 200, cancelMoved: 1, sfDayUnits: 1, sfDayRows: 1, sfMtdUnits: 29, sfMtdRows: 25, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:00 AM", stop: "11:30 PM", onRoad: "14h 30m", trips: 16, miles: 138.3, flag: "ok", left: 20.0, width: 80.0 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "12:00 PM", stop: "12:41 PM", onRoad: "0h 41m", trips: 2, miles: 4.8, flag: "short", left: 40.0, width: 4.6 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "9:24 AM", stop: "3:35 PM", onRoad: "6h 11m", trips: 19, miles: 65.5, flag: "ok", left: 22.7, width: 41.2 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "7:56 AM", stop: "7:28 PM", onRoad: "11h 32m", trips: 22, miles: 50.7, flag: "ok", left: 12.9, width: 76.9 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "10:00 AM", stop: "1:45 PM", onRoad: "3h 45m", trips: 3, miles: 3.8, flag: "short", left: 26.7, width: 25.0 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:11 AM", stop: "6:39 PM", onRoad: "11h 28m", trips: 23, miles: 247.1, flag: "ok", left: 7.9, width: 76.4 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "7:38 AM", stop: "12:59 PM", onRoad: "5h 21m", trips: 14, miles: 78.1, flag: "ok", left: 10.9, width: 35.7 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "7:20 AM", stop: "9:28 AM", onRoad: "2h 8m", trips: 3, miles: 1.1, flag: "short", left: 8.9, width: 14.2 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "7:41 AM", stop: "3:40 PM", onRoad: "7h 59m", trips: 10, miles: 133.5, flag: "ok", left: 11.2, width: 53.2 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "12:10 PM", stop: "4:06 PM", onRoad: "3h 56m", trips: 11, miles: 37.2, flag: "ok", left: 41.1, width: 26.2 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "7:16 AM", stop: "4:33 PM", onRoad: "9h 17m", trips: 20, miles: 118.3, flag: "ok", left: 8.4, width: 61.9 },
  { id: "fw-van-non-active", name: "FW van non active", locationId: null, zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Mon Nov 16",
  status: "ok",
  rows: [
    { location: "Orange County", count: 3 },
    { location: "San Francisco", count: 3 },
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
