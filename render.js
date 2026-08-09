function renderInline(html) {
  if (!html) return "";
  return html
    .replace(/<button>(.*?)<\/button>/g, '<span class="tag tag-button">$1</span>')
    .replace(/<primary>(.*?)<\/primary>/g, '<span class="tag tag-primary">$1</span>')
    .replace(/<secondary>(.*?)<\/secondary>/g, '<span class="tag tag-secondary">$1</span>')
    .replace(/<external href="([^"]*)">(.*?)<\/external>/g, '<a href="$1" class="link-external">$2</a>');
}

function el(tag, opts = {}) {
  const node = document.createElement(tag);
  if (opts.className) node.className = opts.className;
  if (opts.id) node.id = opts.id;
  if (opts.html !== undefined) node.innerHTML = opts.html;
  if (opts.text !== undefined) node.textContent = opts.text;
  return node;
}

function renderBodyBlock(block) {
  switch (block.type) {
    case "text":
      return el("p", { className: "support-text", html: renderInline(block.html) });

    case "list": {
      const ul = el("ul", { className: "custom-list" });
      block.items.forEach(item => {
        const li = el("li", { html: renderInline(item) });
        ul.appendChild(li);
      });
      return ul;
    }

    case "infobox": {
      const box = el("div", { className: "info-box" });
      if (block.label) {
        box.appendChild(el("p", { className: "subsection-group-label-box", html: renderInline(block.label) }));
      }
      if (block.intro) {
        box.appendChild(document.createTextNode(renderInlineText(block.intro)));
      }
      if (block.text) {
        box.appendChild(el("p", { className: "support-text", html: renderInline(block.text) }));
      }
      if (block.texts) {
        block.texts.forEach(t => box.appendChild(el("p", { className: "support-text", html: renderInline(t) })));
      }
      if (block.list) {
        const ul = el("ul", { className: "custom-list", });
        ul.style.marginTop = "7px";
        block.list.forEach(item => {
          if (typeof item === "string") {
            ul.appendChild(el("li", { html: renderInline(item) }));
          } else {
            const li = el("li");
            if (item.icon) {
              const img = el("img");
              img.src = item.icon;
              img.height = 14;
              img.style.verticalAlign = "-3px";
              li.appendChild(img);
              li.appendChild(document.createTextNode(" \u00a0 " + item.text));
            } else {
              li.innerHTML = renderInline(item.text);
            }
            ul.appendChild(li);
          }
        });
        box.appendChild(ul);
      }
      return box;
    }

    case "demoRow": {
      const row = el("div", { className: "demo-row" });
      const figure = el("figure", { className: "demo-card" });
      const frame = el("div", { className: "demo-frame" });
      const img = el("img");
      img.src = block.gif;
      img.alt = block.alt || "";
      img.loading = "lazy";
      frame.appendChild(img);
      figure.appendChild(frame);
      row.appendChild(figure);

      const textGroup = el("div", { className: "demo-row-text" });
      textGroup.appendChild(el("p", { className: "demo-col-label", text: block.label }));
      textGroup.appendChild(el("p", { className: "support-text", html: renderInline(block.text) }));
      row.appendChild(textGroup);
      return row;
    }

    default:
      return null;
  }
}

function renderInlineText(s) {
  const tmp = document.createElement("div");
  tmp.innerHTML = renderInline(s);
  return tmp.textContent;
}

function renderAccordion(acc) {
  const item = el("div", { className: "accordion-item" });
  if (acc.id) item.id = acc.id;

  const header = el("button", { className: "accordion-header" });
  header.setAttribute("aria-expanded", "false");
  header.appendChild(el("span", { text: acc.title }));
  header.appendChild(el("span", { className: "accordion-indicator", html: "+" }));
  header.querySelector(".accordion-indicator").setAttribute("aria-hidden", "true");
  item.appendChild(header);

  const body = el("div", { className: "accordion-body" });
  (acc.body || []).forEach(block => {
    const node = renderBodyBlock(block);
    if (node) body.appendChild(node);
  });
  item.appendChild(body);

  return item;
}

function renderNavChips(data) {
  const nav = document.getElementById("navChips");
  data.navChips.forEach(chip => {
    const a = el("a", { className: "tag tag-primary chip-link", html: chip.label });
    a.href = chip.href;
    nav.appendChild(a);
  });
}

