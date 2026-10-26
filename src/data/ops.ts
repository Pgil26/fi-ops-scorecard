/** Floral Image FI Ops snapshot.
 * Coverage day: Friday Oct 23, 2026 (America/New_York). Monday digest covers Friday.
 * Salesforce figures pulled Mon Oct 26, 2026 ~5:30 AM ET (live MCP).
 * RouteMap Daily Changeover: Fri Oct 23 rows from routemap_2026-10-23.csv (pulled Mon Oct 26 ~4:40 AM ET). Pairs are customers / units. MTD is Oct MTD as of Oct 26 ~4:40 AM ET.
 * Geotab: PENDING — geotab-daily-start-end-local-2026-10-23.csv was not available at publish time (no vans listed; no older day reused).
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
  sales: "Mon Oct 26, 2026 · ~5:30 AM ET",
  routeDay: "Fri Oct 23",
  routePulled: "Mon Oct 26 · ~4:40 AM ET",
  routeMtdLabel: "Oct MTD as of Oct 26 ~4:40 AM ET",
  geotabDay: "Fri Oct 23 (pending)",
  geotabPulled: "Pending — Geotab export for Fri Oct 23 not yet available",
  sfRefreshDay: "Fri Oct 23",
  monthLabel: "October 2026",
  weekLabel: "Mon Oct 19–Fri Oct 23",
};

export const LOCATIONS: LocationRow[] = [
  { id: "toronto", name: "Toronto", totalUnits: 1345, inactive: 214, weekly: 16206.83, monthly: 70171.93, trial: 6, collectTrial: 0, pending: 8, wonMonth: 1, wonWeek: 0, trialsMonth: 4, trialsWeek: 3, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 14, cancelUnits: 18, cancelAmt: 741.40, cancelMoved: 4, sfDayUnits: 23, sfDayRows: 19, sfMtdUnits: 791, sfMtdRows: 522, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "puget-sound", name: "Puget Sound", routeName: "Seattle", totalUnits: 741, inactive: 117, weekly: 10509.15, monthly: 45505.47, trial: 4, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 13, cancelUnits: 27, cancelAmt: 1423.30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 333, sfMtdRows: 219, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 225, routeMtdUnits: 334, routeMtdPending: 7 },
  { id: "atlanta", name: "Atlanta", totalUnits: 551, inactive: 58, weekly: 11514.22, monthly: 49866.96, trial: 27, collectTrial: 0, pending: 8, wonMonth: 11, wonWeek: 2, trialsMonth: 27, trialsWeek: 27, lostMonthDeals: 2, lostMonthUnits: 4, lostWeekDeals: 2, lostWeekUnits: 4, cancelDeals: 4, cancelUnits: 11, cancelAmt: 670, cancelMoved: 4, sfDayUnits: 34, sfDayRows: 24, sfMtdUnits: 316, sfMtdRows: 186, routeDayCustomers: 23, routeDayUnits: 33, routeDayWindow: '08:37 AM–02:22 PM', routeMtdCustomers: 201, routeMtdUnits: 336, routeMtdPending: 1 },
  { id: "san-francisco", name: "San Francisco", totalUnits: 535, inactive: 72, weekly: 8110.89, monthly: 35118.81, trial: 8, collectTrial: 0, pending: 32, wonMonth: 1, wonWeek: 1, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 4, lostMonthUnits: 9, lostWeekDeals: 1, lostWeekUnits: 4, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 25, sfDayRows: 14, sfMtdUnits: 304, sfMtdRows: 176, routeDayCustomers: 16, routeDayUnits: 28, routeDayWindow: '10:26 AM–02:59 PM', routeMtdCustomers: 200, routeMtdUnits: 337, routeMtdPending: 1 },
  { id: "orange-county", name: "Orange County", totalUnits: 489, inactive: 28, weekly: 7995.26, monthly: 34619.04, trial: 15, collectTrial: 0, pending: 0, wonMonth: 0, wonWeek: 0, trialsMonth: 1, trialsWeek: 1, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 9, cancelUnits: 13, cancelAmt: 745, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 364, sfMtdRows: 213, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 182, routeMtdUnits: 315, routeMtdPending: 2 },
  { id: "austin", name: "Austin", totalUnits: 481, inactive: 58, weekly: 7228.20, monthly: 31297.68, trial: 10, collectTrial: 0, pending: 21, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 5, lostMonthUnits: 11, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 6, cancelUnits: 13, cancelAmt: 690, cancelMoved: 0, sfDayUnits: 23, sfDayRows: 6, sfMtdUnits: 311, sfMtdRows: 197, routeDayCustomers: 6, routeDayUnits: 23, routeDayWindow: '09:55 AM–03:28 PM', routeMtdCustomers: 187, routeMtdUnits: 298, routeMtdPending: 0 },
  { id: "sao-paulo", name: "Sao Paulo", totalUnits: 484, inactive: 48, weekly: 8498.15, monthly: 36796.42, trial: 3, collectTrial: 0, pending: 0, wonMonth: 4, wonWeek: 2, trialsMonth: 2, trialsWeek: 2, lostMonthDeals: 6, lostMonthUnits: 8, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 1, sfDayRows: 1, sfMtdUnits: 313, sfMtdRows: 244, routeDayCustomers: null, routeDayUnits: null, routeDayWindow: null, routeMtdCustomers: null, routeMtdUnits: null, routeMtdPending: null },
  { id: "denver", name: "Denver", totalUnits: 425, inactive: 53, weekly: 7265.43, monthly: 31460.94, trial: 11, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 11, trialsWeek: 11, lostMonthDeals: 5, lostMonthUnits: 6, lostWeekDeals: 4, lostWeekUnits: 5, cancelDeals: 1, cancelUnits: 1, cancelAmt: 60, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 376, sfMtdRows: 225, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 224, routeMtdUnits: 377, routeMtdPending: 0 },
  { id: "chicago", name: "Chicago", totalUnits: 423, inactive: 39, weekly: 6203.18, monthly: 26859.43, trial: 15, collectTrial: 0, pending: 0, wonMonth: 5, wonWeek: 0, trialsMonth: 3, trialsWeek: 2, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 376, sfMtdRows: 230, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 215, routeMtdUnits: 351, routeMtdPending: 1 },
  { id: "san-diego", name: "San Diego", totalUnits: 418, inactive: 54, weekly: 6464.54, monthly: 27990.78, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 2, cancelAmt: 140, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 370, sfMtdRows: 178, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 25, routeMtdUnits: 60, routeMtdPending: 0 },
  { id: "dallas", name: "Dallas", totalUnits: 390, inactive: 27, weekly: 6280.15, monthly: 27192.86, trial: 1, collectTrial: 0, pending: 1, wonMonth: 7, wonWeek: 3, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 10, lostWeekDeals: 3, lostWeekUnits: 3, cancelDeals: 2, cancelUnits: 2, cancelAmt: 95, cancelMoved: 1, sfDayUnits: 6, sfDayRows: 5, sfMtdUnits: 276, sfMtdRows: 193, routeDayCustomers: 6, routeDayUnits: 7, routeDayWindow: '09:24 AM–12:35 PM', routeMtdCustomers: 231, routeMtdUnits: 313, routeMtdPending: 15 },
  { id: "houston", name: "Houston", totalUnits: 386, inactive: 38, weekly: 5952.79, monthly: 25776.32, trial: 15, collectTrial: 0, pending: 25, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 3, cancelUnits: 7, cancelAmt: 380, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 161, sfMtdRows: 84, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-york", name: "New York", totalUnits: 373, inactive: 49, weekly: 5161.52, monthly: 22349.85, trial: 2, collectTrial: 0, pending: 7, wonMonth: 6, wonWeek: 1, trialsMonth: 2, trialsWeek: 2, lostMonthDeals: 7, lostMonthUnits: 22, lostWeekDeals: 2, lostWeekUnits: 7, cancelDeals: 3, cancelUnits: 3, cancelAmt: 210, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 313, sfMtdRows: 139, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 140, routeMtdUnits: 315, routeMtdPending: 0 },
  { id: "portland", name: "Portland", totalUnits: 357, inactive: 88, weekly: 4751.07, monthly: 20574.68, trial: 0, collectTrial: 0, pending: 1, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 5, cancelUnits: 8, cancelAmt: 425, cancelMoved: 4, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 238, sfMtdRows: 182, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 192, routeMtdUnits: 247, routeMtdPending: 1 },
  { id: "phoenix", name: "Phoenix", totalUnits: 325, inactive: 31, weekly: 4453.56, monthly: 19283.16, trial: 3, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 7, lostMonthUnits: 13, lostWeekDeals: 1, lostWeekUnits: 1, cancelDeals: 1, cancelUnits: 1, cancelAmt: 45, cancelMoved: 1, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 239, sfMtdRows: 131, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 135, routeMtdUnits: 244, routeMtdPending: 0 },
  { id: "fort-worth", name: "Fort Worth", totalUnits: 290, inactive: 15, weekly: 4864.87, monthly: 21064.38, trial: 5, collectTrial: 0, pending: 0, wonMonth: 7, wonWeek: 3, trialsMonth: 5, trialsWeek: 5, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 271, sfMtdRows: 170, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 169, routeMtdUnits: 268, routeMtdPending: 0 },
  { id: "fort-lauderdale", name: "Fort Lauderdale", totalUnits: 263, inactive: 4, weekly: 4816.78, monthly: 20855.54, trial: 16, collectTrial: 0, pending: 11, wonMonth: 15, wonWeek: 3, trialsMonth: 9, trialsWeek: 4, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 2, cancelUnits: 2, cancelAmt: 120, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 257, sfMtdRows: 176, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 150, routeMtdUnits: 219, routeMtdPending: 6 },
  { id: "vancouver", name: "Vancouver", totalUnits: 244, inactive: 21, weekly: 3184.63, monthly: 13789.18, trial: 2, collectTrial: 0, pending: 0, wonMonth: 2, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 1, lostMonthUnits: 1, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 0, cancelUnits: 0, cancelAmt: 0, cancelMoved: 0, sfDayUnits: 15, sfDayRows: 12, sfMtdUnits: 138, sfMtdRows: 80, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
  { id: "new-jersey", name: "New Jersey South", totalUnits: 216, inactive: 16, weekly: 3397.05, monthly: 14709.77, trial: 7, collectTrial: 0, pending: 8, wonMonth: 0, wonWeek: 0, trialsMonth: 3, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 3, cancelUnits: 5, cancelAmt: 265, cancelMoved: 1, sfDayUnits: 21, sfDayRows: 11, sfMtdUnits: 170, sfMtdRows: 94, routeDayCustomers: 11, routeDayUnits: 21, routeDayWindow: '08:40 AM–01:38 PM', routeMtdCustomers: 95, routeMtdUnits: 171, routeMtdPending: 0 },
  { id: "san-antonio", name: "San Antonio", totalUnits: 157, inactive: 7, weekly: 2573.12, monthly: 11140.66, trial: 69, collectTrial: 0, pending: 36, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 2, lostMonthUnits: 2, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 9, cancelUnits: 21, cancelAmt: 955, cancelMoved: 2, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 138, sfMtdRows: 82, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 77, routeMtdUnits: 132, routeMtdPending: 0 },
  { id: "tampa", name: "Tampa", totalUnits: 126, inactive: 5, weekly: 1513.47, monthly: 6553.36, trial: 26, collectTrial: 0, pending: 9, wonMonth: 0, wonWeek: 0, trialsMonth: 0, trialsWeek: 0, lostMonthDeals: 0, lostMonthUnits: 0, lostWeekDeals: 0, lostWeekUnits: 0, cancelDeals: 1, cancelUnits: 1, cancelAmt: 30, cancelMoved: 0, sfDayUnits: 0, sfDayRows: 0, sfMtdUnits: 0, sfMtdRows: 0, routeDayCustomers: 0, routeDayUnits: 0, routeDayWindow: null, routeMtdCustomers: 0, routeMtdUnits: 0, routeMtdPending: 0 },
];

export const VANS: VanRow[] = [

];

export const PHOTO_AUDIT: { day: string; status: "ok" | "pending"; rows: { location: string; count: number }[] } = {
  day: "Fri Oct 23",
  status: "ok",
  rows: [
    { location: "San Francisco", count: 7 },
    { location: "Dallas", count: 3 },
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
