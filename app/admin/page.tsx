"use client";

import { useState, useEffect, useMemo } from "react";
import { html as initialHtml } from "./initialData";

export interface Lead {
  placeUrl: string;
  title: string;
  rating: string;
  reviewCount: string;
  category: string;
  address: string;
  plusCode: string;
  website: string;
  phoneNumber: string;
  currentStatus: string;
  info: string;
  imgUrl: string;
  isClaimed: string;
  saturday: string;
  sunday: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  latitude: string;
  longitude: string;
  query: string;
  timestamp: string;
  isBlackOwned: string;
  attributes: string;
}

// Client-side HTML parser for the initial pre-loaded state
function parseHtmlToLeads(rawHtml: string): Lead[] {
  if (typeof window === "undefined") return [];
  const parser = new DOMParser();
  // Wrap raw tbody inside table structure for safe DOM parsing
  const doc = parser.parseFromString(`<table><tbody>${rawHtml}</tbody></table>`, "text/html");
  const trs = doc.querySelectorAll("tr");
  const parsedLeads: Lead[] = [];

  trs.forEach((tr) => {
    const cells = tr.querySelectorAll("td, th");
    if (cells.length === 0) return;

    const lead: Partial<Lead> = {};
    let hasData = false;

    cells.forEach((cell) => {
      const testId = cell.getAttribute("data-testid") || "";
      const match = testId.match(/^\d+_(.+)$/);
      if (match) {
        const field = match[1] as keyof Lead;
        const anchor = cell.querySelector("a");
        let value = "";

        if (anchor) {
          value = anchor.getAttribute("title") || anchor.getAttribute("href") || anchor.textContent || "";
        } else {
          const spanWithTitle = cell.querySelector("span[title]");
          if (spanWithTitle) {
            value = spanWithTitle.getAttribute("title") || spanWithTitle.textContent || "";
          } else {
            const span = cell.querySelector("span");
            value = span ? span.textContent || "" : cell.textContent || "";
          }
        }
        lead[field] = value.trim();
        hasData = true;
      }
    });

    if (hasData && lead.title && lead.title !== "Title") {
      parsedLeads.push(lead as Lead);
    }
  });

  return parsedLeads;
}

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Search & Filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [claimedFilter, setClaimedFilter] = useState("All");

  // Import Modal state
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importHtml, setImportHtml] = useState("");
  const [isImporting, setIsImporting] = useState(false);
  const [importMode, setImportMode] = useState<"append" | "overwrite">("append");
  const [importError, setImportError] = useState("");
  const [importSuccess, setImportSuccess] = useState(false);

  // Initialize leads state on mount using the fast local DOMParser
  useEffect(() => {
    queueMicrotask(() => {
      const initialLeads = parseHtmlToLeads(initialHtml);
      setLeads(initialLeads);
      setIsLoaded(true);
    });
  }, []);

  // Compute unique categories dynamically from current leads for the filter dropdown
  const categories = useMemo(() => {
    const set = new Set<string>();
    leads.forEach((l) => {
      if (l.category) set.add(l.category);
    });
    return ["All", ...Array.from(set)];
  }, [leads]);

  // Dynamic Metrics calculations
  const totalLeads = leads.length;
  
  const avgRating = useMemo(() => {
    if (leads.length === 0) return "0.0";
    const ratings = leads
      .map((l) => parseFloat(l.rating))
      .filter((r) => !isNaN(r));
    if (ratings.length === 0) return "0.0";
    const sum = ratings.reduce((acc, curr) => acc + curr, 0);
    return (sum / ratings.length).toFixed(1);
  }, [leads]);

  const scrapeSuccessRate = useMemo(() => {
    if (leads.length === 0) return "0%";
    const validLeads = leads.filter((l) => l.website || l.phoneNumber).length;
    return `${Math.round((validLeads / leads.length) * 100)}%`;
  }, [leads]);

  // Real-time dynamic search and filter matching
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      // 1. Search term match (Title, Category, Address, or Phone)
      const matchesSearch =
        !searchTerm ||
        [lead.title, lead.category, lead.address, lead.phoneNumber]
          .some((val) => val?.toLowerCase().includes(searchTerm.toLowerCase()));

      // 2. Category filter match
      const matchesCategory =
        categoryFilter === "All" || lead.category === categoryFilter;

      // 3. Claimed status match
      const matchesClaimed =
        claimedFilter === "All" ||
        (claimedFilter === "Claimed" && lead.isClaimed === "true") ||
        (claimedFilter === "Unclaimed" && lead.isClaimed !== "true");

      return matchesSearch && matchesCategory && matchesClaimed;
    });
  }, [leads, searchTerm, categoryFilter, claimedFilter]);

  // Dynamic CSV Export from active state (fully escaped and BOM prefixed)
  const handleExportCSV = () => {
    if (filteredLeads.length === 0) return;

    const headers = [
      "Place URL", "Title", "Rating", "Reviews", "Category", "Address", "Plus Code",
      "Website", "Phone", "Status", "Info", "Image", "Claimed", "Sat", "Sun", "Mon",
      "Tue", "Wed", "Thu", "Fri", "Lat", "Lng", "Query", "Timestamp", "Black Owned", "Attributes"
    ];

    const csvRows = [headers.join(",")];

    filteredLeads.forEach((lead) => {
      const values = [
        lead.placeUrl || "",
        lead.title || "",
        lead.rating || "",
        lead.reviewCount || "",
        lead.category || "",
        lead.address || "",
        lead.plusCode || "",
        lead.website || "",
        lead.phoneNumber || "",
        lead.currentStatus || "",
        lead.info || "",
        lead.imgUrl || "",
        lead.isClaimed || "",
        lead.saturday || "",
        lead.sunday || "",
        lead.monday || "",
        lead.tuesday || "",
        lead.wednesday || "",
        lead.thursday || "",
        lead.friday || "",
        lead.latitude || "",
        lead.longitude || "",
        lead.query || "",
        lead.timestamp || "",
        lead.isBlackOwned || "",
        lead.attributes || ""
      ].map((val) => {
        const escaped = ("" + val).replace(/"/g, '""');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(","));
    });

    const csvContent = "\ufeff" + csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `makrosys_crm_leads_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Submit scraped HTML to backend API and handle response
  const handleImportHtml = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!importHtml.trim()) {
      setImportError("Please paste some scraped HTML first.");
      return;
    }

    setImportError("");
    setImportSuccess(false);
    setIsImporting(true);

    try {
      const response = await fetch("/api/parse-html", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ html: importHtml }),
      });

      if (!response.ok) {
        throw new Error("Failed to parse the HTML string. Check your formatting.");
      }

      const data = await response.json();
      const parsedNewLeads: Lead[] = data.leads || [];

      if (parsedNewLeads.length === 0) {
        setImportError("No valid leads found in the pasted HTML. Make sure it contains table rows.");
        setIsImporting(false);
        return;
      }

      if (importMode === "overwrite") {
        setLeads(parsedNewLeads);
      } else {
        // Prepend new leads so they appear at the top of the table
        setLeads((prev) => [...parsedNewLeads, ...prev]);
      }

      setImportSuccess(true);
      setImportHtml("");
      // Hide modal after a quick delay for feedback
      setTimeout(() => {
        setIsImportModalOpen(false);
        setImportSuccess(false);
      }, 1200);
    } catch (err: unknown) {
      setImportError(err instanceof Error ? err.message : "An unexpected error occurred during lead extraction.");
    } finally {
      setIsImporting(false);
    }
  };

  const handleRefresh = () => {
    const initialLeads = parseHtmlToLeads(initialHtml);
    setLeads(initialLeads);
    setSearchTerm("");
    setCategoryFilter("All");
    setClaimedFilter("All");
  };

  if (!isLoaded) {
    return (
      <div className="crm-admin-theme" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#0a0f1d", color: "#a5b4fc" }}>
        <div style={{ textAlign: "center" }}>
          <div className="crm-footer-status-dot" style={{ width: 14, height: 14, display: "inline-block", background: "#6366f1", boxShadow: "0 0 10px #6366f1", marginBottom: 15 }} />
          <div>Initializing Makrosys B2B CRM Engine...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="crm-admin-theme">
      <div className="crm-container">
        
        {/* Sidebar */}
        <aside className="crm-sidebar">
          <div className="crm-sidebar-logo">
            <div className="crm-logo-dot" />
            Makrosys CRM
          </div>
          <nav className="crm-sidebar-nav">
            <a href="#" className="crm-sidebar-link active">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/></svg>
              Dashboard
            </a>
            <a href="#" className="crm-sidebar-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
              Lead Scraper
            </a>
            <a href="#" className="crm-sidebar-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"/></svg>
              Campaigns
              <span style={{ marginLeft: "auto", fontSize: "0.7rem", padding: "1px 6px", borderRadius: "10px", background: "rgba(99, 102, 241, 0.2)", color: "#818cf8" }}>Active</span>
            </a>
            <a href="#" className="crm-sidebar-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
              Analytics
            </a>
            <a href="#" className="crm-sidebar-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
              Settings
            </a>
          </nav>
          <div className="crm-sidebar-profile">
            <div className="crm-profile-avatar">M</div>
            <div className="crm-profile-info">
              <div className="crm-profile-name">Mayank</div>
              <div className="crm-profile-role">Agency Partner</div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="crm-main">
          
          {/* Header */}
          <header className="crm-header">
            <div className="crm-header-left">
              <div className="crm-breadcrumbs">CRM &gt; Dental Texas Scrape</div>
              <h1 className="crm-title">Lead Processing Dashboard</h1>
            </div>
            <div className="crm-header-right">
              <div className="crm-status-indicator">
                <span className="crm-footer-status-dot" style={{ background: "#10b981", boxShadow: "0 0 8px #10b981" }} />
                Real-Time Scraper Active
              </div>
            </div>
          </header>

          <main className="crm-content">
            
            {/* Action Bar */}
            <div className="crm-action-bar">
              <div className="crm-search-box">
                <svg className="crm-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input
                  type="text"
                  placeholder="Search leads by name, phone, address..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="crm-search-input"
                />
              </div>
              <div className="crm-actions-group">
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  {/* Claimed Filter */}
                  <select
                    value={claimedFilter}
                    onChange={(e) => setClaimedFilter(e.target.value)}
                    className="crm-btn"
                    style={{ cursor: "pointer", borderRadius: "8px", padding: "8px 12px" }}
                  >
                    <option value="All">All Claimed Status</option>
                    <option value="Claimed">Claimed</option>
                    <option value="Unclaimed">Unclaimed</option>
                  </select>

                  {/* Category Filter */}
                  <select
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                    className="crm-btn"
                    style={{ cursor: "pointer", borderRadius: "8px", padding: "8px 12px" }}
                  >
                    <option value="All">All Categories</option>
                    {categories.filter(c => c !== "All").map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <button className="crm-btn" onClick={handleExportCSV} id="export-excel-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  Export CSV
                </button>
                
                <button className="crm-btn crm-btn-primary" onClick={() => setIsImportModalOpen(true)}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  Import Scraped HTML
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="crm-metrics-grid">
              <div className="crm-card crm-metric-card">
                <div className="crm-metric-card-inner">
                  <div>
                    <div className="crm-metric-label">Total Leads</div>
                    <div className="crm-metric-value-container">
                      <span className="crm-metric-value">{totalLeads}</span>
                      <span className="crm-metric-trend up">↑ Live</span>
                    </div>
                  </div>
                  <div className="crm-metric-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                </div>
              </div>
              <div className="crm-card crm-metric-card">
                <div className="crm-metric-card-inner">
                  <div>
                    <div className="crm-metric-label">Avg Rating</div>
                    <div className="crm-metric-value-container">
                      <span className="crm-metric-value">{avgRating}</span>
                      <span className="crm-metric-trend info">★ Top Quality</span>
                    </div>
                  </div>
                  <div className="crm-metric-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                </div>
              </div>
              <div className="crm-card crm-metric-card">
                <div className="crm-metric-card-inner">
                  <div>
                    <div className="crm-metric-label">Scrape Success</div>
                    <div className="crm-metric-value-container">
                      <span className="crm-metric-value">{scrapeSuccessRate}</span>
                      <span className="crm-metric-trend up">↑ Connected</span>
                    </div>
                  </div>
                  <div className="crm-metric-icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Panel */}
            <div className="crm-card crm-table-panel">
              <div className="crm-table-panel-header">
                <div>
                  <div className="crm-table-panel-title">Active Lead Board</div>
                  <div className="crm-table-panel-subtitle">
                    Showing {filteredLeads.length} of {totalLeads} matching leads
                  </div>
                </div>
                <button className="crm-btn" onClick={handleRefresh} style={{ padding: "8px 14px", fontSize: "0.8rem" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
                  Reset
                </button>
              </div>

              {/* Data Table */}
              <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                  <thead className="table-light">
                    <tr>
                      <th>Title</th>
                      <th>Phone</th>
                      <th>Rating</th>
                      <th>Reviews</th>
                      <th>Category</th>
                      <th>Address</th>
                      <th>Website</th>
                      <th>Claimed</th>
                      <th>Status</th>
                      <th>Hours (Mon)</th>
                      <th>Hours (Sat)</th>
                      <th>Lat</th>
                      <th>Lng</th>
                      <th>Timestamp</th>
                      <th>Place URL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan={15} style={{ textAlign: "center", padding: "40px", color: "#6366f1" }}>
                          No leads matched your search or filter options.
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((lead, idx) => (
                        <tr key={idx}>
                          <td style={{ fontWeight: 600, color: "#0f172a" }}>{lead.title || "-"}</td>
                          <td style={{ color: "#38bdf8", whiteSpace: "nowrap" }}>{lead.phoneNumber || "-"}</td>
                          <td style={{ textAlign: "center" }}>
                            <span style={{ padding: "3px 8px", borderRadius: "12px", background: "rgba(245,158,11,0.15)", color: "#fbbf24", fontWeight: 600 }}>
                              ★ {lead.rating || "-"}
                            </span>
                          </td>
                          <td style={{ textAlign: "center" }}>{lead.reviewCount || "-"}</td>
                          <td style={{ color: "#475569" }}>{lead.category || "-"}</td>
                          <td style={{ fontSize: "0.85rem", maxWidth: "250px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} title={lead.address}>
                            {lead.address || "-"}
                          </td>
                          <td>
                            {lead.website ? (
                              <a href={lead.website} target="_blank" rel="noopener noreferrer" className="crm-table-link">
                                Website ↗
                              </a>
                            ) : (
                              <span style={{ color: "rgba(255,255,255,0.2)" }}>-</span>
                            )}
                          </td>
                          <td style={{ textAlign: "center" }}>
                            <span style={{ 
                              padding: "2px 6px", 
                              borderRadius: "4px", 
                              fontSize: "0.75rem", 
                              fontWeight: 600,
                              background: lead.isClaimed === "true" ? "rgba(16,185,129,0.15)" : "rgba(239,68,68,0.15)", 
                              color: lead.isClaimed === "true" ? "#34d399" : "#f87171" 
                            }}>
                              {lead.isClaimed === "true" ? "Claimed" : "Unclaimed"}
                            </span>
                          </td>
                          <td style={{ fontSize: "0.8rem", whiteSpace: "nowrap" }}>{lead.currentStatus || "-"}</td>
                          <td style={{ fontSize: "0.8rem", whiteSpace: "nowrap" }}>{lead.monday || "-"}</td>
                          <td style={{ fontSize: "0.8rem", whiteSpace: "nowrap" }}>{lead.saturday || "-"}</td>
                          <td style={{ fontSize: "0.8rem", color: "#64748b" }}>{lead.latitude || "-"}</td>
                          <td style={{ fontSize: "0.8rem", color: "#64748b" }}>{lead.longitude || "-"}</td>
                          <td style={{ fontSize: "0.8rem", whiteSpace: "nowrap" }}>{lead.timestamp || "-"}</td>
                          <td>
                            {lead.placeUrl ? (
                              <a href={lead.placeUrl} target="_blank" rel="noopener noreferrer" className="crm-table-link">
                                Maps URL ↗
                              </a>
                            ) : (
                              "-"
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </main>

          {/* Footer */}
          <footer className="crm-footer">
            <span>© 2026 Makrosys Solutions — CRM Admin v1.1 (Dynamic Scraper Engine)</span>
            <div className="crm-footer-right">
              <div className="crm-footer-status">
                <span className="crm-footer-status-dot" style={{ background: "#10b981" }} />
                All processing tunnels online
              </div>
              <span>Help &amp; Docs</span>
            </div>
          </footer>

        </div>
      </div>

      {/* HTML Import Modal */}
      {isImportModalOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(3, 7, 18, 0.8)",
          backdropFilter: "blur(8px)"
        }}>
          <div style={{
            background: "#0c1329",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(99, 102, 241, 0.1)",
            borderRadius: "16px",
            width: "90%",
            maxWidth: "600px",
            padding: "24px",
            color: "#e0e7ff"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ margin: 0, fontSize: "1.3rem", fontWeight: 700, color: "#818cf8" }}>Import Scraped HTML &lt;tbody&gt;</h2>
              <button 
                onClick={() => setIsImportModalOpen(false)}
                style={{ background: "transparent", border: "none", color: "#a5b4fc", cursor: "pointer", fontSize: "1.2rem" }}
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleImportHtml}>
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", color: "#94a3b8", marginBottom: "6px" }}>
                  Pasted raw &lt;tbody&gt; or list of scraped table rows &lt;tr&gt;
                </label>
                <textarea
                  placeholder="Paste HTML here... e.g. <tr class='group'>...</tr>"
                  value={importHtml}
                  onChange={(e) => setImportHtml(e.target.value)}
                  style={{
                    width: "100%",
                    height: "220px",
                    background: "#050814",
                    border: "1px solid rgba(99, 102, 241, 0.2)",
                    borderRadius: "8px",
                    padding: "12px",
                    color: "#f8fafc",
                    fontFamily: "monospace",
                    fontSize: "0.8rem",
                    resize: "vertical",
                    outline: "none"
                  }}
                />
              </div>

              {/* Import options */}
              <div style={{ display: "flex", gap: "20px", marginBottom: "20px", background: "rgba(99, 102, 241, 0.05)", padding: "12px", borderRadius: "8px", border: "1px solid rgba(99, 102, 241, 0.1)" }}>
                <div>
                  <span style={{ fontSize: "0.85rem", color: "#94a3b8", display: "block", marginBottom: "4px" }}>Import Mode</span>
                  <div style={{ display: "flex", gap: "12px" }}>
                    <label style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
                      <input 
                        type="radio" 
                        name="importMode" 
                        value="append" 
                        checked={importMode === "append"} 
                        onChange={() => setImportMode("append")}
                      />
                      Append leads
                    </label>
                    <label style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
                      <input 
                        type="radio" 
                        name="importMode" 
                        value="overwrite" 
                        checked={importMode === "overwrite"} 
                        onChange={() => setImportMode("overwrite")}
                      />
                      Overwrite current
                    </label>
                  </div>
                </div>
              </div>

              {/* Status Display */}
              {importError && (
                <div style={{ color: "#f87171", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", padding: "10px", fontSize: "0.85rem", marginBottom: "16px" }}>
                  ⚠️ {importError}
                </div>
              )}

              {importSuccess && (
                <div style={{ color: "#34d399", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.2)", borderRadius: "8px", padding: "10px", fontSize: "0.85rem", marginBottom: "16px" }}>
                  ✓ Successfully extracted and imported leads!
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
                <button
                  type="button"
                  onClick={() => setIsImportModalOpen(false)}
                  className="crm-btn"
                  disabled={isImporting}
                  style={{ background: "#131a35" }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="crm-btn crm-btn-primary"
                  disabled={isImporting}
                  style={{ minWidth: "120px" }}
                >
                  {isImporting ? "Processing..." : "Extract Leads"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
