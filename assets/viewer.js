/* Booklet viewer: renders every page of the PDF with PDF.js, one under another,
   so attendees can scroll through it on a phone. */
(function () {
  "use strict";

  var container = document.getElementById("pdf-container");
  // The PDF path is set by `booklet:` in _config.yml (passed in via data-pdf).
  var PDF_URL = container.getAttribute("data-pdf") || "AustMS-ECW-2026.pdf";
  var statusEl = document.getElementById("pdf-status");
  var zoomLabel = document.getElementById("zoom-level");
  var pageCountEl = document.getElementById("page-count");

  var pdfDoc = null;
  var zoom = 1;            // 1 = fit page to screen width
  var MIN_ZOOM = 0.5, MAX_ZOOM = 3, STEP = 0.25;
  var renderToken = 0;
  var lastWidth = 0;

  // Opened straight from disk (file://): browsers block PDF.js from reading the
  // file, so use the browser's own PDF viewer instead. On the live site this never runs.
  if (location.protocol === "file:") {
    showEmbed("You're viewing a local copy, so the booklet is shown with your browser's " +
      "built-in PDF viewer. The live site uses the phone-friendly viewer.");
    return;
  }

  if (!window.pdfjsLib) {
    showEmbed("The phone-friendly viewer could not load, so the booklet is shown with your browser's PDF viewer.");
    return;
  }

  pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

  pdfjsLib.getDocument(PDF_URL).promise.then(function (doc) {
    pdfDoc = doc;
    pageCountEl.textContent = doc.numPages + (doc.numPages === 1 ? " page" : " pages");
    statusEl.remove();
    renderAll();
  }).catch(function (err) {
    console.error(err);
    showFallback("The booklet could not be displayed here.");
  });

  function showEmbed(msg) {
    document.querySelector(".viewer-toolbar .group").style.visibility = "hidden";
    container.innerHTML =
      '<p class="note embed-note">' + msg + ' If nothing appears, <a href="' + PDF_URL +
      '">open the booklet PDF</a>.</p>' +
      '<iframe class="pdf-embed" src="' + PDF_URL + '#view=FitH" title="Workshop booklet"></iframe>';
  }

  function showFallback(msg) {
    statusEl.innerHTML = msg + '<br><br><a class="button" href="' + PDF_URL +
      '">Open the booklet PDF</a>';
  }

  function availableWidth() {
    // container has 8px padding on each side
    return Math.max(200, container.clientWidth - 16);
  }

  function renderAll() {
    if (!pdfDoc) return;
    var token = ++renderToken;
    lastWidth = container.clientWidth;
    zoomLabel.textContent = Math.round(zoom * 100) + "%";

    var targetWidth = availableWidth() * zoom;
    var dpr = Math.min(window.devicePixelRatio || 1, 3);
    var frag = document.createDocumentFragment();
    var canvases = [];
    for (var i = 1; i <= pdfDoc.numPages; i++) {
      var c = document.createElement("canvas");
      c.className = "pdf-page";
      c.setAttribute("role", "img");
      c.setAttribute("aria-label", "Booklet page " + i);
      frag.appendChild(c);
      canvases.push(c);
    }

    // Keep the reader's relative scroll position when re-rendering at a new zoom.
    var scrollRatio = document.documentElement.scrollHeight > 0
      ? window.scrollY / document.documentElement.scrollHeight : 0;

    container.innerHTML = "";
    container.appendChild(frag);

    var chain = Promise.resolve();
    canvases.forEach(function (canvas, idx) {
      chain = chain.then(function () {
        if (token !== renderToken) return;
        return pdfDoc.getPage(idx + 1).then(function (page) {
          if (token !== renderToken) return;
          var base = page.getViewport({ scale: 1 });
          var cssScale = targetWidth / base.width;
          var viewport = page.getViewport({ scale: cssScale * dpr });
          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.style.width = Math.floor(base.width * cssScale) + "px";
          canvas.style.height = Math.floor(base.height * cssScale) + "px";
          return page.render({ canvasContext: canvas.getContext("2d"), viewport: viewport }).promise;
        });
      });
    });
    chain.then(function () {
      if (token === renderToken && scrollRatio > 0) {
        window.scrollTo(0, scrollRatio * document.documentElement.scrollHeight);
      }
    });
  }

  function setZoom(z) {
    z = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Math.round(z * 100) / 100));
    if (z === zoom) return;
    zoom = z;
    renderAll();
  }

  document.getElementById("zoom-in").addEventListener("click", function () { setZoom(zoom + STEP); });
  document.getElementById("zoom-out").addEventListener("click", function () { setZoom(zoom - STEP); });
  document.getElementById("zoom-fit").addEventListener("click", function () { setZoom(1); });

  // Re-render on width changes only (phones change height as the address bar hides).
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (container.clientWidth !== lastWidth) renderAll();
    }, 200);
  });
})();
