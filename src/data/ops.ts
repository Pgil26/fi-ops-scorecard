/** Floral Image FI Ops snapshot.
 * Coverage day: Tuesday Nov 10, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Wed Nov 11, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Tue Nov 10 rows from routemap_2026-11-10.csv (pulled Wed Nov 11 ~4:42 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 10 ~4:42 AM ET.
 * Geotab: Tue Nov 10 from geotab-daily-start-end-local-2026-11-10.csv (written Wed Nov 11 ~4:27 AM ET).
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
  sales: "Wed Nov 11, 2026 · ~5:30 AM ET",
  routeDay: "Tue Nov 10",
  routePulled: "Wed Nov 11 · ~4:42 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 10 ~4:42 AM ET",
  geotabDay: "Tue Nov 10",
  geotabPulled: "Wed Nov 11 · ~4:27 AM ET",
  sfRefreshDay: "Tue Nov 10",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 9 – Tue Nov 10 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1321, inactive: 206, weekly: 15988.92, monthly: 69228.43, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 23, cancelUnits: 32, cancelAmt: 1322.84, cancelMoved: 5, sfDayUnits: 51, sfDayRows: 37, sfMtdUnits: 343, sfMtdRows: 233, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 738, inactive: 117, weekly: 10460.91, monthly: 45296.63, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 15, cancelUnits: 30, cancelAmt: 1568.30, cancelMoved: 2, sfDayUnits: 36, sfDayRows: 17, sfMtdUnits: 162, sfMtdRows: 93, routeDayCustomers: 19, routeDayUnits: 38, routeDayWindow: 'Jasper Miltko 0/0, Steph 2/2 ST – 12:00 AM ET – 12:00 AM, Kaci Kirk 17/36 ST – 10:42 AM ET – 02:10 PM', routeMtdCustomers: 96, routeMtdUnits: 164, routeMtdPending: 1 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 57, weekly: 11497.58, monthly: 49794.94, trial: 61, collectTrial: 0, pending: 3, wonMonth: 2, wonWeek: 0, trialsMonth: 61, trialsWeek: 17, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 6, cancelAmt: 355, cancelMoved: 0, sfDayUnits: 47, sfDayRows: 28, sfMtdUnits: 189, sfMtdRows: 108, routeDayCustomers: 28, routeDayUnits: 47, routeDayWindow: 'Gabby 28/47 ST – 08:40 AM ET – 02:20 PM', routeMtdCustomers: 109, routeMtdUnits: 188, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 26, sfDayRows: 16, sfMtdUnits: 162, sfMtdRows: 104, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 104, routeMtdUnits: 157, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 0, sfDayUnits: 19, sfDayRows: 13, sfMtdUnits: 112, sfMtdRows: 52, routeDayCustomers: 9, routeDayUnits: 10, routeDayWindow: 'Orange County 2/3 ST – 11:50 AM ET – 12:08 PM, LA 7/7 ST – 10:20 AM ET – 03:34 PM', routeMtdCustomers: 46, routeMtdUnits: 98, routeMtdPending: 3 },
  { id: "austin", name: "Austin", totalUnits: 474, inactive: 52, weekly: 7203.24, monthly: 31189.66, trial: 10, collectTrial: 0, pending: 21, wonMonth: 1, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 7, cancelUnits: 20, cancelAmt: 1085, cancelMoved: 1, sfDayUnits: 27, sfDayRows: 19, sfMtdUnits: 119, sfMtdRows: 91, routeDayCustomers: 19, routeDayUnits: 27, routeDayWindow: 'Nicole Drake 19/27 ST – 10:01 AM ET – 02:43 PM', routeMtdCustomers: 91, routeMtdUnits: 119, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 474, inactive: 46, weekly: 8343.08, monthly: 36124.95, trial: 2, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 1, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 8, lostMonthUnits: 13, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 19, sfDayRows: 17, sfMtdUnits: 145, sfMtdRows: 112, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7243.81, monthly: 31367.32, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 171, sfMtdRows: 102, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 101, routeMtdUnits: 171, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 422, inactive: 39, weekly: 6191.55, monthly: 26809.02, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 1, sfDayUnits: 45, sfDayRows: 29, sfMtdUnits: 242, sfMtdRows: 153, routeDayCustomers: 29, routeDayUnits: 45, routeDayWindow: 'Sara Gorstein 29/45 ST – 09:46 AM ET – 05:07 PM', routeMtdCustomers: 153, routeMtdUnits: 242, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 415, inactive: 54, weekly: 6406.34, monthly: 27738.73, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 0, sfDayUnits: 21, sfDayRows: 11, sfMtdUnits: 188, sfMtdRows: 96, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 384, inactive: 32, weekly: 6080.61, monthly: 26328.68, trial: 1, collectTrial: 0, pending: 1, wonMonth: 1, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 4, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 6, cancelAmt: 295, cancelMoved: 3, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 143, sfMtdRows: 96, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 95, routeMtdUnits: 143, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 11, sfDayRows: 10, sfMtdUnits: 15, sfMtdRows: 13, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 383, inactive: 52, weekly: 5284.59, monthly: 22882.76, trial: 24, collectTrial: 0, pending: 4, wonMonth: 7, wonWeek: 0, trialsMonth: 20, trialsWeek: 5, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 30, sfDayRows: 17, sfMtdUnits: 290, sfMtdRows: 132, routeDayCustomers: 17, routeDayUnits: 30, routeDayWindow: 'Jose Moure (NYC) 17/30 ST – 08:49 AM ET – 03:47 PM, Gregg, Shae, Andrey Kirsanov, Joshua, Goncalo Souto, Chelsea, Nathan all 0/0', routeMtdCustomers: 132, routeMtdUnits: 290, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 351, inactive: 87, weekly: 4666.25, monthly: 20207.40, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 4, cancelUnits: 8, cancelAmt: 345, cancelMoved: 1, sfDayUnits: 37, sfDayRows: 32, sfMtdUnits: 196, sfMtdRows: 144, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 322, inactive: 31, weekly: 4397.02, monthly: 19038.31, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 4, cancelAmt: 215, cancelMoved: 2, sfDayUnits: 9, sfDayRows: 8, sfMtdUnits: 101, sfMtdRows: 52, routeDayCustomers: 8, routeDayUnits: 9, routeDayWindow: 'CSR 8/9 ST – 11:48 AM ET – 01:09 PM', routeMtdCustomers: 54, routeMtdUnits: 103, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 34, sfDayRows: 13, sfMtdUnits: 39, sfMtdRows: 16, routeDayCustomers: 13, routeDayUnits: 34, routeDayWindow: 'JD Garnett 13/34 ST – 11:52 AM ET – 03:52 PM', routeMtdCustomers: 16, routeMtdUnits: 39, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 12, weekly: 4703.67, monthly: 20365.84, trial: 16, collectTrial: 0, pending: 12, wonMonth: 2, wonWeek: 0, trialsMonth: 5, trialsWeek: 1, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 0, sfDayUnits: 37, sfDayRows: 17, sfMtdUnits: 134, sfMtdRows: 88, routeDayCustomers: 17, routeDayUnits: 37, routeDayWindow: 'Ft Lauderdale Refresh Rep 17/37 ST – 10:22 AM ET – 05:22 PM', routeMtdCustomers: 87, routeMtdUnits: 123, routeMtdPending: 10 },
  { id: "vancouver", name: "Vancouver", totalUnits: 248, inactive: 23, weekly: 3228.65, monthly: 13979.78, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 1, sfMtdRows: 1, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 17, weekly: 3510.15, monthly: 15199.47, trial: 52, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 47, trialsWeek: 10, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 152, inactive: 7, weekly: 2499.94, monthly: 10823.79, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 3, lostWeekDeals: 2, lostWeekUnits: 3, cancelDeals: 10, cancelUnits: 23, cancelAmt: 1035, cancelMoved: 1, sfDayUnits: 62, sfDayRows: 34, sfMtdUnits: 67, sfMtdRows: 36, routeDayCustomers: 34, routeDayUnits: 62, routeDayWindow: 'Amelie Drake 34/62 ST – 09:07 AM ET – 03:38 PM', routeMtdCustomers: 36, routeMtdUnits: 67, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 50, inactive: 1, weekly: 1136.41, monthly: 4921.03, trial: 25, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 50, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 22, sfMtdRows: 18, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "9:05 AM", stop: "6:54 PM", onRoad: "9h 49m", trips: 32, miles: 73.6, flag: "ok", left: 20.6, width: 65.4 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "8:22 AM", stop: "6:29 PM", onRoad: "10h 7m", trips: 27, miles: 52.0, flag: "ok", left: 15.8, width: 67.4 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "7:57 AM", stop: "5:16 PM", onRoad: "9h 19m", trips: 8, miles: 6.9, flag: "short", left: 13.0, width: 62.1 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "7:50 AM", stop: "7:05 PM", onRoad: "11h 15m", trips: 18, miles: 122.6, flag: "ok", left: 12.2, width: 75.0 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "7:04 AM", stop: "3:38 PM", onRoad: "8h 34m", trips: 11, miles: 69.6, flag: "ok", left: 7.1, width: 57.1 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:45 AM", stop: "4:29 PM", onRoad: "8h 44m", trips: 15, miles: 64.8, flag: "ok", left: 11.7, width: 58.2 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:04 AM", stop: "3:01 PM", onRoad: "6h 57m", trips: 10, miles: 100.8, flag: "ok", left: 13.8, width: 46.3 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "9:45 AM", stop: "1:25 PM", onRoad: "3h 40m", trips: 11, miles: 52.0, flag: "ok", left: 25.0, width: 24.4 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "7:18 AM", stop: "5:50 PM", onRoad: "10h 32m", trips: 22, miles: 73.8, flag: "ok", left: 8.7, width: 70.2 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Tue Nov 10",
  status: "ok",
  rows: [
    { location: "Fort Lauderdale", count: 5 },
    { location: "Seattle", count: 3 },
    { location: "Orange County", count: 2 },
    { location: "Austin", count: 1 },
    { location: "San Antonio", count: 1 },
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
