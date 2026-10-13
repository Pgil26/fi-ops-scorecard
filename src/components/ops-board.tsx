import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Building2,
  Copy,
  Check,
  Flower2,
  Link2,
  Printer,
  Truck,
} from "lucide-react";
import {
  LOCATIONS,
  PULLED,
  VANS,
  findLocation,
  num,
  onHire,
  usd,
  type LocationRow,
  type VanRow,
} from "@/data/ops";

type Tone = "neutral" | "good" | "watch" | "bad";

function sum(rows: LocationRow[], pick: (row: LocationRow) => number) {
  return rows.reduce((total, row) => total + pick(row), 0);
}

function share(part: number, whole: number) {
  if (!whole) return "0%";
  return `${Math.round((part / whole) * 100)}%`;
}

function Meter({ value, max, tone = "ok" }: { value: number; max: number; tone?: "ok" | "hot" }) {
  const width = max > 0 ? Math.max(2, Math.round((value / max) * 100)) : 0;
  return (
    <div className="h-2 min-w-16 overflow-hidden rounded-full bg-line">
      <div
        className={tone === "hot" ? "h-full bg-watch" : "h-full bg-forest"}
        style={{ width: `${value === 0 ? 0 : width}%` }}
      />
    </div>
  );
}

function Tile({
  label,
  value,
  detail,
  tone,
}: {
  label: string;
  value: string;
  detail: string;
  tone: Tone;
}) {
  const edge =
    tone === "good"
      ? "border-t-good"
      : tone === "watch"
        ? "border-t-watch"
        : tone === "bad"
          ? "border-t-bad"
          : "border-t-forest";
  return (
    <article className={`rounded-card border border-line border-t-4 bg-card px-4 py-3 ${edge}`}>
      <p className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</p>
      <p className="mt-1 font-display text-3xl leading-none tracking-tight text-ink tabular-nums">{value}</p>
      <p className="mt-2 text-sm text-muted">{detail}</p>
    </article>
  );
}

function Panel({
  title,
  source,
  children,
}: {
  title: string;
  source: string;
  children: ReactNode;
}) {
  return (
    <section className="min-w-0 rounded-card border border-line bg-card p-4">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-lg text-ink">{title}</h3>
        <p className="text-xs text-muted">{source}</p>
      </div>
      {children}
    </section>
  );
}

function Note({ tone, title, body }: { tone: Tone; title: string; body: string }) {
  const cls =
    tone === "good"
      ? "bg-good-bg text-good"
      : tone === "watch"
        ? "bg-watch-bg text-watch"
        : tone === "bad"
          ? "bg-bad-bg text-bad"
          : "bg-paper text-ink";
  return (
    <article className={`rounded-card px-4 py-3 ${cls}`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-pretty">{body}</p>
    </article>
  );
}

function ChartTip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Array<{ value?: number; name?: string }>;
  label?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-line bg-card px-3 py-2 text-sm shadow-sm">
      <p className="font-semibold text-ink">{label}</p>
      <p className="tabular-nums text-muted">{num.format(payload[0]?.value ?? 0)}</p>
    </div>
  );
}

