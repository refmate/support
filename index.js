function createHelpOverlay() {
  const helpContainer = document.createElement('div');
  helpContainer.className = 'help-overlay';

  helpContainer.innerHTML = `
    <div class="help-header">
        <div class="help-header-inner">
            <div class="intro-chips">
              <a class="tag tag-primary chip-link" href="#section-search-engines">Search Engines</a>
              <a class="tag tag-primary chip-link" href="#section-repositories">Repositories</a>
              <a class="tag tag-primary chip-link" href="#section-identifiers">Identifiers &amp; Manual Entries</a>
              <a class="tag tag-primary chip-link" href="#section-workspace">Workspace</a>
              <a class="tag tag-primary chip-link" href="#section-metadata">Metadata</a>
            </div>
            <button class="close-help button" id="helpCloseBtn">&#10006;</button>
        </div>
    </div>

    <div class="help-content-wrapper">
      <div class="container">
        <div class="help-body">

        <div class="intro-section">
          <p class="subsection-group-large">
            RefMate is a browser extension for collecting and organising academic references directly in your browser. Capture references with one click while searching, resolve any identifier you come across, check availability and edit metadata - everything in one place. Once you're ready, export everything to your reference manager.
          </p>
          <div class="contact-box">
            <div class="contact-emoji">&#x1F48C;</div>
            <h2 class="support-title">
              Questions? Troubles?<br>
              <a href="mailto:inbox.web@mailo.com" style="color: var(--primary-color)"><strong>Please let me know</strong></a>
            </h2>
          </div>
        </div>

        <hr style="margin: 30px 0; color: var(--outline-grey); height: 0.5px; background-color: var(--outline-grey); border: none;">

        <h2 class="section-title">Collecting References</h2>
        <p class="support-text">The core functionality of RefMate is collecting references. You can access this in two ways:</p>
        <div class="static-panel">
          <div class="demo-row-inline">
            <div class="demo-inline-col">
              <figure class="demo-card-inline">
                <div class="demo-frame-inline">
                  <img src="vid1.gif" alt="Using the Quick Capture button" loading="lazy">
                </div>
              </figure>
              <div class="demo-inline-text-group">
                <p class="demo-inline-title">Quick Capture Button</p>
                <p class="support-text demo-inline-text">The <span class="tag tag-button">Quick Capture</span> button works especially on search engines and is optimised for a number of websites and link types.</p>
              </div>
            </div>
            <div class="demo-inline-col">
              <figure class="demo-card-inline">
                <div class="demo-frame-inline">
                  <img src="vid2.gif" alt="Using the right-click context menu" loading="lazy">
                </div>
              </figure>
              <div class="demo-inline-text-group">
                <p class="demo-inline-title">Context Menu Access</p>
                <p class="support-text demo-inline-text">RefMate can also resolve any DOI or ISBN anywhere, using the context menu. Select the identifier, right-click, and choose <span class="tag tag-button">Get Reference</span>.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item" id="section-quick-capture">
          <button class="accordion-header" aria-expanded="false">
            <span>Quick Capture</span>
        <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text"><span class="tag tag-button">Quick Capture</span> is optimised to work on search engines and four repositories (HAL, JSTOR, CyberLeninka and arXiv). It can also generally recognise links from publisher and aggregator pages and resolve identifiers, but this is not manually optimised and may produce inconsistent results.</p>
            <div class="info-box">The button has three variants that indicate expected metadata completeness:
              <ul class="custom-list" style="margin-top: 7px;">
                <li><img src="icons/quickcapture-identifier.png" height="14" style="vertical-align: -3px;" /> &nbsp; Very Complete</li>
                <li><img src="icons/quickcapture-external.png" height="14" style="vertical-align: -3px;" /> &nbsp; Mostly Complete</li>
                <li><img src="icons/quickcapture-scholar.png" height="14" style="vertical-align: -3px;" /> &nbsp; Frequently Incomplete</li>
              </ul>
            </div>
            <div class="info-box">In <span class="tag tag-button">Settings</span>, you can toggle <span class="tag tag-button">Quick Capture</span> globally, per site, or per URL type:
              <ul class="custom-list" style="margin-top: 7px;">
                <li>The global toggle turns it off everywhere, including on search engines.</li>
                <li>The identifier toggle takes effect everywhere except on search engines.</li>
                <li>Site-specific toggles apply only to those pages and do not affect search engines.</li>
              </ul>
            </div>
          </div>
        </div>

        <p class="subsection-group-label" id="section-search-engines" style="margin-top: 20px;">Search Engines</p>
        <p class="support-text">RefMate is fully optimised for three academic search engines: Google Scholar, OpenAlex, and Scopus. On these pages, <span class="tag tag-button">Quick Capture</span> reliably retrieves the most complete metadata available for a given entry.</p>

        <div class="accordion-item" id="section-google-scholar">
          <button class="accordion-header" aria-expanded="false">
            <span>Google Scholar</span>
        <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">The <span class="tag tag-button">Quick Capture</span> button appears next to entries that contain an identifier. It retrieves more complete data than Google Scholar's own BibTeX export and includes the document link. You can also add any entry independently by right-clicking on <span class="tag tag-primary">Import into BibTeX</span> and selecting <span class="tag tag-button">Get Reference</span>.</p>
            <p class="support-text" style="margin-top: 10px;">On Google Scholar, RefMate relies on various disparate sources to work together. At times this may lead to issues - here's how to solve them:</p>
            <div class="info-box">
              <p class="subsection-group-label-box">&raquo;RefMate requests permission to access a site.&laquo;</p>
              <p class="support-text">RefMate avoids site-specific permissions where possible and comes with relevant publisher and repository pages whitelisted. Occasionally, a host permission is needed to process a URL. Any outstanding permissions are listed at the bottom of <span class="tag tag-button">Settings</span>, where you can grant them.</p>
            </div>
            <div class="info-box">
              <p class="subsection-group-label-box">&raquo;Some entries are missing the Quick Capture button.&laquo;</p>
        <p class="support-text">Activate <span class="tag tag-primary">Show links to import citations into BibTeX</span> in your <a href="https://scholar.google.com/scholar_settings?sciifh=1&hl=en&as_sdt=0,5" class="link-external">Google Scholar settings</a> under <span class="tag tag-primary">Bibliography Manager</span>.</p>    </div>
            <div class="info-box">
              <p class="subsection-group-label-box">&raquo;Links to JSTOR, Project Muse and other pages produce error notifications.&laquo;</p>
              <p class="support-text">Bot protection may block background tabs from loading the target site. Open the page manually and complete any captchas or verifications. Avoid using VPN or Private Relay. For JSTOR, make sure you are logged in.</p>
            </div>
          </div>
        </div>

        <div class="accordion-item" id="section-openalex">
          <button class="accordion-header" aria-expanded="false">
            <span>OpenAlex</span>
        <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">RefMate retrieves metadata from OpenAlex via the OpenAlex API. You can add references by right-clicking any entry in the search results and selecting <span class="tag tag-button">Get Reference</span>, or using the <span class="tag tag-button">Quick Capture</span> button that appears next to each entry.</p>
            <p class="support-text">RefMate works with all OpenAlex links that contain an ID, such as:</p>
            <ul class="custom-list">
              <li><span class="tag tag-secondary">https://openalex.org/W4411647848</span></li>
              <li><span class="tag tag-secondary">W4411647848</span></li>
            </ul>
          </div>
        </div>

        <div class="accordion-item" id="section-scopus">
          <button class="accordion-header" aria-expanded="false">
            <span>Scopus</span>
        <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">RefMate extracts the Scopus ID from publication URLs and retrieves structured metadata directly from the Scopus gateway API. It then converts the JSON payload into a clean BibTeX entry, including fields like authors, journal, year, volume, pages, DOI, and abstract.</p>
            <div class="info-box">Since it directly extracts Scopus metadata, entries are usually complete and up-to-date. To verify completeness for Scopus entries based on present identifiers, run <span class="tag tag-button">Autocomplete</span>.</div>
          </div>
        </div>

        <p class="subsection-group-label" id="section-repositories" style="margin-top: 20px;">Repositories</p>
        <p class="support-text">In order to work reliably on search engines, RefMate is finetuned for a number of repositories and major publishers. For four major repositories, <span class="tag tag-button">Quick Capture</span> is optimised to work directly on the repository site.</p>
        <p class="support-text">Additionally, for a number of publisher and aggregator pages frequently listed on Google Scholar, RefMate extracts and resolves links: <span class="tag tag-primary">OUP</span>, <span class="tag tag-primary">MDPI</span>, <span class="tag tag-primary">Nature</span>, <span class="tag tag-primary">Project MUSE</span>, <span class="tag tag-primary">ScienceDirect</span>, <span class="tag tag-primary">Google Books</span>, and <span class="tag tag-primary">OAPEN</span> - resolving full citations via Crossref or the ISBN search system. When links to these pages appear on Google Scholar, RefMate shows the <span class="tag tag-button">Quick Capture</span> button. You can toggle this per platform in Settings.</p>


        <div class="accordion-item">
          <button class="accordion-header" aria-expanded="false">
            <span>HAL Open Science</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">RefMate retrieves metadata from HAL Open Science by fetching the BibTeX entry provided by HAL's built-in BibTeX export. You can add a reference by right-clicking on any HAL page link containing a HAL-ID and selecting <span class="tag tag-button">Get Reference</span>. If you have <span class="tag tag-button">Quick Capture</span> enabled, the button appears next to the title of the HAL entry.</p>
            <p class="support-text">RefMate works with HAL URLs and HAL IDs, such as:</p>
            <ul class="custom-list">
              <li><span class="tag tag-secondary">https://hal.science/hal-01390889v1</span></li>
              <li><span class="tag tag-secondary">hal-01390889v1</span></li>
            </ul>
          </div>
        </div>

        <div class="accordion-item" id="section-jstor">
          <button class="accordion-header" aria-expanded="false">
            <span>JSTOR</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">RefMate works with any JSTOR stable link. The <span class="tag tag-button">Quick Capture</span> button appears next to the title of a given JSTOR entry, on entry pages and in the search results. Alternatively, you can select any JSTOR stable link, right-click to open the context menu, and click <span class="tag tag-button">Get Reference</span>. All metadata is directly collected from JSTOR.</p>
              <div class="info-box">
                <p class="subsection-group-label-box">Note on DOIs and JSTOR</p>
                <p class="support-text">Not all JSTOR entries have a registered, functional DOI, however all JSTOR entries have a DOI assigned in their page source. JSTOR apparently performs its own validation before displaying a DOI on the article page, suppressing those that are not verifiably registered. RefMate, however, fetches metadata directly from the page source. As a result, the exported BibTeX may include a non-functional DOI.</p>
                <p class="support-text">In practice this is rarely a problem: since all JSTOR entries are captured with their stable URL, the Source link in the history view will always point directly to the article, making DOI resolution redundant for access purposes. The respective JSTOR entries are always flagged as open, so you can access them by clicking on the author name directly rather than resolving access via the identifier. Be aware, however, that the DOI field in JSTOR entries should be treated with caution.</p>
              </div>
            </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header" aria-expanded="false">
            <span>CyberLeninka</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">RefMate extracts citation data from CyberLeninka.ru article pages by scraping metadata tags or DOM content directly from CyberLeninka. When resolving CyberLeninka links from Google Scholar, or from the search results on CyberLeninka, RefMate temporarily opens the link in a background tab to collect data, then closes it automatically. When you're already on CyberLeninka, it extracts data directly from the current page.</p>
          </div>
        </div>

        <div class="accordion-item" id="section-arxiv">
          <button class="accordion-header" aria-expanded="false">
            <span>arXiv</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">On arXiv, the <span class="tag tag-button">Quick Capture</span> button is accessible in the page header and the citation section of a given paper. Metadata is retrieved directly from arXiv. You can also select the arXiv link or arXiv ID and add entries via the context menu:</p>
            <ul class="custom-list">
              <li><span class="tag tag-secondary">https://arxiv.org/abs/2507.12614</span></li>
              <li><span class="tag tag-secondary">https://arxiv.org/pdf/2507.12614</span></li>
              <li><span class="tag tag-secondary">arXiv:2507.12614</span></li>
            </ul>
          </div>
        </div>

        <p class="subsection-group-label" id="section-identifiers" style="margin-top: 20px;">Identifiers & Manual Entries</p>
        <p class="support-text">RefMate resolves DOIs and ISBNs. For sources without identifiers, you can create manual BibTeX entries directly in the workspace.</p>
<p class="support-text">DOIs are resolved via the <a href="https://www.crossref.org/documentation/retrieve-metadata/rest-api/" class="link-external">Crossref REST API</a> and ISBNs across <a href="https://opac.k10plus.de/DB=2.299/LNG=EN/" class="link-external">K10Plus</a>, <a href="https://discover.libraryhub.jisc.ac.uk/" class="link-external">Library Hub Discover</a>, and <a href="https://openlibrary.org/search" class="link-external">Open Library</a>. It also draws on data directly provided by repositories and search engines. Data quality varies by source: DOI lookups typically yield the most complete records, with ISBN being most reliable for books and monographs.</p>

        <div class="accordion-item" id="section-doi-isbn">
          <button class="accordion-header" aria-expanded="false">
            <span>Identifiers (DOI &amp; ISBN)</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">Click the <span class="tag tag-button">Quick Capture</span> button next to an identifier (DOI or ISBN) to collect the reference. If you have turned off the button or if it does not appear, select the identifier, right-click to open the context menu, and click <span class="tag tag-button">Get Reference</span>.</p>
            <div class="info-box"><span class="tag tag-button">Quick Capture</span> is optimised for search engines only. On other pages, the button may duplicate or disappear. To resolve an identifier anywhere, select it and use the context menu instead.</div>
            <p class="support-text"><span class="tag tag-button">DOI:</span> Use a clean DOI, a valid DOI link, or a publisher link containing a full DOI:</p>
            <ul class="custom-list">
              <li><span class="tag tag-secondary">10.1080/01436599408420398</span></li>
              <li><span class="tag tag-secondary">http://doi.org/10.1080/01436599408420398</span></li>
              <li><span class="tag tag-secondary">http://www.tandfonline.com/doi/full/10.1080/01436599408420398</span></li>
            </ul>
            <p class="support-text"><span class="tag tag-button">ISBN:</span> Use ISBN-13 or ISBN-10:</p>
            <ul class="custom-list">
              <li><span class="tag tag-secondary">9780691161396</span></li>
              <li><span class="tag tag-secondary">0195050010</span></li>
            </ul>
            <p class="support-text">If multiple ISBNs are given for the same book, try the ISBN-13 first.</p>
          </div>
        </div>
        <div class="accordion-item">
          <button class="accordion-header" aria-expanded="false">
            <span>Manual Entry</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">In the workspace, click the <span class="tag tag-button">+ New</span> button to create a blank BibTeX entry. You can choose from common templates (article, book, book chapter, etc.) and edit it immediately or use autocomplete to add metadata based on identifiers.</p>
          </div>
        </div>

        <hr style="margin: 30px 0; color: var(--outline-grey); height: 0.5px; background-color: var(--outline-grey); border: none;">

        <h2 class="section-title" id="section-workspace">Workspace</h2>
        <p class="support-text">The workspace is where you organise and manage your collected references. Arrange entries in collections, edit metadata with the overlay, sort and export to BibTeX, RIS, or printable bibliographies.</p>

        <div class="accordion-item" id="section-collections">
          <button class="accordion-header" aria-expanded="false">
            <span>Collections</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">RefMate organises references in collections. New entries are always added to the collection tab you had last opened.</p>
            <div class="demo-row">
              <figure class="demo-card">
                <div class="demo-frame">
                  <img src="vid4.gif" alt="Renaming a collection" loading="lazy">
                </div>
              </figure>
              <div class="demo-row-text">
                <p class="demo-col-label">Renaming Collections</p>
                <p class="support-text">To rename a collection, click, select and hold its tab title, then type the new name and release. All entries in that collection automatically update to reflect the new name.</p>
              </div>
            </div>
            <div class="demo-row">
              <figure class="demo-card">
                <div class="demo-frame">
                  <img src="vid3.gif" alt="Moving entries between collections" loading="lazy">
                </div>
              </figure>
              <div class="demo-row-text">
                <p class="demo-col-label">Moving Entries between Collections</p>
                <p class="support-text">To move entries, hold <span class="tag tag-primary">Ctrl</span>/<span class="tag tag-primary">Cmd</span> and click to select multiple entries, then drag any selected header onto the target collection tab. <br>To move a single entry, either drag and drop it or, change the <span class="tag tag-secondary">RefCollection =</span> field in the BibTeX and refresh the page.</p>
              </div>
            </div>
            <div class="info-box">
            <p class="subsection-group-label-box">Collection Field</p>
            <p class="support-text">When copying entries to your clipboard or using the export feature, RefMate always includes the active collection name as a proprietary BibTeX field. When exporting or bulk-copying, you can chose to have proprietary fields removed.</div>
          </p></div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header" aria-expanded="false">
            <span>Entries</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">You can edit, copy, and delete entries, with all changes saved automatically. If the BibTeX of an entry contains <span class="tag tag-secondary">url = {...}</span>, that URL will be added to the entry title as a clickable link, unless for books as metadata retrieved via SRU usually does not contain any full-text links. Note that this may not be the only or most current URL where the source is available, as accuracy depends on the original data provider. Regarding access options, see <span class="tag tag-primary">Full-Text Search</span> below.</p>
            <div class="demo-row">
              <figure class="demo-card">
                <div class="demo-frame">
                  <img src="vid5.gif" alt="Deleting entries" loading="lazy">
                </div>
              </figure>
              <div class="demo-row-text">
                <p class="demo-col-label">Deleting Entries</p>
                <p class="support-text">You can delete all collections and entries using the <span class="tag tag-button">Delete</span> button in the top right corner. Furthermore, you can delete single entries by clicking on the respective button in the entry header, delete selected items by selecting and using the <span class="tag tag-button">Delete</span> button in the top right corner and delete collections by using the <span class="tag tag-button">close</span> button in right corner of a collection tab.</p>
              </div>
            </div>
            <div class="info-box">
              <p class="subsection-group-label-box">Storage</p>
              <p class="support-text">RefMate stores entries in the browser cache, and is thus not suitable for long-term storage of references. Entries may be deleted upon some browser or extension updates, or when clearing the browser data.</div>
            </p>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header" aria-expanded="false">
            <span>Sorting</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">Use the <span class="tag tag-button">Sort</span> button to cycle through sorting modes: by date added, author name, or publication year, in ascending or descending order. The current sort mode is displayed next to the icon.</p>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header" aria-expanded="false">
            <span>Metadata Panel</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">When editing entries, you can work with either plain BibTeX code or use the editing overlay for the metadata panel, which helps prevent formatting errors. By default, RefMate uses the overlay. For individual entries, you can open the BibTeX by clicking on the <span class="tag tag-button">BibTeX</span> button in the right corner of the metadata panel. To permanently switch to the BibTeX view, navigate to <span class="tag tag-button">Settings</span> and then <span class="tag tag-primary">Display &amp; Notifications</span>. The overlay provides input fields for each BibTeX field, along with the following action buttons:</p>
            <ul class="custom-list">
              <li><span class="tag tag-button">Rearrange Names</span> - converts author/editor names to "Last, First" format</li>
              <li><span class="tag tag-button">Lowercase</span> / <span class="tag tag-button">Title Case</span> - changes the case of title fields</li>
              <li><span class="tag tag-button">Delete;</span> - removes a field entirely</li>
              <li><span class="tag tag-button">+ Field</span> - quickly add commonly used fields (volume, pages, DOI, etc.)</li>
            </ul>
            <p class="support-text">RefMate lets you convert the entry type between Journal Articles, Monographs, Book Sections, and others. Click the entry type label (e.g., "article") to open the type menu and choose a new type.</p>
            <div class="info-box">
            <p class="subsection-group-label-box">Metadata Format</p>
            <p class="support-text">RefMate stores and displays all entries in BibTeX format regardless of your preferred export setting. Selecting RIS as your export format (see below) does not change how entries appear in the workspace - RIS files are generated through conversion from BibTeX upon export.</div>            
          </p></div>
        </div>

        <div class="accordion-item" id="section-export">
          <button class="accordion-header" aria-expanded="false">
            <span>Copy and Export</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">Whenever you add an entry to RefMate, it is automatically copied to your clipboard. You can also:</p>
            <ul class="custom-list">
              <li>Copy the identifier (DOI, ISBN, arXiv ID) of an entry separately using the identifier copy button next to each entry.</li>
              <li>Copy <span class="tag tag-button">all entries</span> in the current collection to your clipboard with the <span class="tag tag-button">Copy All</span> button in the header.</li>
              <li>Export the entire collection as a <span class="tag tag-secondary">.bib</span> or <span class="tag tag-secondary">.ris</span> file using the <span class="tag tag-button">Export</span> button.</li>
            </ul>
            <div class="info-box">
            <p class="subsection-group-label-box">Export Format</p>
            <p class="support-text">The export format can be changed in <span class="tag tag-primary">Settings - Content &amp; Export</span>. You can also change the format of entries added automatically to your clipboard.</div>
            </p>
            <p class="support-text">You can also export your entries as a <span class="tag tag-button">printable bibliography</span>. While not meant to replace reference managers, this is useful when you want your tags, notes, and entries in one place - for example, in advance of a library visit.</p>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header" aria-expanded="false">
            <span>Full-Text Search</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">RefMate is designed to work as a hub for researching and obtaining material. To this end, links to full texts are embedded in the author and date header of a given entry. If full texts are linked in a metadata set, the header text is blue. If the embedded link directs to a page with generally wide access (such as JSTOR or arXiv), this is indicated with a small, green tag next to it. Access depends on your library's or regional and national licenses. You can also copy the identifier (DOI or ISBN) of a given entry by clicking the respective button.</p>
            <p class="support-text">Each entry has a <span class="tag tag-button">Search</span> button that opens a relevant external resource, where you can check access options, based on the entry's type and available fields. This is especially useful for linking to a library or union catalogue. The search target is chosen based on priorities - by default, more precise identifiers take priority over broader queries. You can customise the search targets and priorities in <span class="tag tag-button">Settings</span> for each identifier and entry type individually - for example, you can set a library catalogue link as the default for ISBN searches.</p>
            <p class="support-text">By default, RefMate searches ISBN and ISSN on <span class="tag tag-primary">WorldCat</span>, DOI on <span class="tag tag-primary">libkey.io</span>, Journal Titles on <span class="tag tag-primary">OpenAlex</span>, and Title+Year on <span class="tag tag-primary">Google</span>.</p>
            <div class="info-box">
            <p class="subsection-group-label-box">Target URLs</p>
            <p class="support-text">To add a custom target URL, select the desired search scope in your provider's advanced search settings and search for a representative item. Copy the resulting URL and remove the search term from it. Paste the cleaned URL into the relevant field in RefMate's settings. Target URLs should append the search query at the end and look like these examples:</p>
              <ul class="custom-list" style="margin-top: 10px;">
                <li><span class="tag tag-secondary">https://www.google.com/search?q=</span></li>
                <li><span class="tag tag-secondary">https://www.sudoc.abes.fr/cbs//DB=2.1/CMD?ACT=SRCHA&amp;IKT=7&amp;SRT=RLV&amp;TRM=</span> - Sudoc (ISBN)</li>
                <li><span class="tag tag-secondary">https://lbssbb.gbv.de/DB=1/CMD?ACT=SRCHA&amp;IKT=1007&amp;SRT=YOP&amp;TRM=</span> - StabiKat (ISSN)</li>
                <li><span class="tag tag-secondary">https://discover.libraryhub.jisc.ac.uk/search?author=&amp;title=</span> - LibraryHub Discover (title keywords)</li>
              </ul>
            </div>
            </div>
          </div>

        <hr style="margin: 30px 0; color: var(--outline-grey); height: 0.5px; background-color: var(--outline-grey); border: none;">


        <h2 class="section-title" id="section-metadata">Metadata</h2>
        <p class="support-text">Enhance your references with customizable tags and free-text notes. Use autocomplete to fill in missing fields based on existing identifiers, and rely on automatic LaTeX character conversion and BibTeX cleanup for consistent metadata.</p>

        <div class="accordion-item" id="section-tags">
          <button class="accordion-header" aria-expanded="false">
            <span>Tags</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">Each entry can be assigned a <span class="tag tag-button">tag</span> (e.g., "To Read", "Read", "Important"). Click it to change or remove the tag. Tags are fully customisable in the settings, where you can rename the four default tags and add up to two custom tags with your own labels.</p>
            <div class="info-box">You can disable tags in the <span class="tag tag-primary">Settings</span>. Tags are stored as a proprietary BibTeX field, hence they have no effect in reference managers.</div>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header" aria-expanded="false">
            <span>Notes</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">Add a free-text <span class="tag tag-button">note</span> to any entry by clicking the <span class="tag tag-button">+ Add Note</span> button or by toggling the Notes view using the button in the header.</p>
            <div class="info-box">Notes are saved automatically as you type as a regular BibTeX field. To delete a note, either delete the text in the note panel, or delete the field in the metadata panel</div>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header" aria-expanded="false">
            <span>Autocomplete</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">RefMate can automatically fill in missing or incomplete bibliographic fields by looking up metadata based on identifiers already present in the entry. The lookup is triggered by an identifier (DOI or ISBN) already present in the entry.</p>
            <div class="info-box">Autocomplete is available in two forms: per-entry and per-collection.</div>
            <p class="support-text">Sometimes, collected metadata contains an identifier but is otherwise incomplete or outdated. This may be especially the case with entries collected from Google Scholar BibTeX, PubMed, arXiv, and JSTOR. In that case, individual or per-collection autocomplete helps you quickly resolve these inconsistencies.</p>
            <p class="support-text">Another use case for autocomplete is assembling <span class="tag tag-secondary">@incollection</span> type entries. If you add them with a DOI, they rarely include complete information about the book they appear in (series, editor, publisher, total pages), and a book's record conversely rarely includes chapter-level detail. To merge the two, simply add the missing identifier (either DOI or ISBN) to an <span class="tag tag-secondary">@incollection</span> entry, run autocomplete, and review the added fields.</p>
            <p class="support-text">You can also use the autocomplete feature when adding a new entry manually.</p>
            <p class="support-text">When using Autocomplete, please be aware of two possible restrictions:</p>
            <div class="info-box">
              <p class="subsection-group-label-box">Identifier Quality</p>
              <p class="support-text">Autocomplete is only as reliable as the identifier it works with. DOIs occasionally point to retracted, corrected, or superseded records. ISBNs may resolve to a different edition than the one you actually used. Always verify the fetched metadata - particularly edition, year, and publisher. Furthermore, some works may be published under multiple ISBNs, which will result in different metadata.</div>
            </p><div class="info-box">
              <p class="subsection-group-label-box">Source Inconsistencies</p>
              <p class="support-text">Crossref metadata (used for DOI lookups) is supplied by publishers and is not always complete or correctly formatted. Author names may be inverted, special characters may be misencoded, and fields like journal or booktitle may differ in abbreviation style from your other entries. Review fetched fields before accepting them.</p></div>
            <p class="support-text">Conflicts need manual resolution: When autocomplete finds a disagreement, it does not choose a winner - it leaves both values in the entry and flags the incoming one. You need to open the entry in edit mode, compare the two values, delete the one you don't want, and - if you edit the BibTeX directly - remove the autocomplete suffix from the field name. Running <span class="tag tag-button">Autocomplete</span> on a large collection can therefore produce a number of entries that require follow-up attention.</p>
            <div class="info-box">Autocomplete is optimised to be used with the editing overlay as metadata panel. When using it with plain BibTeX, look out for fields ending in <span class="tag tag-secondary">_autocomplete</span> - those may be duplicates or require manual editing.</div>
          </div>
        </div>

        <div class="accordion-item">
          <button class="accordion-header" aria-expanded="false">
            <span>Conversion & Clean-Up</span>
          <span class="accordion-indicator" aria-hidden="true">+</span>
          </button>
          <div class="accordion-body">
            <p class="support-text">Special LaTeX characters (e.g., <span class="tag tag-secondary">\"{o}</span>) are automatically converted to their Unicode equivalents (&ouml;) so that titles and author names display cleanly in the workspace and in copied citations.</p>
            <p class="support-text">When you copy or export entries, RefMate automatically removes empty fields and sanitises citation keys (removing spaces and illegal characters) to ensure valid BibTeX syntax.</p>
            <p class="support-text">Aditionally, you can also have any proprietary RefMate field removed (<span class="tag tag-secondary">RefCollection</span>, <span class="tag tag-secondary">RefData</span> and <span class="tag tag-secondary">RefTag</span>)</p>
          </div>
        </div>

        <p style="margin-top: 32px;">&nbsp;</p>
      </div>
    </div>
  </div>
  `;

  const helpStyles = document.createElement('style');
  helpStyles.textContent = `
    .help-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background-color: var(--bg-color);
      z-index: 100;
      overflow-y: auto;
      scrollbar-width: none;
      -ms-overflow-style: none;
      user-select: none;
    }
    .help-overlay::-webkit-scrollbar { display: none; }

    .help-header {
      position: sticky;
      top: 0;
      width: 100%;
      background-color: var(--bibtex-bg);
      border-bottom: 1px solid var(--outline-grey);
      z-index: 90;
      padding: 5px 0;
      min-height: 40px;
      box-sizing: border-box;
    }

    .header-left {
    gap: 0px !important;
    margin: 0px !important;
    padding: 0px !important;
    }

    .help-header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--spacing-md);
      min-height: var(--button-height);
      width: var(--container-width);
      max-width: 1200px;
      margin: 0 auto;
      padding: 2px 0px;
      box-sizing: border-box;
    }

    .help-content-wrapper { width: 100%; }
    .help-body { padding: var(--spacing-lg) 0; }

    .help-overlay .close-help {
      background-color: var(--bg-color);
      color: var(--primary-color);
      padding: 0px 8px;
      margin-right: 0px;
      height: 26px;
      font-size: var(--button-font-size);
      border-radius: 7px;
      border: none;
      cursor: pointer;
      font-family: inherit;
      font-weight: 500;
      user-select: none;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      flex-shrink: 0;
      width: fit-content !important;
      outline: 1px solid var(--outline-grey);
    }

    .help-overlay .close-help:hover {
      background-color: var(--primary-color);
      color: var(--bg-color);
    }

    .intro-section {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      margin: var(--spacing-md) 0 var(--spacing-md) 0;
    }

    .intro-section .contact-box {
      flex: 0 0 calc(33.333% - 10px);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      box-sizing: border-box;
      align-self: stretch; 
      flex-direction: column;
      align-items: center;
      text-align: center;     
    }

    .intro-section .subsection-group-large {
      flex: 1;
      margin: 0;
    }

    .contact-emoji {
      font-size: 45px;
      line-height: 1;
      text-align: center;
      margin-bottom: 0px;
      display: block;
    }

    .contact-emoji:hover {
      animation: wiggle 0.5s ease-in-out infinite;
    }

    @keyframes wiggle {
      0%, 100% { transform: rotate(-6deg); }
      50% { transform: rotate(6deg); }
    }

    .contact-box .support-title {
      margin: 0;
      text-align: center;
    }

    @media (max-width: 540px) {
      .intro-section {
        flex-direction: column;
        align-items: stretch;
      }
      .intro-section .contact-box {
        flex: none;
        width: 100%;
        align-self: auto;
      }
      .intro-section .subsection-group-large {
        margin: 0;
      }
    }

    .demo-inline-col {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 14px;
      flex: 1;
    }

    .demo-inline-text-group {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 0;
    }

    .demo-inline-title {
      font-weight: 600;
      font-size: 15px;
      color: var(--primary-color);
      margin: 0 0 4px 0;
      padding-top: 4px;
    }

    .demo-row-inline {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 14px;
    }

    .demo-card-inline {
      flex: 0 0 auto;
      width: 144px;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .demo-frame-inline {
      width: 144px;
      height: 144px;
      border-radius: 7px;
      overflow: hidden;
      border: 1px solid var(--outline-grey);
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      background: var(--bibtex-bg);
    }

    .demo-frame-inline img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .demo-inline-text {
      flex: 1 1 0;
      min-width: 0;
      margin: 0;
      padding-top: 4px;
    }

    @media (max-width: 540px) {
      .demo-row-inline {
        flex-wrap: wrap;
        gap: 20px 14px;
      }
      .demo-inline-col {
        flex-direction: column;
        flex: 0 0 calc(50% - 7px);
        gap: 8px;
      }
      .demo-card-inline {
        width: 100%;
      }
      .demo-frame-inline {
        width: 100%;
        height: auto;
        aspect-ratio: 1 / 1;
      }
      .demo-inline-text-group {
        width: 100%;
      }
      .demo-inline-text {
        width: 100%;
        flex: none;
        padding-top: 0;
      }
    }

    .demo-row-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .demo-col-label {
      font-size: 15px;
      font-weight: 600;
      color: var(--primary-color);
      margin: 0;
      user-select: none;
    }

    .demo-row {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 16px;
      margin: 12px 0 20px;
    }

    .demo-row .demo-card {
      flex: 0 0 auto;
      width: 290px;
      margin: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .demo-row .demo-frame {
      width: 290px;
      height: 290px;
      border-radius: 10px;
      overflow: hidden;
      border: 1px solid var(--outline-grey);
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      background: var(--bibtex-bg);
    }

    .demo-row .demo-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .demo-row .support-text {
      margin: 0;
      padding-top: 4px;
    }

    @media (max-width: 480px) {
      .demo-row {
        flex-direction: column;
      }
      .demo-row .demo-card,
      .demo-row .demo-frame {
        width: 100%;
        height: auto;
        aspect-ratio: 1 / 1;
      }
    }

    .support-text {
      font-size: var(--standard-font-size);
      margin-bottom: var(--spacing-md);
      font-weight: 500;
      color: var(--text-color);
      line-height: 1.6;
    }

    .custom-list {
      color: var(--text-color);
      margin: 0px 0;
      padding-left: 0px;
      line-height: 1.6;
      font-size: var(--standard-font-size);
      font-weight: 500;
      list-style: none;
    }

    .custom-list li {
      margin-bottom: 8px;
      position: relative;
      padding-left: 18px;
    }

    .custom-list li::before {
      content: '-';
      position: absolute;
      left: 0;
      color: var(--primary-color);
      font-size: 14px;
      font-weight: 900;
      line-height: 1.6;
    }

    .intro-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin: 14px 0 14px;
    }

    .intro-chips .tag {
      font-size: 13px;
      padding: 4px 9px;
      outline: 1px solid var(--outline-grey);
      background-color: var(--bg-color);
      border-radius: 7px;
    }

    .help-header .intro-chips {
      margin: 0;
    }

    .chip-link {
      cursor: pointer;
      text-decoration: none;
    }

    .chip-link:hover {
      outline: 0px solid var(--primary-color);
      background-color: var(--primary-color);
      color: var(--button-text);
    }

    .static-panel {
      background: var(--bibtex-bg);
      border: 1px solid var(--outline-grey);
      border-radius: 12px;
      padding: 14px 14px;
      margin-bottom: 6px;
    }

    .section-title {
      font-size: var(--title-font-size);
      font-weight: 600;
      margin-top: var(--spacing-xl);
      margin-bottom: var(--spacing-sm);
      padding-bottom: 0;
      border-bottom: none;
      user-select: none;
    }

    .subsection-group-label {
      font-size: var(--title-font-size);
      font-weight: 600;
      color: var(--text-color);
      margin: var(--spacing-md) 0 var(--spacing-xs) 0;
      user-select: none;
    }

    .subsection-group-label-box {
      font-size: var(--title-font-size-smaller);
      font-weight: 600;
      color: var(--primary-color);
      margin-bottom: var(--spacing-xs);
      margin-top: 0px !important;
      spacing: 0px !important;
      user-select: none;
    }

    .subsection-group-large {
      font-size: var(--title-font-size);
      font-weight: 500;
      color: var(--text-color);
      margin: var(--spacing-md) 0 var(--spacing-xs) 0;
      user-select: none;
    }

    .support-title {
      margin-bottom: var(--spacing-md);
      margin-top: var(--spacing-lg);
      color: var(--primary-color);
      font-size: var(--title-font-size);
      user-select: none;
      font-weight: 500;
    }

    .contact-box {
      padding: 10px 20px;
      outline: 1px solid var(--outline-grey);
      background-color: var(--bibtex-bg);
      border-radius: 12px;
      margin: 20px 0;
      user-select: none !important;
      display: flex;
      transition: transform 0.5s ease;
    }

    .contact-box:hover {
      animation: heartbeat 1.2s ease-in-out infinite;
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.21);
      transition: transform 0.5s ease;
    }

    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      10%       { transform: scale(1.02); }
      20%       { transform: scale(1); }
      30%       { transform: scale(1.02); }
      40%       { transform: scale(1); }
    }

    .contact-box .support-title { margin: 0; }

    .info-box {
      display: block;
      margin: 14px 0;
      padding: 14px 14px;
      background-color: color-mix(in srgb, var(--primary-color) 5%, transparent);
      border-top-right-radius: 7px;
      border-bottom-right-radius: 7px;
      border-left: 3px solid var(--primary-color);
      font-size: 14.5px;
      font-weight: 500;
      color: var(--text-color);
      line-height: 1.55;
    }

    .tag {
      display: inline-block;
      padding: 0px 5px;
      border-radius: 7px;
      margin: 0px 0;
    }

    .tag-primary {
      background-color: color-mix(in srgb, var(--primary-color) 5%, transparent);
      color: var(--primary-color);
      font-weight: 600;
      font-size: 13px;
    }

    .tag-secondary {
      background-color: var(--outline-grey);
      color: var(--text-color);
      font-family: monospace;
      font-size: 12.5px;
      font-weight: 500;
    }

    .tag-button {
      padding: 0px 0px;
      margin-bottom: 0px;
      text-decoration: underline dotted var(--primary-color);
      text-decoration-thickness: 1.5px;
      text-underline-offset: 2px;
    }
      
    .tag-button:hover {
      color: var(--primary-color);
      text-decoration-color: var(--primary-color);
    }

    .link-external {
      color: var(--text-color);
      font-weight: 500;
      text-decoration: none;
      border-radius: 7px;
      padding: 0px 2px;
      transition: background-color 0.15s ease, color 0.15s ease;
    }

    .link-external::before {
      content: '\\203A\\2009';
      font-weight: 900;
      font-size: 1.05em;
      color: var(--primary-color);
    }

    .link-external:hover {
      text-decoration: underline dotted var(--primary-color);
      text-decoration-thickness: 1.5px;
      text-underline-offset: 2px;
      color: var(--primary-color);
    }

    .accordion-item {
      border: 1px solid var(--outline-grey);
      border-radius: 12px;
      margin-bottom: 6px;
      overflow: hidden;
      background: var(--bibtex-bg);
    }

    .accordion-header {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 11px 14px;
      background: transparent;
      border: none;
      cursor: pointer;
      font-family: inherit;
      font-size: 15px;
      font-weight: 600;
      color: var(--primary-color);
      text-align: left;
      user-select: none;
      gap: 8px;
      transition: color 0.15s ease;
    }
    .accordion-header:hover {
      color: var(--primary-color);
      background: color-mix(in srgb, var(--primary-color) 15%, transparent);
    }
    .accordion-header[aria-expanded="true"] {
      color: var(--primary-color);
    }

    .accordion-indicator {
      flex-shrink: 0;
      font-weight: 300;
      font-size: 24px;
      line-height: 1;
      color: var(--grey);
      transition: transform 0.2s ease, color 0.15s ease;
      display: inline-block;
    }
    .accordion-header[aria-expanded="true"] .accordion-indicator {
      transform: rotate(45deg);
      color: var(--primary-color);
    }
    .accordion-header:hover .accordion-indicator {
      color: var(--primary-color);
    }

    .accordion-body {
      display: none;
      padding: 2px 14px 14px 14px;
    }
    .accordion-body.open {
      display: block;
    }

    [data-theme="dark"] .help-overlay {
      --bg-color: #373841;
      --text-color: #e2e8f0;
      --bibtex-bg: #2d2e35;
      --border-color: #4a5568;
      --hover-bg: #4a5568;
      --primary-color: #6EAAEB;
    }

    @media (max-width: 768px) {
      .help-body { padding: var(--spacing-md) 0; }
    }

    .help-header-inner {
      padding: 0px 0px;
      gap: var(--spacing-sm);
    }
  `;

  if (!document.getElementById('help-overlay-styles')) {
    helpStyles.id = 'help-overlay-styles';
    document.head.appendChild(helpStyles);
  }

  return helpContainer;
}

