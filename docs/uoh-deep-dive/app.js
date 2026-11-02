(function () {
  "use strict";

  var data = window.UOH;
  if (!data) return;

  var SERIES = [
    { key: "avgPerUnit", label: "All sizes", color: "#1c1915" },
    { key: "small", label: "Small", color: "#1f6b45" },
    { key: "medium", label: "Medium", color: "#8c4e32" },
    { key: "large", label: "Large", color: "#2c4f78" },
  ];

  var currency = "USD";
  var hidden = {};

  function el(tag, attrs) {
    var node = document.createElement(tag);
    var children = Array.prototype.slice.call(arguments, 2);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        var value = attrs[key];
        if (value == null || value === false) return;
        if (key === "class") node.className = value;
        else if (key === "text") node.textContent = value;
        else node.setAttribute(key, value);
      });
    }
    children.forEach(function (child) {
      if (child == null || child === false) return;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function fmtInt(n) {
    return Math.round(n).toLocaleString("en-US");
  }

  function money(n, cur) {
    var body = Number(n).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return cur === "CAD" ? "C$" + body : "$" + body;
  }

  function mountTable(host, table) {
    host.replaceChildren(el("div", { class: "scroller" }, table));
  }

  function sortRows(rows, key, kind, dir) {
    return rows.slice().sort(function (a, b) {
      var av = a[key];
      var bv = b[key];
      var cmp = kind === "num" ? av - bv : String(av).localeCompare(String(bv));
      if (cmp === 0) cmp = String(a.name).localeCompare(String(b.name));
      return dir === "asc" ? cmp : -cmp;
    });
  }

  function buildSortable(options) {
    var state = { key: options.defaultKey, dir: options.defaultDir };
    var table = el("table");
    table.appendChild(el("caption", { text: options.caption }));
    var thead = el("thead");
    var headRow = el("tr");
    options.columns.forEach(function (col) {
      var th = el("th", {
        class: (col.align === "left" ? "left" : "num") + (col.sticky ? " sticky-col" : ""),
        scope: "col",
      });
      var btn = el("button", { type: "button", class: "sort-btn" });
      btn.appendChild(document.createTextNode(col.label));
      btn.appendChild(el("span", { class: "mark", "aria-hidden": "true" }));
      btn.addEventListener("click", function () {
        if (state.key === col.key) state.dir = state.dir === "asc" ? "desc" : "asc";
        else {
          state.key = col.key;
          state.dir = col.kind === "num" ? "desc" : "asc";
        }
        draw();
      });
      th.appendChild(btn);
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);
    var tbody = el("tbody");
    table.appendChild(tbody);
    if (options.foot) table.appendChild(options.foot);

    function draw() {
      options.columns.forEach(function (col, i) {
        var th = headRow.children[i];
        var on = state.key === col.key;
        if (on) th.setAttribute("aria-sort", state.dir === "asc" ? "ascending" : "descending");
        else th.removeAttribute("aria-sort");
        th.querySelector(".sort-btn").setAttribute(
          "aria-label",
          "Sort by " + col.label + (on ? (state.dir === "asc" ? ", ascending" : ", descending") : ""),
        );
      });
      var sorted = sortRows(options.rows, state.key, columnKind(options.columns, state.key), state.dir);
      tbody.replaceChildren.apply(
        tbody,
        sorted.map(function (row) {
          return options.render(row);
        }),
      );
    }
    draw();
    return table;
  }

  function columnKind(columns, key) {
    for (var i = 0; i < columns.length; i++) if (columns[i].key === key) return columns[i].kind;
    return "text";
  }

  function nameCell(row) {
    var td = el("td", { class: "left sticky-col" });
    td.appendChild(document.createTextNode(row.name));
    if (row.resetStart) {
      td.appendChild(
        el("span", {
          class: "reset",
          title: "Start dates appear reset, so tenure is not comparable with other cities",
          text: "Reset",
        }),
      );
    }
    return td;
  }

  function renderLocations() {
    var columns = [
      { key: "name", label: "Location", align: "left", kind: "text", sticky: true },
      { key: "units", label: "Units", kind: "num" },
      { key: "accounts", label: "Accounts", kind: "num" },
      { key: "avgPerAccount", label: "Avg monthly / account", kind: "num" },
      { key: "tenure", label: "Avg tenure", kind: "num" },
      { key: "currency", label: "Currency", align: "left", kind: "text" },
    ];
    var h = data.headlines;
    var foot = el("tfoot");
    [
      ["USD locations", h.usd.units, h.usd.accounts, money(h.usd.avgPerAccount, "USD"), h.usd.tenure.toFixed(1) + " mo", "USD"],
      ["CAD locations", h.cad.units, h.cad.accounts, money(h.cad.avgPerAccount, "CAD"), h.cad.tenure.toFixed(1) + " mo", "CAD"],
      ["All locations", h.units, h.accounts, "—", h.tenureMonths.toFixed(1) + " mo", "Mixed"],
    ].forEach(function (cells) {
      var tr = el("tr");
      cells.forEach(function (value, i) {
        tr.appendChild(el("td", { class: i === 0 || i === 5 ? "left sticky-col" : "", text: String(i === 1 || i === 2 ? fmtInt(value) : value) }));
      });
      foot.appendChild(tr);
    });
    // sticky class only on the first cell; fix the last currency cell
    Array.prototype.forEach.call(foot.querySelectorAll("tr"), function (tr) {
      tr.children[0].className = "left sticky-col";
      tr.children[5].className = "left";
    });

    var table = buildSortable({
      caption: "Units on hire, active accounts, average monthly price per account, and average tenure by location. Dollar averages in the footer are the currency totals, not an average of the city averages. USD and CAD are not converted.",
      columns: columns,
      rows: data.locations,
      defaultKey: "units",
      defaultDir: "desc",
      foot: foot,
      render: function (row) {
        var price = el("td", { text: money(row.avgPerAccount, row.currency) });
        price.title =
          "Monthly total " +
          money(row.monthly, row.currency) +
          " · " +
          row.avgUnits.toFixed(2) +
          " units per account";
        return el(
          "tr",
          null,
          nameCell(row),
          el("td", { text: fmtInt(row.units) }),
          el("td", { text: fmtInt(row.accounts) }),
          price,
          el("td", { text: row.tenure.toFixed(1) + " mo" }),
          el("td", { class: "left", text: row.currency }),
        );
      },
    });
    mountTable(document.getElementById("location-table"), table);
  }

  function priceStack(price, units, cur) {
    var td = el("td");
    if (price == null) {
      td.textContent = "—";
      return td;
    }
    td.appendChild(document.createTextNode(money(price, cur)));
    td.appendChild(el("span", { class: "sub", text: fmtInt(units) + " units" }));
    return td;
  }

  function renderSize() {
    var host = document.getElementById("size-summary");
    var max = 70;
    ["USD", "CAD"].forEach(function (cur) {
      var overall = data.sizeOverall[cur];
      var card = el("article", { class: "size-card" + (cur === "CAD" ? " cad" : "") });
      card.appendChild(el("h3", { text: cur + " · price per unit" }));
      var bars = el("div", { class: "bars" });
      [
        ["Small", overall.small, overall.unitsSmall],
        ["Medium", overall.medium, overall.unitsMedium],
        ["Large", overall.large, overall.unitsLarge],
      ].forEach(function (item) {
        var width = Math.max(4, Math.round((item[1] / max) * 100));
        bars.appendChild(
          el(
            "div",
            { class: "bar-row" },
            el("span", { class: "bar-name", text: item[0] }),
            el("span", { class: "track" }, el("span", { style: "width:" + width + "%" })),
            el("span", { class: "bar-val", text: money(item[1], cur) + " · " + fmtInt(item[2]) }),
          ),
        );
      });
      card.appendChild(bars);
      host.appendChild(card);
    });

    var rows = data.sizeByLocation.map(function (row) {
      return Object.assign({}, row, {
        totalUnits: row.unitsSmall + row.unitsMedium + row.unitsLarge + row.unitsOther,
      });
    });
    var columns = [
      { key: "name", label: "Location", align: "left", kind: "text", sticky: true },
      { key: "currency", label: "Currency", align: "left", kind: "text" },
      { key: "small", label: "Small", kind: "num" },
      { key: "medium", label: "Medium", kind: "num" },
      { key: "large", label: "Large", kind: "num" },
    ];
    var table = buildSortable({
      caption: "Average price per unit by size and location. The smaller line under each price is the unit count. Sort uses the price.",
      columns: columns,
      rows: rows,
      defaultKey: "name",
      defaultDir: "asc",
      render: function (row) {
        var loc = data.locations.filter(function (item) { return item.name === row.name; })[0];
        return el(
          "tr",
          null,
          nameCell(Object.assign({ resetStart: loc && loc.resetStart }, row)),
          el("td", { class: "left", text: row.currency }),
          priceStack(row.small, row.unitsSmall, row.currency),
          priceStack(row.medium, row.unitsMedium, row.currency),
          priceStack(row.large, row.unitsLarge, row.currency),
        );
      },
    });
    mountTable(document.getElementById("size-table"), table);
  }

  function renderLegend() {
    var host = document.getElementById("legend");
    host.replaceChildren.apply(
      host,
      SERIES.map(function (series) {
        var btn = el("button", { type: "button", "aria-pressed": hidden[series.key] ? "false" : "true" });
        btn.appendChild(el("span", { class: "swatch", style: "background:" + series.color }));
        btn.appendChild(document.createTextNode(series.label));
        btn.addEventListener("click", function () {
          hidden[series.key] = !hidden[series.key];
          renderYear();
        });
        return btn;
      }),
    );
  }

  function niceStep(span) {
    if (span <= 12) return 2;
    if (span <= 30) return 5;
    return 10;
  }

  function renderChart() {
    var rows = data.byYear[currency];
    var visible = SERIES.filter(function (series) { return !hidden[series.key]; });
    var host = document.getElementById("chart");
    var frameWidth = host.parentElement.getBoundingClientRect().width || 640;
    var W = Math.max(320, Math.round(frameWidth));
    var narrow = W < 640;
    var H = narrow ? 280 : 340;
    var pad = { l: narrow ? 42 : 56, r: narrow ? 10 : 24, t: 16, b: narrow ? 32 : 36 };
    var plotW = W - pad.l - pad.r;
    var plotH = H - pad.t - pad.b;

    var values = [];
    rows.forEach(function (row) {
      visible.forEach(function (series) { values.push(row[series.key]); });
    });
    if (!values.length) {
      host.replaceChildren(el("p", { class: "fine", text: "Choose at least one series to draw the chart." }));
      return;
    }
    var lo = Math.min.apply(null, values);
    var hi = Math.max.apply(null, values);
    var span = hi - lo || 1;
    lo -= span * 0.12;
    hi += span * 0.14;
    var step = niceStep(hi - lo);
    lo = Math.floor(lo / step) * step;
    hi = Math.ceil(hi / step) * step;

    function xAt(i) {
      if (rows.length === 1) return pad.l + plotW / 2;
      return pad.l + (plotW * i) / (rows.length - 1);
    }
    function yAt(v) {
      return pad.t + ((hi - v) / (hi - lo)) * plotH;
    }

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-labelledby", "chart-caption");
    svg.setAttribute("pointer-events", "all");

    function svgEl(name, attrs) {
      var node = document.createElementNS("http://www.w3.org/2000/svg", name);
      Object.keys(attrs).forEach(function (key) { node.setAttribute(key, attrs[key]); });
      return node;
    }

    svg.appendChild(svgEl("rect", { x: 0, y: 0, width: W, height: H, fill: "transparent", "pointer-events": "all" }));

    for (var tick = lo; tick <= hi + 0.01; tick += step) {
      var y = yAt(tick);
      svg.appendChild(svgEl("line", { class: "grid-line", x1: pad.l, x2: W - pad.r, y1: y, y2: y }));
      var label = svgEl("text", { class: "axis", x: pad.l - 8, y: y + 4, "text-anchor": "end" });
      label.textContent = (currency === "CAD" ? "C$" : "$") + Math.round(tick);
      svg.appendChild(label);
    }

    var shortYears = plotW / Math.max(1, rows.length - 1) < 36;
    rows.forEach(function (row, i) {
      var label = svgEl("text", { class: "axis", x: xAt(i), y: H - 10, "text-anchor": "middle" });
      label.textContent = shortYears ? "’" + String(row.year).slice(2) : String(row.year);
      svg.appendChild(label);
    });

    var rule = svgEl("line", {
      class: "hover-line",
      x1: xAt(rows.length - 1),
      x2: xAt(rows.length - 1),
      y1: pad.t,
      y2: pad.t + plotH,
    });
    svg.appendChild(rule);

    visible.forEach(function (series) {
      var d = rows.map(function (row, i) {
        return (i === 0 ? "M" : "L") + xAt(i).toFixed(2) + " " + yAt(row[series.key]).toFixed(2);
      }).join(" ");
      svg.appendChild(svgEl("path", { d: d, fill: "none", stroke: series.color, "stroke-width": series.key === "avgPerUnit" ? 2.4 : 1.75, "stroke-linejoin": "round", "stroke-linecap": "round" }));
      rows.forEach(function (row, i) {
        svg.appendChild(svgEl("circle", {
          cx: xAt(i).toFixed(2),
          cy: yAt(row[series.key]).toFixed(2),
          r: series.key === "avgPerUnit" ? 3.4 : 2.8,
          fill: "#fffcf8",
          stroke: series.color,
          "stroke-width": 1.75,
        }));
      });
    });

    function show(i) {
      var row = rows[i];
      var x = xAt(i);
      rule.setAttribute("x1", x);
      rule.setAttribute("x2", x);
      var readout = document.getElementById("readout");
      var bits = [
        el("span", { class: "readout-year", text: row.year + " · " + currency }),
      ];
      visible.forEach(function (series) {
        bits.push(el(
          "span",
          { class: "readout-item" },
          el("i", { class: "dot", style: "background:" + series.color }),
          document.createTextNode(series.label + " " + money(row[series.key], currency)),
        ));
      });
      bits.push(el("span", { class: "readout-item", text: fmtInt(row.units) + " units · " + fmtInt(row.accounts) + " accounts" }));
      readout.replaceChildren.apply(readout, bits);
    }

    function indexFromEvent(event) {
      var rect = svg.getBoundingClientRect();
      var x = ((event.clientX - rect.left) / rect.width) * W;
      var best = 0;
      var bestDist = Infinity;
      rows.forEach(function (_, i) {
        var dist = Math.abs(xAt(i) - x);
        if (dist < bestDist) {
          best = i;
          bestDist = dist;
        }
      });
      return best;
    }

    svg.addEventListener("pointermove", function (event) { show(indexFromEvent(event)); });
    svg.addEventListener("pointerdown", function (event) { show(indexFromEvent(event)); });
    show(rows.length - 1);
    host.replaceChildren(svg);
  }

  function renderCohorts() {
    var host = document.getElementById("cohorts");
    var note = document.getElementById("cohort-note");
    host.replaceChildren.apply(
      host,
      data.cohorts[currency].map(function (item) {
        return el(
          "article",
          { class: "cohort" },
          el("p", { class: "cohort-label", text: item.from + "–" + item.to }),
          el("p", { class: "cohort-value", text: money(item.avgPerUnit, currency) }),
          el("p", { class: "cohort-meta", text: fmtInt(item.units) + " units · " + fmtInt(item.accounts) + " accounts" }),
        );
      }),
    );
    note.textContent = currency === "USD"
      ? "Unit-weighted average price per unit for each era. 2024–2026 is below the 2020–2023 peak and still above 2013–2019."
      : "Unit-weighted average price per unit. The three eras sit close together. CAD shows no clear trend.";
  }

  function renderYearTable() {
    var rows = data.byYear[currency];
    var table = el("table");
    table.appendChild(el("caption", { text: currency + " average price per unit by account start year. Size columns are the quantity-weighted price for that size." }));
    var head = el("tr");
    ["Year", "Accounts", "Units", "Avg / account", "All sizes", "Small", "Medium", "Large"].forEach(function (label, i) {
      head.appendChild(el("th", { class: i === 0 ? "left" : "", scope: "col", text: label }));
    });
    table.appendChild(el("thead", null, head));
    var body = el("tbody");
    rows.forEach(function (row) {
      body.appendChild(el(
        "tr",
        null,
        el("td", { class: "left", text: String(row.year) }),
        el("td", { text: fmtInt(row.accounts) }),
        el("td", { text: fmtInt(row.units) }),
        el("td", { text: money(row.avgPerAccount, currency) }),
        el("td", { text: money(row.avgPerUnit, currency) }),
        el("td", { text: money(row.small, currency) }),
        el("td", { text: money(row.medium, currency) }),
        el("td", { text: money(row.large, currency) }),
      ));
    });
    table.appendChild(body);
    mountTable(document.getElementById("year-table"), table);
  }

  function renderYear() {
    document.getElementById("cur-usd").setAttribute("aria-pressed", currency === "USD" ? "true" : "false");
    document.getElementById("cur-cad").setAttribute("aria-pressed", currency === "CAD" ? "true" : "false");
    document.getElementById("chart-caption").textContent =
      (document.getElementById("chart").parentElement.getBoundingClientRect().width < 640
        ? "Axis labels are ’" + String(data.byYear[currency][0].year).slice(2) + " through ’" + String(data.byYear[currency][data.byYear[currency].length - 1].year).slice(2) + ". "
        : "") +
      currency + " average price per unit by start year. Lines are all sizes, small, medium, and large. Hover or tap a year for the figures. Currencies are not converted.";
    renderLegend();
    renderChart();
    renderCohorts();
    renderYearTable();
  }

  function renderMatrix() {
    var years = data.matrix.years;
    var table = el("table", { class: "matrix" });
    table.appendChild(el("caption", {
      text: "USD average price per unit by location and start year. The count under each price is units. Blank cells have no units that year. Reset marks locations whose start dates appear migrated.",
    }));
    var head = el("tr");
    head.appendChild(el("th", { class: "left sticky-col", scope: "col", text: "Location" }));
    years.forEach(function (year) {
      head.appendChild(el("th", { scope: "col", text: String(year) }));
    });
    table.appendChild(el("thead", null, head));
    var body = el("tbody");
    data.matrix.rows.forEach(function (row) {
      var tr = el("tr");
      tr.appendChild(nameCell(row));
      years.forEach(function (year) {
        var cell = row.cells[String(year)];
        if (!cell) {
          tr.appendChild(el("td", { class: "is-empty", text: "—" }));
          return;
        }
        var td = el("td");
        td.appendChild(el("span", { class: "px", text: cell.price.toFixed(2) }));
        td.appendChild(el("span", { class: "n", text: fmtInt(cell.units) }));
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
    table.appendChild(body);
    mountTable(document.getElementById("matrix-table"), table);
  }

  document.getElementById("cur-usd").addEventListener("click", function () {
    currency = "USD";
    renderYear();
  });
  document.getElementById("cur-cad").addEventListener("click", function () {
    currency = "CAD";
    renderYear();
  });

  renderLocations();
  renderSize();
  renderYear();
  renderMatrix();

  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderYear, 150);
  });
})();