function HireChart({ rows }: { rows: LocationRow[] }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const data = [...rows]
    .map((row) => ({ name: row.name, units: onHire(row) }))
    .sort((a, b) => b.units - a.units);
  if (!ready) return <div className="h-80" />;
  return (
    <div className="w-full" style={{ height: "36rem" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16, top: 4, bottom: 4 }}>
          <XAxis type="number" hide />
          <YAxis
            type="category"
            dataKey="name"
            width={112}
            tick={{ fill: "var(--color-ink)", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<ChartTip />} cursor={{ fill: "var(--color-paper)" }} />
          <Bar dataKey="units" fill="var(--color-forest)" radius={[0, 4, 4, 0]} barSize={12} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function VanSpan({ van }: { van: VanRow }) {
  return (
    <div className="relative h-2.5 min-w-28 rounded-full bg-line">
      {van.width > 0 ? (
        <span
          className={van.flag === "ok" ? "absolute top-0 h-full rounded-full bg-forest-2" : "absolute top-0 h-full rounded-full bg-watch"}
          style={{ left: `${van.left}%`, width: `${Math.max(van.width, 3)}%` }}
        />
      ) : null}
    </div>
  );
}

function locationNotes(row: LocationRow, companyHire: number, vans: VanRow[]) {
  const hire = onHire(row);
  const notes: Array<{ tone: Tone; title: string; body: string }> = [
    {
      tone: "neutral",
      title: `${num.format(hire)} units on hire`,
      body: `${share(hire, companyHire)} of the company book. ${num.format(row.inactive)} units are inactive on won deals. Booked weekly rate ${usd.format(row.weekly)}.`,
    },
  ];
  if (row.trial + row.collectTrial > 40) {
    notes.push({
      tone: "watch",
      title: "Open trials are heavy here",
      body: `${num.format(row.trial)} in Trial and ${num.format(row.collectTrial)} in Collect Trial or Pending. Pending stock is ${num.format(row.pending)}.`,
    });
  } else {
    notes.push({
      tone: "good",
      title: "Pipeline",
      body: `${num.format(row.trial)} open trials, ${num.format(row.collectTrial)} collect-trial, ${num.format(row.pending)} pending. New trials this month: ${num.format(row.trialsMonth)} (${num.format(row.trialsWeek)} this week).`,
    });
  }
  if (row.routeDayUnits == null && row.routeMtdUnits == null) {
    notes.push({
      tone: "watch",
      title: "RouteMap pending",
      body: PULLED.routeStatus,
    });
  } else if (row.routeDayUnits == null) {
    notes.push({
      tone: "watch",
      title: "RouteMap pending",
      body: PULLED.routeStatus,
    });
  }
  if (row.lostWeekDeals > 0 || row.cancelMoved > 0) {
    notes.push({
      tone: "bad",
      title: "Losses and cancels",
      body: `${num.format(row.lostWeekDeals)} opportunities lost this week (${num.format(row.lostMonthDeals)} in October). ${num.format(row.cancelDeals)} deals sit in Collect/Cancel (${usd.format(row.cancelAmt)}). ${num.format(row.cancelMoved)} of those changed stage in October and are still there.`,
    });
  }
  if (!vans.length) {
    notes.push({
      tone: "neutral",
      title: "No named van",
      body: "Geotab’s Monday Oct 12 export does not tag a van to this location. Unassigned vans are listed on the company view.",
    });
  }
  return notes.slice(0, 4);
}

function companyNotes(rows: LocationRow[]) {
  const hire = sum(rows, onHire);
  const trials = sum(rows, (row) => row.trial + row.collectTrial);
  const wonWeek = sum(rows, (row) => row.wonWeek);
  const fl = rows.find((row) => row.id === "fort-lauderdale");
  const oc = rows.find((row) => row.id === "orange-county");
  const sf = rows.find((row) => row.id === "san-francisco");
  return [
    {
      tone: "good" as Tone,
      title: "Monday win was New York",
      body: `${num.format(wonWeek)} closed-won unit this week (New York), by product start date. Fort Lauderdale leads October with ${num.format(fl?.wonMonth ?? 0)}.`,
    },
    {
      tone: "watch" as Tone,
      title: "The open book is two cities",
      body: `Orange County holds ${num.format((oc?.trial ?? 0) + (oc?.collectTrial ?? 0))} open trials and San Francisco ${num.format((sf?.trial ?? 0) + (sf?.collectTrial ?? 0))}. Together that is more than half of ${num.format(trials)}. New trials this week are New York (2) and Chicago (1), not those two.`,
    },
    {
      tone: "watch" as Tone,
      title: "RouteMap pending",
      body: PULLED.routeStatus,
    },
    {
      tone: "bad" as Tone,
      title: "Three vans short or idle Monday",
      body: `Monday fleet: ${VANS.filter((v) => v.trips > 0).length} of ${VANS.length} vans, ${num.format(VANS.reduce((t, v) => t + v.trips, 0))} trips, ${num.format(Math.round(VANS.reduce((t, v) => t + v.miles, 0)))} miles. Soraya in Fort Lauderdale ran 49 minutes and 2 miles. LA/OC ran 1h 28m. Phoenix van logged no trips. Book is ${num.format(hire)} units on hire.`,
    },
  ];
}

export function OpsBoard() {
  const search = useSearch({ from: "/" });
  const navigate = useNavigate({ from: "/" });
  const selected = findLocation(search.loc);
  const [copied, setCopied] = useState(false);
  const [sort, setSort] = useState<"hire" | "route" | "trials" | "won">("hire");

  const companyHire = sum(LOCATIONS, onHire);
  const rows = selected ? [selected] : LOCATIONS;
  const vans = selected ? VANS.filter((van) => van.locationId === selected.id) : VANS;

  const totals = useMemo(
    () => ({
      hire: sum(rows, onHire),
      inactive: sum(rows, (row) => row.inactive),
      weekly: sum(rows, (row) => row.weekly),
      trial: sum(rows, (row) => row.trial),
      collectTrial: sum(rows, (row) => row.collectTrial),
      pending: sum(rows, (row) => row.pending),
      wonMonth: sum(rows, (row) => row.wonMonth),
      wonWeek: sum(rows, (row) => row.wonWeek),
      trialsMonth: sum(rows, (row) => row.trialsMonth),
      trialsWeek: sum(rows, (row) => row.trialsWeek),
      lostMonth: sum(rows, (row) => row.lostMonthDeals),
      lostWeek: sum(rows, (row) => row.lostWeekDeals),
      lostMonthUnits: sum(rows, (row) => row.lostMonthUnits),
      cancelDeals: sum(rows, (row) => row.cancelDeals),
      cancelAmt: sum(rows, (row) => row.cancelAmt),
      sfDayUnits: sum(rows, (row) => row.sfDayUnits),
      sfDayRows: sum(rows, (row) => row.sfDayRows),
      sfMtdUnits: sum(rows, (row) => row.sfMtdUnits),
      routeDayCustomers: sum(rows, (row) => row.routeDayCustomers ?? 0),
      routeDayUnits: sum(rows, (row) => row.routeDayUnits ?? 0),
      routeMtdCustomers: sum(rows, (row) => row.routeMtdCustomers ?? 0),
      routeMtdUnits: sum(rows, (row) => row.routeMtdUnits ?? 0),
      routePending: sum(rows, (row) => row.routeMtdPending ?? 0),
      routeDayLocations: rows.filter((row) => row.routeDayUnits != null).length,
    }),
    [rows],
  );

  const ranked = useMemo(() => {
    const copy = [...LOCATIONS];
    copy.sort((a, b) => {
      if (sort === "route") return (b.routeMtdUnits ?? -1) - (a.routeMtdUnits ?? -1);
      if (sort === "trials") return b.trial + b.collectTrial - (a.trial + a.collectTrial);
      if (sort === "won") return b.wonMonth - a.wonMonth || b.wonWeek - a.wonWeek;
      return onHire(b) - onHire(a);
    });
    return copy;
  }, [sort]);

  const maxHire = Math.max(...LOCATIONS.map(onHire));
  const notes = selected ? locationNotes(selected, companyHire, vans) : companyNotes(LOCATIONS);
  const vanMiles = vans.reduce((total, van) => total + van.miles, 0);
  const vanTrips = vans.reduce((total, van) => total + van.trips, 0);
  const vansOut = vans.filter((van) => van.trips > 0).length;

  function setLocation(id: string | null) {
    void navigate({
      search: id ? { loc: id } : {},
      replace: false,
    });
  }

  async function copyLink() {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  const scope = selected ? selected.name : "All locations";

  return (
    <main className="mx-auto w-full max-w-6xl overflow-x-clip px-4 pt-6 pb-16 sm:px-6">
      <header className="flex flex-col gap-4 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold tracking-widest text-gold uppercase">
            <Flower2 className="size-4" aria-hidden="true" />
            Floral Image · FI Ops
          </p>
          <h1 className="mt-1 font-display text-4xl tracking-tight text-ink">Executive board</h1>
          <p className="mt-2 max-w-xl text-sm text-pretty text-muted">
            October totals and the previous route day. Numbers are in the page, so this link
            does not need Salesforce, RouteMap, Geotab, or a Grok login.
          </p>
        </div>
        <div className="text-sm text-muted sm:text-right">
          <p className="font-semibold text-ink">{PULLED.sales}</p>
          <p>Sales week {PULLED.weekLabel}</p>
          <p>Route day {PULLED.routeDay} · Geotab {PULLED.geotabDay}</p>
        </div>
      </header>

      <div className="no-print sticky top-0 z-10 -mx-4 mt-4 border-b border-line bg-paper/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="flex min-w-0 flex-1 flex-col gap-1 text-xs font-semibold tracking-wide text-muted uppercase">
            Location
            <select
              className="h-11 rounded-lg border border-line bg-card px-3 text-base font-medium tracking-normal text-ink normal-case"
              value={selected?.id ?? ""}
              onChange={(event) => setLocation(event.target.value || null)}
            >
              <option value="">All locations</option>
              {LOCATIONS.map((row) => (
                <option key={row.id} value={row.id}>
                  {row.name}
                </option>
              ))}
            </select>
          </label>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => void copyLink()}
              className="inline-flex h-11 items-center gap-2 rounded-lg bg-forest px-4 text-sm font-semibold text-card"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "Link copied" : "Copy this view"}
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-line bg-card px-4 text-sm font-semibold text-ink"
            >
              <Printer className="size-4" />
              Print
            </button>
          </div>
        </div>
      </div>

      <p className="mt-5 rounded-card bg-forest px-4 py-4 text-base leading-relaxed text-card">
        <span className="font-semibold">{scope}.</span>{" "}
        {num.format(totals.hire)} units on hire
        {selected ? ` (${share(totals.hire, companyHire)} of the company)` : " across 21 locations"}.
        RouteMap: {PULLED.routeStatus}. Monday Salesforce
        refreshes: {num.format(totals.sfDayRows)} logs, {num.format(totals.sfDayUnits)} units. Open trials{" "}
        {num.format(totals.trial + totals.collectTrial)}.
      </p>

      <section className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Tile label="Units on hire" value={num.format(totals.hire)} detail={`${num.format(totals.inactive)} inactive on won deals`} tone="neutral" />
        <Tile label="Closed won" value={num.format(totals.wonWeek)} detail={`${num.format(totals.wonMonth)} units in October · start date`} tone="good" />
        <Tile label="Open trials" value={num.format(totals.trial + totals.collectTrial)} detail={`${num.format(totals.trial)} trial · ${num.format(totals.collectTrial)} collect trial`} tone="good" />
        <Tile
          label="At risk"
          value={num.format(totals.lostWeek + totals.cancelDeals)}
          detail={`${num.format(totals.lostWeek)} lost this week · ${num.format(totals.cancelDeals)} collect/cancel stock`}
          tone={totals.lostWeek + totals.cancelDeals > 0 ? "bad" : "neutral"}
        />
        <Tile
          label="RouteMap Mon Oct 12"
          value="Pending"
          detail={PULLED.routeStatus}
          tone="neutral"
        />
        <Tile
          label="Salesforce Monday"
          value={num.format(totals.sfDayUnits)}
          detail={`${num.format(totals.sfDayRows)} refresh logs · previous calendar day`}
          tone="neutral"
        />
        <Tile
          label="October RouteMap"
          value="Pending"
          detail="customers / units not available until the Oct 12 export"
          tone="neutral"
        />
        <Tile
          label={selected ? "Vans tagged here" : "Vans out"}
          value={selected ? `${vansOut}/${vans.length || 0}` : `${vansOut}/${VANS.length}`}
          detail={`${num.format(vanTrips)} trips · ${vanMiles.toFixed(1)} miles`}
          tone={vans.some((van) => van.flag !== "ok") ? "watch" : "neutral"}
        />
      </section>

      <h2 className="mt-8 text-xs font-semibold tracking-widest text-muted uppercase">Read these first</h2>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {notes.map((note) => (
          <Note key={note.title} {...note} />
        ))}
      </div>

      <h2 className="mt-8 text-xs font-semibold tracking-widest text-muted uppercase">
        This month · {PULLED.monthLabel}
      </h2>
      <div className="mt-3 grid min-w-0 gap-3 lg:grid-cols-5">
        <div className="min-w-0 lg:col-span-2">
          <Panel title="Units on hire" source="Salesforce · live Tuesday morning">
            {selected ? (
              <div className="space-y-3 text-sm">
                <p className="font-display text-4xl tabular-nums text-ink">{num.format(onHire(selected))}</p>
                <p className="text-muted">
                  {num.format(selected.totalUnits)} won units minus {num.format(selected.inactive)} inactive.
                  Weekly rate {usd.format(selected.weekly)}. Monthly rate {usd.format(selected.monthly)}.
                </p>
                <p className="text-muted">
                  Closed won by start date: {num.format(selected.wonWeek)} this week, {num.format(selected.wonMonth)} in October.
                  New trials: {num.format(selected.trialsWeek)} this week, {num.format(selected.trialsMonth)} in October.
                </p>
              </div>
            ) : (
              <HireChart rows={LOCATIONS} />
            )}
          </Panel>
        </div>
        <div className="min-w-0 lg:col-span-3">
          <Panel title="October field work and sales" source="RouteMap pending · Salesforce through Mon">
            <div className="overflow-x-auto">
              <table className="w-full min-w-xl text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-xs tracking-wide text-muted uppercase">
                    <th className="py-2 pr-3 font-semibold">Location</th>
                    <th className="py-2 pr-3 text-right font-semibold">Route customers</th>
                    <th className="py-2 pr-3 text-right font-semibold">Route units</th>
                    <th className="py-2 pr-3 text-right font-semibold">Pending</th>
                    <th className="py-2 pr-3 text-right font-semibold">SF refresh units</th>
                    <th className="py-2 text-right font-semibold">Won units</th>
                  </tr>
                </thead>
                <tbody>
                  {(selected ? [selected] : [...LOCATIONS].sort((a, b) => (b.routeMtdUnits ?? -1) - (a.routeMtdUnits ?? -1))).map(
                    (row) => (
                      <tr key={row.id} className="border-b border-line/70">
                        <td className="py-2 pr-3">
                          <button type="button" className="font-medium text-forest underline-offset-2 hover:underline" onClick={() => setLocation(row.id)}>
                            {row.name}
                          </button>
                          {row.routeName ? <span className="ml-1 text-xs text-muted">RouteMap: {row.routeName}</span> : null}
                        </td>
                        <td className="py-2 pr-3 text-right tabular-nums">{row.routeMtdCustomers == null ? "—" : num.format(row.routeMtdCustomers)}</td>
                        <td className="py-2 pr-3 text-right tabular-nums">{row.routeMtdUnits == null ? "—" : num.format(row.routeMtdUnits)}</td>
                        <td className={`py-2 pr-3 text-right tabular-nums ${row.routeMtdPending ? "font-semibold text-watch" : ""}`}>
                          {row.routeMtdPending == null ? "—" : num.format(row.routeMtdPending)}
                        </td>
                        <td className="py-2 pr-3 text-right tabular-nums">{num.format(row.sfMtdUnits)}</td>
                        <td className="py-2 text-right tabular-nums">{num.format(row.wonMonth)}</td>
                      </tr>
                    ),
                  )}
                  <tr className="font-semibold">
                    <td className="py-2 pr-3">Total shown</td>
                    <td className="py-2 pr-3 text-right tabular-nums">—</td>
                    <td className="py-2 pr-3 text-right tabular-nums">—</td>
                    <td className="py-2 pr-3 text-right tabular-nums">—</td>
                    <td className="py-2 pr-3 text-right tabular-nums">{num.format(totals.sfMtdUnits)}</td>
                    <td className="py-2 text-right tabular-nums">{num.format(totals.wonMonth)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted">
              RouteMap units and Salesforce refresh units are different systems. Do not add them.
              RouteMap is the Daily Changeover (customers / units). Salesforce is Product Refresh logs, Oct 1–12.
              Closed won uses product start date.
            </p>
          </Panel>
        </div>
      </div>

      <h2 className="mt-8 text-xs font-semibold tracking-widest text-muted uppercase">Previous days</h2>
      <p className="mt-2 text-sm text-muted">
        RouteMap: {PULLED.routeStatus}. Geotab and Salesforce cover Monday Oct 12.
      </p>
      <div className="mt-3 grid min-w-0 gap-3 lg:grid-cols-2">
        <Panel title={`RouteMap · ${PULLED.routeDay}`} source={`Pulled ${PULLED.routePulled}`}>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs tracking-wide text-muted uppercase">
                  <th className="py-2 pr-2 font-semibold">Location</th>
                  <th className="py-2 pr-2 text-right font-semibold">Customers</th>
                  <th className="py-2 pr-2 text-right font-semibold">Units</th>
                  <th className="py-2 font-semibold">Window</th>
                </tr>
              </thead>
              <tbody>
                {rows
                  .filter((row) => row.routeDayUnits != null)
                  .sort((a, b) => (b.routeDayUnits ?? 0) - (a.routeDayUnits ?? 0))
                  .map((row) => (
                    <tr key={row.id} className="border-b border-line/70">
                      <td className="py-2 pr-2">{row.routeName ?? row.name}</td>
                      <td className="py-2 pr-2 text-right tabular-nums">{num.format(row.routeDayCustomers ?? 0)}</td>
                      <td className="py-2 pr-2 text-right tabular-nums">{num.format(row.routeDayUnits ?? 0)}</td>
                      <td className="py-2 text-muted">{row.routeDayWindow}</td>
                    </tr>
                  ))}
                {rows.every((row) => row.routeDayUnits == null) ? (
                  <tr>
                    <td colSpan={4} className="py-3 text-muted">
                      {PULLED.routeStatus}
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </Panel>
        <Panel title={`Salesforce refreshes · ${PULLED.sfRefreshDay}`} source="Product Refresh · Monday">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs tracking-wide text-muted uppercase">
                  <th className="py-2 pr-2 font-semibold">Location</th>
                  <th className="py-2 pr-2 text-right font-semibold">Logs</th>
                  <th className="py-2 text-right font-semibold">Units</th>
                </tr>
              </thead>
              <tbody>
                {rows
                  .filter((row) => row.sfDayUnits > 0)
                  .sort((a, b) => b.sfDayUnits - a.sfDayUnits)
                  .map((row) => (
                    <tr key={row.id} className="border-b border-line/70">
                      <td className="py-2 pr-2">{row.name}</td>
                      <td className="py-2 pr-2 text-right tabular-nums">{num.format(row.sfDayRows)}</td>
                      <td className="py-2 text-right tabular-nums">{num.format(row.sfDayUnits)}</td>
                    </tr>
                  ))}
                {rows.every((row) => row.sfDayUnits === 0) ? (
                  <tr>
                    <td colSpan={3} className="py-3 text-muted">
                      No Salesforce refresh log on Monday for this location.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>

      <div className="mt-3">
        <Panel title={`Geotab vans · ${PULLED.geotabDay}`} source={`Advanced detailed trips · ${PULLED.geotabPulled}`}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-2xl text-left text-sm">
              <thead>
                <tr className="border-b border-line text-xs tracking-wide text-muted uppercase">
                  <th className="py-2 pr-2 font-semibold">Van</th>
                  <th className="py-2 pr-2 font-semibold">Zone</th>
                  <th className="py-2 pr-2 font-semibold">Start</th>
                  <th className="py-2 pr-2 font-semibold">Stop</th>
                  <th className="py-2 pr-2 font-semibold">On the road</th>
                  <th className="py-2 pr-2 text-right font-semibold">Trips</th>
                  <th className="py-2 pr-2 text-right font-semibold">Miles</th>
                  <th className="py-2 font-semibold">6 AM–9 PM</th>
                </tr>
              </thead>
              <tbody>
                {vans.map((van) => (
                  <tr key={van.id} className="border-b border-line/70">
                    <td className="py-2 pr-2 font-medium">
                      {van.name}
                      <span className="mt-0.5 block text-xs font-normal text-muted">
                        {van.locationId ? findLocation(van.locationId)?.name : "Location not on the export"}
                      </span>
                    </td>
                    <td className="py-2 pr-2">{van.zone}</td>
                    <td className="py-2 pr-2 tabular-nums">{van.start}</td>
                    <td className="py-2 pr-2 tabular-nums">{van.stop}</td>
                    <td className="py-2 pr-2">
                      {van.flag === "none" ? (
                        <span className="rounded-full bg-bad-bg px-2 py-0.5 text-xs font-semibold text-bad">No trips</span>
                      ) : van.flag === "short" ? (
                        <span className="text-watch">{van.onRoad}</span>
                      ) : (
                        van.onRoad
                      )}
                    </td>
                    <td className="py-2 pr-2 text-right tabular-nums">{van.trips}</td>
                    <td className="py-2 pr-2 text-right tabular-nums">{van.miles.toFixed(1)}</td>
                    <td className="py-2"><VanSpan van={van} /></td>
                  </tr>
                ))}
                {!vans.length ? (
                  <tr>
                    <td colSpan={8} className="py-3 text-muted">
                      No van in the Monday export is tagged to this location.
                    </td>
                  </tr>
                ) : null}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted">
            On the road is first trip start to last trip stop, in the van’s local time, not driving duration.
            Only vans whose name includes the city are tied to a location. Val, JD, Irving, Yolanda, and Gabby stay unassigned.
          </p>
        </Panel>
      </div>

      <h2 className="mt-8 flex items-center gap-2 text-xs font-semibold tracking-widest text-muted uppercase">
        <Building2 className="size-3.5" aria-hidden="true" />
        Every location
      </h2>
      <div className="no-print mt-3 flex flex-wrap gap-2">
        {(
          [
            ["hire", "On hire"],
            ["route", "October RouteMap"],
            ["trials", "Open trials"],
            ["won", "Won this month"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setSort(key)}
            className={
              sort === key
                ? "h-10 rounded-full bg-forest px-4 text-sm font-semibold text-card"
                : "h-10 rounded-full border border-line bg-card px-4 text-sm font-semibold text-ink"
            }
          >
            {label}
          </button>
        ))}
      </div>
      <div className="mt-3 min-w-0 overflow-x-auto rounded-card border border-line bg-card">
        <table className="w-full min-w-3xl text-left text-sm">
          <thead>
            <tr className="border-b border-line text-xs tracking-wide text-muted uppercase">
              <th className="px-3 py-3 font-semibold">Location</th>
              <th className="px-3 py-3 text-right font-semibold">On hire</th>
              <th className="px-3 py-3 font-semibold">Share</th>
              <th className="px-3 py-3 text-right font-semibold">Trials</th>
              <th className="px-3 py-3 text-right font-semibold">Pending</th>
              <th className="px-3 py-3 text-right font-semibold">Won mo</th>
              <th className="px-3 py-3 text-right font-semibold">Lost mo</th>
              <th className="px-3 py-3 text-right font-semibold">Mon route units</th>
              <th className="px-3 py-3 text-right font-semibold">Oct route</th>
            </tr>
          </thead>
          <tbody>
            {ranked.map((row) => {
              const active = selected?.id === row.id;
              return (
                <tr
                  key={row.id}
                  className={active ? "bg-paper" : "border-b border-line/70"}
                >
                  <td className="px-3 py-2.5">
                    <button
                      type="button"
                      onClick={() => setLocation(active ? null : row.id)}
                      className="text-left font-medium text-ink underline-offset-2 hover:underline"
                    >
                      {row.name}
                    </button>
                  </td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{num.format(onHire(row))}</td>
                  <td className="px-3 py-2.5"><Meter value={onHire(row)} max={maxHire} /></td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{num.format(row.trial + row.collectTrial)}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{num.format(row.pending)}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{num.format(row.wonMonth)}</td>
                  <td className={`px-3 py-2.5 text-right tabular-nums ${row.lostMonthDeals ? "text-bad" : ""}`}>
                    {num.format(row.lostMonthDeals)}
                  </td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{row.routeDayUnits == null ? "—" : num.format(row.routeDayUnits)}</td>
                  <td className="px-3 py-2.5 text-right tabular-nums">{row.routeMtdUnits == null ? "—" : num.format(row.routeMtdUnits)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selected ? (
        <section className="mt-4 grid gap-3 sm:grid-cols-3">
          <article className="rounded-card border border-line bg-card p-4">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-muted uppercase">
              <Building2 className="size-3.5" /> Salesforce
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Open trials {num.format(selected.trial + selected.collectTrial)}</li>
              <li>Lead pending {num.format(selected.pending)}</li>
              <li>Collect/cancel stock {num.format(selected.cancelDeals)} · {usd.format(selected.cancelAmt)}</li>
              <li>Lost in October {num.format(selected.lostMonthDeals)} deals · {num.format(selected.lostMonthUnits)} units</li>
            </ul>
          </article>
          <article className="rounded-card border border-line bg-card p-4">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-muted uppercase">
              <Link2 className="size-3.5" /> RouteMap
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                Mon Oct 12 {selected.routeDayCustomers == null ? "pending" : `${num.format(selected.routeDayCustomers)} customers / ${num.format(selected.routeDayUnits ?? 0)} units`}
              </li>
              <li>
                October {selected.routeMtdCustomers == null ? "pending" : `${num.format(selected.routeMtdCustomers)} customers / ${num.format(selected.routeMtdUnits ?? 0)} units`}
              </li>
              <li>Pending {selected.routeMtdPending == null ? "—" : num.format(selected.routeMtdPending)}</li>
            </ul>
          </article>
          <article className="rounded-card border border-line bg-card p-4">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-wide text-muted uppercase">
              <Truck className="size-3.5" /> Geotab
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              {vans.length ? (
                vans.map((van) => (
                  <li key={van.id}>
                    {van.name}: {van.flag === "none" ? "no trips" : `${van.onRoad}, ${van.miles.toFixed(1)} mi, ${van.trips} trips`}
                  </li>
                ))
              ) : (
                <li>No van tagged to {selected.name} on Monday.</li>
              )}
            </ul>
          </article>
        </section>
      ) : null}

      <footer className="mt-8 border-t border-line pt-4 text-xs leading-relaxed text-muted">
        <p>
          <span className="font-semibold text-ink">How to share.</span> Publish this board and send the link.
          Pick a location, then Copy this view — the link opens on that city. Printing makes a packet.
          Viewers do not need Grok.
        </p>
        <p className="mt-2">
          Salesforce pull {PULLED.sales}. Units on hire = Closed Won total units minus inactive units
          ({num.format(companyHire)} active). Closed won counts product start date in {PULLED.monthLabel}, not close date
          ({num.format(sum(LOCATIONS, (row) => row.wonMonth))} units; {num.format(sum(LOCATIONS, (row) => row.wonWeek))} this week).
          Open trials = Lead status Trial ({num.format(sum(LOCATIONS, (row) => row.trial))}) plus Collect Trial or Pending
          ({num.format(sum(LOCATIONS, (row) => row.collectTrial))}). Pending is Pending through Pending 5
          ({num.format(sum(LOCATIONS, (row) => row.pending))}). Lost opportunities use Lost Date. Collect/cancel stock is current stage,
          {usd.format(sum(LOCATIONS, (row) => row.cancelAmt))} across {num.format(sum(LOCATIONS, (row) => row.cancelDeals))} deals.
          Weekly and monthly rates are the won-book currency fields, including inactive units, summed in org currency.
        </p>
        <p className="mt-2">
          RouteMap Daily Changeover: {PULLED.routeStatus}. RouteMap pairs are customers / units.
          Geotab advanced detailed trips, {PULLED.geotabPulled}, Monday Oct 12 only. Salesforce Product Refresh for Monday is a
          separate log from RouteMap — {num.format(sum(LOCATIONS, (row) => row.sfDayUnits))} units on {num.format(sum(LOCATIONS, (row) => row.sfDayRows))} logs.
          October Salesforce refresh logs: {num.format(sum(LOCATIONS, (row) => row.sfMtdUnits))} units.
        </p>
      </footer>
    </main>
  );
}
