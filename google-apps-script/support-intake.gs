const SHEET_NAME = "Support Requests";
const SPREADSHEET_NAME = "Gastos+ Support Requests";
const SPREADSHEET_ID_PROPERTY = "SUPPORT_SPREADSHEET_ID";

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const params = e.parameter || {};
    if (params.website) return json_({ ok: true });

    const sheet = getSheet_();
    ensureHeader_(sheet);
    sheet.appendRow([
      new Date(),
      params.subject || "",
      params.email || "",
      params.category || "",
      params.version || "",
      params.details || "",
      params.steps || "",
      params.locale || "",
      params.theme || "",
      params.page || "",
      params.userAgent || "",
      "new",
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, service: "Gastos+ support intake" });
}

function getSheet_() {
  const properties = PropertiesService.getScriptProperties();
  let spreadsheetId = properties.getProperty(SPREADSHEET_ID_PROPERTY);
  let spreadsheet = spreadsheetId ? SpreadsheetApp.openById(spreadsheetId) : null;

  if (!spreadsheet) {
    spreadsheet = SpreadsheetApp.create(SPREADSHEET_NAME);
    properties.setProperty(SPREADSHEET_ID_PROPERTY, spreadsheet.getId());
  }

  return spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.appendRow([
    "Created at",
    "Subject",
    "Email",
    "Category",
    "Environment",
    "Details",
    "Steps",
    "Locale",
    "Theme",
    "Page",
    "User agent",
    "Status",
  ]);
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
