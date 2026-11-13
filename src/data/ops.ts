/** Floral Image FI Ops snapshot.
 * Coverage day: Thursday Nov 12, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Fri Nov 13, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Thu Nov 12 rows from routemap_2026-11-12.csv (pulled Fri Nov 13 ~4:43 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 12 ~4:43 AM ET.
 * Geotab: Thu Nov 12 from geotab-daily-start-end-local-2026-11-12.csv (written Fri Nov 13 ~4:31 AM ET).
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
  sales: "Fri Nov 13, 2026 · ~5:30 AM ET",
  routeDay: "Thu Nov 12",
  routePulled: "Fri Nov 13 · ~4:43 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 12 ~4:43 AM ET",
  geotabDay: "Thu Nov 12",
  geotabPulled: "Fri Nov 13 · ~4:31 AM ET",
  sfRefreshDay: "Thu Nov 12",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 9 – Thu Nov 12 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1319, inactive: 206, weekly: 15959.78, monthly: 69102.26, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 25, cancelUnits: 34, cancelAmt: 1410.43, cancelMoved: 7, sfDayUnits: 67, sfDayRows: 42, sfMtdUnits: 478, sfMtdRows: 316, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 738, inactive: 117, weekly: 10460.91, monthly: 45296.63, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 15, cancelUnits: 30, cancelAmt: 1568.30, cancelMoved: 2, sfDayUnits: 23, sfDayRows: 10, sfMtdUnits: 202, sfMtdRows: 111, routeDayCustomers: 10, routeDayUnits: 23, routeDayWindow: 'Kaci Kirk: 12:05 PM ET – 01:29 PM', routeMtdCustomers: 114, routeMtdUnits: 204, routeMtdPending: 1 },
  { id: "atlanta", name: "Atlanta", totalUnits: 547, inactive: 57, weekly: 11324.74, monthly: 49045.99, trial: 52, collectTrial: 0, pending: 2, wonMonth: 2, wonWeek: 0, trialsMonth: 52, trialsWeek: 17, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 8, cancelAmt: 475, cancelMoved: 1, sfDayUnits: 16, sfDayRows: 10, sfMtdUnits: 214, sfMtdRows: 125, routeDayCustomers: 10, routeDayUnits: 16, routeDayWindow: 'Gabby: 08:50 AM ET – 11:12 AM', routeMtdCustomers: 128, routeMtdUnits: 217, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 28, sfDayRows: 17, sfMtdUnits: 225, sfMtdRows: 133, routeDayCustomers: 18, routeDayUnits: 29, routeDayWindow: 'Irving Chavez: 10:10 AM ET – 04:34 PM', routeMtdCustomers: 151, routeMtdUnits: 248, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 488, inactive: 28, weekly: 7975.30, monthly: 34532.62, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 10, cancelUnits: 14, cancelAmt: 805, cancelMoved: 1, sfDayUnits: 33, sfDayRows: 17, sfMtdUnits: 182, sfMtdRows: 91, routeDayCustomers: 17, routeDayUnits: 37, routeDayWindow: 'Orange County: 11:32 AM ET – 01:48 PM, LA: 11:34 AM ET – 01:50 PM', routeMtdCustomers: 82, routeMtdUnits: 171, routeMtdPending: 1 },
  { id: "austin", name: "Austin", totalUnits: 474, inactive: 52, weekly: 7203.24, monthly: 31189.66, trial: 10, collectTrial: 0, pending: 21, wonMonth: 1, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 7, cancelUnits: 20, cancelAmt: 1085, cancelMoved: 1, sfDayUnits: 20, sfDayRows: 16, sfMtdUnits: 156, sfMtdRows: 121, routeDayCustomers: 16, routeDayUnits: 20, routeDayWindow: 'Nicole Drake: 10:00 AM ET – 01:15 PM', routeMtdCustomers: 121, routeMtdUnits: 156, routeMtdPending: 1 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 474, inactive: 46, weekly: 8343.08, monthly: 36124.95, trial: 4, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 1, trialsMonth: 3, trialsWeek: 2, lostMonthDeals: 8, lostMonthUnits: 13, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 20, sfDayRows: 18, sfMtdUnits: 189, sfMtdRows: 144, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7243.81, monthly: 31367.32, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 34, sfDayRows: 25, sfMtdUnits: 240, sfMtdRows: 147, routeDayCustomers: 25, routeDayUnits: 34, routeDayWindow: 'DEN switch 1: 09:50 AM ET – 02:56 PM', routeMtdCustomers: 146, routeMtdUnits: 240, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 420, inactive: 39, weekly: 6158.29, monthly: 26664.99, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 3, lostWeekDeals: 2, lostWeekUnits: 3, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 1, sfDayUnits: 37, sfDayRows: 20, sfMtdUnits: 304, sfMtdRows: 190, routeDayCustomers: 20, routeDayUnits: 37, routeDayWindow: 'Sara Gorstein: 11:08 AM ET – 04:25 PM', routeMtdCustomers: 190, routeMtdUnits: 304, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 415, inactive: 54, weekly: 6406.34, monthly: 27738.73, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 0, sfDayUnits: 25, sfDayRows: 14, sfMtdUnits: 233, sfMtdRows: 117, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 383, inactive: 32, weekly: 6063.98, monthly: 26256.66, trial: 1, collectTrial: 0, pending: 1, wonMonth: 1, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 6, lostMonthUnits: 9, lostWeekDeals: 4, lostWeekUnits: 5, cancelDeals: 4, cancelUnits: 5, cancelAmt: 250, cancelMoved: 3, sfDayUnits: 24, sfDayRows: 19, sfMtdUnits: 167, sfMtdRows: 115, routeDayCustomers: 19, routeDayUnits: 24, routeDayWindow: 'Marie Casado: 08:10 AM ET – 01:59 PM', routeMtdCustomers: 114, routeMtdUnits: 167, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 19, sfDayRows: 10, sfMtdUnits: 34, sfMtdRows: 23, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 383, inactive: 52, weekly: 5284.59, monthly: 22882.76, trial: 16, collectTrial: 0, pending: 7, wonMonth: 7, wonWeek: 0, trialsMonth: 15, trialsWeek: 5, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 18, sfDayRows: 9, sfMtdUnits: 308, sfMtdRows: 141, routeDayCustomers: 9, routeDayUnits: 18, routeDayWindow: 'Jose Moure (NYC): 08:33 AM ET – 12:32 PM', routeMtdCustomers: 141, routeMtdUnits: 308, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 351, inactive: 87, weekly: 4666.25, monthly: 20207.40, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 4, cancelUnits: 8, cancelAmt: 345, cancelMoved: 1, sfDayUnits: 7, sfDayRows: 7, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 321, inactive: 31, weekly: 4377.06, monthly: 18951.89, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 4, cancelUnits: 5, cancelAmt: 275, cancelMoved: 3, sfDayUnits: 17, sfDayRows: 11, sfMtdUnits: 153, sfMtdRows: 78, routeDayCustomers: 11, routeDayUnits: 17, routeDayWindow: 'CSR: 11:50 AM ET – 02:32 PM', routeMtdCustomers: 80, routeMtdUnits: 155, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 39, sfMtdRows: 16, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 16, routeMtdUnits: 39, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 12, weekly: 4703.67, monthly: 20365.84, trial: 14, collectTrial: 0, pending: 12, wonMonth: 2, wonWeek: 0, trialsMonth: 5, trialsWeek: 1, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 60, cancelMoved: 0, sfDayUnits: 23, sfDayRows: 19, sfMtdUnits: 172, sfMtdRows: 117, routeDayCustomers: 19, routeDayUnits: 23, routeDayWindow: 'Ft Lauderdale Refresh Rep: 09:46 AM ET – 04:47 PM', routeMtdCustomers: 116, routeMtdUnits: 161, routeMtdPending: 10 },
  { id: "vancouver", name: "Vancouver", totalUnits: 248, inactive: 23, weekly: 3228.65, monthly: 13979.78, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 6, sfMtdUnits: 22, sfMtdRows: 7, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 17, weekly: 3510.15, monthly: 15199.47, trial: 52, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 47, trialsWeek: 10, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 40, sfMtdRows: 20, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 21, routeMtdUnits: 41, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 149, inactive: 7, weekly: 2450.05, monthly: 10607.75, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 3, lostMonthUnits: 4, lostWeekDeals: 2, lostWeekUnits: 3, cancelDeals: 9, cancelUnits: 24, cancelAmt: 1075, cancelMoved: 2, sfDayUnits: 26, sfDayRows: 15, sfMtdUnits: 124, sfMtdRows: 74, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 59, routeMtdUnits: 98, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 46, inactive: 1, weekly: 1056.57, monthly: 4575.36, trial: 25, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 5, cancelAmt: 250, cancelMoved: 2, sfDayUnits: 2, sfDayRows: 2, sfMtdUnits: 24, sfMtdRows: 20, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:37 AM", stop: "6:03 PM", onRoad: "8h 26m", trips: 25, miles: 121.0, flag: "ok", left: 24.1, width: 56.2 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "8:26 AM", stop: "6:21 PM", onRoad: "9h 55m", trips: 27, miles: 86.0, flag: "ok", left: 16.2, width: 66.1 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "9:04 AM", stop: "3:28 PM", onRoad: "6h 24m", trips: 20, miles: 108.0, flag: "ok", left: 20.4, width: 42.7 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "8:07 AM", stop: "6:55 PM", onRoad: "10h 48m", trips: 19, miles: 72.0, flag: "ok", left: 14.1, width: 72.0 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:28 AM", stop: "1:42 PM", onRoad: "6h 14m", trips: 10, miles: 86.0, flag: "ok", left: 9.8, width: 41.6 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "9:50 AM", stop: "12:23 PM", onRoad: "2h 33m", trips: 7, miles: 41.0, flag: "ok", left: 25.6, width: 17.0 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "9:24 AM", stop: "5:42 PM", onRoad: "8h 18m", trips: 22, miles: 96.0, flag: "ok", left: 22.7, width: 55.3 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:03 AM", stop: "3:48 PM", onRoad: "7h 45m", trips: 10, miles: 163.0, flag: "ok", left: 13.7, width: 51.7 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "11:23 AM", stop: "3:07 PM", onRoad: "3h 44m", trips: 12, miles: 62.0, flag: "ok", left: 35.9, width: 24.9 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "7:14 AM", stop: "4:58 PM", onRoad: "9h 44m", trips: 22, miles: 98.0, flag: "ok", left: 8.2, width: 64.9 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Thu Nov 12",
  status: "ok",
  rows: [
    { location: "Orange County", count: 3 },
    { location: "Denver", count: 2 },
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
