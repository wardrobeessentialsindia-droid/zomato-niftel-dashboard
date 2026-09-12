# Zomato Operations Control Tower — Vercel Only

This version has **no Apps Script, no API routes, and no environment variables**.

## Upload
1. Deploy this folder to Vercel.
2. Open the site.
3. Upload `Final Dump.xlsx` in Customer / Operations Dump.
4. Upload the login CSV in Login / Workforce Dump.
5. Click **Upload & Process**.

The browser parses the files using SheetJS and stores the processed dashboard data in browser local storage. Duplicate customer rows are skipped by `session_id`; duplicate login rows are skipped by date + agent + slot.

## Important
- Your source Excel/CSV files are never modified.
- Data is stored in the browser/device where you upload it. It is **not a shared cloud database**.
- Use **Export Backup** regularly if you want a portable historical backup.
- Use **Import Backup** to restore a JSON backup on another browser/device.
- Apps Script is no longer required.
