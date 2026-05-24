import React from "react";

type RenderHtmlTableProps = {
  html: string;
  className?: string;
};

export const RenderHtmlTable = ({
  html,
  className = "",
}: RenderHtmlTableProps) => {
  return (
    <div
      className={`table-responsive ${className}`}
      dangerouslySetInnerHTML={{
        __html: formatTableHtml(html),
      }}
    />
  );
};

const formatTableHtml = (html: string) => {
  // 1. Clean the HTML from existing inline styles, classes, and generic data attributes
  let cleanHtml = html
    .replace(/class="[^"]*"/gi, "")
    .replace(/style="[^"]*"/gi, "")
    .replace(/data-[a-zA-Z0-9\-]+="[^"]*"/gi, "")
    .replace(/analyticsid="[^"]*"/gi, "");

  // 2. Inject Bootstrap-style classes that are styled by our custom CSS in globals.css
  cleanHtml = cleanHtml
    .replace(/<table/gi, `<table class="table table-striped table-hover table-bordered"`)
    .replace(/<thead/gi, `<thead class="table-light"`)
    .replace(/<tbody/gi, `<tbody`)
    .replace(/<th([^>]*)>/gi, `<th$1>`)
    .replace(/<td([^>]*)>/gi, `<td$1>`)
    .replace(/<a /gi, `<a class="crm-table-link" `)
    .replace(/<svg /gi, `<svg style="width:16px;height:16px;display:inline-block;vertical-align:middle;" `);

  return cleanHtml;
};