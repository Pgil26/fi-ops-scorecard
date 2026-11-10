/** Floral Image FI Ops snapshot.
 * Coverage day: Monday Nov 9, 2026 (America/New_York). Tue–Fri digests cover the previous day.
 * Salesforce figures pulled Tue Nov 10, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Mon Nov 9 rows from routemap_2026-11-09.csv (pulled Tue Nov 10 ~4:36 AM ET). Pairs are customers / units. MTD is Nov MTD as of Nov 9 ~4:36 AM ET.
 * Geotab: Mon Nov 9 from geotab-daily-start-end-local-2026-11-09.csv (written Tue Nov 10 ~4:24 AM ET).
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
  sales: "Tue Nov 10, 2026 · ~5:30 AM ET",
  routeDay: "Mon Nov 9",
  routePulled: "Tue Nov 10 · ~4:36 AM ET",
  routeMtdLabel: "Nov MTD as of Nov 9 ~4:36 AM ET",
  geotabDay: "Mon Nov 9",
  geotabPulled: "Tue Nov 10 · ~4:24 AM ET",
  sfRefreshDay: "Mon Nov 9",
  monthLabel: "November 2026",
  weekLabel: "Mon Nov 9 (week to date)",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1327, inactive: 206, weekly: 16067.46, monthly: 69568.52, trial: 4, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 20, cancelUnits: 26, cancelAmt: 1086.71, cancelMoved: 2, sfDayUnits: 79, sfDayRows: 49, sfMtdUnits: 292, sfMtdRows: 196, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 738, inactive: 117, weekly: 10460.91, monthly: 45296.63, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 15, cancelUnits: 30, cancelAmt: 1568.30, cancelMoved: 2, sfDayUnits: 8, sfDayRows: 4, sfMtdUnits: 100, sfMtdRows: 61, routeDayCustomers: 4, routeDayUnits: 5, routeDayWindow: 'Kaci Kirk 4/5 ST – 11:44 AM ET – 01:22 PM, Jasper Miltko 0/0, Steph 0/0', routeMtdCustomers: 62, routeMtdUnits: 98, routeMtdPending: 3 },
  { id: "atlanta", name: "Atlanta", totalUnits: 549, inactive: 57, weekly: 11497.58, monthly: 49794.94, trial: 53, collectTrial: 0, pending: 3, wonMonth: 2, wonWeek: 0, trialsMonth: 53, trialsWeek: 9, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 6, cancelAmt: 355, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 142, sfMtdRows: 80, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 81, routeMtdUnits: 141, routeMtdPending: 0 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 524, inactive: 70, weekly: 7946.23, monthly: 34405.86, trial: 8, collectTrial: 0, pending: 32, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 26, sfDayRows: 14, sfMtdUnits: 136, sfMtdRows: 88, routeDayCustomers: 16, routeDayUnits: 29, routeDayWindow: 'Irving Chavez 16/29 ST – 10:22 AM ET – 04:14 PM', routeMtdCustomers: 104, routeMtdUnits: 157, routeMtdPending: 0 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 0, sfDayUnits: 17, sfDayRows: 10, sfMtdUnits: 87, sfMtdRows: 35, routeDayCustomers: 10, routeDayUnits: 18, routeDayWindow: 'Orange County 3/8 ST – 10:50 AM ET – 11:47 AM, LA 7/10 ST – 09:46 AM ET – 02:51 PM', routeMtdCustomers: 33, routeMtdUnits: 81, routeMtdPending: 2 },
  { id: "austin", name: "Austin", totalUnits: 480, inactive: 58, weekly: 7208.24, monthly: 31211.26, trial: 10, collectTrial: 0, pending: 21, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 7, sfDayRows: 5, sfMtdUnits: 90, sfMtdRows: 70, routeDayCustomers: 5, routeDayUnits: 7, routeDayWindow: 'Nicole Drake 5/7 ST – 11:47 AM ET – 12:41 PM', routeMtdCustomers: 70, routeMtdUnits: 90, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 474, inactive: 46, weekly: 8344.13, monthly: 36129.49, trial: 2, collectTrial: 0, pending: 0, wonMonth: 1, wonWeek: 0, trialsMonth: 1, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 12, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 23, sfDayRows: 20, sfMtdUnits: 117, sfMtdRows: 88, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 424, inactive: 53, weekly: 7243.81, monthly: 31367.32, trial: 2, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 52, sfDayRows: 22, sfMtdUnits: 171, sfMtdRows: 102, routeDayCustomers: 22, routeDayUnits: 52, routeDayWindow: 'DEN switch 1 22/52 ST – 08:53 AM ET – 02:19 PM', routeMtdCustomers: 101, routeMtdUnits: 171, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6209.84, monthly: 26888.23, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 28, sfDayRows: 20, sfMtdUnits: 197, sfMtdRows: 124, routeDayCustomers: 20, routeDayUnits: 28, routeDayWindow: 'Sara Gorstein 20/28 ST – 12:13 PM ET – 05:14 PM', routeMtdCustomers: 124, routeMtdUnits: 197, routeMtdPending: 0 },
  { id: "san-diego", name: "San Diego", totalUnits: 415, inactive: 54, weekly: 6406.34, monthly: 27738.73, trial: 0, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 0, sfDayUnits: 22, sfDayRows: 12, sfMtdUnits: 167, sfMtdRows: 85, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 384, inactive: 32, weekly: 6080.61, monthly: 26328.68, trial: 1, collectTrial: 0, pending: 1, wonMonth: 1, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 4, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 6, cancelAmt: 295, cancelMoved: 3, sfDayUnits: 19, sfDayRows: 15, sfMtdUnits: 143, sfMtdRows: 96, routeDayCustomers: 15, routeDayUnits: 19, routeDayWindow: 'Marie Casado 15/19 ST – 08:42 AM ET – 01:49 PM', routeMtdCustomers: 95, routeMtdUnits: 143, routeMtdPending: 0 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 0, sfDayUnits: 4, sfDayRows: 3, sfMtdUnits: 4, sfMtdRows: 3, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 383, inactive: 52, weekly: 5284.59, monthly: 22882.76, trial: 19, collectTrial: 0, pending: 4, wonMonth: 7, wonWeek: 0, trialsMonth: 15, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 39, sfDayRows: 17, sfMtdUnits: 260, sfMtdRows: 115, routeDayCustomers: 17, routeDayUnits: 39, routeDayWindow: 'Jose Moure (NYC) 17/39 ST – 09:41 AM ET – 03:29 PM, Gregg, Shae, Andrey Kirsanov, Joshua, Goncalo Souto, Chelsea, Nathan all 0/0', routeMtdCustomers: 115, routeMtdUnits: 260, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 351, inactive: 87, weekly: 4666.25, monthly: 20207.40, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 6, cancelUnits: 10, cancelAmt: 465, cancelMoved: 2, sfDayUnits: 41, sfDayRows: 31, sfMtdUnits: 159, sfMtdRows: 112, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "phoenix", name: "Phoenix", totalUnits: 322, inactive: 31, weekly: 4397.02, monthly: 19038.31, trial: 3, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 4, cancelAmt: 215, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 92, sfMtdRows: 44, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 46, routeMtdUnits: 94, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 5, sfMtdRows: 3, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 3, routeMtdUnits: 5, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 264, inactive: 12, weekly: 4703.67, monthly: 20365.84, trial: 15, collectTrial: 0, pending: 12, wonMonth: 2, wonWeek: 0, trialsMonth: 4, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 0, sfDayUnits: 10, sfDayRows: 7, sfMtdUnits: 97, sfMtdRows: 71, routeDayCustomers: 7, routeDayUnits: 10, routeDayWindow: 'Ft Lauderdale Refresh Rep 7/10 ST – 09:06 AM ET – 04:46 PM', routeMtdCustomers: 70, routeMtdUnits: 86, routeMtdPending: 10 },
  { id: "vancouver", name: "Vancouver", totalUnits: 248, inactive: 23, weekly: 3228.65, monthly: 13979.78, trial: 0, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 1, sfMtdRows: 1, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey", totalUnits: 223, inactive: 16, weekly: 3526.79, monthly: 15271.48, trial: 42, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 37, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 55, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 154, inactive: 7, weekly: 2533.20, monthly: 10967.82, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 11, cancelUnits: 24, cancelAmt: 1075, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 2, sfMtdRows: 1, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 1, routeMtdUnits: 2, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "north-boston", name: "North Boston", totalUnits: 50, inactive: 1, weekly: 1136.41, monthly: 4921.03, trial: 25, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 50, cancelMoved: 1, sfDayUnits: 5, sfDayRows: 5, sfMtdUnits: 22, sfMtdRows: 18, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
];

export const VANS: VanRow[] = [
  { id: "sara", name: "Sara", locationId: "chicago", zone: "CT", start: "8:28 AM", stop: "11:35 PM", onRoad: "15h 7m", trips: 31, miles: 95.2, flag: "ok", left: 16.4, width: 83.6 },
  { id: "soraya", name: "Soraya", locationId: "fort-lauderdale", zone: "ET", start: "10:31 AM", stop: "12:41 AM", onRoad: "14h 10m", trips: 18, miles: 58.1, flag: "ok", left: 30.1, width: 69.9 },
  { id: "parked-van", name: "Parked Van", locationId: null, zone: "MT", start: "8:06 AM", stop: "10:49 PM", onRoad: "14h 43m", trips: 20, miles: 132.6, flag: "ok", left: 14.0, width: 86.0 },
  { id: "val", name: "Val", locationId: null, zone: "PT", start: "8:09 AM", stop: "6:11 PM", onRoad: "10h 2m", trips: 16, miles: 80.3, flag: "ok", left: 14.3, width: 66.9 },
  { id: "jd", name: "JD", locationId: null, zone: "CT", start: "7:04 AM", stop: "11:41 PM", onRoad: "16h 37m", trips: 12, miles: 101.8, flag: "ok", left: 7.1, width: 92.9 },
  { id: "tom", name: "Tom", locationId: "new-jersey", zone: "ET", start: "7:33 AM", stop: "12:49 AM", onRoad: "17h 16m", trips: 16, miles: 188.8, flag: "ok", left: 10.3, width: 89.7 },
  { id: "gabby", name: "Gabby", locationId: null, zone: "ET", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "la-oc", name: "LA/OC", locationId: "orange-county", zone: "PT", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "jd-fw", name: "JD FW", locationId: "fort-worth", zone: "CT", start: "10:06 AM", stop: "5:07 PM", onRoad: "7h 1m", trips: 20, miles: 86.0, flag: "ok", left: 27.3, width: 46.8 },
  { id: "yolanda", name: "Yolanda", locationId: null, zone: "PT", start: "8:11 AM", stop: "2:58 PM", onRoad: "6h 47m", trips: 11, miles: 110.7, flag: "ok", left: 14.6, width: 45.2 },
  { id: "phoenix", name: "Phoenix van", locationId: "phoenix", zone: "MST", start: "—", stop: "—", onRoad: "No trips", trips: 0, miles: 0.0, flag: "none", left: 0, width: 0 },
  { id: "irving", name: "Irving", locationId: null, zone: "PT", start: "9:27 AM", stop: "7:38 PM", onRoad: "10h 11m", trips: 16, miles: 99.8, flag: "ok", left: 23.0, width: 67.9 },
];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Mon Nov 9",
  status: "ok",
  rows: [
    { location: "Denver", count: 7 },
    { location: "Orange County", count: 2 },
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
