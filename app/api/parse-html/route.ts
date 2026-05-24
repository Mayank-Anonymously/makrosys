import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export interface LeadData {
  placeUrl?: string;
  title?: string;
  rating?: string;
  reviewCount?: string;
  category?: string;
  address?: string;
  plusCode?: string;
  website?: string;
  phoneNumber?: string;
  currentStatus?: string;
  info?: string;
  imgUrl?: string;
  isClaimed?: string;
  saturday?: string;
  sunday?: string;
  monday?: string;
  tuesday?: string;
  wednesday?: string;
  thursday?: string;
  friday?: string;
  latitude?: string;
  longitude?: string;
  query?: string;
  timestamp?: string;
  isBlackOwned?: string;
  attributes?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { html } = await req.json();
    if (!html || typeof html !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid HTML string in request body" },
        { status: 400 }
      );
    }

    // Load HTML using cheerio
    const $ = cheerio.load(`<table><tbody>${html}</tbody></table>`);
    const leads: LeadData[] = [];

    $("tr").each((_, trEl) => {
      const cells = $(trEl).find("td, th");
      if (cells.length === 0) return;

      const lead: LeadData = {};
      let hasData = false;

      cells.each((_, cellEl) => {
        const testId = $(cellEl).attr("data-testid") || "";
        const match = testId.match(/^\d+_(.+)$/);
        if (match) {
          const field = match[1] as keyof LeadData;

          const anchor = $(cellEl).find("a");
          let value = "";

          if (anchor.length > 0) {
            value = anchor.attr("title") || anchor.attr("href") || anchor.text();
          } else {
            const spanWithTitle = $(cellEl).find("span[title]");
            if (spanWithTitle.length > 0) {
              value = spanWithTitle.attr("title") || spanWithTitle.text();
            } else {
              const span = $(cellEl).find("span");
              value = span.length > 0 ? span.text() : $(cellEl).text();
            }
          }

          lead[field] = value.trim();
          hasData = true;
        }
      });

      // Avoid adding headers or empty rows
      if (hasData && lead.title && lead.title !== "Title") {
        leads.push(lead);
      }
    });

    return NextResponse.json({ leads });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