function renderIntro(data, container) {
  const introSection = el("div", { className: "intro-section" });
  introSection.appendChild(el("p", { className: "subsection-group-large", text: data.intro.text }));

  const contactBox = el("div", { className: "contact-box" });
  contactBox.appendChild(el("div", { className: "contact-emoji", html: "&#x1F48C;" }));
  const h2 = el("h2", { className: "support-title" });
  h2.innerHTML = `Questions? Troubles?<br><a href="mailto:${data.meta.supportEmail}" style="color: var(--primary-color)"><strong>Please let me know</strong></a>`;
  contactBox.appendChild(h2);
  introSection.appendChild(contactBox);

  container.appendChild(introSection);
  container.appendChild(hr());
}

function hr() {
  const hrEl = el("hr");
  hrEl.style.margin = "30px 0";
  hrEl.style.color = "var(--outline-grey)";
  hrEl.style.height = "0.5px";
  hrEl.style.backgroundColor = "var(--outline-grey)";
  hrEl.style.border = "none";
  return hrEl;
}

function renderCollecting(data, container) {
  container.appendChild(el("h2", { className: "section-title", text: data.collectingReferences.sectionTitle }));
  container.appendChild(el("p", { className: "support-text", text: data.collectingReferences.intro }));

  const panel = el("div", { className: "static-panel" });
  const row = el("div", { className: "demo-row-inline" });

  data.collectingReferences.demoCards.forEach(card => {
    const col = el("div", { className: "demo-inline-col" });
    const figure = el("figure", { className: "demo-card-inline" });
    const frame = el("div", { className: "demo-frame-inline" });
    const img = el("img");
    img.src = card.gif;
    img.alt = card.alt;
    img.loading = "lazy";
    frame.appendChild(img);
    figure.appendChild(frame);
    col.appendChild(figure);

    const textGroup = el("div", { className: "demo-inline-text-group" });
    textGroup.appendChild(el("p", { className: "demo-inline-title", text: card.title }));
    textGroup.appendChild(el("p", { className: "support-text demo-inline-text", html: renderInline(card.text) }));
    col.appendChild(textGroup);

    row.appendChild(col);
  });

  panel.appendChild(row);
  container.appendChild(panel);

  data.accordions.forEach(acc => container.appendChild(renderAccordion(acc)));
}

function renderNamedSection(section, container, { withHr = true, headingTag = "p", headingClass = "subsection-group-label", extraNote = null } = {}) {
  const heading = el(headingTag, { className: headingClass, id: section.id, html: section.title });
  heading.style.marginTop = "20px";
  container.appendChild(heading);
  container.appendChild(el("p", { className: "support-text", html: renderInline(section.intro) }));

  if (extraNote) {
    container.appendChild(el("p", { className: "support-text", html: renderInline(extraNote) }));
  }

  section.accordions.forEach(acc => container.appendChild(renderAccordion(acc)));

  if (withHr) container.appendChild(hr());
}

function renderMetadataSection(section, container) {
  container.appendChild(el("h2", { className: "section-title", id: section.id, text: section.title }));
  container.appendChild(el("p", { className: "support-text", html: renderInline(section.intro) }));
  section.accordions.forEach(acc => container.appendChild(renderAccordion(acc)));
}

async function init() {
  const res = await fetch("content.json");
  const data = await res.json();

  renderNavChips(data);

  const body = document.getElementById("helpBody");

  renderIntro(data, body);
  renderCollecting(data, body);

  renderNamedSection(data.searchEngines, body);
  renderNamedSection(data.repositories, body, { extraNote: data.repositories.publisherNote });
  renderNamedSection(data.identifiers, body, { withHr: true, extraNote: data.identifiers.sources });

  body.appendChild(el("h2", { className: "section-title", id: data.workspace.id, text: data.workspace.title }));
  body.appendChild(el("p", { className: "support-text", text: data.workspace.intro }));
  data.workspace.accordions.forEach(acc => body.appendChild(renderAccordion(acc)));
  body.appendChild(hr());

  renderMetadataSection(data.metadata, body);

  const spacer = el("p");
  spacer.style.marginTop = "32px";
  spacer.innerHTML = "&nbsp;";
  body.appendChild(spacer);

  if (typeof initAccordions === "function" && typeof initChipLinks === "function") {
    initAccordions(document.getElementById("helpContainer"));
    initChipLinks(document.getElementById("helpContainer"));
  }
}

document.addEventListener("DOMContentLoaded", init);