function initAccordions(container) {
  const headers = container.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const isOpen = header.getAttribute('aria-expanded') === 'true';
      const body = header.nextElementSibling;

      header.setAttribute('aria-expanded', String(!isOpen));
      body.classList.toggle('open', !isOpen);
    });
  });
}

function showHelpOverlay() {
  const existingHelp = document.getElementById('helpContainer');
  if (existingHelp) {
    existingHelp.remove();
    return;
  }

  const helpContainer = createHelpOverlay();
  helpContainer.id = 'helpContainer';

  initAccordions(helpContainer);
  initChipLinks(helpContainer);

  helpContainer.querySelector('#helpCloseBtn').addEventListener('click', () => {
    helpContainer.remove();
  });

  helpContainer.addEventListener('click', e => {
    if (e.target === helpContainer) helpContainer.remove();
  });

  const handleEscape = e => {
    if (e.key === 'Escape') {
      helpContainer.remove();
      document.removeEventListener('keydown', handleEscape);
    }
  };
  document.addEventListener('keydown', handleEscape);

  document.body.appendChild(helpContainer);
}

function initChipLinks(container) {
  const scrollContainer = container.querySelector('.help-content-wrapper');

  container.querySelectorAll('.chip-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').slice(1);
      const target = container.querySelector(`#${targetId}`);
      if (!target) return;

      const header = target.querySelector('.accordion-header');
      const body = target.querySelector('.accordion-body');
      if (header && body && header.getAttribute('aria-expanded') === 'false') {
        header.setAttribute('aria-expanded', 'true');
        body.classList.add('open');
      }

      const targetOffset = target.offsetTop - scrollContainer.offsetTop - 12;
      scrollContainer.scrollTo({ top: targetOffset, behavior: 'smooth' });
    });
  });
}

window.showHelpOverlay = showHelpOverlay;
